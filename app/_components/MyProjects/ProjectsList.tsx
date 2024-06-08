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
import useCurrentProject from "@/app/_Context/useCurrentProject";

type Props = {};

export default function ProjectsList({}: Props) {
  const projectListContRef = useRef<HTMLDivElement>(null);

  const itemsRef = useRef<HTMLLIElement[]>([]);

  const tailConfig = useMemo(
    () => resolveConfig(tailwindConfig).theme.screens,
    []
  );

  const [scrollFactor, setScrollFactor] = useState(0);
  const [currentElement, setCurrentElement] = useCurrentProject();
  const [projectsMeta, setProjectsMeta] = useState<ProjectMeta[]>([]);

  const scrollendTimeOut = useRef<NodeJS.Timeout>();

  const scrollHandler = (e: UIEvent<HTMLDivElement>) => {
    clearTimeout(scrollendTimeOut.current);

    scrollendTimeOut.current = setTimeout(() => {
      if (projectListContRef.current)
        setCurrentElement(projectListContRef.current.scrollLeft / scrollFactor);
    }, 100);
  };

  useEffect(() => {
    function calcScrollFactor() {
      if (projectListContRef.current) {
        const containerWidth = window.matchMedia(`(min-width:${tailConfig.md})`)
          .matches
          ? 300
          : 250;
        const sizeOfLeftShowedView =
          (projectListContRef.current.clientWidth - containerWidth) / 2;
        setScrollFactor(
          sizeOfLeftShowedView + (containerWidth - (sizeOfLeftShowedView - 32))
        );
      }
    }

    calcScrollFactor();

    window.addEventListener("resize", calcScrollFactor);
    return () => {
      window.removeEventListener("resize", calcScrollFactor);
    };
  }, [tailConfig.md]);

  useEffect(() => {
    const getProjects = async () => {
      const res = await fetch("/api/projects");
      if (!res.ok) {
        setProjectsMeta([]);
      } else {
        setProjectsMeta(await res.json());
      }
    };

    getProjects();
  }, []);

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
        {projectsMeta.map((meta, key) => (
          <ProjectListItem
            key={meta.id}
            active={key === currentElement}
            ref={(ref) => {
              if (ref) itemsRef.current[key] = ref;
            }}
            title={meta.name || ""}
            src={meta.img}
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
