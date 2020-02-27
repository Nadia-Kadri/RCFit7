const express = require("express");
const router = express.Router();
const db = require("../../models");

// Post route for Admin to create new class
router.post("/create", function(req, res) {
  console.log("creating class");

  db.Class.create({ title: req.body.title, description: req.body.description, duration: req.body.duration })
  .then(result => {
    console.log(result)
    res.send(result)
  })
  .catch(err => console.log(err.message));
});

// Get route for Admin to view which class to select when creating a scheduled class
router.get("/view", function(req, res) {
  console.log("view classes");

  db.Class.find({})
  .then(result => {
    console.log(result)
    res.send(result)
  })
  .catch(err => console.log(err.message));
})

module.exports = router;