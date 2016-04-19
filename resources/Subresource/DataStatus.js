var endpoints = require('../../lib/endpoints');
const RESOURCE_URL = "/data/status";

module.exports = function (client, parentUrl){
    var url = parentUrl + RESOURCE_URL;

    function DataStatus(id){

        var id_resources = {};
        var url = parentUrl + RESOURCE_URL + id;

        endpoints.create(client, id_resources, ["GET"], url);

        return id_resources;
    };

    endpoints.create(client, DataStatus, ["GET"], url);

    return DataStatus;
};