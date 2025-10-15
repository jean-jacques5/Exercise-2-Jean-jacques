// controllers/taskController.js
const fs = require("fs");
const path = require("path");
const { Task, STATUS } = require("../model/Task");

const DATA_FILE = path.join(__dirname, "..", "data", "tasks.json");

function loadAll() {
  try {
    if (!fs.existsSync(DATA_FILE)) return [];
    const raw = fs.readFileSync(DATA_FILE, "utf-8") || "[]";
    const arr = JSON.parse(raw);
    return arr.map(
      (o) =>
        new Task({
          id: o.id,
          title: o.title,
          notes: o.notes,
          status: o.status,
          createdAt: o.createdAt,
          updatedAt: o.updatedAt,
        })
    );
  } catch (e) {
    console.error("loadAll error:", e);
    return [];
  }
}

function saveAll(tasks) {
  const data = tasks.map((t) => ({
    id: t.id,
    title: t.title,
    notes: t.notes,
    status: t.status,
    createdAt: t.createdAt,
    updatedAt: t.updatedAt,
  }));
  fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
}

// --- Exigé: add / remove / display ---
function addTask({ title, notes }) {
  if (!title || !String(title).trim()) {
    const err = new Error("title is required");
    err.status = 400;
    throw err;
  }
  const tasks = loadAll();
  const task = new Task({ title, notes });
  tasks.push(task);
  saveAll(tasks);
  return task;
}

function removeTask(id) {
  const tasks = loadAll();
  const newList = tasks.filter((t) => t.id !== id);
  const changed = newList.length !== tasks.length;
  if (changed) saveAll(newList);
  return changed;
}

function displayTasks(status) {
  let tasks = loadAll();
  if (status && [STATUS.TODO, STATUS.IN_PROGRESS, STATUS.DONE].includes(status)) {
    tasks = tasks.filter((t) => t.status === status);
  }
  tasks.sort((a, b) => (a.createdAt < b.createdAt ? -1 : 1));
  return tasks;
}

// (optionnel) clear all
function clearAll() {
  saveAll([]);
}

module.exports = { addTask, removeTask, displayTasks, clearAll, STATUS };
