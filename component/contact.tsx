"use client";

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  GraduationCap
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 text-slate-900 relative overflow-hidden">
      
      {/* Light Theme Background Glows */}
      <div className="absolute top-1/4 -left-20 w-[35rem] h-[35rem] bg-sky-200/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-[35rem] h-[35rem] bg-amber-100/50 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-black tracking-wider uppercase backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Connect With Us</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Start Your Academic Journey with <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-700 to-amber-600">DIB Education</span>
          </h2>

          <p className="text-slate-600 text-base leading-relaxed">
            Get complete details about UK Level 3 Qualifications and IBCC equivalence pathways.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Visual Banner */}
            <motion.div variants={itemVariants} className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80" 
                alt="DIB Academic Support" 
                className="w-full h-56 object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs font-bold text-amber-300 uppercase tracking-wider">Official Advisory</p>
                <h4 className="text-lg font-bold">DIB International Qualification Desk</h4>
              </div>
            </motion.div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              <motion.div 
                variants={itemVariants}
                whileHover={{ x: 5 }}
                className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-4 hover:border-sky-500/50 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Us</p>
                  <p className="text-sm font-bold text-slate-900 mt-0.5">info@dibac.pk</p>
                  <p className="text-xs text-slate-500 mt-1">Direct support within 24 business hours</p>
                </div>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                whileHover={{ x: 5 }}
                className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-4 hover:border-amber-500/50 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Call / Helpline</p>
                  <p className="text-sm font-bold text-slate-900 mt-0.5">03308560727</p>
                  <p className="text-xs text-slate-500 mt-1">Mon - Sun: 9:00 AM - 10:00 PM</p>
                </div>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                whileHover={{ x: 5 }}
                className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-4 hover:border-blue-500/50 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Head Office</p>
                  <p className="text-sm font-bold text-slate-900 mt-0.5">DHA Defence Mor, Main Boulevard, Lahore</p>
                  <p className="text-xs text-slate-500 mt-1">Pakistan</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: White Styled Inquiry Form */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-white border border-slate-200/80 p-8 sm:p-10 rounded-3xl shadow-xl relative"
          >
            {/* Header Badge for Form */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-sky-50 text-sky-700 text-xs font-bold uppercase tracking-wider mb-6">
              <GraduationCap className="w-4 h-4" />
              <span>Student Inquiry Form</span>
            </div>

            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-emerald-50 border border-emerald-200 p-8 rounded-2xl text-center space-y-3 my-12"
              >
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-xl font-bold text-slate-900">Application Submitted!</h4>
                <p className="text-xs text-slate-600">
                  Thank you for connecting with DIB Education System. Our academic team will get in touch with you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. John Doe"
                      className="w-full bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs px-4 py-3.5 rounded-xl focus:outline-none focus:border-sky-500 focus:bg-white transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Email Address</label>
                    <input 
                      type="email" 
                      required
                      placeholder="name@example.com"
                      className="w-full bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs px-4 py-3.5 rounded-xl focus:outline-none focus:border-sky-500 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Phone / WhatsApp</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="0330 8560727"
                      className="w-full bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs px-4 py-3.5 rounded-xl focus:outline-none focus:border-sky-500 focus:bg-white transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Program Of Interest</label>
                    <input 
                      type="text" 
                      required
                      placeholder="UK Level 3 Foundation"
                      className="w-full bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs px-4 py-3.5 rounded-xl focus:outline-none focus:border-sky-500 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Message / Details</label>
                  <textarea 
                    rows={4}
                    required
                    placeholder="Write your qualifications or questions..."
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs p-4 rounded-xl focus:outline-none focus:border-sky-500 focus:bg-white transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-xs font-black uppercase tracking-wider text-white shadow-lg flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-blue-600 hover:to-sky-500 shadow-sky-500/20 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span>Submit Student Inquiry</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
};