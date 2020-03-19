var User = require('../models/user.model');
const md5 = require('md5');

module.exports = {
    getSign_up: function(req,res){
        res.render('./authen/sign_up');
    },

    postSign_up: async function(req,res){

        if(req.file){
            req.body.avatar = req.file.path.split('/').slice(1).join('/');
            }
        var infor = {
            email: req.body.email,
            name: req.body.name,
            password: md5(req.body.password),
            phone: req.body.phone,
            avatar: req.body.avatar
        }

        var user = await User.find({email: infor.email})
        if(user.length){
            var errr = [];
            errr.push("EMail was valid");
            res.render('./authen/sign_up',{
                errors: errr
            })

            return;
        }

        await User.create(infor)
        res.redirect('/');
        
    }
}