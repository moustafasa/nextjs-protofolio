import React from "react";
import ProjectsList from "./ProjectsList";
import getProjectsMeta from "@/lib/getProjects";

export default async function ProjectListServer() {
  const projectsMeta = await getProjectsMeta();
  return <ProjectsList projectsMeta={projectsMeta || []} />;
}
