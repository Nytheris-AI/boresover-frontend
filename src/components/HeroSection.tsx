"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Play, Workflow } from "lucide-react";

const HeroSection: React.FC = () => {
  const scrollToContact = (): void => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative pb-8 sm:pb-12 md:pb-16 flex flex-col justify-start items-center px-2 sm:px-4 md:px-8 lg:px-0 w-full overflow-hidden">
      {/* Content Container */}
      <div className="relative z-10 w-full flex flex-col justify-center items-center">
        {/* Hero Content */}
        <div className="w-full max-w-[937px] lg:w-[937px] flex flex-col justify-center items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          <div className="self-stretch rounded-[3px] flex flex-col justify-center items-center gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-[14px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] rounded-[90px] border border-[rgba(2,6,23,0.08)] text-[#37322F] text-xs font-medium">
                <Workflow className="w-[14px] h-[14px]" />
                AI Systems & Automation Solutions
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full max-w-[748.71px] lg:w-[748.71px] text-center flex justify-center flex-col text-[#37322F] text-[24px] xs:text-[28px] sm:text-[36px] md:text-[52px] lg:text-[80px] font-normal leading-[1.1] sm:leading-[1.15] md:leading-[1.2] lg:leading-24 font-serif px-2 sm:px-4 md:px-0 mb-6 sm:mb-8"
            >
              Bring AI to Life
              <span className="block text-[#37322F]/60 font-light text-[18px] xs:text-[22px] sm:text-[28px] md:text-[40px] lg:text-[64px] mt-2 sm:mt-4">
                Unlock Automation & Intelligence
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="w-full max-w-[506.08px] lg:w-[506.08px] text-center flex justify-center flex-col text-[rgba(55,50,47,0.80)] text-sm sm:text-lg md:text-xl leading-[1.4] sm:leading-[1.45] md:leading-[1.5] lg:leading-7 font-sans px-2 sm:px-4 md:px-0 font-medium"
            >
              Bore&apos;sOver empowers companies of all sizes to seamlessly integrate cutting-edge AI and automation, transforming operations and driving growth.
            </motion.p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="w-full max-w-[497px] lg:w-[497px] flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 relative z-10 mt-6 sm:mt-8 md:mt-10 lg:mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="backdrop-blur-[8.25px] flex flex-col sm:flex-row justify-start items-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToContact}
              className="h-10 sm:h-11 md:h-12 px-6 sm:px-8 md:px-10 lg:px-12 py-2 sm:py-[6px] relative bg-[#37322F] shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] overflow-hidden rounded-full flex justify-center items-center"
            >
              <div className="w-20 sm:w-24 md:w-28 lg:w-44 h-[41px] absolute left-0 top-[-0.5px] bg-gradient-to-b from-[rgba(255,255,255,0)] to-[rgba(0,0,0,0.10)] mix-blend-multiply"></div>
              <div className="flex items-center gap-2 text-white text-sm sm:text-base md:text-[15px] font-medium leading-5 font-sans">
                Schedule a Free Consultation
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group px-6 sm:px-8 md:px-10 lg:px-12 py-2 sm:py-[6px] border border-[rgba(55,50,47,0.30)] text-[#37322F] text-sm sm:text-base md:text-[15px] font-medium rounded-full hover:bg-white/50 transition-all duration-300 flex items-center gap-2"
            >
              <Play className="w-4 h-4 sm:w-5 sm:h-5" />
              Discover Our Solutions
            </motion.button>
          </motion.div>
        </div>

        {/* Business Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 sm:mt-16 md:mt-20 max-w-[748.71px] mx-auto"
        >
          {[
            { metric: "85%", label: "Efficiency Increase" },
            { metric: "60%", label: "Cost Reduction" },
            { metric: "3x", label: "Faster Processes" }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[#37322F] mb-2">{item.metric}</div>
              <div className="text-[rgba(55,50,47,0.60)] text-xs sm:text-sm">{item.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="fixed left-1/2 -translate-x-1/2 bottom-6 z-20"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-8 h-14 border-2 border-[rgba(54,124,221,0.40)] rounded-full flex justify-center items-start shadow-[0_0_16px_4px_rgba(54,124,221,0.15)] bg-white/80 backdrop-blur-sm"
            style={{ boxShadow: '0 0 32px 8px rgba(54,124,221,0.10)' }}
          >
            <div className="w-1.5 h-4 bg-[#367cdd]/70 rounded-full mt-3 animate-pulse" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

