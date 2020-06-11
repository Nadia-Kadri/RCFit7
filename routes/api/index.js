const router = require("express").Router();
const userRoutes = require("./users");
const classRoutes = require("./class");
const scheduleRoutes = require("./schedule");
const contactRoute = require("./contact");

// User routes
router.use(userRoutes);
router.use("/class", classRoutes);
router.use("/schedule", scheduleRoutes);
router.use(contactRoute);

module.exports = router;