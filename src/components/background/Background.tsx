import { useLocation } from "react-router-dom";
import styles from "./Background.module.css";
import ColorGradientsLayout from "./colorGradientsLayout/ColorGradientsLayout";
import MouseGradient from "./mouseGradient/MouseGradient";
import MouseImageGradient from "./imageGradient/ImageGradient";
import backgroundTexture from "../../assets/background_texture_three.png";
import { PageEnum } from "../../enums/enums";

interface BackgroundProps {
  backgroundHover: string | null;
  displayBackground: boolean;
}

const Background: React.FC<BackgroundProps> = ({
  backgroundHover,
  displayBackground,
}) => {
  const location = useLocation();

  const page = (() => {
    switch (location.pathname) {
      case "/about":
        return PageEnum.About;
      case "/experience":
        return PageEnum.Experience;
      case "/projects":
        return PageEnum.Projects;
      case "/contact":
        return PageEnum.Contact;
      case "/projects/beacon":
        return PageEnum.Beacon;
      default:
        return PageEnum.About;
    }
  })();

  const lower_left_map: { [key: number]: boolean } = {
    [PageEnum.About]: false,
    [PageEnum.Experience]: false,
    [PageEnum.Projects]: false,
    [PageEnum.Contact]: false,
    [PageEnum.Beacon]: true,
  };
  const upper_right_map: { [key: number]: boolean } = {
    [PageEnum.About]: false,
    [PageEnum.Experience]: true,
    [PageEnum.Projects]: false,
    [PageEnum.Contact]: false,
    [PageEnum.Beacon]: false,
  };
  const lower_right_map: { [key: number]: boolean } = {
    [PageEnum.About]: true,
    [PageEnum.Experience]: true,
    [PageEnum.Projects]: true,
    [PageEnum.Contact]: true,
    [PageEnum.Beacon]: true,
  };
  const mid_map: { [key: number]: boolean } = {
    [PageEnum.About]: false,
    [PageEnum.Experience]: false,
    [PageEnum.Projects]: false,
    [PageEnum.Contact]: true,
    [PageEnum.Beacon]: false,
  };

  return (
    <div className={styles.container}>
      <ColorGradientsLayout
        lower_left={lower_left_map[page]}
        upper_right={upper_right_map[page]}
        lower_right={lower_right_map[page]}
        mid={mid_map[page]}
      />
      <MouseImageGradient url={backgroundTexture} stretch={false} />
      <div
        className={styles.backgroundImageContainer}
        style={{
          opacity: displayBackground ? 0.8 : 0,
          backgroundImage: backgroundHover ? `url(${backgroundHover})` : "",
        }}
      ></div>
      <MouseGradient />
    </div>
  );
};

export default Background;
