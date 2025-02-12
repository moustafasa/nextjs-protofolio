"use client";
import { useRef } from "react";
import ProjectListItem from "./ProjectListItem";

type Props = { projectsMeta: ProjectMeta[] };

export default function ProjectsList({ projectsMeta }: Props) {
  const projectListRef = useRef<HTMLLIElement>(null);
  return (
    <ul className="flex gap-4 overflow-auto snap-x snap-mandatory p-4">
      {projectsMeta.map((meta) => (
        <ProjectListItem
          title={meta.name}
          active={false}
          src={meta.img}
          key={meta.name}
        />
      ))}
    </ul>
  );
}
