const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//create student schema & model
const StudentSchema = new Schema({
    Index_Number: {
        type: String,
        required: [true, 'Index_Number field is required'] 
    },
    Password:{
        type: String,
        required: [true, 'password field is required'] 
    },
    Registration_Number:{
        type: String
    },
    Name:{
        type: String
    },
    Email:{
        type: String
    },
    /*Photo:[{
        data:buffer,
        ContentType: String,
    }],*/
    Academic_Year:{
        type: String
    },
    available: {
        type: Boolean,
        default: false
    },
   
});

const student = mongoose.model('student', StudentSchema);

module.exports = student;