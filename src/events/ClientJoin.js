// Libraries
const Persist = require('../classes/Persistence');

// Storage
const Clients = Persist.getData("Clients");

module.exports = {
    systemName: "Joined",
    bindedFunction: function(Klient, RoomData)
    {
        Clients.push(Klient);
    }
}