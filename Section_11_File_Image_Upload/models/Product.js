const { default: mongoose } = require('mongoose');
const moongoose = require('mongoose');

const ProductSchema = new moongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Product', ProductSchema);
