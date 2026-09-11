import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Shield, Landmark, TrendingUp, Check, ArrowRight, Building2, 
  Layers, Users, Sparkles, Target, Globe, Award, ShieldAlert,
  Zap, ArrowUpRight, CheckCircle2
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const OrganizationsPage = () => {
  const stackSectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardRefs.current.filter(Boolean);
      if (cards.length < 2) return;

      // Card 0 starts fixed in place; subsequent cards start below (yPercent: 120)
      cards.forEach((card, idx) => {
        if (idx > 0) {
          gsap.set(card, { yPercent: 125 });
        } else {
          gsap.set(card, { yPercent: 0 });
        }
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: stackSectionRef.current,
          start: "center center",
          end: () => `+=${cards.length * 900}`,
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        }
      });

      // Card 1 remains fixed; Card 2 comes from below to overlap; then Card 3 comes from below to overlap Card 2
      cards.forEach((card, idx) => {
        if (idx > 0) {
          tl.to(card, {
            yPercent: 0,
            duration: 1,
            ease: "power2.inOut"
          });
        }
      });
    }, stackSectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    {
      value: 'Thousands',
      label: 'GCC Companies',
      subtext: 'with 500–5,000 employees — ideal target market',
    },
    {
      value: '~80%',
      label: 'Family Business Share',
      subtext: 'of private sector GDP in the GCC',
    },
    {
      value: 'Critical',
      label: 'Leadership Gap',
      subtext: 'Most CEOs cite their team as the main growth constraint',
    },
    {
      value: '3–25',
      label: 'Avaron Target Clients',
      subtext: 'selective, high-depth engagements over 5 years',
    },
  ];

  const segments = [
    {
      id: '01',
      title: 'Family-Owned Enterprises',
      badge: 'Core Focus',
      subBadge: 'Primary Segment',
      tagline: "Where Leadership Architecture Determines the Next Generation's Success",
      icon: Shield,
      marketContext: [
        { label: 'GCC Private Sector GDP', value: '~80%' },
        { label: 'Family Business Share', value: 'Dominant' },
        { label: 'Target Company Size', value: '500–3,000' },
        { label: 'Growth Stage', value: 'Rapid' },
      ],
      industries: [
        'Hospitality Groups',
        'Real Estate Developers',
        'Logistics Companies',
        'Healthcare Providers',
        'Retail Groups',
      ],
      leadershipChallenge: [
        'Family-owned businesses represent the backbone of the GCC economy — and the most complex leadership challenges in the region. Navigating generational transition, professionalizing leadership, and building the organizational systems needed to scale requires a depth of advisory that most firms cannot provide.',
        'The CEO is often the founder or second-generation leader. The leadership team has grown with the business but lacks the systems and structures needed for the next phase of growth. Succession is a critical and often unaddressed risk. Many CEOs report that their leadership team is the main constraint to growth.',
      ],
      whatWeAddress: [
        'CEO Advisory & Strategic Alignment',
        'Succession Planning & Leadership Pipeline',
        'Executive Team Development',
        'Culture & Values Architecture',
        'Board Governance Design',
      ],
    },
    {
      id: '02',
      title: 'Government-Linked Organizations',
      badge: 'High Priority',
      subBadge: 'Secondary Segment',
      tagline: 'Transforming Nations Requires Transformational Leaders',
      icon: Landmark,
      marketContext: [
        { label: 'UAE Federal Budget 2025', value: 'AED 71.5B' },
        { label: 'Budget Increase vs 2024', value: '+11.6%' },
        { label: 'MENA Tech Spending', value: '$160B+' },
        { label: 'Transformation Programs', value: 'Active' },
      ],
      industries: [
        'Development Authorities',
        'National Transformation Programs',
        'Semi-Government Entities',
        'Sovereign Funds',
      ],
      leadershipChallenge: [
        'Government-linked organizations across the GCC are undertaking the most ambitious transformation programs in their history. National digital agendas, AI strategies, and economic diversification mandates require leaders who can manage large-scale change while maintaining service continuity.',
        'Government entities are anchor customers with mandated, non-discretionary budgets. The leaders driving these transformations need executive advisory support that understands the unique dynamics of public sector leadership: political complexity, multi-stakeholder environments, and the weight of national accountability.',
      ],
      whatWeAddress: [
        'Change Management Leadership',
        'Digital Transformation Executive Coaching',
        'Multi-Stakeholder Alignment',
        'Strategic Planning for National Programs',
        'Succession Planning for Government Leaders',
      ],
    },
    {
      id: '03',
      title: 'High-Growth Companies',
      badge: 'Emerging Priority',
      subBadge: 'Third Segment',
      tagline: 'When the Founder Must Become the CEO',
      icon: TrendingUp,
      marketContext: [
        { label: 'GCC Fintech Growth', value: 'Accelerating' },
        { label: 'Tech Sector Expansion', value: 'Significant' },
        { label: 'Founder-to-CEO Transition', value: 'Critical' },
        { label: 'Leadership Gap', value: 'Pervasive' },
      ],
      industries: [
        'Fintech',
        'Technology Platforms',
        'Digital Services',
        'AI & Deep Tech',
      ],
      leadershipChallenge: [
        'Founders and CEOs of high-growth companies face a unique leadership challenge: the skills that built the company are often not the skills needed to scale it. The transition from technical founder to organizational leader is one of the most critical — and most frequently mismanaged — transitions in business.',
        'The founder has built something remarkable. Now the organization needs a CEO — and the founder must become one. This requires leadership architecture: building the team, systems, and organizational structures that enable the company to scale without the founder becoming the bottleneck.',
      ],
      whatWeAddress: [
        'Founder-to-CEO Leadership Development',
        'Executive Team Architecture',
        'Organizational Systems Design',
        'Strategic Planning & Execution',
        'Leadership Presence & Communication',
      ],
    },
  ];

  const marketForces = [
    {
      title: 'Economic Transformation',
      desc: 'Governments across the GCC are transforming their economies at unprecedented speed. Organizations are evolving rapidly, and leadership capability is the primary constraint on transformation success.',
      icon: Globe,
    },
    {
      title: 'Family Business Succession',
      desc: "The GCC's family business sector is facing a generational leadership transition of unprecedented scale. The organizations that navigate this successfully will define the region's next chapter.",
      icon: Users,
    },
    {
      title: 'AI & Digital Disruption',
      desc: 'AI and digital transformation are creating leadership capability gaps across every sector. Organizations need leaders who can navigate complexity, make decisions under uncertainty, and build adaptive organizations.',
      icon: Zap,
    },
    {
      title: 'Talent Shortages',
      desc: 'The GCC faces significant talent shortages at the senior leadership level. Building strong executive teams from within — through succession planning and leadership development — is a strategic imperative.',
      icon: Target,
    },
  ];

  return (
    <div className="bg-[#06070A] text-[#F8F6F0] pt-16 md:pt-20 min-h-screen">
      {/* 1. HERO HEADER */}
      <section className="relative pt-4 pb-14 md:pt-6 md:pb-20 bg-gradient-to-b from-[#0C0F17] via-[#080A0E] to-[#06070A] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-3.5 font-mono text-xs tracking-[0.3em] text-amber-400 uppercase font-semibold">
              <span className="w-10 sm:w-14 h-[1.5px] bg-gradient-to-r from-transparent via-amber-400 to-amber-300" />
              <span>Who We Serve</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-light text-white leading-[1.1] tracking-tight">
              Organizations Where <br />
              <span className="text-stone-400 italic font-normal">Leadership Architecture</span> <br />
              Creates the Most Value
            </h1>

            <p className="text-base sm:text-lg md:text-xl font-serif text-stone-300 leading-relaxed max-w-3xl">
              We work with three types of organizations across the GCC — each facing distinct leadership challenges that require a depth of advisory beyond what training programs or conventional coaching can provide.
            </p>
          </div>
        </div>
      </section>

      {/* 2. KEY METRICS STATS BAR */}
      <section className="py-8 md:py-12 bg-[#08090E]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-amber-400/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl sm:text-4xl font-serif text-amber-400 font-light mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-2">
                    {stat.label}
                  </div>
                </div>
                <p className="text-xs text-stone-400 font-light leading-relaxed">
                  {stat.subtext}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CLIENT SEGMENTS (3 CORE SEGMENTS) */}
      <section 
        ref={stackSectionRef}
        className="py-12 md:py-20 max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center min-h-[95vh] relative"
      >
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-8 shrink-0">
          <div className="inline-flex items-center justify-center gap-3 font-mono text-xs tracking-[0.28em] text-[#DFC38A] uppercase font-semibold">
            <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#DFC38A]" />
            <span>Client Segments</span>
            <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#DFC38A]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white leading-tight">
            Engineered For Specific Governance Models
          </h2>
        </div>

        {/* Card Stage with Absolute Stacking & Overlap */}
        <div className="relative w-full min-h-[660px] sm:min-h-[580px] md:min-h-[540px] lg:min-h-[510px] rounded-2xl overflow-hidden shadow-2xl">
          {segments.map((sec, index) => (
            <div 
              key={sec.id} 
              ref={(el) => (cardRefs.current[index] = el)}
              style={{ zIndex: 10 + index * 10 }}
              className="absolute inset-0 w-full h-full p-5 sm:p-6 lg:p-8 rounded-2xl bg-[#090B12] bg-gradient-to-b from-[#101420] via-[#0A0C13] to-[#07080D] border border-white/10 hover:border-[#DFC38A]/50 transition-colors duration-300 shadow-[0_-25px_60px_rgba(0,0,0,0.95)] overflow-hidden group space-y-4 sm:space-y-5 flex flex-col justify-between"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#DFC38A]/60 to-transparent" />

              {/* Header / Badges */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-white/[0.08]">
                <div className="space-y-1.5 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-serif text-2xl sm:text-3xl font-light text-[#DFC38A] mr-1">
                      {sec.id}
                    </span>
                    <span className="px-2.5 py-0.5 rounded bg-[#DFC38A]/10 border border-[#DFC38A]/30 text-[#DFC38A] font-mono text-[10.5px] uppercase tracking-wider font-semibold">
                      {sec.badge}
                    </span>
                    <span className="px-2.5 py-0.5 rounded bg-white/[0.04] border border-white/10 text-stone-400 font-mono text-[10.5px] uppercase tracking-wider">
                      {sec.subBadge}
                    </span>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif text-white font-normal">
                    {sec.title}
                  </h3>
                  <p className="font-serif italic text-[#DFC38A]/90 text-xs sm:text-sm">
                    "{sec.tagline}"
                  </p>
                </div>

                <div className="w-11 h-11 rounded-xl bg-[#DFC38A]/10 border border-[#DFC38A]/25 flex items-center justify-center text-[#DFC38A] shrink-0 self-start">
                  {React.createElement(sec.icon, { className: 'w-5 h-5' })}
                </div>
              </div>

              {/* 2-Column Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start flex-1">
                
                {/* Left Col: Market Context & Industries Served (5 cols) */}
                <div className="lg:col-span-5 space-y-3.5">
                  {/* Market Context */}
                  <div className="p-3.5 sm:p-4 rounded-xl bg-black/40 border border-white/[0.06] space-y-2">
                    <div className="font-mono text-[11px] uppercase tracking-widest text-[#DFC38A] font-semibold flex items-center gap-2">
                      <span className="w-3 h-[1.5px] bg-[#DFC38A]" />
                      <span>Market Context</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 pt-0.5">
                      {sec.marketContext.map((mc, idx) => (
                        <div key={idx} className="border-b border-white/[0.04] pb-1">
                          <div className="text-[9.5px] font-mono text-stone-400 uppercase tracking-wider">{mc.label}</div>
                          <div className="text-xs sm:text-[13px] font-serif text-white font-medium mt-0.5">{mc.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Industries Served */}
                  <div className="p-3 sm:p-3.5 rounded-xl bg-black/40 border border-white/[0.06] space-y-1.5">
                    <div className="font-mono text-[10.5px] uppercase tracking-widest text-stone-300 font-semibold flex items-center gap-2">
                      <Building2 className="w-3 h-3 text-[#DFC38A]" />
                      <span>Industries Served</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-0.5">
                      {sec.industries.map((ind, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-0.5 rounded-md bg-stone-900 border border-white/10 text-[11px] font-mono text-stone-300"
                        >
                          {ind}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Col: Leadership Challenge & What We Address (7 cols) */}
                <div className="lg:col-span-7 space-y-3.5 flex flex-col justify-between h-full">
                  {/* The Leadership Challenge */}
                  <div className="space-y-1">
                    <h4 className="font-mono text-[11px] uppercase tracking-widest text-stone-300 font-bold flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-red-400/80 rounded-full" />
                      The Leadership Challenge
                    </h4>
                    <p className="text-xs sm:text-[13px] font-light text-stone-300 leading-relaxed">
                      {sec.leadershipChallenge[0]}
                    </p>
                  </div>

                  {/* What We Address */}
                  <div className="p-3.5 sm:p-4 rounded-xl bg-gradient-to-r from-[#DFC38A]/[0.06] via-[#DFC38A]/[0.02] to-transparent border border-[#DFC38A]/20 space-y-2">
                    <h4 className="font-mono text-[11px] uppercase tracking-widest text-[#DFC38A] font-bold flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#DFC38A]" />
                      What We Address
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-0.5">
                      {sec.whatWeAddress.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 text-xs text-stone-200">
                          <Check className="w-3.5 h-3.5 text-[#DFC38A] shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action CTA Link */}
                  <div className="pt-2 pb-1 flex justify-end">
                    <Link 
                      to="/contact" 
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#DFC38A] text-black font-mono text-xs uppercase font-bold tracking-wider hover:bg-[#F0E5CC] transition-all shadow-[0_0_20px_rgba(223,195,138,0.25)]"
                    >
                      <span>Consult On {sec.title}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. MARKET CONTEXT - WHY LEADERSHIP ARCHITECTURE IS A GCC IMPERATIVE */}
      <section className="py-24 bg-[#08090D]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <div className="inline-flex items-center justify-center gap-2.5 font-mono text-xs tracking-[0.3em] uppercase text-[#DFC38A] bg-[#DFC38A]/[0.08] px-3.5 py-1.5 rounded-full border border-[#DFC38A]/20 font-semibold">
              <span className="w-1.5 h-1.5 bg-[#DFC38A] rounded-full" />
              Market Context
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white leading-tight">
              Why Leadership Architecture Is a GCC Imperative Right Now
            </h2>
            <p className="text-stone-300 font-serif italic text-base sm:text-lg max-w-2xl mx-auto">
              Four converging forces are creating an unprecedented demand for high-quality executive leadership advisory across the GCC.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {marketForces.map((force, idx) => (
              <div 
                key={idx}
                className="p-5 sm:p-6 rounded-xl bg-[#090B12] bg-gradient-to-br from-[#0F121C] to-[#07080D] border border-white/[0.08] hover:border-[#DFC38A]/40 transition-all duration-300 flex items-start gap-4 sm:gap-5 group shadow-lg"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#DFC38A]/10 border border-[#DFC38A]/25 flex items-center justify-center text-[#DFC38A] shrink-0 group-hover:bg-[#DFC38A] group-hover:text-black transition-all duration-300 mt-0.5">
                  {React.createElement(force.icon, { className: 'w-5 h-5' })}
                </div>
                <div className="space-y-1.5 flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-serif text-white group-hover:text-[#DFC38A] transition-colors">
                    {force.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] font-light text-stone-300 leading-relaxed">
                    {force.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DOES YOUR ORGANIZATION FIT OUR PROFILE? (CTA SECTION) */}
      <section className="py-28 bg-gradient-to-b from-[#08090D] to-[#040507] text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.25em] text-amber-400 uppercase font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Executive Engagement
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white mb-6">
            Does Your Organization Fit Our Profile?
          </h2>
          
          <p className="text-stone-300 font-serif italic text-lg sm:text-xl max-w-2xl mx-auto mb-6 leading-relaxed">
            We are selective about the organizations we work with. If you believe your organization could benefit from a genuine leadership architecture engagement, we invite you to begin a conversation.
          </p>

          <p className="text-stone-500 font-light text-xs max-w-xl mx-auto mb-10 leading-relaxed">
            A boutique organizational architecture firm. We diagnose and redesign the human systems that determine whether leadership performs or fails — one organization at a time.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber-400 text-black font-mono text-xs uppercase tracking-widest font-bold rounded hover:bg-amber-300 transition-all shadow-[0_0_25px_rgba(212,175,55,0.3)]"
            >
              <span>Begin the Conversation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/approach"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-stone-300 font-mono text-xs uppercase tracking-widest hover:border-amber-400/50 hover:text-white transition-all rounded"
            >
              <span>Explore Our Approach</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
