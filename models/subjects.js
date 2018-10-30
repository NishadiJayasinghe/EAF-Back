const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create subjects schema & model
const subjectsSchema = new Schema({
    Course_Code:{
        type: String,
         required: [true, 'Registration field is required'] 
    },
    Subject:{
        type: String
    },
    Year:{
        type: String
    },
    Semester:{
        type:String
    },
    CompulsaryOrElective:{
        type: String
    },
    available: {
        type: Boolean,
        default: false
    },

});

const subjects = mongoose.model('subjects', subjectsSchema);

module.exports = subjects;