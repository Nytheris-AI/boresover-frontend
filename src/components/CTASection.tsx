"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, CheckCircle, Mail, Phone, Calendar, Workflow } from "lucide-react";

const CTASection: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

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
    <section ref={ref} id="contact" className="py-16 md:py-32 px-4 bg-background border-t border-text/10">
      <div className="max-w-7xl mx-auto">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="relative max-w-5xl mx-auto">
            {/* Custom Shapes */}
            <div className="absolute -top-10 -left-10 w-20 h-20 border border-text/10 rounded-full hidden lg:block">
              <div className="absolute inset-4 border border-text/10 rounded-full"></div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-16 h-16 border border-text/10 rounded-lg rotate-45 hidden lg:block">
              <div className="absolute inset-2 border border-text/10 rounded-sm"></div>
            </div>
            
            <div className="relative bg-gray-50 border border-text/10 rounded-2xl md:rounded-3xl p-6 md:p-16 overflow-hidden shadow-lg">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-[0.02]">
                <div className="absolute inset-0" style={{
                  backgroundImage: `
                    linear-gradient(rgba(8,17,27,0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(8,17,27,0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '30px 30px'
                }}></div>
              </div>

              {/* Floating workflow icon */}
              <div className="absolute top-4 md:top-8 right-4 md:right-8 w-8 h-8 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Workflow className="w-4 h-4 md:w-6 md:h-6 text-primary/60" />
              </div>
              
              <div className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8 }}
                  className="mb-6 md:mb-8"
                >
                  <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 text-primary font-medium mb-6 md:mb-8 text-sm md:text-base">
                    <CheckCircle className="w-3 h-3 md:w-4 md:h-4" />
                    Ready to Revolutionize Your Business with AI?
                  </div>
                </motion.div>

                <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-text mb-4 md:mb-6 tracking-tight">
                  Stop Imagining,
                  <span className="block text-text/60 font-light">Start Achieving</span>
                </h2>
                <p className="text-base md:text-xl text-text/60 mb-8 md:mb-12 max-w-3xl mx-auto font-light">
                  Ready to revolutionize your business with AI? Join hundreds of enterprises that have transformed their operations with AI-powered workflow automation. See results in weeks, not months.
                </p>

                {/* Value Proposition */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
                  {[
                    { value: "Free", label: "30-day trial" },
                    { value: "3 weeks", label: "Time to ROI" },
                    { value: "No risk", label: "Cancel anytime" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-xl md:text-2xl font-bold text-text mb-1">{item.value}</div>
                      <div className="text-text/60 text-xs md:text-sm">{item.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Newsletter Signup */}
                <motion.form
                  onSubmit={handleSubmit}
                  className="max-w-lg mx-auto mb-12 md:mb-16"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your business email"
                      className="flex-1 px-4 md:px-6 py-3 md:py-4 bg-white/80 border border-text/20 rounded-full text-text placeholder-text/40 focus:outline-none focus:border-primary/50 transition-colors text-sm md:text-base"
                      required
                    />
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-6 md:px-8 py-3 md:py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 text-sm md:text-base"
                    >
                      {isSubmitted ? (
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5" />
                      ) : (
                        <>
                          <span className="hidden sm:inline">Get Your Free AI Strategy Session</span>
                          <span className="sm:hidden">Get Free Strategy</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </motion.button>
                  </div>
                </motion.form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

