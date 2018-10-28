const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create admin schema & model
const adminSchema = new Schema({
    Registration_Numbr:{
        type: String,
        required: [true, 'Registration field is required'] 
    },
    Password:{
        type: String,
        required: [true, 'password field is required'] 
    },
    Name:{
        type: String
    },
    Email:{
        type: String
    },
    available: {
        type: Boolean,
        default: false
    },

    //add in geo location
});

const admin = mongoose.model('admin', adminSchema);

module.exports = admin;