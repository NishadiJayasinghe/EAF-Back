const express = require("express");
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const studentService = require('./services/student-service');
const lecturerService = require('./services/lecturer-service');
const adminService = require('./services/admin-service');

//set up express app
const app = express();

//connect to database
mongoose.connect('mongodb://localhost/database', function(err){
    if(err) {
        console.log('Some problem with the connection ' +err);
    } else {
        console.log('The Mongoose connection is ready');
    }
})

//connect to frontend
var cors =require('cors');
app.use(
    cors(
        {
            origin:'http://localhost:4200'
        }
    )
);

app.use(bodyparser.json());
app.use("/student",studentService);
app.use("/admin",adminService);
app.use("/lecturer",lecturerService);

//listen for requests
app.listen(process.env.port || 4500,function(){
    console.log('app is listening on port on port 4500');
});