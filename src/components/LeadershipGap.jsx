import React, { useEffect, useRef } from 'react';
import { gsap, prefersReducedMotion } from '../animations/gsapUtils';

export const LeadershipGap = () => {
  const containerRef = useRef(null);
  const textLine1Ref = useRef(null);
  const textLine2Ref = useRef(null);
  const labelRef = useRef(null);
  const lineTopRef = useRef(null);
  const lineBottomRef = useRef(null);
  const bgGlowRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.9,
          anticipatePin: 1,
        },
      });

      // Pinned sequential animation sequence
      tl.fromTo(
        labelRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5 }
      )
      .fromTo(
        textLine1Ref.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.2'
      )
      .fromTo(
        lineTopRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.7, ease: 'power2.out' },
        '-=0.4'
      )
      .fromTo(
        textLine2Ref.current,
        { opacity: 0, y: 50, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power3.out' },
        '+=0.1'
      )
      .fromTo(
        lineBottomRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.7, ease: 'power2.out' },
        '-=0.5'
      )
      .to(
        bgGlowRef.current,
        { opacity: 0.8, scale: 1.2, duration: 1 },
        '-=0.8'
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center bg-[#07080A] overflow-hidden py-24"
    >
      {/* Background Ambient Glow & Grid */}
      <div
        ref={bgGlowRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-500/[0.04] rounded-full blur-[160px] pointer-events-none opacity-0 transition-opacity"
      />
      <div className="absolute inset-0 bg-architectural-dots opacity-20 pointer-events-none" />

      {/* Center Framing Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 w-full text-center">
        {/* Architectural Label */}
        <div ref={labelRef} className="mb-8">
          <span className="inline-flex items-center gap-3 font-mono text-[11px] md:text-xs tracking-[0.35em] uppercase text-amber-400/90 border border-amber-400/20 px-4 py-1.5 rounded-full bg-amber-400/[0.02]">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            THE LEADERSHIP GAP
          </span>
        </div>

        {/* Framing Line Top */}
        <div
          ref={lineTopRef}
          className="w-32 h-[1px] bg-gradient-to-r from-transparent via-amber-400/40 to-transparent mx-auto mb-10 origin-center"
        />

        {/* Editorial Text Statement with Split Hierarchy */}
        <div className="space-y-6 md:space-y-8">
          <p
            ref={textLine1Ref}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light text-stone-300 leading-tight tracking-tight"
          >
            "Your leadership team <br className="hidden sm:inline" />
            may not be the problem.
          </p>

          <p
            ref={textLine2Ref}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-normal italic text-gold-gradient leading-tight tracking-tight"
          >
            The architecture around them may be."
          </p>
        </div>

        {/* Framing Line Bottom */}
        <div
          ref={lineBottomRef}
          className="w-48 h-[1px] bg-gradient-to-r from-transparent via-stone-500/40 to-transparent mx-auto mt-12 origin-center"
        />

        {/* Architectural Monogram Sub-note */}
        <div className="mt-10 flex items-center justify-center gap-4 text-[10px] font-mono text-stone-500 uppercase tracking-[0.25em]">
          <span>Diagnosis</span>
          <span className="w-1 h-1 bg-stone-600 rounded-full" />
          <span>System Failure</span>
          <span className="w-1 h-1 bg-stone-600 rounded-full" />
          <span>Restructuring</span>
        </div>
      </div>
    </section>
  );
};
