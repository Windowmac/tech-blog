const { Sequelize } = require('sequelize');
require('dotenv').config();


const sequelize = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USERNAME, 
    process.env.DB_PASSWORD, {
    host: process.env.JAWSDB_GREEN_URL,
    dialect: 'mysql',
    port: 3306
  });

module.exports = sequelize;