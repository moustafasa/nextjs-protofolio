"use client";
import clsx from "clsx";
import Image from "next/image";
import { forwardRef, memo, Ref, useState } from "react";

type Props = {
  active: boolean;
  src: string;
  title: string;
  ref?: Ref<HTMLLIElement>;
};

function ProjectListItem({ active, src, title, ref }: Props) {
  const [imgErr, setImgErr] = useState(false);
  return (
    <li
      className={clsx(
        "p-3 bg-blue-200 rounded-xl transition-all shadow-100 shadow-black-shadow2 duration-300 ease-linear snap-start flex-grow flex-shrink-0 flex flex-col gap-2 w-[250px] md:w-[300px] ",
        { " scale-110 bg-green-100": active }
      )}
      ref={ref}
    >
      {!imgErr ? (
        <Image
          src={src}
          alt="fdsjaf"
          width={300}
          height={200}
          className="rounded-md  flex-1 object-cover aspect-video"
          onError={(e) => setImgErr(true)}
        />
      ) : (
        <div className="h-[200px] w-[300px] rounded-md flex-1 object-cover aspect-video">
          no img found
        </div>
      )}
      <p className=" bg-black p-2 rounded-md text-center capitalize  overflow-hidden text-nowrap overflow-ellipsis max-h-min">
        {title}
      </p>
    </li>
  );
}

export default memo(ProjectListItem, (prev, next) => {
  return prev.active !== next.active;
});
