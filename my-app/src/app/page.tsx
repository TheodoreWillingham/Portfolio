"use client";

import React from "react"; 
import {ThemeToggle} from "../app/components/portfolio/ThemeToggle";
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

      {/* NavBar */}

      {/* Main Content*/}

      {/* Footer */}


      {/*       ADD BACK 46.05 time
      <button onClick={goToMarketPlace} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Go To UGA BullDawg Marketplace
      </button> */}
    </div>  
  );
}