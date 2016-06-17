# Portal Cloud Nodejs Client
This client is intended to interact with Portal Cloud in a seamless manner. We handle all of gears and sprockets in the request, leaving
you will the simplest way to achieve order zen.

## How to Initialize Your Portal Cloud Client
Download the client first, then wherever in your NodeJs app, include the package like so.

```javascript
var portalcloud = require('portalcloud');
var client = new portalcloud.client("USERKEY", "CRYPTOKEY");
```

Viola! Your app is now ready to make requests with the Portal Cloud API.