"use strict";
module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define("User", {
 		uuid: {
    		type: DataTypes.UUID,
    		defaultValue: DataTypes.UUIDV4,
    		allowNull : false,
    		primaryKey: true
 		},
 		name : {
 			type : DataTypes.STRING,
 			allowNull : false,
		 },
 		email : {
 			type : DataTypes.STRING,
 			allowNull : false,
 		},
 		password : {
 			type : DataTypes.STRING,
 			allowNull : false,
 		},
 		contact : {
 			type : DataTypes.STRING,
 			allowNull : false,
 		},
 		address : {
 			type : DataTypes.TEXT,
 			allowNull : false,
 		},
		role : {
 			type : DataTypes.STRING,
 			allowNull : false,
		 }
 	});
 return User;
};
