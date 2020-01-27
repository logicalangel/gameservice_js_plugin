const axios = require('axios');
const urls = require('./urls');
const GateMan = require('../Utils/GateMan');
const Consts = require('../Utils/Consts');

module.exports = {
    get: async function () {
        if (!GateMan.isInGame()) return false;
        try {
            let achievement_r = await axios.get(urls.get, {
                headers: {
                    'x-access-token': Consts.gameToken
                }
            });
            return achievement_r.data.achievement;
        } catch (e) {
            console.error("onAchievementGet: " + e);
        }
    },
    unlock: async function (achievementID) {
        if (!GateMan.isInGame()) return false;
        try {
            let achievement_r = await axios.post(urls.unlock(achievementID), undefined, {
                headers: {
                    'x-access-token': Consts.gameToken
                }
            });
            return achievement_r.data.new;
        } catch (e) {
            console.error("onAchievementUnlock: " + e);
        }
    }
}