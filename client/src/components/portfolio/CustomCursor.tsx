import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export type CursorVariant = "default" | "hover" | "project" | "hidden";

interface CustomCursorProps {
  cursorVariant?: CursorVariant;
  cursorText?: string;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({
  cursorVariant = "default",
  cursorText = "VIEW",
}) => {
  const [isTouch, setIsTouch] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Ultra-responsive spring physics
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Disable on touch devices
    const checkTouch = () => {
      if (window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window) {
        setIsTouch(true);
      } else {
        setIsTouch(false);
      }
    };
    checkTouch();

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[99998] flex items-center justify-center rounded-full text-center"
      style={{
        x: smoothX,
        y: smoothY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        width:
          cursorVariant === "project"
            ? 86
            : cursorVariant === "hover"
            ? 44
            : cursorVariant === "hidden"
            ? 0
            : 10,
        height:
          cursorVariant === "project"
            ? 86
            : cursorVariant === "hover"
            ? 44
            : cursorVariant === "hidden"
            ? 0
            : 10,
        backgroundColor:
          cursorVariant === "project"
            ? "#d4ff3a"
            : cursorVariant === "hover"
            ? "rgba(255, 255, 255, 0.15)"
            : "#f5f2eb",
        border:
          cursorVariant === "hover"
            ? "1px solid rgba(255, 255, 255, 0.6)"
            : cursorVariant === "project"
            ? "none"
            : "none",
        mixBlendMode: cursorVariant === "project" ? "normal" : "difference",
      }}
      transition={{ type: "spring", damping: 25, stiffness: 300 }}
    >
      {cursorVariant === "project" && (
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="text-[11px] font-mono font-bold tracking-widest text-[#0e0f12] select-none"
        >
          {cursorText}
        </motion.span>
      )}
    </motion.div>
  );
};
