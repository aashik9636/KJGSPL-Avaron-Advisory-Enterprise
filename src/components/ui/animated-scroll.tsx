import React, { useState, useEffect, useRef, ReactNode } from 'react';

export interface ScrollPageItem {
  leftBgImage?: string | null;
  rightBgImage?: string | null;
  leftContent?: {
    badge?: string;
    heading: string;
    description: string | ReactNode;
    extra?: ReactNode;
  } | null;
  rightContent?: {
    badge?: string;
    heading: string;
    description: string | ReactNode;
    extra?: ReactNode;
  } | null;
}

export interface ScrollAdventureProps {
  pages?: ScrollPageItem[];
  animTime?: number;
  className?: string;
  onPageChange?: (index: number) => void;
}

const defaultPages: ScrollPageItem[] = [
  {
    leftBgImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
    rightBgImage: null,
    leftContent: null,
    rightContent: {
      badge: 'Global Alliances',
      heading: 'Global Advisory Networks',
      description: 'We partner with select global advisory and consulting firms who seek a specialized GCC leadership capability.',
    },
  },
  {
    leftBgImage: null,
    rightBgImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop',
    leftContent: {
      badge: 'Executive Education',
      heading: 'Executive Education Institutions',
      description: 'We collaborate with leading business schools and executive education institutions to deliver specialized leadership programs for GCC executives.',
    },
    rightContent: null,
  },
  {
    leftBgImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
    rightBgImage: null,
    leftContent: null,
    rightContent: {
      badge: 'Sector Associations',
      heading: 'Sector-Specific Organizations',
      description: 'We partner with industry associations, government bodies, and sector-specific organizations to deliver leadership development at a sector level.',
    },
  },
  {
    leftBgImage: null,
    rightBgImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
    leftContent: {
      badge: 'Digital Platforms',
      heading: 'Technology & HR Platforms',
      description: 'We work with select HR technology and talent management platforms to integrate our leadership architecture methodology into digital tools.',
    },
    rightContent: null,
  },
];

export default function ScrollAdventure({
  pages = defaultPages,
  animTime = 1000,
  className = '',
  onPageChange,
}: ScrollAdventureProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const numOfPages = pages.length;
  const scrolling = useRef(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const navigateUp = () => {
    if (currentPage > 1) {
      setCurrentPage((p) => {
        const next = p - 1;
        onPageChange?.(next);
        return next;
      });
    }
  };

  const navigateDown = () => {
    if (currentPage < numOfPages) {
      setCurrentPage((p) => {
        const next = p + 1;
        onPageChange?.(next);
        return next;
      });
    }
  };

  const handleWheel = (e: WheelEvent) => {
    if (scrolling.current) return;
    scrolling.current = true;
    if (e.deltaY > 0) {
      navigateDown();
    } else {
      navigateUp();
    }
    setTimeout(() => {
      scrolling.current = false;
    }, animTime);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (scrolling.current) return;
    if (e.key === 'ArrowUp') {
      scrolling.current = true;
      navigateUp();
      setTimeout(() => {
        scrolling.current = false;
      }, animTime);
    } else if (e.key === 'ArrowDown') {
      scrolling.current = true;
      navigateDown();
      setTimeout(() => {
        scrolling.current = false;
      }, animTime);
    }
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onWheelHandler = (e: WheelEvent) => handleWheel(e);
    el.addEventListener('wheel', onWheelHandler, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      el.removeEventListener('wheel', onWheelHandler);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentPage, numOfPages, animTime]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden h-screen w-full bg-[#06070A] text-[#F8F6F0] select-none ${className}`}
    >
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#DFC38A]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#DFC38A]/5 rounded-full blur-[140px]" />
      </div>

      {pages.map((page, i) => {
        const idx = i + 1;
        const isActive = currentPage === idx;
        const isPast = currentPage > idx;

        // Opposing vertical split animation
        // Left goes down when coming, up when leaving
        // Right goes up when coming, down when leaving
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
            key={idx}
            className={`absolute inset-0 z-10 transition-opacity duration-700 ${
              isActive ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
          >
            {/* Left Half */}
            <div
              className="absolute top-0 left-0 w-full md:w-1/2 h-full transition-transform duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ transform: leftTrans }}
            >
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat relative border-r border-white/5"
                style={{
                  backgroundImage: page.leftBgImage ? `url(${page.leftBgImage})` : undefined,
                  backgroundColor: page.leftBgImage ? undefined : '#0A0C13',
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/60 md:bg-black/40" />

                <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 md:p-14 text-center max-w-xl mx-auto">
                  {page.leftContent && (
                    <div className="space-y-4">
                      {page.leftContent.badge && (
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DFC38A]/10 border border-[#DFC38A]/30 text-[#DFC38A] font-mono text-xs uppercase tracking-widest">
                          {page.leftContent.badge}
                        </div>
                      )}
                      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white tracking-tight leading-tight">
                        {page.leftContent.heading}
                      </h2>
                      {typeof page.leftContent.description === 'string' ? (
                        <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed">
                          {page.leftContent.description}
                        </p>
                      ) : (
                        <div className="text-base text-stone-300">
                          {page.leftContent.description}
                        </div>
                      )}
                      {page.leftContent.extra && (
                        <div className="pt-2">{page.leftContent.extra}</div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Half */}
            <div
              className="hidden md:block absolute top-0 left-1/2 w-1/2 h-full transition-transform duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ transform: rightTrans }}
            >
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat relative border-l border-white/5"
                style={{
                  backgroundImage: page.rightBgImage ? `url(${page.rightBgImage})` : undefined,
                  backgroundColor: page.rightBgImage ? undefined : '#0B0E17',
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/60 md:bg-black/40" />

                <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 md:p-14 text-center max-w-xl mx-auto">
                  {page.rightContent && (
                    <div className="space-y-4">
                      {page.rightContent.badge && (
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DFC38A]/10 border border-[#DFC38A]/30 text-[#DFC38A] font-mono text-xs uppercase tracking-widest">
                          {page.rightContent.badge}
                        </div>
                      )}
                      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white tracking-tight leading-tight">
                        {page.rightContent.heading}
                      </h2>
                      {typeof page.rightContent.description === 'string' ? (
                        <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed">
                          {page.rightContent.description}
                        </p>
                      ) : (
                        <div className="text-base text-stone-300">
                          {page.rightContent.description}
                        </div>
                      )}
                      {page.rightContent.extra && (
                        <div className="pt-2">{page.rightContent.extra}</div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Floating Bottom Nav Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3 bg-[#0B0D14]/90 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-2xl">
        <button
          onClick={navigateUp}
          disabled={currentPage === 1}
          className="text-stone-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed p-1 transition-colors"
          aria-label="Previous Page"
        >
          <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <div className="flex items-center gap-2">
          {pages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentPage === i + 1
                  ? 'w-8 bg-[#DFC38A]'
                  : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={navigateDown}
          disabled={currentPage === numOfPages}
          className="text-stone-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed p-1 transition-colors"
          aria-label="Next Page"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export { ScrollAdventure };
