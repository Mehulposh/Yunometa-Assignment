//importing the model for the services
import Task from '../model/TaskModel.js'
import mongoose from "mongoose";


//class for services
class TaskService {
    //service to get all tasks in database
  find = async (page,limit) => {
    //calculating the skip to skip tasks in db
    const skip = (page - 1) * limit;

    //fetching all tasks from the db
    const tasks = await Task.find({})
    .skip(skip)
    .limit(limit)
    .sort({ createdAt: -1 });
    
    //counting the total number of tasks in db
    const total = await Task.countDocuments();
    return { tasks, total };
  };

  //service to create a new task
  create = async (body) => {
    //creating the new task and saving in the db
    const task = new Task(body);
    const savedTask = await task.save();
    return savedTask;
  };

  //service to update an existing task
  update = async (id, body) => {
    //updating the task in db
    const updatedTask = await Task.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    //error handling in case the task to be updated is not found
    if (!updatedTask) {
      throw new Error('Task not found');
    }
    return updatedTask;
  };

  //service to delete a existing task
  delete = async (id) => {
     // Validate ObjectId before calling Mongo
    if (!mongoose.Types.ObjectId.isValid(id)) {
       throw new Error("Invalid Task ID");
    }
    //deleting the task from the db
    const deletedTask = await Task.findByIdAndDelete(id);

    //error handling in case the task to be deleted  is not found
    if (!deletedTask) {
      throw new Error('Task not found');
    }

    return deletedTask;
  };
}

//exporting the TaskService class
export default TaskService;