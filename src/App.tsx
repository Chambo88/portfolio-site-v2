import { useState } from "react";
import styles from "./App.module.css";
import "simplebar-react/dist/simplebar.min.css";
import Background from "./components/background/Background";
import HeaderNav from "./components/headerNav/HeaderNav";
import About from "./components/about/About";
import { PageEnum, ProjectEnum } from "./enums/enums";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import ProjectPage from "./components/projectPage/ProjectPage";

function App() {
  const [page, setPage] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(page);
  const [BottomLeftComponent, setBottomLeftComponent] =
    useState<React.ReactNode | null>(null);

  const handlePageChange = (newPage: number) => {
    if (newPage !== page) {
      setIsTransitioning(true);
      setPage(newPage);

      setTimeout(() => {
        setCurrentPage(newPage);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case PageEnum.about:
        return <About />;
      case PageEnum.experience:
        return <Experience />;
      case PageEnum.projects:
        return <Projects setPage={handlePageChange} />;
      case PageEnum.beacon:
        return (
          <ProjectPage
            setBottomLeftComponent={setBottomLeftComponent}
            proj={ProjectEnum.beacon}
          />
        );
      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div className={styles.app}>
      <Background page={page} />
      <div className={styles.borderContainer}>
        <div className={styles.threeCols}>
          <div className={styles.colOne}>
            <div className={styles.colOneTop}>
              <HeaderNav page={page} setPage={handlePageChange} />
            </div>
            <div className={styles.colOneBottom}>
              {BottomLeftComponent ? BottomLeftComponent : <div></div>}
            </div>
          </div>

          <div
            className={`${styles.pageContainer} ${
              isTransitioning ? styles.fadeOut : styles.fadeIn
            }`}
          >
            {renderPage()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
