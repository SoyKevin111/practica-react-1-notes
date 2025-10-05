import { useNavigate, useParams } from "react-router-dom";
import { useTaskStore } from "../../store/TaskStore";
import { useEffect, useState } from "react";
import { MainLayout } from "../../components/templates/MainLayout";
import { Input } from "../../components/atoms/Input/Input";
import { Button } from "../../components/atoms/Button/Button";

const TaskDetail = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks, editTask } = useTaskStore();
  const [task, setTask] = useState<any>(null);

  useEffect(() => {
    const found = tasks.find((t: any) => t.id == Number(id));
    if (found) setTask(found);
  }, [id, tasks])

  if (!task) return <MainLayout> Tarea no encontrada.</MainLayout>

  const handleSave = async () => {
    await editTask(task);
    navigate("/");
  }

  return (
    <MainLayout>
      <div className="flex flex-col gap-3">
        <Input
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
        />
        <Input
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
        />
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={(e) => setTask({ ...task, completed: e.target.checked })}
          />
          Completada
        </label>
        <Button onClick={handleSave}>Guardar</Button>
      </div>
    </MainLayout>
  );
}

export default TaskDetail; //default al ser una pagina

