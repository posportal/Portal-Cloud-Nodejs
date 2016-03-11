var endpoints = require('../../lib/endpoints');
const RESOURCE_URL = "/status";

module.exports = function (client, parentUrl){
    var resources = {},
        url = parentUrl + RESOURCE_URL;


    endpoints.create(client, resources, ["GET", "PATCH"], url);

    return resources;
};