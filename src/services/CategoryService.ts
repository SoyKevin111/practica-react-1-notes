import axios from "axios";
import type { Category } from "../types/Category";


const API_URL = 'http://localhost:3000/categories';

export const getCategories = async (): Promise<Category[]> => {
    const response = await axios.get(API_URL);
    return response.data;
}

export const createCategory = async (category: Category): Promise<Category> => {
    const response = await axios.post<Category>(API_URL, category);
    return response.data;
};

export const deleteCategory = async (id: number): Promise<void> => {
    return await axios.delete(`${API_URL}/${id}`);
}
