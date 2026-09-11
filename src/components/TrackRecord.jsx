import React from 'react';

export const TrackRecord = () => {
  const clients = [
    'SAP',
    'Accor Hotels',
    'Microsoft',
    'Medtronic',
    'ADNOC',
    'PepsiCo',
    'Masdar City',
    'Tawazun',
    'Boehringer Ingelheim',
  ];

  return (
    <section className="py-20 bg-[#08090C] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 text-center">
        <div className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-stone-500 mb-3">
          <span>INSTITUTIONAL ECOSYSTEM</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-serif font-light text-stone-200">
          Trusted by Leaders Who Cannot Afford to Fail.
        </h3>
      </div>

      {/* Infinite Subtle Luxury Marquee */}
      <div className="relative w-full overflow-hidden flex items-center py-4 border-y border-white/[0.04] bg-[#0A0C10]">
        {/* Left and Right Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-[#08090C] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-[#08090C] to-transparent z-10 pointer-events-none" />

        <div className="w-full overflow-hidden flex">
          <div className="animate-marquee flex items-center space-x-12 sm:space-x-20 whitespace-nowrap will-change-transform select-none py-1">
            {[...clients, ...clients, ...clients, ...clients].map((client, idx) => (
              <div
                key={idx}
                className="inline-flex items-center space-x-12 sm:space-x-20 text-stone-400 hover:text-white transition-colors duration-300 font-mono text-xs sm:text-sm tracking-[0.25em] uppercase cursor-default"
              >
                <span>{client}</span>
                <span className="w-1.5 h-1.5 bg-stone-500/60 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
