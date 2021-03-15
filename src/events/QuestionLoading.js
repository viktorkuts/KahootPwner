// Libraries
const Persist = require('../classes/Persistence');

// Storage
const Quiz    = Persist.getData("Quiz");
const Answers = Persist.getData("Answers");

// Functions
const rand = require('../functions/randomGenerator');

module.exports = {
    systemName: "QuestionReady",
    bindedFunction: function(Klient, Question)
    {
        Quiz.index  = Question[0].index + 1;
        Quiz.total  = Question[0].quizQuestionAnswers.length;
        Quiz.status = "Question Loading; Waiting for question...";
    }
}