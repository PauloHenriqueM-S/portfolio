import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-around mt-6 text-2xl">
      <h1 className="sm:hidden text-cyan-950">Paulo Henrique</h1>
      <nav>
        <ul className="sm:flex-col sm:gap-2 flex gap-6">
          <li className="text-cyan-950 hover:text-cyan-700 cursor-pointer">
            <Link href="">Sobre Min</Link>
          </li>
          <li className="text-cyan-950 hover:text-cyan-700 cursor-pointer">
            <Link href="">Habilidades</Link>
          </li>
          <li className="text-cyan-950 hover:text-cyan-700 cursor-pointer">
            <Link href="">Projetos</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
