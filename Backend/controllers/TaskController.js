//import the services class
import TaskService from '../services/TaskServices.js'

//creating the new instance of the services class
const TaskServiceInstance = new TaskService();

//controller to fetch all tasks in db
const getTasks = async (req, res) => {
  try {
    // default values
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;

    //fetching all tasks in db
    const { tasks, total } = await TaskServiceInstance.find(page, limit);


    //sending the response back with the status
   res.status(200).json({
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
      tasks
    });

  } catch (err) {
    //error response
    res.status(500).json({ error: err.message });
  }
};


//controller to fetch one task
const getSingleTask = async (req,res) => {
  try {
    //destructuring task id from the received params
    const { id } = req.params;

    //sending the id and req body to the update service to update the task in db
    const result = await TaskServiceInstance.findOne(id)

    //sending the response back with the status
    res.status(200).send(result);
  } catch (error) {
    //error response
    res.status(500).json({ error: err.message });
  }
}
//controller to create a new task
const createTask = async (req, res) => {
  try {
    //destructuring the title and description from the received request
    const {title,description} = req.body;

    //creating new task 
    const newTask = await TaskServiceInstance.create({
      title,
      description
    });

    //sending the response back with the status
    res.status(201).json(newTask);

  } catch (err) {
    //error response
    res.status(500).json({ error: err.message });
  }
};

//controller to update an existing task
const updateTask = async (req, res) => {
  try {
    //destructuring task id from the received params
    const { id } = req.params;

    //sending the id and req body to the update service to update the task in db
    const result = await TaskServiceInstance.update(id, req.body);

    //sending the response back with the status
    res.status(200).json(result);

  } catch (err) {
    //error response
    res.status(500).json({ error: err.message });
  }
};

//controller to delete an existing task
const deleteTask = async (req, res) => {
  try {
    //destructuring task id from the received params
    const { id } = req.params;

    //sending the id to the delete service to delete the task from db
    const result = await TaskServiceInstance.delete(id);

    //sending the response back with the status
    res.status(200).send(result);
  } catch (err) {
    //error response
    res.status(500).json({ error: err.message });
  }
};

//exporting all the controllers
export {
  getTasks,
  getSingleTask,
  createTask,
  updateTask,
  deleteTask,
};