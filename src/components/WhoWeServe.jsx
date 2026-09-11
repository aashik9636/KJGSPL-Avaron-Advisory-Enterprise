import React from 'react';
import { ArrowUpRight, Shield, Landmark, TrendingUp } from 'lucide-react';

export const WhoWeServe = ({ onOpenConversation }) => {
  const sectors = [
    {
      id: '01',
      title: 'FAMILY-OWNED ENTERPRISES',
      tagline: "Where Leadership Architecture Determines the Next Generation's Success",
      description:
        'Navigating multi-generational succession, founder transition, and governance modernization without fracturing family trust or operational momentum.',
      accent: 'Succession & Governance Architecture',
      icon: Shield,
    },
    {
      id: '02',
      title: 'GOVERNMENT-LINKED ORGANIZATIONS',
      tagline: 'Transforming Nations Requires Transformational Leaders',
      description:
        'Building sovereign leadership capabilities capable of executing ambitious national visions, mega-project governance, and cross-entity mandates across the GCC and emerging economies.',
      accent: 'Sovereign Mandates & National Transformation',
      icon: Landmark,
    },
    {
      id: '03',
      title: 'HIGH-GROWTH COMPANIES',
      tagline: 'When the Founder Must Become the CEO',
      description:
        'Restructuring fast-scaling enterprises from individual founder-driven hustle to an institutionalized leadership system designed for exponential enterprise valuation.',
      accent: 'Scale Architecture & Founder Evolution',
      icon: TrendingUp,
    },
  ];

  return (
    <section id="organizations" className="py-32 md:py-48 bg-[#050608] hairline-t">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-4xl mb-24">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.3em] uppercase text-amber-400 mb-4">
            <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
            CLIENT ECOSYSTEM
          </div>
          <h2 className="text-editorial-headline font-serif font-light text-ivory-gradient leading-tight">
            Where Leadership Architecture <br className="hidden sm:inline" />
            Creates the Most Value
          </h2>
        </div>

        {/* Full-Bleed Editorial Panels (No Boxes, Open Architectural Spreads) */}
        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {sectors.map((sec) => (
            <div
              key={sec.id}
              onClick={onOpenConversation}
              className="py-16 sm:py-20 group cursor-pointer transition-colors duration-500 hover:bg-white/[0.015]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Number & Icon */}
                <div className="lg:col-span-3 flex items-baseline gap-4">
                  <span className="font-serif text-6xl sm:text-7xl font-light text-stone-600 group-hover:text-amber-400 transition-colors duration-400">
                    {sec.id}
                  </span>
                  <div className="font-mono text-[10px] tracking-widest uppercase text-amber-400">
                    {sec.accent}
                  </div>
                </div>

                {/* Main Content */}
                <div className="lg:col-span-8 space-y-4">
                  <h3 className="text-2xl sm:text-4xl md:text-5xl font-serif font-light text-white group-hover:text-amber-200 transition-colors">
                    {sec.title}
                  </h3>
                  <p className="text-lg sm:text-xl font-serif italic text-stone-300">
                    "{sec.tagline}"
                  </p>
                  <p className="text-sm sm:text-base font-sans text-stone-400 font-light max-w-3xl leading-relaxed pt-2">
                    {sec.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="lg:col-span-1 flex justify-end items-start pt-2">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-stone-400 group-hover:text-black group-hover:bg-amber-400 group-hover:border-amber-400 transition-all duration-400">
                    <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
