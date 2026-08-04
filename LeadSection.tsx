import React, { useState } from 'react';
import { Sparkles, Send, CheckCircle2, ShieldCheck, Phone, Calendar, Clock, ArrowRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/companyData';
import { LeadFormData } from '../types';

export const LeadSection: React.FC = () => {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    business: '',
    email: '',
    phone: '',
    website: '',
    budget: '$3,000 - $5,000/mo',
    servicesNeeded: ['Search Engine Optimization (SEO)', 'Bespoke UI/UX & Website Design'],
    goals: 'Increase Qualified Lead Pipeline & Lower CAC',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const availableServices = [
    'SEO & Local SEO',
    'Google & Meta Ads',
    'Website Design & Dev',
    'AI Chatbots & Automation',
    'Lead Generation Engine',
    'CRM & Workflow Sync'
  ];

  const handleToggleService = (service: string) => {
    if (formData.servicesNeeded.includes(service)) {
      setFormData(prev => ({
        ...prev,
        servicesNeeded: prev.servicesNeeded.filter(s => s !== service)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        servicesNeeded: [...prev.servicesNeeded, service]
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please complete the required fields (Name, Email, Phone).');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="lead-form" className="py-24 bg-[#070C18] relative overflow-hidden border-t border-white/10">
      
      {/* Ambient background lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-[#00E5FF]/15 via-[#0A84FF]/15 to-purple-600/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-[#00E5FF]/30 text-xs font-mono-tech text-[#00E5FF] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CONFIDENTIAL GROWTH PROPOSAL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Request Your Free <span className="text-gradient-cyan">Growth Blueprint</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Complete the short form below to receive a custom AI diagnostic and revenue roadmap tailored specifically to your business within 24 hours.
          </p>
        </div>

        {/* Main Form Container */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-slate-900/90 border border-white/15 p-6 sm:p-12 backdrop-blur-2xl shadow-2xl">
          
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Row 1: Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2">
                    Your Full Name <span className="text-[#00E5FF]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/15 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#00E5FF] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2">
                    Business / Company Name <span className="text-[#00E5FF]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Acme Health Technologies"
                    value={formData.business}
                    onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/15 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#00E5FF] transition"
                  />
                </div>
              </div>

              {/* Row 2: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2">
                    Work Email Address <span className="text-[#00E5FF]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. rahul@acmehealth.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/15 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#00E5FF] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2">
                    Phone / WhatsApp Number <span className="text-[#00E5FF]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/15 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#00E5FF] transition"
                  />
                </div>
              </div>

              {/* Row 3: Website & Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2">
                    Website URL (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. acmehealth.com"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/15 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#00E5FF] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2">
                    Estimated Monthly Growth Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/15 text-white text-xs focus:outline-none focus:border-[#00E5FF] transition cursor-pointer"
                  >
                    <option value="Under $1,500/mo">Under $1,500 / month</option>
                    <option value="$1,500 - $3,000/mo">$1,500 - $3,000 / month</option>
                    <option value="$3,000 - $5,000/mo">$3,000 - $5,000 / month (Recommended)</option>
                    <option value="$5,000 - $10,000/mo">$5,000 - $10,000 / month</option>
                    <option value="$10,000+/mo">$10,000+ / month (Enterprise)</option>
                  </select>
                </div>
              </div>

              {/* Services Checkboxes */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-3">
                  Services Needed (Select all that apply)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {availableServices.map((srv) => {
                    const isSelected = formData.servicesNeeded.includes(srv);
                    return (
                      <button
                        type="button"
                        key={srv}
                        onClick={() => handleToggleService(srv)}
                        className={`p-3 rounded-xl border text-xs font-semibold text-left transition cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? 'bg-[#00E5FF]/10 border-[#00E5FF] text-white'
                            : 'bg-slate-950 border-white/10 text-slate-400 hover:text-white'
                        }`}
                      >
                        <span>{srv}</span>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-2">
                  Primary Growth Goals or Questions
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your target market, current marketing channels, or specific goals..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/15 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#00E5FF] transition"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-8 text-xs font-bold text-slate-950 bg-gradient-to-r from-[#00E5FF] via-[#0A84FF] to-[#00E5FF] hover:opacity-90 rounded-2xl shadow-xl hover:scale-[1.01] transition duration-200 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Generating AI Proposal & Blueprint...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Generate & Request Free Proposal</span>
                  </>
                )}
              </button>

              <div className="text-center text-[11px] text-slate-400 flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                <span>100% Confidential • NDA Protected • No Spam Guarantee</span>
              </div>

            </form>
          ) : (
            /* Success State */
            <div className="text-center py-12 space-y-6 animate-fadeIn">
              <div className="w-20 h-20 rounded-full bg-[#10B981]/20 border border-[#10B981]/40 flex items-center justify-center mx-auto text-[#10B981]">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Proposal Request Received!
              </h3>

              <p className="text-slate-300 text-sm max-w-lg mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{formData.name}</strong>. Our Senior Growth Architect at <strong className="text-[#00E5FF]">OrionPulse Technologies</strong> is compiling your customized AI Audit & Strategy Blueprint.
              </p>

              {/* Instant Strategy Call Scheduler Preview */}
              <div className="max-w-md mx-auto p-6 rounded-2xl bg-slate-950 border border-white/10 text-left space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono-tech text-[#00E5FF]">
                  <Calendar className="w-4 h-4" />
                  <span>PRE-CONFIRMED STRATEGY SLOT AVAILABLE</span>
                </div>
                <div className="text-xs text-slate-300">
                  Want to skip the wait? Reserve a 20-minute strategy call with our leadership team today.
                </div>
                <a
                  href={`https://wa.me/919876543210?text=Hi%20OrionPulse!%20I%20just%20submitted%20a%20proposal%20request%20for%20${encodeURIComponent(formData.business)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 text-xs font-bold text-slate-950 bg-[#10B981] rounded-xl hover:opacity-90 transition"
                >
                  <Phone className="w-4 h-4" />
                  <span>Instant WhatsApp Confirmation</span>
                </a>
              </div>

              <button
                onClick={() => setSubmitted(false)}
                className="text-xs text-slate-400 hover:text-white underline cursor-pointer"
              >
                Submit another request
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
