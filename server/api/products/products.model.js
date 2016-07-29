'use strict';

import mongoose from 'mongoose';

var ProductsSchema = new mongoose.Schema({
  name: String,
  sku: String,
  info: String,
  category: String,
  price: Number,
  fullprice: Number,
  active: Boolean
});

export default mongoose.model('Products', ProductsSchema);
