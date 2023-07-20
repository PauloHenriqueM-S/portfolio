import { Linkedin, Github } from "lucide-react";
import Whats from "public/icons8-whatsapp.svg";

export default function Social() {
  return (
    <div className="flex gap-1 mt-3 justify-center">
      <a
        href="https://www.linkedin.com/in/paulo-henrique-001b84243/"
        target="_blank"
      >
        <Linkedin className="text-cyan-950 hover:text-cyan-700 cursor-pointer" />
      </a>
      <a href="https://github.com/PauloHenriqueM-S" target="_blank">
        <Github className="text-cyan-950 hover:text-cyan-700 cursor-pointer" />
      </a>
    </div>
  );
}
