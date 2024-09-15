import styles from "./Splash.module.css";

const SplashScreen = () => {
  return (
    <>
      <div className={styles.background}></div>
      <div className={styles.splashScreen}>
        <h1>Ben Chamberlain</h1>
        <h1 className={styles.swe}>SWE</h1>
      </div>
    </>
  );
};

export default SplashScreen;
