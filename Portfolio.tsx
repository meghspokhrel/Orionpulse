import React, { useState } from 'react';
import { ExternalLink, ArrowRight, CheckCircle, X, Sparkles, Filter, Eye } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/companyData';
import { PortfolioItem } from '../types';

interface PortfolioProps {
  onOpenProposal: (projectName?: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onOpenProposal }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ai' | 'web' | 'marketing' | 'seo'>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const filteredProjects = activeFilter === 'all'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-[#070C18] relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-[#00E5FF]/30 text-xs font-mono-tech text-[#00E5FF] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SELECTED CLIENT CASEWORK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Interactive <span className="text-gradient-cyan">Portfolio & Results</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Explore recent digital transformations, AI automation deployments, and high-ROI marketing engines.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'ai', label: '🤖 AI & Chatbots' },
            { id: 'web', label: '💻 Web Apps & Design' },
            { id: 'marketing', label: '🎯 Performance Ads' },
            { id: 'seo', label: '🚀 SEO Engine' }
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id as any)}
              className={`px-5 py-2 text-xs font-semibold rounded-xl transition-all duration-300 cursor-pointer ${
                activeFilter === f.id
                  ? 'bg-gradient-to-r from-[#00E5FF] to-[#0A84FF] text-slate-950 font-bold shadow-lg scale-105'
                  : 'bg-slate-900/80 text-slate-300 hover:text-white border border-white/5'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-3xl bg-slate-900/80 border border-white/10 hover:border-[#00E5FF]/40 overflow-hidden backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#00E5FF]/15 flex flex-col justify-between"
            >
              <div>
                {/* Image & Metric Overlay */}
                <div className="relative h-52 overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  {/* Floating Metric Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-xl bg-slate-950/80 border border-[#00E5FF]/40 backdrop-blur-md">
                    <span className="text-xs font-extrabold text-[#00E5FF] font-mono-tech">
                      {project.metric}
                    </span>
                    <span className="text-[10px] text-slate-300 block -mt-0.5">
                      {project.metricLabel}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 text-[10px] font-mono-tech text-slate-300 uppercase tracking-wider">
                    {project.client}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00E5FF] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-xs line-clamp-2 leading-relaxed mb-4">
                    {project.summary}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-0.5 text-[10px] font-mono-tech rounded-md bg-slate-800 text-slate-300 border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Link */}
              <div className="px-6 pb-6 pt-0">
                <div className="flex items-center justify-between text-xs font-bold text-[#00E5FF] group-hover:translate-x-1 transition-transform">
                  <span>View Case Metrics & Details</span>
                  <Eye className="w-4 h-4" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-3xl bg-slate-900 border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image Header */}
            <div className="relative h-60 rounded-2xl overflow-hidden mb-6">
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono-tech text-[#00E5FF]">{selectedProject.client}</span>
                  <h3 className="text-2xl font-extrabold text-white">{selectedProject.title}</h3>
                </div>
                <div className="px-4 py-2 rounded-xl bg-slate-950/90 border border-[#00E5FF]/40 text-center">
                  <div className="text-lg font-bold text-[#00E5FF] font-mono-tech">{selectedProject.metric}</div>
                  <div className="text-[10px] text-slate-300">{selectedProject.metricLabel}</div>
                </div>
              </div>
            </div>

            {/* Challenge & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="p-4 rounded-xl bg-slate-950 border border-white/5">
                <h4 className="text-xs font-mono-tech text-red-400 uppercase tracking-wider mb-2">The Challenge</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{selectedProject.challenge}</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-white/5">
                <h4 className="text-xs font-mono-tech text-[#10B981] uppercase tracking-wider mb-2">OrionPulse Solution</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{selectedProject.solution}</p>
              </div>
            </div>

            {/* Verified Results */}
            <div className="mb-6">
              <h4 className="text-xs font-mono-tech text-slate-400 uppercase tracking-wider mb-3">Key Quantifiable Results:</h4>
              <div className="space-y-2">
                {selectedProject.results.map((res, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-slate-950 border border-white/5 text-xs text-slate-200">
                    <CheckCircle className="w-4 h-4 text-[#00E5FF] shrink-0" />
                    <span>{res}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                const title = selectedProject.title;
                setSelectedProject(null);
                onOpenProposal(title);
              }}
              className="w-full py-3.5 px-6 text-xs font-bold text-slate-950 bg-gradient-to-r from-[#00E5FF] to-[#0A84FF] rounded-xl shadow-lg hover:opacity-90 transition cursor-pointer"
            >
              Get Similar Scale Results For Your Business
            </button>

          </div>
        </div>
      )}
    </section>
  );
};
