import React from 'react';
import { Clock, ShieldCheck, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { PROCESS_STEPS } from '../data/companyData';

interface ProcessTimelineProps {
  onOpenProposal: () => void;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ onOpenProposal }) => {
  return (
    <section id="process" className="py-24 bg-[#070C18] relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-[#00E5FF]/30 text-xs font-mono-tech text-[#00E5FF] mb-4">
            <Clock className="w-3.5 h-3.5" />
            <span>5-STEP GROWTH BLUEPRINT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            How We Execute & <span className="text-gradient-cyan">Scale Your Business</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            A frictionless, 5-stage deployment methodology engineered for predictable ROI and rapid momentum.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="space-y-6 relative">
          
          {/* Vertical Connecting Line */}
          <div className="hidden md:block absolute left-[39px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-[#00E5FF] via-[#0A84FF] to-purple-600 opacity-40 pointer-events-none" />

          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="relative flex flex-col md:flex-row gap-6 p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-white/10 hover:border-[#00E5FF]/40 backdrop-blur-xl transition-all duration-300 hover:shadow-2xl hover:shadow-[#00E5FF]/10 group"
            >
              {/* Step Number Circle */}
              <div className="w-20 h-20 rounded-2xl bg-slate-950 border border-[#00E5FF]/40 flex flex-col items-center justify-center shrink-0 shadow-lg group-hover:scale-105 group-hover:bg-[#00E5FF]/10 transition-all">
                <span className="text-2xl font-extrabold text-[#00E5FF] font-mono-tech">
                  {step.step}
                </span>
                <span className="text-[9px] text-slate-400 font-mono-tech">PHASE</span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#00E5FF] transition-colors">
                    {step.title}
                  </h3>
                  <span className="px-3 py-1 text-[11px] font-mono-tech font-bold rounded-full bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/30">
                    ⏱ {step.duration}
                  </span>
                </div>

                <div className="text-xs font-semibold text-purple-400 mb-3">{step.subtitle}</div>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">{step.description}</p>

                {/* Deliverables Chip */}
                <div className="p-3 rounded-xl bg-slate-950 border border-white/5 inline-flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span><strong>Deliverable:</strong> {step.deliverable}</span>
                </div>
              </div>

            </div>
          ))}

        </div>

        {/* Bottom Callout */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenProposal}
            className="inline-flex items-center gap-2 px-8 py-4 text-xs font-bold text-slate-950 bg-gradient-to-r from-[#00E5FF] to-[#0A84FF] rounded-2xl shadow-xl hover:scale-105 transition duration-200 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Begin Phase 1 Diagnostic Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
