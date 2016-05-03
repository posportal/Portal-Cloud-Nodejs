/**
 * Creates a function per methods passed. Each function is named
 * after its method. Example - "GET" would render Object.get()
 * @param client - the parent request client.
 * @param resource - the object in which req methods are attached.
 * @param methods - available HTTP methods to the resource.
 * @param url - resource URL to be used with all HTTP calls.
 * @returns {Object} - with a set of functions based on methods.
 */
exports.create = function (client, resource, methods, url){
    methods.forEach(function(method){
        resource[method.toLowerCase()] = function(requestOptions, callback){
            var options = {};

            if(typeof requestOptions === "function"){
                callback = requestOptions;
            } else {
                if(Object.keys(requestOptions.params).length && method === "GET"){
                    options.qs = requestOptions.params;
                }

                if(requestOptions.body){
                    options.body = requestOptions.body;
                }
            };

            options.method = method;

            client.request(url, options, callback);
        };
    });

    return resource;
};


