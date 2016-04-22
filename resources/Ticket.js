/**
 * Ticket Resource
 * @type {exports|module.exports}

 *
 *
 */

var endpoints = require('../lib/endpoints');
const RESOURCE_URL = "/ticket";

module.exports = function(client){

    function Ticket(id){
        var id_resources = {},
            url = RESOURCE_URL + "/" + id;

        //generate order by ID resources
        endpoints.create(client, id_resources, ["GET", "PATCH"], url);
        id_resources.update = id_resources.patch;

        id_resources.followup = require("./Subresource/ticketfollowup")(client, url);

        return id_resources;
    };

    Ticket.options = require("./Subresource/ticketoptions")(client, RESOURCE_URL);


    endpoints.create(client, Ticket, ["GET", "POST"], RESOURCE_URL);
    Ticket.list = Ticket.get;
    Ticket.create = Ticket.post;


    return Ticket;
};