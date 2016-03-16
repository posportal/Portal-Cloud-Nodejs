module.exports = function(client){

    client.getOrders = function(callback){
        this.order.get(callback);
    };

    client.getOrder = function(id, callback){
        this.order(id).get(callback);
    };

    client.createOrder = function(order, callback){
        var options = {
            body: order
        };

        this.order.post(options, callback);
    };
};
