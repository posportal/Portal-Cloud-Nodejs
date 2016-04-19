/**
 * Main object for the helper. This hosts all resources
 * available to the user from POS Portals API.
 *
 * Constructed from a key, secret, and production. If production is
 * not specified, this will fallback to sandbox everytime.
 *
 * Uses request for making the HTTP requests, querystring to construct
 * the query string for HMAC calculation, and home brewed hmac dependancy to
 * generate the HMAC and hash the body on POST requests.
 */
var request = require('request'),
    querystring = require('querystring'),
    hmac = require('./hmac');


/**
 * Constructs a POS Portal Client
 * @param key - POS Portal issued key (string)
 * @param secret - POS Portal issued secret (string)
 * @param production - Specify whether you are testing or not.
 *                     **Defaults to sandbox all the time
 */
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
    this.address = require('../resources/address')(this);
    this.payment = require('../resources/payment')(this);
    this.shipquote = require('../resources/shipquote')(this);
    this.taxquote = require('../resources/taxquote')(this);
    this.ticket = require('../resources/ticket')(this);
    this.equipmentreturn = require('../resources/equipmentreturn')(this);
    this.messages = require('../resources/messages')(this);


    //Load in shorthand functions
    require('./shorthand/order')(this);

};


/**
 * Makes all requests out, child resources inherit this.
 * @param url - resource's url.
 * @param options - aggregated options (method, qs, body, etc).
 * @param callback - return function on request completion.
 */
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
        hashedContent = hmac.hash(JSON.stringify(options.body));
        options.json = true;
        contentType = "application/json";
    };

    var dataToHash = options.method + "\n" +
                     contentType + "\n" +
                     hashedContent + "\n" +
                     timestamp + "\n" +
                     options.url;


    dataToHash += (options.qs) ?  ("?" + querystring.stringify(options.qs)) : "";

    console.log("Data to hash " + dataToHash);

    headers["Authorization"] = this.key + ":" + hmac.create(this.secret, dataToHash);
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