import React, { useState, useEffect } from "react";
import { CinematicLoader } from "@/components/portfolio/CinematicLoader";
import { CustomCursor, CursorVariant } from "@/components/portfolio/CustomCursor";
import { Navigation } from "@/components/portfolio/Navigation";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { TeamSection } from "@/components/portfolio/TeamSection";
import { ExpertiseSection } from "@/components/portfolio/ExpertiseSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { ProjectModal, ProjectData } from "@/components/portfolio/ProjectModal";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { Footer } from "@/components/portfolio/Footer";

export default function Home() {
  const [loaderComplete, setLoaderComplete] = useState(false);
  const [cursorVariant, setCursorVariant] = useState<CursorVariant>("default");
  const [cursorText, setCursorText] = useState("VIEW");
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    let lenisInstance: any = null;
    let rafId: number;

    const initLenis = async () => {
      try {
        const LenisModule = await import("lenis");
        const Lenis = LenisModule.default || LenisModule;
        lenisInstance = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          touchMultiplier: 1.5,
        });

        const raf = (time: number) => {
          lenisInstance.raf(time);
          rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);
      } catch (err) {
        console.warn("Smooth scroll initialization fallback:", err);
      }
    };

    initLenis();

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (lenisInstance) lenisInstance.destroy();
    };
  }, []);

  const handleHoverLinkStart = () => setCursorVariant("hover");
  const handleHoverLinkEnd = () => setCursorVariant("default");

  const handleProjectHoverStart = () => {
    setCursorText("INSPECT");
    setCursorVariant("project");
  };

  const handleProjectHoverEnd = () => {
    setCursorVariant("default");
  };

  return (
    <div className="relative min-h-screen bg-[#07080a] text-[#f5f2eb]">
      {/* Noise Texture Overlay */}
      <div className="noise-overlay" />

      {/* Cinematic Initial Loader */}
      <CinematicLoader onComplete={() => setLoaderComplete(true)} />

      {/* Custom Lerp Cursor (Desktop) */}
      <CustomCursor cursorVariant={cursorVariant} cursorText={cursorText} />

      {/* Global Minimal Navigation */}
      <Navigation
        onHoverStart={handleHoverLinkStart}
        onHoverEnd={handleHoverLinkEnd}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* Hero Section */}
        <HeroSection
          onHoverStart={handleHoverLinkStart}
          onHoverEnd={handleHoverLinkEnd}
        />

        {/* System Architecture & Live Telemetry Simulator */}
        <AboutSection
          onHoverStart={handleHoverLinkStart}
          onHoverEnd={handleHoverLinkEnd}
        />

        {/* 4-Person Engineering Team Section */}
        <TeamSection
          onHoverStart={handleHoverLinkStart}
          onHoverEnd={handleHoverLinkEnd}
        />

        {/* Core Platform Capabilities / Pillars */}
        <ExpertiseSection
          onHoverStart={handleHoverLinkStart}
          onHoverEnd={handleHoverLinkEnd}
        />

        {/* Showcase of Documented IoT Projects on iot365 */}
        <ProjectsSection
          onSelectProject={(proj) => setSelectedProject(proj)}
          onProjectHoverStart={handleProjectHoverStart}
          onProjectHoverEnd={handleProjectHoverEnd}
        />

        {/* Contact & Platform Engagement */}
        <ContactSection
          onHoverStart={handleHoverLinkStart}
          onHoverEnd={handleHoverLinkEnd}
        />
      </main>

      {/* Footer */}
      <Footer
        onHoverStart={handleHoverLinkStart}
        onHoverEnd={handleHoverLinkEnd}
      />

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onHoverStart={handleHoverLinkStart}
        onHoverEnd={handleHoverLinkEnd}
      />
    </div>
  );
}
