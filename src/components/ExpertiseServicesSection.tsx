"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Settings, Database, TrendingUp, Code, Zap } from "lucide-react";

interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
}

const ExpertiseServicesSection: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services: Service[] = [
    {
      icon: Cpu,
      title: "Custom AI Development",
      description: "Bespoke AI models for unique business challenges",
      color: "text-blue-400"
    },
    {
      icon: Settings,
      title: "Process Automation (RPA)",
      description: "Streamline workflows and eliminate manual errors",
      color: "text-green-400"
    },
    {
      icon: Database,
      title: "Machine Learning Integration",
      description: "Predictive analytics, recommendation engines, and more",
      color: "text-purple-400"
    },
    {
      icon: TrendingUp,
      title: "Data Strategy & Analytics",
      description: "Turn raw data into actionable intelligence",
      color: "text-orange-400"
    },
    {
      icon: Code,
      title: "AI System Modernization",
      description: "Upgrade existing systems for AI readiness",
      color: "text-pink-400"
    },
    {
      icon: Zap,
      title: "End-to-End Implementation",
      description: "From strategy to deployment and ongoing support",
      color: "text-yellow-400"
    }
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
            Our Expertise
            <span className="block text-text/60 font-light">& Services</span>
          </h2>
          <p className="text-xl text-text/60 max-w-3xl mx-auto font-light">
            We offer comprehensive AI and automation solutions designed to meet the unique needs of companies of all sizes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group p-8 bg-gray-50 border border-text/10 rounded-2xl hover:bg-gray-100 hover:border-primary/30 transition-all duration-300 shadow-sm"
            >
              <div className="mb-6">
                <div className={`w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors mb-4`}>
                  <service.icon className={`w-6 h-6 text-primary`} />
                </div>
                <h3 className="text-xl font-bold text-text mb-3">{service.title}</h3>
                <p className="text-text/60 text-sm leading-relaxed">{service.description}</p>
              </div>
              
              <div className="flex items-center text-text/40 group-hover:text-primary/60 transition-colors">
                <span className="text-sm font-mono">Learn more</span>
                <div className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform">
                  <div className="w-1 h-1 bg-text/40 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Context */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Tailored Solutions for Every Business
          </div>
          
          <p className="text-xl text-text/60 max-w-2xl mx-auto font-light">
            No one-size-fits-all approach. We build solutions specifically designed for your business challenges and growth objectives.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertiseServicesSection;

