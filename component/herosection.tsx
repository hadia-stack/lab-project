"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, ShieldCheck, Globe } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const features = [
    'UK-registered awarding organisation',
    'Internationally comparable qualifications',
    'Academic & Quality Assurance Frameworks aligned with UK standards',
    'Equivalent to Higher Secondary School Certificate (HSSC/Intermediate) in Pakistan',
    'LAB Courses are Endorsed by ISM Education',
  ];

  return (
    <section className="relative pt-28 sm:pt-36 pb-20 bg-gradient-to-b from-blue-950 via-blue-900 to-slate-900 text-white overflow-hidden">
      {/* Subtle Background Glow Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-800/60 border border-blue-600/40 text-blue-200 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-sm">
              <Award className="w-4 h-4 text-blue-400" />
              <span>London Assessment Board (LAB)</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight sm:leading-tight">
              LAB Level 3 Foundation Programmes for progression to{' '}
              <span className="bg-gradient-to-r from-blue-300 via-sky-200 to-indigo-200 bg-clip-text text-transparent">
                Higher Education
              </span>
            </h1>

            {/* Description */}
            <p className="text-blue-100/90 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              LAB is a UK-registered organisation developing and delivering internationally recognised Level 3 Foundation Programmes tailored to prepare learners for higher education and professional development through approved study centres.
            </p>

            {/* Key Feature Bullets */}
            <div className="space-y-3 pt-2 text-left max-w-xl mx-auto lg:mx-0">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-blue-100/90 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Visual Image with Floating Animated Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center items-center mt-6 lg:mt-0"
          >
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Main Educational Image */}
              <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl shadow-blue-950/80">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop"
                  alt="Students studying at London Assessment Board university pathway"
                  className="w-full h-[380px] sm:h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent" />
              </div>

              {/* Floating Badge 1: Top Right (QAB / IBCC Approved) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -right-4 sm:-right-6 z-20 bg-white/95 text-gray-900 p-4 rounded-xl shadow-xl backdrop-blur-md border border-gray-100 flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-lg flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-gray-900">IBCC Recognized</h4>
                  <p className="text-[11px] text-gray-500 font-medium">Equivalence HSSC Standard</p>
                </div>
              </motion.div>

              {/* Floating Badge 2: Bottom Left (UK Framework) */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-6 -left-4 sm:-left-6 z-20 bg-white/95 text-gray-900 p-4 rounded-xl shadow-xl backdrop-blur-md border border-gray-100 flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-blue-100 text-blue-900 rounded-lg flex items-center justify-center shrink-0">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-gray-900">UK Standard Aligned</h4>
                  <p className="text-[11px] text-gray-500 font-medium">QAB Status Awarded</p>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;