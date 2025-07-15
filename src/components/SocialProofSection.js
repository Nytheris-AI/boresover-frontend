"use client";

import React from 'react';
import {
  TrendingUp,
  DollarSign,
  Zap,
  Building2,
  Users,
  Settings,
  Target,
  Award,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Star,
  Lightbulb,
  Shield,
  Clock
} from 'lucide-react';

const industries = [
  'Financial Services',
  'Healthcare',
  'Manufacturing',
  'Retail',
  'Technology',
  'Logistics'
];

const valueProps = [
  {
    icon: Users,
    color: 'from-blue-500 to-blue-600',
    title: 'End-to-End Partnership',
    desc: 'Offering strategic planning and comprehensive support for seamless AI integration from concept to deployment.'
  },
  {
    icon: Award,
    color: 'from-green-500 to-green-600',
    title: 'Expert Team',
    desc: 'A team with deep industry knowledge and technical prowess, ready to deliver cutting-edge AI solutions.'
  },
  {
    icon: Settings,
    color: 'from-purple-500 to-purple-600',
    title: 'Tailored Solutions',
    desc: 'Customizable AI solutions designed specifically for your unique business needs and challenges.'
  },
  {
    icon: CheckCircle,
    color: 'from-teal-500 to-teal-600',
    title: 'Proven Methodology',
    desc: 'A clear, effective process designed to ensure successful AI adoption and implementation.'
  },
  {
    icon: Target,
    color: 'from-orange-500 to-orange-600',
    title: 'Focus on ROI',
    desc: 'Committed to delivering measurable business value and tangible returns on your AI investment.'
  },
  {
    icon: Lightbulb,
    color: 'from-pink-500 to-pink-600',
    title: 'Innovation First',
    desc: 'Leveraging the latest AI technologies and innovative approaches to solve complex business challenges.'
  }
];

export default function SocialProofSection() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto bg-background">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full px-6 py-2 mb-6 border border-primary/20">
          <Sparkles className="w-5 h-5 text-primary" />
          <span className="text-primary font-medium">Next-Generation AI Solutions</span>
        </div>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text mb-6 tracking-tight">
            Why Choose{' '}
            <span className="text-primary">Bore&apos;sOver?</span>
          </h2>
          <p className="text-xl text-text/60 max-w-3xl mx-auto font-light">
            Discover how Bore&apos;sOver is poised to transform businesses with innovative AI solutions. Our vision-driven approach and cutting-edge methodology are designed to deliver exceptional value.
          </p>
      </div>

      {/* Key Metrics */}
      <div className="grid md:grid-cols-4 gap-8 mb-20">
        <div className="group">
          <div className="bg-gradient-to-br from-accent/10 to-accent/20 rounded-2xl p-8 border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="w-8 h-8 text-accent" />
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            </div>
            <div className="text-3xl font-bold text-accent mb-2">Significant</div>
            <div className="text-accent/80 font-medium mb-1">Efficiency Gains</div>
            <div className="text-text/60 text-sm">Streamlined operations potential</div>
          </div>
        </div>
        <div className="group">
          <div className="bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl p-8 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <DollarSign className="w-8 h-8 text-primary" />
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            </div>
            <div className="text-3xl font-bold text-primary mb-2">Substantial</div>
            <div className="text-primary/80 font-medium mb-1">Cost Savings</div>
            <div className="text-text/60 text-sm">Optimized resource allocation</div>
          </div>
        </div>
        <div className="group">
          <div className="bg-gradient-to-br from-secondary/10 to-secondary/20 rounded-2xl p-8 border border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <Zap className="w-8 h-8 text-secondary" />
              <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
            </div>
            <div className="text-3xl font-bold text-secondary mb-2">Accelerated</div>
            <div className="text-secondary/80 font-medium mb-1">Processing Speed</div>
            <div className="text-text/60 text-sm">Lightning-fast automation</div>
          </div>
        </div>
        <div className="group">
          <div className="bg-gradient-to-br from-accent/10 to-accent/20 rounded-2xl p-8 border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <Building2 className="w-8 h-8 text-accent" />
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            </div>
            <div className="text-3xl font-bold text-accent mb-2">Ready to</div>
            <div className="text-accent/80 font-medium mb-1">Transform</div>
            <div className="text-text/60 text-sm">Enterprise-grade solutions</div>
          </div>
        </div>
      </div>

      {/* Target Industries */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-text mb-4">Target Industries</h3>
          <p className="text-text/60">Industries we&apos;re excited to revolutionize with AI innovation</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {industries.map((industry, index) => (
            <div
              key={industry}
              className="bg-gradient-to-r from-white/50 to-white/70 backdrop-blur-sm rounded-full px-6 py-3 border border-text/20 hover:border-primary/30 transition-all duration-300 hover:scale-105 shadow-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="text-text font-medium">{industry}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Value Propositions */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {valueProps.map((prop, i) => (
          <div className="group" key={prop.title}>
            <div className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:scale-105 h-full`}>
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${prop.color} rounded-xl flex items-center justify-center`}>
                  <prop.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white">{prop.title}</h4>
              </div>
              <p className="text-gray-300 leading-relaxed">{prop.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Social Proof / Success Stories */}
      <div className="bg-gradient-to-r from-gray-800/30 to-gray-700/30 rounded-3xl p-12 border border-gray-600/30 backdrop-blur-sm">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full px-4 py-2 mb-4 border border-yellow-500/20">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-300 text-sm font-medium">Coming Soon</span>
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">Success Stories in the Making</h3>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We&apos;re preparing to partner with forward-thinking companies to create transformative AI success stories. Be among the first to experience the Bore&apos;sOver difference.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl p-8 border border-blue-500/10">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                Early Adopter Program
              </span>
            </div>
            <p className="text-gray-300 text-lg italic mb-6">
              &ldquo;Ready to be part of our first success story? Join our early adopter program and help shape the future of AI automation.&rdquo;
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <div>
                <div className="text-white font-semibold">Bore&apos;sOver Team</div>
                <div className="text-gray-400 text-sm">Ready to Transform Your Business</div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-green-500/5 to-teal-500/5 rounded-2xl p-8 border border-green-500/10">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                Partnership Opportunity
              </span>
            </div>
            <p className="text-gray-300 text-lg italic mb-6">
              &ldquo;Looking for a technology partner that understands your vision? Let&apos;s build something extraordinary together.&rdquo;
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">?</span>
              </div>
              <div>
                <div className="text-white font-semibold">Your Company Here</div>
                <div className="text-gray-400 text-sm">Future Success Partner</div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <button className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            <span>Start Your Success Story</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="mt-16 pt-8 border-t border-gray-700">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex items-center space-x-3">
            <Shield className="w-6 h-6 text-green-400" />
            <span className="text-gray-300">Enterprise-grade security ready</span>
          </div>
          <div className="flex items-center space-x-3">
            <Clock className="w-6 h-6 text-blue-400" />
            <span className="text-gray-300">24/7 support commitment</span>
          </div>
          <div className="flex items-center space-x-3">
            <CheckCircle className="w-6 h-6 text-purple-400" />
            <span className="text-gray-300">Scalable solutions designed</span>
          </div>
        </div>
      </div>
    </section>
  );
}