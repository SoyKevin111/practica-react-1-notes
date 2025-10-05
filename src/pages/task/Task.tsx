import { useEffect, useState } from "react";
import { Button } from "../../components/atoms/Button/Button";
import { Input } from "../../components/atoms/Input/Input";
import { TaskList } from "../../components/organisms/TaskList/TaskList";
import { MainLayout } from "../../components/templates/MainLayout";
import { useTaskStore } from "../../store/TaskStore";


const Notes = () => {
    const { tasks, fetchTasks, addTask, editTask, removeTask } = useTaskStore();
    const [newTitle, setNewTitle] = useState("");

    useEffect(() => {
        fetchTasks(); //cargar tareas
    }, [])

    const handleAddTask = async () => {
        if (newTitle.trim() === " ") return;
        await addTask({ title: newTitle, description: "", completed: false });
        setNewTitle("");
    }

    const handleToggleComplete = async (task: any) => {
        await editTask({ ...task, completed: !task.completed });
    };

    const handleDelete = async (id: number) => {
        await removeTask(id);
    }


    return (
        <MainLayout >
            <div className="mb-4 flex gap 2">
                <Input
                    placeholder="Nueva Tarea"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                />
                <Button onClick={handleAddTask} >Agregar</Button>
            </div>
            <TaskList tasks={tasks} onToggleComplete={handleToggleComplete} onDelete={handleDelete} />
        </MainLayout>
    );
}

export default Notes;
