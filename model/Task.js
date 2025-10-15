// model/Task.js
const { randomUUID } = require("crypto");

const STATUS = {
  TODO: "todo",
  IN_PROGRESS: "in_progress",
  DONE: "done",
};

function nowISO() {
  return new Date().toISOString();
}

class Task {
  constructor({ title, notes = null, status = STATUS.TODO, id = null, createdAt = null, updatedAt = null }) {
    this.id = id || randomUUID();
    this.title = String(title || "").trim();
    this.notes = (notes ?? "").trim() || null;
    this.status = status;
    this.createdAt = createdAt || nowISO();
    this.updatedAt = updatedAt || nowISO();
  }

  rename(newTitle) {
    this.title = String(newTitle || "").trim();
    this.touch();
  }

  setNotes(text) {
    this.notes = String(text ?? "").trim() || null;
    this.touch();
  }

  setStatus(status) {
    if ([STATUS.TODO, STATUS.IN_PROGRESS, STATUS.DONE].includes(status)) {
      this.status = status;
      this.touch();
    }
  }

  touch() {
    this.updatedAt = nowISO();
  }
}

module.exports = { Task, STATUS };
