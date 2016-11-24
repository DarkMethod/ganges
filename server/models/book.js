"use strict";
module.exports = function(sequelize, DataTypes) {
 var Book = sequelize.define("Book", {
 uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull : false,
    primaryKey: true,
 },
 title : {
 	type : DataTypes.STRING,
 	allowNull : false,
 },
 author : {
 	type : DataTypes.STRING,
 	allowNull : false,
 },
 genres : {
 	type : DataTypes.STRING,
 	allowNull : false,
 },
 price : {
 	type : DataTypes.FLOAT,
 	allowNull : false,
 },
 rating : {
 	type : DataTypes.FLOAT,
 	allowNull : false,
 },
 availability : {
 	type : DataTypes.BOOLEAN,
 	defaultValue: 1,
 	allowNull : false,
 },
 state : {
 	type : DataTypes.INTEGER,
 	allowNull : false,
 }
 });
 return Book;
};
