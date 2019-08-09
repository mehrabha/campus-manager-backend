const express = require('express');
const app = express();
const campusRouter = require('./campusRouter');
const studentRouter = require('./studentRouter');
const bodyParser = require('body-parser');

//Middleware- Body parser is necessary for POST and PUT requests to work
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/campuses', campusRouter);
app.use('/students', studentRouter);