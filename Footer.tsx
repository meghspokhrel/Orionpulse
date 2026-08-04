import React, { useState } from 'react';
import { ArrowUp, Sparkles, ShieldCheck, Mail, Send, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const Footer: React.FC = () => {
  const [newsEmail, setNewsEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsEmail) return;
    setSubscribed(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F172A] text-[#6B7280] text-xs border-t border-white/5 relative overflow-hidden">
      
      {/* Upper Newsletter Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-lg mb-2">
              <Sparkles className="w-5 h-5 text-[#0A84FF]" />
              <span>Subscribe to OrionPulse AI Growth Dispatch</span>
            </div>
            <p className="text-[#6B7280] text-xs">
              Weekly teardowns on AI marketing, programmatic SEO tactics, and performance engineering. Zero spam.
            </p>
          </div>

          <div>
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your executive email..."
                  value={newsEmail}
                  onChange={(e) => setNewsEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[#6B7280] text-xs focus:outline-none focus:border-[#0A84FF]"
                />
                <button
                  type="submit"
                  className="px-6 py-3 font-bold text-white bg-[#0A84FF] hover:bg-[#0A84FF]/90 rounded-xl shadow-lg shadow-[#0A84FF]/20 hover:scale-105 transition cursor-pointer shrink-0"
                >
                  Subscribe Free
                </button>
              </form>
            ) : (
              <div className="p-3 rounded-xl bg-[#10B981]/10 border border-[#10B981]/20 text-[#10B981] font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Subscribed! Check your inbox for our latest growth report.</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#0A84FF] p-[1px] flex items-center justify-center">
                <div className="w-full h-full bg-[#0F172A] rounded-[11px] flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-[#0A84FF] animate-pulse" />
                </div>
              </div>
              <span className="font-heading text-lg font-bold text-white">
                OrionPulse<span className="text-[#0A84FF]">.</span>
              </span>
            </div>

            <p className="text-[#6B7280] text-xs leading-relaxed max-w-sm">
              {COMPANY_INFO.name} is a premier AI automation, web development, and digital growth agency delivering enterprise-grade software and high-ROAS marketing engines.
            </p>

            <div className="space-y-1 text-[11px] font-mono-tech text-[#6B7280]">
              <div>Domain: <strong className="text-slate-300">orionpulse.co.in</strong></div>
              <div>CIN: <strong className="text-slate-300">{COMPANY_INFO.cin}</strong></div>
              <div>Headquarters: <strong className="text-slate-300">Bengaluru, Karnataka, India</strong></div>
            </div>
          </div>

          {/* Column 1: Services */}
          <div>
            <h4 className="text-xs font-mono-tech font-bold text-white uppercase tracking-wider mb-4">
              Growth Services
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#services" className="hover:text-[#0A84FF] transition">Search Engine Optimization</a></li>
              <li><a href="#services" className="hover:text-[#0A84FF] transition">Google & Meta Ads</a></li>
              <li><a href="#services" className="hover:text-[#0A84FF] transition">UI/UX & Web Development</a></li>
              <li><a href="#services" className="hover:text-[#0A84FF] transition">24/7 AI Chatbots & Agents</a></li>
              <li><a href="#services" className="hover:text-[#0A84FF] transition">Marketing Automation</a></li>
              <li><a href="#services" className="hover:text-[#0A84FF] transition">B2B Lead Generation</a></li>
            </ul>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs font-mono-tech font-bold text-white uppercase tracking-wider mb-4">
              Company & Case Studies
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#about" className="hover:text-[#0A84FF] transition">About OrionPulse</a></li>
              <li><a href="#ai-showcase" className="hover:text-[#0A84FF] transition">AI Growth Engine Demo</a></li>
              <li><a href="#portfolio" className="hover:text-[#0A84FF] transition">Interactive Portfolio</a></li>
              <li><a href="#case-studies" className="hover:text-[#0A84FF] transition">Case Studies & ROI</a></li>
              <li><a href="#process" className="hover:text-[#0A84FF] transition">5-Step Process</a></li>
              <li><a href="#pricing" className="hover:text-[#0A84FF] transition">Pricing & Retainers</a></li>
            </ul>
          </div>

          {/* Column 3: Legal & Credentials */}
          <div>
            <h4 className="text-xs font-mono-tech font-bold text-white uppercase tracking-wider mb-4">
              Trust & Legal
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#contact" className="hover:text-[#0A84FF] transition">Privacy Policy</a></li>
              <li><a href="#contact" className="hover:text-[#0A84FF] transition">Terms of Service</a></li>
              <li><a href="#contact" className="hover:text-[#0A84FF] transition">Cookie Policy</a></li>
              <li><a href="#contact" className="hover:text-[#0A84FF] transition">ISO 27001 Security</a></li>
              <li><a href="#contact" className="hover:text-[#0A84FF] transition">OPC Pvt Ltd Credentials</a></li>
              <li><a href="#faq" className="hover:text-[#0A84FF] transition">FAQ Center</a></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-6 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#6B7280]">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></div>
              <span className="text-[10px] uppercase tracking-widest font-bold text-[#6B7280]">Network Status: Operational</span>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#0A84FF]" />
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
};
