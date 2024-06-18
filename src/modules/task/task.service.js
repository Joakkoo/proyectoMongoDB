const taskModel = require("../../models/task");
const pager = require("../../utils/pager");


async function createTask(decoded) {
  const task = {
    name: decoded.given_name,
    objetivo: decoded.objetivo,
    duracion: decoded.duracion,
    estado: decoded.estado
  };

  await saveTask(task);
  return task;
}
  async function findOneTask(id) {
    return await taskModel.findById(id); // Utiliza findById para buscar por ObjectId
  }

async function save(task) {
    let _task = new taskModel(task)
    return await _task.save()
}

async function paginated(params) {
    let perPage = params.perPage?params.perPage:10, page = Math.max(0, params.page)
    let filter = params.filter?params.filter:{}
    let sort = params.sort?params.sort:{}
  
    let count = await taskModel.countDocuments(filter)
    let data = await taskModel.find(filter)
      .limit(perPage)
      .skip(perPage * page)
      .sort(sort)

      .exec();
  
    return pager.createPager(page,data,count,perPage)
  }

async function updateTask(id, updatedTask) {
    return await taskModel.findByIdAndUpdate(id, updatedTask, { new: true }).exec();
}

async function findAll() {
  return await taskModel.find().populate('userId').exec();
}

async function remove(id) {
    return await taskModel.findOneAndDelete({ _id: id }).exec();
}

module.exports = { createTask, findOneTask, save, remove, updateTask, findAll, paginated };