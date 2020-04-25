const express = require("express");
const router = express.Router();
const db = require("../../models");
const moment = require("moment");
var isAuthenticated = require("../../config/middleware/isAuthenticated");

// Post route for Admin to create a scheduled class
router.post("/create", function(req, res) {
  db.Schedule.create({ datetime: req.body.datetime, class: req.body.class, trainer: req.body.trainer })
  .then(result => {
    db.Schedule.findOne({ _id: result._id })
    .populate("class")
    .populate("trainer")
    .then(popResult => {
      console.log("schedule created")
      res.send(popResult)
    })
    .catch(err => console.log(err.message));
  })
  .catch(err => console.log(err.message));
});

// Delete route for Admin to delete a class
router.delete("/delete/:id", function(req, res) {
  db.Schedule.deleteOne({ _id: req.params.id })
  .then(result => {
    console.log("schedule deleted")
    res.send(result)
  })
  .catch(err => console.log(err.message));
})

// Get route for schedule to display to users and Admin
router.get("/userView", function(req, res) {
  db.Schedule.find({})
  .sort({ datetime: 1 })
  .populate("class")
  .populate("trainer")
  .then(result => {
    const futureSchedules = result.filter(schedule => {return schedule.datetime > moment()})
    console.log("get schedules success")
    res.send(futureSchedules)
  })
  .catch(err => console.log(err.message));
})

// Put route for users to sign up for classes
router.put("/user/signup/:scheduleId", isAuthenticated, function(req, res) {
  db.Schedule.findOneAndUpdate({ _id: req.params.scheduleId }, { $push: { users: req.user._id } }, { new: true })
    .then(result => {
      console.log("user sign-up success")
      res.json(result)
    })
    .catch(err => console.log(err.message));
});

// Put route for users to cancel class
router.put("/user/cancel/:scheduleId", isAuthenticated, function(req, res) {
  db.Schedule.findOneAndUpdate({ _id: req.params.scheduleId }, { $pull: { users: req.user._id } }, { new: true })
    .then(result => {
      console.log("user cancel success")
      res.json(result)
    })
    .catch(err => console.log(err.message));
});

// Get route for Admin to see who is signed up for a specific classes
router.get("/admin/view/:id", function(req, res) {
  db.Schedule.findOne({ _id: req.params.id })
    .populate("users")
    .then(result => {
      console.log("get users signed up success")
      res.send(result)
    })
    .catch(err => console.log(err.message));
})

module.exports = router;