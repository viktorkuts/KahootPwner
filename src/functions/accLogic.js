var Accuracies = []

module.exports = function(Arr)
{
    let GoodAnswers = 0;
    var Accuracy    = 0;
    Arr.map((Answers) => {
        if (Answers === true)
        {
            GoodAnswers++;
        }
    });
    Accuracy = GoodAnswers / Arr.length;
    let Sum = 0;

    if (Accuracies.length === 0)
    {
        return Accuracy / Arr.length;
    }

    Accuracies.map((Value,Index) => {
        if (Index === 0)
        {
            Sum = Sum + Accuracy;
        }else{
            Sum = Sum + (Value + Accuracies[Index - 1]);
        }
    });
    Accuracies.push(Accuracy);
    return Math.floor((Sum / Accuracies.length) / Arr.length);
}