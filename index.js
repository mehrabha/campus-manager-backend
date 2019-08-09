const express = require('express');
const app = express();
const Joi = require('joi');
const campusRouter = require('./campusRouter.js');
const studentRouter = require('./studentRouter.js');

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}`));

// Middleware
app.use(express.json());

app.get('/api', (request, response) => {
    response.send('CampusManager API');
});

app.use('/api/campuses', campusRouter);
app.use('/api/students', studentRouter);