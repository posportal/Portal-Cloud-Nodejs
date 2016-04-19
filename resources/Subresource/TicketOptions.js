var endpoints = require('../../lib/endpoints');
const RESOURCE_URL = "/options";

module.exports = function (client, parentUrl){
    var resources = {},
        url = parentUrl + RESOURCE_URL;

    resources.category = {};
    resources.entity = {};
    resources.followupstatus = {};
    resources.origin = {};
    resources.queue = {};

    endpoints.create(client, resources.category, ["GET"], url + "/category");
    endpoints.create(client, resources.entity, ["GET"], url + "/entity");
    endpoints.create(client, resources.followupstatus, ["GET"], url + "/followupstatus");
    endpoints.create(client, resources.origin, ["GET"], url + "/origin");
    endpoints.create(client, resources.queue, ["GET"], url + "/queue");



    return resources;
};/**
 * Created by rhall on 4/19/2016.
 */
