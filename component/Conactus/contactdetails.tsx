"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Sparkles } from "lucide-react";

export const ContactInfoSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 text-slate-800 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-100/60 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-100/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        
        {/* Main Floating Light Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-xl">
          
          {/* Left Feature Card: Expanded 7-Days Operational Desk */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative bg-gradient-to-br from-blue-950 via-blue-900 to-[#0a192f] text-white border border-blue-900 rounded-2xl p-8 flex flex-col justify-between overflow-hidden group shadow-md"
          >
            <div className="absolute top-0 right-0 p-6 text-amber-400/20 group-hover:text-amber-400/40 transition-colors">
              <Sparkles className="w-24 h-24 -mr-6 -mt-6" />
            </div>

            <div className="space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5" /> 7 Days Support
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                  Working Hours
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Our dedicated support & counseling team is available all week long.
                </p>
              </div>

              {/* Highlighted Time Table */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/10 space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-200 font-medium">Monday – Sunday</span>
                  <span className="font-extrabold text-amber-300 px-2.5 py-0.5 rounded bg-amber-400/20 border border-amber-400/30">
                    Open
                  </span>
                </div>
                <div className="pt-2 border-t border-white/10 flex items-baseline justify-between">
                  <span className="text-xs text-slate-300 uppercase tracking-wider font-semibold">Timings</span>
                  <span className="text-xl font-black text-white tracking-wide">
                    9:00 AM – 10:00 PM
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 text-xs text-slate-300 flex items-center justify-between">
              <span>DIB Support Desk</span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>
          </motion.div>

          {/* Right Column: Sleek Interactive Light Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Email Contact Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-slate-50/80 hover:bg-white border border-slate-200/80 hover:border-blue-950/30 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-950/5 border border-blue-950/10 text-blue-950 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">
                  Email Assistance
                </h4>
                <a
                  href="mailto:info@dib.edu.pk"
                  className="text-lg font-bold text-slate-900 hover:text-amber-600 transition-colors break-all"
                >
                  info@dib.edu.pk
                </a>
              </div>
            </motion.div>

            {/* Helpline Contact Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-slate-50/80 hover:bg-white border border-slate-200/80 hover:border-blue-950/30 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">
                  Direct Line
                </h4>
                <a
                  href="tel:+9242111111342"
                  className="text-lg font-bold text-slate-900 hover:text-amber-600 transition-colors"
                >
                  +92 (042) 111-111-DIB
                </a>
              </div>
            </motion.div>

            {/* Main Campus Card (Full Width Span) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="sm:col-span-2 bg-slate-50/80 hover:bg-white border border-slate-200/80 hover:border-amber-500/40 rounded-2xl p-6 transition-all duration-300 flex items-center gap-5 group shadow-sm hover:shadow-md"
            >
              <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200/60 text-amber-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <MapPin className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-0.5">
                  Campus Headquarters
                </h4>
                <p className="text-base font-bold text-slate-900">
                  DIB Approved Study Centre, Main Campus
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Lahore, Punjab, Pakistan
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;