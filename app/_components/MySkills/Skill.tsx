import clsx from "clsx";
import Image from "next/image";

export default function Skill({
  title,
  textColor,
  shadowColor,
  ...Rest
}: Skill) {
  return (
    <div
      className={` bg-green-100 p-7 w-full rounded-lg md:transition-all md:hover:scale-110 xl:hover:scale-[1.15] md:hover:shadow-100 ${shadowColor} md:ease-linear md:duration-300`}
    >
      <h3 className="uppercase flex flex-col items-center text-center gap-4">
        {"Icon" in Rest && (
          <Rest.Icon className={clsx(`text-7xl`, `${textColor}`)} />
        )}
        {"Image" in Rest && (
          <Image src={Rest.Image} width={65} height={65} alt="pug image" />
        )}
        <span className=" text-xl">{title}</span>
      </h3>
    </div>
  );
}
