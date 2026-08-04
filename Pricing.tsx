import React, { useState } from 'react';
import { Check, Sparkles, ShieldCheck, ArrowRight, Zap, HelpCircle } from 'lucide-react';
import { PRICING_PLANS } from '../data/companyData';

interface PricingProps {
  onOpenProposal: (planName?: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenProposal }) => {
  const [annual, setAnnual] = useState(true);
  const [customServices, setCustomServices] = useState<{ [key: string]: boolean }>({
    website: true,
    aibot: true,
    ads: false,
    seo: true,
    crm: false,
    outreach: false
  });

  const toggleCustomService = (key: string) => {
    setCustomServices(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Calculate custom scope estimate
  const basePrice = 800;
  let customTotal = basePrice;
  if (customServices.website) customTotal += 600;
  if (customServices.aibot) customTotal += 500;
  if (customServices.ads) customTotal += 700;
  if (customServices.seo) customTotal += 600;
  if (customServices.crm) customTotal += 400;
  if (customServices.outreach) customTotal += 800;

  return (
    <section id="pricing" className="py-24 bg-slate-950 relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-[#00E5FF]/30 text-xs font-mono-tech text-[#00E5FF] mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>TRANSPARENT GROWTH RETAINERS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Predictable Plans for <span className="text-gradient-cyan">Every Growth Stage</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Zero hidden fees. Full transparency. Guaranteed performance deliverables.
          </p>

          {/* Monthly / Annual Billing Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 p-1.5 rounded-2xl bg-slate-900 border border-white/10">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 text-xs font-bold rounded-xl transition cursor-pointer ${
                !annual ? 'bg-slate-800 text-white shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 text-xs font-bold rounded-xl transition cursor-pointer flex items-center gap-2 ${
                annual ? 'bg-gradient-to-r from-[#00E5FF] to-[#0A84FF] text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Annual Billing</span>
              <span className="px-1.5 py-0.5 text-[9px] font-extrabold rounded-md bg-slate-950 text-[#00E5FF]">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {PRICING_PLANS.map((plan) => {
            const price = annual ? plan.priceAnnualMonthly : plan.priceMonthly;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 backdrop-blur-2xl transition-all duration-300 flex flex-col justify-between ${
                  plan.highlighted
                    ? 'bg-slate-900 border-2 border-[#00E5FF] shadow-2xl shadow-[#00E5FF]/20 scale-105 z-10'
                    : 'bg-slate-900/60 border border-white/10 hover:border-white/20'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 text-[10px] font-mono-tech font-extrabold uppercase tracking-wider rounded-full bg-gradient-to-r from-[#00E5FF] to-[#0A84FF] text-slate-950 shadow-lg">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-slate-300 text-xs leading-relaxed mb-6">{plan.description}</p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-white/10">
                    <span className="text-4xl font-extrabold text-white font-mono-tech">${price.toLocaleString()}</span>
                    <span className="text-xs text-slate-400 font-mono-tech">/ month</span>
                    {annual && (
                      <span className="text-[10px] text-[#10B981] ml-2 font-bold">(Billed Annually)</span>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <div className="text-[10px] font-mono-tech text-slate-400 uppercase tracking-wider mb-2">
                      WHAT'S INCLUDED:
                    </div>
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-3 text-xs text-slate-200">
                        <Check className="w-4 h-4 text-[#00E5FF] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onOpenProposal(plan.name)}
                  className={`w-full py-3.5 px-6 text-xs font-bold rounded-2xl transition duration-200 cursor-pointer flex items-center justify-center gap-2 ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-[#00E5FF] to-[#0A84FF] text-slate-950 shadow-lg hover:scale-105'
                      : 'bg-slate-800 text-white hover:bg-slate-700 border border-white/10'
                  }`}
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{plan.ctaText}</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Custom Scope Estimator Tool */}
        <div className="rounded-3xl bg-slate-900 border border-white/10 p-8 shadow-2xl">
          <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
            <div>
              <h3 className="text-xl font-bold text-white">Need a Bespoke Scope? Interactive Custom Calculator</h3>
              <p className="text-xs text-slate-400">Select specific modules to estimate your tailored growth retainer</p>
            </div>
            <div className="text-right">
              <span className="text-xs font-mono-tech text-slate-400">ESTIMATED RETAINER</span>
              <div className="text-2xl font-extrabold text-[#00E5FF] font-mono-tech">${customTotal.toLocaleString()} / mo</div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {[
              { key: 'website', name: 'Custom High-Speed Website', price: '+$600/mo' },
              { key: 'aibot', name: 'Gemini AI Sales Chatbot', price: '+$500/mo' },
              { key: 'ads', name: 'Google & Meta Ads Management', price: '+$700/mo' },
              { key: 'seo', name: 'Programmatic SEO Engine', price: '+$600/mo' },
              { key: 'crm', name: 'CRM & Make Workflow Sync', price: '+$400/mo' },
              { key: 'outreach', name: 'B2B Cold Outreach Engine', price: '+$800/mo' }
            ].map((item) => (
              <label
                key={item.key}
                onClick={() => toggleCustomService(item.key)}
                className={`p-4 rounded-2xl border transition cursor-pointer flex items-center justify-between ${
                  customServices[item.key]
                    ? 'bg-[#00E5FF]/10 border-[#00E5FF] text-white'
                    : 'bg-slate-950 border-white/10 text-slate-400 hover:text-white'
                }`}
              >
                <div>
                  <div className="text-xs font-bold">{item.name}</div>
                  <div className="text-[10px] text-[#00E5FF] font-mono-tech">{item.price}</div>
                </div>
                <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${
                  customServices[item.key] ? 'bg-[#00E5FF] text-slate-950 border-[#00E5FF]' : 'border-white/20'
                }`}>
                  {customServices[item.key] && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </div>
              </label>
            ))}
          </div>

          <button
            onClick={() => onOpenProposal(`Custom Scope ($${customTotal}/mo)`)}
            className="w-full py-3.5 px-6 text-xs font-bold text-slate-950 bg-gradient-to-r from-[#00E5FF] to-[#0A84FF] rounded-2xl shadow-lg hover:scale-105 transition cursor-pointer"
          >
            Submit Custom Scope Proposal Request ($${customTotal}/mo)
          </button>
        </div>

      </div>
    </section>
  );
};
