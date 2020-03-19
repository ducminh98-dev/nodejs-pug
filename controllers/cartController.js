


module.exports ={
    add: function(req,res,next){
        var sessionId = req.signedCookies.session_id;
        var id_product = req.params.productID;

        if(!sessionId){
            res.redirect('/products');
            return;
        }
        var count = db.get('Session').
        find({id: sessionId})
        .get('cart.'+ id_product,0)
        .value();
                        
        db.get('Session').find({id: sessionId})
          .set('cart.'+id_product ,count+1)
          .write();
        
        res.redirect('/products');
    }
}