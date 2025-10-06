import { create } from "zustand";
import { createTask, deleteTask, getTasks, updateTask } from "../services/TaskService";
import type { TaskState } from "../types/TaskState";



export const useTaskStore = create<TaskState>((set, get) => ({
  tasks: [],
  selectedTask: null,
  
  fetchTasks: async () => {
    const tasks = await getTasks();
    set({ tasks });
  },

  addTask: async (task) => {
    const newTask = await createTask(task);
    set({ tasks: [...get().tasks, newTask] });
  },

  editTask: async (task) => {
    const updatedTask = await updateTask(task);
    set({
      tasks: get().tasks.map((t) => (t.id === task.id ? updatedTask : t))
    });
  },

  removeTask: async (id) => {
    await deleteTask(id);
    set({ tasks: get().tasks.filter((t) => t.id !== id) });
  },

  setSelectedTask: (task) => set({ selectedTask: task })
}));
