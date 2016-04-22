var endpoints = require('../lib/endpoints');
const RESOURCE_URL = "/product";

module.exports = function(client){

    function Product(id){
        var id_resources = {},
            url = RESOURCE_URL + "/" + id;

        endpoints.create(client, id_resources, ["GET"], url);

        id_resources.application = {};

        endpoints.create(client, id_resources.application, ["GET"], url + "/application");
        id_resources.application.list = id_resources.application.get;

        return id_resources;
    };

    endpoints.create(client, Product, ["GET"], RESOURCE_URL);
    Product.list = Product.get;

    return Product;
};
