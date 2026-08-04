import React, { useState } from 'react';
import { X, Sparkles, Send, CheckCircle2, Phone, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface ProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetService?: string;
  isCallBooking?: boolean;
}

export const ProposalModal: React.FC<ProposalModalProps> = ({
  isOpen,
  onClose,
  presetService,
  isCallBooking = false
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: presetService || 'Full-Stack AI Growth Engine',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl bg-slate-900 border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E5FF]/10 text-[#00E5FF] text-xs font-mono-tech w-fit mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isCallBooking ? 'STRATEGY CALL RESERVATION' : 'CONFIDENTIAL PROPOSAL REQUEST'}</span>
            </div>

            <h3 className="text-2xl font-extrabold text-white mb-2">
              {isCallBooking ? 'Schedule Your 1-on-1 Growth Strategy Call' : 'Request Your Customized Growth Blueprint'}
            </h3>

            <p className="text-xs text-slate-300 mb-6">
              Connect with a Senior Architect at <strong className="text-white">{COMPANY_INFO.name}</strong>. We deliver bespoke revenue blueprints within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vikram Malhotra"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/15 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-[#00E5FF]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Work Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="vikram@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/15 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-[#00E5FF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/15 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-[#00E5FF]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Company / Organization</label>
                <input
                  type="text"
                  placeholder="e.g. AuraPay Financial"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/15 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-[#00E5FF]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Primary Interest / Scope</label>
                <input
                  type="text"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/15 text-white text-xs focus:outline-none focus:border-[#00E5FF]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Additional Context / Goals</label>
                <textarea
                  rows={2}
                  placeholder="Mention target audience, current monthly revenue, or launch deadlines..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/15 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-[#00E5FF]"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-6 text-xs font-bold text-slate-950 bg-gradient-to-r from-[#00E5FF] to-[#0A84FF] rounded-xl shadow-lg hover:scale-[1.01] transition cursor-pointer flex items-center justify-center gap-2"
              >
                {loading ? 'Processing Submission...' : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>{isCallBooking ? 'Confirm Strategy Call Reservation' : 'Submit Free Proposal Request'}</span>
                  </>
                )}
              </button>

              <div className="text-center text-[10px] text-slate-500 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                <span>OPC Pvt Ltd Confidentiality Agreement Applied</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <CheckCircle2 className="w-12 h-12 text-[#10B981] mx-auto" />
            <h4 className="text-xl font-bold text-white">Request Successfully Transmitted!</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Thank you, <strong className="text-white">{formData.name}</strong>. Our Senior Growth Strategist will email you at <strong className="text-[#00E5FF]">{formData.email}</strong> and send a WhatsApp confirmation within 15 minutes.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="py-2 px-6 text-xs font-bold text-slate-950 bg-[#00E5FF] rounded-xl hover:opacity-90 transition cursor-pointer"
            >
              Close & Return to Website
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
