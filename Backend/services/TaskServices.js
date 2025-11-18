//importing the model for the services
import Task from '../model/TaskModel'

//class for services
class TaskService {
    //servic to get all tasks in database
  find = async () => {
    const tasks = await Task.find({});
    return tasks;
  };

  //service to create a new task
  create = async (body) => {
    const task = new Task(body);
    const savedTask = await task.save();
    return savedTask;
  };

  //service to update an existing task
  update = async (id, body) => {
    const updatedTask = await Task.findByIdAndUpdate(id, body, {
      new: true,
    });
    return updatedTask;
  };

  //service to delete a existing task
  delete = async (id) => {
    const deletedTask = await Task.findByIdAndDelete(id);
    return deletedTask;
  };
}

//exporting the TaskService class
module.exports = TaskService;