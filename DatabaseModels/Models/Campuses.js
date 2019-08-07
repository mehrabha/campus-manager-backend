const Sequalize = require('sequelize');
const db = require('../db');

const campuses = db.define("campuses", {
    id:{
        type: Sequalize.INTEGER,
        allowNull: false
    },
    name:{
        type: Sequalize.STRING,
        allowNull: false
    },
    bio:{
        type: Sequalize.STRING,
        allowNull: true
    },
    address:{
        type: Sequalize.STRING,
        allowNull: false
    },
    img:{
        type: Sequalize.STRING,
        allowNull: true
    }
});

module.exports = campuses;