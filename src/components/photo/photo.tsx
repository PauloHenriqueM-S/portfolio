import Image from "next/image";
import Perfil from "public/images/photo1.jpg";

export default function Photo() {
  return (
    <div className="flex justify-center">
      <Image
        className="sm:w-1/2 rounded-full"
        src={Perfil}
        alt="profile"
        width={400}
        height={300}
      />
    </div>
  );
}
