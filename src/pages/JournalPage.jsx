import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Headphones, Video, BookOpen, Clock, ArrowRight, ArrowUpRight, 
  Sparkles, CheckCircle2, Play, Calendar, User, Tag, Mail, X, Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const JournalPage = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [activePodcast, setActivePodcast] = useState(null);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const podcastEpisodes = [
    {
      id: '01',
      episode: 'Episode 01',
      duration: '52 min',
      title: 'The Architecture of Decision-Making: How the Best CEOs Think Differently',
      description:
        'What separates leaders who make consistently great decisions from those who don’t? John explores the cognitive frameworks, organizational conditions, and personal disciplines that enable CEOs to make high-quality decisions at speed and scale.',
      tags: ['Decision-Making Architecture', 'Neuroscience of Leadership', 'CEO Performance'],
    },
    {
      id: '02',
      episode: 'Episode 02',
      duration: '48 min',
      title: 'The Architecture of Executive Teams: Why Most C-Suites Are Not Teams',
      description:
        'Most executive teams are groups of high-performing individuals who happen to share a reporting line. John breaks down the structural conditions that transform executive groups into genuine high-performance teams—and why this distinction is worth billions.',
      tags: ['Executive Team Dynamics', 'Organizational Architecture', 'C-Suite Performance'],
    },
    {
      id: '03',
      episode: 'Episode 03',
      duration: '61 min',
      title: 'Succession Planning in the GCC: The Family Business Leadership Crisis',
      description:
        'The GCC’s family business sector is facing a generational leadership transition of unprecedented scale. John examines the structural challenges of succession planning in family-owned enterprises and the leadership architecture required to navigate them.',
      tags: ['Family Business', 'Succession Planning', 'GCC Leadership'],
    },
    {
      id: '04',
      episode: 'Episode 04',
      duration: '44 min',
      title: 'The CEO’s Loneliness: Why the Most Powerful Person in the Room Is Often the Most Isolated',
      description:
        'The CEO position is structurally isolating. John explores the psychological and organizational dynamics that create CEO isolation, and the advisory relationships that the most effective CEOs use to maintain perspective and performance.',
      tags: ['CEO Psychology', 'Executive Advisory', 'Leadership Isolation'],
    },
  ];

  const webinars = [
    {
      type: 'Webinar Series',
      sessions: '4 Sessions',
      title: 'The Architecture of High-Performance Executive Teams',
      description:
        'A deep dive into the structural conditions that enable executive teams to operate at peak performance. John covers team design, decision rights, accountability systems, and the cultural conditions that sustain high performance. Includes live Q&A.',
      status: 'Available On Demand',
      isAvailable: true,
    },
    {
      type: 'Masterclass',
      sessions: 'Single Session',
      title: 'Leadership Architecture for GCC Organizations: A Framework',
      description:
        'A comprehensive framework for building leadership architecture in the GCC context, drawing on John’s experience working with family businesses, government entities, and high-growth organizations across the region.',
      status: 'Available On Demand',
      isAvailable: true,
    },
    {
      type: 'Executive Briefing',
      sessions: '2 Sessions',
      title: 'Board Governance in the Modern GCC Enterprise',
      description:
        'An examination of the governance structures that enable GCC organizations to perform at the highest level, with specific focus on family business governance and the transition to professional management.',
      status: 'Upcoming — Register Interest',
      isAvailable: false,
    },
  ];

  const articles = [
    {
      category: 'Strategy',
      readTime: '8 min read',
      title: 'Why the GCC’s Resilient Sectors Need a New Leadership Paradigm',
      description:
        'As geopolitical volatility reshapes the Gulf’s economic landscape, the organizations that will thrive are those that have invested in leadership architecture—not leadership training.',
      content: `In an era defined by rapid diversification and sovereign mega-initiatives, conventional leadership training is showing its systemic limitations. Traditional development programs focus on individual competencies, yet enterprise success in the Gulf hinges on the collective architecture of decision-making, mandate clarity, and cross-functional synchronicity.

When economic conditions shift rapidly, organizations don't fail due to lack of talent—they fail because their governance and leadership systems cannot process complexity at scale. Transforming national vision mandates into daily operational execution requires a deliberate organizational scaffolding engineered for resilience.`,
    },
    {
      category: 'Organizational Design',
      readTime: '6 min read',
      title: 'The Hidden Cost of Executive Team Misalignment',
      description:
        'Research consistently shows that executive team misalignment is the single largest source of organizational value destruction. Yet most organizations have no systematic approach to measuring or addressing it.',
      content: `When members of the C-suite operate with unspoken friction or conflicting departmental priorities, the resulting drag cascades through every organizational tier. Decisions stall, middle management receives contradictory signals, and strategic execution slows to a crawl.

Addressing misalignment requires moving beyond interpersonal chemistry exercises. It demands forensic mandate mapping, transparent decision rights, and rigorous operating cadences that align executive incentives directly with enterprise valuation.`,
    },
    {
      category: 'Leadership Under Pressure',
      readTime: '10 min read',
      title: 'Decision-Making Under Uncertainty: Lessons from High-Stakes Environments',
      description:
        'The leaders who perform best under extreme pressure share a set of specific mental frameworks and decision-making disciplines. These frameworks can be learned—but they must be practised before the pressure arrives.',
      content: `Under high-stakes market conditions or cross-border M&A transactions, executive stress degrades cognitive bandwidth. Leaders default to reactive patterns or analysis paralysis unless protected by institutionalized decision protocols.

Mastering decision-making under uncertainty involves establishing pre-mortem risk assessments, bounding reversible versus irreversible commitments, and maintaining emotional neutrality through calibrated executive state management.`,
    },
    {
      category: 'Succession',
      readTime: '7 min read',
      title: 'The Succession Planning Failure: Why Most Organizations Are One Departure Away from Crisis',
      description:
        'Most succession plans are lists of names on a spreadsheet. Genuine succession architecture is a living system that develops leaders continuously and ensures organizational resilience regardless of individual departures.',
      content: `In family conglomerates and major enterprises alike, succession is often postponed until forced by sudden crisis. A spreadsheet of prospective candidates does not constitute a succession architecture.

Resilient succession requires structured governance bodies, transparent capability milestones, and experiential leadership development pipelines that prepare next-generation leaders years before the actual transition occurs.`,
    },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
    }
  };

  return (
    <div className="bg-[#06070A] text-[#F8F6F0] pt-16 md:pt-20 min-h-screen">
      
      {/* 1. PANORAMIC HERO (FULL BREADTH IMAGE WITH CENTERED TEXT BELOW) */}
      <section className="relative w-full flex flex-col items-center justify-start pb-16 md:pb-24 overflow-hidden bg-[#06070A]">
        
        {/* Panoramic Image Banner with Left & Right Spacing (No Border) */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 pt-2 sm:pt-4">
          <div className="relative w-full h-[340px] sm:h-[420px] md:h-[480px] lg:h-[520px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
            <img
              src="/images/Thought.png"
              alt="Insights for the Executive Mind"
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
              Insights for the <span className="text-[#DFC38A] italic font-bold">Executive Mind</span>
            </h1>
          </div>

          {/* Centered Description */}
          <p className="text-base sm:text-lg md:text-xl font-serif text-stone-300 leading-relaxed font-light max-w-3xl mx-auto px-4">
            John Kairouz shares his perspectives on leadership architecture, organisational performance, and the systems that enable leaders to perform consistently — through podcasts, webinars, and long-form essays.
          </p>

        </div>
      </section>

      {/* 2. PODCAST SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center justify-center gap-3.5 font-mono text-xs tracking-[0.28em] uppercase text-[#DFC38A] font-semibold">
            <span className="w-8 h-[1.5px] bg-gradient-to-r from-transparent to-[#DFC38A]" />
            <span>Podcast Series</span>
            <span className="w-8 h-[1.5px] bg-gradient-to-l from-transparent to-[#DFC38A]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white">
            The Leadership Architecture Podcast
          </h2>
          <p className="text-stone-300 font-serif italic text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            "Deep strategic dialogues exploring how the world's most effective leaders build enduring systems."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {podcastEpisodes.map((ep) => {
            const isPlaying = activePodcast === ep.id;
            return (
              <div 
                key={ep.id}
                className="p-5 sm:p-6 rounded-xl bg-gradient-to-b from-[#11141E] to-[#0A0C12] border border-white/[0.08] hover:border-[#DFC38A]/45 hover:shadow-[0_10px_30px_rgba(223,195,138,0.08)] transition-all duration-300 flex flex-col justify-between space-y-3.5 group"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between font-mono text-[11px] text-stone-400 border-b border-white/[0.06] pb-2.5">
                    <span className="text-[#DFC38A] font-bold uppercase tracking-wider">{ep.episode}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3 h-3 text-stone-400" /> {ep.duration}</span>
                  </div>

                  <h3 className="text-base sm:text-lg md:text-xl font-serif text-white group-hover:text-[#DFC38A] transition-colors leading-snug">
                    {ep.title}
                  </h3>

                  <p className="text-xs font-light text-stone-300 leading-relaxed">
                    {ep.description}
                  </p>
                </div>

                <div className="space-y-3 pt-1">
                  <div className="flex flex-wrap gap-1.5">
                    {ep.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] text-[9.5px] font-mono text-stone-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-white/[0.06]">
                    <button
                      onClick={() => setActivePodcast(isPlaying ? null : ep.id)}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#DFC38A]/10 border border-[#DFC38A]/30 text-[#DFC38A] hover:bg-[#DFC38A] hover:text-black font-mono text-[11px] uppercase tracking-wider font-semibold transition-all cursor-pointer"
                    >
                      <Play className={`w-3 h-3 ${isPlaying ? 'fill-current' : ''}`} />
                      <span>{isPlaying ? 'Playing Episode' : 'Listen Now'}</span>
                    </button>

                    <span className="font-mono text-[10.5px] text-stone-400">
                      Apple · Spotify · Web
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. WEBINARS SECTION */}
      <section className="py-24 bg-[#08090D] border-t border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center justify-center gap-2 font-mono text-xs tracking-[0.28em] uppercase text-[#DFC38A] font-semibold bg-[#DFC38A]/10 px-3.5 py-1 rounded border border-[#DFC38A]/25">
              <Video className="w-3.5 h-3.5 text-[#DFC38A]" />
              <span>Webinars</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white leading-tight">
              Executive Learning Series
            </h2>
            <p className="text-stone-300 font-light text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              Curated masterclasses and executive briefings designed for C-suite leaders, boards, and enterprise decision-makers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {webinars.map((web, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-2xl bg-gradient-to-b from-[#11141E] to-[#0A0C12] border border-white/[0.08] hover:border-[#DFC38A]/45 hover:shadow-[0_10px_30px_rgba(223,195,138,0.08)] transition-all duration-300 flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between font-mono text-xs text-stone-400 border-b border-white/[0.06] pb-4">
                    <span className="text-[#DFC38A] font-bold uppercase tracking-wider">{web.type}</span>
                    <span className="bg-stone-900 border border-white/10 px-2 py-0.5 rounded text-[11px] text-stone-300">{web.sessions}</span>
                  </div>

                  <h3 className="text-xl font-serif text-white group-hover:text-[#DFC38A] transition-colors leading-snug">
                    {web.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-light text-stone-300 leading-relaxed">
                    {web.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <span className={`font-mono text-[11px] uppercase tracking-wider font-semibold ${
                    web.isAvailable ? 'text-[#DFC38A]' : 'text-stone-400'
                  }`}>
                    {web.status}
                  </span>

                  <Link
                    to="/contact"
                    className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-stone-400 hover:text-black hover:bg-[#DFC38A] hover:border-[#DFC38A] transition-all"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ARTICLES & ESSAYS */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-3.5 font-mono text-xs tracking-[0.28em] uppercase text-amber-400 font-semibold">
              <span className="w-8 h-[1.5px] bg-gradient-to-r from-transparent to-amber-400" />
              <span>Articles & Essays</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white">
              Long-Form Perspectives
            </h2>
          </div>
          <p className="text-stone-400 font-serif italic text-sm sm:text-base max-w-md">
            "Rigorous, peer-informed frameworks on governance, strategy, and executive alignment."
          </p>
        </div>

        {/* Horizontal Full-Width Essay Cards */}
        <div className="space-y-3.5 sm:space-y-4">
          {articles.map((art, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedArticle(art)}
              className="p-5 sm:p-6 lg:py-5 lg:px-7 rounded-xl bg-gradient-to-r from-[#0E121E] via-[#0A0D18] to-[#070910] border border-white/[0.08] hover:border-[#DFC38A]/50 hover:shadow-[0_10px_35px_rgba(223,195,138,0.09)] cursor-pointer group flex flex-col lg:flex-row lg:items-center justify-between gap-5 transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle Ambient Left Accent Line */}
              <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-[#DFC38A]/40 group-hover:via-[#DFC38A] to-transparent transition-all" />

              {/* Main Content (Left & Center) */}
              <div className="space-y-2 lg:max-w-4xl flex-grow">
                {/* Meta Bar */}
                <div className="flex items-center gap-3 font-mono text-[11px] text-stone-400">
                  <span className="text-[#DFC38A] font-bold uppercase tracking-wider bg-[#DFC38A]/[0.08] px-2.5 py-0.5 rounded border border-[#DFC38A]/20">
                    {art.category}
                  </span>
                  <span className="flex items-center gap-1 text-stone-400">
                    <Clock className="w-3 h-3 text-stone-400" /> {art.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl lg:text-[22px] font-serif text-white group-hover:text-[#DFC38A] transition-colors leading-snug">
                  {art.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm font-light text-stone-300 leading-relaxed max-w-3xl">
                  {art.description}
                </p>
              </div>

              {/* Action Button (Right Side) */}
              <div className="shrink-0 self-start lg:self-center pt-2 lg:pt-0">
                <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/[0.03] border border-white/10 group-hover:border-[#DFC38A]/60 group-hover:bg-[#DFC38A]/10 text-[#DFC38A] font-mono text-xs uppercase tracking-wider font-semibold transition-all">
                  <span>Read Full Essay</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. STAY INFORMED (NEWSLETTER SUBSCRIPTION) */}
      <section className="py-24 bg-[#08090D] border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center space-y-8">
          <div className="inline-flex items-center justify-center gap-3.5 font-mono text-xs tracking-[0.28em] uppercase text-amber-400 font-semibold">
            <span className="w-8 h-[1.5px] bg-gradient-to-r from-transparent to-amber-400" />
            <span>Stay Informed</span>
            <span className="w-8 h-[1.5px] bg-gradient-to-l from-transparent to-amber-400" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white">
            The Executive Leadership Brief
          </h2>

          <p className="text-stone-300 font-serif italic text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            A monthly briefing on leadership architecture, organisational performance, and the founder-to-owner transition — written exclusively for senior executives across the Gulf, Europe, Africa and Asia.
          </p>

          {!isSubscribed ? (
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 pt-4">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter executive email..."
                className="flex-grow px-5 py-3.5 rounded-lg bg-black/60 border border-white/20 text-white placeholder-stone-500 font-sans text-xs focus:outline-none focus:border-amber-400 transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-3.5 rounded-lg bg-amber-400 text-black font-mono text-xs uppercase tracking-widest font-bold hover:bg-amber-300 transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)] shrink-0 cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          ) : (
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-400/10 border border-amber-400/40 text-amber-300 font-mono text-xs uppercase tracking-wider font-semibold">
              <Check className="w-4 h-4" />
              <span>Thank you for subscribing to The Executive Leadership Brief.</span>
            </div>
          )}

          <p className="text-[11px] font-mono text-stone-500 max-w-md mx-auto">
            No spam. Unsubscribe at any time. We respect your time and your inbox.
          </p>
        </div>
      </section>

      {/* Reader Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#0D1017] p-8 sm:p-14 max-w-3xl w-full border border-amber-400/40 rounded-2xl shadow-2xl relative max-h-[85vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 text-stone-400 hover:text-white p-2 cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="font-mono text-xs text-amber-400 uppercase tracking-widest mb-3 font-semibold">
                {selectedArticle.category} · {selectedArticle.readTime}
              </div>

              <h2 className="text-2xl sm:text-4xl font-serif text-white mb-6">
                {selectedArticle.title}
              </h2>

              <p className="text-base sm:text-lg font-serif italic text-amber-200/90 mb-6 pl-4 border-l-2 border-amber-400/60">
                "{selectedArticle.description}"
              </p>

              <div className="text-stone-300 font-sans text-sm sm:text-base leading-relaxed space-y-4 whitespace-pre-line font-light">
                {selectedArticle.content}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-6 py-2.5 rounded bg-amber-400 text-black font-mono text-xs uppercase font-bold hover:bg-amber-300 transition-all cursor-pointer"
                >
                  Close Essay
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
