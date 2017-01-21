"use strict"
let Sequelize = require('sequelize');
let sequelize = new Sequelize('blog', 'postgres', '123456', {
  host: 'localhost',
  port:'5432',
  dialect:'postgres'
});
module.exports = sequelize.define('blog', {
	title:{type: Sequelize.STRING, allowNull: false, unique: true},
	story:Sequelize.TEXT,
	photo:Sequelize.STRING,
	thumbnail:Sequelize.STRING
});