import { Link, useLocation } from "react-router-dom";
import styles from "./HeaderNav.module.css";
import NavButton from "./navButton/NavButton";

const HeaderNav: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const isProject = () => ["/projects/beacon"].includes(location.pathname);

  return (
    <div className={styles.container}>
      <h1 className={styles.name}>Ben Chamberlain</h1>
      <h3 className={styles.subTitle}> SWE / INNOVATOR</h3>
      <nav>
        <Link to="/">
          <NavButton isActive={isActive("/")}>ABOUT</NavButton>
        </Link>
        <Link to="/experience">
          <NavButton isActive={isActive("/experience")}>EXPERIENCE</NavButton>
        </Link>
        <Link to="/projects">
          <NavButton isActive={isActive("/projects")}>PROJECTS</NavButton>
        </Link>
        <div
          className={`${styles.projectNav} ${isProject() ? styles.show : ""}`}
        >
          <Link to="/projects/beacon">
            <NavButton isActive={isActive("/projects/beacon")}>
              &mdash; BEACON
            </NavButton>
          </Link>
        </div>
        <Link to="/contact">
          <NavButton isActive={isActive("/contact")}>CONTACT</NavButton>
        </Link>
      </nav>
    </div>
  );
};

export default HeaderNav;
