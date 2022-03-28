


const mongoose =require("mongoose");



const todoSchema =mongoose.Schema(
    {
        title:{type:String,require:true},
        userid:{type:mongoose.Schema.Types.ObjectId,ref:"user",require:true}

    },
    {
        timestamps:true,
        varsionKey:false,
    }
);

module.exports=mongoose.model("todo",todoSchema)