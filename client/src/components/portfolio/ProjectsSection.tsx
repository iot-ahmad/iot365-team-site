import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Radio, ExternalLink, Cpu, Zap, Activity, Home, Sprout, Factory, Gauge } from "lucide-react";
import { ProjectData } from "./ProjectModal";

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectData) => void;
  onProjectHoverStart: () => void;
  onProjectHoverEnd: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProject,
  onProjectHoverStart,
  onProjectHoverEnd,
}) => {
  const projects: ProjectData[] = [
    {
      id: "project-01",
      num: "01",
      title: "SMART HOME & SECURITY HUB",
      subtitle: "REALTIME SENSOR MONITORING & TELEGRAM ALERTS",
      category: "HOME AUTOMATION / SECURITY",
      year: "2025",
      client: "Compatible with ESP32 / ESP8266 / Arduino",
      role: "Sub-50ms Reactive Telemetry",
      uid: "HOME-SEC-88",
      description:
        "Build a complete smart home system: monitor door/window magnetic switches, PIR motion sensors, and gas leaks. Automate lights and relays, and receive instant emergency alerts on Telegram when an intrusion is detected.",
      image:
        "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1600&q=85",
      tags: ["ESP32", "PIR Motion", "Relay Control", "Telegram Bot API", "Instant Alerts"],
      metrics: [
        { label: "ALERT TIME", value: "<15ms" },
        { label: "PAIRING TIME", value: "30 SEC" },
        { label: "SUPPORTED RELAYS", value: "UP TO 16" },
      ],
      overview:
        "Using iot365's instant UID pairing, you can link an ESP32 board to your dashboard in seconds. Connect PIR motion detectors, magnetic door contacts, and temperature sensors. Configure automated rules that turn on lights and send instant Telegram push notifications when unexpected movement occurs.",
      challenge:
        "Setting up custom servers and writing complex MQTT broker logic for smart homes is tedious.",
      solution:
        "iot365 eliminates broker complexity: paste your unique UID into your microcontroller code and your home sensors immediately appear live on your personal dashboard.",
      schematicNote:
        "Full wiring diagram, ESP32 code sketch, and relay pinout published on the iot365 documentation hub.",
    },
    {
      id: "project-02",
      num: "02",
      title: "SMART AGRICULTURE & IRRIGATION",
      subtitle: "PRECISION SOIL MONITORING & AUTO-PUMPS",
      category: "SMART FARMING / ENVIRONMENT",
      year: "2025",
      client: "Compatible with ESP32-S3 / Solar Node",
      role: "Closed-Loop Automation",
      uid: "AGRI-FLOW-204",
      description:
        "Create an automated greenhouse or crop telemetry station: monitor soil moisture and temperature at multiple depth tiers, calculate water needs, and trigger solenoid valves automatically to conserve up to 40% of irrigation water.",
      image:
        "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1600&q=85",
      tags: ["Capacitive Soil", "Water Solenoid", "Solar MPPT", "Evapotranspiration", "Thresholds"],
      metrics: [
        { label: "WATER SAVINGS", value: "40%" },
        { label: "AUTONOMOUS TIME", value: "24/7" },
        { label: "TELEMETRY LOGS", value: "REALTIME" },
      ],
      overview:
        "Farmers and agricultural engineers can deploy battery or solar-powered ESP32 nodes into soil beds. Once assigned a UID on iot365, moisture levels stream live. Set a threshold rule: 'IF moisture < 25%, TURN ON Pump Relay for 10 minutes and NOTIFY Farm Manager'.",
      challenge:
        "Managing pump scheduling and monitoring soil health remotely in rural fields without expensive industrial PLC systems.",
      solution:
        "iot365 provides an affordable, open solution where sensor readings update live on any smartphone or tablet, triggering actions without human intervention.",
      schematicNote:
        "Step-by-step tutorial, capacitive sensor calibration curve, and solar charging schematic available on iot365.tech.",
    },
    {
      id: "project-03",
      num: "03",
      title: "FACTORY AIR & TOXIC GAS TELEMETRY",
      subtitle: "INDUSTRIAL SAFETY & EXHAUST VENTILATION",
      category: "INDUSTRIAL IOT / SAFETY",
      year: "2024",
      client: "Compatible with STM32 / ESP32 / Modbus",
      role: "Safety Telemetry Pipeline",
      uid: "IND-AIR-909",
      description:
        "Build an industrial cleanroom or workshop safety monitor: track carbon monoxide, smoke, volatile organic compounds (VOC), and temperature. Automatically trigger exhaust fans and sound alarms when safety thresholds are breached.",
      image:
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=85",
      tags: ["Gas Sensors", "Optocoupled Relays", "Exhaust Actuation", "SMS Warnings", "High Reliability"],
      metrics: [
        { label: "SAMPLING RATE", value: "10 Hz" },
        { label: "RESPONSE LATENCY", value: "<20ms" },
        { label: "SAFETY RATING", value: "CONTINUOUS" },
      ],
      overview:
        "Protect workshops and laboratories with instant environmental awareness. Connect MQ gas sensors and temperature probes to an ESP32 or STM32 board. iot365's automation engine monitors limits in real-time, tripping safety relays to activate extractor fans and sending urgent alerts.",
      challenge:
        "Industrial facilities require immediate, fail-safe alarm responses when air quality dips below hazardous thresholds.",
      solution:
        "iot365's low-latency streaming pipeline ensures notifications reach emergency teams within fractions of a second.",
      schematicNote:
        "Includes optoisolator protection schematics and calibration code for gas analog curves in the project hub.",
    },
    {
      id: "project-04",
      num: "04",
      title: "SMART ENERGY & POWER CONSUMPTION",
      subtitle: "REALTIME WATTAGE, VOLTAGE & OVERLOAD ALERTS",
      category: "ENERGY MANAGEMENT / POWER METERING",
      year: "2024",
      client: "Compatible with ESP32 / Current Transformers",
      role: "High-Speed Analog Sampling",
      uid: "ENERGY-GRID-411",
      description:
        "Build a non-invasive home or factory power meter: track real-time kilowatt-hour consumption, voltage stability, and power factor using CT clamp sensors. Automatically cut power to heavy appliances during peak rate hours.",
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=85",
      tags: ["CT Clamps", "Current Sensing", "Power Factor", "Automated Relays", "Cost Analytics"],
      metrics: [
        { label: "POWER ACCURACY", value: "99.2%" },
        { label: "REFRESH RATE", value: "Sub-second" },
        { label: "BILL REDUCTION", value: "22%" },
      ],
      overview:
        "Clamp non-invasive current transformers around main electrical cables and stream live energy metrics directly to iot365. Visualize peak usage spikes on interactive graphs, calculate daily expenses, and receive automatic alerts if a machine overdraws current.",
      challenge:
        "Calculating true AC power metrics requires complex mathematical sampling and high-frequency data transmission.",
      solution:
        "iot365 handles the streaming visualization seamlessly, enabling users to create automated rules to turn off secondary circuits when power thresholds are exceeded.",
      schematicNote:
        "Step-by-step AC safety guidelines, current transformer calibration formulas, and sample Arduino sketch in open docs.",
    },
  ];

  return (
    <section
      id="showcase"
      className="relative bg-[#07080a] text-[#f5f2eb] py-28 md:py-40 px-6 md:px-12 border-t border-white/10"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Massive Dramatic Typography Header */}
        <div className="flex flex-col border-b border-white/10 pb-12 mb-20">
          <div className="flex items-center justify-between text-xs font-mono tracking-widest text-[#888d96] uppercase mb-4">
            <span className="flex items-center gap-2">
              <span className="text-[#2b4bee] font-bold">[05]</span>
              <span>WHAT YOU CAN BUILD WITH IOT365</span>
            </span>
            <span>ENDLESS HARDWARE POSSIBILITIES</span>
          </div>

          <div className="overflow-hidden">
            <h2 className="editorial-title text-[#f5f2eb] tracking-tighter">
              PROJECTS
            </h2>
          </div>
          <div className="flex items-baseline justify-between flex-wrap gap-4 mt-2">
            <span className="text-xl sm:text-3xl font-display uppercase tracking-wider text-[#2b4bee]">
              PROJECTS YOU CAN CREATE ON OUR PLATFORM
            </span>
            <span className="text-xs font-mono text-[#888d96]">
              CLICK ANY BUILD FOR FULL SCHEMATICS & HOW-TO GUIDE
            </span>
          </div>
        </div>

        {/* Vertical Editorial Project Blocks */}
        <div className="flex flex-col gap-24 md:gap-36">
          {projects.map((project, index) => (
            <ProjectRow
              key={project.id}
              project={project}
              index={index}
              onSelect={() => onSelectProject(project)}
              onHoverStart={onProjectHoverStart}
              onHoverEnd={onProjectHoverEnd}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProjectRowProps {
  project: ProjectData;
  index: number;
  onSelect: () => void;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

const ProjectRow: React.FC<ProjectRowProps> = ({
  project,
  index,
  onSelect,
  onHoverStart,
  onHoverEnd,
}) => {
  const rowRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <motion.div
      ref={rowRef}
      initial={{ opacity: 0, y: 80, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      onClick={onSelect}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      className="group relative cursor-pointer border-t border-white/10 pt-10"
    >
      {/* Top Editorial Row Info */}
      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-6 font-mono text-xs text-[#888d96]">
        <div className="flex items-center gap-4">
          <span className="text-sm font-bold text-[#2b4bee]">
            USE CASE {project.num}
          </span>
          <span className="text-white/20">•</span>
          <span className="tracking-widest uppercase text-[#f5f2eb]">
            {project.category}
          </span>
        </div>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 text-[#2b4bee] font-bold">
            <Radio className="w-3 h-3 animate-pulse" /> EXAMPLE UID: {project.uid}
          </span>
          <span className="text-white/20 hidden sm:inline">•</span>
          <span className="hidden sm:inline">HW: {project.client}</span>
        </div>
      </div>

      {/* Main Visual Presentation */}
      <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden bg-[#0d1015] border border-white/10">
        {/* Parallax Image */}
        <motion.div
          style={{ y: imgY }}
          className="relative w-full h-[120%] -top-[10%]"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover grayscale contrast-115 brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
            loading="lazy"
          />
        </motion.div>

        {/* Ambient Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080a]/90 via-transparent to-transparent" />

        {/* Floating View Specs Badge on bottom right */}
        <div className="absolute bottom-6 right-6 z-20 flex items-center gap-3 px-5 py-2.5 bg-[#07080a]/90 backdrop-blur-md border border-white/20 group-hover:border-[#2b4bee] group-hover:bg-[#2b4bee] group-hover:text-white text-xs font-mono font-semibold tracking-wider transition-all duration-300">
          <span>LEARN HOW TO BUILD THIS</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>

        {/* Floating Tag Overlay on top left */}
        <div className="absolute top-6 left-6 z-20 hidden sm:flex items-center gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-[10px] font-mono tracking-wider border border-white/20 bg-[#07080a]/85 text-[#f5f2eb] backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Editorial Typography & Description */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-8 items-baseline">
        <div className="md:col-span-6">
          <h3 className="text-3xl sm:text-5xl md:text-6xl font-display uppercase tracking-tight text-[#f5f2eb] group-hover:text-[#2b4bee] transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-xs font-mono text-[#2b4bee] tracking-widest uppercase mt-1">
            {project.subtitle}
          </p>
        </div>

        <div className="md:col-span-6 text-sm font-mono text-[#888d96] leading-relaxed">
          <p>{project.description}</p>
        </div>
      </div>
    </motion.div>
  );
};
