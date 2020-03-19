const Tranfer = require('../models/tranfer.model')
const User = require('../models/user.model')

module.exports ={
    validate: async function(req,res,next){
        var errors= [];
        if(!req.body.accountId){
            errors.push("account is not empty");
        }
        else
        {   let id = req.body.accountId
            let account = await User.findById(id)
            if(!account)
            {
                errors.push("account isnt valid")
            }
        }
        
        if(!req.body.amount){
            errors.push("amount isnt empty");
        }
        if(errors.length ){
            res.render('./tranfers/index',{errors: errors})
            return;
        }
        next();
    }
}