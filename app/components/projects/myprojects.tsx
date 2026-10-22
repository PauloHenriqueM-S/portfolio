import { Button } from "../home/button/button";
import { ProjectsVisual } from "./projectsvisual/projectsvisual";

export default function MyProjects() {
  return (
    <>
      <section className={"flex flex-col items-center justify-center min-h-screen w-full px-4 py-8 sm:px-6 lg:px-8"} id="projects">
        <div className={"w-full max-w-6xl mx-auto"}>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8 md:gap-12">

            <div className="text-center md:text-left">
              <h1 className={"text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"}>Meus Projetos</h1>
              <h3 className={"text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4"}>Aqui estão alguns dos projetos que desenvolvi, demonstrando minhas habilidades em desenvolvimento web e minha capacidade de criar soluções inovadoras.</h3>
            </div>

            <div className="flex flex-col justify-center gap-4 mb-8">
              <Button text="Todos os projetos" />
              <Button text="GitHub" />
            </div>

          </div>
          <div className="mt-16 md:mt-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              <ProjectsVisual />
              <ProjectsVisual />
              <ProjectsVisual />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}