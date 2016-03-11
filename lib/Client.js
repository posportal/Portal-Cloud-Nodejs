var request = require('request'),
    querystring = require('querystring'),
    hmac = require('./hmac');

// Key, Secret, and Boolean triggering PROD or SB instance
function Client(key, secret, production){
    if(!key || !secret){
        throw "We require both a key and secret to make requests. Make sure you are passing both.";
    } else {
        this.key = key;
        this.secret = secret;
    }

    // IF PROD, USE LIVE URL
    if(production && typeof production === 'boolean'){
        this.base_url = 'https://api.posportal.com';
    } else {
        this.base_url = 'https://api.pospdev.com';
    }

    //LOAD IN AVAILABLE RESOURCES TO A CLIENT
    this.category = require('../resources/Category')(this);
    this.injection = require('../resources/Injection')(this);
    this.oem = require('../resources/Oem')(this);
    this.product = require('../resources/Product')(this);
    this.order = require('../resources/Order')(this);
    this.installedequipment = require('../resources/InstalledEquipment')(this);
    this.merchant = require('../resources/Merchant')(this);
    this.deploymentproject = require('../resources/DeploymentProject')(this);

};

Client.prototype.request = function (url, options, callback){

    console.log(options);

    if(options == null){
        options = {};
    }

    var headers = {},
        hashedContent = "",
        contentType = "",
        timestamp = new Date().toISOString();

    options.url = this.base_url + url;

    if(options.body){
        options.body = JSON.stringify(options.body);
        options.json = true;
        hashedContent = hmac.hash(options.body);
        headers["content-type"] = contentType = "application/json"
    };

    var dataToHash = options.method + "\n" +
                     contentType + "\n" +
                     hashedContent + "\n" +
                     timestamp + "\n" +
                     options.url;

    dataToHash += (options.qs) ?  ("?" + querystring.stringify(options.qs)) : "";

    headers["Authorization"] = this.key + ":" + hmac(this.secret, dataToHash);
    headers["Timestamp"] = timestamp;

    options.headers = headers;

    console.log(options);

    request(options, function(err, res, body){
        if(err){
           callback(err);
        } else {
           callback(null, body);
        }
    });
};

module.exports = Client;