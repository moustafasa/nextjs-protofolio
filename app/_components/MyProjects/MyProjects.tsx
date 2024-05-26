import Image from "next/image";
import SectionHead from "../SectionHead";
import clsx from "clsx";
import ProjectsList from "./ProjectsList";

function MyProjects() {
  return (
    <div className="section" id="MyProjects">
      <SectionHead title="my projects" />
      <div className="container py-5 flex flex-col-reverse lg:flex-row gap-3 lg:max-h-[calc(100vh-(theme(spacing.nav)))] ">
        <div className="flex-1 flex flex-col gap-7 ">
          <div className="flex-1 border-[15px] border-blue-200 rounded-xl bg-blue-200">
            <iframe
              className="w-full h-full"
              src="https://moustafasa.github.io/space-tourism-multi-page-website/"
            ></iframe>
          </div>
          <p className="border-[15px] border-blue-200 rounded-xl p-5 bg-black h-1/5">
            details
          </p>
        </div>
        <ProjectsList />
      </div>
    </div>
  );
}

export default MyProjects;