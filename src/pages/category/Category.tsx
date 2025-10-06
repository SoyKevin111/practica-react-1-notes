import { useEffect, useState } from "react";
import { Button } from "../../components/atoms/Button/Button";
import { Input } from "../../components/atoms/Input/Input";
import { CategoryList } from "../../components/organisms/TaskList/CategoryList";
import { MainLayout } from "../../components/templates/MainLayout";
import { useCategoryStore } from "../../store/CategoryStore";
import type { Category } from "../../types/Category";

const Category = () => {

    const { categories, addCategory, loadCategories, removeCategory } = useCategoryStore();


    const initialCategory: Category = {
        "name": "",
        "description": ""
    }

    //la categoria
    const [newCategory, setCategory] = useState<Category>(initialCategory);


    useEffect(() => {
        loadCategories();
    }, [])

    const handleAddCategory = async () => {
        if (newCategory.name.trim() === "" && newCategory.description.trim() === "") return;
        await addCategory(
            newCategory
        )
        setCategory(initialCategory);
    }


    const handleDeleteCategory = async (id: number) => {
        await removeCategory(id);
    }


    return (
        <MainLayout>
            <div className="mb-4 flex gap-5">
                <Input
                    placeholder="Nombre"
                    value={newCategory?.name}
                    onChange={(e) =>
                        setCategory({ ...newCategory, name: e.target.value })}
                />
                <Input
                    placeholder="Descripcion"
                    value={newCategory?.description}
                    onChange={(e) =>
                        setCategory({ ...newCategory, description: e.target.value })}
                />
                <Button onClick={handleAddCategory}>
                    Agregar
                </Button>
            </div>
            <CategoryList categories={categories} onDelete={handleDeleteCategory}></CategoryList>
        </MainLayout>
    );
}

export default Category;
