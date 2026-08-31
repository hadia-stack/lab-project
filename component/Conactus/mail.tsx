"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, ShieldCheck, User, Mail, Phone, MessageSquare, CheckCircle2 } from "lucide-react";

export const SendMessageSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true);
    }, 1200);
  };

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background Lighting Accents */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Floating Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200/80 relative overflow-hidden"
        >
          {/* Top Gradient Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-950 via-amber-500 to-indigo-900" />

          {/* Header */}
          <div className="mb-10 space-y-2">
            <span className="inline-block px-3.5 py-1 rounded-full bg-blue-950/5 border border-blue-950/10 text-blue-950 text-xs font-bold uppercase tracking-widest">
              Direct Contact
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a192f] tracking-tight">
              Send us a message
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Fill out the form below and our DIB support team will get back to you within 24 hours.
            </p>
          </div>

          {formSubmitted ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="py-12 text-center space-y-4"
            >
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-[#0a192f]">Message Sent Successfully!</h3>
              <p className="text-slate-600 text-sm max-w-md mx-auto">
                Thank you for reaching out. An academic counselor will contact you shortly.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="mt-4 px-6 py-2.5 bg-slate-100 text-slate-700 text-xs font-bold rounded-xl hover:bg-slate-200 transition-colors"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Names */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-amber-500" /> First Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John"
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-950 focus:bg-white transition-all duration-200 placeholder:text-slate-400"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-amber-500" /> Last Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Doe"
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-950 focus:bg-white transition-all duration-200 placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* Row 2: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-amber-500" /> Your Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-950 focus:bg-white transition-all duration-200 placeholder:text-slate-400"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-amber-500" /> Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+92 300 1234567"
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-950 focus:bg-white transition-all duration-200 placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* Row 3: Message */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-amber-500" /> Message
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="How can we assist you with DIB qualifications?"
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-950 focus:bg-white transition-all duration-200 placeholder:text-slate-400 resize-none"
                />
              </div>

              {/* Security & Action Controls */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
                
                {/* Custom Security Badge */}
                <div className="flex items-center gap-2.5 px-3.5 py-2 bg-slate-100 rounded-xl border border-slate-200 text-slate-600 text-xs font-medium w-full sm:w-auto">
                  <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Protected by reCAPTCHA Enterprise</span>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#0a192f] hover:bg-amber-500 hover:text-blue-950 text-white font-bold text-sm rounded-xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
                >
                  {loading ? (
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

              </div>

            </form>
          )}

        </motion.div>
      </div>
    </section>
  );
};

export default SendMessageSection;