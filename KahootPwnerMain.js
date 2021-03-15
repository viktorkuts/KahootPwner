// Libraries
const KahootLib = require('kahoot.js-updated');
const fs        = require('fs');
const Persist   = require('./src/classes/Persistence');

// Constants
const Package   = require('./package.json');
const Version   = Package.version;
const Author    = Package.author;
const Name      = Package.name;

// Variables
var LoopIndex = 1;
var Events,Clients,Quiz,Answers;

// Argument Check
let Arguments = process.argv.splice(2);

if ( Arguments[0] == undefined || Arguments[1] == undefined || Arguments[2] == undefined )
{
    DisplayMessage(`Usage: ${Package.scripts.test} [Kahoot Pin:number] [Username:string] [Bot Amount:number]`);
    process.exit(0);
}

if ( isNaN(Number(Arguments[0])) )
{
    DisplayMessage(`Kahoot Pin must be a valid number!\nUsage: ${Package.scripts.test} [Kahoot Pin:number] [Username:string] [Bot Amount:number]`);
    process.exit(0);
}

if ( isNaN(Number(Arguments[2])) )
{
    DisplayMessage(`Bot Amount must be a valid number!\nUsage: ${Package.scripts.test} [Kahoot Pin:number] [Username:string] [Bot Amount:number]`);
    process.exit(0);
}

// Functions
function DisplayMessage(Message)
{
    process.stdout.write(`\n${Name} - v${Version} - ${Author}\n${Message}\n`);
}

function HaltLoop(Pin,User,Amount,Delay)
{

    Pin     = Number(Pin);
    User    = String(User);
    Amount  = Number(Amount);
    Delay   = Number(Delay);

    setTimeout(() => {
        let Klient = new KahootLib({
            extraData: true
        });
        Klient.join(Pin,User + LoopIndex)
        .catch((Err) => {
            process.stdout.write('\033c');
            DisplayMessage(`Error! ${Err.description}!`);
            process.exit(0);
        })

            Persist.getData('Events').map((UnrequiredEvent) => {
                var Event = require(`./src/events/${UnrequiredEvent}`);
                Klient.on(Event.systemName,(...EvtArgs) => {
                    Event.bindedFunction(Klient,EvtArgs);
                });
            });

        LoopIndex++;
        if (LoopIndex <= Amount)
        {
            HaltLoop(Pin,User,Amount,Delay);
        }

    },Delay);

}

// Filesystem /\ Events
Events      = new Persist.class('Events',[])
Clients     = new Persist.class('Clients',[]);
Quiz        = new Persist.class('Quiz',[]); 
Answers     = new Persist.class('Answers',[]);

Quiz.index  = 0
Quiz.total  = 0
Quiz.status = "In Lobby"
Answers.aca = []
Answers.acc = 0
Answers.cnt = 0
Answers.hca = false

fs.readdirSync('./src/events').filter((File) => File.endsWith('.js')).map((File) => { Events.push(File) });

// Module Loader /\ Client Initiator
HaltLoop(Arguments[0], Arguments[1], Arguments[2], 400);

// Telemetry
setInterval(() => {
    process.stdout.write('\033c');
    DisplayMessage(`\nTelemetry:\n\nBots Online: ${Clients.length}/${Arguments[2]}\nBots Answered: ${Answers.cnt}/${Clients.length}\nAccuracy: ${Answers.acc}%\nQuiz Number: ${Quiz.index}/${Quiz.total}\nStatus: ${Quiz.status}`);
},250)