 const mongoose =require("mongoose")
const usersch =require("./user.models")
 const loginSchema =mongoose.Schema(
     {
userName:{type:String,require:true},
password:{type:String,reqire:true},
userref:{type:mongoose.Schema.Types.ObjectId,ref:"user",require:true}

     }
 )

 module.exports =mongoose.model("login",loginSchema)