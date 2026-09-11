import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Check if the user prefers reduced motion
 */
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Standard luxury entrance animation using GSAP
 */
export const revealUp = (target, trigger, options = {}) => {
  if (prefersReducedMotion()) {
    gsap.set(target, { opacity: 1, y: 0 });
    return;
  }

  const {
    delay = 0,
    duration = 1.2,
    y = 60,
    stagger = 0.12,
    start = 'top 85%',
    ease = 'power3.out',
  } = options;

  return gsap.fromTo(
    target,
    { opacity: 0, y },
    {
      opacity: 1,
      y: 0,
      duration,
      stagger,
      delay,
      ease,
      scrollTrigger: {
        trigger: trigger || target,
        start,
        toggleActions: 'play none none none',
      },
    }
  );
};

/**
 * Parallax image effect
 */
export const parallax = (target, trigger, movement = 80) => {
  if (prefersReducedMotion()) return;

  return gsap.fromTo(
    target,
    { y: -movement / 2 },
    {
      y: movement / 2,
      ease: 'none',
      scrollTrigger: {
        trigger: trigger || target,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.2,
      },
    }
  );
};

/**
 * Line expansion animation for architectural separators
 */
export const drawLine = (target, trigger, options = {}) => {
  if (prefersReducedMotion()) {
    gsap.set(target, { scaleX: 1, opacity: 1 });
    return;
  }

  const { duration = 1.4, start = 'top 88%', ease = 'expo.out' } = options;

  return gsap.fromTo(
    target,
    { scaleX: 0, transformOrigin: 'left center', opacity: 0.2 },
    {
      scaleX: 1,
      opacity: 1,
      duration,
      ease,
      scrollTrigger: {
        trigger: trigger || target,
        start,
        toggleActions: 'play none none none',
      },
    }
  );
};

export { gsap, ScrollTrigger };
