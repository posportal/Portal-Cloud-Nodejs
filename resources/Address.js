/*
 Category Resource
 This has the capability to fetch all verbs and
 sub resources related.
 */
var endpoints = require('../lib/endpoints');
const RESOURCE_URL = "/validateAddress";

module.exports = function(client){
    var resources = {};
    //create any general resources available.
    endpoints.create(client, resources, ["GET"], RESOURCE_URL);
    resources.validate = resources.get;

    return resources;
};