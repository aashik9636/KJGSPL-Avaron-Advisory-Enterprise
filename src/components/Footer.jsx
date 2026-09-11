import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowUp } from 'lucide-react';
import logoImg from '../assets/logo.webp';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050608] border-t border-white/[0.08] pt-20 pb-12 text-stone-400 font-sans text-xs">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/[0.06]">
          {/* Brand Philosophy (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block group">
              <img
                src={logoImg}
                alt="Avaron Advisory Logo"
                className="h-10 w-auto object-contain transition-opacity duration-200 group-hover:opacity-90"
              />
            </Link>
            <p className="text-stone-300 font-serif italic text-base max-w-sm pt-2">
              "A boutique organizational architecture firm."
            </p>
            <p className="text-stone-500 font-light text-xs max-w-sm leading-relaxed">
              Engineering high-performance leadership systems and governance structures for CEOs, sovereigns, and multi-generational enterprises worldwide.
            </p>
          </div>

          {/* Quick Navigation (3 Cols) */}
          <div className="lg:col-span-3 space-y-2.5">
            <div className="font-mono text-[11px] text-white uppercase tracking-widest mb-4 font-semibold">
              Platform Architecture
            </div>
            <div className="flex flex-col space-y-2 font-mono text-xs">
              <Link to="/approach" className="hover:text-amber-300 transition-colors">→ Performance Model</Link>
              <Link to="/architecture" className="hover:text-amber-300 transition-colors">→ Four-Phase System</Link>
              <Link to="/organizations" className="hover:text-amber-300 transition-colors">→ Who We Serve</Link>
              <Link to="/founder-owner" className="hover:text-amber-300 transition-colors">→ Founder → Owner & Scorecard</Link>
              <Link to="/services" className="hover:text-amber-300 transition-colors">→ 10 Precision Interventions</Link>
              <Link to="/journal" className="hover:text-amber-300 transition-colors">→ Leadership Journal</Link>
              <Link to="/about" className="hover:text-amber-300 transition-colors">→ Principal & Philosophy</Link>
            </div>
          </div>

          {/* Hub Locations (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="font-mono text-[11px] text-white uppercase tracking-widest mb-4 font-semibold">
              Global Hubs
            </div>
            <div className="space-y-2 text-stone-300 font-light">
              <div className="flex items-center justify-between border-b border-white/[0.04] pb-1.5">
                <span>Abu Dhabi</span>
                <span className="font-mono text-[10px] text-stone-500">United Arab Emirates</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/[0.04] pb-1.5">
                <span>Amsterdam</span>
                <span className="font-mono text-[10px] text-stone-500">Netherlands</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/[0.04] pb-1.5">
                <span>Los Angeles</span>
                <span className="font-mono text-[10px] text-stone-500">United States</span>
              </div>
            </div>
          </div>

          {/* Confidential Contact (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="font-mono text-[11px] text-white uppercase tracking-widest mb-4 font-semibold">
              Confidential Line
            </div>
            <a
              href="mailto:info@avaronadvisory.com"
              className="inline-flex items-center gap-2 text-amber-300 hover:text-white transition-colors font-mono text-xs font-medium"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              info@avaronadvisory.com
            </a>
            <div className="pt-2">
              <Link
                to="/contact"
                className="luxury-btn !py-2.5 !px-4 !text-[10px] !tracking-[0.15em] bg-white text-black hover:bg-amber-400"
              >
                Inquire Now
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-stone-500 tracking-wider">
          <div>
            © 2026 Avaron Advisory. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Organizational Architecture & Executive Advisory</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-stone-400 hover:text-amber-400 transition-colors uppercase font-medium"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
