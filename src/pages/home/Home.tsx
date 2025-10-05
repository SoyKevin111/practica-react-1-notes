import { useEffect, useState } from "react";
import { useTaskStore } from "../../store/TaskStore";
import { MainLayout } from "../../components/templates/MainLayout";
import { Input } from "../../components/atoms/Input/Input";
import { Button } from "../../components/atoms/Button/Button";
import { TaskList } from "../../components/organisms/TaskList/TaskList";



const Home = () => {

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

export default Home; //default al ser una pagina
