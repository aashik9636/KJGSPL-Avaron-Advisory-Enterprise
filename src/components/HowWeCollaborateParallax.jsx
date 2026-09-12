import React, { useState, useEffect, useRef } from 'react';
import { Check } from 'lucide-react';
import { gsap, ScrollTrigger } from '../animations/gsapUtils';

export const HowWeCollaborateParallax = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

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
      fallbackImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
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
      fallbackImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop',
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
      fallbackImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
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
      fallbackImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
      statusText: 'Scaled Digital Integration',
      propertyLabel: 'Property 04',
      themeGlow: 'rgba(240, 229, 204, 0.15)',
    },
  ];

  const numOfPages = collaborateCards.length;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Pin the viewport while scrolling through the cards
    const scrollTriggerInstance = ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: `+=${(numOfPages - 1) * 1100}px`,
      pin: true,
      pinSpacing: true,
      anticipatePin: 1,
      scrub: 0.6,
      onUpdate: (self) => {
        const progress = self.progress;

        // Calculate active card index based on scroll position
        const rawIndex = progress * (numOfPages - 1);
        const currentIndex = Math.min(
          numOfPages - 1,
          Math.max(0, Math.round(rawIndex))
        );
        setActiveIndex(currentIndex);
      },
    });

    return () => {
      scrollTriggerInstance.kill();
    };
  }, [numOfPages]);

  return (
    <section 
      ref={containerRef}
      id="how-we-collaborate"
      className="relative w-full h-screen bg-[#06070A] text-[#F8F6F0] selection:bg-[#DFC38A] selection:text-black flex flex-col justify-between overflow-hidden py-4 sm:py-6"
    >
      {/* Ambient Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[140px] opacity-25 transition-all duration-700 pointer-events-none"
          style={{ background: collaborateCards[activeIndex]?.themeGlow || 'rgba(223, 195, 138, 0.15)' }}
        />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#DFC38A]/[0.05] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#DFC38A_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03] pointer-events-none" />
      </div>

      <div className="w-full h-full flex flex-col justify-between px-4 sm:px-6 md:px-12 max-w-[1440px] mx-auto z-10 select-none">
        
        {/* Top Header */}
        <div className="w-full flex items-center justify-center pt-1 pb-3 shrink-0">
          {/* Centered Heading */}
          <div className="text-center space-y-0.5 mx-auto">
            <div className="inline-flex items-center justify-center gap-2 font-mono text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-[#DFC38A] font-semibold">
              <span className="w-5 h-[1px] bg-gradient-to-r from-transparent to-[#DFC38A]" />
              <span>Partnership Types</span>
              <span className="w-5 h-[1px] bg-gradient-to-l from-transparent to-[#DFC38A]" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-serif font-light text-white tracking-tight leading-tight">
              How We Collaborate
            </h2>
          </div>
        </div>

        {/* SPLIT SCREEN OPPOSING SLIDE STAGE */}
        <div className="relative w-full flex-1 min-h-0 my-3 overflow-hidden">
          {collaborateCards.map((card, idx) => {
            const isActive = activeIndex === idx;
            const isPast = activeIndex > idx;
            const isEven = idx % 2 === 0;

            // Opposing vertical motion transitions (Animated Scroll technique)
            // Left Half: enters from bottom (100%) or top (-100%)
            // Right Half: enters from opposite direction for luxury split animation
            const upOff = 'translateY(-100%)';
            const downOff = 'translateY(100%)';

            const leftTrans = isActive
              ? 'translateY(0)'
              : isPast
              ? upOff
              : downOff;

            const rightTrans = isActive
              ? 'translateY(0)'
              : isPast
              ? downOff
              : upOff;

            return (
              <div
                key={card.id}
                className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${
                  isActive ? 'opacity-100 pointer-events-auto z-20' : 'opacity-0 pointer-events-none z-10'
                }`}
              >
                {/* Left Split Column */}
                <div
                  className="absolute top-0 left-0 w-full lg:w-1/2 h-full transition-transform duration-[850ms] ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-center p-4 sm:p-8 lg:p-10"
                  style={{ transform: leftTrans }}
                >
                  {isEven ? (
                    <ImageCard card={card} />
                  ) : (
                    <ContentCard card={card} />
                  )}
                </div>

                {/* Right Split Column */}
                <div
                  className="hidden lg:flex absolute top-0 left-1/2 w-1/2 h-full transition-transform duration-[850ms] ease-[cubic-bezier(0.16,1,0.3,1)] items-center justify-center p-4 sm:p-8 lg:p-10"
                  style={{ transform: rightTrans }}
                >
                  {isEven ? (
                    <ContentCard card={card} />
                  ) : (
                    <ImageCard card={card} />
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

/* ========================================================
   SUB-COMPONENT: IMAGE CARD (Luxury Theme)
   ======================================================== */
const ImageCard = ({ card }) => {
  return (
    <div className="relative w-full max-w-[450px] h-[320px] sm:h-[380px] lg:h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/[0.12] hover:border-[#DFC38A]/50 shadow-[0_20px_50px_rgba(0,0,0,0.85)] group bg-[#0A0C12] transition-colors duration-500">
      <img
        src={card.image}
        alt={card.title}
        onError={(e) => {
          if (card.fallbackImage) e.currentTarget.src = card.fallbackImage;
        }}
        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-95 contrast-105"
      />

      {/* Dark Ambient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#06070A]/60 via-transparent to-black/20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#DFC38A]/[0.05] to-transparent pointer-events-none" />
    </div>
  );
};

/* ========================================================
   SUB-COMPONENT: CONTENT CARD (Luxury Theme)
   ======================================================== */
const ContentCard = ({ card }) => {
  return (
    <div className="w-full max-w-[540px] flex flex-col justify-center space-y-2.5 sm:space-y-3.5 text-left">
      {/* Category Tag Pill */}
      <div>
        <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#DFC38A]/10 border border-[#DFC38A]/30 text-[#DFC38A] font-mono text-[11px] sm:text-xs font-bold tracking-wider uppercase shadow-[0_0_15px_rgba(223,195,138,0.15)]">
          {card.badge}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-serif font-light text-white tracking-tight leading-tight">
        {card.title}
      </h3>

      {/* Subtitle */}
      <p className="text-xs sm:text-sm font-serif italic text-[#DFC38A]/90 tracking-normal leading-snug">
        {card.subtitle}
      </p>

      {/* Description */}
      <p className="text-xs sm:text-[13.5px] text-stone-300 font-light leading-relaxed">
        {card.description}
      </p>

      {/* What We Offer Partners Section */}
      <div className="pt-1.5 space-y-2">
        <div className="text-[10.5px] sm:text-xs font-mono font-bold tracking-[0.2em] text-[#DFC38A] uppercase">
          {card.capabilitiesLabel}
        </div>

        {/* 2x2 Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
          {card.capabilities.map((cap, cIdx) => (
            <div
              key={cIdx}
              className="flex items-center gap-2.5 px-3 py-2 sm:py-2.5 rounded-xl bg-[#0B0D14] hover:bg-[#11141E] border border-white/[0.08] hover:border-[#DFC38A]/45 transition-all duration-300 shadow-md group/pill"
            >
              <div className="w-4 h-4 sm:w-4.5 sm:h-4.5 rounded-full border border-[#DFC38A]/50 bg-[#DFC38A]/10 flex items-center justify-center text-[#DFC38A] shrink-0 group-hover/pill:bg-[#DFC38A] group-hover/pill:text-black transition-colors">
                <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 stroke-[3]" />
              </div>
              <span className="text-[11px] sm:text-xs font-medium text-stone-200 group-hover/pill:text-white leading-tight">
                {cap}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


