const express = require('express');
const router = express.Router();
const subjects = require('../models/subjects');

//get a list of admins from the db
router.get('/subjects',function(req,res){
    res.send({type:'GET'});
}); 

// add a new admin to the db
router.post('/subjects',function(req ,res){
    subjects.create(req.body,function(err){
        if(err){
            res.status(400).send(err);
        }
        else{
            res.status(200).send({success:"subject created"});
        }   
    });
});

//update a subject in the db
router.put('/subjects/:id',function(req,res){
    res.send({type:'PUT'});
});

//delete a subject from db
router.delete('/subjects/:id',function(req,res){
    res.send({type:'DELETE'});
});

module.exports = router;