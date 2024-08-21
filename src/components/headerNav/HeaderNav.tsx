import styles from "./HeaderNav.module.css";

const HeaderNav: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.name}>Ben Chamberlain</h1>
      <h3 className={styles.subTitle}> DEVELOPER / INNOVATOR</h3>
    </div>
  );
};

export default HeaderNav;
