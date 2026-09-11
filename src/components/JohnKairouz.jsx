import React, { useEffect, useRef } from 'react';
import { Award, Clock, Users, ArrowUpRight } from 'lucide-react';
import { gsap, prefersReducedMotion } from '../animations/gsapUtils';

export const JohnKairouz = ({ onOpenConversation }) => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  const stats = [
    { value: '20+', label: 'Years Experience', icon: Award },
    { value: '3,000+', label: 'Coaching Hours', icon: Clock },
    { value: 'Global', label: 'C-Suite Engagement', icon: Users },
  ];

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.founder-reveal',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-28 md:py-40 bg-[#07080A] border-t border-white/[0.06] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait & Architectural Framing (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 p-2 sm:p-4 border border-white/[0.1] bg-[#0E1015]">
              {/* Outer decorative gold corners */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-amber-400" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-amber-400" />

              {/* Portrait Graphic Silhouette / Editorial Avatar Framing */}
              <div className="relative aspect-[3/4] overflow-hidden rounded bg-stone-900 flex flex-col justify-end border border-white/[0.06] group">
                <img
                  src="/john-kairouz.jpg"
                  alt="John Kairouz"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Subtle bottom info bar */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 space-y-1">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-amber-400 bg-black/70 px-2.5 py-1 rounded inline-block border border-amber-400/20">
                    Principal & Founder
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif text-white font-medium">
                    John Kairouz
                  </h3>
                  <p className="text-xs font-mono text-stone-300">
                    Avaron Advisory Global
                  </p>
                </div>
              </div>
            </div>

            {/* Ambient Backlight */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-amber-500/[0.05] rounded-full blur-[100px] pointer-events-none" />
          </div>

          {/* Right Column: Philosophy & Executive Track Record (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="founder-reveal inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.3em] uppercase text-amber-400">
              <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
              LEADERSHIP PHILOSOPHY
            </div>

            <div className="founder-reveal space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white leading-tight">
                "People are never the real problem in an organization.
              </h2>
              <p className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-gold-gradient leading-tight">
                The architecture around them is."
              </p>
            </div>

            <p className="founder-reveal text-stone-300 font-sans text-base sm:text-lg font-light leading-relaxed">
              John Kairouz has advised chief executives, sovereign entities, and multi-generational business families across the Middle East, Europe, and Asia. His methodology rejects superficial executive coaching in favor of structural organizational engineering.
            </p>

            {/* Metrics Ticker */}
            <div className="founder-reveal grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/[0.08]">
              {stats.map((s, idx) => (
                <div key={idx} className="p-4 bg-stone-950/60 border border-white/[0.06]">
                  <div className="font-serif text-3xl font-light text-white mb-1">
                    {s.value}
                  </div>
                  <div className="font-mono text-[10px] text-stone-400 uppercase tracking-widest">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="founder-reveal pt-4">
              <button
                onClick={onOpenConversation}
                className="luxury-btn luxury-btn-outline group !py-3.5 !px-7 text-xs"
              >
                <span className="flex items-center gap-2">
                  Request Confidential Briefing
                  <ArrowUpRight className="w-4 h-4 text-amber-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
