import React, { useState } from 'react';
import { ArrowUpRight, BookOpen, Clock, Tag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Insights = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const featuredArticle = {
    title: 'The Architecture of Decision-Making: How the Best CEOs Think Differently',
    category: 'Executive Cognition',
    readTime: '7 Min Read',
    date: 'Q1 2026',
    excerpt:
      'Why extraordinary chief executives focus less on making good individual decisions and more on designing the systemic decision-making architecture of the entire enterprise.',
    content:
      'High-performing CEOs realize that personal decision-making bandwidth is a finite, perishable asset. Rather than becoming the final arbiter for every operational dilemma, transformative leaders establish explicit decision protocols, risk boundaries, and delegated authority matrices that empower their executive teams to execute autonomously with absolute strategic fidelity.',
  };

  const otherArticles = [
    {
      title: 'The Architecture of Executive Teams',
      category: 'C-Suite Topology',
      readTime: '5 Min Read',
      date: 'Editorial',
      excerpt:
        'Moving past interpersonal chemistry to engineer structural alignment, clear role boundaries, and zero-friction execution.',
    },
    {
      title: 'Succession Planning in the GCC',
      category: 'Sovereign & Family Enterprise',
      readTime: '6 Min Read',
      date: 'Special Report',
      excerpt:
        'Preserving institutional legacy, family cohesion, and operational continuity across multi-generational leadership transitions.',
    },
    {
      title: "The CEO's Loneliness",
      category: 'State Management',
      readTime: '4 Min Read',
      date: 'Executive Reflection',
      excerpt:
        'Examining the psychological and relational burden of ultimate responsibility, and how systemic architecture mitigates executive isolation.',
    },
  ];

  return (
    <section
      id="insights"
      className="relative py-28 md:py-40 bg-[#08090C] border-t border-white/[0.06] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 md:mb-20">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.3em] uppercase text-amber-400 mb-4">
              <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
              THOUGHT LEADERSHIP
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-ivory-gradient leading-tight">
              The Leadership Architecture Journal
            </h2>
          </div>
          <span className="font-mono text-xs text-stone-500 uppercase tracking-widest hidden sm:block">
            Curated Executive Essays
          </span>
        </div>

        {/* Magazine Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Featured Article (7 Cols) */}
          <div
            onClick={() => setSelectedArticle(featuredArticle)}
            className="lg:col-span-7 glass-panel p-8 sm:p-12 border border-white/[0.1] hover:border-amber-400/40 transition-all duration-500 group cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between font-mono text-xs text-stone-400 mb-6">
                <span className="text-amber-400 uppercase tracking-widest">Featured Essay</span>
                <span className="flex items-center gap-2 text-stone-500">
                  <Clock className="w-3.5 h-3.5" />
                  {featuredArticle.readTime}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-white group-hover:text-amber-200 transition-colors mb-4 leading-snug">
                {featuredArticle.title}
              </h3>

              <p className="text-stone-300 font-sans font-light text-sm sm:text-base leading-relaxed mb-6">
                {featuredArticle.excerpt}
              </p>
            </div>

            <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
              <span className="font-mono text-xs text-stone-500 uppercase tracking-wider">
                {featuredArticle.category}
              </span>
              <div className="flex items-center gap-2 font-mono text-xs text-amber-400 group-hover:translate-x-1 transition-transform">
                <span>Read Full Essay</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Sub Articles (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {otherArticles.map((article, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedArticle(article)}
                className="p-6 bg-stone-950/60 border border-white/[0.07] hover:border-amber-400/40 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center justify-between font-mono text-[10px] text-stone-500 uppercase tracking-wider mb-2">
                  <span className="text-amber-400/80">{article.category}</span>
                  <span>{article.readTime}</span>
                </div>
                <h4 className="text-lg sm:text-xl font-serif text-white group-hover:text-amber-200 transition-colors mb-2">
                  {article.title}
                </h4>
                <p className="text-xs sm:text-sm font-sans text-stone-400 font-light line-clamp-2">
                  {article.excerpt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reader Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="glass-panel-elevated p-8 sm:p-12 max-w-2xl w-full border border-amber-400/40 relative max-h-[85vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 font-mono text-xs uppercase tracking-widest text-stone-400 hover:text-white"
              >
                ✕ Close
              </button>

              <div className="font-mono text-xs text-amber-400 uppercase tracking-widest mb-3">
                {selectedArticle.category} · {selectedArticle.readTime}
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif text-white mb-6">
                {selectedArticle.title}
              </h3>

              <div className="space-y-4 text-stone-300 font-sans font-light leading-relaxed text-sm sm:text-base">
                <p className="text-lg font-serif italic text-amber-200/90 leading-snug">
                  "{selectedArticle.excerpt}"
                </p>
                <p>
                  {selectedArticle.content ||
                    'In modern enterprise leadership, standard management orthodoxies frequently collapse under extreme scale. The differentiator between perpetual turbulence and compound growth is not individual effort, but the structural design of the executive team and accountability architecture.'}
                </p>
                <p>
                  Avaron Advisory continues to publish proprietary research and frameworks for chief executives, family office principals, and government leaders navigating strategic transformation.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.08] flex justify-end">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="luxury-btn luxury-btn-outline !py-2.5 !px-6 text-xs"
                >
                  Close Reader
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
