"use client";

import React from "react";
import { CheckCircle2, ArrowRight, GraduationCap } from "lucide-react";

export const BeingAnApprovedCentre: React.FC = () => {
  const benefits = [
    "Clear qualification specifications",
    "Ongoing academic support",
    "Assessment guidance and moderation",
    "Professional recognition",
  ];

  return (
    <section className="py-12 sm:py-16 bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Light Blue Container Card */}
        <div className="bg-[#f0f5ff] rounded-3xl p-6 sm:p-10 lg:p-12 border border-blue-100 shadow-sm relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Text & Features List */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a192f] tracking-tight">
                  Being an approved Study Centre
                </h2>
                
                <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
                  DIB partners with London Assessment Board to deliver UK-standard qualifications to our learners.
                </p>
              </div>

              {/* Benefits Checklist */}
              <div className="space-y-3 pt-2">
                <h3 className="text-sm font-bold text-[#0a192f] uppercase tracking-wider">
                  As an approved study centre, DIB ensures:
                </h3>

                <ul className="space-y-2.5">
                  {benefits.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-950 shrink-0" />
                      <span className="text-sm sm:text-base text-slate-700 font-medium">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#dbe8ff] hover:bg-[#cbe0ff] text-[#0a192f] font-bold text-sm transition-all duration-200 active:scale-95 shadow-sm">
                  <span>Apply Through DIB</span>
                  <ArrowRight className="w-4 h-4 text-[#0a192f]" />
                </button>
              </div>

            </div>

            {/* Right Column: Guaranteed Render Image Wrapper */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full h-[280px] sm:h-[340px] rounded-2xl overflow-hidden shadow-xl border border-blue-100 bg-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop"
                  alt="DIB Approved Study Centre"
                  className="w-full h-full object-cover block"
                  loading="eager"
                />

                {/* Red Graduation Badge (Screenshot Pattern) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-red-600 flex items-center justify-center shadow-2xl border-4 border-white/30 backdrop-blur-sm">
                    <GraduationCap className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default BeingAnApprovedCentre;