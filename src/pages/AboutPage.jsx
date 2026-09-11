import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, Clock, Users, Globe, GraduationCap, Building2, Cpu, 
  ArrowRight, ShieldCheck, CheckCircle2, Sparkles, Check, 
  Lock, Shield, Landmark, HeartHandshake, Briefcase, Zap, Pill, Hotel
} from 'lucide-react';

export const AboutPage = () => {
  const stats = [
    {
      value: '20+ Years',
      label: 'Experience',
      subtext: 'Executive coaching, advisory, and leadership development',
    },
    {
      value: '3,000+',
      label: 'Coaching Hours',
      subtext: 'Delivered to senior executives across the GCC and internationally',
    },
    {
      value: 'Multi-Sector',
      label: 'Sectors',
      subtext: 'Family Business, Government, Technology, Hospitality, Healthcare & more',
    },
    {
      value: 'C-Suite',
      label: 'Engagement Level',
      subtext: 'CEOs, Ministers, Board Members, and Senior Government Officials',
    },
  ];

  const expertiseAreas = [
    'The Performance Environment Model (PEM)',
    'Stage-Calibrated Leadership Intervention',
    'Executive Leadership Architecture',
    'High-Stakes Decision-Making Frameworks',
    'C-Suite Team Performance',
    'Organizational Systems Design',
    'Executive Presence & Communication',
    'Board Governance',
    'Succession Planning',
    'Strategic Planning & Execution',
    'Culture Transformation',
    'Public Speaking & Presentation',
    'Leadership in Complex Environments',
    'GCC Business & Cultural Dynamics',
  ];

  const trackRecord = [
    {
      sector: 'Global Technology',
      client: 'SAP',
      icon: Cpu,
      desc: 'Delivered executive development and leadership coaching programs for senior leadership teams at global technology organizations, focusing on decision-making architecture and organizational performance.',
    },
    {
      sector: 'Government & Space Technology',
      client: 'GCC Government Authority',
      icon: Globe,
      desc: "Engaged by a GCC country's space and technology authority to develop the speaking capabilities, leadership competencies, and decision-making frameworks of their top leadership. Currently re-engaged to extend the program to N-1 and N-2 leadership levels.",
    },
    {
      sector: 'Pharmaceutical & Healthcare',
      client: 'Large Pharmaceutical Organization',
      icon: Pill,
      desc: 'Developed the senior leadership of a major pharmaceutical organization, focusing on executive presence, strategic communication, and organizational leadership capability.',
    },
    {
      sector: 'Luxury Hospitality',
      client: 'Accor Hotels — Luxury Division',
      icon: Hotel,
      desc: "Partnered with Accor's luxury division to develop their leadership team's decision-making capability and organizational performance, with a focus on the unique leadership demands of luxury hospitality.",
    },
    {
      sector: 'Real Estate & Development',
      client: 'Major Saudi Development Firms',
      icon: Building2,
      desc: 'Provided CEO shadowing and executive advisory to the leaders of large development organizations in Saudi Arabia, including individuals with significant personal and organizational wealth.',
    },
    {
      sector: 'Government & Public Sector',
      client: 'Ministers & Senior Officials',
      icon: Landmark,
      desc: 'Worked with ministers and senior government officials across the GCC on leadership development, executive presence, and the specific communication demands of public sector leadership at the highest levels.',
    },
  ];

  return (
    <div className="bg-[#06070A] text-[#F8F6F0] pt-16 md:pt-20 min-h-screen">
      
      {/* 1. HERO HEADER WITH PORTRAIT */}
      <section className="relative pt-4 pb-14 md:pt-6 md:pb-20 bg-gradient-to-b from-[#0E111B] via-[#090B12] to-[#06070A] overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-white/[0.015] rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column - Intro & Accolades (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-3.5 font-mono text-xs tracking-[0.3em] text-stone-300 uppercase font-semibold">
                <span className="w-10 sm:w-14 h-[1.5px] bg-gradient-to-r from-transparent via-stone-400 to-white" />
                <span>About the Founder</span>
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-light text-white leading-[1.08] tracking-tight">
                John Kairouz
              </h1>

              <div className="inline-block">
                <p className="text-xs sm:text-sm font-mono tracking-widest text-stone-300 uppercase font-semibold pb-1 border-b border-white/20">
                  Founder & Principal Advisor, Avaron Advisory
                </p>
                <p className="text-[11px] font-mono text-stone-400 tracking-wider uppercase mt-1">
                  Creator of the Performance Environment Model (PEM)
                </p>
              </div>

              <p className="text-base sm:text-lg md:text-xl font-serif text-stone-300 leading-relaxed">
                John Kairouz is an executive advisor and organizational architect with over 20 years of applied work at the intersection of neuroscience, behavioral science, and leadership systems. He is the creator of the Performance Environment Model — a proprietary framework for diagnosing and redesigning the human architecture that determines whether organizations perform or fail.
              </p>

              <p className="text-stone-400 font-light text-sm sm:text-base leading-relaxed">
                He has worked with CEOs, ministers, government officials, and senior executives across the GCC's most demanding sectors—from global technology companies to sovereign government authorities, luxury hospitality groups, and major development organizations.
              </p>

              {/* Action Buttons & Locations */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white text-black font-mono text-xs uppercase tracking-widest font-bold rounded hover:bg-stone-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)]"
                >
                  <span>Request Confidential Briefing</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                
                <div className="px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.08] text-stone-400 font-mono text-[11px] flex items-center justify-center gap-2">
                  <Globe className="w-3.5 h-3.5 text-stone-300" />
                  <span>Abu Dhabi · Amsterdam · Los Angeles</span>
                </div>
              </div>
            </div>

            {/* Right Column - Hero Portrait Image (5 cols) */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-[320px] sm:max-w-[350px]">
                {/* Soft & Subtle Gray / Silver Glow on the Right Side */}
                <div className="absolute top-10 bottom-10 -right-4 w-20 bg-gradient-to-r from-transparent via-zinc-400/20 to-stone-300/30 rounded-r-full blur-xl pointer-events-none" />
                
                {/* Image Card with Subtle Right-Only Gray Drop Shadow */}
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0E111B] shadow-[20px_8px_35px_-10px_rgba(180,185,200,0.25),10px_0_20px_-5px_rgba(200,205,220,0.18)] transition-all duration-500 hover:shadow-[24px_10px_40px_-8px_rgba(180,185,200,0.35)]">
                  {/* Portrait */}
                  <img
                    src="/john-kairouz.jpg"
                    alt="John Kairouz"
                    className="w-full h-auto object-cover object-top transition-transform duration-700 hover:scale-[1.02] block"
                  />
                  
                  {/* Subtle inner reflection */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/5 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. KEY STATS BAR */}
      <section className="py-12 bg-[#08090E] border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/30 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="text-3xl sm:text-4xl font-serif text-white font-light mb-1 group-hover:scale-105 transition-transform duration-300">
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

      {/* 3. BIOGRAPHY SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Biography Text (8 Cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-3.5 font-mono text-xs tracking-[0.3em] uppercase text-stone-300 font-semibold">
              <span className="w-8 h-[1.5px] bg-gradient-to-r from-transparent to-stone-400" />
              <span>Biography & Philosophy</span>
            </div>

            <div className="space-y-5 text-sm sm:text-base font-light text-stone-300 leading-relaxed">
              <p>
                John Kairouz founded Avaron Advisory on a single conviction: that people are never the real problem in an organization — the architecture around them is. After more than 20 years of working inside the GCC's most demanding leadership environments, he developed the Performance Environment Model — a framework that simultaneously addresses the three forces that determine human performance in any organization: state management, loyalty architecture, and relational awareness.
              </p>
              <p>
                His career has taken him into the most demanding leadership environments in the region—working alongside CEOs of global technology companies, the senior leadership of sovereign government authorities, ministers and government officials, and the billionaire founders of major development organizations. In each context, he has applied the same fundamental discipline: understanding the structural conditions that enable or constrain leadership performance, and redesigning those conditions to unlock capability that already exists within the organization. This work culminated in the Performance Environment Model — addressing neurobiological state, loyalty architecture, and relational awareness as three interdependent forces within a single organizational system.
              </p>
              <p>
                John is a recognized expert in executive performance under pressure, having worked with senior officials, CEOs, and executive teams across the GCC on the specific conditions that cause even capable leaders to underperform in high-stakes moments. His work draws on neuroscience, behavioral psychology, organizational design, and more than 20 years of direct practitioner experience — not theory applied from a distance.
              </p>
              <p>
                He is the author of the forthcoming Performance Environment Model series and a speaker at executive forums across the region. His work has been recognized by organizations across the GCC as representing a fundamentally different standard of leadership advisory — one built on organizational architecture rather than conventional coaching or training.
              </p>
            </div>

            {/* Featured Quote Callout */}
            <div className="p-8 rounded-2xl bg-gradient-to-b from-[#11141E] to-[#0A0C12] border border-white/15 space-y-3 shadow-xl">
              <p className="font-serif italic text-base sm:text-lg md:text-xl text-stone-200 leading-relaxed">
                "I have spent over 20 years studying what separates leaders who perform under extreme pressure from those who don't. The answer is never talent. It is always architecture — the systems, structures, and human conditions that either enable performance or systematically destroy it."
              </p>
              <div className="font-mono text-xs text-stone-400 uppercase tracking-widest pt-2">
                — John Kairouz
              </div>
            </div>
          </div>

          {/* Quick PEM & Advisory Credentials Card (4 Cols) */}
          <div className="lg:col-span-4 p-8 rounded-2xl bg-gradient-to-b from-[#11141E] to-[#080A0F] border border-white/15 space-y-6 lg:sticky lg:top-28 shadow-2xl">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2.5 font-mono text-[10px] tracking-[0.25em] uppercase text-stone-300 font-semibold">
                <span className="w-5 h-[1.5px] bg-stone-400" />
                <span>Core Advisory Focus</span>
              </div>
              <h3 className="text-2xl font-serif text-white font-medium">Architecture Over Symptoms</h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                Transforming organizational capacity through proprietary neurobiological and structural frameworks.
              </p>
            </div>

            <div className="space-y-3 pt-2 text-xs font-mono text-stone-400 border-t border-white/[0.08]">
              <div className="flex justify-between py-1 border-b border-white/[0.04]">
                <span>Proprietary Model:</span>
                <span className="text-white font-medium">PEM Framework</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/[0.04]">
                <span>Engagement Depth:</span>
                <span className="text-white">C-Suite & Sovereign</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/[0.04]">
                <span>Key Geographies:</span>
                <span className="text-white">GCC, Europe, US</span>
              </div>
              <div className="flex justify-between py-1">
                <span>Direct Hours:</span>
                <span className="text-white">3,000+ Delivered</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-white text-black font-mono text-xs uppercase tracking-widest font-bold rounded hover:bg-stone-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              >
                <span>Initiate Engagement</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. AREAS OF EXPERTISE */}
      <section className="py-24 bg-[#08090D] border-t border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-3.5 font-mono text-xs tracking-[0.3em] uppercase text-stone-300 font-semibold">
              <span className="w-8 h-[1.5px] bg-gradient-to-r from-transparent to-stone-400" />
              <span>Areas of Expertise</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white leading-tight">
              Specialized Architectural Capabilities
            </h2>
            <p className="text-stone-400 font-light text-sm sm:text-base leading-relaxed">
              Applied advisory domains honed across 20+ years of high-stakes executive engagements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {expertiseAreas.map((area, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-black/40 border border-white/[0.08] hover:border-white/40 transition-all duration-300 flex items-center gap-3.5 group"
              >
                <div className="w-8 h-8 rounded-lg bg-stone-900 border border-white/10 flex items-center justify-center text-stone-300 group-hover:border-white/50 transition-colors shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-sm font-sans font-light text-stone-200 group-hover:text-white transition-colors">
                  {area}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TRACK RECORD */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-3.5 font-mono text-xs tracking-[0.3em] uppercase text-stone-300 font-semibold">
            <span className="w-8 h-[1.5px] bg-gradient-to-r from-transparent to-stone-400" />
            <span>Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white leading-tight">
            Trusted by Leaders Who Cannot Afford to Fail
          </h2>
          <p className="text-stone-400 font-light text-sm sm:text-base leading-relaxed">
            Our client relationships are confidential by design. The following represents the categories of organizations and leaders John has worked with throughout his career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trackRecord.map((tr, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-gradient-to-b from-[#11141E] to-[#0A0C12] border border-white/[0.08] hover:border-white/40 transition-all duration-300 space-y-4 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                  <span className="text-[11px] font-mono text-stone-300 uppercase tracking-wider font-semibold">
                    {tr.sector}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-stone-900 border border-white/10 flex items-center justify-center text-stone-300">
                    {React.createElement(tr.icon, { className: 'w-4 h-4' })}
                  </div>
                </div>

                <h3 className="text-xl font-serif text-white group-hover:text-stone-200 transition-colors">
                  {tr.client}
                </h3>

                <p className="text-xs sm:text-sm font-light text-stone-300 leading-relaxed">
                  {tr.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Confidentiality Notice */}
        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] flex items-center gap-3 text-xs text-stone-400 font-mono max-w-2xl mx-auto">
          <Lock className="w-4 h-4 text-stone-300 shrink-0" />
          <span>All client relationships are held in strict confidence. Names and identifying details are not disclosed without explicit client consent.</span>
        </div>
      </section>

      {/* 6. VISION & CLOSING CTA */}
      <section className="py-24 bg-gradient-to-b from-[#08090D] to-[#040507] text-center border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <div className="inline-flex items-center justify-center gap-3.5 font-mono text-xs tracking-[0.3em] uppercase text-stone-300 font-semibold">
            <span className="w-8 sm:w-12 h-[1.5px] bg-gradient-to-r from-transparent to-stone-400" />
            <span>Vision</span>
            <span className="w-8 sm:w-12 h-[1.5px] bg-gradient-to-l from-transparent to-stone-400" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-light text-white">
            Building the Leadership Infrastructure for the GCC's Next Chapter
          </h2>

          <p className="text-stone-300 font-serif italic text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            The GCC is at an inflection point. The organizations that will define the region's next chapter are not the ones with the most capital or the best technology—they are the ones with the strongest leadership architecture.
          </p>

          <p className="text-stone-400 font-light text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Avaron Advisory exists to build that architecture. One organization at a time. With the rigor, depth, and commitment that the moment demands.
          </p>

          <div className="pt-4 flex justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-mono text-xs uppercase tracking-widest font-bold rounded hover:bg-stone-200 transition-all shadow-[0_0_25px_rgba(255,255,255,0.15)]"
            >
              <span>Begin The Conversation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
