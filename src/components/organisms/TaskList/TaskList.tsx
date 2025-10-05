import type { Task } from "../../../types/Task";
import { TaskItem } from "../../molecules/TaskItem/TaskItem";


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
