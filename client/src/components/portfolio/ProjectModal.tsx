import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ArrowUpRight, Github, Layers, Sparkles, Cpu, Radio, Zap } from "lucide-react";

export interface ProjectData {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  client: string;
  role: string;
  description: string;
  image: string;
  accentColor?: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  overview: string;
  challenge: string;
  solution: string;
  uid: string;
  schematicNote: string;
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onHoverStart,
  onHoverEnd,
}) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 md:p-10 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ y: 80, scale: 0.95, opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          exit={{ y: 50, scale: 0.96, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-5xl bg-[#090b0e] border border-white/15 text-[#f5f2eb] my-auto overflow-hidden shadow-2xl"
        >
          {/* Top Bar */}
          <div className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-[#090b0e]/95 backdrop-blur-md border-b border-white/10 font-mono text-xs">
            <div className="flex items-center gap-3">
              <span className="text-[#2b4bee] font-bold">[{project.num}]</span>
              <span className="tracking-widest uppercase text-[#888d96]">
                IOT365 PROJECT SPECIFICATION // {project.category}
              </span>
            </div>
            <button
              onClick={onClose}
              onMouseEnter={onHoverStart}
              onMouseLeave={onHoverEnd}
              className="p-2 border border-white/20 hover:border-[#2b4bee] hover:bg-[#2b4bee] hover:text-white transition-colors rounded-full"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-6 md:p-12 space-y-10 max-h-[82vh] overflow-y-auto">
            {/* Header */}
            <div>
              <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-[#2b4bee] uppercase mb-2">
                <span>{project.subtitle}</span>
                <span>•</span>
                <span>UID: {project.uid}</span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-display uppercase tracking-tight text-[#f5f2eb] leading-tight">
                {project.title}
              </h2>
            </div>

            {/* Main Project Image */}
            <div className="relative aspect-[16/9] w-full overflow-hidden border border-white/10 bg-black">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090b0e] via-transparent to-transparent opacity-60" />

              {/* UID overlay chip */}
              <div className="absolute top-4 right-4 px-3 py-1.5 bg-[#07080a]/90 backdrop-blur-md border border-[#2b4bee]/50 text-xs font-mono text-[#2b4bee] font-bold flex items-center gap-2">
                <Radio className="w-3.5 h-3.5 animate-pulse" />
                <span>DEVICE UID: {project.uid}</span>
              </div>
            </div>

            {/* Quick Metadata Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-white/[0.02] border border-white/10 font-mono text-xs">
              <div>
                <span className="text-[#888d96] block text-[10px]">MICROCONTROLLER</span>
                <span className="font-semibold text-[#f5f2eb]">{project.client}</span>
              </div>
              <div>
                <span className="text-[#888d96] block text-[10px]">TELEMETRY PIPELINE</span>
                <span className="font-semibold text-[#2b4bee]">{project.role}</span>
              </div>
              <div>
                <span className="text-[#888d96] block text-[10px]">DOCS HUB STATUS</span>
                <span className="font-semibold text-[#f5f2eb]">VERIFIED & OPEN</span>
              </div>
              <div>
                <span className="text-[#888d96] block text-[10px]">DOMAIN</span>
                <span className="font-semibold text-[#f5f2eb]">{project.category}</span>
              </div>
            </div>

            {/* Case Study Content Columns */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-sm font-mono leading-relaxed text-[#888d96]">
              <div className="md:col-span-4 space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-[#f5f2eb] uppercase tracking-widest mb-3 border-b border-white/10 pb-2">
                    HARDWARE & SENSORS
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs border border-white/15 bg-white/[0.03] text-[#2b4bee]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-[#f5f2eb] uppercase tracking-widest mb-3 border-b border-white/10 pb-2">
                    TELEMETRY BENCHMARKS
                  </h4>
                  <div className="space-y-3">
                    {project.metrics.map((m) => (
                      <div key={m.label} className="flex justify-between items-center">
                        <span className="text-xs">{m.label}</span>
                        <span className="text-base font-display text-[#f5f2eb]">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="md:col-span-8 space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-[#f5f2eb] uppercase tracking-widest mb-2">
                    OVERVIEW & OBJECTIVES
                  </h4>
                  <p className="text-base text-[#f5f2eb]/90 leading-relaxed font-sans">
                    {project.overview}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/10">
                  <div>
                    <h5 className="text-xs font-bold text-[#2b4bee] uppercase tracking-wider mb-2">
                      TECHNICAL CHALLENGE
                    </h5>
                    <p className="text-xs text-[#888d96] leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-[#2b4bee] uppercase tracking-wider mb-2">
                      IOT365 SOLUTION
                    </h5>
                    <p className="text-xs text-[#888d96] leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Pinout / Schematic snippet */}
                <div className="p-4 bg-black/60 border border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-xs text-[#2b4bee]">
                    <span className="font-bold">DOCUMENTATION HUB REFERENCE:</span>
                    <span>UID: {project.uid}</span>
                  </div>
                  <p className="text-xs text-[#888d96]">
                    {project.schematicNote}
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/10">
              <a
                href="https://iot365.tech"
                target="_blank"
                rel="noreferrer"
                onMouseEnter={onHoverStart}
                onMouseLeave={onHoverEnd}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#2b4bee] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-[#07080a] transition-colors"
              >
                <span>OPEN ON IOT365.TECH HUB</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={onClose}
                onMouseEnter={onHoverStart}
                onMouseLeave={onHoverEnd}
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-[#f5f2eb] font-mono text-xs uppercase tracking-wider hover:bg-white/10 transition-colors"
              >
                <span>CLOSE SPECIFICATION</span>
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
