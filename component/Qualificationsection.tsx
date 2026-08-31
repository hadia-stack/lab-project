"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  ArrowRight, 
  Send, 
  CheckCircle2, 
  HelpCircle,
  Briefcase,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

export const QualificationsSection: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (question.trim()) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setQuestion('');
    }
  };

  return (
    <section id="qualifications" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      
      {/* Background Decorative Blur Orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-blue-900 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-sm"
          >
            <BookOpen className="w-3.5 h-3.5 text-blue-300" />
            <span>Qualifications</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight"
          >
            Our Level 3 Foundation Programmes
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-base sm:text-lg"
          >
            Internationally recognised programmes designed by leading UK academics for higher education progression.
          </motion.p>
        </div>

        {/* Featured Course Showcase Card */}
        <div className="max-w-5xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 grid lg:grid-cols-12"
          >
            {/* High-Resolution Visual Image Side */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                alt="Business Enterprise & Management Students"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-950/20 to-transparent" />
              
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-blue-900/90 text-white text-xs font-bold px-3 py-1.5 rounded-lg border border-white/20 backdrop-blur-md">
                  Level 3 Foundation
                </span>
                <span className="bg-emerald-600/90 text-white text-xs font-bold px-3 py-1.5 rounded-lg border border-white/20 backdrop-blur-md">
                  IBCC Recognized
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-xl text-white">
                <p className="text-xs font-bold text-blue-200">Pre-University Qualification</p>
                <p className="text-sm font-semibold">Equivalent to HSSC / Intermediate in Pakistan</p>
              </div>
            </div>

            {/* Course Content Details */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-3 py-1 rounded-md">
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>Business & Enterprise</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-snug">
                  LAB Level 3 Foundation Programme in Business, Enterprise and Creation Management
                </h3>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Level 3 Foundation Programme in Business, Enterprise and Creation Management is designed to equip students with the skills, knowledge, and entrepreneurial mindset needed to thrive in today’s rapidly evolving economy.
                </p>

                <div className="pt-2 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Progression to Business & Management Degrees</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Equips learners for startups, freelancing & small business creation</span>
                  </div>
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 border-t border-gray-100">
                <a
                  href="#course-details"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-xl shadow-md transition-all text-sm"
                >
                  <span>View Courses</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#qualifications"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-gray-800 font-bold px-6 py-3 rounded-xl transition-all text-sm"
                >
                  <span>View All Courses</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Interactive "Ask us a question" Banner with Direct Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 text-white p-6 sm:p-10 rounded-3xl shadow-2xl border border-blue-800 space-y-8"
        >
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Heading & Info */}
            <div className="lg:col-span-5 space-y-3">
              <div className="inline-flex items-center gap-2 text-blue-300 text-xs font-bold uppercase tracking-wider bg-white/10 px-3 py-1 rounded-md backdrop-blur-md">
                <HelpCircle className="w-4 h-4" />
                <span>Need Guidance?</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black">Ask us a question</h3>
              <p className="text-xs sm:text-sm text-blue-200 leading-relaxed">
                Have questions regarding enrolment or qualification equivalence? Send us a quick inquiry or contact us directly.
              </p>
            </div>

            {/* Right Column: Input Form */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  required
                  placeholder="Type your question here..."
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  className="flex-1 px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 backdrop-blur-sm"
                />
                <button
                  type="submit"
                  className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-6 py-3.5 rounded-xl text-sm shadow-lg transition-all flex items-center justify-center gap-2 shrink-0"
                >
                  <span>Submit Now</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>

              {submitted && (
                <p className="text-emerald-400 text-xs font-semibold mt-2">
                  ✓ Your question has been submitted! Our team will contact you shortly.
                </p>
              )}
            </div>

          </div>

          {/* Integrated Direct Contact Info Bar */}
          <div className="pt-6 border-t border-white/15 grid sm:grid-cols-3 gap-4">
            
            <a 
              href="mailto:info@dibac.pk" 
              className="flex items-center gap-3 bg-white/5 hover:bg-white/10 p-3 rounded-2xl border border-white/10 transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-300 group-hover:bg-blue-500 group-hover:text-white transition-all shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <p className="text-[10px] uppercase font-bold text-blue-300 tracking-wider">Email Us</p>
                <p className="text-xs font-semibold text-white truncate">info@dibac.pk</p>
              </div>
            </a>

            <a 
              href="tel:03308560727" 
              className="flex items-center gap-3 bg-white/5 hover:bg-white/10 p-3 rounded-2xl border border-white/10 transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-300 group-hover:bg-emerald-500 group-hover:text-white transition-all shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <p className="text-[10px] uppercase font-bold text-emerald-300 tracking-wider">Call / WhatsApp</p>
                <p className="text-xs font-semibold text-white truncate">03308560727</p>
              </div>
            </a>

            <div className="flex items-center gap-3 bg-white/5 p-3 rounded-2xl border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-300 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <p className="text-[10px] uppercase font-bold text-amber-300 tracking-wider">Head Office</p>
                <p className="text-xs font-semibold text-white truncate">DHA Defence Mor, Main Boulevard, Lahore</p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};