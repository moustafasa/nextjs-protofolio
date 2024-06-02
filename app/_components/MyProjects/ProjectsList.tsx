"use client";
import {
  UIEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import ProjectListItem from "./ProjectListItem";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "@/tailwind.config";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

type Props = {};

export default function ProjectsList({}: Props) {
  const projectListContRef = useRef<HTMLDivElement>(null);

  const numberOfElements = 24;
  const itemsRef = useRef<HTMLLIElement[]>([]);

  const tailConfig = useMemo(
    () => resolveConfig(tailwindConfig).theme.screens,
    []
  );

  const [scrollFactor, setScrollFactor] = useState(0);
  const [currentElement, setCurrentElement] = useState(0);

  useEffect(() => {
    function calcScrollFactor() {
      if (projectListContRef.current) {
        let containerWidth: number;
        if (window.matchMedia(`(min-width:${tailConfig.md})`).matches) {
          containerWidth = 300;
        } else {
          containerWidth = 250;
        }
        const sizeOfLeftShowedView =
          (projectListContRef.current.clientWidth - containerWidth) / 2;
        setScrollFactor(
          sizeOfLeftShowedView + (containerWidth - (sizeOfLeftShowedView - 32))
        );
        console.log(containerWidth);
      }
    }

    calcScrollFactor();

    window.addEventListener("resize", calcScrollFactor);
    return () => {
      window.removeEventListener("resize", calcScrollFactor);
    };
  }, [tailConfig.md]);

  const scrollendTimeOut = useRef<NodeJS.Timeout>();

  const scrollHandler = (e: UIEvent<HTMLDivElement>) => {
    clearTimeout(scrollendTimeOut.current);

    scrollendTimeOut.current = setTimeout(() => {
      if (projectListContRef.current)
        setCurrentElement(projectListContRef.current.scrollLeft / scrollFactor);
      console.log("done");
    }, 100);
  };

  return (
    <div
      className=" overflow-auto py-6 relative snap-x snap-mandatory"
      ref={projectListContRef}
      onScroll={scrollHandler}
    >
      {/* <button
        className="absolute top-1/2 w-1/12 -translate-y-1/2 bg-black-shadow1/30 hover:bg-black-shadow1/70 text-3xl hover:text-black-text h-full grid place-items-center rounded-md text-[#888] transition-colors  duration-300 ease-linear cursor-pointer left-0 z-20 "
        onClick={() => {
          if (currentElement > 0) setCurrentElement((prev) => prev - 1);
        }}
        disabled={currentElement <= 0}
      >
        <FaAngleLeft />
      </button> */}
      <ul
        className="flex gap-8 transition-transform duration-300 ease-linear *:snap-center"
        style={
          {
            // transform: `translate(calc(-${currentElement} * ${scrollFactor}px))`,
          }
        }
      >
        <li className="w-[calc(((100%-250px)/2)-32px)] md:w-[calc(((100%-300px)/2)-32px)] flex-shrink-0"></li>
        {new Array(numberOfElements).fill(0).map((_, key) => (
          <ProjectListItem
            key={key}
            active={key === currentElement}
            ref={(ref) => {
              if (ref) itemsRef.current[key] = ref;
            }}
          />
        ))}
        <li className=" w-[calc(((100%-250px)/2)-32px)] md:w-[calc(((100%-300px)/2)-32px)] flex-shrink-0"></li>
      </ul>
      {/* <button
        className="absolute top-1/2 w-1/12 -translate-y-1/2 bg-black-shadow1/30 hover:bg-black-shadow1/70 text-3xl hover:text-black-text h-full grid place-items-center rounded-md text-[#888]  transition-colors duration-300 ease-linear cursor-pointer right-0 z-20 "
        onClick={() => {
          if (currentElement < numberOfElements)
            setCurrentElement((prev) => prev + 1);
        }}
        disabled={currentElement >= numberOfElements}
      >
        <FaAngleRight />
      </button> */}
    </div>
  );
}
