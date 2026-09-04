import React from "react";
import { ArrowUp, Github, Linkedin, ExternalLink, Mail } from "lucide-react";

interface FooterProps {
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onHoverStart, onHoverEnd }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const teamLinks = [
    {
      name: "Ahmad Al-Batayneh (Lead)",
      role: "Web Dev & IoT Architect",
      url: "https://www.linkedin.com/in/ahmad-al-batayneh",
      github: "https://github.com/iot-ahmad",
    },
    {
      name: "Obada hamza aboalfoul",
      role: "Web Dev & IoT",
      url: "https://www.linkedin.com/in/عبادة-حمزة-88a0b92a9?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    },
    {
      name: "Bandar Al-Adwan",
      role: "Java, C++, C# & Web",
      url: "https://www.linkedin.com/in/بندر-عبدالله-ba1a51363?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    {
      name: "Mohammad rawaqa",
      role: "Python, C++, Java",
      url: "https://www.linkedin.com/in/mohammad-rawaqa-2434473b1?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
  ];

  return (
    <footer className="relative bg-[#050608] text-[#f5f2eb] border-t border-white/10 py-16 px-6 md:px-12 font-mono text-xs select-none">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-12">
        {/* Top Branding & Direct Contact Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-10 border-b border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="h-8 flex items-center">
              <img
                src="/images/iot365-logo.png"
                alt="iot365"
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="text-[#888d96] text-xs">
              <span className="text-[#f5f2eb] font-bold">IOT365 ENGINEERING</span>
              <span className="mx-2">•</span>
              <a
                href="mailto:iot365.tech@gmail.com"
                className="text-[#2b4bee] hover:underline"
              >
                iot365.tech@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://iot365.tech"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={onHoverStart}
              onMouseLeave={onHoverEnd}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#2b4bee] text-white font-bold tracking-wider uppercase hover:bg-white hover:text-[#07080a] transition-all"
            >
              <span>LAUNCH IOT365.TECH</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={scrollToTop}
              onMouseEnter={onHoverStart}
              onMouseLeave={onHoverEnd}
              className="flex items-center gap-2 px-3.5 py-2 border border-white/20 text-[#888d96] hover:text-[#f5f2eb] hover:border-white transition-all uppercase tracking-wider"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Team Members Direct Roster */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-8 border-b border-white/10">
          {teamLinks.map((member) => (
            <div key={member.name} className="flex flex-col gap-1.5 font-mono text-xs">
              <span className="text-[#888d96] text-[10px] uppercase">{member.role}</span>
              <a
                href={member.url}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={onHoverStart}
                onMouseLeave={onHoverEnd}
                className="text-[#f5f2eb] hover:text-[#2b4bee] font-medium flex items-center gap-1.5 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#2b4bee]" />
                <span>{member.name}</span>
              </a>
              {member.github && (
                <a
                  href={member.github}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={onHoverStart}
                  onMouseLeave={onHoverEnd}
                  className="text-[11px] text-[#888d96] hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <Github className="w-3 h-3" />
                  <span>GitHub @iot-ahmad</span>
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Colophon Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[#888d96] text-[11px]">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>© {new Date().getFullYear()} IOT365.TECH.</span>
            <span>OFFICIAL COMPANY EMAIL: iot365.tech@gmail.com</span>
          </div>

          <div className="flex items-center gap-6">
            <span>FOUR ARCHITECTS, ONE PLATFORM</span>
            <span className="text-[#2b4bee] font-bold">IOT365.TECH</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
