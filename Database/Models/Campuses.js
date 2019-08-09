const Sequalize = require('sequelize');
const db = require('../db');

const campus = db.define("campuses", {
    id:{
        type: Sequalize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true 
    }, 
    name:{
        type: Sequalize.STRING,
        allowNull: false
    },
    bio:{
        type: Sequalize.STRING,
        allowNull: true,
        unique: true
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

module.exports = campus;