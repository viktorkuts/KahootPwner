// Libraries
const Persist = require('../classes/Persistence');

// Storage
const Clients = Persist.getData("Clients");
const Quiz    = Persist.getData("Quiz");
const Answers = Persist.getData("Answers");

// Functions
const rand = require('../functions/randomGenerator');

module.exports = {
    systemName: "QuestionEnd",
    bindedFunction: function(Klient, Question)
    {
        Answers.cnt = 0;
        
        Quiz.status = "Question Ended; Waiting for next question...";
    }
}