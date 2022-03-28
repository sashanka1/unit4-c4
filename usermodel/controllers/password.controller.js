const express =require("express");
const Login =require("../models/login.model")
const router =express.Router(); 
router.post("/",async(req,res)=>{
    try {
        const login  =await Login.create(req.body);

        res.send(login);
    } catch (error) {
        res.status(500).send({message:error.message});
        
    }
})


router.get("/:id",async(req,res)=>{
    try {
        const Loginusers  =await Login.find({userid:req.params.id});

        res.send(Loginusers);
    } catch (error) {
        res.status(500).send({message:error.message});
        
    }
})


module.exports=router