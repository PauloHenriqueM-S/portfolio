import { About } from "../components/home/about/about";
import { LearnMore } from "../components/home/learnMore/learnMore";
import { ThemeToggle } from "../components/theme-toggle";

export default function Home() {
  return (
    <>
      <ThemeToggle />
      <About />
      <LearnMore />
    </>
  )
}