const Command = require('../Command/connection');
const Consts = require('../Utils/Consts');
const CommandActions = require('../Utils/CommandActions');

module.exports = {
    Subscribe: async function (ChannelName) {
        Command.Client.write(Buffer.from(JSON.stringify({
            "0": Consts.CommandToken,
            "1": CommandActions.apply("ActionSubscribe"),
            "3": ChannelName
        })))
    },
    UnSubscribe: async function (ChannelName) {
        Command.Client.write(Buffer.from(JSON.stringify({
            "0": Consts.CommandToken,
            "1": CommandActions.apply("ActionUnSubscribe"),
            "3": ChannelName
        })))
    },
    SendMessage: async function (ChannelName, Message) {
        Command.Client.write(Buffer.from(JSON.stringify({
            "0": Consts.CommandToken,
            "1": CommandActions.apply("ActionChat"),
            "2": '{ "1": "' + ChannelName + '" , "3": "' + Message + '" }'
        })))
    }
}