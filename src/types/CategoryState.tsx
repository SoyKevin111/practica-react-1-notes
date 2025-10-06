
import type { Category } from "./Category";

export interface CategoryState {
    categories: Category[];
    loadCategories: () => Promise<Category[]>;
    addCategory: (category: Category) => Promise<Category>;
    removeCategory: (id:number) => Promise<void>;
}