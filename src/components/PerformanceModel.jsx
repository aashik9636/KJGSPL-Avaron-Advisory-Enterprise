import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Shield, Eye, CheckCircle2 } from 'lucide-react';

export const PerformanceModel = () => {
  const [activeLayer, setActiveLayer] = useState(0);

  const layers = [
    {
      id: '01',
      title: 'STATE MANAGEMENT',
      subtitle: 'Performance under pressure.',
      icon: Activity,
      focus: 'Executive Nervous System & High-Stakes Decision Clarity',
      description:
        'How leaders maintain cognitive precision, emotional neutrality, and strategic poise when capital, reputation, or organizational survival is on the line.',
      indicators: [
        'Capacity to operate without reactive crisis management',
        'Physiological and mental stamina across high-friction pivots',
        'De-escalation protocols for executive team anxiety',
      ],
      deliverable: 'Executive State Optimization & High-Stakes Decision Protocols',
    },
    {
      id: '02',
      title: 'LOYALTY ARCHITECTURE',
      subtitle: 'Trust, alignment and organizational commitment.',
      icon: Shield,
      focus: 'Systemic Cohesion & Non-Monetary Allegiance',
      description:
        'The deep structural incentives, mutual obligations, and trust contracts that hold top-tier talent loyal to the mission beyond standard equity compensation.',
      indicators: [
        'Zero silent executive attrition or covert power struggles',
        'Unquestioned cross-functional alignment on strategic priorities',
        'C-Suite accountability without punitive control mechanisms',
      ],
      deliverable: 'Loyalty Matrix & Succession Trust Framework',
    },
    {
      id: '03',
      title: 'RELATIONAL AWARENESS',
      subtitle: 'How leaders read and influence the system.',
      icon: Eye,
      focus: 'Political Intelligence & Organizational Sensing',
      description:
        'The ability of executive leadership to detect unspoken dynamics, political currents, and systemic resistance before they manifest as operational inertia.',
      indicators: [
        'Early detection of cultural drift and structural friction',
        'Mastery of multi-stakeholder and board diplomacy',
        'Accurate mapping of formal vs. informal influence networks',
      ],
      deliverable: 'Relational Intelligence Blueprint & Governance Mapping',
    },
  ];

  return (
    <section id="approach" className="py-32 md:py-48 bg-[#060709] hairline-t">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-4xl mb-24">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.3em] uppercase text-amber-400 mb-4">
            <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
            PROPRIETARY ARCHITECTURAL MODEL
          </div>
          <h2 className="text-editorial-headline font-serif font-light text-ivory-gradient mb-6 leading-tight">
            The Performance Environment Model
          </h2>
          <p className="text-xl sm:text-2xl font-serif italic text-stone-300">
            "Which layer of your architecture is failing you?"
          </p>
        </div>

        {/* Dynamic Architectural Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Visual Diagram (6 Cols) */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative min-h-[460px]">
            {/* SVG Connecting Vector Mandala */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 500">
              <circle cx="250" cy="250" r="180" stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="none" strokeDasharray="3 6" />
              <polygon points="250,90 390,340 110,340" stroke="rgba(212,175,55,0.3)" strokeWidth="1.2" fill="rgba(212,175,55,0.02)" />
            </svg>

            {/* Layer 01 Ring */}
            <button
              onClick={() => setActiveLayer(0)}
              className={`absolute top-4 transition-all duration-500 transform ${
                activeLayer === 0 ? 'scale-110 z-20' : 'scale-95 opacity-60 hover:opacity-100'
              }`}
            >
              <div className={`w-40 h-40 rounded-full flex flex-col items-center justify-center p-4 text-center backdrop-blur-md border ${
                activeLayer === 0 ? 'bg-[#0E1015] border-amber-400 shadow-[0_0_40px_rgba(212,175,55,0.25)]' : 'bg-black/60 border-white/10'
              }`}>
                <span className="font-mono text-[10px] text-amber-400 tracking-widest uppercase mb-1">01</span>
                <span className="font-serif text-sm font-semibold text-white tracking-wide">STATE</span>
                <span className="text-[10px] font-mono text-stone-400">Management</span>
              </div>
            </button>

            {/* Layer 02 Ring */}
            <button
              onClick={() => setActiveLayer(1)}
              className={`absolute bottom-6 right-4 sm:right-8 transition-all duration-500 transform ${
                activeLayer === 1 ? 'scale-110 z-20' : 'scale-95 opacity-60 hover:opacity-100'
              }`}
            >
              <div className={`w-40 h-40 rounded-full flex flex-col items-center justify-center p-4 text-center backdrop-blur-md border ${
                activeLayer === 1 ? 'bg-[#0E1015] border-amber-400 shadow-[0_0_40px_rgba(212,175,55,0.25)]' : 'bg-black/60 border-white/10'
              }`}>
                <span className="font-mono text-[10px] text-amber-400 tracking-widest uppercase mb-1">02</span>
                <span className="font-serif text-sm font-semibold text-white tracking-wide">LOYALTY</span>
                <span className="text-[10px] font-mono text-stone-400">Architecture</span>
              </div>
            </button>

            {/* Layer 03 Ring */}
            <button
              onClick={() => setActiveLayer(2)}
              className={`absolute bottom-6 left-4 sm:left-8 transition-all duration-500 transform ${
                activeLayer === 2 ? 'scale-110 z-20' : 'scale-95 opacity-60 hover:opacity-100'
              }`}
            >
              <div className={`w-40 h-40 rounded-full flex flex-col items-center justify-center p-4 text-center backdrop-blur-md border ${
                activeLayer === 2 ? 'bg-[#0E1015] border-amber-400 shadow-[0_0_40px_rgba(212,175,55,0.25)]' : 'bg-black/60 border-white/10'
              }`}>
                <span className="font-mono text-[10px] text-amber-400 tracking-widest uppercase mb-1">03</span>
                <span className="font-serif text-sm font-semibold text-white tracking-wide">RELATIONAL</span>
                <span className="text-[10px] font-mono text-stone-400">Awareness</span>
              </div>
            </button>

            {/* Center Monogram Hub */}
            <div className="w-24 h-24 rounded-full bg-[#050608] border border-amber-400/50 flex flex-col items-center justify-center p-2 text-center shadow-2xl z-10">
              <span className="font-mono text-[8px] tracking-[0.25em] text-amber-400 uppercase font-semibold">
                MODEL
              </span>
            </div>
          </div>

          {/* Right Editorial Inspector (6 Cols) */}
          <div className="lg:col-span-6 space-y-8 pl-0 lg:pl-8 lg:border-l lg:border-white/[0.08]">
            <div className="flex items-center gap-3 font-mono text-xs text-stone-400 uppercase tracking-widest">
              <span className="text-amber-400">Layer {layers[activeLayer].id}</span>
              <span>—</span>
              <span>{layers[activeLayer].focus}</span>
            </div>

            <div className="space-y-4">
              <h3 className="text-3xl sm:text-4xl font-serif font-light text-white">
                {layers[activeLayer].title}
              </h3>
              <p className="text-lg font-serif italic text-amber-200/90">
                "{layers[activeLayer].subtitle}"
              </p>
              <p className="text-sm sm:text-base font-sans text-stone-300 font-light leading-relaxed">
                {layers[activeLayer].description}
              </p>
            </div>

            {/* Benchmarks */}
            <div className="space-y-3 pt-6 hairline-t">
              <span className="font-mono text-[11px] uppercase tracking-widest text-stone-400 block">
                Diagnostic Benchmarks:
              </span>
              {layers[activeLayer].indicators.map((ind, i) => (
                <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-stone-300 font-light">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{ind}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 font-mono text-xs text-stone-400">
              Key Intervention: <span className="text-white font-medium">{layers[activeLayer].deliverable}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
