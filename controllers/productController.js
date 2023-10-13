const Product = require('../models/product');

async function createProduct(req,res){
    try{
        const product = await Product.create(req.body);
        res.status(201).json(product);
    }
    catch{
        res.status(500).json({error: err.message});
    }
}

async function getAllProducts(req,res){
    try{
        const products = await Product.find();
        res.status(201).json(products);
    }
    catch{
        res.status(500).json({error:err.message});
    }
}

async function updateProduct(){
    try{
        const { id } = req.params;
        const updatedProduct = await Product.findByIdAndUpdate(id,req.body,{new:true});
        res.json(updatedProduct);

    }
    catch(err){
        res.status(500).json({error: err.message});
    }
}

async function deleteProduct(req,res){
    try{
        const { id } = req.params;
        await Product.findByIdAndRemove(id);
        res.sendStatus(204);
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
}

module.exports={
    createProduct,
    deleteProduct,
    updateProduct,
    getAllProducts
};