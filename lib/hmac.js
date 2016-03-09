var crypto = require('crypto-js');

function Hmac(secret, dataToHash){
    return crypto.HmacSHA256(dataToHash, secret).toString(crypto.enc.Base64);
};

Hmac.prototype.hash = function hash(content){
    return crypto.SHA256(JSON.stringify(content));
};

module.exports = Hmac;