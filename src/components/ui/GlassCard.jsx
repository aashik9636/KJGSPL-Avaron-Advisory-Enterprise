import React, { useState, useRef } from "react";
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export const GlassCard = React.forwardRef(
  (
    {
      title = "CEO Advisory Retainer",
      desc,
      description = "Ongoing strategic advisory for CEOs navigating growth, transformation, and complexity.",
      serviceNumber = "01 // SERVICE",
      icon: Icon = Sparkles,
      href = "/services",
      accentColor = "#DFC38A",
      className = "",
      ...props
    },
    forwardedRef
  ) => {
    const finalDesc = desc ?? description;
    const cardRef = useRef(null);
    const [tilt, setTilt] = useState({ x: 0, y: 0, isHovered: false });
    const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

    const handleMouseMove = (e) => {
      const card = cardRef.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      // 3D rotation angles
      const rotateX = (0.5 - y) * 24;
      const rotateY = (x - 0.5) * 28;

      setTilt({ x: rotateX, y: rotateY, isHovered: true });
      setGlare({ x: x * 100, y: y * 100, opacity: 0.6 });
    };

    const handleMouseLeave = () => {
      setTilt({ x: 0, y: 0, isHovered: false });
      setGlare((prev) => ({ ...prev, opacity: 0 }));
    };

    return (
      <div
        ref={(el) => {
          cardRef.current = el;
          if (typeof forwardedRef === "function") forwardedRef(el);
          else if (forwardedRef) forwardedRef.current = el;
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`group w-full h-full min-h-[270px] sm:min-h-[290px] [perspective:1200px] select-none ${className}`}
        {...props}
      >
        {/* Main Single-Border 3D Card Shell */}
        <div
          className="relative h-full w-full rounded-[24px] bg-gradient-to-br from-[#141722] via-[#0B0D13] to-[#06070A] border border-white/10 group-hover:border-[#DFC38A]/40 shadow-[0_20px_50px_rgba(0,0,0,0.85)] transition-all duration-300 ease-out [transform-style:preserve-3d] flex flex-col justify-between overflow-hidden"
          style={{
            transform: tilt.isHovered
              ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-6px)`
              : "rotateX(0deg) rotateY(0deg) translateY(0px)",
            boxShadow: tilt.isHovered
              ? `${-tilt.y * 1.2}px ${tilt.x * 1.2 + 20}px 40px rgba(0,0,0,0.75), 0 0 25px rgba(223,195,138,0.12)`
              : "0 15px 40px rgba(0,0,0,0.8)",
          }}
        >
          {/* Dynamic Specular Glare Reflection */}
          <div
            className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300 [transform:translate3d(0,0,15px)]"
            style={{
              opacity: glare.opacity,
              background: `radial-gradient(circle 280px at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.12), transparent 70%)`,
            }}
          />

          {/* Top-Right Floating Icon Emblem */}
          <div
            className="absolute top-5 right-5 z-20 grid aspect-square w-10 place-content-center rounded-xl bg-white/[0.03] border border-white/10 shadow-[0_6px_15px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-300 ease-out [transform-style:preserve-3d] [transform:translate3d(0,0,50px)] group-hover:[transform:translate3d(0,0,70px)] group-hover:border-[#DFC38A]/40 group-hover:bg-[#DFC38A]/10"
          >
            <Icon className="w-4.5 h-4.5 text-[#DFC38A] transition-transform duration-300 group-hover:scale-110" />
          </div>

          {/* Main Typography & Body Content */}
          <div className="relative z-20 p-6 sm:p-7 pt-6 [transform-style:preserve-3d] [transform:translate3d(0,0,30px)] group-hover:[transform:translate3d(0,0,42px)] transition-transform duration-300 flex flex-col justify-between h-full">
            <div>
              {/* Service Number Tag */}
              <div className="inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.22em] text-[#DFC38A] mb-3 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DFC38A] shadow-[0_0_6px_#DFC38A]" />
                <span>{serviceNumber}</span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl sm:text-[1.45rem] font-light text-white leading-snug mb-2.5 tracking-tight group-hover:text-[#F0E5CC] transition-colors drop-shadow-md pr-10">
                {title}
              </h3>

              {/* Description */}
              <p className="font-sans text-stone-300 font-light text-xs sm:text-[13.5px] leading-relaxed max-w-[94%]">
                {finalDesc}
              </p>
            </div>

            {/* Bottom Action Row with Elevated Z-Depth */}
            <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between [transform-style:preserve-3d] [transform:translate3d(0,0,38px)] group-hover:[transform:translate3d(0,0,50px)] transition-transform duration-300">
              <Link
                to={href}
                className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-[#DFC38A] group-hover:text-white transition-colors font-bold"
              >
                <span>Explore Advisory</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1.5 transition-transform duration-300" />
              </Link>

              <div className="w-7 h-7 rounded-full bg-white/[0.04] border border-white/15 flex items-center justify-center group-hover:bg-[#DFC38A] group-hover:border-[#DFC38A] transition-all duration-300 [transform:translate3d(0,0,16px)] group-hover:[transform:translate3d(0,0,28px)]">
                <ChevronRight className="w-3.5 h-3.5 text-stone-300 group-hover:text-black transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

GlassCard.displayName = "GlassCard";

export default GlassCard;
