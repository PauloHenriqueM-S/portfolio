'use client';

import Link from "next/link";

type ButtonProps = {
  text: string;
};



export function Button({ text }: ButtonProps) {
  const getHref = () => {
    switch (text) {
      case "Currículo": return "/curriculo";
      case "Projetos": return "#projects";
      case "GitHub": return "https://github.com/PauloHenriqueM-S";
      case "Todos os projetos": return "/projects";
      case "Saiba mais": return "#learn-more";
      case "Contato": return "#contact";
      default: return "/";
    }
  }

  const getClassName = () => {
    const base = "text-white font-bold py-2 px-4 rounded";
    switch (text) {
      case "Contato": return `${base} bg-green-500 hover:bg-green-700`;
      case "Currículo": return `${base} bg-indigo-500 hover:bg-indigo-700`;
      case "Projetos": return `${base} bg-purple-500 hover:bg-purple-700`;
      case "GitHub": return `${base} bg-gray-500 hover:bg-gray-700 text-center`;
      case "Todos os projetos": return `${base} bg-blue-500 hover:bg-blue-700 text-center`;
      default: return `${base} bg-blue-500 hover:bg-blue-700`;
    }
  }

  const isAnchor = text === "Saiba mais" || text === "Contato" || text === "Projetos";

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (!isAnchor) return;
    e.preventDefault();
    const id = getHref().replace("#", "");
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Link
      href={getHref()}
      target={text === "GitHub" ? "_blank" : undefined}
      onClick={handleClick}
      className={getClassName()}
    >
      {text}
    </Link>
  );
}