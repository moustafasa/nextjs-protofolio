"use client";
import {
  createContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

export const ProjectContext = createContext<
  [currentProject: number, setCurrentProject: Dispatch<SetStateAction<number>>]
>([0, () => {}]);

export default function ProjectContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [currentProject, setCurrentProject] = useState(0);

  return (
    <ProjectContext.Provider value={[currentProject, setCurrentProject]}>
      {children}
    </ProjectContext.Provider>
  );
}
