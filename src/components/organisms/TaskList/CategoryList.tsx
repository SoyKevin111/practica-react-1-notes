import type { Category } from "../../../types/Category";
import { CategoryItem } from "../../molecules/TaskItem/CategoryItem";

interface CategoryListProps {
    categories: Category[];
    onDelete: (id: number) => void;
}

export const CategoryList = ({ categories, onDelete }: CategoryListProps) => {

    const renderCategories = () => {
        return categories.map((c) => (
            <CategoryItem
                category={c}
                onDelete={onDelete}
                key={c.id}
            />
        ));
    }

    return (
        <div>
            {renderCategories()}
        </div>
    );

}