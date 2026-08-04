import React, { useState, useEffect } from 'react';
import { Sparkles, Phone, ArrowRight, Menu, X, Bot, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface NavbarProps {
  onOpenProposal: () => void;
  onOpenStrategyCall: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenProposal, onOpenStrategyCall }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'AI Showcase', href: '#ai-showcase' },
    { name: 'Why OrionPulse', href: '#why-us' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Process', href: '#process' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#0F172A]/80 backdrop-blur-md border-b border-white/5 shadow-2xl py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0A84FF] to-[#00E5FF] p-[1px] shadow-lg shadow-[#0A84FF]/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#0F172A] rounded-[11px] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0A84FF]/20 to-[#00E5FF]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-r from-[#00E5FF] to-[#0A84FF] animate-pulse" />
                <div className="absolute w-6 h-6 rounded-full border border-[#00E5FF]/40 animate-ping opacity-30" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-lg font-bold tracking-tight text-white group-hover:text-[#0A84FF] transition-colors">
                OrionPulse<span className="text-[#0A84FF]">.</span>
              </span>
              <span className="text-[10px] font-mono-tech tracking-wider text-[#6B7280] -mt-1 uppercase">
                Technologies
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenStrategyCall}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 rounded-full border border-white/10 transition-all duration-200 shadow-sm cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-[#00E5FF]" />
              <span>Book Strategy Call</span>
            </button>

            <button
              onClick={onOpenProposal}
              className="group relative inline-flex items-center gap-2 px-5 py-2 text-xs font-bold text-slate-900 bg-gradient-to-r from-[#00E5FF] to-[#0A84FF] hover:from-[#33ECFF] hover:to-[#2B95FF] rounded-full shadow-lg shadow-[#00E5FF]/25 hover:shadow-[#00E5FF]/40 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-slate-950 group-hover:rotate-12 transition-transform" />
              <span>Get Free Proposal</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenProposal}
              className="px-3 py-1.5 text-xs font-bold text-slate-950 bg-gradient-to-r from-[#00E5FF] to-[#0A84FF] rounded-full shadow-md cursor-pointer"
            >
              Proposal
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-slate-900/80 rounded-xl border border-white/10"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#070C18]/95 backdrop-blur-2xl border-b border-white/10 p-6 shadow-2xl transition-all">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-sm font-medium text-slate-200 hover:text-[#00E5FF] hover:bg-white/5 rounded-xl transition-all"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenStrategyCall();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-200 bg-slate-800 rounded-xl border border-white/10"
              >
                <Phone className="w-4 h-4 text-[#00E5FF]" />
                <span>Book Strategy Call</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenProposal();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-slate-950 bg-gradient-to-r from-[#00E5FF] to-[#0A84FF] rounded-xl shadow-lg"
              >
                <Sparkles className="w-4 h-4" />
                <span>Get Free Proposal</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
