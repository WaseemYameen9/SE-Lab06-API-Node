const mongoose = require('mongoose');



const purchaseHistory = mongoose.Schema({
    items: String,
    cost: String,
    customer: String
},{timestamps: true});

module.exports = mongoose.model('purchaseHistory',purchaseHistory);