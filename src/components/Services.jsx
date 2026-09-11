import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Check, Sparkles } from 'lucide-react';

export const Services = ({ onOpenConversation }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const interventions = [
    {
      id: '01',
      title: 'Executive Diagnostic Assessment',
      scope: 'Forensic Organizational Audit',
      description:
        'A comprehensive multi-vector analysis of leadership dynamics, governance friction, and operational decision flows across the C-suite.',
      timeframe: '4 Weeks',
    },
    {
      id: '02',
      title: 'CEO Advisory Retainer',
      scope: 'Dedicated C-Suite Counsel',
      description:
        'Ongoing private counsel and strategic sounding board for chief executives navigating high-stakes transitions, sovereign negotiations, and structural pivots.',
      timeframe: 'Annual Retainer',
    },
    {
      id: '03',
      title: 'Executive Team Alignment Program',
      scope: 'C-Suite Synchronization',
      description:
        'Eliminating executive silos and political friction to forge a cohesive, high-velocity leadership core aligned on strategic priorities.',
      timeframe: '3 to 6 Months',
    },
    {
      id: '04',
      title: 'Succession Planning Architecture',
      scope: 'Generational Continuity',
      description:
        'Engineering resilient succession pathways, leadership readiness benchmarks, and talent transition protocols for family enterprises and corporations.',
      timeframe: '6 Months',
    },
    {
      id: '05',
      title: 'Culture Transformation System',
      scope: 'Behavioral Architecture',
      description:
        'Designing the structural incentives, accountability loops, and cultural artifacts that drive uncompromising execution at every organizational tier.',
      timeframe: '6 to 12 Months',
    },
    {
      id: '06',
      title: 'Strategic Planning & Execution Architecture',
      scope: 'Strategy-to-Results Bridge',
      description:
        'Translating sovereign visions and board mandates into cascaded operational milestones with real-time tracking and executive accountability.',
      timeframe: 'Quarterly Cycles',
    },
    {
      id: '07',
      title: 'Board Governance Design',
      scope: 'Fiduciary & Advisory Systems',
      description:
        'Structuring advisory boards, family councils, and corporate governance frameworks to enhance strategic oversight without creating bureaucratic inertia.',
      timeframe: '3 Months',
    },
    {
      id: '08',
      title: 'Leadership Presence & Executive Communication',
      scope: 'High-Impact Authority',
      description:
        'Refining executive gravitas, high-stakes negotiation posture, and public narrative command for leaders addressing markets, sovereigns, and media.',
      timeframe: 'Targeted Coaching',
    },
    {
      id: '09',
      title: 'Organizational Systems Design',
      scope: 'Structural Topology',
      description:
        'Re-engineering operational reporting structures, delegation thresholds, and span-of-control topologies to unlock organizational velocity.',
      timeframe: '3 to 6 Months',
    },
    {
      id: '10',
      title: 'Annual Leadership Retreat',
      scope: 'Immersive Executive Offsite',
      description:
        'Facilitating confidential, high-intensity executive offsites designed to reset strategic focus, resolve underlying tensions, and align on multi-year targets.',
      timeframe: '3 to 4 Days Immersive',
    },
  ];

  return (
    <section
      id="services"
      className="relative py-28 md:py-40 bg-[#08090C] border-t border-white/[0.06] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.3em] uppercase text-amber-400 mb-4">
              <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
              PORTFOLIO OF INTERVENTIONS
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-ivory-gradient leading-tight">
              Ten Precision-Engineered Leadership Interventions
            </h2>
          </div>

          <p className="text-stone-400 font-sans text-sm sm:text-base font-light max-w-md leading-relaxed">
            Each advisory intervention is custom-tailored to the specific governance structure, geopolitical context, and growth phase of your enterprise.
          </p>
        </div>

        {/* Editorial Accordion List */}
        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {interventions.map((item, idx) => {
            const isHovered = hoveredIndex === idx;
            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={onOpenConversation}
                className={`py-6 sm:py-8 transition-all duration-300 cursor-pointer group ${
                  isHovered ? 'bg-white/[0.02] pl-4 sm:pl-6' : 'pl-0'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  {/* ID & Title */}
                  <div className="flex items-baseline gap-6 sm:gap-10">
                    <span className="font-mono text-xs sm:text-sm text-stone-500 group-hover:text-amber-400 transition-colors">
                      {item.id}
                    </span>
                    <div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-light text-white group-hover:text-amber-200 transition-colors">
                        {item.title}
                      </h3>
                      <span className="text-[11px] font-mono text-stone-500 uppercase tracking-widest mt-1 block">
                        {item.scope}
                      </span>
                    </div>
                  </div>

                  {/* Meta & Trigger Arrow */}
                  <div className="flex items-center gap-6 self-end lg:self-auto">
                    <span className="hidden sm:inline font-mono text-xs text-stone-400 border border-white/[0.08] px-3 py-1 bg-white/[0.02]">
                      {item.timeframe}
                    </span>
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-stone-400 group-hover:text-black group-hover:bg-amber-400 group-hover:border-amber-400 transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
                    </div>
                  </div>
                </div>

                {/* Animated Expanded Description */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <p className="text-stone-300 font-sans text-sm sm:text-base font-light max-w-3xl leading-relaxed pl-12 sm:pl-16">
                        {item.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
