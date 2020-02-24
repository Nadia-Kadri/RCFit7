const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Class = new Schema({
  datetime: {
    type: Date,
    required: "Date and Time is Required"
  },
  description: {
    type: String,
    trim: true,
    default: ''
  },
  trainer: {
    type: String,
    trim: true,
    default: ''
  }
});

module.exports = mongoose.model('Class', Class);
