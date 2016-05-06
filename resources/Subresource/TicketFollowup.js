var endpoints = require('../../lib/endpoints');
const RESOURCE_URL = "/followup";

module.exports = function(client, parentUrl){

    var url = parentUrl + RESOURCE_URL;

    function TicketFollowup(id){
        var id_resources = {};
        var url = parentUrl + RESOURCE_URL + "/" + id;

        endpoints.create(client, id_resources, ["GET", "PATCH"], url);
        id_resources.update = id_resources.patch;

        return id_resources;
    };

    endpoints.create(client, TicketFollowup, ["POST"], url);
    TicketFollowup.create = TicketFollowup.post;

    return TicketFollowup;
};
