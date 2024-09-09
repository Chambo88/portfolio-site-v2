import React from "react";
import styles from "./Projects.module.css";
import { ProjectEnum } from "../../enums/enums";
import ProjectLink from "./projectTitle/ProjectTitle";
import { PageEnum } from "../../enums/enums";

interface ProjectsProps {
  setPage: (num: number) => void;
}

const Projects: React.FC<ProjectsProps> = ({ setPage }) => {
  return (
    <nav className={styles.container}>
      <ProjectLink
        proj={ProjectEnum.Beacon}
        onClick={() => setPage(PageEnum.Beacon)}
      />
    </nav>
  );
};

export default Projects;
