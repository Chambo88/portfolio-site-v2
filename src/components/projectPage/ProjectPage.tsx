import { useEffect } from "react";
import { projectData } from "../projects/ProjectData";
import { ProjectMediaEnum, ProjectEnum } from "../../enums/enums";
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

  const renderMidContent = () => {
    switch (projectData[proj].mediaType) {
      case ProjectMediaEnum.Mobile:
        return (
          <video width="360" height="800" controls>
            <source src={projectData[proj].videoSrc} type="video/mp4" />
          </video>
        );
      case ProjectMediaEnum.Web:
        return <div />;
      default:
        return <div>mid content not found</div>;
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.centerColumn}>{renderMidContent()}</div>
      <div className={styles.rightColumn}>TWO TRAILER PARK GIRLS</div>
    </div>
  );
};

export default ProjectPage;
