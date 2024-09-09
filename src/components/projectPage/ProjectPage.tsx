import { useEffect } from "react";
import { projectData } from "../projects/ProjectData";
import { ProjectMediaEnum, ProjectEnum } from "../../enums/enums";
import { ProjectTitle } from "../projects/projectTitle/ProjectTitle";
import styles from "./ProjectPage.module.css";
import ProjectParagraph from "./projectParagraph/ProjectParagraph";

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
      <div className={styles.sysDContainer}>
        <img
          className={styles.sysDImage}
          src={projectData[proj].sysDSrc}
          alt="system design of beacon"
        ></img>
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
          <>
            <div className={styles.phoneBars}>
              {Array.from({ length: 50 }, (_, i) => (
                <div key={i} className={styles.phoneLine}></div>
              ))}
            </div>

            <div className={styles.phoneCase}></div>
            <video controls autoPlay loop className={styles.video}>
              <source src={projectData[proj].videoSrc} type="video/mp4" />
            </video>
          </>
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
      <div className={styles.rightColumn}>
        <div className={styles.overFlow}>
          <div className={styles.title}>
            <ProjectTitle proj={proj} />
          </div>
          <div className={styles.topLine}></div>
          <div className={styles.bottomLine}></div>
          <div className={styles.dotted}>
            {projectData[proj].paragraphs.map((para, index) => {
              return (
                <ProjectParagraph
                  key={index}
                  title={para.title}
                  content={para.content}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
