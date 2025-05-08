import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CustomCursorProps {
  hovering: boolean;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ hovering }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const mouseEnter = () => setIsVisible(true);
    const mouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", mouseMove);
    document.body.addEventListener("mouseenter", mouseEnter);
    document.body.addEventListener("mouseleave", mouseLeave);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      document.body.removeEventListener("mouseenter", mouseEnter);
      document.body.removeEventListener("mouseleave", mouseLeave);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      opacity: isVisible ? 1 : 0,
    },
    hovering: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      height: 40,
      width: 40,
      opacity: isVisible ? 1 : 0,
      mixBlendMode: "difference",
    },
  };

  return (
    <>
      <motion.div
        className="custom-cursor-dot fixed top-0 left-0 w-4 h-4 rounded-full bg-primary-500 pointer-events-none z-50"
        variants={variants}
        animate={hovering ? "hovering" : "default"}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.5,
        }}
      />
      <motion.div
        className="custom-cursor-ring fixed top-0 left-0 w-8 h-8 rounded-full border border-primary-500 pointer-events-none z-50"
        style={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          opacity: isVisible ? 0.5 : 0,
        }}
        transition={{
          type: "spring",
          damping: 50,
          stiffness: 150,
          mass: 0.3,
        }}
      />
    </>
  );
};

export default CustomCursor;
