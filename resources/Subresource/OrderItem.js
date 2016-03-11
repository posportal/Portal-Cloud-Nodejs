var endpoints = require('../../lib/endpoints');
const RESOURCE_URL = "/item";

module.exports = function(client, parentUrl){

    var url = parentUrl + RESOURCE_URL;

    function OrderItem(id){
        var id_resources = {};
        var url = parentUrl + RESOURCE_URL + id;

        endpoints.create(client, id_resources, ["DELETE", "GET", "PATCH"], url);

        return id_resources;
    };

    endpoints.create(client, OrderItem, ["POST"], url);

    return OrderItem;
};