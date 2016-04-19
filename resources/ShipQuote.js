var endpoints = require('../lib/endpoints');
const RESOURCE_URL = "/shipquote";

module.exports = function(client){
    var resources = {};
    resources.carriers = {};
    resources.servicelevels = {};

    endpoints.create(client, resources, ["POST"], RESOURCE_URL);
    endpoints.create(client, resources.carriers, ["GET"], RESOURCE_URL + "/carriers");
    endpoints.create(client, resources.servicelevels, ["GET"], RESOURCE_URL + "/servicelevels");

    return resources;
};