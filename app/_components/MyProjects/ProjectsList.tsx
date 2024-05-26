"use client";
import clsx from "clsx";
import Image from "next/image";
import { UIEvent, useLayoutEffect, useRef, useState } from "react";

type Props = {};

export default function ProjectsList({}: Props) {
  const projectListContRef = useRef<HTMLDivElement>(null);
  const emptyLiRef = useRef<HTMLLIElement>(null);
  const numberOfElements = 24;
  const [activeItem, setActiveItem] = useState(11);

  // useLayoutEffect(() => {
  //   if (projectListContRef.current !== null) {
  //     projectListContRef.current.scrollBy({
  //       top: projectListContRef.current.scrollHeight / 2,
  //       left: projectListContRef.current.offsetWidth / 2,
  //       behavior: "instant",
  //     });
  //   }
  // }, []);

  const item = (
    <li
      className={clsx(
        "p-3 bg-blue-200 rounded-xl transition-transform shadow-100 shadow-black-shadow2 hover:scale-110  duration-300 ease-linear snap-center flex-shrink-0 flex flex-col gap-2 w-[250px] md:w-[300px]"
      )}
    >
      <Image
        src={"/imgs/project.png"}
        alt="fdsjaf"
        width={300}
        height={200}
        className="rounded-md w-full flex-1 object-cover aspect-videw"
      />
      <p className=" bg-black p-2 rounded-md text-center capitalize  overflow-hidden text-nowrap overflow-ellipsis max-h-min">
        Space Tourism Project From Frontend Mentor
      </p>
    </li>
  );

  const scrollHandler = (e: UIEvent<HTMLDivElement>) => {
    if (projectListContRef.current && emptyLiRef.current) {
      const calculatedNumOfElements =
        (projectListContRef.current.scrollLeft /
          projectListContRef.current.scrollWidth) *
        100;
      console.log(calculatedNumOfElements);
    }
  };

  return (
    <div
      className=" overflow-auto py-6 snap-x snap-mandatory"
      ref={projectListContRef}
      onScroll={scrollHandler}
    >
      <ul className="flex gap-8 *:snap-center ">
        <li
          className="w-[125px] md:w-[150px] flex-shrink-0"
          ref={emptyLiRef}
        ></li>
        {new Array(numberOfElements).fill(item)}
        <li className="w-[125px] md:w-[150px] flex-shrink-0"></li>
      </ul>
    </div>
  );
}
