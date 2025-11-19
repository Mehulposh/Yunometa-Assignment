import { Router } from "express";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  getSingleTask,
} from '../controllers/TaskController.js'


// Initialize Express router for task endpoints
const router = Router();

//route for fetching all tasks
router.get("/", getTasks);

//route for fetching single tasks
router.get("/:id", getSingleTask);

//route for creating a task
router.post("/",createTask);

//route for updating a task
router.put("/:id", updateTask);

//route for deleting a task
router.delete("/:id", deleteTask);

//exporting the routes
export default router