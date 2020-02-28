const express = require("express");
const router = express.Router();
const db = require("../../models");

// Post route for Admin to create a scheduled class
router.post("/create", function(req, res) {
  console.log("creating schedule");

  db.Schedule.create({ datetime: req.body.datetime, class: req.body.class, trainer: req.body.trainer })
  .then(result => {
    console.log(result)
    res.send(result)
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

module.exports = router;