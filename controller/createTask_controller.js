module.exports.create=function(req,res){
    const db=require('../model/task');
    var date=req.body.date;
    console.log(typeof date);
    db.create({
        desc:req.body.desc,
        date:req.body.date,
        category:req.body.option
    },function(err,newtask){
        if(err){
            console.log(err);
            return ;
        }
    });
    return res.redirect('back');
}