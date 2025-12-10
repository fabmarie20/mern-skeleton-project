import express from "express";
import taskCtrl from "../controllers/task.controller.js";

const router = express.Router();

router.route("/api/tasks")
  .get(taskCtrl.list)     // GET all tasks
  .post(taskCtrl.create); // POST create

router.route("/api/tasks/:taskId")
  .get(taskCtrl.read)     // GET one
  .put(taskCtrl.update)   // PUT update
  .delete(taskCtrl.remove); // DELETE

router.param("taskId", taskCtrl.taskByID);

export default router;
