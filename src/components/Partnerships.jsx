import React from 'react';
import { Globe, GraduationCap, Building2, Cpu } from 'lucide-react';

export const Partnerships = () => {
  const alliances = [
    {
      title: 'Global Advisory Networks',
      icon: Globe,
      desc: 'Collaborative alliances with top-tier international strategy, legal, and financial advisory practices.',
    },
    {
      title: 'Executive Education Institutions',
      icon: GraduationCap,
      desc: 'Curriculum development and bespoke masterclasses for senior executive development institutes.',
    },
    {
      title: 'Sector-Specific Organizations',
      icon: Building2,
      desc: 'Tailored institutional frameworks for energy, sovereign wealth, infrastructure, and healthcare.',
    },
    {
      title: 'Technology & HR Platforms',
      icon: Cpu,
      desc: 'Next-generation organizational intelligence, succession modeling, and executive talent platforms.',
    },
  ];

  return (
    <section className="py-24 bg-[#07080A] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.3em] uppercase text-amber-400 mb-3">
              <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
              STRATEGIC ALLIANCES
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-light text-white">
              Strategic Partnerships
            </h2>
          </div>
          <p className="font-serif italic text-stone-400 text-base sm:text-lg">
            "Building alliances that amplify impact."
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {alliances.map((item, idx) => (
            <div
              key={idx}
              className="p-8 bg-stone-950/40 border border-white/[0.06] hover:border-amber-400/40 transition-all duration-300 group"
            >
              <div className="p-3 w-max bg-stone-900 border border-white/10 rounded mb-6 text-amber-400 group-hover:border-amber-400/40 transition-colors">
                {React.createElement(item.icon, { className: 'w-5 h-5' })}
              </div>
              <h3 className="font-serif text-xl font-normal text-white mb-2 group-hover:text-amber-200 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm font-sans text-stone-400 font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
