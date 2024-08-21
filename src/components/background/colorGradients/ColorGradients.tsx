import styles from "./ColorGradients.module.css";

interface ColorGradientsProps {
  lower_left: boolean;
  upper_right: boolean;
}

const ColorGradients: React.FC<ColorGradientsProps> = ({
  lower_left,
  upper_right,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundColor}></div>
      <div className={styles.gradientUpperLeft}></div>
      <div
        className={styles.gradientUpperRight}
        style={{ display: upper_right ? "block" : "none" }}
      ></div>
      <div
        className={styles.gradientLowerLeft}
        style={{ display: lower_left ? "block" : "none" }}
      ></div>
      <div
        className={styles.gradientLowerLeftTwo}
        style={{ display: lower_left ? "block" : "none" }}
      ></div>
      <div
        className={styles.gradientLowerLeftThree}
        style={{ display: lower_left ? "block" : "none" }}
      ></div>
      <div className={styles.gradientLowerRight}></div>
      <div
        className={styles.gridOverlay}
        style={{
          backgroundImage: `url(src/assets/blueprint_bg.png)`,
          WebkitMaskImage: `radial-gradient(
            circle 1400px at -500px -500px,
            rgba(0, 0, 0, 1),
            rgba(0, 0, 0, 0)
          ), `,
          maskImage: `radial-gradient(
            circle 1400px at -500px -500px,
            rgba(0, 0, 0, 1),
            rgba(0, 0, 0, 0)
          )`,
        }}
      ></div>
      <div
        className={styles.gridOverlay}
        style={{
          backgroundImage: `url(src/assets/blueprint_bg.png)`,
          WebkitMaskImage: `radial-gradient(
            circle 400px at calc(100% - 500px) calc(100% - 500px),
            rgba(0, 0, 0, 1),
            rgba(0, 0, 0, 0)
          ), `,
          maskImage: `radial-gradient(
            circle 400px at calc(100% - 150px) calc(100% - 200px),
            rgba(0, 0, 0, 1),
            rgba(0, 0, 0, 0)
          )`,
        }}
      ></div>
      <div
        className={styles.gridOverlay}
        style={{
          backgroundImage: `url(src/assets/blueprint_bg.png)`,
          WebkitMaskImage: `radial-gradient(
            circle 300px at calc(500px) calc(100% - 200px),
            rgba(0, 0, 0, 1),
            rgba(0, 0, 0, 0)
          ), `,
          maskImage: `radial-gradient(
            circle 400px at calc(500px) calc(100% - 200px),
            rgba(0, 0, 0, 1),
            rgba(0, 0, 0, 0)
          )`,
        }}
      ></div>
    </div>
  );
};

export default ColorGradients;
