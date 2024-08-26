import React from "react";
import styles from "./Projects.module.css";
import { projectData } from "./Projectdata";
import ProjectLink from "./projectLink/ProjectLink";

const Projects: React.FC = () => {
  return (
    <nav className={styles.container}>
      {projectData.map((proj, index) => {
        return <ProjectLink key={index} {...proj} />;
      })}
    </nav>
  );
};

export default Projects;
