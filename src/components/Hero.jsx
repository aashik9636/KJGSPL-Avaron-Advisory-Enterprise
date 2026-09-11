import React, { useEffect, useRef } from 'react';
import { Compass, ArrowRight, Shield } from 'lucide-react';
import { gsap, prefersReducedMotion } from '../animations/gsapUtils';

export const Hero = ({ onOpenConversation }) => {
  const heroRef = useRef(null);
  const canvasRef = useRef(null);

  // Architectural Interactive Particle System
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // 3 Primary Interconnected Organizational Hubs
    const hubs = [
      { x: width * 0.75, y: height * 0.38, r: 160, color: 'rgba(212, 175, 55, 0.45)' },
      { x: width * 0.84, y: height * 0.72, r: 120, color: 'rgba(247, 245, 240, 0.3)' },
      { x: width * 0.62, y: height * 0.75, r: 100, color: 'rgba(180, 160, 120, 0.35)' },
    ];

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetX = mouseX;
    let targetY = mouseY;

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const nodes = [];
    for (let i = 0; i < 28; i++) {
      nodes.push({
        hubIdx: i % 3,
        angle: Math.random() * Math.PI * 2,
        speed: (Math.random() * 0.002 + 0.0008) * (i % 2 === 0 ? 1 : -1),
        distance: 30 + Math.random() * 120,
        size: Math.random() * 2 + 1,
      });
    }

    const render = () => {
      mouseX += (targetX - mouseX) * 0.04;
      mouseY += (targetY - mouseY) * 0.04;
      const offX = (mouseX - width / 2) * 0.04;
      const offY = (mouseY - height / 2) * 0.04;

      ctx.clearRect(0, 0, width, height);

      // Fine architectural grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.lineWidth = 1;
      const step = 50;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      const currentHubs = hubs.map((h) => ({
        cx: (width < 1024 ? width * 0.5 : h.x) + offX,
        cy: h.y + offY,
        r: h.r,
        color: h.color,
      }));

      // Structural tension triangles
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.15)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 6]);
      ctx.beginPath();
      ctx.moveTo(currentHubs[0].cx, currentHubs[0].cy);
      ctx.lineTo(currentHubs[1].cx, currentHubs[1].cy);
      ctx.lineTo(currentHubs[2].cx, currentHubs[2].cy);
      ctx.closePath();
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw Orbiting Nodes
      const positions = [];
      nodes.forEach((n) => {
        n.angle += n.speed;
        const hub = currentHubs[n.hubIdx];
        const nx = hub.cx + Math.cos(n.angle) * n.distance;
        const ny = hub.cy + Math.sin(n.angle) * (n.distance * 0.7);
        positions.push({ x: nx, y: ny, size: n.size });

        ctx.fillStyle = n.hubIdx === 0 ? '#E7CF85' : 'rgba(255, 255, 255, 0.6)';
        ctx.beginPath();
        ctx.arc(nx, ny, n.size, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
        ctx.beginPath();
        ctx.moveTo(hub.cx, hub.cy);
        ctx.lineTo(nx, ny);
        ctx.stroke();
      });

      // Hub outer circles
      currentHubs.forEach((hub) => {
        ctx.strokeStyle = hub.color;
        ctx.beginPath();
        ctx.arc(hub.cx, hub.cy, hub.r, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = '#D4AF37';
        ctx.beginPath();
        ctx.arc(hub.cx, hub.cy, 3.5, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-between pt-16 pb-12 overflow-hidden bg-gradient-to-b from-[#050608] via-[#080A0E] to-[#050608]"
    >
      {/* Background Interactive Architectural Canvas */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <canvas ref={canvasRef} className="w-full h-full opacity-60 lg:opacity-90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full my-auto">
        <div className="max-w-5xl">
          {/* Eyebrow Label */}
          <div className="flex items-center gap-3 mb-8 font-mono text-[11px] md:text-xs tracking-[0.35em] text-amber-400 uppercase">
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
            <span>AVARON ADVISORY</span>
            <span className="text-stone-600">•</span>
            <span className="text-stone-400">ORGANIZATIONAL ARCHITECTURE</span>
          </div>

          {/* Cinematic Giant Typography Headline */}
          <h1 className="text-hero-giant font-serif font-light text-ivory-gradient mb-8 leading-[0.96]">
            Leadership Architecture <br />
            <span className="text-stone-400">for Organizations</span> <br />
            <span className="italic font-normal text-white">That Cannot Afford</span> <br />
            <span className="text-gold-gradient font-serif">to Fail.</span>
          </h1>

          {/* Editorial Lead Paragraph */}
          <p className="text-lg sm:text-2xl font-sans font-light text-stone-300 max-w-3xl leading-relaxed mb-12">
            We work with CEOs, founders, and executive teams across the Gulf, Europe, Africa, and Asia to build the leadership systems that transform strategy into results.
          </p>

          {/* Executive CTA Button Group */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5">
            <button
              onClick={() => {
                const el = document.querySelector('#approach');
                if (el) window.lenis ? window.lenis.scrollTo(el, { offset: -70 }) : el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="luxury-btn luxury-btn-primary !py-4 !px-8 text-xs font-semibold"
            >
              <span className="flex items-center gap-3">
                <Compass className="w-4 h-4" />
                Explore Our Approach
              </span>
            </button>

            <button
              onClick={onOpenConversation}
              className="luxury-btn !py-4 !px-8 text-xs border-white/20 hover:border-amber-400"
            >
              <span className="flex items-center gap-3">
                Begin a Conversation
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Editorial Bottom Metrics Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-12 hairline-t mt-12 grid grid-cols-2 sm:grid-cols-4 gap-8">
        <div>
          <div className="text-[10px] font-mono text-stone-500 uppercase tracking-widest mb-1">Geographic Depth</div>
          <div className="font-serif text-lg text-stone-200 font-normal">GCC, Europe & Asia</div>
        </div>
        <div>
          <div className="text-[10px] font-mono text-stone-500 uppercase tracking-widest mb-1">Focus</div>
          <div className="font-serif text-lg text-stone-200 font-normal">C-Suite Architecture</div>
        </div>
        <div>
          <div className="text-[10px] font-mono text-stone-500 uppercase tracking-widest mb-1">Track Record</div>
          <div className="font-serif text-lg text-stone-200 font-normal">20+ Years Experience</div>
        </div>
        <div>
          <div className="text-[10px] font-mono text-stone-500 uppercase tracking-widest mb-1">Confidentiality</div>
          <div className="font-serif text-lg text-amber-300 font-normal">Sovereign & Retained</div>
        </div>
      </div>
    </section>
  );
};
