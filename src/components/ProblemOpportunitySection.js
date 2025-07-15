"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, Lightbulb, TrendingUp, Zap, ArrowRight } from "lucide-react";

const ProblemOpportunitySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const problems = [
    "Manual processes slowing down operations",
    "High operational costs eating into profits",
    "Data scattered across multiple systems",
    "Slow decision-making due to lack of insights",
    "Fear of falling behind competitors",
    "Inefficient workflows causing bottlenecks"
  ];

  const opportunities = [
    "Streamlined operations that scale effortlessly",
    "Data-driven insights for smarter decisions",
    "Automated workflows that work 24/7",
    "Cost savings that directly impact your bottom line",
    "Competitive advantage through AI innovation",
    "Future-proof systems that grow with your business"
  ];

  return (
    <section ref={ref} className="py-32 px-4 bg-background border-t border-text/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text mb-6 tracking-tight">
            Are You Grappling
            <span className="block text-text/60 font-light">with These Challenges?</span>
          </h2>
          <p className="text-xl text-text/60 max-w-3xl mx-auto font-light">
            Don't get left behind. AI isn't just for tech giants anymore – it's a necessity for competitive advantage.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Problems Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-2xl font-bold text-text">Current Pain Points</h3>
            </div>
            
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-gray-50 border border-text/10 rounded-xl hover:bg-gray-100 transition-colors shadow-sm"
                >
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-text">{problem}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Opportunities Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-text">AI-Powered Future</h3>
            </div>
            
            <div className="space-y-4">
              {opportunities.map((opportunity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-gray-50 border border-text/10 rounded-xl hover:bg-gray-100 transition-colors shadow-sm"
                >
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-text">{opportunity}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Imagine a future where your operations are streamlined, data-driven, and effortlessly scalable
          </div>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-colors"
          >
            <span>Stop imagining, start achieving. Let Bore'sOver turn your AI aspirations into tangible realities.</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemOpportunitySection; 