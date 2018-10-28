const express = require('express');
const router = express.Router();
const admin = require('../models/admin');

//get a list of admins from the db
router.get('/admins',function(req,res){
    res.send({type:'GET'});
}); 

// add a new admin to the db
router.post('/admins',function(req ,res){
    admin.create(req.body,function(err){
        if(err){
            res.status(400).send(err);
        }
        else{
            res.status(200).send({success:"admin created"});
        }   
    });
});

//update a admin in the db
router.put('/admins/:id',function(req,res){
    res.send({type:'PUT'});
});

//delete a admin from db
router.delete('/admins/:id',function(req,res){
    res.send({type:'DELETE'});
});

module.exports = router;