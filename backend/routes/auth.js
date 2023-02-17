const express=require('express');
const User =require('../models/User');
const router=express.Router();
const {body,validationResult}=require('express-validator');
//name and mail should be greater than 3 character else showing errors   
router.post('/createUser',[
    body('name','Enter a valid name').isLength({min:3}),
    body('email','Enter a valid email').isEmail(),
    body('password','Password must be at least 3 characters').isLength({min:3})
],async(req,res)=>{
    //if error then return error 
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array() })
    }
    //whether user with same email exist already
    try{
    let user =await User.findOne({email: req.body.email});
    if(user){
        return res.status(400).json({error:"Sorry a user already exist with same E-mail"})
    }
     user=await User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
      })//.then(user => res.json(user))
      //.catch(err=>{console.log(err)
        //res.json({error:'Please enter unique value for email'})})
        res.json(user)
    }
    //showing errors 
    catch(error){
        console.error(error.message);
        res.status(500).send("some error occured");
    }
})
module.exports=router