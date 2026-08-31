"use client";

import React from "react";
import {
  FileCheck2,
  CheckCircle2,
  Users,
  Languages,
  Calculator,
  Laptop,
  ShieldCheck,
  GraduationCap,
  Sparkles,
} from "lucide-react";

export const EntryRequirementsSection: React.FC = () => {
  const primaryQualifications = [
    "Completion of at least five GCSEs (Grade 4/C or higher), OR",
    "Secondary School Certificate (SSC / Matriculation) or equal high school credential",
    "Open to applicants from any academic discipline—no prior business experience needed",
    "No age restrictions—welcoming both fresh school graduates and adult learners",
  ];

  const assessmentPillars = [
    {
      title: "Language & Literacy",
      focus: "English comprehension, writing, and communication abilities",
      icon: Languages,
    },
    {
      title: "Numeracy Skills",
      focus: "Fundamental mathematics and logical analytical skills",
      icon: Calculator,
    },
    {
      title: "Digital Competency",
      focus: "Basic ICT literacy, computer navigation, and digital tools",
      icon: Laptop,
    },
  ];

  return (
    <section id="entry-requirements" className="py-16 bg-slate-50 text-slate-900 relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-950 text-xs font-bold uppercase tracking-wider">
            Admissions & Eligibility
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-blue-950 tracking-tight">
            Entry Requirements
          </h2>
          <div className="w-20 h-1.5 bg-amber-500 mx-auto rounded-full mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Academic Background Card */}
          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-950 text-amber-400 flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-950">Academic Prerequisites</h3>
                <p className="text-xs text-slate-500">General qualification benchmarks</p>
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">
              To enrol in this programme, candidates are expected to fulfill basic academic standards. Previous exposure to commercial or business studies is not obligatory.
            </p>

            <ul className="space-y-3">
              {primaryQualifications.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2 flex items-center gap-3 bg-blue-50/80 p-3.5 rounded-2xl border border-blue-100 text-xs font-medium text-blue-950">
              <Users className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Inclusive admissions policy: Open to diverse educational backgrounds and all age groups.</span>
            </div>
          </div>

          {/* Initial Assessment Mandatory Process */}
          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-blue-950 flex items-center justify-center shrink-0">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-950">Mandatory Initial Assessment</h3>
                <p className="text-xs text-slate-500">Enrolment readiness evaluation</p>
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">
              During registration, every applicant undergoes an initial diagnostic evaluation to confirm readiness across three essential skills. Candidates must demonstrate competence in each area:
            </p>

            <div className="space-y-3">
              {assessmentPillars.map((pillar, idx) => {
                const IconComp = pillar.icon;
                return (
                  <div key={idx} className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-blue-950 text-amber-400 flex items-center justify-center shrink-0">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-blue-950">{pillar.title}</h4>
                      <p className="text-xs text-slate-500">{pillar.focus}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Academic Support Plan Banner */}
        <div className="bg-blue-950 text-white rounded-3xl p-6 sm:p-8 border border-blue-900 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
              <Sparkles className="w-4 h-4" />
              <span>Personalized Academic Growth</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Targeted Learner Support & Guidance
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              If diagnostic assessments highlight specific learning needs, tailored academic development plans and dedicated support workshops are assigned to ensure every student reaches full proficiency.
            </p>
          </div>

          <div className="shrink-0 bg-blue-900/60 border border-blue-800 p-4 rounded-2xl text-center">
            <ShieldCheck className="w-8 h-8 text-amber-400 mx-auto mb-1" />
            <span className="text-xs font-bold text-slate-200 block">Assessment Pass Required</span>
            <span className="text-[10px] text-slate-400">All 3 modules mandatory</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EntryRequirementsSection;