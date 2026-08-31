"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, Variants, useInView, useSpring, useMotionValue } from 'framer-motion';
import { 
  Award, 
  CheckCircle2, 
  TrendingUp, 
  BookOpen, 
  Users, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

// Animated Counter Sub-Component
interface CounterProps {
  value: string;
}

const AnimatedCounter: React.FC<CounterProps> = ({ value }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const numericValue = parseInt(value.replace(/[^0-9]/g, ''), 10) || 0;
  const suffix = value.replace(/[0-9]/g, '');

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 70,
    damping: 20,
    duration: 2.5
  });

  const [displayValue, setDisplayValue] = useState<number>(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(numericValue);
    }
  }, [isInView, numericValue, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  return (
    <span ref={ref}>
      {displayValue}{suffix}
    </span>
  );
};

export const AboutSection: React.FC = () => {
  const [imgError, setImgError] = useState<boolean>(false);

  const keyFeatures: string[] = [
    "UK Standard Regulated Qualifications & Pathways",
    "Flexible Online & Blended Learning Models",
    "Globally Recognized Accreditation Standards",
    "Dedicated Academic & Center Support"
  ];

  const stats = [
    { label: "Success Rate", value: "100%", icon: TrendingUp },
    { label: "Enrolled Students", value: "100", icon: Users },
    { label: "Approved Programs", value: "100%", icon: Award },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      
      {/* Background Decorative Animated Elements */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-[30rem] h-[30rem] bg-[#008BC5]/10 rounded-full blur-3xl pointer-events-none" 
      />
      <motion.div 
        animate={{ scale: [1, 1.15, 1], rotate: [0, -5, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-[30rem] h-[30rem] bg-[#E87722]/10 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Image Showcase Grid */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none space-y-4">
              
              {/* Main Image Banner with Gradient Overlay */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80" 
                  alt="DIB Students Studying" 
                  className="w-full h-72 sm:h-80 object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />
                
                {/* DIB Logo Badge Embedded inside Image */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md p-2.5 rounded-2xl shadow-lg border border-white/50 flex items-center gap-3">
                  {!imgError ? (
                    <img
                      src="/1.png"
                      alt="DIB Education System Logo"
                      className="h-10 w-auto object-contain"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-lg bg-[#008BC5] flex items-center justify-center text-white font-bold text-xs">
                      DIB
                    </div>
                  )}
                  <span className="text-xs font-black text-slate-900 pr-2 border-l border-slate-200 pl-2">
                    DIB Education System
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs font-bold text-sky-300 uppercase tracking-widest">Global Standards</p>
                  <h3 className="text-lg font-bold">Approved Study Centre</h3>
                </div>
              </div>

              {/* Secondary Visual Strip & Floating Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-2xl overflow-hidden shadow-md border-2 border-white h-36">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=500&q=80" 
                    alt="Campus Community" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <motion.div 
                  whileHover={{ y: -3 }}
                  className="bg-gradient-to-br from-[#008BC5] to-[#006A96] text-white p-4 rounded-2xl shadow-xl flex flex-col justify-center h-36"
                >
                  <div className="flex items-center gap-1.5 mb-1">
                    <BookOpen className="w-4 h-4 text-[#E87722] shrink-0" />
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-sky-100">UK Qualification</span>
                  </div>
                  <h4 className="font-black text-sm leading-tight">London Assessment Board</h4>
                  <p className="text-[11px] text-sky-100 mt-1">Approved Delivery Centre</p>
                </motion.div>
              </div>

              {/* Floating Certified Badge (Fixed Overlap Issue) */}
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 right-0 translate-x-2 bg-white p-3 rounded-2xl shadow-2xl border border-slate-100 flex items-center gap-3 z-20"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#E87722] flex items-center justify-center shadow-inner shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#E87722]" />
                    <p className="text-[9px] text-gray-500 font-bold uppercase tracking-wider">Certified</p>
                  </div>
                  <p className="text-xs font-black text-slate-900">Approved Centre</p>
                </div>
              </motion.div>

            </div>
          </motion.div>

          {/* Right Column: Content with Staggered Motion */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6"
          >
            
            {/* Tag / Category Header */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#E87722] text-xs font-black tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About DIB Education System</span>
            </motion.div>

            {/* Main Section Heading */}
            <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              An Approved Centre for <span className="text-[#008BC5]">UK Qualifications</span>
            </motion.h2>

            {/* Description Text */}
            <motion.p variants={itemVariants} className="text-slate-600 text-base leading-relaxed font-normal">
              <strong>DIB Education System</strong> is an approved study centre delivering internationally recognized UK qualifications, including Level 3 Foundation Programmes. We provide complete academic guidance, high-quality learning resources, and structured pathways to help students progress directly into top universities and higher education.
            </motion.p>

            {/* Animated Key Features Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {keyFeatures.map((feature, idx) => (
                <motion.div 
                  key={idx} 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-2.5 bg-white p-2.5 rounded-xl border border-slate-100 shadow-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#E87722] shrink-0 mt-0.5" />
                  <span className="text-xs font-bold text-slate-800">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Animated Stats Row with Live Counter */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Icon className="w-5 h-5 text-[#E87722]" />
                      <span className="text-2xl sm:text-3xl font-black text-slate-900">
                        <AnimatedCounter value={stat.value} />
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-slate-500">{stat.label}</p>
                  </div>
                );
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#qualifications"
                className="inline-flex items-center gap-2 bg-[#008BC5] hover:bg-[#E87722] text-white px-7 py-3 rounded-xl text-sm font-extrabold shadow-md hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Explore Qualifications</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 px-6 py-3 rounded-xl text-sm font-bold transition-colors"
              >
                <span>Contact DIB Team</span>
              </a>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;