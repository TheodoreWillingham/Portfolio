"use client";

import React from "react"; 
import {ThemeToggle} from "./components/portfolio/ThemeToggle";
import { StarBackground } from "./components/portfolio/StarBackground";
import { NavBar } from "./components/portfolio/NavBar";
import { HeroSection } from "./components/portfolio/HeroSection";
import { AboutSection } from "./components/portfolio/AboutSection";
import { SkillsSection } from "./components/portfolio/SkillsSection";

// import { Component } from "lucide-react";

export default function Home() {
  // const router = useRouter();

  const goToMarketPlace = () => {
    // router.push("/main"); // Navigate to the original page.tsx (now at /main)
    window.location.href = "/main"; //This hard resets the page and fixes styling errors
  };

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
      </main>

      {/* Footer */}


      {/* <button onClick={goToMarketPlace} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Go To UGA BullDawg Marketplace
      </button> */}
    </div>  
  );
}