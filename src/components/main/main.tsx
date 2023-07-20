import Photo from "../photo/photo";
import Text from "./text";

export default function Main() {
  return (
    <div className="flex flex-row-reverse justify-evenly pt-20 gap-20 sm:flex-col-reverse sm:w-screen sm:justify-center ">
      <Text />
      <Photo />
    </div>
  );
}
