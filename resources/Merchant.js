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
        id_resources.update = id_resources.patch;

        //Generate merchant specific sub resources
        id_resources.installedequipment = {};
        id_resources.installedequipment.return = {};
        id_resources.orders = {};

        endpoints.create(client, id_resources.installedequipment, ["GET"], url + "/installedequipment");
        id_resources.installedequipment.list = id_resources.installedequipment.get;

        endpoints.create(client, id_resources.installedequipment.return, ["POST"], url + "/installedequipment/return");
        id_resources.installedequipment.return.create = id_resources.installedequipment.return.post;

        endpoints.create(client, id_resources.orders, ["GET"], url + "/orders");
        id_resources.orders.list = id_resources.orders.get;

        return id_resources;
    };

    endpoints.create(client, Merchant, ["POST"], RESOURCE_URL);
    Merchant.create = Merchant.post;

    return Merchant;
};
