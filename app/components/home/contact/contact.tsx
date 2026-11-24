import { Button } from "../button/button"

export function Contact() {
  return (
    <>
      <section id="contact" className={"flex flex-col items-center justify-center min-h-screen w-full px-4 py-4 sm:px-6 lg:px-8 "}>
        <h2 className={"text-3xl font-bold mb-4"}>Contact Me</h2>
        <p className={"text-lg mb-4"}>Feel free to reach out to me!</p>
        <div className={"flex flex items-center justify-center gap-4"}>
          <Button text="Email" />
          <Button text="Linkedin" />
          <Button text="Discord" />
        </div>
      </section >
    </>
  )
}