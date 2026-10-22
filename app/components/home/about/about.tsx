import { Button } from "../button/button";

export function About() {
  return (
    <>
      <div className={"flex flex-col items-center justify-center min-h-screen "}>
        <div className={"flex items-center justify-evenly gap-8 pt-16"}>
          <div>
            <h1 className={"text-8xl font-bold"}>Paulo Henrique</h1>
            <h3 className={"text-4xl"}>Desenvolvedor full-stack</h3>
          </div>
          <div className={"rounded-full overflow-hidden w-80 h-80"}>
            <img
              src="https://avatars.githubusercontent.com/u/44372052?v=4"
              alt="Paulo Henrique, a Brazilian full stack developer, smiling confidently in a studio portrait. He is wearing a dark shirt and looking directly at the camera. The background is a clean, neutral setting with soft lighting, creating a professional and approachable mood."
            />
          </div>
        </div>
        <div className={"pt-16 w-3/4 mx-auto"}>
          <div>
            <p className={"text-2xl text-center "}>
              Olá! Sou um desenvolvedor full-stack apaixonado por apreender novas tecnologias.Com experiência principalmente em Next.js, React, Node.js, Nest.js, PostgreSQL, Tailwind CSS, busco sempre aprimorar minhas habilidades e contribuir para projetos que façam a diferença.
            </p>
          </div>
          <div className={"flex justify-center gap-4 pt-8"}>
            <Button text="Saiba mais" />
            <Button text="Projetos" />
            <Button text="GitHub" />
            <Button text="Currículo" />
            <Button text="Contato" />
          </div>
        </div >
      </div>
    </>
  )
}