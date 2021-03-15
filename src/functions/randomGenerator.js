module.exports = function (x,y)
{
    return Math.floor(Math.random() * Math.floor(y - x + 1) + x);
}