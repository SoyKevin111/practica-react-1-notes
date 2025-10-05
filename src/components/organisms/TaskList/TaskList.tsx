import { TaskItem } from "../../molecules/TaskItem/TaskItem";
import type { Task } from "../../../services/TaskService";

interface TaskListProps {
    tasks: Task[];
    onToggleComplete: (task: Task) => void;
    onDelete: (id: number) => void;
}

export const TaskList = ({ tasks, onToggleComplete, onDelete }: TaskListProps) => {
    return (
        <div>
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onToggleComplete={onToggleComplete}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}
