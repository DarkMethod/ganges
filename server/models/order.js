"use strict";
module.exports = function(sequelize, DataTypes) {
 var Order = sequelize.define("Order", {
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
 address : {
 	type : DataTypes.TEXT,
 	allowNull : false,
 },
 contact : {
 	type : DataTypes.STRING,
 	allowNull : false,
 },
 item : {
 	type : DataTypes.STRING,
 	allowNull : false,
 },
 price : {
 	type : DataTypes.FLOAT,
 	allowNull : false,
 },
 status : {
 	type : DataTypes.STRING,
 	defaultValue: "In Process",
 	allowNull : false,
 }
 });
 return Order;
};
