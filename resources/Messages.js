var endpoints = require('../lib/endpoints');
const RESOURCE_URL = "/messages";

module.exports = function(client){

    var resources = {};

    endpoints.create(client, resources, ["GET"], RESOURCE_URL);

    return resources;
};/**
 * Created by rhall on 4/19/2016.
 */
