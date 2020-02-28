const express = require("express");
const router = express.Router();
const db = require("../../models");

// Post route for Admin to create a scheduled class
router.post("/create", function(req, res) {
  console.log("creating schedule");

  db.Schedule.create({ datetime: req.body.datetime, class: req.body.class, trainer: req.body.trainer })
  .then(result => {
    db.Schedule.findOne({ _id: result._id })
    .populate("class")
    .populate("trainer")
    .then(popResult => {
      console.log(popResult)
      res.send(popResult)
    })
    .catch(err => console.log(err.message));
  })
  .catch(err => console.log(err.message));
});

// Get route for schedule to display to users
router.get("/userView", function(req, res) {
  console.log("view schedule");

  db.Schedule.find({})
  .populate("class")
  .populate("trainer")
  .then(result => {
    console.log(result)
    res.send(result)
  })
  .catch(err => console.log(err.message));
})

// Put route for users to sign up for classes
router.put("/user/signup/:classId/:userId", function(req, res) {
  db.Schedule.findOneAndUpdate({ _id: req.params.classId }, { $push: { users: req.params.userId } }, { new: true })
    .then(result => {
      console.log(result)
      res.json(result)
    })
    .catch(err => console.log(err.message));
});

// Get route for Admin to see who is signed up for a specific classes
router.get("/adminView/:id", function(req, res) {
  db.Schedule.findOne({ _id: req.params.id })
    .populate("users")
    .then(result => {
      console.log(result)
      res.send(result)
    })
    .catch(err => console.log(err.message));
})

module.exports = router;