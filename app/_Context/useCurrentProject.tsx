import { useContext } from "react";
import { ProjectContext } from "./ProjectContextProvider";

export default function useCurrentProject() {
  const contextValue = useContext(ProjectContext);
  return contextValue;
}
