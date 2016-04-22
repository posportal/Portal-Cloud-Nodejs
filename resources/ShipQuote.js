var endpoints = require('../lib/endpoints');
const RESOURCE_URL = "/shipquote";

module.exports = function(client){
    var resources = {};
    resources.carriers = {};
    resources.servicelevels = {};

    endpoints.create(client, resources, ["POST"], RESOURCE_URL);
    resources.create = resources.get;

    endpoints.create(client, resources.carriers, ["GET"], RESOURCE_URL + "/carriers");
    resources.carriers.list = resources.carriers.get;

    endpoints.create(client, resources.servicelevels, ["GET"], RESOURCE_URL + "/servicelevels");
    resources.servicelevels.list = resources.servicelevels.get;

    return resources;
};