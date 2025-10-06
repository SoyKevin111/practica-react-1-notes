import { create } from "zustand";
import { createCategory, deleteCategory, getCategories } from "../services/CategoryService";
import type { CategoryState } from "../types/CategoryState";
import type { Category } from "../types/Category";


export const useCategoryStore = create<CategoryState>((set, get) => ({
    categories: [],


    loadCategories: async (): Promise<Category[]> => {
        try {
            const categories = await getCategories();
            set({ categories });
            return categories;
        } catch (error) {
            console.error("Error al cargar categorías:", error);
            throw error;
        }
    },

    addCategory: async (category: Category): Promise<Category> => {
        try {
            const newCategory = await createCategory(category);
            set({ categories: [...get().categories, newCategory] });
            return newCategory;
        } catch (error) {
            console.error("Error al crear categoría:", error);
            throw error;
        }
    },

    removeCategory: async (id: number): Promise<void> => {
        try {
            await deleteCategory(id);
            set({
                categories: get().categories.filter((c) => c.id !== id),
            });
        } catch (error) {
            console.error("Error al eliminar categoría:", error);
            throw error;
        }
    },
}));
