const Product = require('../models/product');

async function createProduct(req,res){
    console.log(req.body);
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

async function updateProduct(req, res) {
    try {
        const { id } = req.params;
        const updates = req.body; // Extract updates from the request body
        const updatedProduct = await Product.findOneAndUpdate({ id: id }, updates, { new: true });
        
        res.status(201).json(updatedProduct);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


async function deleteProduct(req,res){
    try{
        const { id } = req.params;
        await Product.findOneAndRemove({ id: id });
        res.sendStatus(201);
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