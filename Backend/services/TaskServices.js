//importing the model for the services
import Task from '../model/TaskModel.js'

//class for services
class TaskService {
    //service to get all tasks in database
  find = async () => {
    //fetching all tasks from the db
    const tasks = await Task.find({});
    return tasks;
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