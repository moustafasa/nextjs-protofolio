"use client";
import clsx from "clsx";
import Image from "next/image";
import { UIEvent, useLayoutEffect, useRef, useState } from "react";
import ProjectListItem from "./ProjectListItem";

type Props = {};

export default function ProjectsList({}: Props) {
  const projectListContRef = useRef<HTMLDivElement>(null);
  const emptyLiRef = useRef<HTMLLIElement>(null);
  const numberOfElements = 24;
  const [activeItem, setActiveItem] = useState(11);
  const itemsRef = useRef<HTMLLIElement[]>([]);

  const scrollHandler = (e: UIEvent<HTMLDivElement>) => {};

  useLayoutEffect(() => {
    if (itemsRef.current.length > 1)
      itemsRef.current[itemsRef.current.length / 2].scrollIntoView({
        behavior: "auto",
      });
  }, []);

  return (
    <div
      className=" overflow-auto py-6 snap-x snap-mandatory"
      ref={projectListContRef}
      onScroll={scrollHandler}
    >
      <ul className="flex gap-8 *:snap-center">
        <li
          className="w-[125px] md:w-[150px] flex-shrink-0"
          ref={emptyLiRef}
        ></li>
        {new Array(numberOfElements).fill(0).map((_, key) => (
          <ProjectListItem
            key={key}
            ref={(ref) => {
              if (ref) itemsRef.current[key] = ref;
            }}
          />
        ))}
        <li className="w-[125px] md:w-[150px] flex-shrink-0"></li>
      </ul>
    </div>
  );
}
