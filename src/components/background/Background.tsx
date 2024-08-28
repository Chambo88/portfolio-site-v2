import styles from "./background.module.css";
import ColorGradientsLayout from "./colorGradientsLayout/ColorGradientsLayout";
import MouseGradient from "./mouseGradient/MouseGradient";
import MouseImageGradient from "./imageGradient/ImageGradient";
import { Page } from "../../enums/enums";

interface BackgroundProps {
  page: number;
}

const Background: React.FC<BackgroundProps> = ({ page }) => {
  const lower_left_map: { [key: number]: boolean } = {
    [Page.about]: false,
    [Page.experience]: false,
    [Page.projects]: true,
    [Page.contact]: false,
  };
  const upper_right_map: { [key: number]: boolean } = {
    [Page.about]: false,
    [Page.experience]: true,
    [Page.projects]: true,
    [Page.contact]: false,
  };

  return (
    <div className={styles.container}>
      <ColorGradientsLayout
        lower_left={lower_left_map[page]}
        upper_right={upper_right_map[page]}
      />
      <MouseImageGradient
        url="src/assets/background_texture_three.png"
        stretch={false}
      />
      {/* <MouseImageGradient url="src/assets/blueprint_only.png" stretch={true} /> */}
      <MouseGradient />
    </div>
  );
};

export default Background;
