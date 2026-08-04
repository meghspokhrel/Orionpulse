import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, Clock, Building2, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const ContactSection: React.FC = () => {
  const [msgSent, setMsgSent] = useState(false);
  const [quickMessage, setQuickMessage] = useState({
    name: '',
    email: '',
    phone: '',
    note: ''
  });

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickMessage.name || !quickMessage.email) return;
    setMsgSent(true);
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden border-t border-white/10">
      
      {/* Background glow */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#00E5FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-[#00E5FF]/30 text-xs font-mono-tech text-[#00E5FF] mb-4">
            <Building2 className="w-3.5 h-3.5" />
            <span>DIRECT CORPORATE CONTACT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Let's Build Something <span className="text-gradient-cyan">Extraordinary</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Reach out directly to our leadership team in Bengaluru or connect via WhatsApp for instant response.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Details Cards */}
          <div className="space-y-6">
            
            {/* Quick Response Badge Card */}
            <div className="p-6 rounded-3xl bg-slate-900/80 border border-white/10 backdrop-blur-2xl shadow-xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#10B981]/20 border border-[#10B981]/30 flex items-center justify-center text-[#10B981]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Average Response Velocity</div>
                  <div className="text-xs text-[#10B981] font-semibold">{COMPANY_INFO.responseAvg} Guaranteed</div>
                </div>
              </div>
              <span className="flex h-3 w-3 rounded-full bg-[#10B981] animate-pulse" />
            </div>

            {/* Direct Channel Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-[#00E5FF]/40 transition-all hover:-translate-y-1 group"
              >
                <Mail className="w-6 h-6 text-[#00E5FF] mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-xs font-mono-tech text-slate-400 mb-1">OFFICIAL EMAIL</div>
                <div className="text-sm font-bold text-white">{COMPANY_INFO.email}</div>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-[#00E5FF]/40 transition-all hover:-translate-y-1 group"
              >
                <Phone className="w-6 h-6 text-[#0A84FF] mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-xs font-mono-tech text-slate-400 mb-1">PHONE / DIRECT</div>
                <div className="text-sm font-bold text-white">{COMPANY_INFO.phone}</div>
              </a>

            </div>

            {/* WhatsApp Card */}
            <a
              href={`https://wa.me/919876543210?text=Hi%20OrionPulse!%20I%20would%20like%20to%20discuss%20growth%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-3xl bg-gradient-to-r from-emerald-950/80 to-slate-900 border border-[#10B981]/40 hover:border-[#10B981] transition-all flex items-center justify-between group shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#10B981] flex items-center justify-center text-slate-950 font-bold">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono-tech text-[#10B981] font-bold">INSTANT WHATSAPP CHAT</div>
                  <div className="text-sm font-bold text-white">Chat with Senior Growth Architect</div>
                </div>
              </div>
              <Send className="w-5 h-5 text-[#10B981] group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Corporate Address Card */}
            <div className="p-6 rounded-3xl bg-slate-900/80 border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono-tech text-[#00E5FF]">
                <MapPin className="w-4 h-4" />
                <span>REGISTERED OFFICE HEADQUARTERS</span>
              </div>
              <div className="text-sm font-bold text-white">
                {COMPANY_INFO.name}
              </div>
              <div className="text-xs text-slate-300 leading-relaxed">
                {COMPANY_INFO.address}
              </div>
              <div className="pt-2 text-[10px] text-slate-500 font-mono-tech">
                Corporate Registry CIN: {COMPANY_INFO.cin}
              </div>
            </div>

          </div>

          {/* Quick Message Box */}
          <div className="p-8 rounded-3xl bg-slate-900/90 border border-white/15 backdrop-blur-2xl shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-2">Send an Instant Inquiry</h3>
            <p className="text-xs text-slate-400 mb-6">Our team responds within 15 minutes during standard working hours.</p>

            {!msgSent ? (
              <form onSubmit={handleQuickSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priyanshu Gupta"
                    value={quickMessage.name}
                    onChange={(e) => setQuickMessage({ ...quickMessage, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/15 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-[#00E5FF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. priyanshu@business.in"
                    value={quickMessage.email}
                    onChange={(e) => setQuickMessage({ ...quickMessage, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/15 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-[#00E5FF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    placeholder="e.g. +91 98765 43210"
                    value={quickMessage.phone}
                    onChange={(e) => setQuickMessage({ ...quickMessage, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/15 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-[#00E5FF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Message / Requirements</label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe what you're looking to build or achieve..."
                    value={quickMessage.note}
                    onChange={(e) => setQuickMessage({ ...quickMessage, note: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/15 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-[#00E5FF]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 text-xs font-bold text-slate-950 bg-gradient-to-r from-[#00E5FF] to-[#0A84FF] rounded-xl shadow-lg hover:scale-[1.01] transition cursor-pointer"
                >
                  Send Inquiry Now
                </button>
              </form>
            ) : (
              <div className="text-center py-8 space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#10B981] mx-auto" />
                <h4 className="text-lg font-bold text-white">Inquiry Received!</h4>
                <p className="text-xs text-slate-300">
                  Thank you, {quickMessage.name}. A growth specialist will email you at {quickMessage.email} within 15 minutes.
                </p>
                <button
                  onClick={() => setMsgSent(false)}
                  className="text-xs text-[#00E5FF] underline cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
