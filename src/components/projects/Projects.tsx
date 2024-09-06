import React from "react";
import styles from "./Projects.module.css";
import { ProjectEnum } from "../../enums/enums";
import ProjectLink from "./projectLink/ProjectLink";
import { PageEnum } from "../../enums/enums";

interface ProjectsProps {
  setPage: (num: number) => void;
}

const Projects: React.FC<ProjectsProps> = ({ setPage }) => {
  return (
    <nav className={styles.container}>
      <ProjectLink
        proj={ProjectEnum.beacon}
        onClick={() => setPage(PageEnum.beacon)}
      />
    </nav>
  );
};

export default Projects;
