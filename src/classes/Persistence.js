var Disk = [];

class Persistence
{
    constructor(KeyName,Data)
    {
        Disk[KeyName] = Data;
        return Disk[KeyName];
    }
}


module.exports = {

    class: Persistence,
    getData: function (KeyName)
    {
        if(Disk[KeyName] == undefined)
        {
            return null;
        }else{
            return Disk[KeyName];
        }
    }

};