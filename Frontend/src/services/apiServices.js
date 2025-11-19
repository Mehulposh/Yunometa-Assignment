//importing axios for calling api
import axios from "axios";
//import baseurl from backend folder
import {backend} from '../apiEndpoint/backendEndpoint'

//storing usr in a variable
const API_URL = backend.endpoint ;

//fetching the data from the backend
export const fetchTasks = async (page,filter = 'ALL') => {
  const response = await axios.get(`${API_URL}?page=${page}}&filter=${filter}`);
  return response.data;
};

//sending the new task data to the db
export const createTask = async (formData) => {
  await axios.post(API_URL, formData);
};

//updating the tasks in the db
export const updateTask = async (taskId, taskData) => {
  await axios.patch(`${API_URL}/${taskId}`, taskData);
};

//deleting the task from the db
export const deleteTask = async (taskId) => {
  await axios.delete(`${API_URL}/${taskId}`);
};

//changing the status of the task from pending to completed
export const markTaskAsDone = async (taskId) => {
  await axios.patch(`${API_URL}/${taskId}`, { status: "COMPLETED"});
};