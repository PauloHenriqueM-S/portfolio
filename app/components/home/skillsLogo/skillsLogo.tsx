import Image from "next/image";

export function SkillsLogo() {
  return (
    <>
      <div className={"flex justify-center items-center border-2 border-none bg-gray-800/20 rounded-xl w-60 h-60"}>
        <Image src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/typescript.svg" alt="TypeScript Logo" width={200} height={200} />
      </div>
    </>
  )
}