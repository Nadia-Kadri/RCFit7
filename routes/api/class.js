const express = require("express");
const router = express.Router();
const db = require("../../models");

// Post route for Admin to create new class
router.post("/create", function(req, res) {
  db.Class.create({ title: req.body.title, description: req.body.description, duration: req.body.duration })
  .then(result => {
    console.log("class created")
    res.send(result)
  })
  .catch(err => console.log(err.message));
});

// Get route for Admin to view which class to select when creating a scheduled class
router.get("/view", function(req, res) {
  db.Class.find({})
  .then(result => {
    console.log("get classes success")
    res.send(result)
  })
  .catch(err => console.log(err.message));
})

// Delete route for Admin to delete a class
router.delete("/delete/:id", function(req, res) {
  db.Class.deleteOne({ _id: req.params.id })
  .then(result => {
    console.log("class deleted")
    res.send(result)
  })
  .catch(err => console.log(err.message));
})

module.exports = router;