import styles from "./ColorGradient.module.css";

interface ColorGradientProps {
  position_x: string;
  position_y: string;
  color: string;
  enabled?: boolean;
  opacity: number;
  size: string;
}

const ColorGradient: React.FC<ColorGradientProps> = ({
  position_x,
  position_y,
  color,
  opacity,
  size,
  enabled = true,
}) => {
  return (
    <>
      <div
        className={styles.gradient}
        style={{
          backgroundImage: `radial-gradient(
          circle ${size} at ${position_x} ${position_y},
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
          opacity: enabled ? opacity : 0,
        }}
      ></div>
      <div
        className={styles.gridOverlay}
        style={{
          backgroundImage: `url(src/assets/blueprint_only.png)`,
          WebkitMaskImage: `radial-gradient(
            circle ${size} at ${position_x} ${position_y},
            hsl(0, 0%, 0%) 0%,
            hsla(0, 0%, 0%, 0.917) 5.3%,
            hsla(0, 0%, 0%, 0.834) 10.6%,
            hsla(0, 0%, 0%, 0.753) 15.9%,
            hsla(0, 0%, 0%, 0.672) 21.3%,
            hsla(0, 0%, 0%, 0.591) 26.8%,
            hsla(0, 0%, 0%, 0.511) 32.5%,
            hsla(0, 0%, 0%, 0.433) 38.4%,
            hsla(0, 0%, 0%, 0.357) 44.5%,
            hsla(0, 0%, 0%, 0.283) 50.9%,
            hsla(0, 0%, 0%, 0.213) 57.7%,
            hsla(0, 0%, 0%, 0.147) 65%,
            hsla(0, 0%, 0%, 0.089) 72.9%,
            hsla(0, 0%, 0%, 0.042) 81.4%,
            hsla(0, 0%, 0%, 0.011) 90.6%,
            hsla(0, 0%, 0%, 0) 100%
          ), `,
          maskImage: `radial-gradient(
            circle calc(${size} * 0.8) at ${position_x} ${position_y},
            hsl(0, 0%, 0%) 0%,
            hsla(0, 0%, 0%, 0.917) 5.3%,
            hsla(0, 0%, 0%, 0.834) 10.6%,
            hsla(0, 0%, 0%, 0.753) 15.9%,
            hsla(0, 0%, 0%, 0.672) 21.3%,
            hsla(0, 0%, 0%, 0.591) 26.8%,
            hsla(0, 0%, 0%, 0.511) 32.5%,
            hsla(0, 0%, 0%, 0.433) 38.4%,
            hsla(0, 0%, 0%, 0.357) 44.5%,
            hsla(0, 0%, 0%, 0.283) 50.9%,
            hsla(0, 0%, 0%, 0.213) 57.7%,
            hsla(0, 0%, 0%, 0.147) 65%,
            hsla(0, 0%, 0%, 0.089) 72.9%,
            hsla(0, 0%, 0%, 0.042) 81.4%,
            hsla(0, 0%, 0%, 0.011) 90.6%,
            hsla(0, 0%, 0%, 0) 100%
          )`,
          opacity: enabled ? opacity : 0,
        }}
      ></div>
    </>
  );
};

export default ColorGradient;
