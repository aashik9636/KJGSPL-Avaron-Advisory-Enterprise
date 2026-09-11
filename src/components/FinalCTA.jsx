import React, { useEffect, useRef } from 'react';
import { ArrowRight, Lock, ShieldCheck } from 'lucide-react';
import { gsap, prefersReducedMotion } from '../animations/gsapUtils';

export const FinalCTA = ({ onOpenConversation }) => {
  const containerRef = useRef(null);
  const headlineRef = useRef(null);
  const bgGridRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.to(headlineRef.current, {
        y: -40,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.to(bgGridRef.current, {
        y: 60,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="contact"
      className="relative min-h-[85vh] flex items-center justify-center py-28 md:py-36 bg-gradient-to-b from-[#08090C] via-[#0D0F14] to-[#07080A] border-t border-white/[0.08] overflow-hidden"
    >
      {/* Dynamic Background Architectural Lines */}
      <div
        ref={bgGridRef}
        className="absolute inset-0 bg-architectural-grid opacity-35 pointer-events-none"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-amber-500/[0.04] rounded-full blur-[180px] pointer-events-none" />

      {/* Center Narrative */}
      <div
        ref={headlineRef}
        className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center"
      >
        <div className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.3em] uppercase text-amber-400 mb-8 px-4 py-1.5 rounded-full border border-amber-400/20 bg-amber-400/[0.02]">
          <Lock className="w-3.5 h-3.5 text-amber-400" />
          <span>CONFIDENTIAL ENGAGEMENT</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light text-ivory-gradient leading-tight tracking-tight mb-8">
          Is Your Organization Ready for a Different Kind of Leadership Advisory?
        </h2>

        <p className="text-lg sm:text-2xl font-serif italic text-stone-300 max-w-2xl mx-auto mb-12">
          "Every engagement begins with a confidential conversation."
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button
            onClick={onOpenConversation}
            className="luxury-btn luxury-btn-primary group !py-5 !px-10 text-sm font-semibold"
          >
            <span className="flex items-center gap-3">
              Begin the Conversation
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
            </span>
          </button>
        </div>

        <div className="mt-14 pt-8 border-t border-white/[0.06] flex flex-wrap items-center justify-center gap-8 text-[11px] font-mono text-stone-500 uppercase tracking-widest">
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            Strict Non-Disclosure Guarantee
          </span>
          <span>•</span>
          <span>Global Hubs: Abu Dhabi · Amsterdam · Los Angeles</span>
        </div>
      </div>
    </section>
  );
};
