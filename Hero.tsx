import React from 'react';
import { Sparkles, Phone, ArrowRight, ShieldCheck, Zap, TrendingUp, CheckCircle, Play } from 'lucide-react';

interface HeroProps {
  onOpenProposal: () => void;
  onOpenStrategyCall: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenProposal, onOpenStrategyCall }) => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-mesh-gradient">
      {/* Background Glowing Mesh & Spotlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[450px] bg-gradient-to-tr from-[#0A84FF]/25 via-[#00E5FF]/20 to-purple-600/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#00E5FF]/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Floating Particle Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#00E5FF_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.06] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0A84FF]/10 border border-[#0A84FF]/20 backdrop-blur-xl mb-8 shadow-lg shadow-[#0A84FF]/10 hover:border-[#0A84FF]/40 transition-all cursor-default">
          <span className="flex h-2 w-2 rounded-full bg-[#0A84FF] animate-ping" />
          <span className="text-xs font-bold tracking-widest text-[#0A84FF] uppercase">
            NEXT-GEN GROWTH ENGINE V2.5 ONLINE
          </span>
          <span className="px-2 py-0.5 text-[10px] font-bold rounded-md bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/20">
            orionpulse.co.in
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-6 leading-[1.05]">
          Grow{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A84FF] to-[#00E5FF]">
            Smarter.
          </span>{' '}
          <br className="hidden md:block" />
          Scale Faster.
        </h1>

        {/* Subheading */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-[#6B7280] font-medium mb-10 leading-relaxed">
          AI-powered digital marketing, automation, and growth strategies built for ambitious modern businesses ready to dominate.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={onOpenProposal}
            className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold text-[#0F172A] bg-white rounded-xl shadow-xl hover:scale-[1.03] transition-transform duration-300 cursor-pointer"
          >
            <Sparkles className="w-5 h-5 text-[#0F172A] group-hover:rotate-12 transition-transform" />
            <span>Start Free Proposal</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </button>

          <button
            onClick={onOpenStrategyCall}
            className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold text-white bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] cursor-pointer shadow-lg"
          >
            <div className="w-8 h-8 rounded-full bg-[#0A84FF]/20 flex items-center justify-center text-[#0A84FF] group-hover:bg-[#0A84FF] group-hover:text-white transition-colors">
              <Phone className="w-4 h-4" />
            </div>
            <span>Strategy Call</span>
          </button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs font-medium text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#10B981]" />
            <span>No Long-Term Lock-in</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#10B981]" />
            <span>48-Hour Rapid Onboarding</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#10B981]" />
            <span>Guaranteed ROAS Targets</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#10B981]" />
            <span>OPC Pvt Ltd Certified</span>
          </div>
        </div>

        {/* Live Interactive Hero Visual Dashboard Mock */}
        <div className="mt-16 max-w-5xl mx-auto relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#00E5FF] via-[#0A84FF] to-purple-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
          
          <div className="relative rounded-3xl bg-[#0F172A]/90 border border-white/10 p-4 sm:p-6 shadow-2xl backdrop-blur-xl">
            {/* Top Bar Controls */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-3 text-xs font-mono-tech text-[#6B7280]">
                  https://orionpulse.co.in/ai-growth-dashboard
                </span>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-mono-tech text-[#0A84FF]">
                <Zap className="w-3.5 h-3.5 animate-bounce" />
                <span>REAL-TIME PIPELINE LIVE</span>
              </div>
            </div>

            {/* Simulated Live Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#0A84FF]/40 transition">
                <div className="text-xs text-[#6B7280] font-medium mb-1">Total Leads Generated</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">524,890+</div>
                <div className="mt-2 text-[11px] text-[#10B981] font-semibold flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> +34.2% vs last month
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#0A84FF]/40 transition">
                <div className="text-xs text-[#6B7280] font-medium mb-1">Client Revenue Lift</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#00E5FF]">$45.8M+</div>
                <div className="mt-2 text-[11px] text-[#10B981] font-semibold flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> 4.8x Average ROAS
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#0A84FF]/40 transition">
                <div className="text-xs text-[#6B7280] font-medium mb-1">AI Agent Speed</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">&lt; 180ms</div>
                <div className="mt-2 text-[11px] text-[#0A84FF] font-semibold">
                  24/7 Gemini 2.5 Active
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#0A84FF]/40 transition">
                <div className="text-xs text-[#6B7280] font-medium mb-1">Client Satisfaction</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">98.4%</div>
                <div className="mt-2 text-[11px] text-amber-300 font-semibold">
                  ★ 4.95 / 5.0 (184 Reviews)
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
