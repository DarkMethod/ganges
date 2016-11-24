var express = require('express');
var router = express.Router();
var models = require('../../models/index');

// Get all the users
router.get('/:type', function(request, response, next) {
	models.User.findAll({
		where: {
			'role': request.params.type
		}
	}).then(function(users) {
        var data = {
            error: "false",
            users: users
        };

        response.send(data);
        next();
    });
});

// Get a particular user
router.get('/:type/:id', function(request, response, next) {
	models.User.find({
        where: {
            'uuid': request.params.id
        }
    }).then(function(user) {
        var data = {
            error: "false",
            user: user
        };

        response.send(data);
        next();
    });
});

// Add a new user
router.post('/', function(request, response, next) {
	models.User.create({
        name: request.body['name'],
        email: request.body['email'],
        password: request.body['password'],
        contact: request.body['contact'],
        address: request.body['address'],
        role: request.body['role']
    }).then(function(user) {
        var data = {
            error: "false",
            message: "New user added successfully",
            user: user
        };

        response.send(data);
        next();
    });
});

// Update a particular user details
router.put('/:id', function(request, response, next) {
	models.User.find({
        where: {
            'uuid': request.params.id
        }
    }).then(function(user) {
        if(user){
            user.updateAttributes({
                name: request.body['name'],
        		email: request.body['email'],
        		contact: request.body['contact'],
        		address: request.body['address'],
        		role: request.body['role']
            }).then(function(user) {
                var data = {
                    error: "false",
                    message: "Updated user details successfully",
                    user: user
                };

                response.send(data);
                next();
            });
        }
    });
});

// Delete a particular user
router.delete('/:id', function(request, response, next) {
	models.User.destroy({
        where: {
            uuid: request.params['id']
        }
    }).then(function(user) {
        var data = {
            error: "false",
            message: "Deleted user successfully",
            user: user
        };

        response.send(data);
        next();
    });
});

module.exports = router;

