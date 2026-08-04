import React, { useState } from 'react';
import { TrendingUp, DollarSign, Calculator, ArrowRight, ShieldCheck, Sparkles, Activity } from 'lucide-react';
import { CASE_STUDIES } from '../data/companyData';

interface CaseStudiesProps {
  onOpenProposal: () => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onOpenProposal }) => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [adSpend, setAdSpend] = useState<number>(3000);
  const [monthlyTraffic, setMonthlyTraffic] = useState<number>(15000);

  const activeCase = CASE_STUDIES[activeCaseIndex];

  // Simulator calculations
  const projectedMonthlyRevenue = Math.round(adSpend * 4.8);
  const projectedLeads = Math.round(monthlyTraffic * 0.042);
  const estimatedCostPerLead = Math.round((adSpend / Math.max(projectedLeads, 1)));

  return (
    <section id="case-studies" className="py-24 bg-slate-950 relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-[#00E5FF]/30 text-xs font-mono-tech text-[#00E5FF] mb-4">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>DEEP CASE STUDIES & ROI SIMULATOR</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Proven Multipliers & <span className="text-gradient-cyan">ROI Simulator</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Review detailed transformation breakdowns or use our interactive growth calculator to project your ROI potential.
          </p>
        </div>

        {/* Case Study Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {CASE_STUDIES.map((c, idx) => (
            <button
              key={c.id}
              onClick={() => setActiveCaseIndex(idx)}
              className={`px-5 py-3 rounded-2xl text-xs font-bold transition-all duration-300 cursor-pointer ${
                activeCaseIndex === idx
                  ? 'bg-gradient-to-r from-[#00E5FF] to-[#0A84FF] text-slate-950 shadow-xl scale-105'
                  : 'bg-slate-900 text-slate-300 hover:text-white border border-white/10'
              }`}
            >
              {c.client} ({c.growthMultiplier})
            </button>
          ))}
        </div>

        {/* Selected Case Study Breakdown */}
        <div className="rounded-3xl bg-slate-900/90 border border-white/10 p-6 sm:p-10 backdrop-blur-2xl shadow-2xl mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            <div>
              <span className="text-xs font-mono-tech text-[#00E5FF] uppercase tracking-wider">{activeCase.industry}</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 mb-4 leading-tight">
                {activeCase.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {activeCase.summary}
              </p>

              {/* Before vs After Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-slate-950 border border-red-500/20">
                  <div className="text-[11px] font-mono-tech text-red-400 mb-2">BEFORE ORIONPULSE</div>
                  {activeCase.beforeStats.map((st, i) => (
                    <div key={i} className="text-xs text-slate-300 mb-1">
                      <span className="text-slate-400">{st.label}:</span> <strong className="text-white">{st.value}</strong>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-[#00E5FF]/30">
                  <div className="text-[11px] font-mono-tech text-[#00E5FF] mb-2">AFTER ORIONPULSE</div>
                  {activeCase.afterStats.map((st, i) => (
                    <div key={i} className="text-xs text-slate-300 mb-1">
                      <span className="text-slate-400">{st.label}:</span> <strong className="text-[#10B981] font-bold">{st.value}</strong>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono-tech text-slate-400">PRIMARY GROWTH METRIC</div>
                  <div className="text-xl font-bold text-[#00E5FF]">{activeCase.primaryMetric}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-mono-tech text-slate-400">ROAS ACHIEVED</div>
                  <div className="text-xl font-bold text-[#10B981]">{activeCase.secondaryMetric}</div>
                </div>
              </div>

            </div>

            <div className="relative rounded-2xl overflow-hidden h-80 sm:h-[400px] border border-white/10">
              <img src={activeCase.heroImage} alt={activeCase.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-950/90 border border-[#00E5FF]/40 backdrop-blur-md">
                <div className="text-xs font-mono-tech text-slate-400">OFFICIAL CASE MULTIPLIER</div>
                <div className="text-2xl font-extrabold text-white">{activeCase.growthMultiplier}</div>
              </div>
            </div>

          </div>
        </div>

        {/* Interactive Growth & ROI Simulator */}
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-[#00E5FF]/30 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#00E5FF]/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/10">
            <Calculator className="w-6 h-6 text-[#00E5FF]" />
            <div>
              <h3 className="text-xl font-bold text-white">Interactive OrionPulse Growth Calculator</h3>
              <p className="text-xs text-slate-400">Adjust the sliders to simulate projected marketing yield and pipeline volume</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Sliders */}
            <div className="space-y-6">
              
              {/* Slider 1: Monthly Ad Budget */}
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-slate-300 mb-2">
                  <span>Monthly Marketing / Ad Spend ($)</span>
                  <span className="text-lg font-bold text-[#00E5FF] font-mono-tech">${adSpend.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="25000"
                  step="500"
                  value={adSpend}
                  onChange={(e) => setAdSpend(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#00E5FF]"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                  <span>$1,000/mo</span>
                  <span>$25,000/mo</span>
                </div>
              </div>

              {/* Slider 2: Monthly Visitors */}
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-slate-300 mb-2">
                  <span>Target Monthly Website Visitors</span>
                  <span className="text-lg font-bold text-purple-400 font-mono-tech">{monthlyTraffic.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="100000"
                  step="2500"
                  value={monthlyTraffic}
                  onChange={(e) => setMonthlyTraffic(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-400"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                  <span>5,000</span>
                  <span>100,000</span>
                </div>
              </div>

            </div>

            {/* Calculated Output Box */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-white/10 space-y-4">
              <div className="text-xs font-mono-tech text-slate-400 uppercase tracking-wider">
                PROJECTED MONTHLY GROWTH OUTPUT
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-slate-900 border border-white/5">
                  <div className="text-[10px] text-slate-400">Estimated Revenue Lift</div>
                  <div className="text-2xl font-extrabold text-[#10B981] font-mono-tech">${projectedMonthlyRevenue.toLocaleString()}</div>
                  <div className="text-[10px] text-slate-500">Based on 4.8x ROAS benchmark</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900 border border-white/5">
                  <div className="text-[10px] text-slate-400">Monthly Leads Captured</div>
                  <div className="text-2xl font-extrabold text-[#00E5FF] font-mono-tech">{projectedLeads.toLocaleString()}</div>
                  <div className="text-[10px] text-slate-500">4.2% AI Bot conversion</div>
                </div>
              </div>

              <button
                onClick={onOpenProposal}
                className="w-full py-3.5 px-6 text-xs font-bold text-slate-950 bg-gradient-to-r from-[#00E5FF] to-[#0A84FF] rounded-xl shadow-lg hover:scale-105 transition duration-200 cursor-pointer flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Claim This Growth Blueprint</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
