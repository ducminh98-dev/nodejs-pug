const md5 = require('md5');
const User = require('../models/user.model');

module.exports ={
    login: function(req,res){
        if(req.signedCookies.user_id){
            res.redirect('/'); 
        }
        else{
            res.render('./authen/login');
        }
    },

    postLogin: async function(req,res){
        var email = req.body.email;
        var pass = req.body.password;
        var hashpass = md5(pass);
        var errors =[];
        var user = await User.find({email: email})

        if(!user.length){
            errors.push("Email is'nt valid");
            res.render('./authen/login',{
                errors: errors,
                values: req.body
            }); 
            return;
        }

        if(user[0].password !== hashpass){
            errors.push("Password is'nt correct");
            res.render('./authen/login',{
                errors: errors,
                values: req.body
            });
          
            return;
        }
        res.cookie('user_id', user[0].id,{
            signed: true
        });
        res.redirect('/users');
    },
    
    logout: function(req,res){
        res.clearCookie('user_id');
        res.redirect('/');
    }
}