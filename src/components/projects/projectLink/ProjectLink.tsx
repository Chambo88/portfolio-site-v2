import React from "react";
import styles from "./ProjectLink.module.css";
import { ProjectData } from "../Projectdata";

const ProjectLink: React.FC<ProjectData> = (proj: ProjectData) => {
  return (
    <div className={styles.container}>
      <div className={styles.subTitle}>{`${proj.what} / ${proj.date}`}</div>
      <h2 className={styles.title}>{proj.title}</h2>
    </div>
  );
};

export default ProjectLink;
