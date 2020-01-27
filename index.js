const Auth = require('./Auth');
const Storage = require('./Storage');
const Notificaton = require('./Notification');
const Leaderboard = require('./Leaderboard');
const Achievement = require('./Achievement');
const DB = require('./DB');
const Command = require('./Command/index');

module.exports = {
    Auth: Auth,
    Storage: Storage,
    Notificaton: Notificaton,
    Leaderboard: Leaderboard,
    Achievement: Achievement,
    DB: DB,
    // Command: Command
}