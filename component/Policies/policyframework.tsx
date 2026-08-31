"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Building2,
  FileSpreadsheet,
  ClipboardCheck,
  HeartPulse,
  Award,
  Users,
  Lock,
  Cpu,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

interface PolicyItem {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  image: string;
  description: string;
  highlights: string[];
}

const policiesData: PolicyItem[] = [
  {
    id: "governance",
    title: "Institutional Governance & Oversight Framework",
    subtitle: "Governance Policy",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    description:
      "DIB maintains strict operational governance aligning with London Assessment Board (LAB) standards, ensuring ethical leadership, clear accountability structures, and continuous institutional quality audits.",
    highlights: [
      "Board-level quality audits",
      "Ethical administration guidelines",
      "Transparent organizational hierarchy",
    ],
  },
  {
    id: "financial",
    title: "Fiscal Governance & Tuition Integrity Standard",
    subtitle: "Financial Management Policy",
    icon: FileSpreadsheet,
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
    description:
      "Establishes transparent fee structures, ethical refund mechanisms, and audited financial controls to ensure complete fiscal responsibility for enrolled learners.",
    highlights: [
      "Transparent fee breakdowns",
      "Standardized refund protocols",
      "Independent annual financial audits",
    ],
  },
  {
    id: "compliance",
    title: "Regulatory Alignment & Reporting Protocol",
    subtitle: "Compliance and Reporting Policy",
    icon: ClipboardCheck,
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=800&auto=format&fit=crop",
    description:
      "Mandates real-time academic data submission and regulatory reporting between DIB and LAB to maintain verified center accreditation status.",
    highlights: [
      "Real-time learner progress tracking",
      "Mandatory LAB audit compliance",
      "Systematic record management",
    ],
  },
  {
    id: "health-safety",
    title: "Campus Welfare & Occupational Health Policy",
    subtitle: "Health and Safety Policy",
    icon: HeartPulse,
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop",
    description:
      "Ensures a safe, secure, and accessible learning ecosystem across all DIB campus facilities for students, staff, and visitors.",
    highlights: [
      "Emergency response protocols",
      "Inclusive campus accessibility",
      "Routine safety hazard assessments",
    ],
  },
  {
    id: "curriculum",
    title: "Curriculum Delivery & Qualification Standards",
    subtitle: "Qualification Development and Design Policy",
    icon: Award,
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800&auto=format&fit=crop",
    description:
      "Outlines the precise pedagogical execution and quality controls required to deliver UK-standard LAB qualifications at DIB.",
    highlights: [
      "UK-aligned module delivery",
      "Standardized learning resources",
      "Continuous faculty development",
    ],
  },
  {
    id: "assessment",
    title: "Assessment Rigor, Moderation & Awarding Protocol",
    subtitle: "Assessment, Delivery and Awarding Policies",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
    description:
      "Defines fair assessment practices, internal verification, external moderation procedures, and credential awarding integrity.",
    highlights: [
      "Blind grading & internal verification",
      "External moderation compliance",
      "Transparent appeal mechanisms",
    ],
  },
  {
    id: "diversity",
    title: "Inclusive Learning & Equal Opportunity Standard",
    subtitle: "Equality and Diversity Policy",
    icon: Users,
    image: "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=800&auto=format&fit=crop",
    description:
      "Fosters an equitable, non-discriminatory environment guaranteeing equal educational access regardless of background or physical ability.",
    highlights: [
      "Zero-tolerance discrimination policy",
      "Special educational needs support",
      "Inclusive learner engagement",
    ],
  },
  {
    id: "data-ethics",
    title: "Data Privacy & Information Ethics Framework",
    subtitle: "Data Protection and Ethics Policy",
    icon: Lock,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
    description:
      "Protects student and institutional data using GDPR-aligned encryption standards and strict confidential information protocols.",
    highlights: [
      "GDPR & local privacy compliance",
      "Encrypted digital records",
      "Strict data confidentiality agreements",
    ],
  },
  {
    id: "academic-integrity",
    title: "Academic Integrity & Generative AI Governance",
    subtitle: "Academic Misconduct and AI Use Policy",
    icon: Cpu,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    description:
      "Regulates ethical artificial intelligence utilization, strict plagiarism prevention, and automated similarity checks to preserve academic honesty.",
    highlights: [
      "Ethical AI usage parameters",
      "Automated plagiarism screening",
      "Disciplinary governance procedures",
    ],
  },
];

export const DibPolicyFramework: React.FC = () => {
  const [activePolicy, setActivePolicy] = useState<string | null>(null);

  const togglePolicy = (id: string) => {
    setActivePolicy(activePolicy === id ? null : id);
  };

  return (
    <section className="py-16 sm:py-20 bg-slate-50 text-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14 space-y-3"
        >
          <span className="inline-block px-3.5 py-1 rounded-full bg-blue-950 text-amber-400 text-xs font-bold uppercase tracking-widest">
            DIB Approved Centre Governance
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a192f] tracking-tight">
            Institutional Policies & Compliance
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            As an officially recognized LAB Approved Study Centre, DIB upholds rigorous operational standards through our structured policy frameworks.
          </p>
        </motion.div>

        {/* Policies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {policiesData.map((policy, index) => {
            const Icon = policy.icon;
            const isOpen = activePolicy === policy.id;

            return (
              <motion.div
                key={policy.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`rounded-2xl border transition-all duration-300 bg-white flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md ${
                  isOpen
                    ? "border-amber-400 ring-2 ring-amber-400/20"
                    : "border-slate-200/80 hover:border-blue-200"
                }`}
              >
                <div>
                  {/* Contextual Header Image Banner */}
                  <div className="relative w-full h-36 overflow-hidden bg-slate-100 group">
                    <img
                      src={policy.image}
                      alt={policy.subtitle}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    
                    {/* Badge on Image */}
                    <span className="absolute bottom-3 left-3 text-[11px] font-bold text-amber-300 bg-blue-950/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-amber-400/30">
                      {policy.subtitle}
                    </span>

                    {/* Icon Badge */}
                    <div className="absolute top-3 right-3 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md text-blue-950 flex items-center justify-center shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    {/* Title */}
                    <h3 className="text-base font-bold text-[#0a192f] leading-snug">
                      {policy.title}
                    </h3>

                    {/* Expandable Description Area */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden pt-3 border-t border-slate-100 mt-2 space-y-3"
                        >
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                            {policy.description}
                          </p>

                          <div className="space-y-1.5 pt-1">
                            <p className="text-xs font-bold text-blue-950 uppercase tracking-wider">
                              Key Parameters:
                            </p>
                            <ul className="space-y-1">
                              {policy.highlights.map((item, idx) => (
                                <li
                                  key={idx}
                                  className="text-xs text-slate-700 flex items-center gap-2"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Interactive Action Button */}
                <div className="p-4 bg-slate-50/80 border-t border-slate-100 mt-auto">
                  <button
                    onClick={() => togglePolicy(policy.id)}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-between transition-all duration-200 ${
                      isOpen
                        ? "bg-blue-950 text-white shadow-sm"
                        : "bg-white border border-slate-200 text-blue-950 hover:bg-blue-950 hover:text-white"
                    }`}
                  >
                    <span>{isOpen ? "Close Details" : "Read Policy Description"}</span>
                    {isOpen ? (
                      <ChevronDown className="w-4 h-4 rotate-180 transition-transform duration-300" />
                    ) : (
                      <ArrowRight className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default DibPolicyFramework;