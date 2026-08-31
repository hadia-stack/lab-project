"use client";

import React, { useState } from "react";
import {
  Layers,
  BookOpen,
  GraduationCap,
  Clock,
  Sparkles,
  Calendar,
} from "lucide-react";

interface ModuleData {
  unitCode: string;
  title: string;
  credits: number;
  level: number;
  tqt: number;
  glh: number;
  semester: number;
}

export const ProgrammeStructureSection: React.FC = () => {
  const [selectedSemester, setSelectedSemester] = useState<number | "all">("all");

  const modulesList: ModuleData[] = [
    {
      unitCode: "BM-U301",
      title: "Principles of Business and Enterprise",
      credits: 20,
      level: 3,
      tqt: 200,
      glh: 100,
      semester: 1,
    },
    {
      unitCode: "BM-U302",
      title: "Budget & Money Management",
      credits: 20,
      level: 3,
      tqt: 200,
      glh: 100,
      semester: 1,
    },
    {
      unitCode: "BM-U303",
      title: "Academic English for University Success",
      credits: 20,
      level: 3,
      tqt: 200,
      glh: 100,
      semester: 1,
    },
    {
      unitCode: "BM-U304",
      title: "Introduction to Managing Projects",
      credits: 20,
      level: 3,
      tqt: 200,
      glh: 100,
      semester: 2,
    },
    {
      unitCode: "BM-U305",
      title: "Legal and Ethical Considerations in Business",
      credits: 20,
      level: 3,
      tqt: 200,
      glh: 100,
      semester: 2,
    },
    {
      unitCode: "BM-U306",
      title: "Business Plan Writing & Pitching",
      credits: 20,
      level: 3,
      tqt: 200,
      glh: 100,
      semester: 2,
    },
    {
      unitCode: "BM-U307",
      title: "Digital Marketing & Branding for Startups",
      credits: 20,
      level: 3,
      tqt: 200,
      glh: 100,
      semester: 3,
    },
    {
      unitCode: "BM-U308",
      title: "Freelancing and Gig Economy Skills",
      credits: 20,
      level: 3,
      tqt: 200,
      glh: 100,
      semester: 3,
    },
    {
      unitCode: "BM-U309",
      title: "Innovation and Entrepreneurial Business Success",
      credits: 20,
      level: 3,
      tqt: 200,
      glh: 100,
      semester: 3,
    },
  ];

  const filteredModules =
    selectedSemester === "all"
      ? modulesList
      : modulesList.filter((m) => m.semester === selectedSemester);

  return (
    <section id="programme-structure" className="py-16 bg-slate-50 text-slate-900 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Curriculum Framework</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-blue-950 tracking-tight">
            Programme Structure
          </h2>
          <div className="w-20 h-1.5 bg-amber-500 mx-auto rounded-full mt-2" />
          <p className="text-slate-600 text-sm sm:text-base font-medium pt-2">
            The Level 3 Foundation Programme in Business, Enterprise and Creation Management consists of nine core modules spread across three balanced academic semesters, delivering a total of 180 credits.
          </p>
        </div>

        {/* Summary Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { label: "Total Semesters", val: "3 Semesters", icon: Calendar },
            { label: "Total Modules", val: "9 Modules", icon: BookOpen },
            { label: "Credit Value", val: "180 Credits", icon: GraduationCap },
            { label: "TQT / Module", val: "200 Hours", icon: Clock },
          ].map((stat, idx) => {
            const IconC = stat.icon;
            return (
              <div key={idx} className="bg-white border border-slate-200 p-4 rounded-2xl shadow-sm text-center space-y-1">
                <IconC className="w-5 h-5 text-amber-500 mx-auto mb-1" />
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{stat.label}</p>
                <p className="text-sm sm:text-base font-extrabold text-blue-950">{stat.val}</p>
              </div>
            );
          })}
        </div>

        {/* Semester Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {[
            { id: "all", label: "All Semesters" },
            { id: 1, label: "Semester 01" },
            { id: 2, label: "Semester 02" },
            { id: 3, label: "Semester 03" },
          ].map((tab) => {
            const isActive = selectedSemester === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedSemester(tab.id as number | "all")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                  isActive
                    ? "bg-blue-950 text-white shadow-md"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Module Structure Table */}
        <div className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-blue-950 text-white text-xs font-bold uppercase tracking-wider">
                  <th className="py-4 px-6">Unit Code</th>
                  <th className="py-4 px-6">Module Title</th>
                  <th className="py-4 px-4 text-center">Semester</th>
                  <th className="py-4 px-4 text-center">Credits</th>
                  <th className="py-4 px-4 text-center">Level</th>
                  <th className="py-4 px-4 text-center">TQT</th>
                  <th className="py-4 px-4 text-center">GLH</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {filteredModules.map((module) => (
                  <tr
                    key={module.unitCode}
                    className="hover:bg-slate-50 transition-colors duration-150"
                  >
                    <td className="py-4 px-6 font-bold text-amber-700 whitespace-nowrap">
                      {module.unitCode}
                    </td>
                    <td className="py-4 px-6 font-bold text-blue-950">
                      {module.title}
                    </td>
                    <td className="py-4 px-4 text-center whitespace-nowrap">
                      <span className="bg-blue-50 text-blue-950 font-extrabold px-2.5 py-1 rounded-md border border-blue-100 text-xs">
                        Sem {module.semester}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center font-semibold text-slate-700">
                      {module.credits}
                    </td>
                    <td className="py-4 px-4 text-center font-semibold text-slate-700">
                      {module.level}
                    </td>
                    <td className="py-4 px-4 text-center font-semibold text-slate-700">
                      {module.tqt}
                    </td>
                    <td className="py-4 px-4 text-center font-semibold text-slate-700">
                      {module.glh}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer Legend */}
          <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-[11px] text-slate-500">
            <div className="flex items-center gap-4">
              <span><strong>TQT:</strong> Total Qualification Time</span>
              <span><strong>GLH:</strong> Guided Learning Hours</span>
            </div>
            <div className="flex items-center gap-1.5 text-amber-800 font-bold">
              <Layers className="w-3.5 h-3.5 text-amber-500" />
              <span>Each module is valued at 20 Credits</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProgrammeStructureSection;