"use client";

import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { SkillsSection } from '@/components/sections/skills';
import { EducationSection } from '@/components/sections/education';
import { FigmaProjectsSection } from '@/components/sections/figma-projects';
import { ProjectsSection } from '@/components/sections/projects';
import { ServicesSection } from '@/components/sections/services';
import { ContactSection } from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <FigmaProjectsSection />
        <EducationSection />
        <ProjectsSection />
        <ServicesSection />
        <ContactSection />
      </main>
    </div>
  );
}
