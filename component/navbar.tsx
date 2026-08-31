"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

// Qualifications aur Policies options remove kar diye gaye hain
const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Approved Centres', href: '/Approvedcentres' },
  { label: 'Contact Us', href: '/Contactus' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      
      {/* Top Bar with Address, Phone, and Email */}
      <div className="bg-slate-900 text-white text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a href="mailto:info@dibac.pk" className="flex items-center gap-1.5 hover:text-[#008BC5] transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#008BC5]" />
              <span className="inline">info@dibac.pk</span>
            </a>
            <a href="tel:03308560727" className="flex items-center gap-1.5 hover:text-[#E87722] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#E87722]" />
              <span className="inline">03308560727</span>
            </a>
          </div>
          <div className="hidden md:flex items-center gap-2 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-[#008BC5] shrink-0" />
            <span className="font-semibold text-[11px] tracking-wide">
              DHA Defence Mor, Main Boulevard, Midland Plaza, Lahore
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-2 border-b border-gray-100'
            : 'bg-white py-3.5 border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* DIB LOGO */}
            <a href="#" className="flex items-center group">
              {!imgError ? (
                <img
                  src="/1.png"
                  alt="DIB Education System"
                  className="h-14 sm:h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 relative flex items-center justify-center">
                    <div className="absolute inset-0 border-t-4 border-[#008BC5] rounded-t-full" />
                    <div className="w-7 h-7 bg-gradient-to-br from-[#008BC5] to-[#E87722] clip-path-v flex items-center justify-center text-white font-bold text-xs">
                      V
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-black text-2xl tracking-tighter text-black">DIB</span>
                    <span className="text-[10px] font-semibold text-gray-500 tracking-wider">Education System</span>
                  </div>
                </div>
              )}
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-bold text-gray-700 hover:text-[#008BC5] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#E87722] hover:after:w-full after:transition-all after:duration-300"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* DIB Styled CTA Button */}
            <div className="hidden lg:flex items-center">
              <a
                href="#apply"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#008BC5] to-[#0071A1] hover:from-[#E87722] hover:to-[#D66611] text-white px-6 py-2.5 rounded-xl text-sm font-extrabold shadow-md hover:shadow-lg hover:shadow-orange-500/20 transition-all transform hover:-translate-y-0.5"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gray-800 hover:text-[#008BC5] focus:outline-none"
                aria-label="Toggle Navigation"
              >
                {isOpen ? <X className="w-7 h-7 text-[#E87722]" /> : <Menu className="w-7 h-7 text-[#008BC5]" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-gray-200 shadow-2xl overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2.5 rounded-xl text-base font-bold text-gray-800 hover:bg-sky-50 hover:text-[#008BC5] transition-colors"
                >
                  {item.label}
                </a>
              ))}
              
              <div className="pt-2 px-4 flex items-center gap-2 text-slate-600 text-xs font-medium">
                <MapPin className="w-4 h-4 text-[#008BC5] shrink-0" />
                <span>DHA Defence Mor, Main Boulevard, Midland Plaza, Lahore</span>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <a
                  href="#apply"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center py-3 text-sm font-black text-white bg-gradient-to-r from-[#008BC5] to-[#E87722] rounded-xl shadow-md transition-all"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
};