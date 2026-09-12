import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowRight, ArrowUpRight, Check, ChevronDown, Lock, Globe, 
  Sparkles, Shield, Building2, HelpCircle, Users, Compass
} from 'lucide-react';
import heroImg from '../assets/hero_leadership.jpg';
import ParallaxStripSlider from '../components/ui/ParallaxStripSlider';
import GlassCard from '../components/ui/GlassCard';

gsap.registerPlugin(ScrollTrigger);

// Animated Counter on Viewport Entry
const CounterNumber = ({ target, duration = 0.9 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!isInView) return;

    const cleanNum = String(target).replace(/[^0-9.]/g, '');
    const num = parseInt(cleanNum, 10);
    if (isNaN(num)) {
      setCount(target);
      return;
    }

    let startTime = null;
    let frameId;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Smooth natural ease-out with Math.round to eliminate trailing lag
      const easeOut = 1 - (1 - progress) * (1 - progress);
      const current = Math.round(easeOut * num);
      
      setCount(current);

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        setCount(num);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}</span>;
};

export const HomePage = () => {
  const containerRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(null);

  // GSAP ScrollTrigger Setup for Pinned Sections & Parallax Reveals
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Pinning the Crises Section Left Column in vertical center until Point 04 arrives side-by-side, then scrolling up together
      ScrollTrigger.create({
        trigger: ".pinned-crises-left",
        start: "center center",
        endTrigger: "#crisis-item-04",
        end: "center center",
        pin: true,
        pinSpacing: false,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      });

      // Pinning the Why Avaron Section Left Column in vertical center until Pillar 04 arrives side-by-side, then scrolling up together
      ScrollTrigger.create({
        trigger: ".pinned-why-left",
        start: "center center",
        endTrigger: "#pillar-item-04",
        end: "center center",
        pin: true,
        pinSpacing: false,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      });

      // Falling 3D Entrance Animation for Services Section
      // Upper 3 Cards (Row 1): Re-triggers every time user scrolls to it
      gsap.fromTo(
        ".service-card-fall-row-1",
        {
          opacity: 0,
          y: -150,
          scale: 0.88,
          rotationX: -24,
          transformPerspective: 1000,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationX: 0,
          duration: 1.05,
          stagger: 0.15,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: "#services-grid-row-1",
            start: "top 82%",
            toggleActions: "restart none none reverse",
          },
        }
      );

      // Lower 3 Cards (Row 2): Re-triggers every time user scrolls down to second row
      gsap.fromTo(
        ".service-card-fall-row-2",
        {
          opacity: 0,
          y: -150,
          scale: 0.88,
          rotationX: -24,
          transformPerspective: 1000,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationX: 0,
          duration: 1.05,
          stagger: 0.15,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: "#services-grid-row-2",
            start: "top 82%",
            toggleActions: "restart none none reverse",
          },
        }
      );

      // Staggered reveals for list items
      gsap.utils.toArray('.reveal-item').forEach(item => {
        gsap.fromTo(item, 
          { opacity: 0, y: 30 },
          {
            opacity: 1, 
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            }
          }
        );
      });
      
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 150);
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  // Framer Motion Parallax (Hero)
  const { scrollYProgress } = useScroll();
  const yHeroText = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  const clients = [
    {
      name: 'Tawazun',
      logo: (
        <svg className="h-8 sm:h-9 w-auto text-stone-300 group-hover:text-white transition-colors" viewBox="0 0 32 32" fill="currentColor">
          <path d="M16 2L26 12L16 22L6 12Z" fillOpacity="0.4" />
          <path d="M16 8L22 14L16 20L10 14Z" fillOpacity="0.8" />
          <path d="M16 12L18.5 14.5L16 17L13.5 14.5Z" />
          <path d="M6 24h20v2H6z" fillOpacity="0.5" />
        </svg>
      )
    },
    {
      name: 'SAP',
      logo: (
        <svg className="h-7 sm:h-8 w-auto text-stone-300 group-hover:text-white transition-colors" viewBox="0 0 54 26" fill="currentColor">
          <path d="M0 0h28l14 26H14L0 0z" fillOpacity="0.25"/>
          <text x="5" y="19" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="17" letterSpacing="0.5">SAP</text>
        </svg>
      )
    },
    {
      name: 'Accor Hotels',
      logo: (
        <svg className="h-7 sm:h-8 w-auto text-stone-300 group-hover:text-white transition-colors" viewBox="0 0 28 24" fill="currentColor">
          <path d="M14 1.5C13.2 4 11 8.5 7 11.5c-3 2.2-5.5 2.8-7 3 2.5-.2 5.5-.8 8-2 3-1.5 5-4 6-6.5 1 2.5 3 5 6 6.5 2.5 1.2 5.5 1.8 8 2-1.5-.2-4-.8-7-3-4-3-6.2-7.5-7-10z" />
          <path d="M14 9c-.5 1.8-2 4.5-5 6.5-2.2 1.5-4.2 2-5.5 2.2 2-.2 4-.8 6-1.8 2.2-1.2 3.8-3.2 4.5-5.2.7 2 2.3 4 4.5 5.2 2 1 4 1.6 6 1.8-1.3-.2-3.3-.7-5.5-2.2-3-2-4.5-4.7-5-6.5z" fillOpacity="0.7"/>
        </svg>
      )
    },
    {
      name: 'Boehringer Ingelheim',
      logo: (
        <svg className="h-8 sm:h-9 w-auto text-stone-300 group-hover:text-white transition-colors" viewBox="0 0 28 28" fill="none" stroke="currentColor">
          <path d="M2 23h24" strokeWidth="2" strokeLinecap="round"/>
          <path d="M4 23V11a10 10 0 0 1 20 0v12" strokeWidth="1.75" strokeLinecap="round"/>
          <path d="M8 23V13a6 6 0 0 1 12 0v10" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M11 23v-6a3 3 0 0 1 6 0v6" strokeWidth="1.25" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      name: 'Microsoft',
      logo: (
        <svg className="h-6 sm:h-7 w-6 sm:w-7 text-stone-300 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
          <rect x="1" y="1" width="10" height="10" rx="0.5" />
          <rect x="13" y="1" width="10" height="10" rx="0.5" />
          <rect x="1" y="13" width="10" height="10" rx="0.5" />
          <rect x="13" y="13" width="10" height="10" rx="0.5" />
        </svg>
      )
    },
    {
      name: 'Medtronic',
      logo: (
        <svg className="h-7 sm:h-8 w-auto text-stone-300 group-hover:text-white transition-colors" viewBox="0 0 26 26" fill="currentColor">
          <circle cx="13" cy="5" r="2.5" />
          <path d="M11 9h4v14h-4z" />
          <path d="M5 11c0 5 3.5 9.5 8 10.8V19C9.5 17.8 7 14.5 7 11H5z" />
          <path d="M21 11c0 5-3.5 9.5-8 10.8V19c3.5-1.2 6-4.5 6-8h2z" />
          <path d="M1 11c0 7.5 5 13.5 12 14.8v-2.1C6.8 22.4 3 17.2 3 11H1z" fillOpacity="0.6"/>
          <path d="M25 11c0 7.5-5 13.5-12 14.8v-2.1c6.2-1.3 10-6.5 10-12.7h2z" fillOpacity="0.6"/>
        </svg>
      )
    },
    {
      name: 'ADNOC',
      logo: (
        <svg className="h-7 sm:h-8 w-auto text-stone-300 group-hover:text-white transition-colors" viewBox="0 0 26 26" fill="currentColor">
          <circle cx="13" cy="13" r="11" fill="none" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4"/>
          <path d="M13 3a10 10 0 0 1 10 10c0 4.2-2.6 7.8-6.4 9.2-.5.2-.9-.2-.9-.7v-4.5c0-.7-.4-1.3-1-1.7l-2.8-1.6a2.5 2.5 0 0 1-1.2-2.1V7c0-.7.5-1.2 1.2-1.2h.3c.5 0 .9-.4 1.1-.9V3z"/>
          <circle cx="10" cy="14" r="2.5" fillOpacity="0.85"/>
        </svg>
      )
    },
    {
      name: 'PepsiCo',
      logo: (
        <svg className="h-7 sm:h-8 w-auto text-stone-300 group-hover:text-white transition-colors" viewBox="0 0 26 26" fill="currentColor">
          <circle cx="13" cy="13" r="11.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.35"/>
          <path d="M2.5 10.5C6 7 18 6.5 23.5 10.5C21 7 17.5 3 13 3C8 3 4.5 7 2.5 10.5Z" />
          <path d="M2.5 15.5C6 19 18 19.5 23.5 15.5C21 19 17.5 23 13 23C8 23 4.5 19 2.5 15.5Z" />
          <path d="M3 13c4-2 15-2 20 0-4 2-15 2-20 0z" fillOpacity="0.7"/>
        </svg>
      )
    },
    {
      name: 'Masdar City',
      logo: (
        <svg className="h-7 sm:h-8 w-auto text-stone-300 group-hover:text-white transition-colors" viewBox="0 0 26 26" fill="none" stroke="currentColor">
          <polygon points="13 2 22 5.5 25 13 22 20.5 13 24 4 20.5 1 13 4 5.5" strokeWidth="1.5" strokeOpacity="0.8"/>
          <circle cx="13" cy="13" r="4.5" strokeWidth="1.25" fill="currentColor" fillOpacity="0.3"/>
          <circle cx="13" cy="13" r="1.5" fill="currentColor"/>
        </svg>
      )
    },
    {
      name: 'Tawazun',
      logo: (
        <svg className="h-8 sm:h-9 w-auto text-stone-300 group-hover:text-white transition-colors" viewBox="0 0 32 32" fill="currentColor">
          <path d="M16 2L26 12L16 22L6 12Z" fillOpacity="0.4" />
          <path d="M16 8L22 14L16 20L10 14Z" fillOpacity="0.8" />
          <path d="M16 12L18.5 14.5L16 17L13.5 14.5Z" />
          <path d="M6 24h20v2H6z" fillOpacity="0.5" />
        </svg>
      )
    },
    {
      name: 'SAP',
      logo: (
        <svg className="h-7 sm:h-8 w-auto text-stone-300 group-hover:text-white transition-colors" viewBox="0 0 54 26" fill="currentColor">
          <path d="M0 0h28l14 26H14L0 0z" fillOpacity="0.25"/>
          <text x="5" y="19" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="17" letterSpacing="0.5">SAP</text>
        </svg>
      )
    },
    {
      name: 'Accor Hotels',
      logo: (
        <svg className="h-7 sm:h-8 w-auto text-stone-300 group-hover:text-white transition-colors" viewBox="0 0 28 24" fill="currentColor">
          <path d="M14 1.5C13.2 4 11 8.5 7 11.5c-3 2.2-5.5 2.8-7 3 2.5-.2 5.5-.8 8-2 3-1.5 5-4 6-6.5 1 2.5 3 5 6 6.5 2.5 1.2 5.5 1.8 8 2-1.5-.2-4-.8-7-3-4-3-6.2-7.5-7-10z" />
          <path d="M14 9c-.5 1.8-2 4.5-5 6.5-2.2 1.5-4.2 2-5.5 2.2 2-.2 4-.8 6-1.8 2.2-1.2 3.8-3.2 4.5-5.2.7 2 2.3 4 4.5 5.2 2 1 4 1.6 6 1.8-1.3-.2-3.3-.7-5.5-2.2-3-2-4.5-4.7-5-6.5z" fillOpacity="0.7"/>
        </svg>
      )
    },
    {
      name: 'Boehringer Ingelheim',
      logo: (
        <svg className="h-8 sm:h-9 w-auto text-stone-300 group-hover:text-white transition-colors" viewBox="0 0 28 28" fill="none" stroke="currentColor">
          <path d="M2 23h24" strokeWidth="2" strokeLinecap="round"/>
          <path d="M4 23V11a10 10 0 0 1 20 0v12" strokeWidth="1.75" strokeLinecap="round"/>
          <path d="M8 23V13a6 6 0 0 1 12 0v10" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M11 23v-6a3 3 0 0 1 6 0v6" strokeWidth="1.25" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      name: 'Microsoft',
      logo: (
        <svg className="h-6 sm:h-7 w-6 sm:w-7 text-stone-300 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
          <rect x="1" y="1" width="10" height="10" rx="0.5" />
          <rect x="13" y="1" width="10" height="10" rx="0.5" />
          <rect x="1" y="13" width="10" height="10" rx="0.5" />
          <rect x="13" y="13" width="10" height="10" rx="0.5" />
        </svg>
      )
    }
  ];

  const crisisPoints = [
    {
      id: '01',
      title: 'Execution Velocity & Strategy Lag',
      quote: 'My leadership team cannot execute fast enough.',
      role: 'CEO, Regional Conglomerate',
      description: 'Strategy moves only at the speed of leadership alignment. When senior executives lack shared operating cadence, clear decision rights, and accountability frameworks, quarterly mandates decay into endless consensus-seeking meetings and missed milestones.',
    },
    {
      id: '02',
      title: 'Succession Fragility & Key-Person Risk',
      quote: 'I cannot find strong successors for key roles.',
      role: 'Founder, Family Business',
      description: 'Promoting high individual performers without building systemic succession architecture creates fragile leadership pipelines. Without structured talent calibration, readiness frameworks, and ownership transfer disciplines, enterprise continuity remains perpetually at risk.',
    },
    {
      id: '03',
      title: 'Decision Congestion & Founder Bottleneck',
      quote: 'I carry too many decisions personally.',
      role: 'CEO, High-Growth Company',
      description: 'As organisational scale multiplies, founder-led intuition fails to scale with it. When governance boundaries and executive mandates are ambiguous, every non-standard escalation flows back to the chief executive, choking operational agility and strategic focus.',
    },
    {
      id: '04',
      title: 'Cross-Functional Silos & Alignment Decay',
      quote: 'Our executives operate in silos.',
      role: 'Managing Director, Government Entity',
      description: 'Disparate functional agendas, conflicting departmental priorities, and misaligned performance metrics fracture executive cohesion. Senior leaders protect departmental territories instead of orchestrating unified enterprise-wide impact.',
    },
  ];

  const pemStats = [
    { value: '8', label: 'Minutes' },
    { value: '12', label: 'Questions' },
    { value: '3', label: 'PEM Layers' },
    { value: '1', label: 'Critical Gap Identified' },
  ];

  const services = [
    {
      title: 'CEO Advisory Retainer',
      desc: 'Ongoing strategic advisory for CEOs navigating growth, transformation, and complexity.',
    },
    {
      title: 'Executive Team Alignment',
      desc: 'Transforming groups of high performers into genuinely aligned leadership teams.',
    },
    {
      title: 'Succession Planning',
      desc: 'Building the leadership pipeline that ensures organizational continuity and resilience.',
    },
    {
      title: 'Culture Transformation',
      desc: 'Redesigning the cultural architecture that enables strategy to become reality.',
    },
    {
      title: 'Strategic Planning & Execution',
      desc: 'Bridging the gap between strategy and execution through leadership alignment.',
    },
    {
      title: 'Board Governance Design',
      desc: 'Establishing governance structures that enable effective oversight and strategic direction.',
    },
  ];

  const whyPillars = [
    {
      num: '01',
      title: 'Architecture, Not Training',
      desc: 'We design the systems, structures, and disciplines that enable leadership to perform consistently—not one-off workshops that fade within weeks.',
    },
    {
      num: '02',
      title: 'CEO-Centric Approach',
      desc: "Every engagement is designed around the CEO's specific context, challenges, and objectives. We do not deliver generic programs.",
    },
    {
      num: '03',
      title: 'Boutique Depth',
      desc: 'We work with a small number of clients at any given time, ensuring the depth of engagement that transformation requires.',
    },
    {
      num: '04',
      title: 'Global Reach',
      desc: 'Deep understanding of the cultural, organisational, and market dynamics that define leadership across the Gulf, Europe, Africa, and Asia.',
    },
  ];

  const whoWeServe = [
    {
      title: 'Founder to Owner',
      desc: 'Founders ready to transition from doing everything themselves to leading an organisation that performs without them.',
      tag: 'Founders & Owner-Operators',
      link: '/founder-owner',
      linkText: 'Learn More',
    },
    {
      title: 'Family-Owned Enterprises',
      desc: 'Organisations navigating generational transition, rapid growth, and the professionalisation of leadership.',
      tag: '500–3,000 employees',
      link: '/organizations',
      linkText: 'Explore Sector',
    },
    {
      title: 'Government-Linked Organisations',
      desc: 'Development authorities, national transformation programs, and semi-government entities requiring leadership capability upgrades.',
      tag: 'Government & Public Sector',
      link: '/organizations',
      linkText: 'Explore Sector',
    },
    {
      title: 'High-Growth Companies',
      desc: 'Founders and CEOs transitioning from technical expertise to organisational leadership as their companies scale.',
      tag: 'Fintech, Technology, Digital',
      link: '/organizations',
      linkText: 'Explore Sector',
    },
  ];

  const trackRecordStats = [
    { value: '40+', label: 'Years of Experience' },
    { value: '5,000+', label: 'Hours of Coaching, Consulting & Development' },
    { value: 'C-Suite & Owners', label: 'Engagement Level' },
    { value: 'Gulf · Europe · Africa · Asia', label: 'Regional Reach' },
  ];

  const faqs = [
    {
      q: 'What is Avaron Advisory?',
      a: 'A boutique organizational architecture firm. We diagnose and redesign the human systems that determine whether leadership performs or fails — one organization at a time.',
    },
    {
      q: "What does 'Leadership Architecture' mean?",
      a: 'Leadership Architecture refers to the underlying systems, governance structures, team dynamics, and operating cadence that enable senior executives to perform and make decisions consistently without CEO over-reliance.',
    },
    {
      q: 'Who does Avaron Advisory work with?',
      a: 'We work with CEOs, founders, family business leaders, ministers, sovereign entities, and executive teams across the Gulf, Europe, Africa, and Asia.',
    },
    {
      q: 'What is the Founder to Owner program?',
      a: 'A dedicated operational scaffolding and leadership transition program that empowers founders to step back from daily firefighting and build an autonomous C-suite that runs the company successfully.',
    },
    {
      q: 'What is the track record of the Avaron team?',
      a: 'Over 40+ combined years of experience and 5,000+ hours of executive coaching, advisory, and governance design for global technology leaders, sovereign space authorities, luxury hospitality brands, and major development firms.',
    },
    {
      q: 'Where is Avaron Advisory based?',
      a: 'Avaron operates globally with primary client advisory hubs and offices in Abu Dhabi (UAE), Amsterdam (Netherlands), and Los Angeles (USA).',
    },
    {
      q: 'How do I engage Avaron Advisory?',
      a: 'We begin every potential engagement with a confidential conversation to explore whether Avaron Advisory can create genuine, compounding value for your organization.',
    },
  ];

  return (
    <div ref={containerRef} className="bg-[#06070A] text-[#F8F6F0] font-sans w-full overflow-x-clip pt-16 md:pt-20">

      {/* ========================================================
          1. EDITORIAL HERO SECTION (LEFT CONTENT + WIDE PARALLAX SLIDER)
      ======================================================== */}
      <section className="relative w-full py-3 sm:py-5 overflow-hidden bg-[#06070A]">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between pl-4 sm:pl-6 lg:pl-8 xl:pl-10 pr-2 sm:pr-4 lg:pr-6 gap-6 lg:gap-8">
          
          {/* Left Side: Bold & Prominent Editorial Heading with Overlap */}
          <div className="w-full lg:w-[44%] xl:w-[42%] 2xl:w-[40%] shrink-0 flex flex-col justify-center py-1 sm:py-2 relative z-20 lg:-mr-14 xl:-mr-20">
            <div className="flex items-center space-x-3 mb-2.5 sm:mb-3">
              <span className="w-12 sm:w-16 h-[2.5px] rounded-l-full bg-gradient-to-r from-[#DFC38A] via-[#DFC38A]/75 to-transparent inline-block shrink-0 shadow-[0_0_8px_rgba(223,195,138,0.4)]"></span>
              <span className="font-mono text-xs sm:text-sm tracking-[0.28em] text-[#DFC38A] uppercase font-semibold">
                CEO LEADERSHIP ARCHITECTURE
              </span>
            </div>
            
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[54px] 2xl:text-[64px] leading-[1.04] text-[#F8F6F0] tracking-tight font-normal drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
              Strengthening the <br className="hidden sm:block" />
              <span className="text-[#DFC38A] italic">Leadership Ecosystem</span> <br className="hidden sm:block" />
              Around Your CEO
            </h1>

            <p className="text-stone-300 text-sm sm:text-base xl:text-lg leading-relaxed mt-3 sm:mt-4 font-light max-w-lg">
              We work with CEOs, founders, and executive teams across the Gulf, Europe, Africa, and Asia to build the leadership systems that transform strategy into results.
            </p>

            {/* CEO Quote */}
            <div className="border-l-2 border-[#DFC38A] pl-4 py-1.5 my-3.5 sm:my-4 space-y-0.5 bg-[#06070A]/80 backdrop-blur-sm max-w-lg">
              <p className="font-serif italic text-[#F8F6F0] text-sm sm:text-base xl:text-lg leading-snug">
                “My leadership team cannot execute fast enough.”
              </p>
              <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.2em] text-stone-400 uppercase block">
                CEO, Regional Conglomerate
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 pt-1">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 sm:py-3.5 bg-[#DFC38A] text-[#06070A] font-semibold text-xs sm:text-sm tracking-wider uppercase hover:bg-[#E8CE99] transition-all duration-300 shadow-[0_4px_25px_rgba(223,195,138,0.25)] group"
              >
                <span>Explore If We&apos;re a Fit</span>
                <span className="ml-2 group-hover:translate-x-1.5 transition-transform">→</span>
              </Link>
              <Link
                to="/approach"
                className="inline-flex items-center text-sm sm:text-base text-[#F8F6F0] hover:text-[#DFC38A] font-medium tracking-wide transition-colors py-1.5"
              >
                Our Approach
              </Link>
            </div>
          </div>

          {/* Right Side: Wider Parallax Slider with reduced vertical height */}
          <div className="w-full lg:w-[62%] xl:w-[64%] 2xl:w-[66%] relative z-10">
            <div className="relative w-full h-[360px] sm:h-[420px] md:h-[480px] lg:h-[520px] xl:h-[550px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
              <ParallaxStripSlider
                autoplay={true}
                autoplayInterval={5000}
                accentColor="#DFC38A"
                backgroundColor="#06070A"
                showCursor={false}
                showProgressBar={false}
                showCounter={false}
                showCaptions={false}
                showControls={true}
                className="w-full h-full"
              />
              {/* Subtle bottom gradient to blend into next section */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#06070A] to-transparent pointer-events-none z-10" />
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          2. CLIENT MARQUEE (Movable & Infinite Smooth Loop)
      ======================================================== */}
      <section className="mt-4 sm:mt-8 md:mt-10 pt-10 sm:pt-14 pb-8 sm:pb-10 bg-[#080A0F] relative z-20 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 mb-5 text-center">
          <span className="font-mono text-xs sm:text-sm tracking-[0.28em] text-stone-400 uppercase font-semibold">
            Trusted by Global Organisations
          </span>
        </div>

        {/* Left and Right Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-28 sm:w-60 bg-gradient-to-r from-[#06070A] via-[#080A0F] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-28 sm:w-60 bg-gradient-to-l from-[#06070A] via-[#080A0F] to-transparent z-10 pointer-events-none" />

        <div className="w-full overflow-hidden flex">
          <div className="animate-marquee flex items-center space-x-12 sm:space-x-16 whitespace-nowrap select-none py-1">
            {clients.map((client, idx) => (
              <div key={idx} className="flex items-center space-x-4 grayscale opacity-45 hover:grayscale-0 hover:opacity-100 transition-all duration-300 group cursor-default">
                <div className="flex items-center justify-center">
                  {client.logo}
                </div>
                <span className="font-medium">{client.name}</span>
              </div>
            ))}
          </div>
          <div className="animate-marquee flex items-center space-x-12 sm:space-x-16 whitespace-nowrap select-none py-1" aria-hidden="true">
            {clients.map((client, idx) => (
              <div key={`dup-${idx}`} className="flex items-center space-x-4 grayscale opacity-45 hover:grayscale-0 hover:opacity-100 transition-all duration-300 group cursor-default">
                <div className="flex items-center justify-center">
                  {client.logo}
                </div>
                <span className="font-medium">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          3. THE LEADERSHIP GAP (PINNED PARALLAX SCROLL)
      ======================================================== */}
      <section className="py-16 md:py-24 px-6 md:px-16 lg:px-24 bg-obsidian relative max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 relative items-start">
          
          {/* Left Fixed Center Title - Pins when reaching middle of screen and scrolls up with Point 04 */}
          <div className="lg:col-span-5 h-fit pinned-crises-left z-10 pt-2 pb-6">
            <div className="font-mono text-xs tracking-[0.2em] text-[#DFC38A] uppercase mb-3 flex items-center gap-2.5">
              <span className="w-8 h-[1.5px] bg-gradient-to-r from-[#DFC38A] to-transparent inline-block" />
              <span>The Leadership Gap</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light leading-[1.08] text-white mb-4">
              CEOs and Founders Face a Common Challenge
            </h2>

            <div className="space-y-2.5 text-stone-300 font-light leading-normal sm:leading-relaxed text-sm sm:text-base border-l-2 border-[#DFC38A]/30 pl-4 mb-6">
              <p>
                Economic transformation, AI disruption, family business succession, and talent shortages are creating leadership complexity that most organisations are not equipped to handle.
              </p>
              <p>
                Most organisations respond with training programs. Training rarely solves systemic leadership problems. What organisations need is not more training — it is leadership architecture.
              </p>
            </div>

            <Link 
              to="/approach" 
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white hover:text-[#DFC38A] transition-colors border-b border-white/30 pb-1"
            >
              <span>How We Solve It</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Right Scrolling Content */}
          <div id="crises-right-container" className="lg:col-span-7 space-y-14 sm:space-y-16 pt-2 pb-16">
            {crisisPoints.map((crisis) => (
              <div id={`crisis-item-${crisis.id}`} key={crisis.id} className="reveal-item flex flex-col md:flex-row gap-5 md:gap-8 items-start group">
                <div className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-[#DFC38A]/50 group-hover:text-[#DFC38A] transition-colors duration-500 shrink-0">
                  {crisis.id}
                </div>
                <div className="space-y-2.5 pt-0.5 flex-1">
                  <div className="font-mono text-xs uppercase tracking-wider text-[#DFC38A]">
                    <span>{crisis.title}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif text-white leading-snug">
                    "{crisis.quote}"
                  </h3>
                  <div className="font-mono text-[11px] uppercase tracking-wider text-stone-400">
                    <span className="bg-white/[0.04] px-2.5 py-1 border border-white/10 rounded inline-block">{crisis.role}</span>
                  </div>
                  <p className="text-stone-300 font-light text-sm sm:text-base leading-normal sm:leading-relaxed pt-1">
                    {crisis.description}
                  </p>
                </div>
              </div>
            ))}

            <div className="reveal-item p-6 sm:p-7 rounded-xl bg-white/[0.02] border border-[#DFC38A]/20 text-stone-300 font-serif italic text-base sm:text-lg leading-relaxed">
              "These are not isolated problems. They are symptoms of an architecture that was never designed to scale."
            </div>
          </div>
          
        </div>
      </section>

      {/* ========================================================
          4. PERFORMANCE ENVIRONMENT DIAGNOSTIC
      ======================================================== */}
      <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-[#0A0C12] border-y border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal-item space-y-4">
            <div className="inline-flex items-center gap-3 font-mono text-xs tracking-[0.3em] text-stone-300 uppercase">
              <span className="w-8 h-[1px] bg-stone-400" />
              <span>Performance Environment Diagnostic</span>
              <span className="w-8 h-[1px] bg-stone-400" />
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white leading-tight">
              Which Layer of Your Architecture Is Failing You?
            </h2>
            
            <p className="text-stone-300 font-light text-base sm:text-lg leading-relaxed pt-2">
              The Performance Environment Model pinpoints exactly where your leadership architecture is breaking down — State Management, Loyalty Architecture, or Relational Awareness. In 8 minutes, you will have a personalised diagnostic report identifying your organization's critical gap.
            </p>
          </div>

          {/* Stat Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            {pemStats.map((st, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center reveal-item">
                <div className="text-4xl sm:text-5xl font-serif text-white font-light mb-2">
                  <CounterNumber target={st.value} duration={1.6} />
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-stone-400">{st.label}</div>
              </div>
            ))}
          </div>

          {/* CTA & Microcopy */}
          <div className="text-center reveal-item space-y-3">
            <Link
              to="/assessment"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-mono text-xs uppercase tracking-widest font-bold rounded hover:bg-stone-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)]"
            >
              <span>Diagnose Your Architecture Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-xs font-mono text-stone-400 tracking-wide">
              Complimentary. Personalised. Delivered on screen immediately.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. OUR SERVICES
      ======================================================== */}
      <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-obsidian border-b border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-16 sm:mb-20 space-y-5 reveal-item px-4">
            <div className="inline-flex items-center gap-3 font-mono text-xs tracking-[0.28em] text-stone-300 uppercase">
              <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-stone-400" />
              <span>Our Services</span>
              <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-stone-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-serif font-light text-white leading-[1.15] tracking-tight">
              A Portfolio of Advisory Services Designed Around the CEO
            </h2>
            <p className="text-stone-300 font-light text-base sm:text-lg leading-relaxed max-w-3xl">
              From diagnostic assessments to long-term transformation programs, every Avaron service is designed to strengthen the leadership ecosystem that enables your organization to perform.
            </p>
          </div>

          {/* Services Grid split into Row 1 & Row 2 for Two-Stage Scroll Fall */}
          <div className="space-y-6 sm:space-y-8">
            {/* Upper 3 Cards (Row 1) */}
            <div id="services-grid-row-1" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {services.slice(0, 3).map((srv, idx) => (
                <div key={idx} className="service-card-fall-row-1 h-full">
                  <GlassCard
                    serviceNumber={`0${idx + 1} // SERVICE`}
                    title={srv.title}
                    desc={srv.desc}
                    icon={
                      idx === 0 ? Shield :
                      idx === 1 ? Users :
                      Sparkles
                    }
                    href="/services"
                  />
                </div>
              ))}
            </div>

            {/* Lower 3 Cards (Row 2) */}
            <div id="services-grid-row-2" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {services.slice(3, 6).map((srv, idx) => (
                <div key={idx + 3} className="service-card-fall-row-2 h-full">
                  <GlassCard
                    serviceNumber={`0${idx + 4} // SERVICE`}
                    title={srv.title}
                    desc={srv.desc}
                    icon={
                      idx === 0 ? Building2 :
                      idx === 1 ? Globe :
                      Compass
                    }
                    href="/services"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Centered CTA Button Below Cards */}
          <div className="mt-14 sm:mt-16 text-center reveal-item">
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/[0.04] border border-white/20 hover:border-[#DFC38A] hover:bg-[#DFC38A] hover:text-black text-[#DFC38A] font-mono text-xs uppercase tracking-widest font-bold rounded-lg transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] group"
            >
              <span>View All 10 Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================
      {/* ========================================================
          6. WHY AVARON (PINNED PARALLAX SCROLL)
      ======================================================== */}
      <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-[#08090E] border-b border-white/[0.06] relative">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative items-start">
            
            {/* Left Column: Fixed / Pinned at Screen Center */}
            <div className="lg:col-span-5 h-fit pinned-why-left z-10 pt-2 pb-6 space-y-6">
              <div className="inline-flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-stone-300 uppercase">
                <span className="w-8 h-[1px] bg-stone-400" />
                <span>Why Avaron</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white leading-[1.12] tracking-tight">
                The Difference Between Advisory and Architecture
              </h2>
              
              <div className="space-y-5 text-stone-300 font-light text-base sm:text-[16.5px] leading-relaxed pt-2 border-l border-white/15 pl-5">
                <p>
                  Most leadership advisory is episodic. A coaching session here, a workshop there. The results are temporary because the underlying systems that shape leadership behavior are never addressed.
                </p>
                <p>
                  Avaron Advisory takes a different approach. We design the leadership architecture — the systems, structures, team dynamics, and organisational conditions — that enable your CEO and executive team to perform consistently at the highest level.
                </p>
              </div>
            </div>

            {/* Right Scrolling Content - Exact same structure & animation as Section 3 */}
            <div id="pillars-right-container" className="lg:col-span-7 space-y-24 sm:space-y-32 pt-2 pb-24">
              {whyPillars.map((p) => (
                <div id={`pillar-item-${p.num}`} key={p.num} className="reveal-item flex flex-col md:flex-row gap-6 md:gap-10 items-start group">
                  <div className="text-5xl md:text-6xl font-serif font-light text-stone-600 group-hover:text-[#DFC38A] transition-colors duration-500 shrink-0">
                    {p.num}
                  </div>
                  <div className="space-y-4 pt-1 flex-1">
                    <div className="font-mono text-xs uppercase tracking-widest text-[#DFC38A] font-semibold flex items-center gap-2">
                      <span>{p.num} // PILLAR</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-white leading-snug group-hover:text-[#F0E5CC] transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-stone-300 font-light text-sm sm:text-base leading-relaxed pt-1">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          7. WHO WE SERVE
      ======================================================== */}
      <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-obsidian border-b border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto">
          {/* Centered Heading */}
          <div className="text-center max-w-4xl mx-auto mb-16 reveal-item space-y-4">
            <div className="inline-flex items-center justify-center gap-3 font-mono text-xs tracking-[0.25em] text-stone-300 uppercase">
              <span className="w-8 h-[1px] bg-stone-400" />
              <span>Who We Serve</span>
              <span className="w-8 h-[1px] bg-stone-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white leading-tight">
              We Work With Organizations Where Leadership Matters Most
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whoWeServe.map((item, idx) => (
              <div key={idx} className="p-8 sm:p-10 rounded-xl bg-white/[0.02] border border-white/[0.08] hover:border-[#DFC38A]/40 transition-all duration-300 reveal-item flex flex-col justify-between group hover:bg-white/[0.04]">
                <div>
                  <div className="inline-block px-3 py-1 rounded bg-white/[0.04] border border-white/10 text-[11px] font-mono uppercase tracking-wider text-stone-300 mb-4">
                    {item.tag}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif text-white mb-3 group-hover:text-[#F0E5CC] transition-colors">{item.title}</h3>
                  <p className="text-stone-300 font-light text-base leading-relaxed">{item.desc}</p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5">
                  <Link to={item.link} className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#DFC38A] group-hover:text-white transition-colors">
                    <span>{item.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Centered CTA Button Below Grid */}
          <div className="mt-14 sm:mt-16 text-center reveal-item">
            <Link
              to="/organizations"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/[0.04] border border-white/20 hover:border-[#DFC38A] hover:bg-[#DFC38A] hover:text-black text-[#DFC38A] font-mono text-xs uppercase tracking-widest font-bold rounded-lg transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] group"
            >
              <span>Explore Who We Serve</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================
          8. TRACK RECORD
      ======================================================== */}
      <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-[#08090E] border-b border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
            <div className="lg:col-span-7 space-y-5 reveal-item">
              <div className="inline-flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-stone-300 uppercase">
                <span className="w-8 h-[1px] bg-stone-400" />
                <span>Track Record</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white leading-tight">
                Trusted by Leaders Across the Gulf, Europe, Africa and Asia
              </h2>
              <p className="text-stone-300 font-light text-base leading-relaxed">
                Our client relationships are confidential by design. What we can share is the breadth of organisations and leaders who have trusted Avaron Advisory with their most important leadership challenges — from global technology companies and sovereign government authorities to family enterprises and major development organisations.
              </p>
              <div className="pt-2">
                <Link to="/about" className="luxury-btn !px-6 !py-3 text-xs font-mono uppercase tracking-widest">
                  About the Team
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4 reveal-item">
              {trackRecordStats.map((st, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between">
                  <div className="text-2xl sm:text-3xl font-serif text-white font-light mb-2">{st.value}</div>
                  <div className="text-xs font-mono uppercase tracking-wider text-stone-400">{st.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          9. FREQUENTLY ASKED
      ======================================================== */}
      <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-obsidian border-b border-white/[0.06]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 reveal-item space-y-3">
            <div className="inline-flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-stone-300 uppercase">
              <span className="w-8 h-[1px] bg-stone-400" />
              <span>Frequently Asked</span>
              <span className="w-8 h-[1px] bg-stone-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white">
              Questions & Strategic Clarifications
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="rounded-xl bg-white/[0.02] border border-white/[0.08] overflow-hidden transition-all duration-300 reveal-item"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors"
                  >
                    <span className="text-lg sm:text-xl font-serif text-white">{faq.q}</span>
                    <span className={`text-stone-400 font-mono text-xl transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-45' : ''}`}>
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-stone-300 font-light text-sm sm:text-base leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          10. FINAL CALL TO ACTION
      ======================================================== */}
      <section className="py-32 md:py-40 px-6 md:px-16 lg:px-24 bg-[#090B10] text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto space-y-8 reveal-item">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 font-mono text-xs text-stone-300 uppercase tracking-widest">
            <Lock className="w-3.5 h-3.5" />
            <span>Confidential Engagement</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-light text-white leading-tight">
            Is Your Organization Ready for a Different Kind of Leadership Advisory?
          </h2>

          <p className="text-stone-300 font-light text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            We begin every potential engagement with a confidential conversation. There is no obligation — only an honest exploration of whether Avaron Advisory can create genuine value for your organization.
          </p>

          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-black font-mono text-xs uppercase tracking-widest font-bold rounded hover:bg-stone-200 transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)]"
            >
              <span>Begin the Conversation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
