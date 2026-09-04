import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ExternalLink, Cpu, Radio, Sparkles, Terminal, ShieldCheck } from "lucide-react";

interface HeroSectionProps {
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onHoverStart, onHoverEnd }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const titleScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.15]);
  const letterSpacing = useTransform(scrollYProgress, [0, 1], ["-0.035em", "0.015em"]);

  const metadataItems = [
    { num: "01", label: "UID INSTANT PAIRING", detail: "Zero-configuration hardware binding" },
    { num: "02", label: "REALTIME DASHBOARD", detail: "Sub-50ms reactive sensor streaming" },
    { num: "03", label: "AUTOMATION & ALERTS", detail: "Multi-channel push, webhooks & rules" },
    { num: "04", label: "OPEN PROJECT HUB", detail: "Global documentation & schematic wiki" },
  ];

  return (
    <section
      id="system"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-between bg-[#f5f2eb] text-[#0a0c10] overflow-hidden pt-28 pb-12 px-6 md:px-12 select-none"
    >
      {/* Subtle editorial grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="max-w-[1440px] h-full mx-auto grid grid-cols-4 md:grid-cols-12 border-x border-[#0a0c10]/10">
          <div className="border-r border-[#0a0c10]/10" />
          <div className="border-r border-[#0a0c10]/10 hidden md:block" />
          <div className="border-r border-[#0a0c10]/10 hidden md:block" />
          <div className="border-r border-[#0a0c10]/10" />
          <div className="border-r border-[#0a0c10]/10 hidden md:block" />
          <div className="border-r border-[#0a0c10]/10 hidden md:block" />
          <div className="border-r border-[#0a0c10]/10" />
          <div className="border-r border-[#0a0c10]/10 hidden md:block" />
          <div className="border-r border-[#0a0c10]/10 hidden md:block" />
          <div className="border-r border-[#0a0c10]/10" />
          <div className="border-r border-[#0a0c10]/10 hidden md:block" />
        </div>
      </div>

      {/* Top Editorial Index & Meta */}
      <div className="relative z-10 max-w-[1440px] mx-auto w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#0a0c10]/15 pb-4 text-xs font-mono tracking-widest text-[#0a0c10]/75">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-0.5 border border-[#2b4bee] text-[10px] uppercase bg-[#2b4bee]/10 text-[#2b4bee] font-bold">
            IOT365.TECH
          </span>
          <span>ENGINEERING COLLECTIVE // 4-PERSON CORE TEAM</span>
        </div>
        <div className="flex items-center gap-6 text-[11px]">
          <span className="flex items-center gap-1 text-[#2b4bee] font-semibold">
            <Radio className="w-3.5 h-3.5 animate-pulse" /> SENSORS → DASHBOARD
          </span>
          <span className="hidden sm:inline">VERSION 2.4 STABLE</span>
        </div>
      </div>

      {/* Center Giant Hero Typography */}
      <div className="relative z-10 max-w-[1440px] mx-auto w-full my-auto py-10 md:py-16">
        <motion.div
          style={{
            y: titleY,
            scale: titleScale,
            opacity: titleOpacity,
            letterSpacing,
          }}
          className="flex flex-col"
        >
          {/* First Line: IOT365 */}
          <div className="overflow-hidden flex items-baseline gap-4 flex-wrap">
            <motion.h1
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{
                duration: 1.1,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.1,
              }}
              className="hero-giant-title text-[#0a0c10] tracking-tighter"
            >
              IOT365
            </motion.h1>

            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-2xl font-mono font-bold text-[#2b4bee] tracking-widest self-center uppercase"
            >
              [PLATFORM & TEAM]
            </motion.span>
          </div>

          {/* Second Line: ENGINEERING */}
          <div className="overflow-hidden flex items-baseline justify-between flex-wrap gap-x-6">
            <motion.h2
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{
                duration: 1.1,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.22,
              }}
              className="hero-giant-sub text-[#0a0c10]/85 tracking-tight"
            >
              ENGINEERING
            </motion.h2>

            {/* Platform badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="hidden lg:flex items-center gap-3 px-4 py-2 border border-[#0a0c10]/20 bg-[#0a0c10]/5 backdrop-blur-sm self-center text-xs font-mono"
            >
              <Cpu className="w-3.5 h-3.5 text-[#2b4bee]" />
              <span>IOT365.TECH // HARDWARE MEETS CLOUD</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Small metadata ticker / columns */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-[#0a0c10]/15"
        >
          {metadataItems.map((item) => (
            <div key={item.num} className="flex flex-col gap-1">
              <span className="text-[11px] font-mono text-[#2b4bee] font-bold">
                [{item.num}]
              </span>
              <span className="text-xs md:text-sm font-mono font-bold tracking-wider text-[#0a0c10]">
                {item.label}
              </span>
              <span className="text-[11px] font-mono text-[#0a0c10]/65">
                {item.detail}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Row: Statement, Platform Link & Circular Scroll Indicator */}
      <div className="relative z-10 max-w-[1440px] mx-auto w-full flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 pt-4">
        <div className="space-y-4 max-w-xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xs sm:text-sm font-mono text-[#0a0c10]/75 leading-relaxed"
          >
            A high-performance IoT ecosystem engineered to bridge physical microcontrollers
            and sensors directly with interactive cloud dashboards via instant UID pairing,
            dynamic automation pipelines, and an open documentation hub for IoT innovations.
          </motion.p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href="https://iot365.tech"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={onHoverStart}
              onMouseLeave={onHoverEnd}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2b4bee] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#0a0c10] transition-colors duration-300"
            >
              <span>VISIT IOT365.TECH</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={() => {
                const teamSec = document.querySelector("#team");
                teamSec?.scrollIntoView({ behavior: "smooth" });
              }}
              onMouseEnter={onHoverStart}
              onMouseLeave={onHoverEnd}
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#0a0c10]/30 text-[#0a0c10] font-mono text-xs uppercase tracking-wider hover:bg-[#0a0c10] hover:text-white transition-colors duration-300"
            >
              <span>MEET 4-PERSON TEAM</span>
            </button>
          </div>
        </div>

        {/* Circular Animated Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="self-end sm:self-auto flex items-center gap-4 cursor-pointer group"
          onClick={() => {
            const archSec = document.querySelector("#architecture");
            archSec?.scrollIntoView({ behavior: "smooth" });
          }}
          onMouseEnter={onHoverStart}
          onMouseLeave={onHoverEnd}
        >
          <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full border border-[#0a0c10]/25 group-hover:border-[#2b4bee] transition-colors duration-300">
            <svg
              className="absolute inset-0 w-full h-full animate-[spin_12s_linear_infinite]"
              viewBox="0 0 100 100"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                />
              </defs>
              <text className="text-[9px] font-mono uppercase tracking-[0.24em] fill-[#0a0c10]/80 font-medium">
                <textPath href="#circlePath" startOffset="0%">
                  • DISCOVER IOT365 • HARDWARE TO CLOUD
                </textPath>
              </text>
            </svg>
            <ArrowDown className="w-4 h-4 text-[#2b4bee] group-hover:translate-y-1 transition-transform duration-300" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
