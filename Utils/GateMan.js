const Consts = require('./Consts');

module.exports = {
    isLoggedIn: function () {
        return Consts.userToken != undefined && Consts.userToken > 3;
    },
    isInGame: function () {
        return Consts.userToken != undefined && Consts.userToken.length > 3
            && Consts.gameToken != undefined && Consts.gameToken.length > 3;
    }
}