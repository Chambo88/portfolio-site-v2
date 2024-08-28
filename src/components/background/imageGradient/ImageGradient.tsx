import React, { useEffect } from "react";
import styles from "./ImageGradient.module.css";

interface MouseImageGradientProps {
  url: string;
  stretch: boolean;
}

const MouseImageGradient: React.FC<MouseImageGradientProps> = ({
  url,
  stretch,
}) => {
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
        backgroundImage: `url(${url})`,
        WebkitMaskImage: `radial-gradient(
            circle 250px at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(0, 0, 0, 1),
            rgba(0, 0, 0, 0.4) 30%,
            rgba(0, 0, 0, 0.1) 60%,
            rgba(0, 0, 0, 0)
          )`,
        maskImage: `radial-gradient(
            circle 250px at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(0, 0, 0, 1),
            rgba(0, 0, 0, 0.4) 30%,
            rgba(0, 0, 0, 0.1) 60%,
            rgba(0, 0, 0, 0)
          )`,
        backgroundSize: stretch ? "100vw 100vh" : "100vw",
        objectFit: stretch ? undefined : "cover",
      }}
    ></div>
  );
};

export default MouseImageGradient;
