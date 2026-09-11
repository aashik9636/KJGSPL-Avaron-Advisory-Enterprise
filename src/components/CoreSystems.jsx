import React, { useState } from 'react';
import { Zap } from 'lucide-react';

export const CoreSystems = () => {
  const [activeSystemIndex, setActiveSystemIndex] = useState(0);

  const systems = [
    {
      id: '01',
      title: 'Strategy & Positioning',
      category: 'Market Dominance',
      desc: 'Uncompromising clarity on core enterprise advantages, competitive moats, and sovereign alignment.',
      impact: 'Eliminates strategic drift and secures premium market pricing power.',
    },
    {
      id: '02',
      title: 'Offer & Product Ecosystem',
      category: 'Value Architecture',
      desc: 'High-margin, systematically bundled solutions designed for enterprise retention and compounding value.',
      impact: 'Maximizes customer lifetime value and recurring executive engagement.',
    },
    {
      id: '03',
      title: 'Sales System',
      category: 'Revenue Engine',
      desc: 'Repeatable, institutionalized high-ticket sales processes independent of individual charismatic rainmakers.',
      impact: 'Predictable multi-million dollar deal velocity and pipeline integrity.',
    },
    {
      id: '04',
      title: 'Marketing & Lead Generation',
      category: 'Authority Distribution',
      desc: 'Targeted executive reputation management, editorial thought leadership, and inbound sovereign pipeline.',
      impact: 'Positions the brand as the undisputed authority in its category.',
    },
    {
      id: '05',
      title: 'Operations & Delivery',
      category: 'Fulfillment Backbone',
      desc: 'Flawless execution architectures engineered to scale delivery capacity without proportional headcount explosion.',
      impact: 'Maintains elite quality standards under high-volume enterprise scale.',
    },
    {
      id: '06',
      title: 'Team & Organizational Design',
      category: 'Structural Topology',
      desc: 'Optimized reporting hierarchies, span of control, and cross-functional task force architecture.',
      impact: 'Removes structural bottlenecks and eliminates departmental silos.',
    },
    {
      id: '07',
      title: 'Leadership & Founder Development',
      category: 'Executive Capability',
      desc: 'Continuous evolution of the executive cadre from operational managers to strategic architects.',
      impact: 'Builds self-sustaining leadership depth across all business units.',
    },
    {
      id: '08',
      title: 'Knowledge Transfer',
      category: 'Institutional Memory',
      desc: 'Systematization of tribal wisdom, critical playbooks, and organizational intellectual property.',
      impact: 'Prevents enterprise paralysis during senior personnel transitions.',
    },
    {
      id: '09',
      title: 'AI & Automation',
      category: 'Technological Leverage',
      desc: 'Deploying autonomous intelligence agents and automated workflows across routine executive workflows.',
      impact: 'Unlocks 10x leverage on executive decision bandwidth.',
    },
    {
      id: '10',
      title: 'Talent & Capability Engine',
      category: 'Human Capital',
      desc: 'A magnetic talent acquisition, assessment, and succession engine attracting top-tier 1% global talent.',
      impact: 'Secures generational leadership continuity and cultural resilience.',
    },
  ];

  return (
    <section id="core-systems" className="py-32 md:py-48 bg-[#050608] hairline-t">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-4xl mb-24">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.3em] uppercase text-amber-400 mb-4">
            <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
            ORGANIZATIONAL TAXONOMY
          </div>
          <h2 className="text-editorial-headline font-serif font-light text-ivory-gradient leading-tight">
            The Ten Core Systems of Scalable Architecture
          </h2>
        </div>

        {/* Editorial Split List & Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left: Interactive List (7 Cols) */}
          <div className="lg:col-span-7 divide-y divide-white/[0.08] border-y border-white/[0.08]">
            {systems.map((sys, idx) => {
              const isActive = activeSystemIndex === idx;
              return (
                <div
                  key={sys.id}
                  onClick={() => setActiveSystemIndex(idx)}
                  className={`py-6 sm:py-8 cursor-pointer flex items-baseline justify-between gap-4 transition-colors ${
                    isActive ? 'text-amber-300' : 'text-stone-400 hover:text-white'
                  }`}
                >
                  <div className="flex items-baseline gap-6">
                    <span className="font-mono text-sm text-stone-500 font-light">
                      {sys.id}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-light text-white">
                      {sys.title}
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-stone-500 hidden sm:inline">
                    {sys.category}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Right: Sticky Blueprint Inspector (5 Cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-36 space-y-6 pt-4">
            <div className="font-mono text-xs text-amber-400 uppercase tracking-widest">
              System {systems[activeSystemIndex].id} · {systems[activeSystemIndex].category}
            </div>

            <h3 className="text-3xl sm:text-4xl font-serif font-light text-white leading-tight">
              {systems[activeSystemIndex].title}
            </h3>

            <p className="text-stone-300 font-sans font-light text-base leading-relaxed">
              {systems[activeSystemIndex].desc}
            </p>

            <div className="pt-6 hairline-t">
              <span className="font-mono text-[11px] uppercase tracking-widest text-stone-500 block mb-2">
                Enterprise Leverage:
              </span>
              <p className="text-lg font-serif italic text-amber-200/90 leading-snug">
                "{systems[activeSystemIndex].impact}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
