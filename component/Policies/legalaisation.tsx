"use client";

import React from "react";
import { motion } from "framer-motion";

export const LegalAndComplianceHero: React.FC = () => {
  return (
    <section className="relative w-full h-[280px] sm:h-[350px] md:h-[400px] overflow-hidden bg-[#07112c] flex items-center">
      
      {/* Direct Gavel Image Render with Framer Motion */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Legal Gavel and Hammer"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Dark Navy Blue Overlay Fade Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#07112c] via-[#07112c]/90 to-transparent w-full md:w-3/4 z-10" />

      {/* Left Block Solid Anchor */}
      <div className="absolute inset-y-0 left-0 w-1/4 bg-[#07112c] z-10 hidden md:block" />

      {/* Hero Text Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 w-full relative z-20">
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-3"
        >
          <motion.span
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-block px-3.5 py-1 rounded-md bg-amber-500/20 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-widest"
          >
            DIB Governance Framework
          </motion.span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            Legal and compliance
          </h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="h-1.5 bg-amber-500 rounded-full"
          />
        </motion.div>
      </div>

    </section>
  );
};

export default LegalAndComplianceHero;