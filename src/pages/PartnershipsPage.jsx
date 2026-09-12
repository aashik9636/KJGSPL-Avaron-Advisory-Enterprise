import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, GraduationCap, Building2, Cpu, ArrowRight, CheckCircle2, 
  ShieldCheck, Award, Sparkles, Check, Users, Target, Clock
} from 'lucide-react';
import { HowWeCollaborateParallax } from '../components/HowWeCollaborateParallax';

export const PartnershipsPage = () => {
  const philosophyPillars = [
    {
      title: 'Complementary Expertise',
      desc: 'We seek partners whose capabilities complement rather than duplicate our own. We are not interested in partnerships that create internal competition.',
      icon: Award,
    },
    {
      title: 'Shared Standards',
      desc: 'Our partners must share our commitment to quality, confidentiality, and client outcomes. We will not partner with organizations whose standards do not match our own.',
      icon: ShieldCheck,
    },
    {
      title: 'GCC Relevance',
      desc: 'We prioritize partnerships that strengthen our ability to serve organizations across the GCC — family businesses, government entities, and high-growth companies. Regional relevance is a key criterion.',
      icon: Globe,
    },
    {
      title: 'Long-Term Orientation',
      desc: 'We build partnerships for the long term. We are not interested in transactional referral arrangements—we seek genuine strategic alliances.',
      icon: Clock,
    },
  ];

  const partnershipTypes = [
    {
      id: '01',
      title: 'Global Advisory Networks',
      icon: Globe,
      image: '/images/partners/partner_global_advisory.jpg',
      overview:
        'We partner with select global advisory and consulting firms who seek a specialized GCC leadership capability. Our deep regional knowledge and sector-specific expertise complements the scale and reach of larger advisory networks.',
      offers: [
        'Specialized GCC executive leadership expertise',
        'Access to senior leadership across family business, government, and high-growth sectors',
        'Co-delivery of leadership programs at scale',
        'Regional market intelligence and relationships',
      ],
    },
    {
      id: '02',
      title: 'Executive Education Institutions',
      icon: GraduationCap,
      image: '/images/partners/partner_exec_education.jpg',
      overview:
        'We collaborate with leading business schools and executive education institutions to deliver specialized leadership programs for GCC executives. Our practitioner expertise complements academic rigor.',
      offers: [
        'Practitioner-led executive programs',
        'GCC-specific leadership curriculum development',
        'Executive coaching for program participants',
        'Access to senior executive networks',
      ],
    },
    {
      id: '03',
      title: 'Sector-Specific Organizations',
      icon: Building2,
      image: '/images/partners/partner_sector_organizations.jpg',
      overview:
        'We partner with industry associations, government bodies, and sector-specific organizations to deliver leadership development at a sector level—creating systemic leadership improvement across entire industries.',
      offers: [
        'Sector-wide leadership assessment frameworks',
        'Industry leadership benchmarking',
        'Customized programs for sector-specific challenges',
        'Thought leadership and research collaboration',
      ],
    },
    {
      id: '04',
      title: 'Technology & HR Platforms',
      icon: Cpu,
      image: '/images/partners/partner_tech_platforms.jpg',
      overview:
        'We work with select HR technology and talent management platforms to integrate our leadership architecture methodology into digital tools that scale our impact beyond individual engagements.',
      offers: [
        'Leadership assessment methodology licensing',
        'Content development for digital platforms',
        'Advisory support for product development',
        'Co-marketing to senior executive audiences',
      ],
    },
  ];

  return (
    <div className="bg-[#06070A] text-[#F8F6F0] pt-16 md:pt-20 min-h-screen">
      
      {/* 1. PANORAMIC HERO (FULL BREADTH IMAGE WITH CENTERED TEXT BELOW) */}
      <section className="relative w-full flex flex-col items-center justify-start pb-16 md:pb-24 overflow-hidden bg-[#06070A]">
        
        {/* Panoramic Image Banner with Left & Right Spacing (No Border) */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 pt-2 sm:pt-4">
          <div className="relative w-full h-[340px] sm:h-[420px] md:h-[480px] lg:h-[520px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
            <img
              src="/images/partnership.png"
              alt="Building Alliances That Amplify Impact"
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
              Building Alliances That <span className="text-[#DFC38A] italic font-bold">Amplify Impact</span>
            </h1>
          </div>

          {/* Centered Description */}
          <p className="text-base sm:text-lg md:text-xl font-serif text-stone-300 leading-relaxed font-light max-w-3xl mx-auto px-4">
            We partner with a select group of organizations that share our commitment to transformational leadership development. Our partnerships are strategic alliances—not referral arrangements.
          </p>

        </div>
      </section>

      {/* 2. OUR PHILOSOPHY */}
      <section className="py-14 md:py-20 max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center justify-center gap-3.5 font-mono text-xs tracking-[0.28em] uppercase text-[#DFC38A] font-semibold">
            <span className="w-8 h-[1.5px] bg-gradient-to-r from-transparent to-[#DFC38A]" />
            <span>Our Philosophy</span>
            <span className="w-8 h-[1.5px] bg-gradient-to-l from-transparent to-[#DFC38A]" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] font-serif font-light text-white leading-snug max-w-5xl mx-auto">
            We Are Selective About Our Partners for the Same Reason We Are Selective About Our Clients
          </h2>

          <div className="space-y-3 text-stone-300 text-xs sm:text-sm md:text-[15px] font-light leading-relaxed max-w-5xl mx-auto">
            <p>
              A partnership with Avaron Advisory is an extension of our brand and our commitment to our clients. We will not enter into a partnership that we would not be comfortable disclosing to our clients.
            </p>
            <p className="font-serif italic text-[#DFC38A]/90 text-sm sm:text-base">
              "We currently have capacity for a small number of new strategic partnerships. If you believe your organization could be a genuine strategic partner for Avaron Advisory, we invite you to begin a conversation."
            </p>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {philosophyPillars.map((p, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-gradient-to-b from-[#11141E] to-[#0A0C12] border border-white/[0.08] hover:border-amber-400/30 transition-all duration-300 space-y-4"
            >
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                <span className="text-sm font-mono text-amber-400 uppercase tracking-widest font-semibold">{p.title}</span>
                <div className="w-8 h-8 rounded-lg bg-stone-900 border border-white/10 flex items-center justify-center text-amber-400">
                  {React.createElement(p.icon, { className: 'w-4 h-4' })}
                </div>
              </div>
              <p className="text-xs sm:text-sm font-light text-stone-300 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. HOW WE COLLABORATE - PINNED PARALLAX ALTERNATING STAGE */}
      <HowWeCollaborateParallax />

      {/* 4. OUR NETWORK */}
      <section className="py-20 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Animated Moving Border Card Container */}
        <div className="relative max-w-4xl mx-auto p-[1.5px] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
          {/* Spinning Moving Color Gradient Border */}
          <div className="absolute inset-[-150%] animate-border-spin-slow bg-[conic-gradient(from_0deg_at_50%_50%,#DFC38A_0deg,#F59E0B_60deg,#F0E5CC_120deg,#BFA162_180deg,#F59E0B_240deg,#DFC38A_360deg)] opacity-95" />
          
          {/* Ambient Backlight Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#DFC38A]/15 via-[#F59E0B]/15 to-[#DFC38A]/15 blur-2xl pointer-events-none" />

          {/* Inner Content Card */}
          <div className="relative rounded-[15px] bg-gradient-to-b from-[#11141E] via-[#0B0D15] to-[#07080D] p-8 sm:p-14 space-y-6 text-center z-10">
            <div className="inline-flex items-center justify-center gap-3.5 font-mono text-xs tracking-[0.28em] uppercase text-[#DFC38A] font-semibold">
              <span>Our Network</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif text-white">
              Strategic Alliance Network
            </h2>

            <p className="text-stone-300 font-light text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Our partnership network spans executive education, global advisory, and sector-specific organizations across the GCC and internationally. Partner details are shared during the partnership discussion process.
            </p>
          </div>
        </div>
      </section>

      {/* 5. CLOSING CTA */}
      <section className="py-24 bg-gradient-to-b from-[#08090D] to-[#040507] text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-serif font-light text-white">
            Interested in a Strategic Partnership?
          </h2>

          <p className="text-stone-300 font-serif italic text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            We welcome conversations with organizations that believe there is a genuine strategic alignment between their capabilities and ours. Please reach out to begin a confidential discussion.
          </p>

          <div className="pt-4 flex justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber-400 text-black font-mono text-xs uppercase tracking-widest font-bold rounded hover:bg-amber-300 transition-all shadow-[0_0_25px_rgba(212,175,55,0.3)]"
            >
              <span>Explore Partnership</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
