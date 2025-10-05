import { Link } from "react-router-dom";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-500 text-white p-4 flex justify-between">
        <h1 className="text-lg font-bold">Gestor de Tareas</h1>
        <nav className="flex gap-4">
          <Link to="/home">Home</Link>
          <Link to="/notes">Notes</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <main className="p-4">{children}</main>
    </div>
  );
};
