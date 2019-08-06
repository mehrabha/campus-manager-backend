const express = require('express');
const app = express();
const campusRouter = require('./campusRouter');
const studentRouter = require('./studentRouter');
const bodyParser = require('body-parser');
const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`Server is running on PORT${PORT}`);
})

//Middleware- Body parser is necessary for POST and PUT requests to work
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/api/campuses', campusRouter);

app.use('/api/students', studentRouter);