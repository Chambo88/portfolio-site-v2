import React, { useEffect } from "react";
// import styles from "./MouseGradient.module.css";
import ColorGradient from "../colorGradientsLayout/colorGradient/ColorGradient";

const MouseGradient: React.FC = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <ColorGradient
      color="#00B7FF"
      size="400px"
      position_x={mousePosition.x + "px"}
      position_y={mousePosition.y + "px"}
      opacity={0.3}
    />
  );
};

export default MouseGradient;
