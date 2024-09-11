import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import styles from "./App.module.css";
import "simplebar-react/dist/simplebar.min.css";
import Background from "./components/background/Background";
import HeaderNav from "./components/headerNav/HeaderNav";
import About from "./components/about/About";
import { ProjectEnum } from "./enums/enums";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import ProjectPage from "./components/projectPage/ProjectPage";
import Contact from "./components/contact/contact";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [backgroundHoverImageSrc, setBackgroundHoverImageSrc] = useState<
    string | null
  >(null);
  const [displayBackground, setDisplayBackground] = useState<boolean>(false);
  const location = useLocation();

  return (
    <div className={styles.app}>
      <Background
        backgroundHover={backgroundHoverImageSrc}
        displayBackground={displayBackground}
      />

      <div className={styles.borderContainer}>
        <HeaderNav />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <MotionWrapper>
                  <About />
                </MotionWrapper>
              }
            />
            <Route
              path="/about"
              element={
                <MotionWrapper>
                  <About />
                </MotionWrapper>
              }
            />
            <Route
              path="/experience"
              element={
                <MotionWrapper>
                  <Experience />
                </MotionWrapper>
              }
            />
            <Route
              path="/projects"
              element={
                <MotionWrapper>
                  <Projects
                    setBackgroundHoverImageSrc={setBackgroundHoverImageSrc}
                    setDisplayBackground={setDisplayBackground}
                  />
                </MotionWrapper>
              }
            />
            <Route
              path="/projects/beacon"
              element={
                <MotionWrapper>
                  <ProjectPage proj={ProjectEnum.Beacon} />
                </MotionWrapper>
              }
            />
            <Route
              path="/contact"
              element={
                <MotionWrapper>
                  <Contact />
                </MotionWrapper>
              }
            />
            <Route
              path="*"
              element={
                <MotionWrapper>
                  <div>Page not found</div>
                </MotionWrapper>
              }
            />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}

type MotionWrapperProps = {
  children: React.ReactNode;
};

const MotionWrapper: React.FC<MotionWrapperProps> = ({ children }) => {
  const pageTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 },
  };

  return (
    <motion.div
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
      transition={pageTransition.transition}
      className={styles.pageWrapper}
    >
      {children}
    </motion.div>
  );
};

export default App;
