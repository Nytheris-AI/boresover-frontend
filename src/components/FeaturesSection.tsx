"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GitBranch, Zap, ArrowUpRight, Layers, ArrowRight } from "lucide-react";

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  benefits: string[];
  stats: string;
}

const FeaturesSection: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features: Feature[] = [
    {
      icon: GitBranch,
      title: "Increased Efficiency & Productivity",
      description: "Automate repetitive tasks and free up human capital for strategic work. Our AI systems handle complex workflows 24/7, eliminating manual errors and accelerating processes.",
      benefits: ["80% faster processing", "99% error reduction", "24/7 automation"],
      stats: "80% Faster"
    },
    {
      icon: Zap,
      title: "Smarter Decision-Making",
      description: "Leverage data with AI-powered insights that transform raw information into actionable intelligence. Make informed decisions in real-time with predictive analytics.",
      benefits: ["Instant responses", "Smart routing", "Automated approvals"],
      stats: "Real-time"
    },
    {
      icon: ArrowUpRight,
      title: "Cost Reduction",
      description: "Optimize processes and reduce operational overhead. Our automation solutions deliver measurable ROI by eliminating inefficiencies and streamlining operations.",
      benefits: ["60% cost savings", "Reduced overhead", "Higher ROI"],
      stats: "60% Savings"
    },
    {
      icon: Layers,
      title: "Enhanced Innovation",
      description: "Unlock new possibilities and stay ahead of the curve. Our AI systems enable you to explore new business models and capabilities that weren&apos;t possible before.",
      benefits: ["New capabilities", "Competitive edge", "Future-ready"],
      stats: "Innovation"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

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
            How Bore&apos;sOver
            <span className="block text-text/60 font-light">Transforms Businesses</span>
          </h2>
          <p className="text-xl text-text/60 max-w-3xl mx-auto font-light">
            At Bore&apos;sOver, we turn your AI aspirations into tangible realities. We specialize in tailored AI system implementation and automation solutions that redefine efficiency, spark innovation, and create sustainable growth.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="group cursor-pointer"
            >
              <div className="relative p-8 h-full bg-gray-50 border border-text/10 rounded-2xl hover:bg-gray-100 hover:border-primary/30 transition-all duration-500 shadow-sm">
                {/* Custom Shape Accent */}
                <div className="absolute top-6 right-6 w-8 h-8 border border-primary/20 rounded-lg rotate-45 opacity-20 group-hover:opacity-40 transition-opacity"></div>
                
                <div className="mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-xs text-text/40 font-mono mb-2">{feature.stats}</div>
                </div>
                
                <h3 className="text-2xl font-bold text-text mb-4 group-hover:text-text transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-text/60 leading-relaxed mb-6 group-hover:text-text/80 transition-colors">
                  {feature.description}
                </p>

                {/* Benefits List */}
                <div className="space-y-2 mb-6">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-text/50 text-sm">
                      <div className="w-1 h-1 bg-text/50 rounded-full"></div>
                      {benefit}
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center text-text/40 group-hover:text-primary/60 transition-colors">
                  <span className="text-sm font-mono">Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Custom Shapes */}
        <div className="absolute top-32 left-20 w-24 h-24 border border-text/10 rounded-full hidden xl:block"></div>
        <div className="absolute bottom-32 right-20 w-16 h-16 border border-text/10 rounded-lg rotate-45 hidden xl:block"></div>
      </div>
    </section>
  );
};

export default FeaturesSection;

