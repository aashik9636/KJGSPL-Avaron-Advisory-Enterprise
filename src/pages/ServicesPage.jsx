import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Check, ChevronDown, Sparkles, Layers, ShieldCheck, 
  HelpCircle, Clock, Tag, Target, CheckCircle2, DollarSign
} from 'lucide-react';

export const ServicesPage = () => {
  const [openServiceIdx, setOpenServiceIdx] = useState(0);
  const [openFaqIdx, setOpenFaqIdx] = useState(null);

  const services = [
    {
      id: '01',
      category: 'Foundation',
      duration: '4–6 Weeks',
      title: 'Executive Diagnostic Assessment',
      painPoint:
        "Leaders often don't know what they don't know. Organizations invest in leadership development without understanding the root cause of their leadership gaps—resulting in expensive interventions that treat symptoms rather than structural problems.",
      idealFor: 'New clients, leadership transitions, organizational inflection points',
      solution:
        'A comprehensive, multi-dimensional assessment of your leadership architecture. We examine decision-making patterns, organizational power dynamics, communication structures, team alignment, and the hidden friction points that limit performance. We deliver a complete Leadership Architecture Report with specific, actionable recommendations.',
      outcomes: [
        'Clear identification of leadership structural gaps',
        'Decision-making audit with specific blind spots identified',
        'Organizational friction map with priority interventions',
        '90-day action plan for immediate impact',
        'Foundation for all subsequent advisory work',
      ],
    },
    {
      id: '02',
      category: 'Core Advisory',
      duration: 'Ongoing Monthly Engagement',
      title: 'CEO Advisory Retainer',
      painPoint:
        'CEOs navigate unprecedented complexity with limited confidential sounding boards. Strategic decisions made in isolation risk blind spots, cognitive fatigue, and organizational drag.',
      idealFor: 'Active CEOs, Managing Directors, Founders navigating scale or restructuring',
      solution:
        'Dedicated, ongoing private counsel and strategic sounding board. We provide high-stakes decision support, board preparation, governance advisory, and objective perspective on executive team dynamics.',
      outcomes: [
        'Real-time sounding board for critical enterprise decisions',
        'Enhanced strategic clarity and cognitive bandwidth',
        'Objective evaluation of executive team performance',
        'Proactive identification of organizational friction points',
        'Board and shareholder alignment support',
      ],
    },
    {
      id: '03',
      category: 'Team Performance',
      duration: '3–4 Months',
      title: 'Executive Team Alignment Program',
      painPoint:
        'Executive teams frequently operate as disconnected functional leaders rather than a unified strategic unit, creating friction, conflicting priorities, and diluted execution.',
      idealFor: 'Executive leadership teams, C-suites experiencing friction, post-merger integration teams',
      solution:
        'A structured intervention to eliminate executive silos, align strategic priorities, clarify role mandates, and build unshakeable collective accountability across the C-suite.',
      outcomes: [
        'Unified strategic priorities and operating cadence',
        'Clear role mandates and decision authorities',
        'Elimination of covert politics and cross-functional friction',
        'Accelerated decision velocity across the organization',
        'High-trust executive team culture',
      ],
    },
    {
      id: '04',
      category: 'Organizational Resilience',
      duration: '3–5 Months',
      title: 'Succession Planning Architecture',
      painPoint:
        'Succession is often treated as an emergency event rather than an ongoing strategic capability, creating existential enterprise risk during leadership transitions.',
      idealFor: 'Family-owned businesses, enterprise CEOs planning retirement, high-growth companies',
      solution:
        'Designing institutionalized succession pathways, leadership readiness benchmarks, and talent transition protocols that ensure seamless continuity across key executive roles.',
      outcomes: [
        'Comprehensive succession readiness matrix for all critical roles',
        'Objective next-generation capability assessments',
        'Transparent leadership transition roadmaps',
        'Preservation of institutional knowledge and client relationships',
        'Reduced transition risk and shareholder uncertainty',
      ],
    },
    {
      id: '05',
      category: 'Organizational Systems',
      duration: '6–12 Months',
      title: 'Culture Transformation System',
      painPoint:
        'Culture change initiatives frequently fail because they focus on slogans and aspirational values rather than the underlying systems, incentives, and behaviors that drive performance.',
      idealFor: 'Organizations undergoing digital transformation, rapid scaling, or strategic repositioning',
      solution:
        'Designing the structural incentives, accountability loops, operating rituals, and cultural artifacts that institutionalize high-performance behaviors across the enterprise.',
      outcomes: [
        'Measurable alignment between corporate values and daily behaviors',
        'Performance-aligned incentive and recognition structures',
        'Institutionalized operating cadences and rituals',
        'Heightened employee engagement and executive retention',
        'Resilient culture capable of sustaining strategic change',
      ],
    },
    {
      id: '06',
      category: 'Strategic Advisory',
      duration: '4–6 Months',
      title: 'Strategic Planning & Execution Architecture',
      painPoint:
        'Great strategies fail at execution because organizations lack the cascading mechanisms, accountability frameworks, and operational rhythms to translate vision into daily action.',
      idealFor: 'Organizations launching multi-year plans, national vision mandates, enterprise turnarounds',
      solution:
        'Bridging the strategy-to-execution gap by building cascaded milestone architectures, resource allocation models, and real-time execution dashboards with rigorous accountability.',
      outcomes: [
        'Clear cascade of enterprise goals to individual business units',
        'Robust quarterly execution tracking and review cadences',
        'Early warning mechanisms for strategic drift',
        'Optimized resource and capital allocation',
        'High-velocity execution across all organizational tiers',
      ],
    },
    {
      id: '07',
      category: 'Governance',
      duration: '2–4 Months',
      title: 'Board Governance Design',
      painPoint:
        'Boards often default to rubber-stamping or operational micromanagement, failing to provide the strategic challenge, oversight, and wisdom the executive team truly needs.',
      idealFor: 'Family business councils, enterprise boards, advisory committees, pre-IPO companies',
      solution:
        'Structuring advisory boards, family councils, and governance frameworks that enhance strategic oversight, fiduciary clarity, and decision-making without adding bureaucratic red tape.',
      outcomes: [
        'Customized board charter, committee topology, and mandate definitions',
        'Independent director capability profile and recruitment matrix',
        'Structured board agenda and executive reporting packages',
        'Enhanced constructive tension between board and C-suite',
        'Clear boundaries between governance and operational management',
      ],
    },
    {
      id: '08',
      category: 'Executive Coaching',
      duration: '3–4 Months',
      title: 'Leadership Presence & Executive Communication',
      painPoint:
        'Senior executives with exceptional technical or operational skills often struggle with gravitas, narrative command, and high-stakes stakeholder influence.',
      idealFor: 'New CEOs, C-suite executives preparing for public/sovereign visibility, founders',
      solution:
        'Targeted executive coaching to cultivate commanding presence, sovereign stakeholder diplomacy, crisis communication poise, and persuasive narrative storytelling.',
      outcomes: [
        'Elevated executive gravitas and persuasive presence',
        'Mastery of high-stakes boardroom, sovereign, and media communication',
        'Crisis communication readiness and composure',
        'Enhanced ability to inspire, align, and mobilize large organizations',
        'Clear, authentic personal leadership narrative',
      ],
    },
    {
      id: '09',
      category: 'Organizational Architecture',
      duration: '6–9 Months',
      title: 'Organizational Systems Design',
      painPoint:
        'Outdated reporting lines, excessive management layers, and ambiguous delegation thresholds create organizational inertia, slow decisions, and stifle agility.',
      idealFor: 'Scaling enterprises, post-reorganization organizations, complex multi-entity groups',
      solution:
        'Re-engineering organizational structures, spans of control, delegation authority matrices, and cross-functional operating models for optimal velocity and clarity.',
      outcomes: [
        'Streamlined organizational topology with reduced management layers',
        'Optimized spans of control across all business units',
        'Clear decision rights and delegation thresholds (RACI & DAL)',
        'Enhanced cross-functional collaboration and accountability',
        'Measurable increase in decision-making and operational speed',
      ],
    },
    {
      id: '10',
      category: 'Strategic Renewal',
      duration: '2–3 Days',
      title: 'Annual Leadership Retreat',
      painPoint:
        'Annual retreats frequently devolve into social gatherings or slide-heavy status presentations that fail to resolve underlying tensions or produce strategic breakthroughs.',
      idealFor: 'Board of Directors, Executive Committees, Senior Leadership Cadres',
      solution:
        'Curating and facilitating confidential, high-intensity executive retreats designed to reset strategic focus, address unspoken friction, and align on bold multi-year milestones.',
      outcomes: [
        'Deep executive alignment on strategic imperatives',
        'Resolution of unspoken relational and operational tensions',
        'Signed Executive Commitment Charter for the upcoming year',
        'Re-energized leadership cohesion and shared purpose',
        'Actionable 12-month strategic execution roadmap',
      ],
    },
  ];

  const faqs = [
    {
      question: 'What executive advisory services does Avaron Advisory offer?',
      answer:
        'Avaron Advisory offers ten precision-engineered leadership interventions spanning Executive Diagnostic Assessments, CEO Advisory Retainers, Executive Team Alignment, Succession Planning Architecture, Culture Transformation Systems, Strategic Planning & Execution, Board Governance Design, Executive Communication & Presence, Organizational Systems Design, and Annual Leadership Retreats.',
    },
    {
      question: 'How long does a typical Avaron Advisory engagement last?',
      answer:
        'Engagement durations range from targeted 2–3 day high-intensity retreats and 4–6 week diagnostic audits to multi-month transformation programs (3–12 months) and ongoing annual CEO advisory retainers, fully tailored to your enterprise milestones.',
    },
    {
      question: 'Does Avaron Advisory offer executive coaching for individual leaders?',
      answer:
        'Yes, we provide targeted executive coaching under our Leadership Presence & Executive Communication and CEO Advisory Retainer offerings, focusing on cognitive poise under sovereign pressure, narrative command, and high-stakes stakeholder influence.',
    },
    {
      question: 'Does Avaron Advisory work with boards of directors?',
      answer:
        'Yes, we work extensively with Boards of Directors, Family Councils, and Advisory Committees on board governance design, fiduciary oversight architecture, CEO succession readiness, and annual strategic retreats.',
    },
  ];

  return (
    <div className="bg-[#06070A] text-[#F8F6F0] pt-16 md:pt-20 min-h-screen">
      {/* 1. PANORAMIC HERO (FULL BREADTH IMAGE WITH CENTERED TEXT BELOW) */}
      <section className="relative w-full flex flex-col items-center justify-start pb-16 md:pb-24 overflow-hidden bg-[#06070A]">
        
        {/* Panoramic Image Banner with Left & Right Spacing (No Border) */}
        <div className="w-full max-w-[90rem] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 pt-2 sm:pt-4">
          <div className="relative w-full h-[360px] sm:h-[440px] md:h-[500px] lg:h-[550px] xl:h-[580px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
            <img
              src="/images/ServicesHero.png"
              alt="Ten Precision-Engineered Leadership Interventions"
              className="w-full h-full object-cover object-center brightness-110 contrast-105 saturate-105"
            />
            {/* Deep smooth bottom vignette to keep floor reflection subtle and dark behind text */}
            <div className="absolute bottom-0 left-0 right-0 h-40 sm:h-52 md:h-64 bg-gradient-to-t from-[#06070A] via-[#06070A]/80 via-45% to-transparent pointer-events-none" />
          </div>
        </div>

        {/* TEXT CONTENT BELOW THE IMAGE (WITH DARK VIGNETTE BACKDROP) */}
        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 md:px-12 w-full -mt-4 sm:-mt-6 md:-mt-8 flex flex-col items-center text-center space-y-3 sm:space-y-4">

          {/* Centered & Bold Heading - Single Line with Dark Backing */}
          <div className="relative inline-block">
            <div className="absolute -inset-x-12 -inset-y-4 bg-[#06070A]/80 blur-xl pointer-events-none -z-10" />
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[54px] font-serif font-semibold text-white leading-tight tracking-tight drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)] max-w-6xl mx-auto">
              Ten Precision-Engineered <span className="text-[#DFC38A] italic font-bold">Leadership Interventions</span>
            </h1>
          </div>

          {/* Centered Description */}
          <p className="text-base sm:text-lg md:text-xl font-serif text-stone-300 leading-relaxed font-light max-w-3xl mx-auto px-4">
            Every service we offer is designed to address a specific structural leadership challenge. Each engagement is bespoke—tailored to your organization's unique context, sector, and strategic ambitions.
          </p>

        </div>
      </section>

      {/* 2. TEN PRECISION SERVICES (COMPACT LUXURY CARDS) */}
      <section className="py-12 md:py-16 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="space-y-3">
          {services.map((item, idx) => {
            const isOpen = openServiceIdx === idx;
            return (
              <div 
                key={item.id} 
                className={`rounded-xl transition-all duration-300 overflow-hidden relative border ${
                  isOpen 
                    ? 'bg-gradient-to-b from-[#121829] via-[#0D1220] to-[#080B13] border-[#DFC38A] shadow-[0_12px_35px_rgba(223,195,138,0.12)]' 
                    : 'bg-gradient-to-r from-[#0D1220] via-[#0A0D18] to-[#070910] border-white/[0.08] hover:border-[#DFC38A]/45 shadow-[0_6px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_10px_30px_rgba(223,195,138,0.08)]'
                }`}
              >
                {/* Top Subtle Ambient Accent */}
                <div className={`absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent ${
                  isOpen ? 'via-[#DFC38A]' : 'via-white/10 group-hover:via-[#DFC38A]/40'
                } to-transparent`} />

                {/* Card Clickable Header */}
                <div
                  onClick={() => setOpenServiceIdx(isOpen ? null : idx)}
                  className="p-3.5 sm:p-4 flex flex-col lg:flex-row lg:items-center justify-between gap-3 cursor-pointer group select-none relative z-10"
                >
                  <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                    {/* Number Box */}
                    <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center font-mono text-xs font-bold shrink-0 transition-all ${
                      isOpen 
                        ? 'bg-[#DFC38A] text-black shadow-[0_0_15px_rgba(223,195,138,0.4)]' 
                        : 'bg-[#DFC38A]/10 border border-[#DFC38A]/30 text-[#DFC38A] group-hover:border-[#DFC38A] group-hover:bg-[#DFC38A]/20'
                    }`}>
                      {item.id}
                    </div>

                    <div>
                      <h3 className={`text-base sm:text-lg md:text-xl font-serif transition-colors ${
                        isOpen ? 'text-[#DFC38A]' : 'text-white group-hover:text-[#DFC38A]'
                      }`}>
                        {item.title}
                      </h3>
                      
                      <div className="flex flex-wrap items-center gap-2 mt-0.5">
                        <span className="text-[10px] font-mono text-stone-300 uppercase tracking-widest bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.08]">
                          {item.category}
                        </span>
                        <span className="text-[10px] font-mono text-[#DFC38A]/90 uppercase tracking-widest bg-[#DFC38A]/[0.06] px-2 py-0.5 rounded border border-[#DFC38A]/20">
                          {item.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Toggle Arrow */}
                  <div className="flex items-center gap-3 self-end lg:self-center">
                    <span className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center transition-all ${
                      isOpen 
                        ? 'bg-[#DFC38A] text-black rotate-180' 
                        : 'bg-white/[0.04] border border-white/10 text-stone-400 group-hover:border-[#DFC38A] group-hover:text-[#DFC38A]'
                    }`}>
                      <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300" />
                    </span>
                  </div>
                </div>

                {/* Expanded Details Panel */}
                {isOpen && (
                  <div className="px-3.5 pb-4 sm:px-5 sm:pb-5 pt-0.5 border-t border-white/[0.06] grid grid-cols-1 lg:grid-cols-12 gap-4 relative z-10">
                    {/* Left Details */}
                    <div className="lg:col-span-7 space-y-3">
                      {/* The Pain Point */}
                      <div className="p-3 rounded-lg bg-black/50 border border-white/[0.06] space-y-1">
                        <div className="font-mono text-[10px] uppercase tracking-widest text-[#DFC38A] font-semibold flex items-center gap-1.5">
                          <span className="w-2 h-[1.5px] bg-[#DFC38A]" />
                          <span>The Challenge</span>
                        </div>
                        <p className="text-xs font-light text-stone-300 leading-relaxed">
                          {item.painPoint}
                        </p>
                      </div>

                      {/* Ideal For */}
                      <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05] space-y-0.5">
                        <div className="font-mono text-[9.5px] uppercase tracking-widest text-stone-400 font-semibold">
                          Ideal For
                        </div>
                        <p className="text-xs text-stone-200 font-light">
                          {item.idealFor}
                        </p>
                      </div>

                      {/* Our Solution */}
                      <div className="space-y-1">
                        <div className="font-mono text-[10px] uppercase tracking-widest text-[#DFC38A] font-semibold">
                          Our Architectural Solution
                        </div>
                        <p className="text-xs font-light text-stone-300 leading-relaxed">
                          {item.solution}
                        </p>
                      </div>

                      <div className="pt-0.5">
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#DFC38A] text-black font-mono text-[10.5px] uppercase font-bold tracking-wider hover:bg-[#F0E5CC] transition-all shadow-[0_0_12px_rgba(223,195,138,0.25)] hover:scale-[1.01]"
                        >
                          <span>Inquire About This Service</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>

                    {/* Right Outcomes Box */}
                    <div className="lg:col-span-5 p-3.5 sm:p-4 rounded-xl bg-gradient-to-b from-[#141A2D] to-[#0A0D15] border border-[#DFC38A]/30 space-y-2.5 shadow-lg flex flex-col justify-between">
                      <div className="font-mono text-[10.5px] text-[#DFC38A] uppercase tracking-wider font-bold flex items-center gap-1.5 pb-1 border-b border-white/[0.06]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#DFC38A]" />
                        <span>Key Deliverables & Outcomes</span>
                      </div>
                      
                      <div className="space-y-1.5 pt-0.5">
                        {item.outcomes.map((out, oIdx) => (
                          <div key={oIdx} className="flex items-start gap-1.5 text-xs text-stone-200">
                            <Check className="w-3.5 h-3.5 text-[#DFC38A] shrink-0 mt-0.5" />
                            <span className="font-light leading-snug">{out}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. A NOTE ON INVESTMENT */}
      <section className="py-20 md:py-24 bg-[#08090D] border-t border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          {/* Animated Moving Border Card Container */}
          <div className="relative max-w-4xl mx-auto p-[1.5px] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
            
            {/* Spinning Moving Color Gradient Border */}
            <div className="absolute inset-[-150%] animate-border-spin-slow bg-[conic-gradient(from_0deg_at_50%_50%,#DFC38A_0deg,#F59E0B_60deg,#F0E5CC_120deg,#BFA162_180deg,#F59E0B_240deg,#DFC38A_360deg)] opacity-95" />
            
            {/* Ambient Backlight Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#DFC38A]/15 via-[#F59E0B]/15 to-[#DFC38A]/15 blur-2xl pointer-events-none" />

            {/* Inner Content Card */}
            <div className="relative rounded-[15px] bg-gradient-to-b from-[#11141E] via-[#0B0D15] to-[#07080D] p-8 sm:p-12 space-y-8 z-10">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-3.5 font-mono text-xs tracking-[0.3em] uppercase text-amber-400 font-semibold">
                  <span className="w-8 h-[1.5px] bg-gradient-to-r from-transparent to-amber-400" />
                  <span>Investment</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif text-white">
                  A Note on Investment
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base font-light text-stone-300 leading-relaxed">
                <p>
                  We do not publish pricing because every engagement is bespoke. The investment required for any given engagement depends on the scope, complexity, and duration of the work—and we will not quote a price before we understand your specific situation.
                </p>
                <p className="font-serif italic text-amber-200/90 text-base sm:text-lg">
                  "What we can tell you is that our clients consistently report that the return on their leadership investment with Avaron Advisory exceeds any other investment they have made in their organization. We are not the cheapest option. We are the most effective one."
                </p>
              </div>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-amber-400 text-black font-mono text-xs uppercase tracking-widest font-bold rounded hover:bg-amber-300 transition-all shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:scale-[1.02]"
                >
                  <span>Discuss Your Requirements</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMMON QUESTIONS (FAQ ACCORDION) */}
      <section className="py-24 max-w-4xl mx-auto px-6 md:px-12 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-mono tracking-[0.28em] text-amber-400 uppercase font-semibold">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-white">
            Common Questions
          </h2>
        </div>

        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {faqs.map((faq, fIdx) => {
            const isFaqOpen = openFaqIdx === fIdx;
            return (
              <div key={fIdx} className="py-6 transition-colors">
                <button
                  onClick={() => setOpenFaqIdx(isFaqOpen ? null : fIdx)}
                  className="w-full flex items-center justify-between text-left group gap-4"
                >
                  <span className="text-base sm:text-lg font-serif text-white group-hover:text-amber-300 transition-colors">
                    {faq.question}
                  </span>
                  <span className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-amber-400 group-hover:border-amber-400 transition-colors shrink-0">
                    <span className="text-lg font-mono leading-none">
                      {isFaqOpen ? '−' : '+'}
                    </span>
                  </span>
                </button>

                {isFaqOpen && (
                  <div className="mt-4 pt-4 text-xs sm:text-sm font-light text-stone-300 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. FOOTER CTA */}
      <section className="py-20 bg-gradient-to-b from-[#08090D] to-[#040507] text-center border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-stone-400 font-serif italic text-lg sm:text-xl max-w-2xl mx-auto mb-6">
            "A boutique organizational architecture firm. We diagnose and redesign the human systems that determine whether leadership performs or fails — one organization at a time."
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber-400 text-black font-mono text-xs uppercase tracking-widest font-bold rounded hover:bg-amber-300 transition-all shadow-[0_0_25px_rgba(212,175,55,0.3)]"
            >
              <span>Begin Conversation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
