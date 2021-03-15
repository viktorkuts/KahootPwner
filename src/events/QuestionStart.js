// Libraries
const Persist = require('../classes/Persistence');

// Storage
const Clients = Persist.getData("Clients");
const Quiz    = Persist.getData("Quiz");
const Answers = Persist.getData("Answers");

// Functions
const rand = require('../functions/randomGenerator');

module.exports = {
    systemName: "QuestionStart",
    bindedFunction: function(Klient, Question)
    {
        Quiz.index  = Question[0].index + 1;
        Quiz.total  = Question[0].totalGameBlockCount;
        Quiz.status = "In Question; Answering question...";

        Question[0].answer(rand(0,Question[0].numberOfChoices - 1))
        .then(() => {
            Answers.cnt++;
        })
        .catch((Err) => {
            return;
        });
    }
}