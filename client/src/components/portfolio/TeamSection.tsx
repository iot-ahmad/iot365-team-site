import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, ExternalLink, ShieldCheck, Cpu, Code2, Globe, Gamepad2, Terminal, Sparkles } from "lucide-react";

interface TeamSectionProps {
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onHoverStart, onHoverEnd }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const teamLeader = {
    name: "Ahmad Al-Batayneh",
    arabicName: "أحمد البطاينه",
    role: "Team Leader, Web Developer & IoT Systems Architect",
    image: "/images/team-lead-ahmad.jpg",
    bio: "Founding leader, web developer, and IoT systems architect for iot365. Specializing in full-stack web engineering (React, Node.js, JavaScript, HTML/CSS, Java) alongside embedded ESP32/C++ firmware, robotics, hardware-to-cloud integration, and leading technical development across the platform.",
    skills: [
      "Web Dev (React / Node.js)",
      "JavaScript (JS) & HTML/CSS",
      "Java",
      "IoT Systems Architecture",
      "ESP32 & C++ Firmware",
      "Robotics & Cloud Telemetry",
      "Team Leadership",
    ],
    github: "https://github.com/iot-ahmad",
    linkedin: "https://www.linkedin.com/in/ahmad-al-batayneh",
  };

  const teamMembers = [
    {
      num: "02",
      name: "Obada hamza aboalfoul",
      arabicName: "عباده ابو الفول",
      role: "Web Developer & Internet of Things (IoT) Engineer",
      icon: Globe,
      accent: "#2b4bee",
      bio: "Web developer and IoT engineer bridging modern responsive web interfaces with connected physical hardware, sensor telemetry, and cloud communication pipelines.",
      skills: ["Web Development", "Internet of Things (IoT)", "Full-Stack Web", "Hardware Integration", "APIs & WebSockets"],
      linkedin: "https://www.linkedin.com/in/عبادة-حمزة-88a0b92a9?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    },
    {
      num: "03",
      name: "Bandar Al-Adwan",
      arabicName: "بندر العدوان",
      role: "Software & Game Developer",
      icon: Gamepad2,
      accent: "#2b4bee",
      bio: "Versatile software and game developer proficient in Java, C++, C#, and full-spectrum web technologies (HTML, CSS, JavaScript) for building interactive simulation mechanics and applications.",
      skills: ["Java", "C++", "C#", "Web Tech (HTML, CSS, JS)", "Game Development"],
      linkedin: "https://www.linkedin.com/in/بندر-عبدالله-ba1a51363?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    {
      num: "04",
      name: "Mohammad rawaqa",
      arabicName: "محمد رواقه",
      role: "Software & Systems Engineer",
      icon: Terminal,
      accent: "#2b4bee",
      bio: "Multi-paradigm software developer proficient in Python, C++, and Java, engineering core logic algorithms, system backends, and data processing routines.",
      skills: ["Python", "C++", "Java", "Algorithm Design", "Backend Systems"],
      linkedin: "https://www.linkedin.com/in/mohammad-rawaqa-2434473b1?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
  ];

  return (
    <section
      id="team"
      ref={containerRef}
      className="relative bg-[#07080a] text-[#f5f2eb] py-28 md:py-36 px-6 md:px-12 border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 mb-16 gap-6">
          <div className="flex flex-col">
            <span className="text-xs font-mono tracking-widest text-[#2b4bee] uppercase mb-2">
              [03] // ENGINEERING COLLECTIVE
            </span>
            <div className="flex items-baseline gap-4 md:gap-6 flex-wrap">
              <span className="text-5xl sm:text-7xl md:text-8xl font-display text-[#2b4bee] tracking-tight">
                THE
              </span>
              <h2 className="editorial-title text-[#f5f2eb]">TEAM</h2>
            </div>
          </div>
          <div className="max-w-md text-xs sm:text-sm font-mono text-[#888d96] leading-relaxed">
            Four specialized engineers combining hardware design, IoT systems, game
            development, web craft, and systems programming to pioneer{" "}
            <span className="text-[#f5f2eb] font-semibold">iot365</span>.
          </div>
        </div>

        {/* Featured Team Leader Showcase */}
        <div className="relative mb-20">
          <div className="flex items-center gap-3 mb-6 font-mono text-xs text-[#888d96]">
            <span className="text-[#2b4bee] font-bold">[LEAD ARCHITECT]</span>
            <span>TEAM LEADERSHIP & IOT SYSTEMS DIRECTION</span>
          </div>

          <div className="border border-white/15 bg-[#0b0e14] p-6 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Leader Portrait */}
              <div className="lg:col-span-5 relative group overflow-hidden border border-white/15 bg-black">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={teamLeader.image}
                    alt={teamLeader.name}
                    className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07080a] via-transparent to-transparent opacity-60" />

                  {/* Tag on bottom of image */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 bg-[#07080a]/90 backdrop-blur-md border border-white/10 flex items-center justify-between text-[11px] font-mono">
                    <span className="flex items-center gap-1.5 text-white font-semibold">
                      <span className="w-2 h-2 rounded-full bg-[#2b4bee]" />
                      AHMAD AL-BATAYNEH
                    </span>
                    <span className="text-[#888d96]">{teamLeader.arabicName}</span>
                  </div>
                </div>
              </div>

              {/* Leader Narrative & Credentials */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <div>
                  <span className="text-xs font-mono font-bold tracking-widest text-[#2b4bee] uppercase block mb-1">
                    01 // TEAM LEADER
                  </span>
                  <h3 className="text-3xl sm:text-5xl font-display uppercase tracking-tight text-[#f5f2eb]">
                    {teamLeader.name}
                  </h3>
                  <div className="flex items-center gap-3 text-sm font-mono text-[#888d96] mt-1">
                    <span>{teamLeader.role}</span>
                    <span>•</span>
                    <span className="text-[#2b4bee]">{teamLeader.arabicName}</span>
                  </div>
                </div>

                <p className="text-sm sm:text-base font-mono text-[#888d96] leading-relaxed">
                  {teamLeader.bio}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {teamLeader.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-mono border border-white/15 bg-white/[0.03] text-[#f5f2eb]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Direct Action Links */}
                <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/10">
                  <a
                    href={teamLeader.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={onHoverStart}
                    onMouseLeave={onHoverEnd}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2b4bee] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-[#07080a] transition-all"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LINKEDIN PROFILE</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={teamLeader.github}
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={onHoverStart}
                    onMouseLeave={onHoverEnd}
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/20 text-[#f5f2eb] font-mono text-xs uppercase tracking-wider hover:bg-white/10 transition-all"
                  >
                    <Github className="w-4 h-4" />
                    <span>GITHUB @IOT-AHMAD</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The Other 3 Core Engineers Grid */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 font-mono text-xs text-[#888d96]">
            <span className="text-[#2b4bee] font-bold">[ENGINEERING COHORT]</span>
            <span>DOMAIN SPECIALISTS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <motion.div
                key={member.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="group relative border border-white/15 bg-[#0b0e14] p-6 md:p-8 flex flex-col justify-between hover:border-[#2b4bee] transition-all duration-300"
              >
                {/* Top Number & Role Icon */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#2b4bee]">
                    <span>[{member.num}]</span>
                    <span>ENGINEER</span>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#2b4bee] group-hover:border-[#2b4bee] group-hover:bg-[#2b4bee]/10 transition-all">
                    <member.icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Member Identity */}
                <div className="space-y-3 mb-6">
                  <h4 className="text-2xl font-display uppercase tracking-tight text-[#f5f2eb] group-hover:text-[#2b4bee] transition-colors">
                    {member.name}
                  </h4>
                  <div className="text-[11px] font-mono text-[#888d96] flex items-center gap-2">
                    <span>{member.role}</span>
                  </div>
                  <div className="text-xs font-mono text-[#2b4bee] font-semibold">
                    {member.arabicName}
                  </div>
                  <p className="text-xs font-mono text-[#888d96] leading-relaxed pt-2">
                    {member.bio}
                  </p>
                </div>

                {/* Skills tags */}
                <div className="space-y-4 pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-1.5">
                    {member.skills.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 text-[10px] font-mono border border-white/10 bg-white/[0.02] text-[#888d96]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* LinkedIn Profile Link */}
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={onHoverStart}
                    onMouseLeave={onHoverEnd}
                    className="inline-flex items-center justify-between w-full py-2.5 px-3 border border-white/15 bg-white/[0.02] text-xs font-mono text-[#f5f2eb] hover:border-[#2b4bee] hover:bg-[#2b4bee] hover:text-white transition-all"
                  >
                    <div className="flex items-center gap-2">
                      <Linkedin className="w-3.5 h-3.5" />
                      <span>VIEW LINKEDIN</span>
                    </div>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
