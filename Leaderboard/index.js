const axios = require('axios');
const urls = require('./urls');
const GateMan = require('../Utils/GateMan');
const Consts = require('../Utils/Consts');

module.exports = {
    getAll: async function () {
        if (!GateMan.isInGame()) return false;
        try {
            let leaderboard_r = await axios.get(urls.getAll, {
                headers: {
                    'x-access-token': Consts.gameToken
                }
            });
            return leaderboard_r.data.leaderboard
        } catch (e) {
            console.error("onLeaderboardGetAll: " + e);
            if (e.response && e.response.data)
                return e.response.data.msg;
        }
    },
    get: async function (LeaderboardID, Limit) {
        if (!GateMan.isInGame()) return;
        try {
            let leaderboard_r = await axios.get(urls.get(LeaderboardID, Limit), {
                headers: {
                    'x-access-token': Consts.gameToken
                }
            });
            return { leaderboard: leaderboard_r.data.leaderboard, scores: leaderboard_r.data.scores };
        } catch (e) {
            console.error("onLeaderboardGet: " + e);
            if (e.response && e.response.data)
                return e.response.data.msg;
        }
    },
    submit: async function (LeaderboardID, Score) {
        if (!GateMan.isInGame()) return;
        try {
            let leaderboard_r = await axios.post(urls.submit(LeaderboardID), { value: Score }, {
                headers: {
                    'x-access-token': Consts.gameToken
                }
            });
            return { leaderboard: leaderboard_r.data.leaderboard.leaderboard_r, score: leaderboard_r.data.leaderboard.score, tries: leaderboard_r.data.leaderboard.tries };
        } catch (e) {
            console.error("onLeaderboardSubmit: " + e);
            if (e.response && e.response.data)
                return e.response.data.msg;
        }
    }
}