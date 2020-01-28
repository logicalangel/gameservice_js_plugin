const Command = require('../Command/connection');
const Consts = require('../Utils/Consts');
const CommandActions = require('../Utils/CommandActions');
const GateMan = require('../Utils/GateMan');

module.exports = {
    Subscribe: async function (ChannelName) {
        if (!GateMan.CommandAvailable()) return false;
        Command.getClient().write(Buffer.from(JSON.stringify({
            "0": Consts.CommandToken,
            "1": CommandActions("ActionSubscribe"),
            "3": ChannelName
        })))
    },
    UnSubscribe: async function (ChannelName) {
        if (!GateMan.CommandAvailable()) return false;
        Command.getClient().write(Buffer.from(JSON.stringify({
            "0": Consts.CommandToken,
            "1": CommandActions("ActionUnSubscribe"),
            "3": ChannelName
        })))
    },
    SendMessage: async function (ChannelName, Message) {
        if (!GateMan.CommandAvailable()) return false;
        Command.getClient().write(Buffer.from(JSON.stringify({
            "0": Consts.CommandToken,
            "1": CommandActions("ActionChat"),
            "2": '{ "1": "' + ChannelName + '" , "3": "' + Message + '" }'
        })))
    }
}