const mongoose =require("mongoose");


const userSchema =mongoose.Schema(
    {
        firstName:{type:String,require:true},
        lastName:{type:String,require:false},
        email:{type:String,require:true},
        password:{type:String,require:true},
    },
    {
        timestamps:true,
        versionKey:false
    },
);


module.exports=mongoose.model("user",userSchema);