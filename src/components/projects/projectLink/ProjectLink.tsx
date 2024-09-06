import React from "react";
import styles from "./ProjectLink.module.css";
import { projectData } from "../ProjectData";
import { ProjectEnum } from "../../../enums/enums";

interface ProjectLinkProps {
  onClick: () => void;
  proj: ProjectEnum;
}

const ProjectLink: React.FC<ProjectLinkProps> = ({ proj, onClick }) => {
  return (
    <div className={styles.container} onClick={onClick}>
      <h3
        className={styles.subTitle}
      >{`${projectData[proj].what} / ${projectData[proj].date}`}</h3>
      <h1 className={styles.title}>{projectData[proj].title}</h1>
      <div className={styles.videoContainer}></div>
    </div>
  );
};

export default ProjectLink;
