import React, { ReactNode, useEffect } from "react";
import styles from "./MouseGradient.module.css";

interface MouseGradientProps {
  children: ReactNode;
}
const MouseGradient: React.FC<MouseGradientProps> = ({ children }) => {
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
        backgroundImage: `radial-gradient( circle 600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.1)  , black 50% )`,
      }}
    >
      {children}
    </div>
  );
};

export default MouseGradient;
