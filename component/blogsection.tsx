"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="py-24 bg-gradient-to-b from-slate-50 via-white to-sky-50/40 relative overflow-hidden">
      
      {/* Background Decorative Lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#008BC5]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#E87722]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Newsletter / Article Subscription Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-700"
        >
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl font-bold">Subscribe to DIB Educational Updates</h4>
            <p className="text-xs text-slate-300">Get official qualification notices and academic insights directly in your inbox.</p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="flex w-full md:w-auto items-center gap-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-slate-800 text-white placeholder-slate-400 text-xs px-4 py-3 rounded-xl border border-slate-700 focus:outline-none focus:border-[#008BC5] w-full md:w-64"
            />
            <button 
              type="submit" 
              className="bg-[#008BC5] hover:bg-[#E87722] text-white px-5 py-3 rounded-xl text-xs font-extrabold transition-colors shrink-0"
            >
              Subscribe
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};