"use client";

import React from "react"; 
import { StarBackground } from "./components/portfolio/StarBackground";
import { NavBar } from "./components/portfolio/NavBar";
import { HeroSection } from "./components/portfolio/HeroSection";
import { AboutSection } from "./components/portfolio/AboutSection";
import { SkillsSection } from "./components/portfolio/SkillsSection";
import { ProjectSection } from "./components/portfolio/ProjectSection";
import { ContactSection } from "./components/portfolio/ContactSection";
import { Footer } from "./components/portfolio/Footer";


// import { Component } from "lucide-react";

export default function Home() {
  // const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle now apart of Nav bar*/}

      {/* Background Effects */}
      <StarBackground />

      {/* NavBar */}
      <NavBar />

      {/* Main Content*/}
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>  
  );
}