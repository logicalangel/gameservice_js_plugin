const axios = require("axios");
const urls = require('./urls');
const Consts = require("../Utils/Consts");
// const Command = require("../Command");

module.exports = {
    Initializer: (GameID, Secret) => {
        Consts.Keys.GameID = GameID;
        Consts.Keys.Secret = Secret;
    },
    login: async function (input1, input2) {
        try {
            if (input1 === undefined && input2 === undefined) {
                // guest login
                return false;
            }
            if (input1 !== undefined && input2 === undefined) {
                // token login
                Consts.userToken = Token;
                return true;
            }

            // normal login 

            let login_r = await axios.post(urls.login, {
                email: input1, password: input2,
                mode: 'login',
            });
            if (login_r.data.status) {
                Consts.userToken = login_r.data.token;
                await this.start({});
            }
            return {
                Token: login_r.data.token,
                User: login_r.data.user
            };
        } catch (e) {
            console.error("onLogin: " + e);
        }
    },
    register: async function (nickname, email, password) {
        try {
            let register_r = await axios.post(urls.login, {
                name: nickname,
                email, password,
                mode: 'register',
            });
            await this.start({});
            return register_r.data;
        } catch (e) {
            console.error("onRegister: " + e);
        }
    },
    start: async function (SystemInfo) {
        try {
            let start_r = await axios.post(urls.start, {
                token: Consts.userToken,
                game: Consts.Keys.GameID,
                secret: Consts.Keys.Secret,
                system_info: SystemInfo,
                mode: 'normal'
            });
            if (start_r.data.status) {
                Consts.gameToken = start_r.data.token;
                Consts.gameID = start_r.data.game._id;
                // await Command.Connection.Start(Consts.gameID, Consts.userToken);
            }
        } catch (e) {
            console.error("onStart: " + e);
        }
    },
    logout: function () {
        Consts.userToken = undefined;
        Consts.gameToken = undefined;
        return true;
    },
    endGame: function () {
        Consts.gameToken = undefined;
        return true;
    },
    getCurrentPlayer: async function () {
        try {
            let user_r = await axios.get(urls.User + "/?token=" + Consts.userToken);
            return user_r.data;
        } catch (e) {
            console.error("onGetCurrentPlayer: " + e);
        }
    },
    editUserProfile: async function (name, mobile, option) {
        try {
            let edit_r = await axios.put(urls.User, { name, mobile, option, token: Consts.userToken });
            return edit_r.data;
        } catch (e) {
            console.error("onEditCurrentPlayer: " + e);
        }
    }
}