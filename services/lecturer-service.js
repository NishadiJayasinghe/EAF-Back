const express = require('express');
const router = express.Router();
const lecturer = require('../models/lecturer');

//get a list of lecturers from the db
router.get('/lecturers',function(req,res){
    res.send({type:'GET'});
}); 

// add a new lecturer to the db
router.post('/lecturers',function(req ,res){
    lecturer.create(req.body,function(err){
        if(err){
            res.status(400).send(err);
        }
        else{
            res.status(200).send({success:"lecturer created"});
        }   
    });
});

//update a lecturer in the db
router.put('/lecturers/:id',function(req,res){
    res.send({type:'PUT'});
});

//delete a lecturer from db
router.delete('/lecturers/:id',function(req,res){
    res.send({type:'DELETE'});
});

module.exports = router;