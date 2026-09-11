import React, { useState, useEffect, useRef } from 'react';
import { 
  CheckCircle2, Check, ArrowRight, ShieldCheck, 
  Sparkles, Layers, Cpu, Globe, Users, ArrowUpRight, ChevronRight, ChevronLeft
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const HowWeCollaborateParallax = () => {
  const containerRef = useRef(null);
  const stickyRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const collaborateCards = [
    {
      id: '01',
      badge: 'GLOBAL ALLIANCES',
      title: '1. Global Advisory Networks',
      subtitle: 'For Global Advisory & Consulting Partners',
      description:
        'We partner with select global advisory and consulting firms who seek a specialized GCC leadership capability. Our deep regional knowledge and sector-specific expertise complements the scale and reach of larger advisory networks.',
      capabilitiesLabel: 'WHAT WE OFFER PARTNERS',
      capabilities: [
        'Specialized GCC executive leadership expertise',
        'Access to senior leadership across family business, government, and high-growth sectors',
        'Co-delivery of leadership programs at scale',
        'Regional market intelligence and relationships',
      ],
      image: '/images/partners/partner_global_advisory.jpg',
      fallbackImage: '/images/partners/partner_global_advisory.jpg',
      statusText: 'Global Advisory Alliances Active',
      propertyLabel: 'Property 01',
      themeGlow: 'rgba(223, 195, 138, 0.15)',
    },
    {
      id: '02',
      badge: 'EXECUTIVE EDUCATION',
      title: '2. Executive Education Institutions',
      subtitle: 'For Business Schools & Leadership Academies',
      description:
        'We collaborate with leading business schools and executive education institutions to deliver specialized leadership programs for GCC executives. Our practitioner expertise complements academic rigor.',
      capabilitiesLabel: 'WHAT WE OFFER PARTNERS',
      capabilities: [
        'Practitioner-led executive programs',
        'GCC-specific leadership curriculum development',
        'Executive coaching for program participants',
        'Access to senior executive networks',
      ],
      image: '/images/partners/partner_exec_education.jpg',
      fallbackImage: '/images/partners/partner_exec_education.jpg',
      statusText: 'Academic & Executive Rigor',
      propertyLabel: 'Property 02',
      themeGlow: 'rgba(240, 229, 204, 0.15)',
    },
    {
      id: '03',
      badge: 'SECTOR ASSOCIATIONS',
      title: '3. Sector-Specific Organizations',
      subtitle: 'For Industry Associations & Government Bodies',
      description:
        'We partner with industry associations, government bodies, and sector-specific organizations to deliver leadership development at a sector level—creating systemic leadership improvement across entire industries.',
      capabilitiesLabel: 'WHAT WE OFFER PARTNERS',
      capabilities: [
        'Sector-wide leadership assessment frameworks',
        'Industry leadership benchmarking',
        'Customized programs for sector-specific challenges',
        'Thought leadership and research collaboration',
      ],
      image: '/images/partners/partner_sector_organizations.jpg',
      fallbackImage: '/images/partners/partner_sector_organizations.jpg',
      statusText: 'Industry & Systemic Impact',
      propertyLabel: 'Property 03',
      themeGlow: 'rgba(223, 195, 138, 0.15)',
    },
    {
      id: '04',
      badge: 'DIGITAL PLATFORMS',
      title: '4. Technology & HR Platforms',
      subtitle: 'For HR Tech & Talent Management Systems',
      description:
        'We work with select HR technology and talent management platforms to integrate our leadership architecture methodology into digital tools that scale our impact beyond individual engagements.',
      capabilitiesLabel: 'WHAT WE OFFER PARTNERS',
      capabilities: [
        'Leadership assessment methodology licensing',
        'Content development for digital platforms',
        'Advisory support for product development',
        'Co-marketing to senior executive audiences',
      ],
      image: '/images/partners/partner_tech_platforms.jpg',
      fallbackImage: '/images/partners/partner_tech_platforms.jpg',
      statusText: 'Scaled Digital Integration',
      propertyLabel: 'Property 04',
      themeGlow: 'rgba(240, 229, 204, 0.15)',
    },
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const totalCards = collaborateCards.length;

    const scrollTriggerInstance = ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: `+=${(totalCards - 1) * 1200}px`,
      pin: true,
      pinSpacing: true,
      anticipatePin: 1,
      scrub: 0.8,
      onUpdate: (self) => {
        const progress = self.progress;
        setScrollProgress(progress);

        // Smoothly calculate active card based on scroll progress
        const rawIndex = progress * (totalCards - 1);
        const currentIndex = Math.min(
          totalCards - 1,
          Math.max(0, Math.round(rawIndex))
        );
        setActiveIndex(currentIndex);
      },
    });

    return () => {
      scrollTriggerInstance.kill();
    };
  }, [collaborateCards.length]);

  const scrollToCard = (index) => {
    const totalCards = collaborateCards.length;
    const progressTarget = index / (totalCards - 1);
    
    // Find the scroll trigger instance
    const allTriggers = ScrollTrigger.getAll();
    const myTrigger = allTriggers.find((t) => t.trigger === containerRef.current);

    if (myTrigger) {
      const targetScroll = myTrigger.start + (myTrigger.end - myTrigger.start) * progressTarget;
      if (window.lenis) {
        window.lenis.scrollTo(targetScroll, { duration: 1.2 });
      } else {
        window.scrollTo({
          top: targetScroll,
          behavior: 'smooth',
        });
      }
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section 
      ref={containerRef}
      id="how-we-collaborate"
      className="relative w-full min-h-screen bg-[#06070A] text-[#F8F6F0] selection:bg-[#DFC38A] selection:text-black flex flex-col justify-between overflow-hidden"
    >
      {/* Ambient Background Warm Gold & Obsidian Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[140px] opacity-25 transition-all duration-700 pointer-events-none"
          style={{ background: collaborateCards[activeIndex]?.themeGlow || 'rgba(223, 195, 138, 0.15)' }}
        />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#DFC38A]/[0.05] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#DFC38A_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03] pointer-events-none" />
      </div>

      {/* FULL-VIEWPORT STAGE (PINNED FIRMLY IN PLACE BY GSAP SCROLLTRIGGER) */}
      <div 
        ref={stickyRef}
        className="h-screen w-full flex flex-col justify-between py-6 md:py-8 px-4 sm:px-6 md:px-12 max-w-[1400px] mx-auto z-10 select-none"
      >
        {/* Top Centered Header & Clean Number Pills */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 pt-1 border-b border-white/[0.08] pb-3 relative">
          {/* Left Dummy Spacer for desktop balance */}
          <div className="w-32 hidden lg:block" />

          {/* Centered Heading */}
          <div className="text-center space-y-1 mx-auto">
            <div className="inline-flex items-center justify-center gap-2.5 font-mono text-[11px] tracking-[0.28em] uppercase text-[#DFC38A] font-semibold">
              <span className="w-6 h-[1px] bg-gradient-to-r from-transparent to-[#DFC38A]" />
              <span>Partnership Types</span>
              <span className="w-6 h-[1px] bg-gradient-to-l from-transparent to-[#DFC38A]" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-white tracking-tight">
              How We Collaborate
            </h2>
          </div>

          {/* Clean Step Switcher Navigation (Only Numbers 01, 02, 03, 04) */}
          <div className="flex items-center gap-1.5 sm:gap-2 bg-[#0B0D14]/90 backdrop-blur-md p-1.5 rounded-full border border-white/[0.08] shadow-lg">
            {collaborateCards.map((card, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={card.id}
                  onClick={() => scrollToCard(idx)}
                  className={`px-3 py-1 sm:px-3.5 sm:py-1 rounded-full text-xs font-mono font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-[#DFC38A] text-black font-bold shadow-[0_0_20px_rgba(223,195,138,0.4)] scale-105'
                      : 'text-stone-400 hover:text-white hover:bg-white/[0.05]'
                  }`}
                  aria-label={`Go to section ${card.id}`}
                >
                  <span>{card.id}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* MAIN ALTERNATING PARALLAX STAGE (LEFT & RIGHT SLOTS) */}
        <div className="relative w-full flex-1 flex items-center justify-center py-2 md:py-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center w-full max-h-[78vh]">
            
            {/* ========================================================
                LEFT COLUMN (Holds Image on Even Indices, Text on Odd)
               ======================================================== */}
            <div className="lg:col-span-6 relative w-full h-[400px] sm:h-[460px] lg:h-[510px] flex items-center justify-center">
              {collaborateCards.map((card, idx) => {
                const isActive = activeIndex === idx;
                const isEven = idx % 2 === 0;

                // Vertical bottom-to-top motion calculation:
                // idx < activeIndex (past): moves UP and disappears (-90px)
                // idx === activeIndex (current): centered at 0px
                // idx > activeIndex (future): waits BELOW at (+110px) and rises up
                let translateY = 0;
                let opacity = 0;
                let scale = 0.93;
                let pointerEvents = 'none';

                if (isActive) {
                  translateY = 0;
                  opacity = 1;
                  scale = 1;
                  pointerEvents = 'auto';
                } else if (idx < activeIndex) {
                  // Disappear upwards to the top
                  translateY = -90;
                  opacity = 0;
                  scale = 0.94;
                } else {
                  // Enter from the bottom
                  translateY = 110;
                  opacity = 0;
                  scale = 0.94;
                }

                return (
                  <div
                    key={`left-${card.id}`}
                    style={{
                      opacity,
                      transform: `translateY(${translateY}px) scale(${scale})`,
                      pointerEvents,
                      transition: 'opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1), transform 0.75s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                    className="absolute inset-0 w-full h-full flex flex-col justify-center"
                  >
                    {isEven ? (
                      /* EVEN CARD (0, 2): LEFT SIDE IS IMAGE */
                      <ImageCard card={card} />
                    ) : (
                      /* ODD CARD (1, 3): LEFT SIDE IS TEXT CONTENT */
                      <ContentCard card={card} />
                    )}
                  </div>
                );
              })}
            </div>

            {/* ========================================================
                RIGHT COLUMN (Holds Text on Even Indices, Image on Odd)
               ======================================================== */}
            <div className="lg:col-span-6 relative w-full h-[400px] sm:h-[460px] lg:h-[510px] flex items-center justify-center">
              {collaborateCards.map((card, idx) => {
                const isActive = activeIndex === idx;
                const isEven = idx % 2 === 0;

                let translateY = 0;
                let opacity = 0;
                let scale = 0.93;
                let pointerEvents = 'none';

                if (isActive) {
                  translateY = 0;
                  opacity = 1;
                  scale = 1;
                  pointerEvents = 'auto';
                } else if (idx < activeIndex) {
                  // Disappear upwards to the top
                  translateY = -90;
                  opacity = 0;
                  scale = 0.94;
                } else {
                  // Enter from the bottom
                  translateY = 110;
                  opacity = 0;
                  scale = 0.94;
                }

                return (
                  <div
                    key={`right-${card.id}`}
                    style={{
                      opacity,
                      transform: `translateY(${translateY}px) scale(${scale})`,
                      pointerEvents,
                      transition: 'opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1), transform 0.75s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                    className="absolute inset-0 w-full h-full flex flex-col justify-center"
                  >
                    {isEven ? (
                      /* EVEN CARD (0, 2): RIGHT SIDE IS TEXT CONTENT */
                      <ContentCard card={card} />
                    ) : (
                      /* ODD CARD (1, 3): RIGHT SIDE IS IMAGE */
                      <ImageCard card={card} />
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </div>

        {/* Bottom Status / Scroll Hint Bar */}
        <div className="w-full flex items-center justify-between pt-2 border-t border-white/[0.08] text-stone-400 font-mono text-[11px]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#DFC38A]" />
            <span>Active Alliance: <span className="text-[#DFC38A]">{collaborateCards[activeIndex]?.badge}</span></span>
          </div>

          {/* Mini Scroll Progress Bar */}
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-[10px] text-stone-500 uppercase tracking-wider">Scroll To Transition</span>
            <div className="w-28 sm:w-36 h-1.5 bg-[#11141E] rounded-full overflow-hidden border border-white/10">
              <div 
                className="h-full bg-gradient-to-r from-[#BFA162] via-[#DFC38A] to-[#F0E5CC] rounded-full transition-all duration-150"
                style={{ width: `${Math.max(5, scrollProgress * 100)}%` }}
              />
            </div>
            <span className="text-[#DFC38A] font-semibold">{activeIndex + 1}/{collaborateCards.length}</span>
          </div>
        </div>

      </div>
    </section>
  );
};

/* ========================================================
   SUB-COMPONENT: IMAGE CARD (Matching Luxury Website Theme)
   ======================================================== */
const ImageCard = ({ card }) => {
  return (
    <div className="relative w-full max-w-[430px] xl:max-w-[450px] h-[360px] sm:h-[420px] lg:h-[470px] mx-auto rounded-2xl sm:rounded-3xl overflow-hidden border border-white/[0.1] hover:border-[#DFC38A]/50 shadow-[0_20px_50px_rgba(0,0,0,0.85)] group bg-[#0A0C12] transition-colors duration-500">
      {/* Image with subtle hover zoom */}
      <img
        src={card.image}
        alt={card.title}
        onError={(e) => {
          if (card.fallbackImage) e.currentTarget.src = card.fallbackImage;
        }}
        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-95 contrast-105"
      />

      {/* Ambient Luxury Dark Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#06070A]/90 via-transparent to-black/30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#DFC38A]/[0.05] to-transparent pointer-events-none" />

      {/* Floating Bottom Capsule Bar */}
      <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 z-10">
        <div className="flex items-center justify-between px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-[#0B0D14]/90 backdrop-blur-md border border-[#DFC38A]/30 shadow-[0_8px_25px_rgba(0,0,0,0.8)]">
          <div className="flex items-center gap-2 sm:gap-2.5 text-xs sm:text-sm font-medium text-white">
            <span className="w-2 h-2 rounded-full bg-[#DFC38A] shadow-[0_0_10px_#DFC38A] animate-pulse shrink-0" />
            <span className="truncate">{card.statusText}</span>
          </div>
          <span className="font-mono text-[10.5px] sm:text-xs text-[#DFC38A] font-semibold tracking-wider uppercase shrink-0 pl-2">
            {card.propertyLabel}
          </span>
        </div>
      </div>
    </div>
  );
};

/* ========================================================
   SUB-COMPONENT: CONTENT CARD (Matching Luxury Website Theme)
   ======================================================== */
const ContentCard = ({ card }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center space-y-3 sm:space-y-4 px-1 sm:px-3 text-left">
      {/* Category Tag Pill */}
      <div>
        <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#DFC38A]/10 border border-[#DFC38A]/30 text-[#DFC38A] font-mono text-[11px] sm:text-xs font-bold tracking-wider uppercase shadow-[0_0_15px_rgba(223,195,138,0.15)]">
          {card.badge}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-light text-white tracking-tight leading-tight">
        {card.title}
      </h3>

      {/* Subtitle */}
      <p className="text-xs sm:text-sm font-serif italic text-[#DFC38A]/90 tracking-normal leading-snug">
        {card.subtitle}
      </p>

      {/* Description */}
      <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed max-w-xl">
        {card.description}
      </p>

      {/* What We Offer Partners Section */}
      <div className="pt-2 space-y-2.5">
        <div className="text-[10.5px] sm:text-xs font-mono font-bold tracking-[0.2em] text-[#DFC38A] uppercase">
          {card.capabilitiesLabel}
        </div>

        {/* 2x2 Capabilities Grid in Luxury Theme */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {card.capabilities.map((cap, cIdx) => (
            <div
              key={cIdx}
              className="flex items-center gap-2.5 px-3.5 py-2.5 sm:py-3 rounded-xl bg-[#0B0D14] hover:bg-[#11141E] border border-white/[0.08] hover:border-[#DFC38A]/45 transition-all duration-300 shadow-md group/pill"
            >
              <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border border-[#DFC38A]/50 bg-[#DFC38A]/10 flex items-center justify-center text-[#DFC38A] shrink-0 group-hover/pill:bg-[#DFC38A] group-hover/pill:text-black transition-colors">
                <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 stroke-[3]" />
              </div>
              <span className="text-[11.5px] sm:text-xs font-medium text-stone-200 group-hover/pill:text-white leading-tight">
                {cap}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
