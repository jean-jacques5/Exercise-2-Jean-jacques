// app.js
const express = require("express");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());        // parser JSON
app.use("/", taskRoutes);       // routes MVC

app.listen(PORT, () => {
  console.log(`✅ ToDoList API (Express) ready on http://127.0.0.1:${PORT}`);
});
module.exports = app;