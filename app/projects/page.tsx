import { GoHome } from "../components/projects/gohome/gohome";
import { ThemeToggle } from "../components/theme-toggle";

export default function Projects() {
  return (
    <>
      <ThemeToggle />
      <GoHome />
      <div className={"flex flex-col items-center justify-center gap-4 pt-8"}>
        <h1 className={"text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"}>Projetos</h1>
        <h3 className={"text-lg sm:text-xl md:text-2xl lg:text-3xl mt-2"}>Alguns dos projetos que desenvolvi</h3>
      </div>
    </>
  )
}