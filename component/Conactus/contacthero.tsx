"use client";

import React from "react";
import { motion } from "framer-motion";

export const ContactHeroBanner: React.FC = () => {
  return (
    <section className="relative w-full py-24 md:py-32 bg-[#07162c] text-white overflow-hidden flex items-center justify-center">
      {/* Global Network / Digital Connections Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-25 pointer-events-none mix-blend-screen"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format&fit=crop')`,
        }}
      />
      
      {/* Background Soft Glow Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center flex flex-col items-center justify-center">
        
        {/* Animated Pill Badge (Positioned below top spacing) */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-6 md:mb-8"
        >
          <span className="inline-block px-7 py-2.5 rounded-full bg-[#fbf8e6] text-[#07162c] text-sm sm:text-base font-bold tracking-wide shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
            Contact us
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight max-w-4xl text-white drop-shadow-md"
        >
          We are always available to answer your questions
        </motion.h1>

      </div>
    </section>
  );
};

export default ContactHeroBanner;