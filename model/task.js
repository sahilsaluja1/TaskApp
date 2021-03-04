const mongoose=require('mongoose');
// Created the schema for a collection of tasks and exported it.
const taskSchema=new mongoose.Schema({

    desc:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    }
});

const task=mongoose.model('task',taskSchema);
module.exports=task;