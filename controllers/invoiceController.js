const Invoice = require('../models/invoice');

async function createInvoice(req,res)
{
    try{
        const invoice = await Invoice.create(req.body);
        res.status(201).json(invoice);

    }
    catch{
        res.status(500).json({error: err.message});
    }
}


async function getAllInvoices(req,res)
{
    try{
        const Invoices = await Invoice.find();
        res.status(201).json(Invoices);
    }
    catch{
        res.status(500).json({error : err.message});
    }
}

async function deleteInvoice(req,res)
{
    try{
        const { id } = req.params;
        await Invoice.findByIdandRemove(id);
        res.sendStatus(201);
    }
    catch{
        res.status(500).json({error : err.message});
    }
}

async function updateInvoice(req,res)
{
    try{
        const { id } = req.params;
        const updatedInvoice = await Invoice.findByIdandUpdate(id);
        res.status(201).json(updateInvoice);
    }
    catch{
        res.status(500).json({error : err.message});
    }
}


module.exports = {
    createInvoice,
    getAllInvoices,
    updateInvoice,
    deleteInvoice
}