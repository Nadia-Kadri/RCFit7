const router = require("express").Router();
const userRoutes = require("./users");
const classRoutes = require("./class");
const scheduleRoutes = require("./schedule");

// User routes
router.use(userRoutes);
router.use("/class", classRoutes);
router.use("/schedule", scheduleRoutes);

module.exports = router;