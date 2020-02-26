const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Schedule = new Schema({
  datetime: {
    type: Date,
    required: "Date and Time is Required"
  },
  class: {
    type: Schema.Types.ObjectId,
    ref: "Class"
  },
  trainer: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ]
});

module.exports = mongoose.model('Schedule', Schedule);