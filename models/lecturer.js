const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create lecturer schema & model
const lecturerSchema = new Schema({
    Registration_Number:{
        type: String,
        required: [true, 'Registration_Number field is required'] 
    },
    Password:{
        type: String,
        required: [true, 'password field is required'] 
    },
    Post:{
        type: String
    },
    ID_Number:{
        type: String,
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
    available: {
        type: Boolean,
        default: false
    },
    
    //add in geo location
});

const lecturer = mongoose.model('lecturer', lecturerSchema);

module.exports = lecturer;