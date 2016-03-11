var Client = require('./lib/Client');

function init(key, secret, sandbox){
    return new Client(key, secret, sandbox);
};

init.client = Client;

module.exports = init;
