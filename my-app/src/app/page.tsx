"use client";

import React from "react";
// import { useRouter } from "next/navigation";
import Image from "next/image"
import "./styles/Home.css";

export default function Home() {
  // const router = useRouter();

  const handleEnterSite = () => {
    // router.push("/main"); // Navigate to the original page.tsx (now at /main)
    window.location.href = "/main"; //This hard resets the page and fixes styling errors
  };

  return (
    <div className="home-container">
      {/* <button className="enter-button">
        Sign In
      </button> */}
      <Image src="/assets/logo.png" alt="Bulldog Market Logo" className="logo" width={200} height={200} />
      <h1>Welcome to Bulldog Market</h1>
      <p>
        This is my portoflio
      </p>
      <button onClick={handleEnterSite} className="enter-button">
        Go To UGA DAWGS
      </button>
    </div>
  );
}