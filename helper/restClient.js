var Client = require('node-rest-client').Client;
var options = {

    user: "admin", // basic http auth username if required
    password: "123", // basic http auth password if required
    requestConfig: {
        timeout: 1000, //request timeout in milliseconds
        noDelay: true, //Enable/disable the Nagle algorithm
        keepAlive: true, //Enable/disable keep-alive functionalityidle socket.
        keepAliveDelay: 1000 //and optionally set the initial delay before the first keepalive probe is sent
    },
    responseConfig: {
        timeout: 1000 //response timeout
    }
};

var client = new Client(options);

/*var args = {
    path: { "id": 120, "arg1": "hello", "arg2": "world" },
    parameters: { arg1: "hello", arg2: "world" },
    headers: { "test-header": "client-api" }
};*/



module.exports = client;
