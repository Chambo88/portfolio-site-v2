import React, { useEffect } from "react";
import styles from "./MouseGradient.module.css";

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
    <div
      className={styles.container}
      style={{
        backgroundImage: `radial-gradient( circle 400px at ${mousePosition.x}px ${mousePosition.y}px, 
    #00B7FF30,
    #00B7FF00`,
      }}
    ></div>
  );
};

export default MouseGradient;
