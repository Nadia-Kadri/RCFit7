const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Membership = new Schema({
  name: {
    type: String,
    unique: true,
    trim: true,
    required: "Name is Required"
  },
  duration: {
    type: Number,
    required: "Duration is Required"
  },
  cost: {
    type: Number,
    required: "Cost is Required"
  }
});

module.exports = mongoose.model('Membership', Membership);
