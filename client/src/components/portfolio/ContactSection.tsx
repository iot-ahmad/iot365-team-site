import React, { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Mail, ExternalLink, Radio, Linkedin, Github, Send, Sparkles } from "lucide-react";

interface ContactSectionProps {
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onHoverStart,
  onHoverEnd,
}) => {
  const [copied, setCopied] = useState(false);
  const companyEmail = "iot365.tech@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(companyEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const teamMembers = [
    {
      name: "Ahmad Al-Batayneh",
      role: "Lead • Web Dev & IoT Architect",
      linkedin: "https://www.linkedin.com/in/ahmad-al-batayneh",
      github: "https://github.com/iot-ahmad",
    },
    {
      name: "Obada hamza aboalfoul",
      role: "Web Dev & IoT",
      linkedin: "https://www.linkedin.com/in/عبادة-حمزة-88a0b92a9?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    },
    {
      name: "Bandar Al-Adwan",
      role: "Game Dev • Java, C++, C# & Web",
      linkedin: "https://www.linkedin.com/in/بندر-عبدالله-ba1a51363?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    {
      name: "Mohammad rawaqa",
      role: "Software (Python/C++/Java)",
      linkedin: "https://www.linkedin.com/in/mohammad-rawaqa-2434473b1?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
  ];

  return (
    <section
      id="contact"
      className="relative bg-[#050608] text-[#f5f2eb] py-28 md:py-40 px-6 md:px-12 border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header Tag */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-16 text-xs font-mono tracking-widest text-[#888d96] uppercase">
          <div className="flex items-center gap-3">
            <span className="text-[#2b4bee] font-bold">[06]</span>
            <span>GET IN TOUCH WITH OUR TEAM</span>
          </div>
          <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            DIRECT INBOX ACTIVE
          </span>
        </div>

        {/* Dramatic Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          {/* Left Column: Big Typographic Headline */}
          <div className="lg:col-span-6 space-y-6">
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%", opacity: 0 }}
                whileInView={{ y: "0%", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-6xl md:text-7xl font-display uppercase tracking-tight text-[#f5f2eb] leading-[0.9]"
              >
                LET'S CONNECT
              </motion.h2>
            </div>

            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%", opacity: 0 }}
                whileInView={{ y: "0%", opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.12,
                }}
                className="text-4xl sm:text-6xl md:text-7xl font-display uppercase tracking-tight text-[#2b4bee] leading-[0.9]"
              >
                AND BUILD
              </motion.h2>
            </div>

            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%", opacity: 0 }}
                whileInView={{ y: "0%", opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.24,
                }}
                className="text-4xl sm:text-6xl md:text-7xl font-display uppercase tracking-tight text-[#f5f2eb] leading-[0.9]"
              >
                TOGETHER.
              </motion.h2>
            </div>

            <p className="text-base sm:text-lg font-light text-[#888d96] pt-4 max-w-lg leading-relaxed">
              Have an idea for an IoT project, need hardware UID integration, or want to
              collaborate with our 4-engineer team? Reach out directly via our official
              company email.
            </p>
          </div>

          {/* Right Column: Direct Company Email & Team Cards (Replaced Form) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Primary Company Email Box */}
            <div className="p-8 bg-[#0b0e14] border border-[#2b4bee]/40 space-y-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2b4bee]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono text-xs">
                <span className="text-[#888d96] uppercase tracking-widest">
                  OFFICIAL COMPANY EMAIL
                </span>
                <span className="px-2 py-0.5 bg-[#2b4bee]/20 text-[#2b4bee] text-[10px] font-bold">
                  IOT365 TEAM
                </span>
              </div>

              {/* Big Email Display */}
              <div className="space-y-2">
                <div className="text-xs font-mono text-[#888d96]">
                  TRANSMIT DIRECTLY TO:
                </div>
                <div className="text-xl sm:text-3xl font-mono font-bold text-[#f5f2eb] tracking-tight break-all">
                  {companyEmail}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={handleCopyEmail}
                  onMouseEnter={onHoverStart}
                  onMouseLeave={onHoverEnd}
                  className="flex-1 py-3.5 px-5 bg-[#2b4bee] hover:bg-white hover:text-[#07080a] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-white" />
                      <span>COPIED TO CLIPBOARD!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>COPY COMPANY EMAIL</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${companyEmail}?subject=Inquiry%20regarding%20iot365`}
                  onMouseEnter={onHoverStart}
                  onMouseLeave={onHoverEnd}
                  className="py-3.5 px-5 border border-white/20 hover:border-white text-[#f5f2eb] font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>OPEN EMAIL APP</span>
                </a>
              </div>
            </div>

            {/* Quick Team Roster Direct Reach */}
            <div className="p-6 bg-white/[0.02] border border-white/10 space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between text-[#888d96] text-[11px] uppercase border-b border-white/10 pb-2">
                <span>DIRECT TEAM REACH (LINKEDIN)</span>
                <span>04 ARCHITECTS</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {teamMembers.map((m) => (
                  <a
                    key={m.name}
                    href={m.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={onHoverStart}
                    onMouseLeave={onHoverEnd}
                    className="p-3 border border-white/10 bg-black/40 hover:border-[#2b4bee] hover:bg-[#2b4bee]/5 transition-all flex items-center justify-between group"
                  >
                    <div>
                      <div className="font-semibold text-[#f5f2eb] group-hover:text-[#2b4bee] transition-colors">
                        {m.name}
                      </div>
                      <div className="text-[10px] text-[#888d96]">{m.role}</div>
                    </div>
                    <Linkedin className="w-3.5 h-3.5 text-[#888d96] group-hover:text-[#2b4bee]" />
                  </a>
                ))}
              </div>

              {/* Platform link */}
              <div className="pt-2 flex items-center justify-between text-xs text-[#888d96]">
                <span>EXPLORE THE CLOUD DASHBOARD:</span>
                <a
                  href="https://iot365.tech"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#2b4bee] font-bold hover:underline inline-flex items-center gap-1"
                >
                  <span>HTTPS://IOT365.TECH</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
