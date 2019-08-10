const express = require('express');
const app = express();
const Joi = require('joi');
const campusRouter = require('./campusRouter.js');
const studentRouter = require('./studentRouter.js');
const db = require('./config/database.js');

// Check if database is connected
db.authenticate()
.then(() => console.log("Database connected"))
.catch(error => console.log("Database not connected. ", error));

// Set port
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}`));

// Middleware
app.use(express.json());

app.get('/api', (request, response) => {
    response.send('CampusManager API');
});

// Routes for campuses and students
app.use('/api/campuses', campusRouter);
app.use('/api/students', studentRouter);