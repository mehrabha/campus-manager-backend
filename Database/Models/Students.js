const Sequalize = require('sequelize');
const db = require('../db');

const students = db.define("students", {
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
    img:{
        type: Sequalize.STRING,
        allowNull: true
    },
    gpa:{
        type: Sequalize.DECIMAL,
        allowNull: true
    },
    college:{
        type: Sequalize.INTEGER,
        allowNull: false
    }
});

module.exports = students;