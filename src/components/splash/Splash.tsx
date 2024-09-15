import styles from "./Splash.module.css";

const SplashScreen = () => {
  const color = "#20A0F5";
  const color_two = "#03e8fc";

  return (
    <>
      <div className={styles.background}></div>
      <div className={styles.splashScreen}>
        <h1>Ben Chamberlain</h1>
        <h2>SWE</h2>
      </div>
      <div
        className={styles.gradient}
        style={{
          backgroundImage: `radial-gradient(
          circle 500px at 53% 55%,
            ${color}FF 0%,
            ${color}EA 5.3%,
            ${color}D5 10.6%,
            ${color}C0 15.9%,
            ${color}AB 21.3%,
            ${color}97 26.8%,
            ${color}82 32.5%,
            ${color}6E 38.4%,
            ${color}5B 44.5%,
            ${color}48 50.9%,
            ${color}36 57.7%,
            ${color}25 65%,
            ${color}16 72.9%,
            ${color}0A 81.4%,
            ${color}02 90.6%,
            #00000000 100%
        )`,
        }}
      ></div>
      <div
        className={styles.gradient}
        style={{
          backgroundImage: `radial-gradient(
          circle 200px at 47% 60%,
            ${color_two}FF 0%,
            ${color_two}EA 5.3%,
            ${color_two}D5 10.6%,
            ${color_two}C0 15.9%,
            ${color_two}AB 21.3%,
            ${color_two}97 26.8%,
            ${color_two}82 32.5%,
            ${color_two}6E 38.4%,
            ${color_two}5B 44.5%,
            ${color_two}48 50.9%,
            ${color_two}36 57.7%,
            ${color_two}25 65%,
            ${color_two}16 72.9%,
            ${color_two}0A 81.4%,
            ${color_two}02 90.6%,
            #00000000 100%
        )`,
          opacity: "5%",
        }}
      ></div>
    </>
  );
};

export default SplashScreen;
