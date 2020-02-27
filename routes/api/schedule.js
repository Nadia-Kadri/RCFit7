const express = require("express");
const router = express.Router();
const db = require("../../models");

const dummySchedule = {
  datetime: new Date(),
  class: "5e57e28914d73207a2af4be8",
  trainer: "5e57d381ebe59b98ff5d24a4"
}

// Post route for Admin to create a scheduled class
router.post("/create", function(req, res) {
  console.log("creating schedule");

  db.Schedule.create(dummySchedule)
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