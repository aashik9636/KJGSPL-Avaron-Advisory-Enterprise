import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/logo.webp';

/**
 * Clean, Simple, Normal Luxury Loader
 * - Clean brand logo with subtle glow
 * - Smooth 0-100% counter & minimalist loading bar
 * - Clean fade out reveal without heavy effects
 */
export const PageTearLoader = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Lock scroll while loading
    const originalBodyOverflow = document.body.style.overflow;
    const originalDocOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    // Simple 0-100 count in ~1.1s
    const startTime = Date.now();
    const duration = 1100;

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(100, Math.round((elapsed / duration) * 100));
      setCount(progress);

      if (progress >= 100) {
        clearInterval(timer);
        
        // Start smooth fade out
        setTimeout(() => {
          setIsLoaded(true);

          setTimeout(() => {
            setIsDone(true);
            document.body.style.overflow = originalBodyOverflow;
            document.documentElement.style.overflow = originalDocOverflow;
            if (onComplete) onComplete();
          }, 500); // 0.5s fade out
        }, 150);
      }
    }, 20);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalDocOverflow;
    };
  }, [onComplete]);

  if (isDone) return null;

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[999999] bg-[#06070A] flex flex-col items-center justify-center pointer-events-auto select-none px-4"
        >
          <div className="flex flex-col items-center space-y-6 max-w-sm text-center">
            
            {/* Logo */}
            <img
              src={logoImg}
              alt="Avaron Advisory"
              className="h-12 sm:h-14 w-auto object-contain drop-shadow-[0_2px_15px_rgba(223,195,138,0.25)]"
            />

            {/* Subtitle */}
            <div className="font-mono text-[10px] sm:text-xs tracking-[0.3em] text-[#DFC38A] uppercase font-medium">
              Leadership Architecture
            </div>

            {/* Minimalist Progress Bar */}
            <div className="w-48 sm:w-56 h-[2px] bg-white/10 rounded-full overflow-hidden relative my-2">
              <div
                className="h-full bg-gradient-to-r from-[#BFA162] via-[#DFC38A] to-[#F5EFE0] transition-all duration-75 ease-out shadow-[0_0_10px_rgba(223,195,138,0.7)]"
                style={{ width: `${count}%` }}
              />
            </div>

            {/* Clean Percentage Counter */}
            <div className="font-mono text-xs text-stone-400 font-light tracking-widest">
              {count}%
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
