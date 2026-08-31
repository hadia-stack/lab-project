"use client";

import React from "react";
import Image from "next/image";
import {
  Sparkles,
  CheckCircle2,
  Globe2,
  BookOpen,
  Calculator,
  Laptop,
  Scale,
  TrendingUp,
  BrainCircuit,
  Languages,
} from "lucide-react";

export const ProgrammeSuitabilitySection: React.FC = () => {
  const suitableForList = [
    {
      title: "Aspiring Entrepreneurs & Innovators",
      desc: "Individuals eager to cultivate sharp commercial insight and transform creative concepts into viable, long-term business enterprises.",
      icon: Sparkles,
    },
    {
      title: "Tech & AI Enthusiasts",
      desc: "Learners passionate about harnessing artificial intelligence, computing solutions, and modern digital ecosystems.",
      icon: BrainCircuit,
    },
    {
      title: "Finance & Legal Aspirants",
      desc: "Students seeking robust foundations in financial literacy, accounting standards, legal principles, and corporate governance.",
      icon: Scale,
    },
    {
      title: "Strategic & Leadership Minds",
      desc: "Future leaders focused on organizational strategy, marketing growth, and high-impact decision making.",
      icon: TrendingUp,
    },
  ];

  const coreCompetencies = [
    { title: "English Proficiency", detail: "Global medium of instruction & international assessment standards", icon: Languages },
    { title: "Quantitative Skills", detail: "Applied mathematics for commercial & financial decision-making", icon: Calculator },
    { title: "ICT Integration", detail: "Digital literacy & software tools embedded in daily coursework", icon: Laptop },
  ];

  const focusImages = [
    {
      url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600",
      alt: "Students collaborating on business strategy",
      label: "Strategic Collaboration",
    },
    {
      url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600",
      alt: "Student learning tech and AI tools",
      label: "Digital Innovation",
    },
  ];

  return (
    <section id="programme-suitability" className="py-16 bg-slate-50 text-slate-900 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-950 text-xs font-bold uppercase tracking-wider">
            Target Audience & Eligibility
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-blue-950 tracking-tight">
            Programme Suitability
          </h2>
          <div className="w-20 h-1.5 bg-amber-500 mx-auto rounded-full mt-2" />
        </div>

        {/* Top Feature Grid with Text & Side Images */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          
          {/* Content Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-medium">
                The Level 3 Foundation Frameworks across <span className="font-bold text-blue-950">Accounting & Finance, Computing & Artificial Intelligence, Law, Digital Marketing,</span> and <span className="font-bold text-blue-950">Business Enterprise & Venture Management</span> are tailored specifically for ambitious candidates who want to build strategic business acumen and convert innovative ideas into commercially sustainable enterprises.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Ideal applicants demonstrate a strong drive toward emerging technology, financial management, legal frameworks, corporate innovation, and forward-thinking executive leadership.
              </p>
            </div>

            {/* Suitability Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {suitableForList.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-amber-400 transition-all duration-200 flex items-start gap-3"
                  >
                    <div className="w-9 h-9 rounded-xl bg-blue-950 text-amber-400 flex items-center justify-center shrink-0">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-bold text-blue-950">{item.title}</h3>
                      <p className="text-xs text-slate-600 leading-snug">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Visual Images Column */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {focusImages.map((img, idx) => (
              <div
                key={idx}
                className="relative h-48 sm:h-56 rounded-2xl overflow-hidden border border-slate-200 shadow-md group"
              >
                <Image
                  src={img.url}
                  alt={img.alt}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                  <span className="text-xs font-bold tracking-wide uppercase text-amber-300">
                    {img.label}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Global Standard & Core Skills Banner */}
        <div className="bg-blue-950 text-white rounded-3xl p-6 sm:p-10 border border-blue-900 shadow-xl space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-blue-900/80 pb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                Foundational Skill Sets
              </span>
              <h3 className="text-xl sm:text-3xl font-extrabold text-white mt-1">
                Integrated Core Competencies & Global Language Standard
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/80 border border-blue-800 text-amber-300 text-xs font-bold shrink-0">
              <Globe2 className="w-4 h-4 text-amber-400" />
              <span>International Progression</span>
            </div>
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            The curriculum places critical emphasis on embedding functional <span className="text-amber-300 font-semibold">English Communication, Business Mathematics, and Information & Communications Technology (ICT)</span> into coursework and evaluation activities.
          </p>

          {/* Competency Badge Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            {coreCompetencies.map((comp, idx) => {
              const IconComp = comp.icon;
              return (
                <div
                  key={idx}
                  className="bg-blue-900/40 border border-blue-800/80 p-4 rounded-2xl flex items-start gap-3 hover:border-amber-400/50 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-amber-500 text-blue-950 flex items-center justify-center shrink-0 font-bold">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{comp.title}</h4>
                    <p className="text-xs text-slate-300 mt-0.5 leading-snug">{comp.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Medium of Instruction Note */}
          <div className="pt-4 flex items-center gap-3 text-xs text-slate-300 bg-blue-900/30 p-3.5 rounded-xl border border-blue-800/50">
            <BookOpen className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              <strong className="text-white">Medium of Instruction:</strong> All instructional lectures, course modules, and official evaluation tasks are conducted strictly in English to ensure worldwide academic recognition.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProgrammeSuitabilitySection;