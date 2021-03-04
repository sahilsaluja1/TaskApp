module.exports.delete=function(req,res){
    const task=require('../model/task');
    var value=req.body.val;
    task.findByIdAndDelete(value,function(err){
        if(err){
            console.log("Error in deleting the value");
            return;
        }
        return;
    })
    return res.redirect('back');
}