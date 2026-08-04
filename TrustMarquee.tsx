import React from 'react';
import { ShieldCheck, Award, CheckCircle2, Zap } from 'lucide-react';

export const TrustMarquee: React.FC = () => {
  const partners = [
    { name: "Google Premier Partner", icon: "G", color: "text-red-400" },
    { name: "Meta Business Partner", icon: "∞", color: "text-blue-400" },
    { name: "AWS Advanced Network", icon: "AWS", color: "text-amber-400" },
    { name: "HubSpot Platinum Agency", icon: "H", color: "text-orange-400" },
    { name: "Shopify Plus Partner", icon: "S", color: "text-emerald-400" },
    { name: "ISO 27001 Security Certified", icon: "ISO", color: "text-cyan-400" },
    { name: "TechStars Portfolio Network", icon: "TS", color: "text-purple-400" },
    { name: "Klaviyo Master Partner", icon: "K", color: "text-pink-400" }
  ];

  return (
    <section className="py-12 bg-slate-950/60 border-y border-white/10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
        <p className="text-xs font-mono-tech tracking-widest text-slate-400 uppercase">
          TRUSTED BY 250+ HIGH-GROWTH BRANDS & CERTIFIED BY INDUSTRY LEADERS
        </p>
      </div>

      <div className="flex overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
          {partners.concat(partners).map((partner, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-slate-900/60 border border-white/5 hover:border-[#00E5FF]/30 transition-all cursor-default"
            >
              <div className={`w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center font-bold text-sm ${partner.color}`}>
                {partner.icon}
              </div>
              <span className="text-sm font-semibold text-slate-300">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
