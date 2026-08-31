"use client";

import React from "react";
import {
  Building2,
  Users,
  Laptop,
  Award,
} from "lucide-react";

export const DeliveryModelSection: React.FC = () => {
  const deliveryCards = [
    {
      title: "DIB Verified Campus",
      desc: "Lectures are delivered at DIB as a fully verified LAB Study Centre, meeting international academic standards.",
      icon: Building2,
      tag: "DIB Approved Center",
    },
    {
      title: "In-Person Campus Learning",
      desc: "Full-time, face-to-face classes with expert faculty, interactive workshops, and direct academic mentorship.",
      icon: Users,
      tag: "Interactive Classes",
    },
    {
      title: "Smart Digital Infrastructure",
      desc: "Campus learning is supported by Virtual Learning Environments (Moodle) and digital study materials.",
      icon: Laptop,
      tag: "LMS Supported",
    },
  ];

  return (
    <section id="delivery-model" className="py-16 bg-slate-50 text-slate-900 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 3 Main Delivery Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {deliveryCards.map((card, idx) => {
            const IconComp = card.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:border-amber-400/80 hover:shadow-md transition-all duration-300 space-y-4 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-blue-950 text-amber-400 flex items-center justify-center font-bold shadow-md group-hover:scale-105 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                      {card.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-blue-950 group-hover:text-blue-900 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-amber-700">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span>DIB Certified Delivery</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default DeliveryModelSection;
