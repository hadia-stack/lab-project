"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export const StudentJourneyCTA: React.FC = () => {
  return (
    <section className="w-full py-12 px-4 flex justify-center items-center bg-transparent">
      <a
        href="#apply"
        className="inline-flex items-center gap-3 bg-[#dbeafe] hover:bg-[#bfdbfe] text-slate-900 font-semibold text-base sm:text-lg px-7 py-3.5 rounded-2xl shadow-sm transition-all duration-300 hover:scale-[1.02] active:scale-95 group"
      >
        <span>Start Your Student Journey</span>
        <ArrowRight className="w-5 h-5 text-slate-900 group-hover:translate-x-1 transition-transform duration-200" />
      </a>
    </section>
  );
};

export default StudentJourneyCTA;