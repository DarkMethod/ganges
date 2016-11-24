var express = require('express');
var router = express.Router();
var jwt = require('jwt-simple');
var moment = require('moment');
var models = require('../../models/index');
var env = process.env.NODE_ENV || "development-client";
var config = require('../../config/key.json')[env];

// Generate JSON Web Token
function createJWT(user) {
  var payload = {
    sub: user._id,
    iat: moment().unix(),
    exp: moment().add(14, 'days').unix()
  };
  console.log(config);
  return jwt.encode(payload, config.TOKEN_SECRET);
}
// Get a particular user
router.post('/login', function(request, response, next) {
	models.User.find({
        where: {
            'email': request.body.email,
            'password': request.body.password
        }
    }).then(function(user) {
        if(user){
        	var data = {
            	error: "false",
            	data: user,
            	token: createJWT(user),
            	message: "Successfully signed in."  
        	};
		}else{
			var data = {
            	error: "true",
    			message: "Invalid email and/or password."        	
        	};
        	response.status(401);
		}
		
        response.send(data);
        next();
    });
});

module.exports = router;

