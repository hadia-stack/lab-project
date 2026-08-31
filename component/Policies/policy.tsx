"use client";

import React from "react";
import { motion } from "framer-motion";

export const DibLegalCompliance: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white via-slate-50 to-white text-slate-800 overflow-hidden relative">
      {/* Background Subtle Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Image with Gradient Backdrop & Framer Motion */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 relative flex justify-center lg:justify-start"
          >
            {/* Gradient Offset Panel */}
            <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-tr from-blue-100 via-indigo-50 to-amber-100 rounded-3xl -z-10 hidden sm:block shadow-sm" />
            
            <div className="relative w-full max-w-md lg:max-w-none rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-100 group">
              {/* Exact Wooden Gavel Stock Photo Matching Your Screenshot */}
              <img
                src="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Wooden Legal Gavel Hammer on Sound Block"
                className="w-full h-[300px] sm:h-[360px] object-cover block group-hover:scale-105 transition-transform duration-700"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/40 via-transparent to-transparent opacity-60" />
            </div>
          </motion.div>

          {/* Right Column: Motion Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-7 space-y-5"
          >
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-blue-950 to-indigo-900 text-amber-400 text-xs font-bold uppercase tracking-widest shadow-sm">
                LONDON ASSESSMENT BOARD • APPROVED CENTRE
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0a192f] via-blue-950 to-indigo-900 tracking-tight pt-1">
                Legal and compliance
              </h2>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal pt-1">
              As an authorized London Assessment Board (LAB) Study Centre, DIB operates under co-created and outcome-focused policies that provide a robust framework for governance, quality assurance, and ethical practice. This ensures strict regulatory compliance, academic integrity, learner protection, and the effective, transparent delivery of UK qualifications across Pakistan.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default DibLegalCompliance;