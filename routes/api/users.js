const passport = require("passport");
const express = require("express");
const router = express.Router();
const db = require("../../models");
var isAuthenticated = require("../../config/middleware/isAuthenticated");


router.post("/register", function(req, res) {
  console.log("registering user");

  db.User.register(
    new db.User({ firstName: req.body.firstName, lastName: req.body.lastName, birthday: req.body.birthday, username: req.body.username, email: req.body.email }),
    req.body.password,
    function(err, user) {
      if (err) {
        console.log(err);
        return res.json(err);
      }
      passport.authenticate("local")(req, res, function(data) {
        res.json(req.user);
      });
    }
  );
});

router.post("/login", function(req, res, next) {
  passport.authenticate("local", function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.json(info);
    }
    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }
      return res.json(user);
    });
  })(req, res, next);
});

router.get("/logout", function(req, res) {
  req.logout();
  res.json({ message: "logged out" });
});

router.get("/user", function(req, res) {
  console.log("available username");
  if (req.query.username) {
    db.User.find({ username: req.query.username })
      .then(result => {
        res.json({ length: result.length });
      })
      .catch(err => res.status(422).json(err));
  } else {
    res.json({ message: "no username entered for query" });
  }
});

router.get("/authorized", isAuthenticated, function(req, res) {
  res.json(req.user);
});

// Get route for Admin to view which trainer to select when creating a scheduled class
router.get("/trainers", function(req, res) {
  db.User.find({ isTrainer: true })
    .then(result => {
      console.log("get trainers success")
      res.json(result)
    })
    .catch(err => console.log(err.message));
});

// Put route for Admin to update a user and make them a trainer
router.put("/create/trainer/:email", function(req, res) {
  db.User.findOneAndUpdate({ email: req.params.email }, {$set: {isTrainer: true}})
    .then(() => {
      console.log("user updated to isTrainer: true")
      res.json("user updated to isTrainer: true")
    })
    .catch(err => console.log(err.message));
});

// Put route for Admin to update a user so they are no longer a trainer
router.put("/delete/trainer/:id", function(req, res) {
  db.User.findOneAndUpdate({ _id: req.params.id }, {$set: {isTrainer: false}})
    .then(() => {
      console.log("user updated to isTrainer: false")
      res.json("user updated to isTrainer: false")
    })
    .catch(err => console.log(err.message));
});

module.exports = router;