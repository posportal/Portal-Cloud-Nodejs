var endpoints = require('../lib/endpoints');
const RESOURCE_URL = "/taxquote";

module.exports = function(client){

    function TaxQuote(id){
        var id_resources = {},
            url = RESOURCE_URL + "/" + id;

        endpoints.create(client, id_resources, ["GET", "PATCH"], url);
        id_resources.update = id_resources.patch;

        return id_resources;
    };

    endpoints.create(client, TaxQuote, ["POST"], RESOURCE_URL);
    TaxQuote.create = TaxQuote.get;

    return TaxQuote;
};