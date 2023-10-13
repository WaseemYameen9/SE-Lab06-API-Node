const mongoose = require('mongoose');



const invoiceSchema = mongoose.Schema({
    invoiceNumber: String,
    items: String,
    cost: String,
    customer: String
},{timestamps: true});

module.exports = mongoose.model('Invoice',invoiceSchema)