import Image from "next/image";
import clsx from "clsx";
import ProjectsList from "../_components/MyProjects/ProjectsList";
import SectionHead from "../_components/SectionHead";
import { ReactNode } from "react";

function MyProjectsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="section" id="MyProjects">
      <SectionHead title="my projects" />
      <div className="container py-5 flex flex-col-reverse gap-7">
        <div className="flex-1 flex flex-col gap-7 lg:px-24">{children}</div>
        <ProjectsList />
      </div>
    </div>
  );
}

export default MyProjectsLayout;
