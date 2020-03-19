const Tranfer = require('../models/tranfer.model')
module.exports = {

    get_tranfer: function(req,res){
        res.render('./tranfers/index',{
            csurfToken: req.csrfToken()
        });
    },
    
    post_tranfer: async function(req,res){
        var tranfer = {
            account: req.body.accountId,
            amount: req.body.amount,
            userID: req.signedCookies.user_id
        };
        await Tranfer.create(tranfer)
        res.redirect('./tranfer/');

    }

}
