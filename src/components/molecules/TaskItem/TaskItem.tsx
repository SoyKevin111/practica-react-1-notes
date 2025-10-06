import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { Checkbox } from "../../atoms/Checkbox/Checkbox";
import { Button } from "../../atoms/Button/Button";
import type { Task } from "../../../types/Task";


interface TaskItemProps {
    task: Task;
    onToggleComplete: (task: Task) => void;
    onDelete: (id: number) => void;
}

const TaskItemComponent = ({ task, onToggleComplete, onDelete }: TaskItemProps) => {

    const handleToggle = useCallback(() => //memoriza funcion entre renders
        onToggleComplete(task),
        [task, onToggleComplete]);
    const handleDelete = useCallback(() =>
        onDelete(task.id),
        [task.id, onDelete]);
    return (
        <div className="flex items-center justify-between border p-3 rounded mb-2 bg-white shadow-sm">
            <div className="flex items-center gap-3">
                <Checkbox checked={task.completed} onChange={handleToggle} />
                <Link to={`/tasks/${task.id}`} className={task.completed ? "line-through text-gray-400" : "hover:underline"}>
                    {task.title}
                </Link>
            </div>
            <Button variant="secondary" onClick={handleDelete}>
                Eliminar
            </Button>
        </div>
    );
}

// los task item que no cambiarion, no se vuelven a renderizar innecesariamentes
export const TaskItem = React.memo(TaskItemComponent);
