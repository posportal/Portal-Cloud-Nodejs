var endpoints = require('../../lib/endpoints');
const RESOURCE_URL = "/application";

//SUB RESOURCE, THIS CANNOT BE CALLED WITHOUT PRODUCT
module.exports = function Application(client, parentUrl){
    var url = parentUrl + RESOURCE_URL;
    endpoints.create(client, Application, ["GET"], url);

    return Application;
};