var express = require('express');
var router = express.Router();
var models = require('../../models/index');

// Get all the orders
router.get('/', function(request, response, next) {
	models.Order.findAll({}).then(function(orders) {
        var data = {
            error: "false",
            orders: orders
        };

        response.send(data);
        next();
    });
});

// Get a particular order
router.get('/:id', function(request, response, next) {
	models.Order.find({
        where: {
            'uuid': request.params.id
        }
    }).then(function(order) {
        var data = {
            error: "false",
            order: order
        };

        response.send(data);
        next();
    });
});

// Add a new order
router.post('/', function(request, response, next) {
	models.Order.create({
        name: request.body['name'],
        email: request.body['email'],
        contact: request.body['contact'],
        address: request.body['address'],
        item: request.body['item'],
        price: request.body['price'],
        status: request.body['status']
    }).then(function(order) {
        var data = {
            error: "false",
            message: "New order added successfully",
            order: order
        };

        response.send(data);
        next();
    });
});

// Update a particular order details
router.put('/:id', function(request, response, next) {
	models.Order.find({
        where: {
            'uuid': request.params.id
        }
    }).then(function(order) {
        if(order){
            order.updateAttributes({
                name: request.body['name'],
        		email: request.body['email'],
        		contact: request.body['contact'],
        		address: request.body['address'],
        		item: request.body['item'],
        		price: request.body['price'],
        		status: request.body['status']
            }).then(function(order) {
                var data = {
                    error: "false",
                    message: "Updated user details successfully",
                    order: order
                };

                response.send(data);
                next();
            });
        }
    });
});

// Delete a particular order
router.delete('/:id', function(request, response, next) {
	models.Order.destroy({
        where: {
            uuid: request.params['id']
        }
    }).then(function(order) {
        var data = {
            error: "false",
            message: "Deleted order successfully",
            order: order
        };

        response.send(data);
        next();
    });
});

module.exports = router;

