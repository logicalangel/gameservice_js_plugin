const Consts = require('../Utils/Consts');

module.exports = {
    "getAll": Consts.endPoint + "/api/v1/leaderboard/",
    "get": (LeaderboardID, Limit) => Consts.endPoint + "/api/v1/leaderboard/" + LeaderboardID + (Limit && Limit > 1 ? "/?li=" + Limit : "/"),
    "submit": (LeaderboardID) => Consts.endPoint + "/api/v1/leaderboard/" + LeaderboardID,
}