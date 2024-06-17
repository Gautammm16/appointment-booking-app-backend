const express = require('express');
const router = express.Router();
const User = require('../models/user.model.js')
const bcrypt  = require("bcryptjs")

router.post('/register',async(req,res)=>{

    try {
const userExist = await User.findOne({email:req.body.email});
if(userExist){

    res.status(200).send({message:"User Already Exist",success:false});
}
        const password =req.body.password ; 
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);
        const newUser = new User(req.body); 
        await newUser.save();
        res
        .status(200)
        .send({message:"User created sucessfully",success:true});
    } catch (e) {
        res.status(500).send({message:"Error creating user",sucess:false})
    }
})

router.post('/login',async(req,res)=>{

    try {
        
    } catch (e) {
        
    }
})

module.export = router;
