const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  image: String,
  price: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);