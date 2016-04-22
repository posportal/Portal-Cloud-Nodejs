var endpoints = require('../lib/endpoints');
const RESOURCE_URL = "/injection";

module.exports = function Injection(client){

    endpoints.create(client, Injection, ["GET"], RESOURCE_URL);
    Injection.list = Injection.get;

    return Injection;
};