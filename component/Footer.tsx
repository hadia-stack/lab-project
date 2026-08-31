"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight, 
  Globe, 
  ShieldCheck, 
  GraduationCap 
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 relative overflow-hidden pt-20 pb-12">
      {/* Background Accent Glows */}
      <div className="absolute top-0 left-1/4 w-[30rem] h-[30rem] bg-sky-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[25rem] h-[25rem] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-16 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-blue-600 flex items-center justify-center shadow-md">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-wider block leading-none">DIB</span>
                <span className="text-[10px] font-semibold text-sky-400 tracking-widest uppercase">Education System</span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              DIB is an innovative educational initiative providing high-quality Level 3 qualifications, structured academic pathways, and globally recognized learning opportunities for students.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-amber-400 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Ofqual Level 3 Aligned</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-sky-400 text-xs font-semibold">
                <Globe className="w-4 h-4 text-sky-400" />
                <span>Global Recognition</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider border-l-2 border-sky-500 pl-3">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              {['About DIB System', 'UK Level 3 Programs', 'IBCC Equivalence', 'Study Pathways', 'Approved Centres'].map((link, idx) => (
                <li key={idx}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-sky-400 transition-colors inline-flex items-center gap-1.5 group">
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-sky-400 transition-colors" />
                    <span>{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider border-l-2 border-blue-500 pl-3">
              Contact Us
            </h4>
            <ul className="space-y-3 text-xs font-medium">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>DHA Defense Mor, Main Boulevard, Lahore</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:info@dibac.pk" className="hover:text-amber-400 transition-colors">info@dibac.pk</a>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="tel:03308560727" className="hover:text-sky-400 transition-colors">03308560727</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} DIB. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Accreditation Disclaimer</a>
          </div>
        </div>

      </div>
    </footer>
  );
};