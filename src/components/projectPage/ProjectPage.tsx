import { ProjectMediaEnum, ProjectEnum } from "../../enums/enums";
import { ProjectTitle } from "../projects/projectTitle/ProjectTitle";
import styles from "./ProjectPage.module.css";
import ProjectParagraph from "./projectParagraph/ProjectParagraph";
import { PROJECT_DATA } from "../projects/ProjectData";

interface ProjectPageProps {
  proj: ProjectEnum;
}

const ProjectPage: React.FC<ProjectPageProps> = ({ proj }) => {
  const renderMidContent = () => {
    switch (PROJECT_DATA[proj].mediaType) {
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
              <source src={PROJECT_DATA[proj].videoSrc} type="video/mp4" />
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
      <div className={styles.leftColumn}>
        <div className={styles.sysDContainer}>
          <img
            className={styles.sysDImage}
            src={PROJECT_DATA[proj].sysDSrc}
            alt="system design of beacon"
          ></img>
        </div>
      </div>
      <div className={styles.centerColumn}>{renderMidContent()}</div>
      {/* This is some of the worst code of my life, Im sorry to anyone trying to read this (probably me...)
          had to do this to both get a scrollable bar when screen gets too small and also have the lines on outside whilst
          having the dotted lines as an absolute and clipping them. MY GOD (Ive given up on good names here, it works, IM DONE)
      */}
      <section className={styles.rightColumn}>
        <div className={styles.rightColWrapper}>
          <div className={styles.rightColWrapperTwo}>
            <div className={styles.topper}></div>
            <div className={styles.cols}>
              <div className={styles.lineCol}>
                <div className={styles.bottomLine}></div>
              </div>
              <div className={styles.contentCol}>
                <div style={{ position: "relative", overflow: "visible" }}>
                  <ProjectTitle proj={proj} />
                  <div className={styles.topLine}></div>
                </div>
                <div className={styles.con}>
                  <div className={styles.conTwo}>
                    <div className={styles.dottedCon}>
                      <div className={styles.dotted}></div>
                    </div>
                  </div>
                  {PROJECT_DATA[proj].paragraphs.map((para, index) => {
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
        </div>
      </section>
    </div>
  );
};

export default ProjectPage;
