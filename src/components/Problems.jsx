import React from 'react';
import { AlertCircle } from 'lucide-react';

export const Problems = () => {
  const problems = [
    {
      id: '01',
      quote: 'My leadership team cannot execute fast enough.',
      context: 'Strategic directives dissolve into ambiguity; initiative velocity stalls at the executive layer.',
      category: 'Execution Friction',
    },
    {
      id: '02',
      quote: 'I cannot find strong successors for key roles.',
      context: 'Institutional knowledge remains concentrated in irreplaceable individuals rather than self-sustaining systems.',
      category: 'Succession Vulnerability',
    },
    {
      id: '03',
      quote: 'I carry too many decisions personally.',
      context: 'The CEO becomes the ultimate operational bottleneck, filtering routine judgments that should belong to the executive architecture.',
      category: 'Decision Centralization',
    },
    {
      id: '04',
      quote: 'Our executives operate in silos.',
      context: 'Functional brilliance without cross-departmental synchronicity leads to political friction, territorial inertia, and duplicated effort.',
      category: 'Structural Fragmentation',
    },
  ];

  return (
    <section id="problems" className="py-32 md:py-48 bg-[#050608] hairline-t">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-24 max-w-3xl">
          <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.3em] uppercase text-amber-400 mb-4">
            <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
            <span>EXECUTIVE OBSERVATIONS</span>
          </div>
          <h2 className="text-editorial-headline font-serif font-light text-ivory-gradient leading-tight">
            The Four Recurring Crises of Enterprise Scale.
          </h2>
        </div>

        {/* Pure Editorial Vertical Breakdown (No Cards, Pure Editorial Layout) */}
        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08] mb-28">
          {problems.map((prob) => (
            <div key={prob.id} className="py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-baseline group">
              {/* Massive Number */}
              <div className="lg:col-span-3 flex items-baseline gap-4">
                <span className="font-serif text-6xl sm:text-7xl font-light text-stone-600 group-hover:text-amber-400 transition-colors duration-400">
                  {prob.id}
                </span>
                <span className="font-mono text-[10px] tracking-widest text-amber-400/90 uppercase">
                  {prob.category}
                </span>
              </div>

              {/* Quote & Editorial Analysis */}
              <div className="lg:col-span-9 space-y-4">
                <h3 className="text-2xl sm:text-4xl md:text-5xl font-serif font-light text-stone-100 group-hover:text-white transition-colors duration-300 leading-snug">
                  "{prob.quote}"
                </h3>
                <p className="text-sm sm:text-base font-sans text-stone-400 font-light max-w-2xl leading-relaxed pt-1">
                  {prob.context}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Editorial Diagnostic Truth Statement */}
        <div className="pt-8 border-l-2 border-amber-400 pl-8 md:pl-12 max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-amber-400 mb-4">
            Systemic Diagnosis
          </p>
          <p className="text-2xl sm:text-4xl md:text-5xl font-serif font-light text-stone-200 leading-tight mb-4">
            "These are not isolated problems.
          </p>
          <p className="text-2xl sm:text-4xl md:text-5xl font-serif italic text-gold-gradient leading-tight">
            They are symptoms of an architecture that was never designed to scale."
          </p>
        </div>
      </div>
    </section>
  );
};
