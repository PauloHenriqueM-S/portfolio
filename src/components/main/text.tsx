import Social from "./social";

export default function Text() {
  return (
    <div className="flex flex-col justify-center text-3xl sm:text-xl">
      <p className="text-cyan-950 text-center">
        Olá 🖐️, me chamo <b>Paulo Henrique</b>
      </p>
      <p className="text-cyan-950 text-center">Front-End developer</p>
      <div>
        <Social />
      </div>
    </div>
  );
}
