"use client";

import React from "react";
import { motion } from "framer-motion";
import { Settings, Code, TrendingUp, ArrowRight, CheckCircle, Shield, Clock, ExternalLink } from "lucide-react";

interface Step {
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  step: string;
  title: string;
  desc: string;
}

interface Feature {
  color: string;
  text: string;
}

const steps: Step[] = [
  {
    icon: Settings,
    color: "bg-blue-600",
    step: "01",
    title: "Consult & Strategize",
    desc: "Understand your goals and challenges"
  },
  {
    icon: Code,
    color: "bg-green-600",
    step: "02",
    title: "Design & Develop",
    desc: "Craft and implement tailored AI/automation solutions"
  },
  {
    icon: TrendingUp,
    color: "bg-purple-600",
    step: "03",
    title: "Deploy & Optimize",
    desc: "Launch, monitor, and refine for peak performance"
  }
];

const features: Feature[] = [
  { color: "bg-green-500", text: "99.9% uptime guarantee" },
  { color: "bg-blue-500", text: "Enterprise security & compliance" },
  { color: "bg-purple-500", text: "24/7 monitoring & support" }
];

const TechnologyShowcase: React.FC = () => {
  return (
    <section className="py-12 md:py-20 px-4 md:px-6 max-w-7xl mx-auto bg-background">
      <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* Left Side - Content */}
        <div className="space-y-6 md:space-y-8">
          <div className="space-y-3 md:space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text">How It Works</h2>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-text/60">Simplified Process</h3>
            <p className="text-base md:text-lg text-text/70 leading-relaxed max-w-lg">
              We demystify the AI integration process with a clear, effective methodology that ensures successful implementation and measurable results.
            </p>
          </div>
          {/* Process Steps */}
          <div className="space-y-4 md:space-y-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="border border-text/20 rounded-lg p-4 md:p-6 bg-white/50 hover:bg-white/70 transition-colors shadow-sm"
              >
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="flex-shrink-0">
                    <div className={`w-10 h-10 md:w-12 md:h-12 ${step.color} rounded-lg flex items-center justify-center`}>
                      <step.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 md:space-x-3 mb-2">
                      <span className="text-xs md:text-sm text-text/40 font-medium">{step.step}</span>
                      <h4 className="text-lg md:text-xl font-semibold text-text">{step.title}</h4>
                    </div>
                    <p className="text-sm md:text-base text-text/70">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side - Visual Diagram */}
        <div className="relative lg:pl-8 mt-8 lg:mt-0">
          {/* Main Visual Container */}
          <div className="bg-gradient-to-br from-white/50 to-white/70 rounded-2xl md:rounded-3xl p-4 md:p-8 backdrop-blur-sm border border-text/20 shadow-lg relative">
            {/* Central Process Flow */}
            <div className="relative">
              {/* Animated Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-green-500/10 rounded-xl md:rounded-2xl blur-xl"></div>
              
              {/* Process Chain */}
              <div className="relative space-y-6 md:space-y-8">
                {/* ROI Highlight Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-gradient-to-r from-primary to-primary/90 rounded-xl md:rounded-2xl p-3 md:p-4 transform hover:scale-105 transition-all duration-300 shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white/90 text-xs md:text-sm font-medium mb-1">ROI Timeline</div>
                      <div className="text-white font-bold text-lg md:text-xl">3-6 months</div>
                      <div className="text-white/80 text-xs mt-1">Average return</div>
                    </div>
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-lg md:rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                  </div>
                </motion.div>
                
                {/* Process Flow Visualization */}
                <div className="flex items-center justify-center space-x-1 md:space-x-2 lg:space-x-4 overflow-hidden">
                  {/* Step Icons with Connecting Lines */}
                  <div className="flex items-center space-x-1 md:space-x-2 lg:space-x-4 min-w-0">
                    <div className="relative flex-shrink-0">
                      <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-primary to-primary/90 rounded-lg md:rounded-xl lg:rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                        <Settings className="w-4 h-4 md:w-5 md:h-5 lg:w-8 lg:h-8 text-white" />
                      </div>
                      <div className="absolute -bottom-3 md:-bottom-4 lg:-bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-text/60 whitespace-nowrap">Consult</div>
                    </div>
                    {/* Animated Arrow */}
                    <div className="flex items-center space-x-0.5 md:space-x-1 lg:space-x-2 flex-shrink-0">
                      <div className="w-2 md:w-4 lg:w-8 h-0.5 bg-gradient-to-r from-primary to-accent"></div>
                      <ArrowRight className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 text-text/40 animate-pulse" />
                      <div className="w-2 md:w-4 lg:w-8 h-0.5 bg-gradient-to-r from-accent to-secondary"></div>
                    </div>
                    <div className="relative flex-shrink-0">
                      <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-accent to-accent/90 rounded-lg md:rounded-xl lg:rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                        <Code className="w-4 h-4 md:w-5 md:h-5 lg:w-8 lg:h-8 text-white" />
                      </div>
                      <div className="absolute -bottom-3 md:-bottom-4 lg:-bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-text/60 whitespace-nowrap">Develop</div>
                    </div>
                    {/* Animated Arrow */}
                    <div className="flex items-center space-x-0.5 md:space-x-1 lg:space-x-2 flex-shrink-0">
                      <div className="w-2 md:w-4 lg:w-8 h-0.5 bg-gradient-to-r from-accent to-secondary"></div>
                      <ArrowRight className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 text-text/40 animate-pulse" />
                      <div className="w-2 md:w-4 lg:w-8 h-0.5 bg-gradient-to-r from-secondary to-primary"></div>
                    </div>
                    <div className="relative flex-shrink-0">
                      <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-secondary to-secondary/90 rounded-lg md:rounded-xl lg:rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                        <TrendingUp className="w-4 h-4 md:w-5 md:h-5 lg:w-8 lg:h-8 text-white" />
                      </div>
                      <div className="absolute -bottom-3 md:-bottom-4 lg:-bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-text/60 whitespace-nowrap">Deploy</div>
                    </div>
                  </div>
                </div>
                
                {/* Timeline & Performance Cards */}
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div className="bg-white/60 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-text/20 hover:border-primary/30 transition-colors">
                    <div className="flex items-center space-x-2 md:space-x-3">
                      <Clock className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                      <div>
                        <div className="text-text/60 text-xs">Avg. Timeline</div>
                        <div className="text-text font-bold text-sm md:text-base">6-8 weeks</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-text/20 hover:border-primary/30 transition-colors">
                    <div className="flex items-center space-x-2 md:space-x-3">
                      <Shield className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                      <div>
                        <div className="text-text/60 text-xs">Uptime</div>
                        <div className="text-text font-bold text-sm md:text-base">99.9%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Success Metrics - Positioned outside main container */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute -top-2 -right-2 z-10 hidden md:block"
          >
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl md:rounded-2xl px-3 md:px-4 py-2 md:py-3 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center space-x-2 md:space-x-3">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-white" />
                <div>
                  <div className="text-white/80 text-xs md:text-sm font-medium">Success Rate</div>
                  <div className="text-white font-bold text-lg md:text-xl">99.7%</div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Floating Stats - Positioned outside main container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute -bottom-2 -left-2 z-10 hidden md:block"
          >
            <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl md:rounded-2xl px-3 md:px-4 py-2 md:py-3 shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center space-x-2">
                <ExternalLink className="w-3 h-3 md:w-4 md:h-4 text-white" />
                <div className="text-white text-xs md:text-sm font-medium">Live Dashboard</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Bottom Features */}
      <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {features.map((f, i) => (
            <div key={i} className="flex items-center space-x-2 md:space-x-3">
              <div className={`w-2 h-2 ${f.color} rounded-full`}></div>
              <span className="text-sm md:text-base text-gray-800">{f.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyShowcase;

