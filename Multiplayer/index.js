const Command = require('../Command/connection');
const Consts = require('../Utils/Consts');
const CommandActions = require('../Utils/CommandActions');
const GateMan = require('../Utils/GateMan');

module.exports = {
    AutoMatch: async function (Max, Min, Role, SyncMode) {
        if (!GateMan.CommandAvailable()) return false;
        Command.getgetClient()().write(Buffer.from(JSON.stringify({
            "0": Consts.CommandToken,
            "1": CommandActions("ActionAutoMatch"),
            "2": JSON.stringify({
                "8": Role,
                "7": SyncMode,
                "6": Max,
                "5": Min
            })
        })))
    },
    CreateRoom: async function (Max, Min, Role, SyncMode, Private = false, Persist = false) {
        if (!GateMan.CommandAvailable()) return false;
        Command.getClient().write(Buffer.from(JSON.stringify({
            "0": Consts.CommandToken,
            "1": CommandActions("ActionCreateRoom"),
            "2": JSON.stringify({
                "10": Persist,
                "9": Private,
                "8": Role,
                "7": SyncMode,
                "6": Max,
                "5": Min
            })
        })));
    },
    GetRooms: async function (Role, Max = 10) {
        if (!GateMan.CommandAvailable()) return false;
        Command.getClient().write(Buffer.from(JSON.stringify({
            "0": Consts.CommandToken,
            "1": CommandActions("ActionGetRooms"),
            "2": JSON.stringify({
                "8": Role,
                "6": Max,
            })
        })))
    },
    Join: async function (ID) {
        if (!GateMan.CommandAvailable()) return false;
        Command.getClient().write(Buffer.from(JSON.stringify({
            "0": Consts.CommandToken,
            "1": CommandActions("ActionJoin"),
            "2": JSON.stringify({
                "0": ID
            })
        })))
    },
    InviteUser: async function (RoomID, UserID) {
        if (!GateMan.CommandAvailable()) return false;
        Command.getClient().write(Buffer.from(JSON.stringify({
            "0": Consts.CommandToken,
            "1": CommandActions("ActionInviteUser"),
            "2": JSON.stringify({
                "0": RoomID,
                "1": UserID,
            })
        })));
    },
    // KickUser: async function () {

    // },
    GetInviteList: async function (SyncMode) {
        if (!GateMan.CommandAvailable()) return false;
        Command.getClient().write(Buffer.from(JSON.stringify({
            "0": Consts.CommandToken,
            "1": CommandActions("ActionGetInviteList"),
            "2": JSON.stringify({
                "7": SyncMode,
            })
        })));
    },
    AcceptInvite: async function (InviteID) {
        if (!GateMan.CommandAvailable()) return false;
        Command.getClient().write(Buffer.from(JSON.stringify({
            "0": Consts.CommandToken,
            "1": CommandActions("ActionAcceptInvite"),
            "2": JSON.stringify({
                "2": InviteID,
            })
        })));
    },
    FindUser: async function (UserQuery, Max) {
        if (!GateMan.CommandAvailable()) return false;
        Command.getClient().write(Buffer.from(JSON.stringify({
            "0": Consts.CommandToken,
            "1": CommandActions("ActionFindUser"),
            "2": JSON.stringify({
                "1": UserQuery,
                "6": Max
            })
        })));
    },
}
