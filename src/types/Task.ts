import type { Category } from "./Category";

export interface Task {
  id?: number;
  title: string;
  description: string;
  completed: boolean;
  categories?: Category[];
}
