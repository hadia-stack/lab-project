"use client";

import React from "react";
import {
  Target,
  Lightbulb,
  MessageSquareText,
  Search,
  Kanban,
  Calculator,
  Megaphone,
  Briefcase,
  CheckCircle2,
  Award,
} from "lucide-react";

export const LearningOutcomesSection: React.FC = () => {
  const learningOutcomes = [
    {
      id: "PLO-01",
      title: "Business Environment & Ethics",
      desc: "Understand foundational commercial principles, corporate regulatory frameworks, and ethical business practices.",
      icon: Briefcase,
    },
    {
      id: "PLO-02",
      title: "Market Analysis & Innovation",
      desc: "Assess commercial opportunities and potential ventures through strategic research, original thinking, and innovation.",
      icon: Lightbulb,
    },
    {
      id: "PLO-03",
      title: "Professional Communication",
      desc: "Express ideas articulately across academic and corporate settings using structured writing, compelling pitches, and confident presentations.",
      icon: MessageSquareText,
    },
    {
      id: "PLO-04",
      title: "Academic Research & Integrity",
      desc: "Apply advanced information retrieval, proper citation methodologies, and rigorous academic integrity standards.",
      icon: Search,
    },
    {
      id: "PLO-05",
      title: "Enterprise & Project Planning",
      desc: "Utilize venture management techniques to execute, monitor, and assess strategic organizational initiatives.",
      icon: Kanban,
    },
    {
      id: "PLO-06",
      title: "Financial Strategy & Budgeting",
      desc: "Construct comprehensive financial models through precise budgeting, investment evaluation, and quantitative data analysis.",
      icon: Calculator,
    },
    {
      id: "PLO-07",
      title: "Digital Marketing & Branding",
      desc: "Formulate digital brand strategies while adhering to ethical standards, legal constraints, and target market dynamics.",
      icon: Megaphone,
    },
    {
      id: "PLO-08",
      title: "Integrated Venture Planning",
      desc: "Combine strategic vision with operational execution to build complete business models encompassing finance, marketing, and compliance.",
      icon: Target,
    },
  ];

  return (
    <section id="programme-learning-outcomes" className="py-16 bg-slate-50 text-slate-900 relative overflow-hidden">
      {/* Background Lighting Accents */}
      <div className="absolute top-1/3 -right-20 w-[30rem] h-[30rem] bg-blue-100/50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-[30rem] h-[30rem] bg-amber-100/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-950 text-xs font-bold uppercase tracking-wider">
            Competencies & Skills
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-blue-950 tracking-tight">
            Programme Learning Outcomes
          </h2>
          <div className="w-20 h-1.5 bg-amber-500 mx-auto rounded-full mt-2" />
          <p className="text-slate-600 text-sm sm:text-base font-medium pt-2">
            Candidates demonstrate mastery of these core competencies upon successful completion of all academic modules.
          </p>
        </div>

        {/* Outcomes 2x4 Grid Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {learningOutcomes.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white border border-slate-200 hover:border-amber-400/80 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-blue-950 text-amber-400 flex items-center justify-center font-bold shadow-sm group-hover:scale-105 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-black tracking-widest text-slate-400 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                      {item.id}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-blue-950 group-hover:text-blue-900 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-2 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-amber-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" />
                  <span>Verified Competency</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Center Institutional Endorsement Banner */}
        <div className="bg-blue-950 text-white rounded-3xl p-6 sm:p-8 border border-blue-900 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-blue-950 flex items-center justify-center shrink-0 shadow-lg font-black">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-extrabold text-white">
                Approved Study Centre Excellence
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Delivered under standardized academic guidelines to ensure universal qualification equity.
              </p>
            </div>
          </div>

          <div className="shrink-0">
            <span className="inline-block bg-blue-900/80 border border-blue-800 text-amber-300 text-xs font-bold px-4 py-2 rounded-xl">
              100% Outcome Assessment Aligned
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LearningOutcomesSection;