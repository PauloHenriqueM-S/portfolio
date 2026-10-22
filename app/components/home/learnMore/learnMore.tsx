import { Skills } from "../skills/skills";

export function LearnMore() {
  return (
    <>
      <section className={"flex flex-col items-center justify-center min-h-screen w-full px-4 py-4 sm:px-6 lg:px-8 "} id="learn-more">
        <div className={"w-full max-w-6xl mx-auto"}>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8 md:gap-12">
            <div className="text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">Tecnologias</h1>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mt-2">Algumas das tecnologias que tenho conhecimento ou estou aprendendo</h3>
            </div>
            <div className={"flex justify-center md:justify-end"}>
              <div className="rounded-full overflow-hidden w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80">
                <img
                  src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/nextjs.svg"
                  alt="Tecnologias que tenho conhecimento."
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={"mt-16"}>
          <Skills />
        </div>
      </section>
    </>
  )
}