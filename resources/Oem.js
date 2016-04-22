var endpoints = require('../lib/endpoints');
const RESOURCE_URL = "/oem";

module.exports = function(client){

    function Oem(id){
        var id_resources = {};

        endpoints.create(client, id_resources, ["GET"], RESOURCE_URL + "/" + id);

        return id_resources;
    };

    endpoints.create(client, Oem, ["GET"], RESOURCE_URL);
    Oem.list = Oem.get;

    return Oem;
};