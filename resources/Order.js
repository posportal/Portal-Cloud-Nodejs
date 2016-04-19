/**
 * Order Resource
 * @type {exports|module.exports}

 *
 *
 */

var endpoints = require('../lib/endpoints');
const RESOURCE_URL = "/order";

module.exports = function(client){

    function Order(id){
        var id_resources = {},
            url = RESOURCE_URL + "/" + id;

        //generate order by ID resources
        endpoints.create(client, id_resources, ["GET", "PATCH", "DELETE"], url);

        //Link order sub resources
        id_resources.status = require("./Subresource/Status")(client, url);
        id_resources.item = require("./Subresource/OrderItem")(client, url);

        //Generate order unique sub resources
        id_resources.backorder = {};
        id_resources.parent = {};
        id_resources.shipquote = {};

        endpoints.create(client, id_resources.backorder, ["GET"], url + "/backorder");
        endpoints.create(client, id_resources.parent, ["GET"], url + "/parent");
        endpoints.create(client, id_resources.shipquote, ["GET"], url + "/shipquote");

        return id_resources;
    };

    Order.status = require("./Subresource/DataStatus")(client, RESOURCE_URL);

    endpoints.create(client, Order, ["GET", "POST"], RESOURCE_URL);


    return Order;
};
