"use client";

import React from "react"; 
import {ThemeToggle} from "./components/portfolio/ThemeToggle";
import { StarBackground } from "./components/portfolio/StarBackground";
import { NavBar } from "./components/portfolio/NavBar";
import { HeroSection } from "./components/portfolio/HeroSection";
import { AboutSection } from "./components/portfolio/AboutSection";
import { SkillsSection } from "./components/portfolio/SkillsSection";
import { ProjectSection } from "./components/portfolio/ProjectSection";
import { ContactSection } from "./components/portfolio/ContactSection";

// import { Component } from "lucide-react";

export default function Home() {
  // const router = useRouter();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Background Effects */}
      <StarBackground />

      {/* NavBar */}
      <NavBar />

      {/* Main Content*/}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
      </main>

      {/* Footer */}

    </div>  
  );
}