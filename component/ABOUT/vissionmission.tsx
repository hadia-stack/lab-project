"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Target,
  Compass,
  Sparkles,
  CheckCircle2,
  Award,
  Globe2,
  ArrowRight,
  GraduationCap,
} from "lucide-react";

type SectionType = "vision" | "mission";

export const DIBVisionMissionInteractive: React.FC = () => {
  const [activeTab, setActiveTab] = useState<SectionType>("vision");

  const sectionContent = {
    vision: {
      badge: "Our Future Roadmap",
      title: "Pioneering Accessible UK Qualifications Worldwide",
      description:
        "To become a globally distinguished international awarding body, breaking traditional barriers in higher education by offering accessible, high-standard UK-aligned pathways that prepare students for global career success.",
      highlights: [
        "Globally Accredited Level 3 Foundation & Higher Qualifications",
        "Seamless University Progression to Top UK & Global Destinations",
        "Industry-Oriented Curriculum Focused on Practical Mastery",
      ],
      metricLabel: "Academic Standard",
      metricValue: "UK Ofqual Aligned Pathways",
      image:
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1200",
      imageTag: "International Student Community",
    },
    mission: {
      badge: "Our Strategic Impact",
      title: "Bridging Academics with Real-World Success",
      description:
        "To empower learners through flexible, quality-assured Level 3 Foundation Programmes that build critical thinking, academic rigor, and practical expertise required for smooth transition into top-tier university degrees.",
      highlights: [
        "Comprehensive Support for International Study Pathways",
        "Skill-Based Learning Networks for Next-Gen Leaders",
      ],
      metricLabel: "Progression Focus",
      metricValue: "100% University Transition Ready",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200",
      imageTag: "Higher Academic Research & Collaboration",
    },
  };

  const activeData = sectionContent[activeTab];

  return (
    <section id="vision-mission" className="py-24 bg-gradient-to-b from-white via-sky-50/30 to-slate-100 text-slate-900 relative overflow-hidden">
      {/* Background Lighting Accents */}
      <div className="absolute top-1/3 -left-20 w-[40rem] h-[40rem] bg-sky-200/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-[35rem] h-[35rem] bg-blue-200/30 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header & Tab Toggle Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-8 border-b border-slate-200">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/80 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>DIB Purpose & Strategic Vision</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Vision And Mission
            </h2>
            <p className="text-slate-600 text-base sm:text-lg font-semibold">
              Building knowledge & skills for tomorrow
            </p>
          </div>

          {/* Custom Pill Switcher */}
          <div className="flex items-center p-1.5 bg-slate-200/80 rounded-2xl shrink-0 border border-slate-300/80 shadow-inner">
            <button
              onClick={() => setActiveTab("vision")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                activeTab === "vision"
                  ? "bg-slate-900 text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
              }`}
            >
              <Compass className="w-4 h-4 text-sky-400" />
              <span>Our Vision</span>
            </button>
            <button
              onClick={() => setActiveTab("mission")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                activeTab === "mission"
                  ? "bg-slate-900 text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
              }`}
            >
              <Target className="w-4 h-4 text-sky-400" />
              <span>Our Mission</span>
            </button>
          </div>
        </div>

        {/* Content & Visual Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-black uppercase tracking-widest text-sky-700 bg-sky-100 px-3.5 py-1.5 rounded-md border border-sky-200">
                  {activeData.badge}
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                  {activeData.title}
                </h3>
                
                <p className="text-slate-900 font-semibold text-base sm:text-lg leading-relaxed pt-1">
                  {activeData.description}
                </p>
              </div>

              {/* Checklist */}
              <div className="space-y-3.5">
                {activeData.highlights.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * idx }}
                    className="flex items-center gap-3.5 bg-white border border-slate-200 p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-8 h-8 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 border border-sky-100">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <span className="text-sm sm:text-base font-bold text-slate-800">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Specs */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
                <div className="flex items-center gap-3">
                  <Globe2 className="w-5 h-5 text-sky-600" />
                  <span className="text-xs font-bold text-slate-700">UK Qualification Standards</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-sky-600" />
                  <span className="text-xs font-bold text-slate-700">Global University Entry</span>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-[380px] sm:h-[450px] w-full rounded-3xl overflow-hidden border border-slate-200/80 shadow-2xl group">
                <Image
                  src={activeData.image}
                  alt={activeData.imageTag}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md border border-white/60 rounded-2xl p-4 shadow-xl flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 text-sky-400 flex items-center justify-center shadow-md">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-wider text-slate-500">
                        {activeData.metricLabel}
                      </p>
                      <p className="text-sm font-black text-slate-900">
                        {activeData.metricValue}
                      </p>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default DIBVisionMissionInteractive;