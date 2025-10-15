// routes/taskRoutes.js
const express = require("express");
const router = express.Router();
const { addTask, removeTask, displayTasks, clearAll, STATUS } = require("../controllers/taskController");

// health
router.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// display (?status=todo|in_progress|done)
router.get("/tasks", (req, res) => {
  const { status } = req.query;
  const tasks = displayTasks(status);
  res.json(tasks);
});

// add {title, notes?}
router.post("/tasks", (req, res) => {
  try {
    const { title, notes } = req.body || {};
    const task = addTask({ title, notes });
    res.status(201).json(task);
  } catch (e) {
    res.status(e.status || 500).json({ error: e.message || "server error" });
  }
});

// remove
router.delete("/tasks/:id", (req, res) => {
  const ok = removeTask(req.params.id);
  if (!ok) return res.status(404).json({ error: "task not found" });
  res.json({ deleted: true });
});

// clear all (optionnel)
router.delete("/tasks", (req, res) => {
  clearAll();
  res.json({ cleared: true });
});

module.exports = router;
// --- IGNORE ---
// controllers/taskController.js
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");