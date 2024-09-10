import React from "react";
import styles from "./Projects.module.css";
import { ProjectEnum } from "../../enums/enums";
import ProjectLink from "./projectTitle/ProjectTitle";
import { PageEnum } from "../../enums/enums";
import beaconBackground from "/src/assets/backgroundImages/beacon_background_1000.png";

interface ProjectsProps {
  setPage: (num: number) => void;
  setBackgroundHoverImageSrc: React.Dispatch<
    React.SetStateAction<string | null>
  >;
  setDisplayBackground: React.Dispatch<boolean>;
}

const Projects: React.FC<ProjectsProps> = ({
  setPage,
  setBackgroundHoverImageSrc,
  setDisplayBackground,
}) => {
  return (
    <nav className={styles.container}>
      <div
        onMouseEnter={() => {
          setDisplayBackground(true);
          setBackgroundHoverImageSrc(beaconBackground);
        }}
        onMouseLeave={() => setDisplayBackground(false)}
        onClick={() => {
          setPage(PageEnum.Beacon);
          setDisplayBackground(false);
        }}
      >
        <ProjectLink proj={ProjectEnum.Beacon} />
      </div>
    </nav>
  );
};

export default Projects;
