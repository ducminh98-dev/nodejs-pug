
const User = require('../models/user.model');


module.exports = {
    
    index: async function(req,res){
        var users = await User.find();
        res.render('./user/users',{ users: users
        });
    },

    search: async function(req,res){
        var q = req.query.q;
        console.log(q);
        var user = await User.find();
        var matchUser = user.filter(function(user){
            return user.name.toLowerCase().indexOf(q.toLowerCase())  !== -1;
        });
        matchUser.value = q;
        res.render('./user/users',{
            users: matchUser
        })
    },

    getCreate: function(req,res){
        res.render('./user/create');
    },

    postCreate: async function(req,res){
        if(req.file){
        req.body.avatar = req.file.path.split('/').slice(1).join('/');
        }
        await User.create(req.body);
        res.redirect('/users')
    },

    view: async function(req,res){
        var id = req.params.id;
        var user = await User.findById(id)
        res.render('./user/view',{users: user})
    },
    
    delete: async function(req,res){
        var id = req.params.id;
        await User.findByIdAndDelete({_id: id})
        res.redirect('/users')
    },

    edit: async function(req,res){
        var id = req.params.id;
        await User.findByIdAndUpdate(id,{ $set: {name: 'bayby im real'}})
        res.redirect('/users');
    }
}