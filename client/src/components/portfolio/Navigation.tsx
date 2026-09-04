import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X, Globe, Radio, ExternalLink } from "lucide-react";

interface NavigationProps {
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onHoverStart, onHoverEnd }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "UTC",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }) + " UTC"
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { label: "SYSTEM", href: "#system" },
    { label: "ARCHITECTURE", href: "#architecture" },
    { label: "TEAM [04]", href: "#team" },
    { label: "CAPABILITIES", href: "#capabilities" },
    { label: "SHOWCASE", href: "#showcase" },
    { label: "CONTACT", href: "#contact" },
  ];

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "py-3 bg-[#07080a]/90 backdrop-blur-md border-b border-white/10 text-[#f5f2eb]"
            : "py-6 bg-transparent text-[#0a0c10]"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Official iot365 Logo & Team Identity */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            onMouseEnter={onHoverStart}
            onMouseLeave={onHoverEnd}
            className="group flex items-center gap-3.5 select-none"
          >
            <div className="h-8 md:h-9 flex items-center">
              <img
                src="/images/iot365-logo.png"
                alt="iot365"
                className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="hidden sm:flex flex-col border-l border-current/20 pl-3">
              <span className="text-[11px] font-mono tracking-widest font-bold uppercase leading-none">
                ENGINEERING TEAM
              </span>
              <span className="text-[9px] font-mono text-current/60 tracking-wider">
                04 CORE ARCHITECTS
              </span>
            </div>
          </a>

          {/* Telemetry Status & UTC Clock (Desktop) */}
          <div className="hidden lg:flex items-center gap-6 text-[11px] font-mono tracking-wider opacity-75">
            <span className="flex items-center gap-1.5">
              <Globe className="w-3 h-3 text-[#2b4bee]" /> {time}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              UID TELEMETRY READY
            </span>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                onMouseEnter={onHoverStart}
                onMouseLeave={onHoverEnd}
                className="group relative py-1 text-xs font-mono font-medium tracking-widest uppercase transition-all duration-300 cursor-pointer"
              >
                <span className="inline-block transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:text-[#2b4bee]">
                  {link.label}
                </span>
                <span
                  className={`absolute bottom-0 left-0 w-0 h-[1.5px] transition-all duration-300 ease-out group-hover:w-full ${
                    isScrolled ? "bg-[#2b4bee]" : "bg-[#0a0c10]"
                  }`}
                />
              </button>
            ))}

            {/* Direct Link to Live Platform iot365.tech */}
            <a
              href="https://iot365.tech"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={onHoverStart}
              onMouseLeave={onHoverEnd}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-bold tracking-wider uppercase border transition-all duration-300 ${
                isScrolled
                  ? "border-[#2b4bee] bg-[#2b4bee] text-white hover:bg-white hover:text-[#07080a]"
                  : "border-[#0a0c10] bg-[#0a0c10] text-white hover:bg-[#2b4bee] hover:border-[#2b4bee]"
              }`}
            >
              <span>IOT365.TECH</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open navigation menu"
            className="md:hidden flex items-center gap-2 text-xs font-mono tracking-widest uppercase p-2 border border-current"
          >
            <Menu className="w-4 h-4" />
            <span>MENU</span>
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[9999] bg-[#07080a] text-[#f5f2eb] flex flex-col justify-between p-8 md:hidden"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <div className="flex items-center gap-3">
                <img
                  src="/images/iot365-logo.png"
                  alt="iot365"
                  className="h-7 w-auto object-contain invert brightness-200"
                />
                <span className="text-xs font-mono tracking-widest text-[#888d96]">
                  TEAM SITE
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 border border-white/20 rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5 text-[#f5f2eb]" />
              </button>
            </div>

            {/* Links Stack */}
            <div className="flex flex-col gap-5 my-auto">
              {navLinks.map((link, idx) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 + idx * 0.06 }}
                  onClick={() => scrollTo(link.href)}
                  className="group flex items-baseline gap-4 text-left cursor-pointer"
                >
                  <span className="text-xs font-mono text-[#2b4bee]">0{idx + 1}</span>
                  <span className="text-3xl font-display tracking-tight text-[#f5f2eb] group-hover:text-[#2b4bee] transition-colors">
                    {link.label}
                  </span>
                </motion.button>
              ))}

              <a
                href="https://iot365.tech"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 p-3 mt-4 bg-[#2b4bee] text-white font-mono text-xs font-bold uppercase tracking-wider"
              >
                <span>OPEN LIVE PLATFORM // IOT365.TECH</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Footer info in Mobile Menu */}
            <div className="border-t border-white/10 pt-6 flex flex-col gap-2 text-xs font-mono text-[#888d96]">
              <div className="flex justify-between items-center">
                <span>PLATFORM:</span>
                <span className="text-[#2b4bee] font-bold">IOT365.TECH</span>
              </div>
              <div className="flex justify-between items-center">
                <span>TEAM:</span>
                <span className="text-[#f5f2eb]">AHMAD • OBADAH • BANDAR • MOHAMMAD</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
