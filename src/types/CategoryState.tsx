
import type { Category } from "./Category";

export interface CategoryState {
    categories: Category[];
    loadCategories: () => Promise<Category[]>;
    addCategory: () => Promise<Category>;
    removeCategory: () => Promise<void>;
}