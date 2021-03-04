const task=require('../model/task')
module.exports.boot=function(req,res){

    task.find({},function(err,task){
        if(err){
            console.log("Error in fetching");
            return;
        }
        res.render('home',{tasks:task});
    });
}