import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ScrollTrigger } from '../animations/gsapUtils';

export const ScrollToTop = () => {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    // Disable browser default scroll restoration so it doesn't restore previous scroll position
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const resetToTop = () => {
      if (hash) {
        const target = document.querySelector(hash);
        if (target) {
          if (window.lenis) {
            window.lenis.scrollTo(target, { immediate: true });
          } else {
            target.scrollIntoView({ behavior: 'smooth' });
          }
          return;
        }
      }

      // Scroll window and document to absolute top (Hero section)
      if (window.lenis) {
        window.lenis.scrollTo(0, { immediate: true });
      }
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      // Refresh GSAP ScrollTrigger calculations
      if (typeof ScrollTrigger !== 'undefined' && ScrollTrigger.refresh) {
        ScrollTrigger.refresh();
      }
    };

    // Execute immediately
    resetToTop();

    // Secondary execution after microtask / render frame to catch layout shifts
    const frameId = requestAnimationFrame(() => {
      resetToTop();
    });

    const timerId = setTimeout(() => {
      resetToTop();
    }, 60);

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(timerId);
    };
  }, [pathname, search, hash]);

  return null;
};

