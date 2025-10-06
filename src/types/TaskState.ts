import type { Task } from "./Task";

export interface TaskState {
  tasks: Task[];
  selectedTask: Task | null;
  fetchTasks: () => Promise<void>;
  addTask: (task: Task) => Promise<void>;
  editTask: (task: Task) => Promise<void>;
  removeTask: (id: number) => Promise<void>;
  setSelectedTask: (task: Task | null) => void;
}