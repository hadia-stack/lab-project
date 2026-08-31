"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  BookOpen,
  Sparkles,
  CheckCircle2,
  Briefcase,
  Rocket,
  TrendingUp,
  GraduationCap,
  ArrowRight,
  Building2,
} from "lucide-react";

export const BusinessCourseSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"overview" | "modules" | "outcomes">("overview");

  const courseData = {
    badge: "Featured Course",
    category: "Courses",
    title: "LAB Level 3 Foundation Programme in Business, Enterprise and Creation Management",
    subtitle: "A practical UK-aligned foundation designed to equip future entrepreneurs and business leaders with core commercial skills.",
    duration: "1 Year / Full-Time & Hybrid",
    qualificationLevel: "Level 3 Foundation",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1200",
    
    modules: [
      { code: "BUS-301", name: "Principles of Business & Management", credits: "20 Credits" },
      { code: "ENT-302", name: "Enterprise Creation & Innovation", credits: "20 Credits" },
      { code: "MKT-303", name: "Digital Marketing & Brand Strategy", credits: "20 Credits" },
      { code: "FIN-304", name: "Financial Planning & Accounting Fundamentals", credits: "20 Credits" },
      { code: "LDR-305", name: "Leadership, Team & Operations Management", credits: "20 Credits" },
      { code: "PRO-306", name: "Final Business Creation Capstone Project", credits: "20 Credits" },
    ],

    highlights: [
      "Direct pathway into Year 1 UK & global university degrees",
      "Hands-on startup incubation and business plan execution",
      "Practical focus on freelancing, remote business, and corporate management",
      "Endorsed and benchmarked with international quality standards",
    ],

    outcomes: [
      { title: "University Progression", desc: "Seamless entry into global bachelor degree programs in Business & Finance.", icon: GraduationCap },
      { title: "Startup Incubation", desc: "Launch your own enterprise with guided mentorship during the capstone project.", icon: Rocket },
      { title: "Corporate Readiness", desc: "Prepare for entry-level managerial, marketing, and operations roles.", icon: Building2 },
      { title: "Freelance Enterprise", desc: "Build independent consulting and business management services.", icon: TrendingUp },
    ],
  };

  return (
    <section id="course-business" className="py-20 bg-slate-50 text-slate-900 relative overflow-hidden">
      {/* Background Lighting Accents */}
      <div className="absolute top-1/4 -right-20 w-[35rem] h-[35rem] bg-amber-200/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-[30rem] h-[30rem] bg-orange-200/30 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Course Header Banner */}
        <div className="bg-blue-950 text-white rounded-3xl p-8 sm:p-12 border border-blue-900 shadow-2xl mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Header Left Info */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-500/20 border border-orange-400/30 text-orange-400 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  {courseData.category}
                </span>
                <span className="px-3.5 py-1 rounded-full bg-blue-900 text-amber-400 text-xs font-bold border border-blue-800">
                  {courseData.qualificationLevel}
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight text-white">
                {courseData.title}
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
                {courseData.subtitle}
              </p>

              {/* Quick Spec Pills */}
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-slate-300">
                <div className="bg-blue-900/60 border border-blue-800 px-3.5 py-2 rounded-xl flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-orange-400" />
                  <span>120 Total Credits</span>
                </div>
                <div className="bg-blue-900/60 border border-blue-800 px-3.5 py-2 rounded-xl flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-amber-400" />
                  <span>{courseData.duration}</span>
                </div>
              </div>
            </div>

            {/* Header Right Image Card */}
            <div className="lg:col-span-5">
              <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden border border-blue-800 shadow-xl">
                <Image
                  src={courseData.image}
                  alt={courseData.title}
                  fill
                  unoptimized
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-xs font-bold text-amber-300 bg-blue-950/80 backdrop-blur-md p-3 rounded-xl border border-blue-800">
                  Empowering future entrepreneurs across Pakistan.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Details Tab Navigation */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-md">
          <div className="flex border-b border-slate-200 mb-8 space-x-6">
            <button
              onClick={() => setActiveTab("overview")}
              className={`pb-3 text-sm font-bold border-b-2 transition-all ${
                activeTab === "overview"
                  ? "border-orange-500 text-blue-950"
                  : "border-transparent text-slate-500 hover:text-slate-900"
              }`}
            >
              Course Overview
            </button>
            <button
              onClick={() => setActiveTab("modules")}
              className={`pb-3 text-sm font-bold border-b-2 transition-all ${
                activeTab === "modules"
                  ? "border-orange-500 text-blue-950"
                  : "border-transparent text-slate-500 hover:text-slate-900"
              }`}
            >
              Modules & Curriculum
            </button>
            <button
              onClick={() => setActiveTab("outcomes")}
              className={`pb-3 text-sm font-bold border-b-2 transition-all ${
                activeTab === "outcomes"
                  ? "border-orange-500 text-blue-950"
                  : "border-transparent text-slate-500 hover:text-slate-900"
              }`}
            >
              Career & Progression
            </button>
          </div>

          {/* Tab Content 1: Overview */}
          {activeTab === "overview" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              <h3 className="text-xl font-bold text-blue-950">Why Choose This Programme?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {courseData.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200/80">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Tab Content 2: Modules */}
          {activeTab === "modules" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <h3 className="text-xl font-bold text-blue-950 mb-4">Core Programme Modules</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {courseData.modules.map((mod, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded border border-orange-200">
                        {mod.code}
                      </span>
                      <span className="text-xs font-semibold text-slate-500">{mod.credits}</span>
                    </div>
                    <h4 className="text-sm font-bold text-blue-950">{mod.name}</h4>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Tab Content 3: Outcomes */}
          {activeTab === "outcomes" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {courseData.outcomes.map((out, idx) => {
                const IconComp = out.icon;
                return (
                  <div key={idx} className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
                    <div className="w-9 h-9 rounded-xl bg-blue-950 text-amber-400 flex items-center justify-center font-bold">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-blue-950">{out.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{out.desc}</p>
                  </div>
                );
              })}
            </motion.div>
          )}

          {/* Enroll Button Bottom */}
          <div className="mt-8 pt-6 border-t border-slate-200 flex justify-end">
            <a
              href="#apply"
              className="inline-flex items-center gap-2 bg-blue-950 hover:bg-blue-900 text-white font-bold px-6 py-3 rounded-xl shadow-md transition-all text-sm group"
            >
              <span>Apply For This Course</span>
              <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BusinessCourseSection;