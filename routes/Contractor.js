const express = require('express');
const contractorRouter = express.Router();
const passport = require('passport');
const passportConfig = require('../Passport');
const JWT = require('jsonwebtoken');
const Contractor = require('../models/Contractor');
const Role = require('../models/Role');


const signToken = contractorID =>{
    return JWT.sign({
        iss : "NoobCoder",
        sub : contractorID
    },"NoobCoder",{expiresIn: "7d"});
}

//test
contractorRouter.get('/test', (req,res)=>{
    return(
        res.status(201).json({message: {msgBody: "testing succesful", msgError: false}})
    );
});

// // contractor register endpoint
// contractorRouter.post('/register', (req,res)=>{
//     const { username,password,role,email }= req.body;
//     Contractor.findOne({username}, (err, contractor)=>{
//         if(err)
//         return;
//         res.status(500).json({message: {msgBody: "error has occured", msgError: true}})
//     if(contractor)
//     res.status(400).json({message: {msgBody: "username is already taken", msgError: true}})
// else{
//     const newContractor = new Contractor({username,password,role,email})
// newContractor.save(err=>{
//     if(err)
//     res.status(500).json({message: {msgBody: "error occured", msgError: true}})
//     else
//     res.status(201).json({message: {msgBody: "Account successfully created", msgError: false}})
// });
// }  ; 
// }) ;
    
// });

// contractor register endpoint
contractorRouter.post('/register', (req,res)=>{

    const { username,password,role,email }= req.body;
    Contractor.findOne({username}, (err, contractor)=>{


        if(err){
            return res.status(500).json({message: {msgBody: "error has occurred", msgError: true}});
        }

        if(contractor){
            return res.status(400).json({message: {msgBody: "username is already taken", msgError: true}});
        } else {

            const newContractor = new Contractor({username,password,role,email})

            newContractor.save(err=>{
                if(err){
                    return res.status(500).json({message: {msgBody: "error occurred", msgError: true}});
                } else {
                    return res.status(201).json({message: {msgBody: "Account successfully created", msgError: false}});
                }
            });
        }
    });
});

// contractor Login processing
contractorRouter.post('/login',passport.authenticate('local',{session : false}),(req,res)=>{
    if(req.isAuthenticated()){
       const {_id,username,role} = req.contractor;
       const token = signToken(_id);
       res.cookie('access_token',token,{httpOnly: true, sameSite:true}); 
       res.status(200).json({isAuthenticated : true,contractor : {username,role}});
    }
});

module.exports = contractorRouter;