module.exports ={
    postCreate: function(req,res,next){
        var errors =[];
        if(!req.body.name){
            errors.push("Name is not valid");
        }
        if(!req.body.phone){
            errors.push("Phone is not valid");
        }
        if(errors.length)
        {
            res.render('./user/create',{
                errors: errors,
                values: req.body
            });
            return;
        }
        next();
    }

}