import styles from "./HeaderNav.module.css";
import NavButton from "./navButton/NavButton";
import { PageEnum } from "../../enums/enums";

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
          onClick={() => setPage(PageEnum.About)}
          isActive={page === PageEnum.About}
        >
          ABOUT
        </NavButton>
        <NavButton
          onClick={() => setPage(PageEnum.Experience)}
          isActive={page === PageEnum.Experience}
        >
          EXPERIENCE
        </NavButton>
        <NavButton
          onClick={() => setPage(PageEnum.Projects)}
          isActive={page === PageEnum.Projects}
        >
          PROJECTS
        </NavButton>
        <NavButton
          onClick={() => setPage(PageEnum.Contact)}
          isActive={page === PageEnum.Contact}
        >
          CONTACT
        </NavButton>
      </nav>
    </div>
  );
};

export default HeaderNav;
