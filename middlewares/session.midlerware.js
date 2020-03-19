var db = require('../db')
const shortid = require('shortid');

module.exports = function(req, res, next){ 
        if(!req.signedCookies.session_id){
            var session_id = shortid.generate();
            res.cookie('session_id',session_id,{
                signed: true
            });
            db.get('Session').push({
                id : session_id,       
            }).write();
            
       };
        next();
    }

