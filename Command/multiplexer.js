const Consts = require('../Utils/Consts');

module.exports = function (client, packet) {
    switch (packet["1"]) {
        case 5:
            // Ping
            client.write(Buffer.from(JSON.stringify({ "0": Consts.CommandToken, "1": 5 })));
            break;

        case 1:
            // Auto Match

            break;
        case 2:
            // Create Room

            break;
        case 3:
            // Get Rooms

            break;
        case 4:
            // Join User

            break;
        case 6:
            // Invite User

            break;
        // case 7:
        //     // Kick User

        //     break;
        case 8:
            // get Invite List

            break;
        case 9:
            // Accept Invite

            break;
        case 10:
            // Find User

            break;
        case 11:
            // Notification

            break;
        case 12:
            // Subscribe

            break;
        case 13:
            // chat message

            break;
        case 14:
            // UnSubscribe

            break;
        case 15:
            // Invite Notification

            break;
        case 100:
            // onError

            break;
    }
}