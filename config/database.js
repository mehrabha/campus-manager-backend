const Sequelize = require('sequelize');

module.exports = new Sequelize("campusmanager", "postgres", "root", {
    host: 'localhost',
    dialect: 'postgres',
    operatorAliases: false,
  
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
});