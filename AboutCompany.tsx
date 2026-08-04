import React from 'react';
import { Building2, Globe, ShieldCheck, Target, Users, Zap, Award, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const AboutCompany: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden border-t border-white/10">
      {/* Glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#0A84FF]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text Column */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-[#00E5FF]/30 text-xs font-mono-tech text-[#00E5FF] mb-6">
              <Building2 className="w-3.5 h-3.5" />
              <span>ABOUT THE CORPORATION</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              Pioneering the Next Era of{' '}
              <span className="text-gradient-cyan">AI Growth Architecture</span>
            </h2>

            <p className="text-slate-300 text-base leading-relaxed mb-6">
              <strong className="text-white">{COMPANY_INFO.name}</strong> is an Indian corporate enterprise dedicated to equipping ambitious businesses with high-precision AI automation, custom software, SEO domination, and performance advertising.
            </p>

            <p className="text-slate-300 text-sm leading-relaxed mb-8">
              Operating under the corporate registry <strong>CIN: {COMPANY_INFO.cin}</strong>, we bridge the gap between cutting-edge AI engineering and real-world revenue generation for startups, healthcare networks, e-commerce, and enterprise B2B leaders globally.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-slate-900 border border-white/5">
                <div className="text-xs font-mono-tech text-[#00E5FF] mb-1">MISSION STATEMENT</div>
                <div className="text-xs text-slate-300">
                  Help businesses grow faster and dominate digitally through autonomous AI models, modern web engineering, and performance marketing.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-white/5">
                <div className="text-xs font-mono-tech text-[#10B981] mb-1">CORPORATE CREDIBILITY</div>
                <div className="text-xs text-slate-300">
                  OPC Private Limited registered entity with verified Google Premier, Meta, and ISO security compliance.
                </div>
              </div>
            </div>

            {/* Corporate Details Badge */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-[#10B981]" />
                <div>
                  <div className="text-xs font-bold text-white">Registered Domain</div>
                  <div className="text-xs font-mono-tech text-[#00E5FF]">orionpulse.co.in</div>
                </div>
              </div>
              <div className="text-xs text-slate-400 font-mono-tech">
                Headquarters: Bengaluru, India
              </div>
            </div>

          </div>

          {/* Right Visual Card */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-tr from-[#00E5FF] via-[#0A84FF] to-purple-600 rounded-3xl blur-xl opacity-30 animate-pulse-glow" />
            
            <div className="relative rounded-3xl bg-slate-900 border border-white/15 p-8 shadow-2xl space-y-6">
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div>
                  <div className="text-xs font-mono-tech text-slate-400">CORPORATE REPUTATION</div>
                  <div className="text-3xl font-extrabold text-white">4.95 / 5.0 Rating</div>
                </div>
                <div className="px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold">
                  ★ 184 Verified Reviews
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-white/5 text-xs">
                  <span className="text-slate-400">Projects Delivered</span>
                  <span className="font-bold text-white">250+ Global Campaigns</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-white/5 text-xs">
                  <span className="text-slate-400">Client Revenue Impact</span>
                  <span className="font-bold text-[#00E5FF]">$45M+ Generated</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-white/5 text-xs">
                  <span className="text-slate-400">Average Support Response</span>
                  <span className="font-bold text-[#10B981]">&lt; 15 Minutes</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-white/5 text-xs">
                  <span className="text-slate-400">Primary AI Infrastructure</span>
                  <span className="font-bold text-purple-400">Google Gemini 2.5 Enterprise</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-r from-[#00E5FF]/10 to-[#0A84FF]/10 border border-[#00E5FF]/30 text-center">
                <p className="text-xs font-medium text-slate-200">
                  "Our core philosophy: Never produce generic AI slop. Build fast, elegant, mathematical software that drives real revenues."
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
