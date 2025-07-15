"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Play, Workflow } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(8,17,27,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(8,17,27,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Futuristic Horizontal Lighting */}
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 z-0 pointer-events-none">
        <div className="mx-auto w-3/4 xl:w-2/3 h-32 xl:h-40 bg-gradient-to-r from-transparent via-primary/30 to-transparent blur-2xl opacity-60 animate-pulse-glow" />
      </div>

      {/* Floating Workflow Icons */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-10"
            style={{
              left: `${15 + (i * 12)}%`,
              top: `${20 + (i * 8)}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 10 + (i * 2),
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className={`w-${3 + i} h-${3 + i} border border-text/20 rounded-lg flex items-center justify-center`}>
              <div className="w-2 h-2 bg-text/20 rounded-full"></div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 text-primary font-medium mb-12">
            <Workflow className="w-4 h-4" />
            AI Systems & Automation Solutions
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-7xl md:text-8xl lg:text-9xl font-bold text-text mb-8 leading-tight tracking-tight"
        >
          {/* Responsive headline: single line on xl+, stacked on smaller */}
          <span className="hidden xl:inline">Bring AI to Life</span>
          <span className="xl:hidden">
            <span className="block">Bring AI</span>
            <span className="block">to Life</span>
          </span>
          <span className="block text-6xl md:text-7xl lg:text-8xl text-text/60 font-light">
            Unlock Automation & Intelligence
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-text/70 mb-16 max-w-4xl mx-auto leading-relaxed font-light"
        >
          Bore&apos;sOver empowers companies of all sizes to seamlessly integrate cutting-edge AI and automation, transforming operations and driving growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={scrollToContact}
            className="group relative px-8 py-4 bg-primary text-white font-semibold rounded-full transition-all duration-300 hover:bg-primary/90"
          >
            <div className="flex items-center gap-2">
              Schedule a Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group px-8 py-4 border border-primary/30 text-primary font-semibold rounded-full hover:bg-primary/5 transition-all duration-300"
          >
            <div className="flex items-center gap-2">
              <Play className="w-5 h-5" />
              Discover Our Solutions
            </div>
          </motion.button>
        </motion.div>

        {/* Business Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto"
        >
          {[
            { metric: "85%", label: "Efficiency Increase" },
            { metric: "60%", label: "Cost Reduction" },
            { metric: "3x", label: "Faster Processes" }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-text mb-2">{item.metric}</div>
              <div className="text-text/60 text-sm">{item.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Custom Shape Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute top-20 right-20 w-32 h-32 hidden lg:block"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl rotate-12 blur-sm"></div>
            <div className="relative w-full h-full border border-primary/20 rounded-3xl rotate-12 flex items-center justify-center">
              <Workflow className="w-8 h-8 text-primary/30" />
            </div>
          </div>
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
            className="w-8 h-14 border-2 border-primary/40 rounded-full flex justify-center items-start shadow-[0_0_16px_4px_rgba(54,124,221,0.15)] bg-primary/5 backdrop-blur-sm"
            style={{ boxShadow: '0 0 32px 8px rgba(54,124,221,0.10)' }}
          >
            <div className="w-1.5 h-4 bg-primary/70 rounded-full mt-3 animate-pulse" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;