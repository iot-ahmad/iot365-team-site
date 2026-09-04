import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Cpu, Radio, Shield, Zap, Layers, Bell, FileCode2 } from "lucide-react";

interface ExpertiseSectionProps {
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
}

interface CapabilityItem {
  num: string;
  title: string;
  description: string;
  technologies: string[];
  deliverables: string;
}

export const ExpertiseSection: React.FC<ExpertiseSectionProps> = ({
  onHoverStart,
  onHoverEnd,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const capabilitiesList: CapabilityItem[] = [
    {
      num: "01",
      title: "Seamless UID Provisioning",
      description:
        "Every microcontroller (ESP32, STM32, Arduino, Raspberry Pi) links to your dashboard using a single unique UID token. Zero broker configuration, instant handshake.",
      technologies: ["Token Authentication", "One-Line C++ Lib", "Auto-Registration", "Zero-Conf"],
      deliverables: "Instant Hardware Handshake & Security Tokenization",
    },
    {
      num: "02",
      title: "Real-Time Reactive Telemetry",
      description:
        "Ultra-low latency streaming architecture delivering sensor readings directly to dynamic browser gauges, real-time wave graphs, and state indicators.",
      technologies: ["WebSockets", "Binary Telemetry Buffers", "Redis Ingestion", "Sub-50ms Latency"],
      deliverables: "Live Dynamic Gauges, Time-Series Charts & State Toggles",
    },
    {
      num: "03",
      title: "Autonomous Rules & Multi-Channel Alerts",
      description:
        "Configure visual triggers without writing server code. Set conditional thresholds to trigger physical relays and broadcast instant Telegram, SMS, or Webhook alerts.",
      technologies: ["Conditional Logic Engine", "Telegram Bot API", "Webhooks", "Relay Automation"],
      deliverables: "Instant Multi-Channel Push Notifications & Actuator Loops",
    },
    {
      num: "04",
      title: "Open IoT Project Publishing Hub",
      description:
        "A community wiki on iot365.tech where makers, students, and engineers document wiring pinouts, share circuit schematics, and publish open-source IoT designs.",
      technologies: ["Schematic Sharing", "Markdown Wiki", "Interactive Pinouts", "Community Voting"],
      deliverables: "Global Hardware Repository & Open Documentation Engine",
    },
    {
      num: "05",
      title: "Multi-Microcontroller & Protocol Support",
      description:
        "Engineered for true interoperability. Built-in support for ESP32, ESP8266, STM32, Raspberry Pi, LoRa nodes, Modbus RS485, and standard I2C/SPI sensors.",
      technologies: ["ESP32 / ESP8266", "STM32 Nucleo", "LoRaWAN", "Modbus RS485"],
      deliverables: "Cross-Platform Firmware Libraries & Edge Adapters",
    },
  ];

  const floatingTech = [
    { name: "ESP32 C++", x: "8%", y: "15%", delay: 0 },
    { name: "WebSockets", x: "85%", y: "20%", delay: 1.2 },
    { name: "Redis Ingest", x: "78%", y: "65%", delay: 2.1 },
    { name: "LoRaWAN", x: "12%", y: "75%", delay: 0.8 },
    { name: "Telegram Bot", x: "88%", y: "85%", delay: 1.7 },
  ];

  return (
    <section
      id="capabilities"
      className="relative bg-[#060709] text-[#f5f2eb] py-28 md:py-36 px-6 md:px-12 border-t border-white/10 overflow-hidden"
    >
      {/* Floating subtle ambient technology badges */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {floatingTech.map((tech) => (
          <motion.div
            key={tech.name}
            initial={{ y: 0 }}
            animate={{
              y: [-8, 8, -8],
              rotate: [-2, 2, -2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: tech.delay,
            }}
            className="absolute hidden md:block px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-[11px] font-mono text-[#888d96]/60 tracking-wider backdrop-blur-[2px]"
            style={{ left: tech.x, top: tech.y }}
          >
            ✦ {tech.name}
          </motion.div>
        ))}
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Header with oversized "PLATFORM" */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 mb-16 gap-6">
          <div className="flex flex-col">
            <span className="text-xs font-mono tracking-widest text-[#2b4bee] uppercase mb-2">
              [04] // PLATFORM CAPABILITIES
            </span>
            <div className="flex items-baseline gap-4 md:gap-6 flex-wrap">
              <span className="text-5xl sm:text-7xl md:text-8xl font-display text-[#2b4bee] tracking-tight">
                CORE
              </span>
              <h2 className="editorial-title text-[#f5f2eb]">PILLARS</h2>
            </div>
          </div>
          <p className="max-w-md text-xs sm:text-sm font-mono text-[#888d96] leading-relaxed">
            Every layer of iot365 is designed to give embedded engineers absolute control,
            zero broker friction, and effortless cloud synchronization.
          </p>
        </div>

        {/* Editorial Capabilities Rows */}
        <div className="flex flex-col divide-y divide-white/10 border-b border-white/10">
          {capabilitiesList.map((item, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={item.num}
                onMouseEnter={() => {
                  setHoveredIndex(index);
                  if (onHoverStart) onHoverStart();
                }}
                onMouseLeave={() => {
                  setHoveredIndex(null);
                  if (onHoverEnd) onHoverEnd();
                }}
                className={`group relative transition-all duration-500 py-8 md:py-12 px-4 md:px-8 cursor-pointer ${
                  isHovered ? "bg-white/[0.03]" : "bg-transparent"
                }`}
              >
                {/* Horizontal Accent bar on active row */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1 bg-[#2b4bee] transition-all duration-300 ${
                    isHovered ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
                  }`}
                />

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  {/* Number */}
                  <div className="md:col-span-1 flex items-center">
                    <span
                      className={`text-sm md:text-base font-mono font-bold transition-all duration-300 ${
                        isHovered ? "text-[#2b4bee] translate-x-2" : "text-[#888d96]"
                      }`}
                    >
                      {item.num}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="md:col-span-5">
                    <h3
                      className={`text-2xl sm:text-3xl md:text-4xl font-display tracking-tight uppercase transition-all duration-300 ${
                        isHovered
                          ? "text-[#2b4bee] translate-x-3"
                          : "text-[#f5f2eb]"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <div className="text-[11px] font-mono text-[#888d96] mt-1 md:hidden">
                      {item.deliverables}
                    </div>
                  </div>

                  {/* Description & Deliverables */}
                  <div className="md:col-span-5 text-xs sm:text-sm font-mono text-[#888d96] leading-relaxed">
                    <p className="mb-2">{item.description}</p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`text-[10px] px-2 py-0.5 border font-mono tracking-wider transition-all duration-300 ${
                            isHovered
                              ? "border-[#2b4bee]/50 bg-[#2b4bee]/10 text-[#4465ff]"
                              : "border-white/10 bg-white/[0.02] text-[#888d96]"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow Indicator */}
                  <div className="md:col-span-1 flex justify-end">
                    <div
                      className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
                        isHovered
                          ? "border-[#2b4bee] bg-[#2b4bee] text-white rotate-45 scale-110"
                          : "border-white/20 text-[#888d96] rotate-0"
                      }`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
