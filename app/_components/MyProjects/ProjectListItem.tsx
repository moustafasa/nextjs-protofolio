import clsx from "clsx";
import Image from "next/image";
import { forwardRef, memo } from "react";

type Props = { active: boolean };

export default memo(
  forwardRef<HTMLLIElement, Props>(function ProjectListItem({ active }, ref) {
    if (active) {
      console.log(active);
    }
    return (
      <li
        className={clsx(
          "p-3 bg-blue-200 rounded-xl transition-all shadow-100 shadow-black-shadow2 duration-300 ease-linear snap-center flex-shrink-0 flex flex-col gap-2 w-[250px] md:w-[300px] ",
          { "scale-110 bg-green-100": active }
        )}
        ref={ref}
      >
        <Image
          src={"/imgs/project.png"}
          alt="fdsjaf"
          width={300}
          height={200}
          className="rounded-md  flex-1 object-cover aspect-videw"
          priority
        />
        <p className=" bg-black p-2 rounded-md text-center capitalize  overflow-hidden text-nowrap overflow-ellipsis max-h-min">
          Space Tourism Project From Frontend Mentor
        </p>
      </li>
    );
  }),
  (prev, next) => {
    return prev.active !== next.active;
  }
);
