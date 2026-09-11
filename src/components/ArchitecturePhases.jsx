import React, { useEffect, useRef } from 'react';
import { gsap, prefersReducedMotion } from '../animations/gsapUtils';
import { ArrowRight, Check, Layers, Cpu, Compass, RefreshCw } from 'lucide-react';

export const ArchitecturePhases = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const progressBarRef = useRef(null);

  const phases = [
    {
      number: '01',
      title: 'DIAGNOSE',
      subtitle: 'Revealing What Others Miss',
      icon: Compass,
      description:
        'A forensic deep-dive into the formal and informal architecture of your organization. We map decision flows, friction vectors, and systemic executive blind spots.',
      deliverables: [
        'Leadership Architecture Report',
        'Decision-Making Audit',
        'Organizational Friction Map',
        'Executive Blind Spot Analysis',
      ],
      timeframe: 'Weeks 1 – 4',
    },
    {
      number: '02',
      title: 'DESIGN',
      subtitle: 'Engineering the System',
      icon: Layers,
      description:
        'Constructing the custom leadership blueprints, governance mechanisms, and accountability structures required to sustain enterprise velocity without CEO over-reliance.',
      deliverables: [
        'Leadership System Blueprint',
        'Executive Development Roadmap',
        'Cultural Architecture Design',
        'Succession Framework',
      ],
      timeframe: 'Weeks 5 – 8',
    },
    {
      number: '03',
      title: 'ACTIVATE',
      subtitle: 'Activating the Architecture',
      icon: Cpu,
      description:
        'Deploying the engineered systems into the live executive environment. High-touch CEO advisory, executive alignment workshops, and real-time decision orchestration.',
      deliverables: [
        'Monthly CEO Advisory Sessions',
        'Executive Team Workshops',
        'Real-Time Decision Support',
        'Leadership Coaching & Development',
      ],
      timeframe: 'Months 3 – 6',
    },
    {
      number: '04',
      title: 'EMBED',
      subtitle: 'Embedding the Capability',
      icon: RefreshCw,
      description:
        'Institutionalizing the leadership architecture until it becomes the permanent operational DNA of the enterprise, measurable by autonomous performance metrics.',
      deliverables: [
        'Quarterly Performance Reviews',
        'Architecture Refinement',
        'Leadership Capability Metrics',
        'Long-Term Partnership',
      ],
      timeframe: 'Months 6 – Ongoing',
    },
  ];

  useEffect(() => {
    // Only enable horizontal pin on desktop screens (> 1024px) and when reduced motion is off
    if (typeof window === 'undefined' || window.innerWidth < 1024 || prefersReducedMotion()) {
      return;
    }

    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;

      const totalScroll = track.scrollWidth - window.innerWidth + 120;

      const horizontalScroll = gsap.to(track, {
        x: -totalScroll,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: () => `+=${totalScroll * 1.2}`,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progressBarRef.current) {
              progressBarRef.current.style.width = `${self.progress * 100}%`;
            }
          },
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="architecture"
      className="relative bg-[#090A0D] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Pinned Desktop Container */}
      <div className="min-h-screen flex flex-col justify-between py-16 lg:py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        {/* Section Top Header & Horizontal Progress Track */}
        <div className="w-full flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.3em] uppercase text-amber-400 mb-2">
              <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
              SYSTEMIC METHODOLOGY
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-ivory-gradient">
              The Four-Phase Architecture
            </h2>
          </div>

          {/* Horizontal Storytelling Progress Bar for Desktop */}
          <div className="hidden lg:flex flex-col items-end gap-2">
            <span className="font-mono text-xs text-stone-400 uppercase tracking-widest">
              Phased Execution
            </span>
            <div className="w-48 h-[2px] bg-white/10 relative overflow-hidden rounded-full">
              <div
                ref={progressBarRef}
                className="absolute top-0 left-0 h-full bg-amber-400 transition-all duration-75 w-1/4"
              />
            </div>
          </div>
        </div>

        {/* Horizontal Track for Desktop (Vertical Grid for Mobile/Tablet) */}
        <div className="my-8 lg:my-0 lg:overflow-visible">
          <div
            ref={trackRef}
            className="flex flex-col lg:flex-row gap-8 lg:gap-12 lg:w-max lg:py-8"
          >
            {phases.map((phase) => (
              <div
                key={phase.number}
                className="w-full lg:w-[72vw] lg:max-w-[780px] shrink-0 glass-panel-elevated p-8 sm:p-12 border border-white/[0.1] relative group transition-all duration-500 hover:border-amber-400/40"
              >
                {/* Top Phase Header */}
                <div className="flex items-start justify-between pb-6 border-b border-white/[0.08]">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-4xl sm:text-5xl font-light text-stone-500 group-hover:text-amber-400 transition-colors">
                      {phase.number}
                    </span>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-serif tracking-wide text-white">
                        {phase.title}
                      </h3>
                      <span className="text-sm font-serif italic text-amber-300/90">
                        {phase.subtitle}
                      </span>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-stone-400 border border-white/[0.08] px-3 py-1.5 bg-white/[0.02]">
                    <span>{phase.timeframe}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="my-6 text-stone-300 font-sans font-light leading-relaxed text-sm sm:text-base">
                  {phase.description}
                </p>

                {/* Key Deliverables Grid */}
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest text-stone-400 mb-4 flex items-center gap-2">
                    <span className="w-1 h-1 bg-amber-400 rounded-full" />
                    Key Deliverables:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {phase.deliverables.map((item, dIdx) => (
                      <div
                        key={dIdx}
                        className="flex items-start gap-3 p-3.5 bg-stone-950/60 border border-white/[0.05] group-hover:border-white/[0.1] transition-colors"
                      >
                        <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-sans text-stone-200 font-light">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Corner Accent Detail */}
                <div className="absolute bottom-4 right-6 font-mono text-[9px] text-stone-600 uppercase tracking-widest hidden sm:block">
                  Phase {phase.number} of 04
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Annotation */}
        <div className="hidden lg:flex items-center justify-between text-xs font-mono text-stone-500 pt-6 border-t border-white/[0.08]">
          <span>Scroll to traverse architectural lifecycle</span>
          <span>Avaron Advisory Framework 2026</span>
        </div>
      </div>
    </section>
  );
};
