var endpoints = require('../lib/endpoints');
const RESOURCE_URL = "/equipmentreturn";

module.exports = function(client){

    var resources = {};
    resources.reasons = {};

    endpoints.create(client, resources.reasons, ["GET"], RESOURCE_URL + "/reasons");

    return resources;
};/**
 * Created by rhall on 4/19/2016.
 */

