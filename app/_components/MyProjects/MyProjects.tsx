import SectionHead from "../SectionHead";
import ProjectsList from "./ProjectsList";
import ProjectShow from "./ProjectShow";
import ProjectContextProvider from "@/app/_Context/ProjectContextProvider";

function MyProjects() {
  return (
    <div className="section" id="MyProjects">
      <SectionHead title="my projects" />
      <div className="container py-5 flex flex-col-reverse gap-7">
        <ProjectContextProvider>
          <ProjectShow />
          <ProjectsList />
        </ProjectContextProvider>
      </div>
    </div>
  );
}

export default MyProjects;
