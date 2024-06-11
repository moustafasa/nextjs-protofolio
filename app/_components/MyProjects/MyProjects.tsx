import SectionHead from "../SectionHead";
import ProjectShow from "./ProjectShow";
import ProjectContextProvider from "@/app/_Context/ProjectContextProvider";
import ProjectListServer from "./ProjectListServer";
import { Suspense } from "react";

function MyProjects() {
  return (
    <div className="section" id="MyProjects">
      <SectionHead title="my projects" />
      <div className="container py-5 flex flex-col-reverse gap-7">
        <ProjectContextProvider>
          <ProjectShow />
          <Suspense fallback={<div>loading...</div>}>
            <ProjectListServer />
          </Suspense>
        </ProjectContextProvider>
      </div>
    </div>
  );
}

export default MyProjects;
