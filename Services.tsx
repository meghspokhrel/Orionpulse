import React, { useState } from 'react';
import { 
  Search, MapPin, Target, Share2, Layout, Code, Bot, Zap, TrendingUp, 
  FileText, Mail, Sparkles, BarChart3, Users, Database, ArrowRight, Check, X, Clock, ShieldCheck
} from 'lucide-react';
import { SERVICES_DATA } from '../data/companyData';
import { ServiceItem } from '../types';

interface ServicesProps {
  onOpenProposal: (serviceName?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenProposal }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'ai' | 'marketing' | 'web' | 'growth'>('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search': return <Search className="w-6 h-6 text-[#00E5FF]" />;
      case 'MapPin': return <MapPin className="w-6 h-6 text-[#0A84FF]" />;
      case 'Target': return <Target className="w-6 h-6 text-[#00E5FF]" />;
      case 'Share2': return <Share2 className="w-6 h-6 text-[#0A84FF]" />;
      case 'Layout': return <Layout className="w-6 h-6 text-[#00E5FF]" />;
      case 'Code': return <Code className="w-6 h-6 text-[#0A84FF]" />;
      case 'Bot': return <Bot className="w-6 h-6 text-[#00E5FF]" />;
      case 'Zap': return <Zap className="w-6 h-6 text-amber-400" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-[#10B981]" />;
      case 'FileText': return <FileText className="w-6 h-6 text-[#00E5FF]" />;
      case 'Mail': return <Mail className="w-6 h-6 text-[#0A84FF]" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-purple-400" />;
      case 'BarChart3': return <BarChart3 className="w-6 h-6 text-[#00E5FF]" />;
      case 'Users': return <Users className="w-6 h-6 text-[#0A84FF]" />;
      case 'Database': return <Database className="w-6 h-6 text-[#10B981]" />;
      default: return <Sparkles className="w-6 h-6 text-[#00E5FF]" />;
    }
  };

  const filteredServices = activeTab === 'all' 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter(s => s.category === activeTab);

  return (
    <section id="services" className="py-24 bg-[#070C18] relative overflow-hidden">
      {/* Background Subtle Lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00E5FF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0A84FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-[#00E5FF]/30 text-xs font-mono-tech text-[#00E5FF] mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>FULL-STACK AI & GROWTH SERVICES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            End-to-End Capabilities Built to{' '}
            <span className="text-gradient-cyan">Outpace Competition</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            From custom AI automation and high-speed web engineering to ROI-driven SEO and performance advertising.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Services (15)' },
            { id: 'ai', label: '🤖 AI & Automation' },
            { id: 'marketing', label: '🎯 Ads & SEO' },
            { id: 'web', label: '💻 Web & UI/UX' },
            { id: 'growth', label: '📈 Growth & Strategy' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-2.5 text-xs font-semibold rounded-xl transition-all duration-300 cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-[#00E5FF] to-[#0A84FF] text-slate-950 font-bold shadow-lg shadow-[#00E5FF]/20 scale-105'
                  : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-2xl bg-slate-900/60 border border-white/10 hover:border-[#00E5FF]/40 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#00E5FF]/10 flex flex-col justify-between"
            >
              {service.popular && (
                <div className="absolute top-4 right-4 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider rounded-md bg-[#00E5FF]/20 text-[#00E5FF] border border-[#00E5FF]/30">
                  Popular Choice
                </div>
              )}

              <div>
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#00E5FF]/10 transition-all">
                  {getIcon(service.icon)}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00E5FF] transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {service.shortDesc}
                </p>
              </div>

              <div>
                {/* ROI Badge */}
                <div className="p-3 rounded-xl bg-slate-950/70 border border-white/5 mb-5 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span className="text-xs font-semibold text-slate-200">
                    {service.roiImpact}
                  </span>
                </div>

                {/* Button Action */}
                <button
                  onClick={() => setSelectedService(service)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-slate-200 hover:text-white bg-slate-800/80 hover:bg-[#00E5FF] hover:text-slate-950 rounded-xl border border-white/10 transition-all duration-200 cursor-pointer"
                >
                  <span>Explore Deliverables & ROI</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal for Service Deep Dive */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center">
                {getIcon(selectedService.icon)}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {selectedService.title}
                </h3>
                <span className="text-xs font-mono-tech text-[#00E5FF] uppercase">
                  Category: {selectedService.category}
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {selectedService.fullDesc}
            </p>

            {/* Deliverables List */}
            <div className="mb-6">
              <h4 className="text-xs font-mono-tech text-slate-400 uppercase tracking-wider mb-3">
                Key Service Deliverables:
              </h4>
              <div className="space-y-2">
                {selectedService.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-200">
                    <Check className="w-4 h-4 text-[#10B981] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-slate-950/80 border border-white/10">
                <div className="text-[11px] font-mono-tech text-slate-400 mb-1">PROJECTED ROI IMPACT</div>
                <div className="text-sm font-bold text-[#10B981]">{selectedService.roiImpact}</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-950/80 border border-white/10">
                <div className="text-[11px] font-mono-tech text-slate-400 mb-1">TIME TO LAUNCH</div>
                <div className="text-sm font-bold text-[#00E5FF] flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {selectedService.timeToDeploy}
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  const sName = selectedService.title;
                  setSelectedService(null);
                  onOpenProposal(sName);
                }}
                className="flex-1 py-3 px-5 text-xs font-bold text-slate-950 bg-gradient-to-r from-[#00E5FF] to-[#0A84FF] rounded-xl shadow-lg hover:opacity-90 transition"
              >
                Get Proposal for {selectedService.title}
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
