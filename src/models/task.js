const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new mongoose.Schema({
    name: String,
    objetivo: String,
    duracion: String,
    estado: String,
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }
  });
  const taskModel = mongoose.model("Task", taskSchema);

  module.exports = taskModel;