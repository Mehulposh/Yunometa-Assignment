import axios from "axios";
import {backend} from '../apiEndpoint/backendEndpoint'

const API_URL = backend.endpoint ;

export const fetchTasks = async (page) => {
  const response = await axios.get(`${API_URL}?page=${page}&limit=5`);
  return response.data;
};

export const createTask = async (formData) => {
  await axios.post(API_URL, formData);
};

export const updateTask = async (taskId, taskData) => {
  await axios.patch(`${API_URL}/${taskId}`, taskData);
};

export const deleteTask = async (taskId) => {
  await axios.delete(`${API_URL}/${taskId}`);
};

export const markTaskAsDone = async (taskId) => {
  await axios.patch(`${API_URL}/${taskId}`, { status: "COMPLETED"});
};