var endpoints = require('../lib/endpoints');
const RESOURCE_URL = "/payment";

module.exports = function(client){

    var resources = {};
    resources.terms = {};

    endpoints.create(client, resources.terms, ["GET"], RESOURCE_URL + "/terms");

    return resources;
};