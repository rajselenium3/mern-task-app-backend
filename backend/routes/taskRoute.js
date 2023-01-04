const express = require("express");
const { createTask, getTasks } = require("../controllers/taskController");
const Task = require("../models/taskModel");
const router = express.Router();

router.post("/api/tasks", createTask);
router.get("/api/tasks", getTasks);

module.exports = router;
