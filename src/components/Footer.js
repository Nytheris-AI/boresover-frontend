"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail, ArrowUp, ArrowRight } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };



  const socialLinks = [
    { icon: Mail, href: "mailto:hello@boresover.com", label: "Email" }
  ];

  return (
    <footer className="relative bg-footer-bg border-t border-white/10">
      {/* Pre-footer CTA */}
      <div className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-footer-text mb-4 tracking-tight">
              Ready to Bring AI
              <span className="block text-footer-text/80 font-light">to Life?</span>
            </h3>
            <p className="text-footer-text/80 text-lg max-w-2xl mx-auto font-light">
              Stop imagining, start achieving. Let Bore&apos;sOver turn your AI aspirations into tangible realities.
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-text font-semibold rounded-full hover:bg-accent/90 transition-colors"
          >
            Schedule a Free Consultation
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="border-t border-white/20 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center">
            {/* Brand */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-6 justify-center">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-text rounded-sm"></div>
                </div>
                <span className="text-2xl font-bold text-footer-text">Bore&apos;sOver</span>
              </div>
              <p className="text-footer-text/80 mb-8 max-w-sm mx-auto font-light">
                Transform your enterprise with AI-powered workflow automation. 
                Built for businesses of all scales to achieve operational excellence.
              </p>
              
              {/* Social Links */}
              <div className="flex justify-center">
                <motion.a
                  href={socialLinks[0].href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 rounded-full text-footer-text/80 hover:text-footer-text hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
                  aria-label={socialLinks[0].label}
                >
                  <Mail className="w-5 h-5" />
                  <span className="font-medium">Get in Touch</span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/20 py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-footer-text/40 text-sm">
            © 2025 Bore&apos;sOver. All rights reserved.
          </p>
          
          <div className="flex items-center gap-8 mt-4 md:mt-0">
            <div className="flex items-center gap-2 text-footer-text/40 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              All systems operational
            </div>
            
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-footer-text/80 hover:text-footer-text hover:bg-white/20 transition-all duration-300"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;