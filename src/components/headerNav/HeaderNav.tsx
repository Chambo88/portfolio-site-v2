import styles from "./HeaderNav.module.css";
import NavButton from "./navButton/NavButton";
import { Page } from "../../enums/enums";

interface HeaderNavProps {
  setPage: (newPage: number) => void;
  page: number;
}

const HeaderNav: React.FC<HeaderNavProps> = ({ page, setPage }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.name}>Ben Chamberlain</h1>
      <h3 className={styles.subTitle}> SWE / INNOVATOR</h3>
      <nav>
        <NavButton
          onClick={() => setPage(Page.about)}
          isActive={page === Page.about}
        >
          ABOUT
        </NavButton>
        <NavButton
          onClick={() => setPage(Page.experience)}
          isActive={page === Page.experience}
        >
          EXPERIENCE
        </NavButton>
        <NavButton
          onClick={() => setPage(Page.projects)}
          isActive={page === Page.projects}
        >
          PROJECTS
        </NavButton>
        <NavButton
          onClick={() => setPage(Page.contact)}
          isActive={page === Page.contact}
        >
          CONTACT
        </NavButton>
      </nav>
    </div>
  );
};

export default HeaderNav;
