const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
  isAdmin: {
    type: Boolean,
    required: "isAdmin is Required"
  },
  isTrainer: {
    type: Boolean,
    required: "isTrainer is Required"
  },
  firstName: {
    type: String,
    trim: true,
    required: "firstName is Required"
  },
  lastName: {
    type: String,
    trim: true,
    required: "lastName is Required"
  },
  email: {
    type: String,
    required: 'Email address is required',
    unique: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address']
  },
  birthDate: {
    type: Date,
    required: "birthDate is Required"
  },
  membership: {
    type: Schema.Types.ObjectId,
    ref: "Membership"
  },
  membershipStatus: {
    type: Boolean
  },
  created: { type: Date, required: true, default: Date.now() },
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
