import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices or reduced motion
    if (typeof window === 'undefined' || window.matchMedia('(hover: none), (prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let animationFrameId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);

    const checkHoverTarget = (e) => {
      const target = e.target;
      const isInteractive = target.closest('a, button, input, textarea, [role="button"], .luxury-btn, .interactive-hover');
      setIsHovering(!!isInteractive);
    };

    const render = () => {
      // Smooth lerp for outer ring
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseover', checkHoverTarget, { passive: true });

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseover', checkHoverTarget);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) {
    return null;
  }

  return (
    <>
      {/* Center Precision Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
        style={{ opacity: isVisible ? 1 : 0 }}
      >
        <div
          className={`w-2 h-2 rounded-full bg-white transition-transform duration-200 ${
            isHovering ? 'scale-0' : isClicking ? 'scale-75' : 'scale-100'
          }`}
        />
      </div>

      {/* Outer Luxury Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
        style={{ opacity: isVisible ? 1 : 0 }}
      >
        <div
          className={`rounded-full border border-stone-400/50 transition-all duration-300 flex items-center justify-center ${
            isHovering
              ? 'w-14 h-14 bg-white/10 border-amber-300/80 backdrop-blur-[2px] scale-110'
              : isClicking
              ? 'w-8 h-8 border-amber-400/90 scale-95'
              : 'w-10 h-10'
          }`}
        />
      </div>
    </>
  );
};
