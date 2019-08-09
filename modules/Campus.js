const Sequelize = require('sequelize');
const db = require('../config/database');

module.exports = db.define('Campus', {
    name: {
        type: Sequelize.STRING
    },
    bio: {
        type: Sequelize.STRING
    },
    address: {
        type: Sequelize.STRING
    },
    img: {
        type: Sequelize.STRING
    }
})