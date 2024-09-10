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
import Contact from "./components/contact/contact";

function App() {
  const [page, setPage] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(page);
  const [bottomLeftComponent, setBottomLeftComponent] =
    useState<React.ReactNode | null>(null);
  const [backgroundHoverImageSrc, setBackgroundHoverImageSrc] = useState<
    string | null
  >(null);
  const [displayBackground, setDisplayBackground] = useState<boolean>(false);

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
      case PageEnum.About:
        return <About />;
      case PageEnum.Experience:
        return <Experience />;
      case PageEnum.Projects:
        return (
          <Projects
            setPage={handlePageChange}
            setBackgroundHoverImageSrc={setBackgroundHoverImageSrc}
            setDisplayBackground={setDisplayBackground}
          />
        );
      case PageEnum.Beacon:
        return (
          <ProjectPage
            setBottomLeftComponent={setBottomLeftComponent}
            proj={ProjectEnum.Beacon}
          />
        );
      case PageEnum.Contact:
        return <Contact />;
      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div className={styles.app}>
      <Background
        page={page}
        backgroundHover={backgroundHoverImageSrc}
        displayBackground={displayBackground}
      />
      <div className={styles.borderContainer}>
        <div className={styles.threeCols}>
          <div className={styles.colOne}>
            <div className={styles.colOneTop}>
              <HeaderNav page={page} setPage={handlePageChange} />
            </div>
            <div
              className={`${styles.colOneBottom} ${
                isTransitioning ? styles.fadeOut : styles.fadeIn
              }`}
            >
              {bottomLeftComponent ? bottomLeftComponent : <div></div>}
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
