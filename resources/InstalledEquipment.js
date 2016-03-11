var endpoints = require('../lib/endpoints');
const RESOURCE_URL = "/installedequipment";

module.exports = function(client){

    function InstalledEquipment(id){
        var id_resources = {},
            url = RESOURCE_URL + "/" + id;
        endpoints.create(client, id_resources, ["GET"], url);

        id_resources.return = endpoints.create(client, {}, ["POST"], url + "/return");

        return id_resources;
    };

    endpoints.create(client, InstalledEquipment, ["GET"], RESOURCE_URL);

    return InstalledEquipment;
};
