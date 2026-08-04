import React from 'react';
import { ShieldCheck, Check, X, Zap, Cpu, Sparkles, TrendingUp, Award } from 'lucide-react';
import { WHY_US_FEATURES } from '../data/companyData';

export const WhyOrionPulse: React.FC = () => {
  const comparisonRows = [
    {
      feature: "Turnaround & Launch Speed",
      orion: "48 Hours Onboarding",
      agency: "4 - 8 Weeks Onboarding",
      freelancer: "Unpredictable / Slow",
      inhouse: "High Hiring Lag"
    },
    {
      feature: "AI Automation & Chatbots",
      orion: "24/7 Custom Gemini Agents",
      agency: "Manual Execution / Rare",
      freelancer: "Basic Plugins Only",
      inhouse: "Requires AI Engineers"
    },
    {
      feature: "Real-Time BI Analytics",
      orion: "Live 24/7 Custom Dashboard",
      agency: "Static Monthly PDF",
      freelancer: "Basic Screenshots",
      inhouse: "Expensive Software Tools"
    },
    {
      feature: "Guaranteed ROAS & Growth",
      orion: "Strict KPI Target SLAs",
      agency: "Zero Revenue Guarantees",
      freelancer: "No Accountability",
      inhouse: "Fixed Salary Overhead"
    },
    {
      feature: "Full-Stack Design & Code",
      orion: "Apple-Caliber React 19 + Next.js",
      agency: "Generic Templates",
      freelancer: "Varying Quality Code",
      inhouse: "Limited Skillsets"
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-[#070C18] relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-[#00E5FF]/30 text-xs font-mono-tech text-[#00E5FF] mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>THE ORIONPULSE ADVANTAGE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Why High-Growth Brands Choose{' '}
            <span className="text-gradient-cyan">OrionPulse</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            We eliminate traditional agency bloat by replacing manual friction with high-speed AI engineering, transparent ROI, and relentless execution.
          </p>
        </div>

        {/* 4 Feature Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {WHY_US_FEATURES.map((feat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-[#00E5FF]/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#00E5FF]/10"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#00E5FF]/20 to-[#0A84FF]/20 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF] mb-5">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{feat.title}</h3>
              <p className="text-slate-300 text-xs leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>

        {/* Comparison Matrix Table */}
        <div className="rounded-3xl bg-slate-900/80 border border-white/10 p-6 sm:p-8 backdrop-blur-2xl shadow-2xl overflow-x-auto">
          <div className="min-w-[650px]">
            <div className="grid grid-cols-5 pb-6 border-b border-white/10 text-xs font-mono-tech uppercase tracking-wider text-slate-400">
              <div className="col-span-1 text-slate-300 font-bold">Key Capabilities</div>
              <div className="col-span-1 text-[#00E5FF] font-extrabold flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> OrionPulse
              </div>
              <div className="col-span-1">Traditional Agency</div>
              <div className="col-span-1">Freelancers</div>
              <div className="col-span-1">In-House Team</div>
            </div>

            <div className="divide-y divide-white/5">
              {comparisonRows.map((row, i) => (
                <div key={i} className="grid grid-cols-5 py-4 items-center text-xs sm:text-sm">
                  <div className="col-span-1 font-semibold text-white">{row.feature}</div>
                  
                  {/* OrionPulse Col */}
                  <div className="col-span-1 font-bold text-[#00E5FF] flex items-center gap-1.5 p-2 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/20">
                    <Check className="w-4 h-4 text-[#10B981] shrink-0" />
                    <span>{row.orion}</span>
                  </div>

                  {/* Traditional Agency */}
                  <div className="col-span-1 text-slate-400 flex items-center gap-1.5 p-2">
                    <X className="w-3.5 h-3.5 text-red-400 shrink-0" />
                    <span>{row.agency}</span>
                  </div>

                  {/* Freelancer */}
                  <div className="col-span-1 text-slate-400 flex items-center gap-1.5 p-2">
                    <X className="w-3.5 h-3.5 text-red-400 shrink-0" />
                    <span>{row.freelancer}</span>
                  </div>

                  {/* In-House */}
                  <div className="col-span-1 text-slate-400 flex items-center gap-1.5 p-2">
                    <X className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{row.inhouse}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
