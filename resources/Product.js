var endpoints = require('../lib/endpoints');
const RESOURCE_URL = "/product";

module.exports = function(client){

    function Product(id){
        var id_resources = {},
            url = RESOURCE_URL + "/" + id;
        endpoints.create(client, id_resources, ["GET"], url);

        id_resources.application = require('./Application')(client, url);

        return id_resources;
    };

    endpoints.create(client, Product, ["GET"], RESOURCE_URL);

    return Product;
};
