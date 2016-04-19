/**
 * Merchant Resource
 * @type {exports|module.exports}

 *
 *
 */

var endpoints = require('../lib/endpoints');
const RESOURCE_URL = "/merchant";

module.exports = function(client){

    function Merchant(id){
        var id_resources = {},
            url = RESOURCE_URL + "/" + id;

        endpoints.create(client, id_resources, ["GET", "PATCH", "DELETE"], url);

        //Generate merchant specific sub resources
        id_resources.installedequipment = {};
        id_resources.installedequipment.return = {};
        id_resources.orders = {};

        endpoints.create(client, id_resources.installedequipment, ["GET"], url + "/installedequipment");
        endpoints.create(client, id_resources.installedequipment.return, ["POST"], url + "/installedequipment/return");
        endpoints.create(client, id_resources.orders, ["GET"], url + "/orders");

        return id_resources;
    };

    endpoints.create(client, Merchant, ["POST"], RESOURCE_URL);

    return Merchant;
};
