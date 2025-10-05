import { MainLayout } from "../../components/templates/MainLayout";

const About = () => {
  return (
    <MainLayout>
      <h2 className="text-xl font-bold mb-2">Sobre esta aplicación</h2>
      <p>Esta es una aplicación de ejemplo para gestionar tareas escolares usando React, TypeScript, Zustand y JSON Server.</p>
    </MainLayout>
  );
}

export default About; //default al ser una pagina
