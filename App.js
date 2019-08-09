const express = require('express');
const app = express();
const apiRouter = require("./Router/apiRouter");
const PORT = 3000;
const db = require('./Database');
const seedDatabase = require("./seedDatabase");

//Force: true basically wipes the local database clean.
//this file is only run once, when the app is started.
db.sync({ force: true }).then(async () => {
    seedDatabase();//Then we are repopulating the wiped database with our original dummy data.

    app.use("/api", apiRouter); //init express app
    app.listen(PORT, ()=>{
        console.log(`Server is running on PORT${PORT}`);
    })
});
