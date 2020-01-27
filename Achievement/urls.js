const Consts = require('../Utils/Consts');

module.exports = {
    "get": Consts.endPoint + "/api/v1/achievement/",
    "unlock": (AchievementID) => Consts.endPoint + "/api/v1/achievement/" + AchievementID
}