const User = require('../models/user.model')


module.exports = {

    authen_login: async function(req, res, next){
        if(!req.signedCookies.user_id){
           res.redirect('/login');
        return;
       };
       var id = req.signedCookies.user_id
        var user = await User.findById(id)
        if(!user){
            res.redirect('/login');
            return;
        };
        res.locals.user = user;
        next();

    }

}