import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Cpu, Radio, Zap, Bell, FileText, Check, ArrowUpRight, Terminal, Activity } from "lucide-react";

interface AboutSectionProps {
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onHoverStart, onHoverEnd }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [simulatedUid, setSimulatedUid] = useState("ESP32-NODE-894");
  const [simulating, setSimulating] = useState(false);
  const [telemetryLogs, setTelemetryLogs] = useState<string[]>([
    "[16:30:12] Handshake established with iot365 broker",
    "[16:30:13] UID: ESP32-NODE-894 authenticated (token: valid)",
    "[16:30:14] Telemetry: temp=24.8°C | humidity=58% | relay_01=OFF",
  ]);

  const handleSimulate = () => {
    setSimulating(true);
    const temp = (23 + Math.random() * 4).toFixed(1);
    const humidity = (50 + Math.random() * 20).toFixed(0);
    const newEntry = `[${new Date().toLocaleTimeString()}] UID: ${simulatedUid} -> Telemetry: temp=${temp}°C | hum=${humidity}% | alert_status=NORMAL`;
    setTimeout(() => {
      setTelemetryLogs((prev) => [newEntry, ...prev.slice(0, 4)]);
      setSimulating(false);
    }, 600);
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const cardY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const systemFeatures = [
    {
      icon: Cpu,
      title: "ZERO-CONFIG UID BINDING",
      desc: "Assign a unique UID to any ESP32, Arduino, or STM32 device. Telemetry instantly flows into the cloud dashboard with zero MQTT configuration hassle.",
    },
    {
      icon: Activity,
      title: "REAL-TIME SENSOR STREAMING",
      desc: "Sub-50ms reactive WebSocket pipelines powering live gauges, thermal telemetry graphs, and interactive hardware control switches.",
    },
    {
      icon: Bell,
      title: "AUTOMATED RULES & ALERTS",
      desc: "Set smart thresholds that autonomously trigger hardware relays and broadcast high-priority multi-channel notifications (Telegram, Webhook, SMS).",
    },
    {
      icon: FileText,
      title: "OPEN PROJECT & DOCS HUB",
      desc: "An open community ecosystem on iot365.tech where creators document, publish, and open-source wiring schematics, firmware code, and hardware benchmarks.",
    },
  ];

  return (
    <section
      id="architecture"
      ref={containerRef}
      className="relative bg-[#07080a] text-[#f5f2eb] py-28 md:py-36 px-6 md:px-12 border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Section Tag */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-16 text-xs font-mono tracking-widest text-[#888d96] uppercase">
          <div className="flex items-center gap-3">
            <span className="text-[#2b4bee] font-bold">[02]</span>
            <span>SYSTEM ARCHITECTURE & CORE PLATFORM</span>
          </div>
          <span className="hidden sm:inline">IOT365.TECH SPECIFICATION</span>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Interactive Telemetry Terminal (5 cols) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              style={{ y: cardY }}
              className="relative overflow-hidden border border-white/15 bg-[#0b0e14] p-5 shadow-2xl"
            >
              {/* Terminal Reticle Accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#2b4bee]" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#2b4bee]" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#2b4bee]" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#2b4bee]" />

              {/* Terminal Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 font-mono text-xs text-[#888d96]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[#f5f2eb] font-semibold">
                    IOT365 LIVE SIMULATOR
                  </span>
                </div>
                <span className="text-[10px] text-[#2b4bee]">WEBSOCKET 60FPS</span>
              </div>

              {/* UID Input Box */}
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 bg-black/50 border border-white/10 flex items-center justify-between">
                  <span className="text-[#888d96] text-[10px]">DEVICE UID:</span>
                  <input
                    type="text"
                    value={simulatedUid}
                    onChange={(e) => setSimulatedUid(e.target.value)}
                    className="bg-transparent text-right text-xs font-bold text-[#2b4bee] focus:outline-none"
                  />
                </div>

                {/* Stream Console Box */}
                <div className="h-44 p-3 bg-black/80 border border-white/10 overflow-y-auto space-y-1.5 text-[11px] font-mono text-[#888d96]">
                  {telemetryLogs.map((log, idx) => (
                    <div
                      key={idx}
                      className={idx === 0 ? "text-emerald-400 font-medium" : "text-[#888d96]"}
                    >
                      {log}
                    </div>
                  ))}
                </div>

                {/* Simulate Button */}
                <button
                  onClick={handleSimulate}
                  disabled={simulating}
                  onMouseEnter={onHoverStart}
                  onMouseLeave={onHoverEnd}
                  className="w-full py-2.5 bg-[#2b4bee] hover:bg-white hover:text-[#07080a] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Zap className="w-3.5 h-3.5" />
                  <span>
                    {simulating ? "BROADCASTING TELEMETRY..." : "TRANSMIT SENSOR PACKET"}
                  </span>
                </button>
              </div>

              {/* Footer status in terminal */}
              <div className="flex justify-between items-center pt-4 border-t border-white/10 mt-4 text-[10px] font-mono text-[#888d96]">
                <span>AUTOMATION: TRIGGER READY</span>
                <span className="text-[#2b4bee]">LATENCY: 18ms</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Statement, Bio & System Manifesto (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            {/* Big Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="overflow-hidden"
            >
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-display uppercase tracking-tight leading-[0.95] text-[#f5f2eb]">
                CONNECTING PHYSICAL SENSORS{" "}
                <span className="text-[#2b4bee]">TO CLOUD INTELLIGENCE</span> WITH
                ZERO FRICTION.
              </h2>
            </motion.div>

            {/* Narrative Paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="space-y-5 text-base sm:text-lg text-[#888d96] leading-relaxed font-light"
            >
              <p>
                Engineered by a specialized four-person team, <strong className="text-[#f5f2eb] font-semibold">iot365</strong> removes
                the complexity from Internet of Things development. Instead of wrestling with
                convoluted broker credentials and complex server stacks, hardware developers bind
                sensors directly using a clean, universal <span className="text-[#2b4bee] font-mono font-medium">UID</span>.
              </p>
              <p className="text-sm sm:text-base font-mono text-[#f5f2eb]/80">
                Beyond real-time dashboards, iot365 serves as a comprehensive global hub
                for documenting, sharing, and discovering physical computing projects, complete
                with schematics, wiring pinouts, and tested firmware.
              </p>
            </motion.div>

            {/* 4 Feature Blocks Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/10">
              {systemFeatures.map((feat) => (
                <div
                  key={feat.title}
                  className="p-5 bg-white/[0.02] border border-white/10 hover:border-[#2b4bee]/50 transition-colors space-y-2 group"
                >
                  <div className="flex items-center gap-2.5 text-[#2b4bee]">
                    <feat.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-mono font-bold tracking-wider text-[#f5f2eb]">
                      {feat.title}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-[#888d96] leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Direct Platform Link */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
              <span className="text-[#888d96]">
                EXPERIENCE THE LIVE ECOSYSTEM AT:
              </span>
              <a
                href="https://iot365.tech"
                target="_blank"
                rel="noreferrer"
                onMouseEnter={onHoverStart}
                onMouseLeave={onHoverEnd}
                className="inline-flex items-center gap-2 text-[#2b4bee] font-bold hover:underline"
              >
                <span>HTTPS://IOT365.TECH</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
