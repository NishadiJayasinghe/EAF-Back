const express = require('express');
const router = express.Router();
const student = require('../models/student');


//get a list of students from the db
router.get('/students',function(req,res){
    res.send({type:'GET'});
}); 

// add a new student to the db
router.post('/students',function(req ,res){
    student.create(req.body,function(err){
        if(err){
            res.status(400).send(err);
        }
        else{
            res.status(200).send({success:"student created"});
        }   
    });
});

//update a students in the db
router.put('/students/:id',function(req,res){
    res.send({type:'PUT'});
});

//delete a student from db
router.delete('/students/:id',function(req,res){
    res.send({type:'DELETE'});
});
  
module.exports = router;