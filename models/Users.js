"use strict"
let Sequelize = require('sequelize');
let sequelize = new Sequelize('blog', 'postgres', '123456', {
  host: 'localhost',
  port:'5432',
  dialect:'postgres'
});
module.exports = sequelize.define('users', {
	firstName:{type: Sequelize.STRING, allowNull: false},
	lastName:Sequelize.STRING,
	email:{type: Sequelize.STRING, allowNull: false},
	password:{type: Sequelize.STRING, allowNull:false},
	address:Sequelize.STRING,
	city:Sequelize.STRING,
	state:Sequelize.STRING,
	zipCode:Sequelize.STRING,
	phone:Sequelize.STRING,
	status:Sequelize.INTEGER

});