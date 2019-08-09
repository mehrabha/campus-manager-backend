const Sequelize = require('sequelize');
const db = require('../config/database');

module.exports = db.define('Student', {
    name: {
        type: Sequelize.STRING
    },
    img: {
        type: Sequelize.STRING
    },
    gpa: {
        type: Sequelize.DECIMAL
    },
    college: {
        type: Sequelize.INTEGER
    }
});