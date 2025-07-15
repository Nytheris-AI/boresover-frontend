import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import ProblemOpportunitySection from "./ProblemOpportunitySection";
import FeaturesSection from "./FeaturesSection";
import ExpertiseServicesSection from "./ExpertiseServicesSection";
import SocialProofSection from "./SocialProofSection";
import TechnologyShowcase from "./TechnologyShowcase";
import CTASection from "./CTASection";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ProblemOpportunitySection />
      <FeaturesSection />
      <ExpertiseServicesSection />
      {/* <SocialProofSection /> */}
      <TechnologyShowcase />
      <CTASection />
      <Footer />
    </div>
  );
};

export default LandingPage;