import React, { useCallback } from "react";
import type { Category } from "../../../types/Category";
import { Button } from "../../atoms/Button/Button";


interface CategoryItemProps {
    category: Category;
    onDelete: (id: number) => void;
}


const CategoryItemComponent = ({ category, onDelete }: CategoryItemProps) => {

    const handleDelete = useCallback(() => //memoriza funcion entre renders
        onDelete(category.id), [category, onDelete]);

    return (
        <div className="flex items-center justify-between border p-3 rounded mb-2 bg-white shadow-sm">
            <div className="flex items-center gap-3">
                <p>{category.name}</p>
            </div>
            <Button variant="secondary" onClick={handleDelete}>
                Eliminar
            </Button>
        </div>
    );
}

// los category item que no cambiarion, no se vuelven a renderizar innecesariamentes
export const CategoryItem = React.memo(CategoryItemComponent);


