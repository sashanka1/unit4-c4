

const express =require("express");

const User =require("../models/user.models");

const router =express.Router();


router.post("/",async(req,res)=>{
    try {
        const user  =await User.create(req.body);

        res.send(user);
    } catch (error) {
        res.status(500).send({message:error.message});
        
    }
})

module.exports=router