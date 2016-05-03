var endpoints = require('../lib/endpoints');
const RESOURCE_URL = "/deploymentProject";

module.exports = function(client){

    function DeploymentProject(id){

        var id_resources = {},
            url = RESOURCE_URL + "/" + id;

        endpoints.create(client, id_resources, ["GET"], url);

        return id_resources;
    };

    endpoints.create(client, DeploymentProject, ["GET"], RESOURCE_URL);
    DeploymentProject.list = DeploymentProject.get;

    return DeploymentProject;
};
