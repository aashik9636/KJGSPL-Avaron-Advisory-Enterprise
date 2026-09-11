import React from 'react';
import { ArrowRight, Clock, HelpCircle, LayoutGrid, Target, Sparkles } from 'lucide-react';

export const FounderOwner = ({ onOpenScorecard }) => {
  const steps = [
    { label: 'FOUNDER', desc: 'Personal Execution & Direct Operational Oversight', phase: 'Stage 01' },
    { label: 'BOTTLENECK', desc: 'Decision Centralization & Enterprise Stall', phase: 'Crisis Point', highlight: true },
    { label: 'ARCHITECTURE', desc: 'Engineered Scaffolding & Distributed Power', phase: 'Intervention' },
    { label: 'OWNER', desc: 'Strategic Freedom & Compounding Enterprise Value', phase: 'Destination' },
  ];

  const stats = [
    { value: '3 Min', label: 'Completion Time' },
    { value: '10', label: 'Systems Audited' },
    { value: '1', label: 'Critical Bottleneck' },
    { value: '100%', label: 'Confidential' },
  ];

  return (
    <section id="founder-owner" className="py-32 md:py-48 bg-[#060709] hairline-t">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-4xl mb-24">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.3em] uppercase text-amber-400 mb-4">
            <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
            THE TRANSFORMATION CONTINUUM
          </div>
          <h2 className="text-editorial-headline font-serif font-light text-ivory-gradient mb-6 leading-tight">
            From doing the work to owning the business.
          </h2>
          <p className="text-stone-300 font-sans text-lg font-light max-w-2xl leading-relaxed">
            A transition that cannot happen through willpower alone—only through the deliberate construction of executive architecture.
          </p>
        </div>

        {/* Continuum Linear Architectural Diagram (No Boxes, Pure Schematic) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12 hairline-t hairline-b mb-24">
          {steps.map((step, idx) => (
            <div key={step.label} className="space-y-4">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-stone-500">
                <span>{step.phase}</span>
                {idx < steps.length - 1 && <span className="text-amber-400/50 hidden lg:inline">→</span>}
              </div>
              <h3 className={`font-serif text-3xl font-light tracking-wide ${
                step.highlight ? 'text-amber-300' : 'text-white'
              }`}>
                {step.label}
              </h3>
              <p className="text-sm font-sans text-stone-400 font-light leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Editorial Diagnostic Callout Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-amber-400 uppercase tracking-widest">
              <Sparkles className="w-4 h-4" />
              <span>Proprietary Assessment</span>
            </div>
            <h3 className="text-3xl sm:text-5xl font-serif font-light text-white leading-tight">
              The Bottleneck Scorecard
            </h3>
            <p className="text-xl sm:text-2xl font-serif italic text-stone-300">
              "Find out which system is holding your business back."
            </p>
            <p className="text-sm sm:text-base font-sans text-stone-400 font-light max-w-xl leading-relaxed">
              Take our confidential diagnostic to evaluate your leadership architecture across all 10 core organizational dimensions and pinpoint your primary operational friction vector.
            </p>
            <div>
              <button
                onClick={onOpenScorecard}
                className="luxury-btn luxury-btn-primary !py-4 !px-8 text-xs font-semibold"
              >
                <span className="flex items-center gap-3">
                  Take the Bottleneck Scorecard
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 grid grid-cols-2 gap-8 border-l border-white/[0.08] pl-8">
            {stats.map((s, idx) => (
              <div key={idx} className="space-y-1">
                <div className="font-serif text-3xl sm:text-4xl font-light text-white">
                  {s.value}
                </div>
                <div className="font-mono text-[10px] text-stone-400 uppercase tracking-wider">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
