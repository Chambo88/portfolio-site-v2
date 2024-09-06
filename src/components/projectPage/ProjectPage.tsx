import { useEffect } from "react";
import { projectData } from "../projects/ProjectData";
import { ProjectEnum } from "../../enums/enums";
import styles from "./ProjectPage.module.css";

interface ProjectPageProps {
  proj: ProjectEnum;
  setBottomLeftComponent: React.Dispatch<React.SetStateAction<React.ReactNode>>;
}

const ProjectPage: React.FC<ProjectPageProps> = ({
  proj,
  setBottomLeftComponent,
}) => {
  useEffect(() => {
    setBottomLeftComponent(
      <div>
        <h3>{projectData[proj].title}</h3>
      </div>
    );

    return () => {
      setBottomLeftComponent(null);
    };
  }, [proj, setBottomLeftComponent]);

  return (
    <div className={styles.pageContainer}>
      <h1>{projectData[proj].title}</h1>
    </div>
  );
};

export default ProjectPage;
