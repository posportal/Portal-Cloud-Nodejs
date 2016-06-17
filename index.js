var Client = require('./lib/Client');

function init(key, secret, env){
    return new Client(key, secret, env);
};

init.client = Client;

module.exports = init;
