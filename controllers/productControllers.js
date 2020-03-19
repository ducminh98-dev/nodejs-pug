var Product = require('../models/product.model');

module.exports = {
    index: async function(req,res) {
        var query = await Product.find();
        var page = parseInt(req.query.page) || 1
        var item_in_page = 4
        var start = (page-1)* item_in_page
        var end = page * item_in_page 

        var products = query.slice(start,end);

        products.number_page = page;
        
        console.log(products.number_page);
        res.render('products/index',{
            products: products
        });
        
    }
    
}