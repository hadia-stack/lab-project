"use client";

import React from "react";
import {
  FileText,
  Award,
  CheckCircle2,
  HeartHandshake,
  TrendingUp,
  Plus,
  Sparkles,
  ShieldAlert,
} from "lucide-react";

export const AssessmentGradingSection: React.FC = () => {
  const gradingScale = [
    { grade: "Distinction (D)", percentage: "70% or above", status: "Outstanding Performance", color: "bg-emerald-50 text-emerald-800 border-emerald-200" },
    { grade: "Merit (M)", percentage: "60% – 69%", status: "Commendable Performance", color: "bg-blue-50 text-blue-800 border-blue-200" },
    { grade: "Pass (P)", percentage: "50% – 59%", status: "Satisfactory Mastery", color: "bg-amber-50 text-amber-800 border-amber-200" },
    { grade: "Near Pass (N)", percentage: "40% – 49%", status: "Marginal Non-Pass", color: "bg-orange-50 text-orange-800 border-orange-200" },
    { grade: "Unclassified (U)", percentage: "Below 40%", status: "Insufficient Progress", color: "bg-rose-50 text-rose-800 border-rose-200" },
  ];

  return (
    <section id="assessment-grading" className="py-16 bg-slate-50 text-slate-900 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Main Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Academic Evaluation & Governance</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-blue-950 tracking-tight">
            Assessment & Grading Criteria
          </h2>
          <div className="w-20 h-1.5 bg-amber-500 mx-auto rounded-full mt-2" />
        </div>

        {/* Top Info Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Assessment Procedures Brief */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-950 text-amber-400 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-blue-950">Module-Specific Evaluation Briefs</h3>
                  <p className="text-xs text-slate-500">Transparent guidelines & assessment rubrics</p>
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                Alongside core module descriptors, students receive comprehensive evaluation briefs detailing precise task goals, grading rubrics, submission workflows, and academic integrity policies.
              </p>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-2xl flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-600 leading-snug">
                <strong className="text-blue-950">Awarding Requirement:</strong> Candidates must achieve a minimum score of <span className="font-bold text-amber-700">50% (Pass)</span> in every individual module to qualify for the final certification.
              </p>
            </div>
          </div>

          {/* Awarding & Accreditation Alignment */}
          <div className="lg:col-span-5 bg-blue-950 text-white rounded-3xl p-6 sm:p-8 border border-blue-900 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900 border border-blue-800 text-amber-300 text-xs font-bold">
                <Award className="w-4 h-4 text-amber-400" />
                <span>UK Qualification Framework</span>
              </div>

              <h3 className="text-xl font-extrabold text-white">
                Global & National Academic Alignment
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Benchmarked against A-Levels, BTEC Nationals, and Access to HE Diplomas in England. Equivalent to Pakistan’s Higher Secondary School Certificate (HSSC), classified at Level 4 on NQF.
              </p>
            </div>

            <div className="pt-4 border-t border-blue-900/80 text-xs text-slate-300">
              Awarded officially by the <strong className="text-amber-400">London Assessment Board (LAB), UK</strong>.
            </div>
          </div>

        </div>

        {/* Programme Grading Scale Table */}
        <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <h3 className="text-xl font-bold text-blue-950">Programme Grading Scale</h3>
            <span className="text-xs font-semibold text-slate-400">Pass Threshold: 50%</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-blue-950 text-xs font-bold uppercase tracking-wider border-b border-slate-200">
                  <th className="py-3 px-4">Grade Classification</th>
                  <th className="py-3 px-4">Percentage Score</th>
                  <th className="py-3 px-4">Performance Descriptor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {gradingScale.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-blue-950">
                      {item.grade}
                    </td>
                    <td className="py-3.5 px-4 font-extrabold text-amber-700">
                      {item.percentage}
                    </td>
                    <td className="py-3.5 px-4">
                      <span className={`inline-block px-2.5 py-1 rounded-md text-xs font-bold border ${item.color}`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Future Sections with Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          
          {/* Section Option 1: Academic Support and Wellbeing */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between hover:border-amber-400 transition-all group">
            <div className="space-y-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-950 flex items-center justify-center font-bold border border-blue-100 group-hover:bg-blue-950 group-hover:text-amber-400 transition-colors">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-blue-950">
                Academic Support & Wellbeing
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Comprehensive pastoral guidance, interactive mentoring, and dedicated student health resources throughout your study journey.
              </p>
            </div>

            <button className="w-full py-3 px-4 rounded-2xl bg-blue-950 hover:bg-blue-900 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md active:scale-95">
              <Plus className="w-4 h-4 text-amber-400" />
              <span>Explore Support & Wellbeing</span>
            </button>
          </div>

          {/* Section Option 2: Progression Routes */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between hover:border-amber-400 transition-all group">
            <div className="space-y-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-900 flex items-center justify-center font-bold border border-amber-100 group-hover:bg-amber-500 group-hover:text-blue-950 transition-colors">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-blue-950">
                Progression Routes
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Direct pathways into 1st Year University Degrees, UK Level 4 Higher Diplomas, and worldwide academic advancement.
              </p>
            </div>

            <button className="w-full py-3 px-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-blue-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md active:scale-95">
              <Plus className="w-4 h-4 text-blue-950" />
              <span>View Progression Routes</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AssessmentGradingSection;