import { Skills } from "../skills/skills";

export function LearnMore() {
  return (
    <>
      <div className={"flex flex-col items-center justify-center min-h-screen bg-gray-700"} id="learn-more">
        <div className={"flex items-center justify-evenly gap-8 pl-2 pr-2 pt-4 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"}>
          <div>
            <h1 className={"text-8xl font-bold"}>Aprendizado Contínuo</h1>
            <h3 className={"text-4xl"}>A busca constante por conhecimento</h3>
          </div>
          <div className={"rounded-full overflow-hidden w-80 h-80"}>
            <img
              src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/nextjs.svg"
              alt="A person sitting at a desk, surrounded by books and a laptop, deeply focused on learning. The scene is well-lit, with natural light streaming in from a nearby window, creating a warm and inviting atmosphere that emphasizes the importance of continuous learning and personal growth."
            />
          </div>
        </div>
        <Skills />
      </div>
    </>
  )
}