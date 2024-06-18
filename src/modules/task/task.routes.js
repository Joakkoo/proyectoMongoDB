const express = require("express");
const taskService = require("./task.service");

const router = express.Router();



// Get api/user
router.get("/api/task", async (req,res)=>{
  // #swagger.tags = ['Task']
try {
    const tasks = await taskService.findAll();
    res.status(200).send(tasks);
} catch (error) {
    console.log(error)
    res.status(500).send(error)
}
})

router.get("/api/task/:id",  async (req, res) => {
  // #swagger.tags = ['Task']
  try {
    const taskId = req.params.id;
    const task = await taskService.findOneTask(taskId);
    return res.status(200).send(task);

  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.post("/api/task", async (req, res) => {
  // #swagger.tags = ['Task']
  try {
    const newTask = req.body;
    console.log(newTask);
    const task = await taskService.save(newTask);
    return res.status(201).send(task);

  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.put("/api/task/:id",  async (req, res) => {
  // #swagger.tags = ['Task']
  try {
    const taskId = req.params.id;
    const updatedTask = req.body;
    const task = await taskService.updateTask(taskId, updatedTask);
    return res.status(200).send(task);

  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.delete("/api/task/:id", async (req, res) => {
  // #swagger.tags = ['Task']
  try {
    const taskId = req.params.id;
    await taskService.remove(taskId);
    return res.status(200).send("Tarea eliminado correctamente.");

  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});


module.exports = router;