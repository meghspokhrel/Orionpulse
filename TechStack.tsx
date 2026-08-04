import React, { useState } from 'react';
import { Cpu, Globe, Target, BarChart, Sparkles } from 'lucide-react';
import { TECH_STACK } from '../data/companyData';

export const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredTech = activeCategory === 'all'
    ? TECH_STACK
    : TECH_STACK.filter(t => t.category === activeCategory);

  return (
    <section className="py-24 bg-[#070C18] relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-[#00E5FF]/30 text-xs font-mono-tech text-[#00E5FF] mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>MODERN ENTERPRISE TECH STACK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Engineered with <span className="text-gradient-cyan">World-Class Tools</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            We build and deploy on top of industry-standard AI platforms, cloud frameworks, and high-precision telemetry engines.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Technologies' },
            { id: 'AI & ML', label: '🤖 AI & Machine Learning' },
            { id: 'Web & Cloud', label: '💻 Web & Cloud Infrastructure' },
            { id: 'Marketing Tech', label: '🎯 Marketing & Ads Automation' },
            { id: 'Analytics & CRM', label: '📊 BI, Analytics & CRM' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-[#00E5FF] to-[#0A84FF] text-slate-950 font-bold shadow-md'
                  : 'bg-slate-900 text-slate-300 hover:text-white border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredTech.map((item, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-2xl bg-slate-900/60 border backdrop-blur-xl transition-all hover:-translate-y-1 ${
                item.featured ? 'border-[#00E5FF]/40 bg-slate-900/80 shadow-lg' : 'border-white/5 hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono-tech text-[#00E5FF] uppercase">{item.category}</span>
                {item.featured && (
                  <span className="px-2 py-0.5 text-[9px] font-bold rounded-md bg-[#00E5FF]/20 text-[#00E5FF]">
                    Core Stack
                  </span>
                )}
              </div>
              <h3 className="text-base font-bold text-white mb-1">{item.name}</h3>
              <p className="text-slate-300 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
