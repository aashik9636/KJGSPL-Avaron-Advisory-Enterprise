import React from 'react';
import { Compass, UserCheck, Eye, Globe2 } from 'lucide-react';

export const WhyAvaron = () => {
  const pillars = [
    {
      id: '01',
      title: 'Architecture, Not Training',
      icon: Compass,
      desc:
        'We do not deliver generic motivational workshops or superficial executive seminars. We engineer lasting operational scaffolding, accountability loops, and decision protocols that remain durable long after the engagement concludes.',
    },
    {
      id: '02',
      title: 'CEO-Centric Approach',
      icon: UserCheck,
      desc:
        'Every solution is anchored in the reality of the chief executive. We design systems from the top down—aligning board expectations, sovereign mandates, and executive dynamics with absolute strategic clarity.',
    },
    {
      id: '03',
      title: 'Boutique Depth',
      icon: Eye,
      desc:
        'We deliberately restrict our active client roster to maintain senior partner engagement on every account. You work directly with veteran organizational architects, never junior consultants or delegated teams.',
    },
    {
      id: '04',
      title: 'Global Reach & Sovereign Fluency',
      icon: Globe2,
      desc:
        'Deep institutional understanding across the GCC, Europe, Africa, and Asia. We blend international governance standards with nuanced cultural and sovereign dynamics.',
    },
  ];

  return (
    <section id="why-avaron" className="py-32 md:py-48 bg-[#060709] hairline-t">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Sticky Left Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-36 space-y-6">
            <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.3em] uppercase text-amber-400">
              <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
              OUR PHILOSOPHY
            </div>
            <h2 className="text-editorial-headline font-serif font-light text-ivory-gradient leading-tight">
              The Difference Between Advisory and Architecture
            </h2>
            <p className="text-stone-300 font-sans text-lg font-light leading-relaxed">
              Advisors offer opinions in moments of crisis. Architects engineer systems that prevent crises from manifesting.
            </p>
          </div>

          {/* Scrolling Right Column (Pure Editorial List, No Boxes) */}
          <div className="lg:col-span-7 divide-y divide-white/[0.08] border-y border-white/[0.08]">
            {pillars.map((pillar) => (
              <div key={pillar.id} className="py-12 sm:py-16 space-y-4 group">
                <div className="flex items-baseline justify-between gap-4">
                  <div className="flex items-baseline gap-6">
                    <span className="font-mono text-sm text-stone-500 group-hover:text-amber-400 transition-colors">
                      {pillar.id}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-light text-white group-hover:text-amber-200 transition-colors">
                      {pillar.title}
                    </h3>
                  </div>
                </div>
                <p className="text-stone-400 font-sans text-sm sm:text-base font-light leading-relaxed pl-10">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
