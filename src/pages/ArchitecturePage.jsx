import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Layers, Cpu, RefreshCw, Check, ArrowRight } from 'lucide-react';

export const ArchitecturePage = () => {
  const phases = [
    {
      number: '01',
      title: 'DIAGNOSE',
      subtitle: 'Revealing What Others Miss',
      icon: Compass,
      timeframe: 'Weeks 1 – 4',
      description:
        'A forensic deep-dive into the formal and informal architecture of your organization. We map decision flows, friction vectors, and systemic executive blind spots.',
      deliverables: [
        'Leadership Architecture Report',
        'Decision-Making Audit',
        'Organizational Friction Map',
        'Executive Blind Spot Analysis',
      ],
      impact: 'Identifies hidden organizational drag that slows executive execution.',
    },
    {
      number: '02',
      title: 'DESIGN',
      subtitle: 'Engineering the System',
      icon: Layers,
      timeframe: 'Weeks 5 – 8',
      description:
        'Constructing the custom leadership blueprints, governance mechanisms, and accountability structures required to sustain enterprise velocity without CEO over-reliance.',
      deliverables: [
        'Leadership System Blueprint',
        'Executive Development Roadmap',
        'Cultural Architecture Design',
        'Succession Framework',
      ],
      impact: 'Replaces ad-hoc executive heroics with institutionalized operational scaffolding.',
    },
    {
      number: '03',
      title: 'ACTIVATE',
      subtitle: 'Activating the Architecture',
      icon: Cpu,
      timeframe: 'Months 3 – 6',
      description:
        'Deploying the engineered systems into the live executive environment. High-touch CEO advisory, executive alignment workshops, and real-time decision orchestration.',
      deliverables: [
        'Monthly CEO Advisory Sessions',
        'Executive Team Workshops',
        'Real-Time Decision Support',
        'Leadership Coaching & Development',
      ],
      impact: 'Aligns the senior executive cadre to operate with synchronized velocity.',
    },
    {
      number: '04',
      title: 'EMBED',
      subtitle: 'Embedding the Capability',
      icon: RefreshCw,
      timeframe: 'Months 6 – Ongoing',
      description:
        'Institutionalizing the leadership architecture until it becomes the permanent operational DNA of the enterprise, measurable by autonomous performance metrics.',
      deliverables: [
        'Quarterly Performance Reviews',
        'Architecture Refinement',
        'Leadership Capability Metrics',
        'Long-Term Partnership',
      ],
      impact: 'Secures generational continuity and enterprise resilience.',
    },
  ];

  return (
    <div className="bg-[#06070A] text-[#F8F6F0] pt-16 md:pt-20 min-h-screen">
      
      {/* 1. LUXURY PAGE HEADER */}
      <section className="relative min-h-[75vh] md:min-h-[82vh] flex flex-col justify-center py-16 md:py-24 bg-gradient-to-b from-[#0C0F17] via-[#080A0E] to-[#06070A] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#DFC38A]/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full my-auto">
          <div className="max-w-4xl space-y-6 text-left">
            <div className="inline-flex items-center gap-3.5 font-mono text-xs tracking-[0.3em] text-[#DFC38A] uppercase font-semibold">
              <span className="w-10 sm:w-14 h-[1.5px] bg-gradient-to-r from-transparent via-[#DFC38A] to-[#F0E5CC]" />
              <span>Execution Roadmap</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-light text-white leading-[1.05] tracking-tight">
              The Four-Phase <br />
              <span className="text-[#DFC38A] italic font-normal">Architecture System</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl font-serif text-stone-300 leading-relaxed max-w-2xl sm:max-w-3xl border-l-2 border-[#DFC38A]/50 pl-5 sm:pl-6 py-1">
              "Transforming strategy into permanent leadership capability through engineering discipline."
            </p>
          </div>
        </div>
      </section>

      {/* 2. DETAILED PHASES BREAKDOWN */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        {phases.map((phase) => (
          <div
            key={phase.number}
            className="p-8 sm:p-12 rounded-2xl bg-gradient-to-b from-[#11141E] to-[#0A0C12] border border-white/10 hover:border-amber-400/40 transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-start shadow-xl"
          >
            {/* Left Header & Number (4 Cols) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-baseline gap-4">
                <span className="font-serif text-6xl font-light text-amber-400">
                  {phase.number}
                </span>
                <div>
                  <h2 className="text-3xl font-serif text-white font-normal">{phase.title}</h2>
                  <span className="text-sm font-serif italic text-stone-400">{phase.subtitle}</span>
                </div>
              </div>
              <div className="font-mono text-xs text-stone-400 uppercase tracking-widest pt-2">
                Timeline: <span className="text-amber-300 font-semibold">{phase.timeframe}</span>
              </div>
            </div>

            {/* Right Content & Deliverables (8 Cols) */}
            <div className="lg:col-span-8 space-y-6">
              <p className="text-sm sm:text-base font-sans text-stone-300 font-light leading-relaxed">
                {phase.description}
              </p>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-stone-400 font-semibold mb-3">
                  Key Deliverables:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {phase.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-3 p-3 bg-black/40 border border-white/5 rounded-lg">
                      <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-sans text-stone-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 font-mono text-xs text-stone-400">
                Strategic Impact: <span className="font-semibold text-amber-300">{phase.impact}</span>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 3. CTA */}
      <section className="py-20 bg-[#090B0F] text-center border-t border-white/[0.08]">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <h3 className="text-3xl font-serif text-white">
            Ready to deploy this architecture in your organization?
          </h3>
          <p className="text-stone-400 font-serif italic text-base">
            "Every engagement begins with a confidential diagnostic briefing."
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded bg-amber-400 text-black font-mono text-xs uppercase tracking-wider font-bold hover:bg-amber-300 transition-all shadow-[0_0_25px_rgba(212,175,55,0.3)]"
            >
              <span>Schedule a Confidential Diagnostic</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
