import Image from "next/image";
import { Icon } from "@iconify/react";

export function SkillsLogo() {
  return (
    <>
      <div className={"flex justify-center items-center border-2 border-none bg-gray-800/20 rounded-xl w-60 h-60"}>
        <Icon icon="devicon:typescript" width='200' height='200' />
      </div>
    </>
  )
}