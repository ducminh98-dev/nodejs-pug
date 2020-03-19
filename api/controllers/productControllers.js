var Product = require('../../models/product.model');

module.exports = {
    get: async function(req,res) {
        var query = await Product.find();
        res.json(query)
        
    },

    detail: async function(req,res){


        var data = await Product.findById(req.params.id)
            .then(function(values){
                res.json(values)
            })
            .catch(function(err){
                res.send(err)
            })
        

    },

    post: async function(req,res){
         await Product.create(req.body)
         .then(function(data){
             res.json(data)
         })
         .catch(function(err){
             res.status(500).send(err)
         })
    },

    put: async function(req,res){
         await Product.findById(req.params.id).then( async function(values){

            await Product.findByIdAndUpdate(req.params.id, req.body)
            .then(function(values){
                res.status(200).send(values)
            })
            .catch(function(err){
                res.status(500).send(err)
            })
        })
        .catch( async function(){
            await Product.create(req.body)
            .then(function(values){
                res.send("not found item with id - create new item").json(values)
            })
            .catch(function(err){
                res.status(500).send(" cant update")
            })
        })
            

        // if(product)
        // {
        //     await Product.findByIdAndUpdate(req.params.id, req.body)
        //     .then(function(values){
        //         res.status(200).send(values)
        //     })
        //     .catch(function(err){
        //         res.status(500).send(err)
        //     })
        //     return
        // }
        // else{
        //     await Product.create(req.body)
        //     .then(function(values){
        //         res.send("not found item with id - create new item").json(values)
        //     })
        //     .catch(function(err){
        //         res.status(500).send(" can update")
        //     })
        // }

    },

    patch: async function(req,res){
        try{
            var product = req.body
            var id = req.params.id
           await Product.update({_id: ObjectId(id)}, {$set: product})
            res.status(200)
        }catch(err){
            res.status(500).send(err)
        }
    },
    

    delete: async function(req,res){
        try {
            var result = await Product.deleteOne({ _id: req.params.id }).exec();
            res.send(result);
        } catch (error) {
            res.status(500).send(error);
        }
    }
    
}