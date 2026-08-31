"use client";

import React from "react";

export const Approvedstudycenters: React.FC = () => {
  return (
    <section className="relative w-full h-[280px] sm:h-[350px] md:h-[400px] overflow-hidden bg-slate-950 flex items-center">
      
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1600&auto=format&fit=crop')`,
        }}
      />

      {/* Dark Navy Gradient Overlay (Left-to-Right Fade) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#030b1e] via-[#030b1e]/90 to-transparent w-full md:w-3/4 z-10" />

      {/* Solid Dark Anchor for Extreme Left Edge */}
      <div className="absolute inset-y-0 left-0 w-1/4 bg-[#030b1e] z-10 hidden md:block" />

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 w-full relative z-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
          Study Centres
        </h1>
      </div>

    </section>
  );
};

export default Approvedstudycenters;