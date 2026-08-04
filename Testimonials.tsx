import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/companyData';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const activeTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 bg-[#070C18] relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-amber-400/30 text-xs font-mono-tech text-amber-400 mb-4">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>100% VERIFIED CLIENT REVIEWS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Hear From Our <span className="text-gradient-cyan">Growth Partners</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Real founders, executives, and directors share how OrionPulse transformed their customer pipeline.
          </p>
        </div>

        {/* Testimonial Card Display */}
        <div className="max-w-4xl mx-auto relative">
          
          <div className="relative rounded-3xl bg-slate-900/80 border border-white/10 p-8 sm:p-12 backdrop-blur-2xl shadow-2xl overflow-hidden min-h-[320px] flex flex-col justify-between">
            <Quote className="absolute top-6 right-8 w-16 h-16 text-white/5 pointer-events-none" />

            <div>
              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
                <span className="ml-2 text-xs font-mono-tech text-amber-400 font-bold">5.0 / 5.0 VERIFIED</span>
              </div>

              {/* Quote */}
              <p className="text-lg sm:text-2xl text-slate-100 font-medium leading-relaxed mb-8 italic">
                "{activeTestimonial.quote}"
              </p>
            </div>

            {/* Author Profile */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
              <div className="flex items-center gap-4">
                <img
                  src={activeTestimonial.avatar}
                  alt={activeTestimonial.name}
                  className="w-14 h-14 rounded-2xl object-cover border-2 border-[#00E5FF]/40 shadow-md"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-base font-bold text-white">{activeTestimonial.name}</h4>
                    {activeTestimonial.verified && (
                      <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                    )}
                  </div>
                  <div className="text-xs text-slate-400">
                    {activeTestimonial.role} • <strong className="text-slate-200">{activeTestimonial.company}</strong>
                  </div>
                </div>
              </div>

              {/* Highlight Metric */}
              <div className="px-4 py-2 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-xs font-bold text-[#00E5FF] font-mono-tech">
                Metric: {activeTestimonial.highlightMetric}
              </div>
            </div>

          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === i ? 'w-8 bg-[#00E5FF]' : 'w-2 bg-slate-800'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={handlePrev}
                className="p-3 rounded-2xl bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-white/10 transition cursor-pointer"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-2xl bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-white/10 transition cursor-pointer"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
