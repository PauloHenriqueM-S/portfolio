import { Icon } from "@iconify/react";
import Link from "next/link";

export function GoHome() {
  return (
    <>
      <div className={"fixed top-4 left-4 z-50 px-3 py-1"}>
        <Link href={"/"}>
          <Icon icon="ant-design:home-filled" width='30' />
        </Link>
      </div>
    </>
  )
}