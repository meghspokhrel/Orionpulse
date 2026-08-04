import React, { useState } from 'react';
import { Bot, Sparkles, Search, CheckCircle, AlertTriangle, Zap, Cpu, ArrowRight, RefreshCw, BarChart2 } from 'lucide-react';

export const AiShowcase: React.FC = () => {
  const [urlInput, setUrlInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [auditResult, setAuditResult] = useState<null | {
    domain: string;
    speedScore: number;
    seoScore: number;
    leadCaptureGrade: string;
    aiBotOpportunity: string;
    recommendations: string[];
  }>(null);

  const handleRunAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!urlInput.trim()) return;

    setLoading(true);
    setAuditResult(null);

    // Simulate instant AI analysis
    setTimeout(() => {
      const cleanUrl = urlInput.replace(/^https?:\/\//, '').replace(/\/$/, '');
      setAuditResult({
        domain: cleanUrl,
        speedScore: 92,
        seoScore: 78,
        leadCaptureGrade: 'B-',
        aiBotOpportunity: 'High (+3.4x Lead Capture Lift)',
        recommendations: [
          'Enable sub-200ms Gemini 2.5 AI Sales Bot for instant lead response',
          'Optimize Core Web Vitals (LCP is currently ~2.4s)',
          'Implement programmatic local schema tags for search engine dominance',
          'Deploy server-side GA4 + Meta Conversions API tracking'
        ]
      });
      setLoading(false);
    }, 1200);
  };

  return (
    <section id="ai-showcase" className="py-24 bg-slate-950 relative overflow-hidden border-t border-white/10">
      {/* Glow Effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00E5FF]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-purple-500/30 text-xs font-mono-tech text-purple-400 mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>POWERED BY GOOGLE GEMINI 2.5 AI</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Test Our <span className="text-gradient-cyan">AI Growth Engine</span> Live
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Experience how our proprietary AI models analyze digital footprints, detect growth friction, and automate customer pipelines in real time.
          </p>
        </div>

        {/* Audit Tool Box */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-slate-900/80 border border-white/10 p-6 sm:p-10 backdrop-blur-2xl shadow-2xl relative">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#00E5FF] to-[#0A84FF] flex items-center justify-center text-slate-950 font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Instant AI Growth & Speed Diagnostic</h3>
                <p className="text-xs text-slate-400">Enter your business domain for a simulated 30-second AI diagnostic</p>
              </div>
            </div>
            <div className="hidden sm:block text-xs font-mono-tech text-[#00E5FF]">
              100% Free • Zero Spam
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleRunAudit} className="flex flex-col sm:flex-row gap-3 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="e.g. mycompany.com or companyname.in"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-950 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#00E5FF] transition"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3.5 text-xs font-bold text-slate-950 bg-gradient-to-r from-[#00E5FF] to-[#0A84FF] hover:from-[#33ECFF] hover:to-[#2B95FF] rounded-2xl shadow-lg hover:scale-105 transition duration-200 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Analyzing with AI...</span>
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4" />
                  <span>Run Free AI Audit</span>
                </>
              )}
            </button>
          </form>

          {/* Audit Results Container */}
          {auditResult && (
            <div className="p-6 rounded-2xl bg-slate-950/90 border border-[#00E5FF]/30 animate-fadeIn">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div>
                  <span className="text-xs font-mono-tech text-slate-400">DIAGNOSTIC REPORT FOR:</span>
                  <div className="text-xl font-bold text-white font-mono-tech">{auditResult.domain}</div>
                </div>
                <div className="px-3 py-1 rounded-full bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30 text-xs font-bold">
                  AI SCAN COMPLETE
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-slate-900 border border-white/5">
                  <div className="text-xs text-slate-400 mb-1">Page Speed Index</div>
                  <div className="text-2xl font-bold text-[#10B981]">{auditResult.speedScore}/100</div>
                  <div className="text-[10px] text-slate-400 mt-1">LCP: 1.8s (Good)</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-white/5">
                  <div className="text-xs text-slate-400 mb-1">SEO Health Score</div>
                  <div className="text-2xl font-bold text-amber-400">{auditResult.seoScore}/100</div>
                  <div className="text-[10px] text-slate-400 mt-1">Missing Schema Tags</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-white/5">
                  <div className="text-xs text-slate-400 mb-1">Lead Conversion Grade</div>
                  <div className="text-2xl font-bold text-[#00E5FF]">{auditResult.leadCaptureGrade}</div>
                  <div className="text-[10px] text-slate-400 mt-1">High Leakage Risk</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-white/5">
                  <div className="text-xs text-slate-400 mb-1">AI Chatbot Uplift</div>
                  <div className="text-2xl font-bold text-purple-400">+340%</div>
                  <div className="text-[10px] text-slate-400 mt-1">24/7 Qualified Pipeline</div>
                </div>
              </div>

              {/* Action Recommendations */}
              <div>
                <h4 className="text-xs font-mono-tech text-slate-400 uppercase tracking-wider mb-3">
                  AI Actionable Recommendations:
                </h4>
                <div className="space-y-2">
                  {auditResult.recommendations.map((rec, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-slate-900 border border-white/5 text-xs text-slate-200">
                      <CheckCircle className="w-4 h-4 text-[#00E5FF] shrink-0" />
                      <span>{rec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Quick AI Capabilities Grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-white/10">
            <div className="flex items-start gap-3">
              <Bot className="w-5 h-5 text-[#00E5FF] shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-white">24/7 Gemini Sales Bots</div>
                <div className="text-[11px] text-slate-400">Qualifies leads and books calls in under 5 seconds</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Zap className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-white">Make & n8n Workflows</div>
                <div className="text-[11px] text-slate-400">Automates CRM routing, SMS, and invoice sequences</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <BarChart2 className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-white">Programmatic SEO</div>
                <div className="text-[11px] text-slate-400">Generates 100s of high-converting keyword pages</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
