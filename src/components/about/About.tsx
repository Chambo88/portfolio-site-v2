import styles from "./About.module.css";

const About: React.FC = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <p>
          A passionate{" "}
          <span className={styles.bold}>full stack software engineer</span>{" "}
          thats always seeking out bigger challenges to overcome and more
          difficult problems to solve. I strive to pursue excellence, to learn
          from those I admire and <b>inspire</b> others to do good.
          <br />
          <br /> When I'm not on the mouse & keys, I'm likely either{" "}
          <span className={styles.bold}>climbing</span> rocks,{" "}
          <span className={styles.bold}>kicking</span> footballs or exploring{" "}
          <span className={styles.bold}>Hyrule</span>!
        </p>
      </div>
    </div>
  );
};

export default About;
