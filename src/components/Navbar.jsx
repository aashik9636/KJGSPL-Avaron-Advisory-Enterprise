import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import logoImg from '../assets/logo.webp';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Our Approach', path: '/approach' },
    { name: 'Who We Serve', path: '/organizations' },
    { name: 'Services', path: '/services' },
    { name: 'Founder to Owner', path: '/founder-owner' },
    { name: 'Thought Leadership', path: '/journal' },
    { name: 'Partnerships', path: '/partnerships' },
    { name: 'About', path: '/about' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#080A0E]/95 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl py-3'
            : 'bg-[#080A0E]/85 backdrop-blur-md border-b border-white/[0.05] py-3.5'
        }`}
      >
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Identity */}
          <Link
            to="/"
            className="flex items-center gap-3 group select-none shrink-0"
          >
            <img
              src={logoImg}
              alt="Avaron Advisory Logo"
              className="h-8 sm:h-9 xl:h-10 w-auto object-contain transition-all duration-300 group-hover:opacity-90"
            />
          </Link>

          {/* Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-5 2xl:space-x-7 text-[11px] 2xl:text-xs font-mono tracking-[0.10em] 2xl:tracking-[0.14em] uppercase text-stone-300">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative py-1.5 transition-colors duration-200 hover:text-amber-300 whitespace-nowrap ${
                  isActive(link.path)
                    ? 'text-amber-300 font-bold'
                    : 'text-stone-300 font-medium'
                }`}
              >
                <span>{link.name}</span>
                {isActive(link.path) && (
                  <motion.span
                    layoutId="navUnderline"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-amber-400 shadow-[0_0_8px_rgba(212,175,55,0.8)]"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden xl:flex items-center shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded border border-amber-400/50 bg-amber-400/10 text-amber-300 hover:bg-amber-400 hover:text-black transition-all text-xs font-mono uppercase tracking-wider font-semibold shadow-[0_0_15px_rgba(212,175,55,0.15)] whitespace-nowrap"
            >
              <span>Begin Conversation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-stone-300 hover:text-amber-400 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-amber-400" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[9980] bg-[#080A0E] flex flex-col justify-between p-8 pt-24 xl:hidden border-b border-white/10 overflow-y-auto"
          >
            <div className="flex flex-col space-y-6">
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-amber-400 font-bold">
                Executive Menu
              </span>
              <nav className="flex flex-col space-y-4">
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-serif text-stone-200 hover:text-amber-300 flex items-center justify-between border-b border-white/[0.06] pb-3"
                >
                  <span>Home</span>
                  <span className="text-xs font-mono text-stone-500">00</span>
                </Link>
                {navLinks.map((link, idx) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-serif text-stone-200 hover:text-amber-300 flex items-center justify-between border-b border-white/[0.06] pb-3"
                  >
                    <span>{link.name}</span>
                    <span className="text-xs font-mono text-stone-500">0{idx + 1}</span>
                  </Link>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-white/[0.08] flex flex-col gap-4">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-4 text-center rounded bg-amber-400 text-black font-mono text-xs uppercase tracking-widest font-bold"
              >
                Begin Confidential Conversation →
              </Link>
              <div className="text-center font-mono text-[10px] text-stone-500 uppercase tracking-widest pt-2">
                Abu Dhabi · Amsterdam · Los Angeles
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
