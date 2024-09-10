import React from "react";
import styles from "./ProjectTitle.module.css";
import { PROJECT_DATA } from "../ProjectData";
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
      >{`${PROJECT_DATA[proj].what} / ${PROJECT_DATA[proj].date}`}</h3>
      <h1 className={styles.title}>{PROJECT_DATA[proj].title}</h1>
    </div>
  );
};

export const ProjectTitle: React.FC<ProjectTitleProps> = ({ proj }) => {
  return (
    <div className={styles.titleContainer}>
      <h1 className={styles.title}>{PROJECT_DATA[proj].title}</h1>
      <h3
        className={styles.subTitle}
      >{`${PROJECT_DATA[proj].what} / ${PROJECT_DATA[proj].date}`}</h3>
    </div>
  );
};

export default ProjectLink;
