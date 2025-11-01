"use client";

import React from "react";
import { Dithering } from "@paper-design/shaders-react";
import HeroSection from "./HeroSection";
import ProblemOpportunitySection from "./ProblemOpportunitySection";
import FeaturesSection from "./FeaturesSection";
import ExpertiseServicesSection from "./ExpertiseServicesSection";
import SocialProofSection from "./SocialProofSection";
import TechnologyShowcase from "./TechnologyShowcase";
import CTASection from "./CTASection";
import Footer from "./Footer";
import { SiteHeader } from "./navbar";

const LandingPage: React.FC = () => {
  return (
    <div className="w-full min-h-screen relative bg-[#F7F5F3] overflow-x-hidden flex flex-col justify-start items-center">
      {/* Dithering Background - Layer 0 */}
      <div className="fixed inset-0 z-0 select-none opacity-30 pointer-events-none">
        <Dithering
          colorBack="#FFFFFF00"
          colorFront="#367cdd"
          speed={0.43}
          shape="wave"
          type="4x4"
          pxSize={3}
          scale={1.13}
          style={{
            backgroundColor: "#F7F5F3",
            height: "100vh",
            width: "100vw",
          }}
        />
      </div>

      {/* White Canvas Layer - Layer 1 (above dithering, below content) */}
      <div className="fixed inset-0 z-[1] bg-white/70 pointer-events-none"></div>

      <div className="relative flex flex-col justify-start items-center w-full">
        {/* Main container with proper margins and bounding box */}
        <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] relative flex flex-col justify-start items-start min-h-screen">
          {/* Left vertical line */}
          <div className="w-[1px] h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-[2]"></div>
          
          {/* Right vertical line */}
          <div className="w-[1px] h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-[2]"></div>

          <div className="self-stretch pt-[9px] overflow-hidden flex flex-col justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-[66px] relative z-[2]">
            {/* Navigation */}
            <SiteHeader />

            {/* Hero Section */}
            <HeroSection />

            {/* Problem/Opportunity Section */}
            <div className="w-full border-b border-[rgba(55,50,47,0.12)]">
              <ProblemOpportunitySection />
            </div>

            {/* Features Section */}
            <div className="w-full border-b border-[rgba(55,50,47,0.12)]">
              <FeaturesSection />
            </div>

            {/* Expertise Services Section */}
            <div className="w-full border-b border-[rgba(55,50,47,0.12)]">
              <ExpertiseServicesSection />
            </div>

            {/* Technology Showcase */}
            <div className="w-full border-b border-[rgba(55,50,47,0.12)]">
              <TechnologyShowcase />
            </div>

            {/* CTA Section */}
            <div className="w-full border-b border-[rgba(55,50,47,0.12)]">
              <CTASection />
            </div>

            {/* Footer */}
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

