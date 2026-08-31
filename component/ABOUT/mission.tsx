"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {
  Target,
  Compass,
  Sparkles,
  CheckCircle2,
  Lightbulb,
  GraduationCap,
} from "lucide-react";

export const VisionMissionSection: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  return (
    <section id="vision-mission" className="py-24 bg-slate-50 text-slate-900 relative overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-1/3 -left-20 w-[35rem] h-[35rem] bg-sky-200/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-[35rem] h-[35rem] bg-blue-100/50 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-black tracking-wider uppercase backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>DIB Direction & Purpose</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Vision & Mission
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Building knowledge & skills for tomorrow by empowering learners with world-class UK educational pathways.
          </p>
        </motion.div>

        {/* Vision & Mission Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch"
        >
          {/* Our Vision Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8 }}
            className="group bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-sky-500/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-500" />
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
                  <Compass className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
                  Future Focused
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Our Vision
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  To be a premier international awarding body recognized globally for accessible, high-quality, and transformative UK-aligned qualifications that shape future-ready leaders.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {[
                  "Global Academic Alignment",
                  "Accessible Excellence",
                  "Industry-Relevant Skills",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4.5 h-4.5 text-sky-600 shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Distinct Image: University Students Collaboration */}
            <div className="relative h-[220px] w-full rounded-2xl overflow-hidden mt-8 border border-slate-200 shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000"
                alt="Students collaborating in modern university"
                fill
                unoptimized
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-xs font-bold text-white">
                <GraduationCap className="w-4 h-4 text-sky-400" />
                <span>Global Higher Education Pathways</span>
              </div>
            </div>
          </motion.div>

          {/* Our Mission Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8 }}
            className="group bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-500" />

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Target className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                  Action Driven
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Our Mission
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  To design and deliver Level 3 Foundation Programmes that bridge secondary education with higher university studies, fostering critical thinking, practical skills, and lifelong learning.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {[
                  "Rigorous Quality Assurance",
                  "Flexible Learning Networks",
                  "Direct University Progression",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Lightbulb className="w-4.5 h-4.5 text-blue-600 shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Distinct Image: Modern Academic Study Space */}
            <div className="relative h-[220px] w-full rounded-2xl overflow-hidden mt-8 border border-slate-200 shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000"
                alt="Students studying in academic environment"
                fill
                unoptimized
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-xs font-bold text-white">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Fostering Innovation & Academic Rigour</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMissionSection;