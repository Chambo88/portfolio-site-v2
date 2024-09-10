import React from "react";
import styles from "./ProjectTitle.module.css";
import { projectData } from "../ProjectData";
import { ProjectEnum } from "../../../enums/enums";

interface ProjectTitleProps {
  proj: ProjectEnum;
}

const ProjectLink: React.FC<ProjectTitleProps> = ({ proj }) => {
  return (
    <div className={styles.container}>
      <h3
        className={styles.subTitle}
        style={{ marginBottom: "5px" }}
      >{`${projectData[proj].what} / ${projectData[proj].date}`}</h3>
      <h1 className={styles.title}>{projectData[proj].title}</h1>
    </div>
  );
};

export const ProjectTitle: React.FC<ProjectTitleProps> = ({ proj }) => {
  return (
    <div className={styles.titleContainer}>
      <h1 className={styles.title}>{projectData[proj].title}</h1>
      <h3
        className={styles.subTitle}
      >{`${projectData[proj].what} / ${projectData[proj].date}`}</h3>
    </div>
  );
};

export default ProjectLink;
