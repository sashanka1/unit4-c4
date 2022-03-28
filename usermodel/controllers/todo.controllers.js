


const express =require("express");
const Todo =require("../models/todo.models")
const router =express.Router(); 
router.post("/",async(req,res)=>{
    try {
        const user  =await Todo.create(req.body);

        res.send(user);
    } catch (error) {
        res.status(500).send({message:error.message});
        
    }
})


router.get("/:id",async(req,res)=>{
    try {
        const user  =await Todo.find({userid:req.params.id});

        res.send(user);
    } catch (error) {
        res.status(500).send({message:error.message});
        
    }
})


module.exports=router