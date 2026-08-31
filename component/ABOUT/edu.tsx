"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  CheckCircle2,
  Award,
  Globe2,
  Sparkles,
  Laptop,
  Briefcase,
  Scale,
  Calculator,
  Megaphone,
  Building2,
  GraduationCap,
} from "lucide-react";

type PathwayType = "computing" | "business" | "law" | "finance" | "marketing";

export const EducationalContextSection: React.FC = () => {
  const [activePathway, setActivePathway] = useState<PathwayType>("computing");

  const pathwaysData = {
    computing: {
      id: "computing",
      badge: "In-Demand Tech",
      title: "Freelancing, Computing & AI",
      description:
        "Equipping young learners with practical coding, artificial intelligence concepts, and freelance marketplace strategies to access global remote careers.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400",
      icon: Laptop,
    },
    business: {
      id: "business",
      badge: "Innovation",
      title: "Entrepreneurship & Start-ups",
      description:
        "Fostering an entrepreneurial mindset with practical business setup, incubation insights, and startup funding strategies tailored for Pakistan.",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=400",
      icon: Briefcase,
    },
    law: {
      id: "law",
      badge: "Legal Foundations",
      title: "Law & Legal Studies",
      description:
        "Building critical thinking and foundational legal skills aligned with UK higher education and local regulatory frameworks.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=400",
      icon: Scale,
    },
    finance: {
      id: "finance",
      badge: "Financial Literacy",
      title: "Accounting & Finance",
      description:
        "Industry-relevant accounting standards and financial management skills for corporate placement and freelancing.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=400",
      icon: Calculator,
    },
    marketing: {
      id: "marketing",
      badge: "Digital Growth",
      title: "Digital Marketing",
      description:
        "Modern branding, performance marketing, social media strategies, and content creation for urban and semi-urban businesses.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400",
      icon: Megaphone,
    },
  };

  const recognitions = [
    {
      title: "ISM Education Endorsed",
      desc: "LAB courses are officially endorsed by ISM Education.",
      icon: Award,
    },
    {
      title: "UN TVET Framework",
      desc: "Guided by United Nations TVET standards for vocational excellence.",
      icon: Globe2,
    },
    {
      title: "UK Level 3 Aligned",
      desc: "Fully aligned with UK Level 3 Foundation Programme frameworks.",
      icon: GraduationCap,
    },
    {
      title: "IBCC Awarded QAB Status",
      desc: "QAB status awarded by Inter Board Committee & Coordination (IBCC).",
      icon: ShieldCheck,
    },
    {
      title: "UK QAA / FHEQ Benchmarked",
      desc: "Reflected with UK Quality Assurance Agency’s FHEQ standards.",
      icon: Building2,
    },
  ];

  const currentPathway = pathwaysData[activePathway];

  return (
    <section id="educational-context" className="py-20 bg-slate-50 text-slate-900 relative overflow-hidden">
      {/* Background Lighting Accents */}
      <div className="absolute top-0 right-1/4 w-[35rem] h-[35rem] bg-amber-200/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[30rem] h-[30rem] bg-orange-200/30 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-orange-700 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Empowering Young Learners</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-blue-950 tracking-tight">
            Educational Context & Global Alignment
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
            Pakistan has one of the youngest populations globally; however, many learners face limited access to academic pathways aligned with international standards. LAB’s Level 3 Foundation programmes bridge this gap by combining academic rigour with practical, industry-relevant learning tailored for urban and semi-urban learners.
          </p>
        </div>

        {/* Section 1: Pathways Interactive Selector */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-blue-950">
              Diverse Academic Pathways
            </h3>
            <span className="text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Industry Relevant
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
            {(Object.keys(pathwaysData) as PathwayType[]).map((key) => {
              const item = pathwaysData[key];
              const isActive = activePathway === key;
              const IconComp = item.icon;

              return (
                <button
                  key={key}
                  onClick={() => setActivePathway(key)}
                  className={`flex flex-col items-start p-3.5 rounded-xl border transition-all duration-300 relative overflow-hidden ${
                    isActive
                      ? "bg-white border-orange-500 shadow-lg shadow-amber-500/10 ring-2 ring-orange-500/20"
                      : "bg-white/80 border-slate-200 hover:bg-white hover:border-amber-400"
                  }`}
                >
                  <div className="flex items-center gap-2.5 mb-2 w-full">
                    <div className="relative w-8 h-8 rounded-lg overflow-hidden shrink-0 border border-slate-200">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        unoptimized
                        className="object-cover"
                      />
                    </div>
                    <IconComp className={`w-4 h-4 ${isActive ? "text-orange-500" : "text-slate-400"}`} />
                  </div>
                  <h4 className={`text-xs font-bold text-left line-clamp-1 ${isActive ? "text-blue-950" : "text-slate-700"}`}>
                    {item.title}
                  </h4>
                </button>
              );
            })}
          </div>

          {/* Active Pathway Details Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePathway}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-md flex flex-col md:flex-row gap-6 items-center"
            >
              <div className="relative w-full md:w-48 h-36 rounded-xl overflow-hidden shrink-0 border border-slate-200 shadow-inner">
                <Image
                  src={currentPathway.image}
                  alt={currentPathway.title}
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
              <div className="space-y-2 flex-1">
                <span className="text-xs font-black uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                  {currentPathway.badge}
                </span>
                <h4 className="text-xl font-bold text-blue-950 pt-1">
                  {currentPathway.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {currentPathway.description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Section 2: Global Alignments & Accreditations */}
        <div className="bg-blue-950 text-white rounded-3xl p-8 sm:p-12 border border-blue-900 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-3xl mb-10 space-y-2">
            <p className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Recognized & Endorsed Standards
            </p>
            <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              LAB Qualifications Framework
            </h3>
            <p className="text-slate-300 text-sm sm:text-base">
              Engineered with premier local and international benchmarking agencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recognitions.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-blue-900/40 border border-blue-800/80 hover:border-amber-400/50 p-5 rounded-2xl transition-all duration-300 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 text-blue-950 flex items-center justify-center shrink-0 font-bold shadow-md">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h5 className="text-sm font-bold text-white">{item.title}</h5>
                    <p className="text-xs text-slate-300 leading-normal">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Tagline Footer */}
          <div className="mt-12 pt-8 border-t border-blue-900/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-amber-400 text-sm font-semibold">
              <CheckCircle2 className="w-4 h-4 text-orange-400" />
              <span>Tailored for Pakistan's Socio-Economic Context</span>
            </div>
            <div className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-white tracking-wide">
              Your future, your way.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EducationalContextSection;