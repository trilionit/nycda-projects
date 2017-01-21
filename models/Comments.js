"use strict"
let Sequelize = require('sequelize');
let sequelize = new Sequelize('blog', 'postgres', '123456', {
  host: 'localhost',
  port:'5432',
  dialect:'postgres'
});
module.exports = sequelize.define('comments', {
	text:{type: Sequelize.TEXT, allowNull: false},
	status:Sequelize.INTEGER
});