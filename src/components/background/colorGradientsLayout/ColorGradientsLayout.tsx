import ColorGradient from "./colorGradient/ColorGradient";
import styles from "./ColorGradientsLayout.module.css";

interface ColorGradientsLayoutProps {
  lower_left: boolean;
  upper_right: boolean;
  lower_right: boolean;
  mid: boolean;
}

const ColorGradientsLayout: React.FC<ColorGradientsLayoutProps> = ({
  lower_left,
  upper_right,
  lower_right,
  mid,
}) => {
  return (
    <div className={styles.backgroundColor}>
      <ColorGradient
        size="700px"
        color="#189bf3"
        position_x="50px"
        position_y="220px"
        opacity={0.6}
      />
      {/* Lower left */}
      <ColorGradient
        size="500px"
        color="#1FFFAD"
        position_x="23%"
        position_y="95%"
        opacity={0.3}
        enabled={lower_left}
      />
      <ColorGradient
        size="300px"
        color="#1FFFFF"
        position_x="15%"
        position_y="82%"
        opacity={0.15}
        enabled={lower_left}
      />
      <ColorGradient
        size="300px"
        color="#1FFFD6"
        position_x="11%"
        position_y="70%"
        opacity={0.15}
        enabled={lower_left}
      />
      <ColorGradient
        size="300px"
        color="#1FD6FF"
        position_x="9%"
        position_y="55%"
        opacity={0.2}
        enabled={lower_left}
      />
      {/* Lower Right */}
      <ColorGradient
        size="700px"
        color="#60FF8A"
        position_x="90%"
        position_y="80%"
        opacity={0.4}
        enabled={lower_right}
      />
      {/* Lower mid */}
      <ColorGradient
        size="300px"
        color="#60FFA8"
        position_x="65%"
        position_y="90%"
        opacity={0.05}
        enabled={lower_left}
      />
      <ColorGradient
        size="300px"
        color="#60FFA8"
        position_x="57%"
        position_y="95%"
        opacity={0.05}
        enabled={lower_left}
      />
      <ColorGradient
        size="300px"
        color="#60FFA8"
        position_x="50%"
        position_y="98%"
        opacity={0.05}
        enabled={lower_left}
      />
      <ColorGradient
        size="300px"
        color="#60FFA8"
        position_x="40%"
        position_y="98%"
        opacity={0.05}
        enabled={lower_left}
      />
      {/* mid */}
      <ColorGradient
        size="300px"
        color="#60FFA8"
        position_x="65%"
        position_y="105%"
        opacity={0.2}
        enabled={mid}
      />
      <ColorGradient
        size="200px"
        color="#60FFD1"
        position_x="77%"
        position_y="105%"
        opacity={0.15}
        enabled={mid}
      />
      <ColorGradient
        size="200px"
        color="#60FFE9"
        position_x="82%"
        position_y="95%"
        opacity={0.0}
        enabled={mid}
      />
      {/* upper right */}
      <ColorGradient
        size="300px"
        color="#60FFDA"
        position_x="95%"
        position_y="0%"
        opacity={0.3}
        enabled={upper_right}
      />
    </div>
  );
};

export default ColorGradientsLayout;
