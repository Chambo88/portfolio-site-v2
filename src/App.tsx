import { useState } from "react";
import styles from "./App.module.css";
import "simplebar-react/dist/simplebar.min.css";
import Background from "./components/background/Background";
import HeaderNav from "./components/headerNav/HeaderNav";
import About from "./components/about/About";
import { Page } from "./enums/enums";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";

function App() {
  const [page, setPage] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(page);

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
      case Page.about:
        return <About />;
      case Page.experience:
        return <Experience />;
      case Page.projects:
        return <Projects />;
      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div className={styles.app}>
      <Background page={page} />
      <div className={styles.twoCols}>
        <div className={styles.colOne}>
          <HeaderNav page={page} setPage={handlePageChange} />
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
  );
}

export default App;
