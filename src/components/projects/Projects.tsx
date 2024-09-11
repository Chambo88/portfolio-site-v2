import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Projects.module.css";
import { ProjectEnum } from "../../enums/enums";
import ProjectLink from "./projectTitle/ProjectTitle";
import beaconBackground from "/src/assets/backgroundImages/beacon_background_1000.png";

interface ProjectsProps {
  setBackgroundHoverImageSrc: React.Dispatch<
    React.SetStateAction<string | null>
  >;
  setDisplayBackground: React.Dispatch<boolean>;
}

const Projects: React.FC<ProjectsProps> = ({
  setBackgroundHoverImageSrc,
  setDisplayBackground,
}) => {
  const navigate = useNavigate();

  return (
    <nav className={styles.container}>
      <div
        onMouseEnter={() => {
          setDisplayBackground(true);
          setBackgroundHoverImageSrc(beaconBackground);
        }}
        onMouseLeave={() => setDisplayBackground(false)}
        onClick={() => {
          navigate("/projects/beacon");
          setDisplayBackground(false);
        }}
      >
        <ProjectLink proj={ProjectEnum.Beacon} />
      </div>
    </nav>
  );
};

export default Projects;
