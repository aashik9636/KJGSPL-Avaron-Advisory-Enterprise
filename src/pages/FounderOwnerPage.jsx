import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, ArrowRight, ArrowLeft, RotateCcw, CheckCircle2, Target, 
  Clock, ShieldCheck, Check, Play, Quote, ChevronDown, Layers, 
  TrendingUp, BarChart3, Users, Zap, Building2, Wrench, Laptop, Briefcase,
  HelpCircle, ArrowUpRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const FounderOwnerPage = () => {
  const [scorecardStep, setScorecardStep] = useState('intake'); // 'intake' | 'questions' | 'results'
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [openFaqIdx, setOpenFaqIdx] = useState(null);
  
  const [formData, setFormData] = useState({
    fullName: '',
    role: '',
    companyName: '',
    email: '',
    phone: '',
  });
  const [formErrors, setFormErrors] = useState({});

  const scorecardRef = useRef(null);

  const scrollToScorecard = () => {
    scorecardRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (formErrors[e.target.name]) {
      setFormErrors({ ...formErrors, [e.target.name]: null });
    }
  };

  const handleStartScorecard = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = 'Full name is required';
    if (!formData.companyName.trim()) errors.companyName = 'Company name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errors.email = 'Valid business email is required';
    if (!formData.phone.trim()) errors.phone = 'Phone number is required';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setScorecardStep('questions');
    setCurrentStep(0);
  };

  const questions = [
    {
      id: 1,
      system: 'Strategy & Positioning',
      question: 'How clearly does your executive team articulate your competitive advantage without CEO presence?',
      options: [
        { label: 'Significant ambiguity; relies entirely on CEO presence.', score: 1 },
        { label: 'Moderate alignment; occasional strategic drift.', score: 3 },
        { label: 'Total clarity; autonomous execution across all business units.', score: 5 },
      ],
    },
    {
      id: 2,
      system: 'Offer & Product Ecosystem',
      question: 'Are your solutions packaged for compounding enterprise retention and high-margin expansion?',
      options: [
        { label: 'Ad-hoc pricing and custom scope every deal.', score: 1 },
        { label: 'Structured tiers with occasional margin leakage.', score: 3 },
        { label: 'Standardized, high-margin, scalable ecosystem.', score: 5 },
      ],
    },
    {
      id: 3,
      system: 'Sales System',
      question: 'Can deals close predictably without the founder/CEO personally leading discussions?',
      options: [
        { label: 'No; founder/CEO is required for key conversions.', score: 1 },
        { label: 'Sometimes; senior partners handle mid-tier deals.', score: 3 },
        { label: 'Yes; institutionalized enterprise sales machine.', score: 5 },
      ],
    },
    {
      id: 4,
      system: 'Marketing & Lead Generation',
      question: 'Does your lead generation engine produce predictable inbound demand across dedicated channels?',
      options: [
        { label: 'Rely primarily on personal network and word of mouth.', score: 1 },
        { label: 'Periodic inbound flow with irregular consistency.', score: 3 },
        { label: 'Dominant category authority with steady inbound dealflow.', score: 5 },
      ],
    },
    {
      id: 5,
      system: 'Operations & Delivery',
      question: 'How smoothly does fulfillment scale when client volume surges 2x to 3x?',
      options: [
        { label: 'Severe delivery strain and quality breakdowns.', score: 1 },
        { label: 'Functional but requires extreme founder/team overtime.', score: 3 },
        { label: 'Effortless scalability with robust standard operating procedures.', score: 5 },
      ],
    },
    {
      id: 6,
      system: 'Team & Organisational Design',
      question: 'Do executive departments collaborate seamlessly with clear role accountability and compensation?',
      options: [
        { label: 'Frequent role confusion and founder micromanagement.', score: 1 },
        { label: 'Acceptable collaboration with sporadic friction.', score: 3 },
        { label: 'High-trust, autonomous cross-functional velocity.', score: 5 },
      ],
    },
    {
      id: 7,
      system: 'Leadership & Founder Development',
      question: 'How much of the founder’s time is spent on long-term architecture vs. daily firefighting?',
      options: [
        { label: 'Over 60% spent on daily firefighting and operational crises.', score: 1 },
        { label: 'Balanced 50/50 between operations and strategy.', score: 3 },
        { label: '85%+ dedicated to long-term capital and strategic ownership.', score: 5 },
      ],
    },
    {
      id: 8,
      system: 'Knowledge Transfer',
      question: 'Is tacit founder knowledge codified into transferable systems that enable others to deliver?',
      options: [
        { label: 'Locked in founder’s head; catastrophic if key person departs.', score: 1 },
        { label: 'Partially documented with manual training required.', score: 3 },
        { label: 'Fully codified playbooks and autonomous execution.', score: 5 },
      ],
    },
    {
      id: 9,
      system: 'AI & Automation',
      question: 'Have you integrated AI workflows and automated pipelines into daily operations?',
      options: [
        { label: 'Virtually no automated workflows.', score: 1 },
        { label: 'Ad-hoc usage across individual team members.', score: 3 },
        { label: 'Institutionalized AI leverage across all core functions.', score: 5 },
      ],
    },
    {
      id: 10,
      system: 'Talent & Capability Engine',
      question: 'Do you have ongoing capability development and coaching to groom leaders from within?',
      options: [
        { label: 'Zero pipeline; single-point-of-failure across key roles.', score: 1 },
        { label: 'Informal training with inconsistent progression.', score: 3 },
        { label: 'Active, high-performing talent engine and succession bench.', score: 5 },
      ],
    },
  ];

  const handleSelectOption = (score) => {
    const newAnswers = { ...answers, [currentStep]: score };
    setAnswers(newAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#D4AF37', '#F8F6F0', '#A37F1C'],
        });
      } catch (e) {}
    }
  };

  const calculateResults = () => {
    const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
    const maxScore = questions.length * 5;
    const percentage = Math.round((totalScore / maxScore) * 100);

    let lowestScore = 6;
    let bottleneckSystem = questions[0].system;
    questions.forEach((q, idx) => {
      const score = answers[idx] || 3;
      if (score < lowestScore) {
        lowestScore = score;
        bottleneckSystem = q.system;
      }
    });

    return { totalScore, maxScore, percentage, bottleneckSystem };
  };

  const results = isCompleted ? calculateResults() : null;

  const coreSystems = [
    { roman: 'I', title: 'Strategy & Positioning', desc: 'Market position, ideal client definition, three-year direction.' },
    { roman: 'II', title: 'Offer & Product Ecosystem', desc: 'Tiered offers, pricing architecture, productisation.' },
    { roman: 'III', title: 'Sales System', desc: 'Pipeline, scripts, CRM, close-rate management.' },
    { roman: 'IV', title: 'Marketing & Lead Generation', desc: 'Content engine, channels, funnel design.' },
    { roman: 'V', title: 'Operations & Delivery', desc: 'Standard operating procedures, quality, consistency.' },
    { roman: 'VI', title: 'Team & Organisational Design', desc: 'Roles, accountability, hiring, compensation.' },
    { roman: 'VII', title: 'Leadership & Founder Development', desc: 'Decision frameworks, delegation, time architecture.' },
    { roman: 'VIII', title: 'Knowledge Transfer', desc: 'Tacit knowledge codified into transferable systems.' },
    { roman: 'IX', title: 'AI & Automation', desc: 'Workflow augmentation across all functions.' },
    { roman: 'X', title: 'Talent & Capability Engine', desc: 'Training, coaching, capability development.' },
  ];

  const whyPillars = [
    {
      num: '01',
      title: 'Architecture, Not Coaching',
      desc: 'We design the systems and disciplines that allow the business to operate without the founder in the middle of every decision — not motivational sessions that fade within weeks.',
    },
    {
      num: '02',
      title: 'Diagnostic-Led Sequencing',
      desc: 'Every engagement begins with a comprehensive diagnostic of all ten systems. The build sequence is determined by what your business actually needs — not a generic curriculum.',
    },
    {
      num: '03',
      title: 'Senior-Led, AI-Augmented',
      desc: 'Every diagnostic and strategic session is led by a senior consultant. AI augmentation accelerates documentation, analysis, and delivery — producing more, faster, without sacrificing depth.',
    },
    {
      num: '04',
      title: 'Built for the GCC',
      desc: 'Deep understanding of the regulatory, cultural, and market dynamics specific to founder-led businesses in the UAE and wider Gulf region. Not a Western framework imposed on a different context.',
    },
  ];

  const clientProfiles = [
    {
      icon: Briefcase,
      title: 'Professional & Business Services',
      desc: 'Founders of agencies, consultancies, accounting firms, legal practices, and other service businesses. The founder is the product — and the bottleneck. Annual revenue between AED 500K and AED 3M, teams of 1–15.',
    },
    {
      icon: Laptop,
      title: 'Technology & Digital',
      desc: 'Founders of web and app development agencies, SaaS companies, IT services, e-commerce operations, and digital products. Excellent at building for clients — less so at building their own operating model.',
    },
    {
      icon: Wrench,
      title: 'Trades & Technical Services',
      desc: 'Founders of plumbing, electrical, HVAC, maintenance, cleaning, and specialist trade businesses. Technically excellent operators ready to build a business that runs without them on every site.',
    },
  ];

  const evidenceStats = [
    {
      value: '+80%',
      label: 'Revenue Increase',
      source: 'Bruhn, Karlan & Schoar RCT, 432 SMEs (2013)',
    },
    {
      value: '+120%',
      label: 'Profit Improvement',
      source: 'Same RCT — gains exceeded cost',
    },
    {
      value: '+30%',
      label: 'Productivity Gains',
      source: 'Meta-analysis, 62 SME studies',
    },
    {
      value: '+92%',
      label: 'Revenue Growth',
      source: 'Structured L&D, multi-year empirical study',
    },
  ];

  const faqs = [
    {
      q: 'What is the Founder to Owner program?',
      a: 'Founder to Owner is a twelve-month transformation program for founders running profitable but plateaued businesses in the GCC. We rebuild the ten core systems that allow your business to scale beyond your personal capacity — so you stop being the bottleneck and start being the owner.',
    },
    {
      q: 'Who is this program for?',
      a: 'It is tailored for founders of businesses with AED 500K to AED 30M+ revenue who are operating as the central bottleneck for sales, delivery, or key decisions, and are ready to transition into true ownership.',
    },
    {
      q: 'How is this different from CEO Advisory?',
      a: 'CEO Advisory is an ongoing strategic sounding board and governance counsel for active corporate and sovereign leaders. Founder to Owner is a structured system-building architecture program that systematically rebuilds ten foundational operational systems.',
    },
    {
      q: 'Can the program be delivered remotely?',
      a: 'Yes, the program combines high-intensity virtual diagnostic sessions, asynchronous AI-augmented system buildouts, and in-person quarterly milestone reviews across the GCC.',
    },
    {
      q: 'What is the investment?',
      a: 'Pricing depends on cohort placement and business scope. Each cohort is strictly limited in size to maintain depth of engagement, and the first five places in each cohort carry an introductory rate.',
    },
    {
      q: 'How do I know if it’s a fit?',
      a: 'Start with the 3-minute Bottleneck Scorecard. If your diagnostic indicates structural readiness, you will be invited to a 90-minute confidential diagnostic with a senior consultant.',
    },
    {
      q: 'How do I systemise my business so it runs without me?',
      a: 'By codifying tacit founder knowledge into standard operating procedures, installing autonomous decision-making thresholds, and building tier-2 executive leadership capabilities.',
    },
    {
      q: 'I feel like I’m burning out. Is this programme relevant for me?',
      a: 'Yes. Founder burnout is a classic symptom of an operating model that relies on personal heroics rather than institutional architecture. Our primary goal is reclaiming your time while accelerating enterprise growth.',
    },
    {
      q: 'What is the founder mindset shift required to scale a business?',
      a: 'The transition from "doing the work" to "architecting the system that does the work"—shifting focus from tactical firefighting to capital allocation, culture, and governance.',
    },
  ];

  return (
    <div className="bg-[#06070A] text-[#F8F6F0] pt-16 md:pt-20 min-h-screen">
      
      {/* 1. PANORAMIC HERO (FULL BREADTH IMAGE WITH CENTERED TEXT BELOW) */}
      <section className="relative w-full flex flex-col items-center justify-start pb-16 md:pb-24 overflow-hidden bg-[#06070A]">
        
        {/* Panoramic Image Banner with Left & Right Spacing (No Border) */}
        <div className="w-full max-w-[90rem] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 pt-2 sm:pt-4">
          <div className="relative w-full h-[360px] sm:h-[440px] md:h-[500px] lg:h-[550px] xl:h-[580px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
            <img
              src="/images/FounderOwnerHero.png"
              alt="From doing the work to owning the business"
              className="w-full h-full object-cover object-center brightness-110 contrast-105 saturate-105"
            />
            {/* Deep smooth bottom vignette to keep floor reflection subtle and dark behind text */}
            <div className="absolute bottom-0 left-0 right-0 h-40 sm:h-52 md:h-64 bg-gradient-to-t from-[#06070A] via-[#06070A]/80 via-45% to-transparent pointer-events-none" />
          </div>
        </div>

        {/* TEXT CONTENT BELOW THE IMAGE (WITH DARK VIGNETTE BACKDROP) */}
        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 md:px-12 w-full -mt-4 sm:-mt-6 md:-mt-8 flex flex-col items-center text-center space-y-4 sm:space-y-5">

          {/* Centered & Bold Heading - Single Line with Dark Backing */}
          <div className="relative inline-block">
            <div className="absolute -inset-x-12 -inset-y-4 bg-[#06070A]/80 blur-xl pointer-events-none -z-10" />
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[54px] font-serif font-semibold text-white leading-tight tracking-tight drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)] max-w-6xl mx-auto">
              From Doing the Work <span className="text-[#DFC38A] italic font-bold">to Owning the Business</span>
            </h1>
          </div>

          {/* Centered Description */}
          <p className="text-base sm:text-lg md:text-xl font-serif text-stone-300 leading-relaxed font-light max-w-3xl mx-auto px-4">
            Founder to Owner is a twelve-month transformation program for founders running profitable but plateaued businesses in the GCC. We rebuild the ten core systems that allow your business to scale beyond your personal capacity — so you stop being the bottleneck and start being the owner.
          </p>

          {/* CTA Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={scrollToScorecard}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#DFC38A] text-black font-mono text-xs uppercase tracking-widest font-bold rounded-lg hover:bg-[#F0E5CC] transition-all shadow-[0_0_25px_rgba(223,195,138,0.3)] hover:scale-[1.02] cursor-pointer"
            >
              <span>Take the Bottleneck Scorecard</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#architecture"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/20 text-stone-300 font-mono text-xs uppercase tracking-widest hover:border-[#DFC38A]/50 hover:text-white transition-all rounded-lg"
            >
              <span>Explore the Program</span>
            </a>
          </div>

        </div>
      </section>

      {/* 2. THE PROGRAMME EXPLAINED (VIDEO / OVERVIEW) */}
      <section className="py-12 md:py-16 bg-[#08090D] border-b border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl bg-gradient-to-b from-[#11141E] to-[#080A0F] border border-white/10 p-5 sm:p-7 shadow-2xl space-y-5">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-2 max-w-xl">
                <div className="inline-flex items-center gap-2 font-mono text-[11px] text-amber-400 uppercase tracking-widest font-semibold bg-amber-400/10 px-2.5 py-0.5 rounded">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  The Programme Explained
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-white">
                  Watch: From Founder to Owner
                </h2>
                <p className="text-stone-400 font-light text-xs sm:text-sm leading-relaxed">
                  A short overview of the programme, the transformation it delivers, and the assessment that starts your journey.
                </p>
              </div>

              <div className="font-mono text-[11px] text-stone-400 bg-white/[0.03] px-3 py-1 rounded border border-white/10 self-start md:self-auto shrink-0">
                Duration: 03:45 · Executive Overview
              </div>
            </div>

            {/* Video Container */}
            <div className="relative aspect-video rounded-xl overflow-hidden bg-black/90 border border-amber-400/30 shadow-[0_0_25px_rgba(212,175,55,0.12)] flex items-center justify-center group">
              <video
                id="programme-video"
                controls
                playsInline
                preload="metadata"
                className="w-full h-full object-cover rounded-xl"
              >
                <source src="/videos/founder_owner.mp4" type="video/mp4" />
                <source src="/videos/founder-to-owner.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE STAGE YOU'RE IN (FOUNDER FRUSTRATIONS) */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.28em] uppercase text-amber-400 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            The Stage You're In
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white leading-tight">
            Founders Across the GCC Hit the Same Wall.
          </h2>
          <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed">
            There is a stage in every founder-led business at which the operating model that produced the early success becomes the constraint on future success. Revenue plateaus. Margin compresses. Time disappears. The founder works harder, and the business grows slower.
          </p>
          <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed">
            Most founders respond by trying to push through with more effort. Effort rarely solves a structural problem. What founders need is not more hustle — it is a different operating architecture.
          </p>
        </div>

        {/* 4 Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { quote: "I haven't taken a real holiday in three years.", author: "Founder, Professional Services Firm" },
            { quote: "The business doesn't run when I'm not there.", author: "Founder, Trades & Technical Services" },
            { quote: "Every deal still needs me on the call.", author: "Founder, B2B Consultancy" },
            { quote: "I hire people and end up doing the work anyway.", author: "Founder, Digital Agency" },
          ].map((item, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-xl bg-gradient-to-b from-[#11141E] to-[#0A0C12] border border-white/[0.08] hover:border-amber-400/40 transition-all duration-300 space-y-4"
            >
              <Quote className="w-6 h-6 text-amber-400" />
              <p className="text-lg sm:text-xl font-serif italic text-white leading-relaxed">
                "{item.quote}"
              </p>
              <div className="font-mono text-xs text-amber-400 tracking-wider">
                — {item.author}
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 rounded-xl bg-amber-400/[0.06] border border-amber-400/20 text-center max-w-3xl mx-auto">
          <p className="font-serif italic text-base sm:text-lg text-amber-200">
            "These are not isolated frustrations. They are symptoms of a business that grew faster than its operating systems. We rebuild the systems."
          </p>
        </div>
      </section>

      {/* 4. THE BOTTLENECK SCORECARD (INTERACTIVE TOOL) */}
      <section id="scorecard" ref={scorecardRef} className="py-24 bg-[#08090E] border-t border-b border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          {/* Header & Badges */}
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-amber-400 uppercase tracking-widest font-semibold bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/30">
              <Sparkles className="w-3.5 h-3.5" />
              The Bottleneck Scorecard
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white leading-tight">
              Which System Is Holding Your Business Back?
            </h2>
            <p className="text-stone-300 font-light text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Ten questions. Three minutes. You will receive an immediate, personalised read on which of the ten core business systems is the most likely constraint on your growth.
            </p>
            <p className="text-amber-200/90 font-serif italic text-sm sm:text-base">
              Complimentary. No commitment required.
            </p>

            {/* 4 Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
              {[
                { val: '3', label: 'Minutes' },
                { val: '10', label: 'Questions' },
                { val: '10', label: 'Core Systems' },
                { val: '1', label: 'Critical Bottleneck Identified' },
              ].map((s, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-black/40 border border-white/[0.08]">
                  <div className="text-2xl sm:text-3xl font-serif text-amber-400 font-medium">{s.val}</div>
                  <div className="text-[11px] font-mono text-stone-300 uppercase tracking-wider mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Card */}
          <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-b from-[#11141E] to-[#0A0C12] border border-amber-400/40 shadow-2xl">
            {scorecardStep === 'intake' && (
              <form onSubmit={handleStartScorecard} className="space-y-6">
                <div className="border-b border-white/[0.08] pb-4">
                  <h3 className="text-2xl font-serif text-white font-light">
                    Before we begin, tell us about your business
                  </h3>
                  <p className="text-xs font-mono text-stone-400 tracking-wide mt-1">
                    Your answers will be mapped to deliver a custom bottleneck diagnosis immediately on screen.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Full Name * */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono uppercase tracking-wider text-stone-300">
                      Full Name <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleFormChange}
                      placeholder="Your full name"
                      className={`w-full px-4 py-3 bg-white/[0.03] border ${
                        formErrors.fullName ? 'border-rose-500' : 'border-white/10 focus:border-amber-400'
                      } rounded text-sm text-white placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-colors`}
                    />
                    {formErrors.fullName && <p className="text-xs text-rose-400 font-mono">{formErrors.fullName}</p>}
                  </div>

                  {/* Your Role */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono uppercase tracking-wider text-stone-300">
                      Your Role
                    </label>
                    <input
                      type="text"
                      name="role"
                      value={formData.role}
                      onChange={handleFormChange}
                      placeholder="e.g., Founder & CEO"
                      className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 focus:border-amber-400 rounded text-sm text-white placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-colors"
                    />
                  </div>

                  {/* Company Name * */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono uppercase tracking-wider text-stone-300">
                      Company Name <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleFormChange}
                      placeholder="Your company name"
                      className={`w-full px-4 py-3 bg-white/[0.03] border ${
                        formErrors.companyName ? 'border-rose-500' : 'border-white/10 focus:border-amber-400'
                      } rounded text-sm text-white placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-colors`}
                    />
                    {formErrors.companyName && <p className="text-xs text-rose-400 font-mono">{formErrors.companyName}</p>}
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono uppercase tracking-wider text-stone-300">
                        Email Address <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        placeholder="your@company.com"
                        className={`w-full px-4 py-3 bg-white/[0.03] border ${
                          formErrors.email ? 'border-rose-500' : 'border-white/10 focus:border-amber-400'
                        } rounded text-sm text-white placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-colors`}
                      />
                      {formErrors.email && <p className="text-xs text-rose-400 font-mono">{formErrors.email}</p>}
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono uppercase tracking-wider text-stone-300">
                        Phone Number <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleFormChange}
                        placeholder="+971 XX XXX XXXX"
                        className={`w-full px-4 py-3 bg-white/[0.03] border ${
                          formErrors.phone ? 'border-rose-500' : 'border-white/10 focus:border-amber-400'
                        } rounded text-sm text-white placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-colors`}
                      />
                      {formErrors.phone && <p className="text-xs text-rose-400 font-mono">{formErrors.phone}</p>}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-end">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-400 hover:bg-white text-black font-mono text-xs uppercase tracking-widest font-bold rounded transition-all shadow-[0_0_20px_rgba(212,175,55,0.25)] cursor-pointer"
                  >
                    <span>Begin the Scorecard</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}

            {scorecardStep === 'questions' && (
              <div>
                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between font-mono text-xs text-stone-400 mb-2">
                    <span className="text-amber-400 font-bold">Question {currentStep + 1} of {questions.length}</span>
                    <span className="font-semibold text-stone-300">{questions[currentStep].system}</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-amber-400 transition-all duration-300"
                      style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Question */}
                <h3 className="text-xl sm:text-2xl font-serif text-white mb-8 leading-snug">
                  {questions[currentStep].question}
                </h3>

                {/* Options */}
                <div className="space-y-3 mb-8">
                  {questions[currentStep].options.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(opt.score)}
                      className="w-full text-left p-4 sm:p-5 bg-white/[0.03] border border-white/10 hover:border-amber-400 hover:bg-white/[0.06] transition-all flex items-center justify-between group rounded-xl cursor-pointer"
                    >
                      <span className="text-sm sm:text-base font-sans font-light text-stone-300 group-hover:text-white">
                        {opt.label}
                      </span>
                      <ArrowRight className="w-4 h-4 text-stone-500 group-hover:text-amber-400 ml-4 shrink-0 transition-transform group-hover:translate-x-1" />
                    </button>
                  ))}
                </div>

                {/* Back Button */}
                <button
                  onClick={() => {
                    if (currentStep > 0) setCurrentStep(currentStep - 1);
                    else setScorecardStep('intake');
                  }}
                  className="flex items-center gap-1.5 font-mono text-xs text-stone-400 hover:text-white uppercase font-semibold cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  {currentStep > 0 ? 'Previous Question' : 'Back to Intake'}
                </button>
              </div>
            )}

            {scorecardStep === 'results' && isCompleted && (
              /* Results Screen */
              <div className="text-center py-6 space-y-6">
                <div className="inline-flex items-center gap-2 font-mono text-xs text-amber-400 uppercase tracking-widest px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  Diagnostic Complete
                </div>

                <h3 className="text-4xl font-serif text-white">
                  Architecture Score: <span className="text-amber-300 font-semibold">{results.percentage}%</span>
                </h3>

                <div className="p-6 bg-black/60 border border-amber-400/30 text-left space-y-3 rounded-xl">
                  <div className="font-mono text-xs text-amber-400 uppercase tracking-wider font-semibold">
                    Primary Identified Friction Vector:
                  </div>
                  <div className="text-2xl font-serif text-white font-medium">
                    {results.bottleneckSystem}
                  </div>
                  <p className="text-sm font-sans text-stone-300 font-light leading-relaxed">
                    Prepared for <strong>{formData.fullName}</strong>{formData.companyName ? ` (${formData.companyName})` : ''}. Your business possesses strong growth potential, but operational constraints in <strong>{results.bottleneckSystem}</strong> limit your executive throughput and hold you back from true founder detachment.
                  </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded bg-amber-400 text-black font-mono text-xs uppercase tracking-wider font-bold hover:bg-amber-300 transition-all shadow-[0_0_25px_rgba(212,175,55,0.3)]"
                  >
                    <span>Schedule 90-Min Diagnostic</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <button
                    onClick={() => {
                      setAnswers({});
                      setCurrentStep(0);
                      setIsCompleted(false);
                      setScorecardStep('intake');
                    }}
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded border border-white/20 text-stone-300 font-mono text-xs uppercase tracking-wider hover:border-amber-400 hover:text-white transition-all cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Retake Scorecard
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 5. THE ARCHITECTURE (TEN CORE SYSTEMS) */}
      <section id="architecture" className="py-24 max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-3.5 font-mono text-xs tracking-[0.28em] uppercase text-amber-400 font-semibold">
            <span className="w-8 h-[1.5px] bg-gradient-to-r from-transparent to-amber-400" />
            <span>The Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white leading-tight">
            Ten Core Systems. One Operating Model.
          </h2>
          <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed">
            Every business that scales beyond its founder runs on the same ten systems. We diagnose where yours are working, where they're failing, and rebuild them in the order your business actually requires. The sequence is determined by your diagnostic — not by a generic playbook.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {coreSystems.map((sys) => (
            <div
              key={sys.roman}
              className="p-6 rounded-xl bg-gradient-to-b from-[#11141E] to-[#0A0C12] border border-white/[0.08] hover:border-amber-400/40 transition-all duration-300 space-y-3 group"
            >
              <div className="font-mono text-xs text-amber-400 font-bold group-hover:text-amber-300 transition-colors">
                {sys.roman}
              </div>
              <h3 className="text-base font-serif text-white font-medium group-hover:text-amber-200 transition-colors">
                {sys.title}
              </h3>
              <p className="text-xs font-light text-stone-400 leading-relaxed">
                {sys.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. WHY AVARON (COACHING VS ARCHITECTURE) */}
      <section className="py-24 bg-[#08090D] border-t border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-3.5 font-mono text-xs tracking-[0.28em] uppercase text-amber-400 font-semibold">
              <span className="w-8 h-[1.5px] bg-gradient-to-r from-transparent to-amber-400" />
              <span>Why Avaron</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white leading-tight">
              The Difference Between Coaching and Architecture.
            </h2>
            <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed">
              Most founder-development work is coaching: conversations, mindset shifts, accountability. The conversations are valuable. The results often fade because the underlying business systems that shape founder behaviour are never addressed.
            </p>
            <p className="text-amber-200 font-serif italic text-base sm:text-lg">
              "Avaron Advisory takes a different approach. We design the operating architecture — the systems, structures, processes, and capability — that allows the founder to step out of the daily grind and into the role of owner. Architecture, not coaching."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyPillars.map((p) => (
              <div 
                key={p.num}
                className="p-8 rounded-xl bg-gradient-to-b from-[#11141E] to-[#0A0C12] border border-white/[0.08] hover:border-[#DFC38A]/40 transition-all duration-300 space-y-3 shadow-lg"
              >
                <div className="font-mono text-xs text-[#DFC38A] font-bold">{p.num}</div>
                <h3 className="text-xl font-serif text-white">{p.title}</h3>
                <p className="text-sm font-light text-stone-400 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHO WE WORK WITH */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-3.5 font-mono text-xs tracking-[0.28em] uppercase text-amber-400 font-semibold">
            <span className="w-8 h-[1.5px] bg-gradient-to-r from-transparent to-amber-400" />
            <span>Who We Work With</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white leading-tight">
            Founders Building the Next Stage.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clientProfiles.map((cp, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-xl bg-gradient-to-b from-[#11141E] to-[#0A0C12] border border-white/[0.08] hover:border-amber-400/40 transition-all duration-300 space-y-4 group"
            >
              <div className="w-12 h-12 rounded-lg bg-stone-900 border border-white/10 flex items-center justify-center text-amber-400 group-hover:border-amber-400/40 transition-colors">
                {React.createElement(cp.icon, { className: 'w-6 h-6' })}
              </div>
              <h3 className="text-xl font-serif text-white group-hover:text-amber-200 transition-colors">
                {cp.title}
              </h3>
              <p className="text-xs sm:text-sm font-light text-stone-400 leading-relaxed">
                {cp.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="pt-2 text-center">
          <Link
            to="/organizations"
            className="inline-flex items-center gap-2 text-amber-300 hover:text-white font-mono text-xs uppercase tracking-widest font-semibold transition-colors"
          >
            <span>See All Twelve Industries We Serve</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 8. THE EVIDENCE (PEER-REVIEWED RESEARCH) */}
      <section className="py-24 bg-[#08090D] border-t border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-3.5 font-mono text-xs tracking-[0.28em] uppercase text-amber-400 font-semibold">
              <span className="w-8 h-[1.5px] bg-gradient-to-r from-transparent to-amber-400" />
              <span>The Evidence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white leading-tight">
              Validated by Peer-Reviewed Research.
            </h2>
            <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed">
              Our methodology is built on findings from randomised controlled trials, meta-analyses, and longitudinal studies of small and medium enterprise interventions. The numbers below are not aspirational — they are the documented outcomes of structured consulting in firms similar to ours.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {evidenceStats.map((ev, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-xl bg-gradient-to-b from-[#11141E] to-[#0A0C12] border border-white/[0.08] hover:border-[#DFC38A]/30 transition-all duration-300 flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="text-4xl sm:text-5xl font-serif text-amber-400 font-light mb-2">
                    {ev.value}
                  </div>
                  <div className="text-sm font-mono text-white font-semibold uppercase tracking-wider mb-4">
                    {ev.label}
                  </div>
                </div>
                <p className="text-xs font-light text-stone-500 leading-relaxed border-t border-white/[0.06] pt-3">
                  {ev.source}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-24 max-w-4xl mx-auto px-6 md:px-12 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-mono tracking-[0.28em] text-amber-400 uppercase font-semibold">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-white">
            Questions About the Program.
          </h2>
        </div>

        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {faqs.map((faq, fIdx) => {
            const isFaqOpen = openFaqIdx === fIdx;
            return (
              <div key={fIdx} className="py-6 transition-colors">
                <button
                  onClick={() => setOpenFaqIdx(isFaqOpen ? null : fIdx)}
                  className="w-full flex items-center justify-between text-left group gap-4 cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-serif text-white group-hover:text-amber-300 transition-colors">
                    {faq.q}
                  </span>
                  <span className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-amber-400 group-hover:border-amber-400 transition-colors shrink-0">
                    <span className="text-lg font-mono leading-none">
                      {isFaqOpen ? '−' : '+'}
                    </span>
                  </span>
                </button>

                {isFaqOpen && (
                  <div className="mt-4 pt-4 text-xs sm:text-sm font-light text-stone-300 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 10. CLOSING ACTION CTA */}
      <section className="py-28 bg-gradient-to-b from-[#08090D] to-[#040507] text-center border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <div className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.25em] text-amber-400 uppercase font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            Immediate Diagnostic
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-light text-white">
            Three Minutes Is the Entire Ask.
          </h2>

          <p className="text-stone-300 font-serif italic text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Take the Bottleneck Scorecard. Ten questions about your business. You will receive an immediate read on which of the ten systems is most likely the constraint on your growth. There is no commitment after.
          </p>

          <p className="text-stone-400 font-light text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            If the result resonates, the next conversation is a 90-minute Bottleneck Diagnostic with a senior consultant. You leave with a written report — whether or not we work together.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToScorecard}
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber-400 text-black font-mono text-xs uppercase tracking-widest font-bold rounded hover:bg-amber-300 transition-all shadow-[0_0_25px_rgba(212,175,55,0.3)] cursor-pointer"
            >
              <span>Take the Bottleneck Scorecard →</span>
            </button>
          </div>

          <p className="text-[11px] font-mono text-stone-500 max-w-md mx-auto pt-2">
            Each cohort is limited in size. The first five places in each cohort carry an introductory rate. Once those are filled, the standard rate applies.
          </p>
        </div>
      </section>
    </div>
  );
};
