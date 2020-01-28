const Consts = require('./Consts');
const Command = require('../Command/connection');

module.exports = {
    isLoggedIn: function () {
        return Consts.userToken != undefined && Consts.userToken > 3;
    },
    isInGame: function () {
        return Consts.userToken != undefined && Consts.userToken.length > 3
            && Consts.gameToken != undefined && Consts.gameToken.length > 3;
    },
    CommandAvailable: function () {
        return Command.getClient() != undefined
            && Consts.userToken != undefined && Consts.userToken.length > 3
            && Consts.gameToken != undefined && Consts.gameToken.length > 3
            && Consts.CommandToken != undefined && Consts.CommandToken.length > 3;
    }
}