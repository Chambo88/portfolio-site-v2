import { ReactNode } from "react";
import styles from "./background.module.css";
import ColorGradients from "./colorGradients/ColorGradients";
import MouseGradient from "./mouseGradient/MouseGradient";
import MouseImageGradient from "./imageGradient/ImageGradient";

interface BackgroundProps {
  children: ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <ColorGradients lower_left={true} upper_right={true} />

      <MouseImageGradient url="src/assets/background_texture.png" />
      <MouseImageGradient url="src/assets/blueprint_bg.png" />
      <MouseGradient>{children}</MouseGradient>
      <div className={styles.grainContainer}></div>
    </div>
  );
};

export default Background;
