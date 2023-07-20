import Image from "next/image";
import Perfil from "public/images/photo1.jpg";

export default function Photo() {
  return (
    <div>
      <Image
        className="rounded-full"
        src={Perfil}
        alt="profile"
        width={300}
        height={300}
      />
    </div>
  );
}
