const Consts = require("../Utils/Consts");

module.exports = {
    get: (Tag) => Consts.endPoint + "/game/" + Consts.Keys.GameID + "/datapack/?tag=" + Tag
}