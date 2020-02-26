const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Class = new Schema({
  title: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  duration: {
    type: Number
  }
});

module.exports = mongoose.model('Class', Class);
