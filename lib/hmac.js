/**
 * Author: Richard Hall @ POS Portal
 * Creates Hmac's and hashes bodies.
 * Uses crypto-js for the super secret algorithms.
 */
var crypto = require('crypto-js');

exports.create = function(secret, dataToHash){
    return crypto.HmacSHA256(dataToHash, secret).toString(crypto.enc.Base64);
};

exports.hash = function(content){
    return crypto.SHA256(content);
};