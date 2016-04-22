/**
 * Installed Equipment Resource
 * @type {exports|module.exports}

 *
 *
 */

var endpoints = require('../lib/endpoints');
const RESOURCE_URL = "/installedequipment";

module.exports = function(client){

    function InstalledEquipment(id){
        var id_resources = {},
            url = RESOURCE_URL + "/" + id;

        endpoints.create(client, id_resources, ["GET"], url);

        //generate resources for returns
        id_resources.return = endpoints.create(client, {}, ["POST"], url + "/return");
        id_resources.return.create = id_resources.return.post;

        return id_resources;
    };

    endpoints.create(client, InstalledEquipment, ["GET"], RESOURCE_URL);
    InstalledEquipment.list = InstalledEquipment.get;

    return InstalledEquipment;
};
