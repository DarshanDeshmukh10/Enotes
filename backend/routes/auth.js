const express=require('express');
const User =require('../models/User');
const router=express.Router();
const {body,validationResult}=require('express-validator');
const bcrypt=require('bcryptjs');
var jwt=require('jsonwebtoken');
const JWT_SECRET='Darshanisagoodboy';
var fetchuser=require('../middleware/fetchuser')
//Router  1 : Creating a user 
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
    const salt=await bcrypt.genSalt(10);
    const secPass=await bcrypt.hash(req.body.password,salt);
    //creating new user
     user=await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      })//.then(user => res.json(user))
      //.catch(err=>{console.log(err)
        //res.json({error:'Please enter unique value for email'})})
        const data={user:{
            id:user.id
        }
    }
        const authtoken=jwt.sign(data,JWT_SECRET);
        res.json({authtoken});
    }
    //showing errors 
    catch(error){
        console.error(error.message);
        res.status(500).send("Internel server error occured");
    }
})


//Router 2 : Authnticate a user 
router.post('/login',[
    body('email','Enter a valid email').isEmail(),
    body('password','Password cannot be blank').exists(),
],async(req,res)=>{
//if there are errors then return then
const errors=validationResult(req);
if(!errors.isEmpty()){
    return res.status(400).json({errors: errors.array()});
}
const{email,password}=req.body;
try{
let user =await User.findOne({email});
//if user not exist in database
if(!user)
{
    return res.status(400).json({error:"Please Login with correct credentials"});
}
//comparing password using bcrypt
const passwordCompare=await bcrypt.compare(password, user.password);
if(!passwordCompare)
{
    return res.status(400).json({error:"Password is wrong"});
}
const data={
    user:{
        id:user.id
    }
}
const authtoken=jwt.sign(data,JWT_SECRET);
res.json({authtoken});
}
catch(error){
    console.error(error.message);
    res.status(500).send("Internel server error occured");
}
})

//Router 3: Getting user details after login
router.post('/getUser',fetchuser,async(req,res)=>{
try {
    userID=req.user.id;
 const user =await User.findById(userID).select("-password")
 res.send(user);
}
catch(error){
    console.error(error.message);
    res.status(500).send("Internel server error occured");
}
})

module.exports=router