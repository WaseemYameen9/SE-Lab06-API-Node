const purchaseHistory = require('../models/purchaseHistory');

async function purchase(req,res)
{
    try{
        const purchas = await purchaseHistory.create(req.body);
        res.status(201).json(purchas);

    }
    catch{
        res.status(500).json({error: err.message});
    }
}


async function getAllPurchaseHistory(req,res)
{
    try{
        const pH = await purchaseHistory.find();
        res.status(201).json(pH);
    }
    catch{
        res.status(500).json({error : err.message});
    }
}

async function deletePurchaseHistory(req,res)
{
    try{
        const { id } = req.params;
        await purchaseHistory.findByIdandRemove(id);
        res.sendStatus(201);
    }
    catch{
        res.status(500).json({error : err.message});
    }
}

async function updatePurchaseHistory(req,res)
{
    try{
        const { id } = req.params;
        const uH = await purchaseHistory.findByIdandUpdate(id);
        res.status(201).json(uH);
    }
    catch{
        res.status(500).json({error : err.message});
    }
}


module.exports = {
    purchase,
    getAllPurchaseHistory,
    deletePurchaseHistory,
    updatePurchaseHistory
}