const net = require('net');
const Consts = require('../Utils/Consts');
const multiplexer = require('./multiplexer');

module.exports = {
    Client: undefined,
    Start: function (GameID, Token) {
        let client = new net.Socket();
        client.connect(Consts.CommandPort, Consts.CommandEndpoint, function () {
            client.write(Buffer.from(JSON.stringify({
                2: '{ "0": "' + GameID + '", "1": "' + Token + '" }'
            })));
            this.Client = client;
        });

        client.on('data', function (data) {
            console.log('Received: ' + data);
            if (JSON.parse(data.toString())["0"]) {
                // Auth response
                Consts.CommandToken = JSON.parse(data.toString())["0"];
            }
            if (JSON.parse(data.toString())["1"]) {
                // data packet
                multiplexer(JSON.parse(data.toString()))
            }
        });

        client.on('close', function () {
            console.log('Connection closed');
        });
    }
}