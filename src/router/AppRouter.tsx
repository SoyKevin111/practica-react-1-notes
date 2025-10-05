import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "../pages/about/About";
import TaskDetail from "../pages/taskDetail/TaskDetail";
import Home from "../pages/home/Home";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tasks/:id" element={<TaskDetail />} />
      </Routes>
    </BrowserRouter>
  );
};
