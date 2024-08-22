import styles from "./background.module.css";
import ColorGradients from "./colorGradients/ColorGradients";
import MouseGradient from "./mouseGradient/MouseGradient";
import MouseImageGradient from "./imageGradient/ImageGradient";

const Background: React.FC = () => {
  return (
    <div className={styles.container}>
      <ColorGradients lower_left={true} upper_right={true} />
      <MouseImageGradient url="src/assets/background_texture_two.png" />
      <MouseImageGradient url="src/assets/blueprint_bg.png" />
      <MouseGradient />
    </div>
  );
};

export default Background;
