"use client";

import React from "react";

export const ApprovedStudyCentreIntro: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-10 text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-md border border-amber-200">
            LAB Approved Partner
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-blue-950 mt-2 tracking-tight">
            Academic Delivery at DIB
          </h2>
          <div className="w-16 h-1 bg-amber-500 rounded-full mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Unique Classroom Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none rounded-2xl overflow-hidden shadow-2xl border border-slate-100 group">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop"
                alt="DIB Academic Lecture Hall"
                className="w-full h-auto object-cover aspect-[4/3] sm:aspect-[1/1] lg:aspect-[4/3] group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-3 left-3 bg-blue-950/90 backdrop-blur-md border border-amber-400/40 text-amber-400 text-xs font-bold px-3 py-1.5 rounded-lg shadow-md">
                DIB • Verified Study Centre
              </div>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base leading-relaxed text-slate-600 font-normal">
            <p className="text-base sm:text-lg font-semibold text-blue-950 leading-snug">
              DIB takes pride in serving as an officially recognized London Assessment Board (LAB) Approved Study Centre in Pakistan.
            </p>

            <p>
              To deliver world-class qualifications, DIB operates under rigorous quality assurance procedures and comprehensive academic audits. We guarantee consistent, high-standard teaching, transparent evaluation, and holistic student support. Guided by our <strong className="text-blue-950 font-bold">‘students first’ philosophy</strong>, we prioritize your learning journey through personalized academic guidance and continuous performance feedback.
            </p>

            <p>
              To maintain seamless educational management, DIB leverages LAB's advanced digital program infrastructure. This allows our academic team to streamline administrative workflows, monitor student progress in real-time, and foster direct collaborative communication. By pairing rigorous governance with modern campus facilities, DIB provides an empowering ecosystem where students excel in their academic goals.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ApprovedStudyCentreIntro;