const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new mongoose.Schema({
    name: String,
    objetivo: String,
    duración: String,
    estado: String,
    user: JSON,
  });

  const taskModel = mongoose.model("Task", taskSchema);

  module.exports = taskModel;