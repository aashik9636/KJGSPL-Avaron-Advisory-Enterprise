import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Compass, Search, Layers, Cpu, ShieldCheck, CheckCircle2, 
  ArrowRight, Check, Sparkles, Target, Users, Shield, Zap, ArrowUpRight,
  ChevronLeft, ChevronRight
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const ApproachPage = () => {
  const [activePhase, setActivePhase] = useState(0);
  const phasesSectionRef = useRef(null);

  const phases = [
    {
      id: '01',
      title: 'Executive Diagnostic',
      subtitle: 'Revealing What Others Miss',
      icon: Search,
      tagline: 'Multi-dimensional assessment of leadership architecture',
      description:
        'We begin with a rigorous, multi-dimensional assessment of your leadership architecture. This is not a personality test. We examine decision-making patterns under pressure, organizational power dynamics, communication structures, and the hidden friction points that limit your leadership system’s performance.',
      deliverables: [
        'Leadership Architecture Report',
        'Decision-Making Audit',
        'Organizational Friction Map',
        'Executive Blind Spot Analysis',
      ],
    },
    {
      id: '02',
      title: 'Architecture Design',
      subtitle: 'Engineering the System',
      icon: Layers,
      tagline: 'Bespoke systems engineered from first principles',
      description:
        'Based on the diagnostic, we design a bespoke leadership architecture. This is a complete system—not a collection of workshops. We define the structures, processes, behaviors, and cultural conditions required for your leadership team to perform at the level your sector demands.',
      deliverables: [
        'Leadership System Blueprint',
        'Executive Development Roadmap',
        'Cultural Architecture Design',
        'Succession Framework',
      ],
    },
    {
      id: '03',
      title: 'Deep Implementation',
      subtitle: 'Activating the Architecture',
      icon: Cpu,
      tagline: 'Real-time decision support during high-stakes moments',
      description:
        'This is where most advisory firms stop. We don’t. We work alongside your leadership team through intensive advisory sessions, executive coaching, team interventions, and real-time decision support. We are present when it matters most—during the moments of transition, growth, and high-stakes decision-making.',
      deliverables: [
        'Monthly CEO Advisory Sessions',
        'Executive Team Workshops',
        'Real-Time Decision Support',
        'Leadership Coaching & Development',
      ],
    },
    {
      id: '04',
      title: 'Sustained Transformation',
      subtitle: 'Embedding the Capability',
      icon: ShieldCheck,
      tagline: 'Permanent, self-sustaining competitive advantage',
      description:
        'Leadership transformation is not an event. It is a process of embedding new capabilities into the DNA of your organization. We measure outcomes, refine the architecture, and ensure that the leadership capability we build becomes a permanent, self-sustaining competitive advantage.',
      deliverables: [
        'Quarterly Performance Reviews',
        'Architecture Refinement',
        'Leadership Capability Metrics',
        'Long-Term Partnership',
      ],
    },
  ];

  const principles = [
    {
      id: '01',
      title: 'Selectivity Over Scale',
      desc: 'We work with a deliberately small number of organizations. This is not a limitation—it is our quality guarantee. Every client receives our full attention and commitment.',
      icon: Target,
    },
    {
      id: '02',
      title: 'Systems Over Symptoms',
      desc: 'We do not treat leadership symptoms. We redesign the underlying system. This is why our results are structural and lasting, not temporary and cosmetic.',
      icon: Layers,
    },
    {
      id: '03',
      title: 'Presence Over Prescription',
      desc: 'We are not consultants who deliver reports and disappear. We are partners who remain present through the hardest moments of your leadership journey.',
      icon: Users,
    },
    {
      id: '04',
      title: 'Outcomes Over Activities',
      desc: 'Every intervention we design is measured against a specific leadership outcome. We are accountable for results, not just for effort.',
      icon: Zap,
    },
  ];

  return (
    <div className="bg-[#06070A] text-[#F8F6F0] pt-16 md:pt-20 min-h-screen">
      
      {/* 1. HERO HEADER (LEFT-ALIGNED, FULL VIEWPORT HEIGHT) */}
      <section className="relative min-h-[78vh] md:min-h-[85vh] flex flex-col justify-center py-16 md:py-24 bg-gradient-to-b from-[#0C0F17] via-[#080A0E] to-[#06070A] overflow-hidden">
        {/* Ambient Subtle Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#DFC38A]/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full my-auto">
          <div className="max-w-4xl space-y-7 text-left">
            <div className="inline-flex items-center gap-3.5 font-mono text-xs tracking-[0.3em] text-[#DFC38A] uppercase font-semibold">
              <span className="w-10 sm:w-14 h-[1.5px] bg-gradient-to-r from-transparent via-[#DFC38A] to-[#F0E5CC]" />
              <span>Our Approach</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-light text-white leading-[1.08] tracking-tight">
              Leadership Architecture: <br />
              <span className="text-[#DFC38A] italic font-normal">A Four-Phase System</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl font-serif text-stone-300 leading-relaxed max-w-2xl sm:max-w-3xl border-l-2 border-[#DFC38A]/50 pl-5 sm:pl-6 py-1">
              We do not deliver training programs. We design and implement complete leadership systems — engineered from first principles to enable your CEO and executive team to perform consistently at the highest level.
            </p>
          </div>
        </div>
      </section>

      {/* 2. THE FOUR-PHASE SYSTEM (CURVED STREAM WITH LEFT/RIGHT SCROLL CONTROLS) */}
      <section ref={phasesSectionRef} className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 space-y-10 relative">
        {/* Centered Header (No Underline) */}
        <div className="flex flex-col items-center justify-center text-center space-y-3 max-w-3xl mx-auto pb-2">
          <div className="inline-flex items-center justify-center gap-3 font-mono text-xs tracking-[0.28em] text-[#DFC38A] uppercase font-semibold">
            <span className="w-8 h-[1.5px] bg-gradient-to-r from-transparent via-[#DFC38A] to-[#F0E5CC]" />
            <span>Four-Phase Architecture</span>
            <span className="w-8 h-[1.5px] bg-gradient-to-l from-transparent via-[#DFC38A] to-[#F0E5CC]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white leading-tight">
            Engineered From First Principles
          </h2>
        </div>

        {/* 3D Circular Panoramic Carousel Stage (Left: 4th, Middle: 1st, Right: 2nd) */}
        <div className="relative max-w-7xl mx-auto min-h-[510px] md:min-h-[540px] flex items-center justify-center overflow-hidden py-4 select-none">
          
          {/* Subtle Curved Horizon Arch Background Glow */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl h-36 border-b border-[#DFC38A]/20 rounded-[100%] pointer-events-none blur-[0.5px]" />
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-[60%] h-20 bg-[#DFC38A]/[0.03] rounded-[100%] filter blur-xl pointer-events-none" />

          {/* Left & Right Dark Vignette Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-28 md:w-36 bg-gradient-to-r from-[#06070A] via-[#06070A]/85 to-transparent z-30 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-28 md:w-36 bg-gradient-to-l from-[#06070A] via-[#06070A]/85 to-transparent z-30 pointer-events-none" />

          {/* Floating Left Navigation Button */}
          <button
            onClick={() => setActivePhase((prev) => (prev - 1 + phases.length) % phases.length)}
            aria-label="Previous Phase"
            className="absolute left-3 sm:left-6 md:left-12 top-1/2 -translate-y-1/2 z-40 w-11 h-11 md:w-12 md:h-12 rounded-full bg-[#111624]/90 hover:bg-[#DFC38A] border border-[#DFC38A]/40 hover:border-[#DFC38A] text-white hover:text-black flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.85)] transition-all duration-300 active:scale-90 group backdrop-blur-md"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          {/* Floating Right Navigation Button */}
          <button
            onClick={() => setActivePhase((prev) => (prev + 1) % phases.length)}
            aria-label="Next Phase"
            className="absolute right-3 sm:right-6 md:right-12 top-1/2 -translate-y-1/2 z-40 w-11 h-11 md:w-12 md:h-12 rounded-full bg-[#111624]/90 hover:bg-[#DFC38A] border border-[#DFC38A]/40 hover:border-[#DFC38A] text-white hover:text-black flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.85)] transition-all duration-300 active:scale-90 group backdrop-blur-md"
          >
            <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* 3D Circular Cards Stage */}
          <div className="relative w-full h-[460px] md:h-[480px] flex items-center justify-center" style={{ perspective: '1200px' }}>
            {phases.map((phase, idx) => {
              // Relative offset:
              // rel = 0  -> Middle Card (Phase 01 when activePhase = 0)
              // rel = 1  -> Right Card  (Phase 02 when activePhase = 0)
              // rel = -1 -> Left Card   (Phase 04 when activePhase = 0)
              // rel = 2  -> Hidden behind
              let rel = (idx - activePhase) % 4;
              if (rel === 3) rel = -1;
              if (rel === -3) rel = 1;
              if (rel === -2) rel = 2;

              const isMiddle = rel === 0;
              const isRight = rel === 1;
              const isLeft = rel === -1;

              let transformStyle = '';
              let opacity = 0;
              let zIndex = 10;
              let pointerEvents = 'none';

              if (isMiddle) {
                transformStyle = 'translateX(0%) translateY(0px) scale(1.02) rotate(0deg)';
                opacity = 1;
                zIndex = 35;
                pointerEvents = 'auto';
              } else if (isLeft) {
                transformStyle = 'translateX(-106%) translateY(14px) scale(0.93) rotate(-4.5deg)';
                opacity = 0.65;
                zIndex = 20;
                pointerEvents = 'auto';
              } else if (isRight) {
                transformStyle = 'translateX(106%) translateY(14px) scale(0.93) rotate(4.5deg)';
                opacity = 0.65;
                zIndex = 20;
                pointerEvents = 'auto';
              } else {
                transformStyle = 'translateX(0%) translateY(35px) scale(0.65) rotate(0deg)';
                opacity = 0;
                zIndex = 5;
                pointerEvents = 'none';
              }

              return (
                <div
                  key={phase.id}
                  onClick={() => setActivePhase(idx)}
                  style={{
                    transform: transformStyle,
                    opacity: opacity,
                    zIndex: zIndex,
                    pointerEvents: pointerEvents,
                    transition: 'transform 0.65s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.5s ease',
                  }}
                  className={`absolute w-[290px] sm:w-[320px] md:w-[345px] p-5 sm:p-6 rounded-2xl bg-[#090B12] bg-gradient-to-b from-[#111624] via-[#0A0C14] to-[#07080D] border ${
                    isMiddle 
                      ? 'border-[#DFC38A] shadow-[0_20px_50px_rgba(223,195,138,0.2)]' 
                      : 'border-white/10 hover:border-[#DFC38A]/50 shadow-[0_15px_40px_rgba(0,0,0,0.85)] cursor-pointer'
                  } flex flex-col justify-between space-y-4 group overflow-hidden min-h-[430px] md:min-h-[450px]`}
                >
                  {/* Top Ambient Highlight */}
                  <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent ${
                    isMiddle ? 'via-[#DFC38A]' : 'via-[#DFC38A]/35'
                  } to-transparent`} />
                  
                  {/* Subtle Glow on Active Middle Card */}
                  {isMiddle && (
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#DFC38A]/[0.08] rounded-full blur-2xl pointer-events-none" />
                  )}

                  {/* Header */}
                  <div className="space-y-2.5 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className={`w-8 h-8 rounded-lg ${
                        isMiddle 
                          ? 'bg-[#DFC38A] text-black font-semibold' 
                          : 'bg-[#DFC38A]/15 border border-[#DFC38A]/40 text-[#DFC38A]'
                      } flex items-center justify-center font-serif text-base transition-all`}>
                        {phase.id}
                      </div>
                      
                      <div className="w-8 h-8 rounded-lg bg-[#DFC38A]/10 border border-[#DFC38A]/25 flex items-center justify-center text-[#DFC38A] shrink-0">
                        {React.createElement(phase.icon, { className: 'w-4 h-4' })}
                      </div>
                    </div>

                    <div className="pt-0.5">
                      <div className="text-[10px] font-mono uppercase tracking-widest text-[#DFC38A]/90 font-semibold">
                        {phase.subtitle}
                      </div>
                      <h3 className="text-lg sm:text-xl font-serif text-white font-normal mt-0.5 leading-snug">
                        {phase.title}
                      </h3>
                    </div>

                    <p className="text-[11.5px] font-light text-stone-300 leading-relaxed">
                      {phase.description}
                    </p>
                  </div>

                  {/* Deliverables Checklist Box */}
                  <div className="p-3 rounded-xl bg-black/60 border border-white/[0.07] space-y-2 mt-auto relative z-10 backdrop-blur-sm">
                    <div className="font-mono text-[9.5px] uppercase tracking-widest text-[#DFC38A] font-semibold flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-[#DFC38A]" />
                      <span>Key Deliverables</span>
                    </div>
                    <div className="space-y-1.5 pt-0.5 border-t border-white/[0.05]">
                      {phase.deliverables.map((item, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-1.5 text-[10.5px] text-stone-200">
                          <Check className="w-3 h-3 text-[#DFC38A] shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Phase Indicator Pills */}
        <div className="flex items-center justify-center gap-2.5 pt-2">
          {phases.map((phase, idx) => (
            <button
              key={phase.id}
              onClick={() => setActivePhase(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activePhase === idx 
                  ? 'w-9 bg-[#DFC38A]' 
                  : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to phase ${phase.id}`}
            />
          ))}
        </div>
      </section>

      {/* 3. OUR PRINCIPLES SECTION */}
      <section className="py-24 bg-[#08090D]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <div className="inline-flex items-center justify-center gap-2.5 font-mono text-xs tracking-[0.3em] uppercase text-[#DFC38A] bg-[#DFC38A]/[0.08] px-3.5 py-1.5 rounded-full border border-[#DFC38A]/20 font-semibold">
              <span className="w-1.5 h-1.5 bg-[#DFC38A] rounded-full" />
              Our Principles
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white leading-tight">
              What We Believe About Leadership
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {principles.map((pr) => (
              <div 
                key={pr.id}
                className="p-6 sm:p-8 rounded-2xl bg-[#0B0D14] border border-white/[0.08] hover:border-[#DFC38A]/40 transition-all duration-300 flex items-start gap-5 group shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-[#DFC38A]/10 border border-[#DFC38A]/25 flex items-center justify-center text-[#DFC38A] shrink-0 group-hover:bg-[#DFC38A] group-hover:text-black transition-all duration-300 mt-0.5">
                  {React.createElement(pr.icon, { className: 'w-6 h-6' })}
                </div>
                <div className="space-y-2 flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-serif text-white group-hover:text-[#DFC38A] transition-colors">
                      {pr.title}
                    </h3>
                    <span className="font-mono text-xs text-stone-500 font-semibold">
                      {pr.id}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-light text-stone-300 leading-relaxed">
                    {pr.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. READY TO BEGIN THE DIAGNOSTIC? (CTA SECTION) */}
      <section className="py-28 bg-gradient-to-b from-[#08090D] to-[#040507] text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <div className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.25em] text-[#DFC38A] uppercase font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Confidential Assessment</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white">
            Ready to Begin the Diagnostic?
          </h2>
          
          <p className="text-stone-300 font-serif italic text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Every engagement begins with a confidential conversation. We will explore your organization's leadership challenges and determine whether our approach is the right fit.
          </p>

          <div className="pt-4 flex justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#DFC38A] text-black font-mono text-xs uppercase font-bold tracking-wider hover:bg-[#F0E5CC] transition-all shadow-[0_0_25px_rgba(223,195,138,0.3)] hover:scale-[1.02]"
            >
              <span>Request A Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
