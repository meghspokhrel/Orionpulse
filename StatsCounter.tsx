import React from 'react';
import { TrendingUp, Users, Eye, Trophy, Star, DollarSign } from 'lucide-react';

export const StatsCounter: React.FC = () => {
  const stats = [
    {
      value: "250+",
      label: "Projects Delivered",
      subtext: "Across 18 Global Industries",
      icon: <Trophy className="w-6 h-6 text-[#00E5FF]" />
    },
    {
      value: "98%",
      label: "Client Satisfaction",
      subtext: "184 Verified Reviews",
      icon: <Star className="w-6 h-6 text-amber-400" />
    },
    {
      value: "10M+",
      label: "Impressions Generated",
      subtext: "Organic & Paid Reach",
      icon: <Eye className="w-6 h-6 text-[#0A84FF]" />
    },
    {
      value: "500K+",
      label: "Leads Generated",
      subtext: "High-Intent Pipeline",
      icon: <Users className="w-6 h-6 text-[#10B981]" />
    },
    {
      value: "$45M+",
      label: "Client Revenue Added",
      subtext: "Attributed Conversion",
      icon: <DollarSign className="w-6 h-6 text-purple-400" />
    }
  ];

  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
          {stats.map((st, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-slate-900/60 border border-white/5 hover:border-[#00E5FF]/30 backdrop-blur-md transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-800/80 mx-auto flex items-center justify-center mb-4 border border-white/10">
                {st.icon}
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono-tech mb-1">
                {st.value}
              </div>
              <div className="text-xs font-bold text-slate-200 mb-1">{st.label}</div>
              <div className="text-[10px] text-slate-400 font-mono-tech">{st.subtext}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
