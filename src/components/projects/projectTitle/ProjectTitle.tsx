import React from "react";
import styles from "./ProjectTitle.module.css";
import { projectData } from "../ProjectData";
import { ProjectEnum } from "../../../enums/enums";

interface ProjectTitleProps {
  proj: ProjectEnum;
}
interface ProjectLinkProps extends ProjectTitleProps {
  onClick: () => void;
}

const ProjectLink: React.FC<ProjectLinkProps> = ({ proj, onClick }) => {
  return (
    <div className={styles.container} onClick={onClick}>
      <h3
        className={styles.subTitle}
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
