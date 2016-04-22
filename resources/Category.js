/*
Category Resource
This has the capability to fetch all verbs and
sub resources related.
 */
var endpoints = require('../lib/endpoints');
const RESOURCE_URL = "/category";

module.exports = function(client){

    //create any id related resources available.
    function Category(id){
        var id_resources = {};

        endpoints.create(client, id_resources, ["GET"], RESOURCE_URL + "/" + id);

        return id_resources;
    };

    //create any general resources available.
    endpoints.create(client, Category, ["GET"], RESOURCE_URL);
    Category.list = Category.get;

    return Category;
};