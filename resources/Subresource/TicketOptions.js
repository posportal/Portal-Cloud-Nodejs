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

    endpoints.create(client, resources.category, ["GET"], url + "/category")
    resources.category.list = resources.category.get;

    endpoints.create(client, resources.entity, ["GET"], url + "/entity");
    resources.entity.list = resources.entity.get;

    endpoints.create(client, resources.followupstatus, ["GET"], url + "/followupstatus");
    resources.followupstatus.list = resources.followupstatus.get;

    endpoints.create(client, resources.origin, ["GET"], url + "/origin");
    resources.origin.list = resources.origin.get;

    endpoints.create(client, resources.queue, ["GET"], url + "/queue");
    resources.queue.list = resources.queue.get;


    return resources;
};/**
 * Created by rhall on 4/19/2016.
 */
