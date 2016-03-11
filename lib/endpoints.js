exports.create = function (client, resource, methods, url){
    methods.forEach(function(method){
        resource[method.toLowerCase()] = function(requestOptions, cb){
            var options = {};

            if(typeof requestOptions === "function"){
                cb = requestOptions;
            } else {
                if(requestOptions.params && method === "GET"){
                    options.qs = requestOptions.params;
                }

                if(options.body){
                    options.body = requestOptions.body;
                }
            };

            options.method = method;

            client.request(url, options, cb);
        };
    });

    return resource;
};


