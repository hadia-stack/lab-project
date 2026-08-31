"use client";

import React, { useState } from "react";
import {
  GraduationCap,
  FileCheck,
  Target,
  Truck,
  Layers,
  Award,
  CheckCircle2,
} from "lucide-react";

type TabType = "overview" | "requirements" | "outcomes" | "delivery" | "structure";

export const QualificationOverviewSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("overview");

  // Rewritten Metadata
  const overviewMetaData = [
    { label: "Course Name", value: "LAB Level 3 Foundation Diploma in Business, Enterprise and Creation Management" },
    { label: "Accreditation Status", value: "(QAB) Inter Board Coordination Commission Pakistan Recognized" },
    { label: "Total Credit Value", value: "180 Credits" },
    { label: "Course Code", value: "LAB/L3BM180/26" },
    { label: "Academic Pathway", value: "Direct Entry to Year 1 Undergraduate Degree or Level 4 Qualifications" },
  ];

  const tabsConfig = [
    { id: "overview", label: "Qualification Overview", icon: GraduationCap },
    { id: "requirements", label: "Entry Requirements", icon: FileCheck },
    { id: "outcomes", label: "Learning Outcomes", icon: Target },
    { id: "delivery", label: "Delivery Model", icon: Truck },
    { id: "structure", label: "Programme Structure", icon: Layers },
  ];

  return (
    <section className="py-16 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Center Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider">
            Academic Insights
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-blue-950 tracking-tight">
            Qualification Overview
          </h2>
          <div className="w-20 h-1.5 bg-amber-500 mx-auto rounded-full mt-2" />
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 border-b border-slate-200 pb-4 mb-10">
          {tabsConfig.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 ${
                  isActive
                    ? "bg-blue-950 text-white shadow-md"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-amber-400" : "text-slate-400"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: Qualification Overview (Rewritten Vocabulary) */}
        {activeTab === "overview" && (
          <div className="space-y-10">
            {/* Header Content */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-wider">
                <Award className="w-4 h-4 text-amber-500" />
                <span>Summary</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-blue-950 tracking-tight">
                Level 3 Foundation Programme in Business, Enterprise and Creation Management
              </h3>

              <div className="prose prose-slate max-w-none text-slate-600 text-base leading-relaxed space-y-4">
                <p>
                  The Level 3 Foundation Programme in Business, Enterprise and Creation Management is specifically crafted to empower students with essential commercial expertise, practical expertise, and a forward-thinking entrepreneurial perspective crucial for success in today’s fast-paced market. This course holds immense relevance for Pakistan, a nation where over two-thirds of the demographic is under 30 years old and enthusiasm for independent ventures, digital freelancing, and start-up initiatives is rapidly expanding—particularly across e-commerce platforms, online service sectors, and localized manufacturing enterprises.
                </p>
                <p>
                  Spanning a total of 180 academic credits, this comprehensive curriculum blends foundational business practices with innovative, practical modules. It empowers candidates to cultivate commercial ideas, oversee daily operational workflows, and scale sustainable businesses effectively, all tailored to address Pakistan’s distinctive socio-economic realities in both metropolitan and emerging semi-urban communities.
                </p>
                <p>
                  By analyzing real-life industry case studies and engaging in practical project assignments, candidates gain the resilience needed to tackle operational hurdles—such as resource constraints, compliance regulations, and market rivalry—while simultaneously taking advantage of fresh economic opportunities.
                </p>
              </div>
            </div>

            {/* Metadata Cards */}
            <div>
              <h4 className="text-xl font-bold text-blue-950 mb-4 px-1">
                Programme Specifications
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {overviewMetaData.map((meta, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:border-amber-400 transition-colors space-y-1"
                  >
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      {meta.label}
                    </span>
                    <p className="text-sm font-bold text-blue-950 leading-snug">
                      {meta.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Entry Requirements (Rewritten) */}
        {activeTab === "requirements" && (
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
            <h3 className="text-2xl font-bold text-blue-950">Admission Criteria</h3>
            <ul className="space-y-3 text-slate-600 text-sm sm:text-base">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span>Completion of Matriculation, Cambridge O-Levels, Intermediate, or an equivalent high school credential.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span>Functional command over spoken and written English communication.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span>Strong motivation toward business creation, digital commerce, or commercial management.</span>
              </li>
            </ul>
          </div>
        )}

        {/* Tab 3: Learning Outcomes (Rewritten) */}
        {activeTab === "outcomes" && (
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
            <h3 className="text-2xl font-bold text-blue-950">Key Educational Objectives</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Formulate actionable business proposals tailored to domestic and international marketplace dynamics.",
                "Execute essential financial strategies, marketing frameworks, and administrative management processes.",
                "Leverage modern tech platforms and e-commerce models to expand start-ups and independent freelancing work.",
                "Apply analytical problem-solving skills to navigate legal, regulatory, and budgetary limitations.",
              ].map((outcome, idx) => (
                <div key={idx} className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-950 text-amber-400 text-xs font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </div>
                  <p className="text-sm font-semibold text-slate-700">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Delivery Model (Rewritten) */}
        {activeTab === "delivery" && (
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
            <h3 className="text-2xl font-bold text-blue-950">Delivery Framework in Pakistan</h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Structured to accommodate learners across both urban centers and semi-urban regions throughout Pakistan. The delivery incorporates flexible hybrid learning, practical interactive workshops, and accessible online educational materials designed for modern academic needs.
            </p>
          </div>
        )}

        {/* Tab 5: Structure (Rewritten) */}
        {activeTab === "structure" && (
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
            <h3 className="text-2xl font-bold text-blue-950">Curriculum Architecture</h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              A comprehensive 180-credit academic framework encompassing core business modules, interactive venture-creation projects, and applied regional case studies.
            </p>
          </div>
        )}

      </div>
    </section>
  );
};

export default QualificationOverviewSection;