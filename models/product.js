const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: String,
    description:String,
    price:String,
},{timestamps: true}
);

module.exports = mongoose.model('Product',productSchema);