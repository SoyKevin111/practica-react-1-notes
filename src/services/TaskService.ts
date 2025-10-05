import axios from "axios";
import type { Task } from "../types/Task";

const API_URL = "http://localhost:3000/tasks";

export const getTasks = async () => {
  const response = await axios.get<Task[]>(API_URL);
  return response.data;
};

export const getTaskById = async (id: number) => {
  const response = await axios.get<Task>(`${API_URL}/${id}`);
  return response.data;
};

export const createTask = async (task: Task) => {
  task.id = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
  const response = await axios.post<Task>(API_URL, task);
  return response.data;
};

export const updateTask = async (task: Task) => {
  const response = await axios.put<Task>(`${API_URL}/${task.id}`, task);
  return response.data;
};

export const deleteTask = async (id: number) => {
  await axios.delete(`${API_URL}/${id}`);
};
