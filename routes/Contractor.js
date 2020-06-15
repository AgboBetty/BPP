const express = require('express');
const contractorRouter = express.Router();
const passport = require('passport');
const passportConfig = require('../Passport');
const JWT = require('jsonwebtoken');
const Contractor = require('../models/Contractor');
const Role = require('../models/Role')


// contractor register endpoint
contractorRouter.post('/register', (req,res)=>{
    const { username,password,role }= req.body;
    Contractor.findOne({username}, (err, contractor)=>{
        if(err)
        res.status(500).json({message: {msgBody: "error has occured", msgError: true}})
    if(contractor)
    res.status(400).json({message: {msgBody: "username is already taken", msgError: true}})
else{
    const newContractor = new Contractor({username,password,role})
newContractor.save(err=>{
    if(err)
    res.status(500).json({message: {msgBody: "error occured", msgError: true}})
    else
    res.status(201).json({message: {msgBody: "Account successfully created", msgError: false}})
});
}  ; 
}) ;
});

module.exports = contractorRouter;