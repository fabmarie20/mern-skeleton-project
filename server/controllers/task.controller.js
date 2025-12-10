import Task from "../models/task.model.js";
import extend from "lodash/extend.js";

// CREATE
const create = async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    return res.status(201).json(task);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

// LIST (READ ALL)
const list = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    return res.json(tasks);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

// MIDDLEWARE: FIND BY ID
const taskByID = async (req, res, next, id) => {
  try {
    const task = await Task.findById(id);
    if (!task) return res.status(404).json({ error: "Task not found" });
    req.task = task;
    next();
  } catch (err) {
    return res.status(400).json({ error: "Could not retrieve task" });
  }
};

// READ ONE
const read = (req, res) => {
  return res.json(req.task);
};

// UPDATE
const update = async (req, res) => {
  try {
    let task = req.task;
    task = extend(task, req.body);
    await task.save();
    return res.json(task);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

// DELETE
const remove = async (req, res) => {
  try {
    const task = req.task;
    await task.deleteOne();
    return res.json({ message: "Task deleted" });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

export default { create, list, taskByID, read, update, remove };
