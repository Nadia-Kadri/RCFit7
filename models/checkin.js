const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Checkin = new Schema({
  classID: {
    type: String,
    required: "ClassID is Required"
  },
  userID: {
    type: String,
    required: "UserID is Required"
  }
});

module.exports = mongoose.model('Checkin', Checkin);
