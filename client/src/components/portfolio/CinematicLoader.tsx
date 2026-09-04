import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CinematicLoaderProps {
  onComplete: () => void;
}

export const CinematicLoader: React.FC<CinematicLoaderProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2600);

    return () => {
      clearTimeout(timer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#050608] text-[#f5f2eb] select-none"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          {/* Subtle grid background accent */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(43,75,238,0.1)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-50" />

          {/* Center animated "hello" / "iot365" sequence */}
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{
              opacity: [0, 1, 1, 0],
              y: [15, 0, 0, -10],
              scale: [0.95, 1, 1, 1.02],
            }}
            transition={{
              duration: 1.9,
              times: [0, 0.35, 0.75, 1],
              ease: "easeInOut",
            }}
            className="flex flex-col items-center gap-3"
          >
            <div className="flex items-center gap-2">
              <span
                className="text-5xl md:text-7xl italic font-serif font-light tracking-wide text-[#f5f2eb]"
                style={{
                  fontFamily: "var(--font-handwritten), Georgia, serif",
                  letterSpacing: "0.02em",
                }}
              >
                hello
              </span>
              <span className="text-2xl font-mono text-[#2b4bee] font-bold">_</span>
            </div>

            <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-[#888d96] uppercase mt-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2b4bee] animate-ping" />
              <span>IOT365 // 4-ENGINEER TEAM // SYSTEM ONLINE</span>
            </div>
          </motion.div>

          {/* Technical status bar on bottom */}
          <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between text-[11px] font-mono text-[#52565e] tracking-wider uppercase">
            <span>INIT // IOT365.TECH</span>
            <span>HARDWARE ⇄ CLOUD</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
