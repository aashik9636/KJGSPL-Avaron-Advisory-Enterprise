import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Shield,
  Clock,
  Building2,
  Mail,
  Phone,
  User,
  Briefcase,
  Layers,
  Lock,
  Printer,
  ChevronRight,
  BarChart,
  AlertTriangle,
  Award
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ConversationModal } from '../components/ConversationModal';

// 10 Core Business Systems Questions
const scorecardQuestions = [
  {
    id: 1,
    system: 'Strategy & Positioning',
    systemNumber: '01',
    question: 'How clearly does your executive team articulate your competitive moat and market positioning without CEO intervention?',
    options: [
      { label: 'Significant ambiguity; relies entirely on the Founder/CEO presence and ad-hoc direction.', score: 1, signal: 'Critical Constraint' },
      { label: 'Moderate alignment; occasional strategic drift occurs across departmental silos.', score: 3, signal: 'Emerging Stability' },
      { label: 'Total strategic clarity; autonomous execution and decision-making across all units.', score: 5, signal: 'Engineered System' },
    ],
  },
  {
    id: 2,
    system: 'Offer & Product Ecosystem',
    systemNumber: '02',
    question: 'Are your enterprise solutions and services packaged for compounding client retention and high-margin expansion?',
    options: [
      { label: 'Ad-hoc pricing, heavy custom scope on every deal, and margin compression.', score: 1, signal: 'Critical Constraint' },
      { label: 'Structured tiers with periodic margin leakage and inconsistent packaging.', score: 3, signal: 'Emerging Stability' },
      { label: 'Standardized, high-margin, scalable ecosystem with compounding lifetime value.', score: 5, signal: 'Engineered System' },
    ],
  },
  {
    id: 3,
    system: 'Sales System',
    systemNumber: '03',
    question: 'Can enterprise deals close predictably and repeatedly without the Founder/CEO personally leading conversions?',
    options: [
      { label: 'No; Founder/CEO involvement is mandatory to close and retain key accounts.', score: 1, signal: 'Critical Constraint' },
      { label: 'Senior partners handle mid-tier deals, but major contracts require Founder intervention.', score: 3, signal: 'Emerging Stability' },
      { label: 'Yes; an institutionalized enterprise sales engine that closes predictably on its own.', score: 5, signal: 'Engineered System' },
    ],
  },
  {
    id: 4,
    system: 'Marketing & Authority',
    systemNumber: '04',
    question: 'Does your brand architecture generate inbound inquiries from sovereign, institutional, and enterprise buyers?',
    options: [
      { label: 'Rely primarily on the founder\'s personal network, word of mouth, and unpredictable deal flow.', score: 1, signal: 'Critical Constraint' },
      { label: 'Periodic inbound pipeline, but lacks consistent institutional authority and positioning.', score: 3, signal: 'Emerging Stability' },
      { label: 'Dominant category authority generating steady, pre-qualified inbound enterprise interest.', score: 5, signal: 'Engineered System' },
    ],
  },
  {
    id: 5,
    system: 'Operations & Delivery',
    systemNumber: '05',
    question: 'How smoothly does client fulfillment and operational delivery scale when project volume surges 2x to 3x?',
    options: [
      { label: 'Severe delivery strain, operational fire-fighting, and escalating quality breakdowns.', score: 1, signal: 'Critical Constraint' },
      { label: 'Functional delivery, but requires extreme team overtime and continuous managerial triage.', score: 3, signal: 'Emerging Stability' },
      { label: 'Effortless scalability backed by rigorous standard operating procedures and scaffolding.', score: 5, signal: 'Engineered System' },
    ],
  },
  {
    id: 6,
    system: 'Team & Org Design',
    systemNumber: '06',
    question: 'Do executive departments and senior leaders collaborate seamlessly without political silos or territorial friction?',
    options: [
      { label: 'Frequent siloed territorial disputes, blame shifting, and delayed execution velocity.', score: 1, signal: 'Critical Constraint' },
      { label: 'Acceptable collaboration, but subtle friction and hesitation between cross-functional units.', score: 3, signal: 'Emerging Stability' },
      { label: 'High-trust, synchronized cross-functional velocity with unified leadership accountability.', score: 5, signal: 'Engineered System' },
    ],
  },
  {
    id: 7,
    system: 'Founder & Leadership Evolution',
    systemNumber: '07',
    question: 'How much of the Founder/CEO\'s time is spent on high-leverage strategic vision versus operational firefighting?',
    options: [
      { label: 'Over 60% of time trapped in daily operational firefighting, approvals, and micromanagement.', score: 1, signal: 'Critical Constraint' },
      { label: 'Balanced 50/50 between operational maintenance and strategic future positioning.', score: 3, signal: 'Emerging Stability' },
      { label: '85%+ dedicated strictly to sovereign architectural strategy, capital allocation, and governance.', score: 5, signal: 'Engineered System' },
    ],
  },
  {
    id: 8,
    system: 'Knowledge Transfer & IP',
    systemNumber: '08',
    question: 'If two key executive leaders departed tomorrow, would company operations continue completely undisrupted?',
    options: [
      { label: 'Catastrophic loss of institutional memory; knowledge is trapped in individual heads.', score: 1, signal: 'Critical Constraint' },
      { label: 'Temporary operational disruption requiring months of manual re-documentation.', score: 3, signal: 'Emerging Stability' },
      { label: 'Zero interruption; comprehensive proprietary playbooks and systematized assets.', score: 5, signal: 'Engineered System' },
    ],
  },
  {
    id: 9,
    system: 'AI & Autonomous Systems',
    systemNumber: '09',
    question: 'Have you integrated AI workflows, intelligent automation, and autonomous decision frameworks into core operations?',
    options: [
      { label: 'Virtually no automated intelligence workflows; manual spreadsheets and processes dominate.', score: 1, signal: 'Critical Constraint' },
      { label: 'Ad-hoc, isolated AI tool usage across individual team members without systemic integration.', score: 3, signal: 'Emerging Stability' },
      { label: 'Systematized AI leverage, automated execution engines, and algorithmic intelligence.', score: 5, signal: 'Engineered System' },
    ],
  },
  {
    id: 10,
    system: 'Talent & Succession Engine',
    systemNumber: '10',
    question: 'Do you have qualified, fully groomed successors prepared to assume authority across every critical leadership seat?',
    options: [
      { label: 'Zero succession bench; severe single-point-of-failure risk across all primary roles.', score: 1, signal: 'Critical Constraint' },
      { label: 'Informal candidate awareness on paper, but requiring 12+ months of emergency preparation.', score: 3, signal: 'Emerging Stability' },
      { label: 'Active, stress-tested succession pipeline ready for seamless leadership transition today.', score: 5, signal: 'Engineered System' },
    ],
  },
];

export const ScorecardPage = () => {
  // Step state: 'intake' -> 'scorecard' -> 'report'
  const [step, setStep] = useState('intake');
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isConversationOpen, setIsConversationOpen] = useState(false);

  // Form Fields
  const [formData, setFormData] = useState({
    fullName: '',
    role: '',
    companyName: '',
    email: '',
    phone: '',
  });

  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step, currentStep]);

  const handleChange = (e) => {
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

    setStep('scorecard');
    setCurrentStep(0);
  };

  const handleSelectOption = (score) => {
    const updated = { ...answers, [currentStep]: score };
    setAnswers(updated);

    if (currentStep < scorecardQuestions.length - 1) {
      setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
      }, 200);
    } else {
      setStep('report');
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#D4AF37', '#F8F6F0', '#B38F24'],
        });
      } catch (err) {
        // Confetti optional
      }
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    } else {
      setStep('intake');
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
    setStep('intake');
  };

  // Calculate results
  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
  const maxScore = scorecardQuestions.length * 5;
  const percentage = Math.round((totalScore / maxScore) * 100);

  // Identify lowest score (primary bottleneck)
  let lowestScore = 6;
  let bottleneckItem = scorecardQuestions[0];
  scorecardQuestions.forEach((q, idx) => {
    const s = answers[idx] !== undefined ? answers[idx] : 3;
    if (s < lowestScore) {
      lowestScore = s;
      bottleneckItem = q;
    }
  });

  return (
    <div className="min-h-screen bg-[#06070A] text-[#F8F6F0] pt-24 pb-20 selection:bg-amber-400 selection:text-black font-sans">
      {/* Subtle Background Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-amber-400/[0.03] blur-[140px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[350px] bg-white/[0.01] blur-[120px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ========================================================
            STEP 1: INTAKE SCREEN
        ======================================================== */}
        {step === 'intake' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-10"
          >
            {/* Header / Intro */}
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 font-mono text-xs uppercase tracking-widest font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Bottleneck Scorecard</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-serif font-light text-white leading-tight">
                Which System Is Holding Your Business Back?
              </h1>

              <p className="text-stone-300 font-sans font-light text-base sm:text-lg leading-relaxed">
                Ten questions. Three minutes. You will receive an immediate, personalised read on which of the ten core business systems is the most likely constraint on your growth.
              </p>

              <div className="inline-flex items-center gap-2 font-mono text-xs text-amber-300/90 tracking-wider">
                <span>Complimentary. No commitment required.</span>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { val: '3', label: 'Minutes' },
                { val: '10', label: 'Questions' },
                { val: '10', label: 'Core Systems' },
                { val: '1', label: 'Constraint Identified' },
              ].map((s, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#0A0C11] border border-white/[0.08] text-center">
                  <div className="text-2xl sm:text-3xl font-serif text-amber-400 font-light">{s.val}</div>
                  <div className="text-[10px] font-mono text-stone-400 uppercase tracking-widest mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Intake Form Card */}
            <div className="p-6 sm:p-10 rounded-2xl bg-[#090B10] border border-amber-400/30 shadow-2xl relative overflow-hidden">
              <form onSubmit={handleStartScorecard} className="space-y-6">
                <div className="border-b border-white/[0.08] pb-4">
                  <h2 className="text-xl sm:text-2xl font-serif font-light text-white">
                    Executive Identification
                  </h2>
                  <p className="text-xs font-mono text-stone-400 tracking-wide mt-1">
                    Please provide your details so your personalized bottleneck analysis can be configured.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Full Name * */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono uppercase tracking-wider text-stone-300">
                      Full Name <span className="text-amber-400">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className={`w-full pl-10 pr-4 py-3 bg-white/[0.03] border ${
                          formErrors.fullName ? 'border-rose-500' : 'border-white/10 focus:border-amber-400'
                        } rounded text-sm text-white placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-colors`}
                      />
                    </div>
                    {formErrors.fullName && (
                      <p className="text-xs text-rose-400 font-mono">{formErrors.fullName}</p>
                    )}
                  </div>

                  {/* Your Role */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono uppercase tracking-wider text-stone-300">
                      Your Role
                    </label>
                    <div className="relative">
                      <Briefcase className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        placeholder="e.g., Founder & CEO"
                        className="w-full pl-10 pr-4 py-3 bg-white/[0.03] border border-white/10 focus:border-amber-400 rounded text-sm text-white placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Company Name * */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono uppercase tracking-wider text-stone-300">
                      Company Name <span className="text-amber-400">*</span>
                    </label>
                    <div className="relative">
                      <Building2 className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Your company name"
                        className={`w-full pl-10 pr-4 py-3 bg-white/[0.03] border ${
                          formErrors.companyName ? 'border-rose-500' : 'border-white/10 focus:border-amber-400'
                        } rounded text-sm text-white placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-colors`}
                      />
                    </div>
                    {formErrors.companyName && (
                      <p className="text-xs text-rose-400 font-mono">{formErrors.companyName}</p>
                    )}
                  </div>

                  {/* Email Address * & Phone Number * */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono uppercase tracking-wider text-stone-300">
                        Email Address <span className="text-amber-400">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@company.com"
                          className={`w-full pl-10 pr-4 py-3 bg-white/[0.03] border ${
                            formErrors.email ? 'border-rose-500' : 'border-white/10 focus:border-amber-400'
                          } rounded text-sm text-white placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-colors`}
                        />
                      </div>
                      {formErrors.email && (
                        <p className="text-xs text-rose-400 font-mono">{formErrors.email}</p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono uppercase tracking-wider text-stone-300">
                        Phone Number <span className="text-amber-400">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+971 XX XXX XXXX"
                          className={`w-full pl-10 pr-4 py-3 bg-white/[0.03] border ${
                            formErrors.phone ? 'border-rose-500' : 'border-white/10 focus:border-amber-400'
                          } rounded text-sm text-white placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-colors`}
                        />
                      </div>
                      {formErrors.phone && (
                        <p className="text-xs text-rose-400 font-mono">{formErrors.phone}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-stone-400">
                    <Lock className="w-3.5 h-3.5 text-amber-400" />
                    <span>Confidential Diagnostic · Instant On-Screen Report</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-amber-400 hover:bg-white text-black font-mono text-xs uppercase tracking-widest font-bold rounded transition-all shadow-[0_0_25px_rgba(212,175,55,0.25)] cursor-pointer"
                  >
                    <span>Begin the Scorecard</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>

            {/* Footer IP */}
            <div className="text-center font-mono text-xs text-stone-400 pt-4">
              © 2026 Avaron Advisory · Founder to Owner Operating Systems
            </div>
          </motion.div>
        )}

        {/* ========================================================
            STEP 2: 10-QUESTION SCORECARD STEPPER
        ======================================================== */}
        {step === 'scorecard' && (
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            {/* Top Navigation & Progress */}
            <div className="space-y-4">
              <div className="flex items-center justify-between font-mono text-xs">
                <button
                  onClick={handlePrev}
                  className="inline-flex items-center gap-1.5 text-stone-400 hover:text-white transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>{currentStep === 0 ? 'Back to Intake' : 'Previous System'}</span>
                </button>

                <div className="text-stone-400">
                  <span>System </span>
                  <span className="text-amber-400 font-bold">{currentStep + 1} of {scorecardQuestions.length}</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-300 shadow-[0_0_12px_rgba(212,175,55,0.6)]"
                  style={{ width: `${((currentStep + 1) / scorecardQuestions.length) * 100}%` }}
                />
              </div>

              {/* System Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-amber-400/30 text-amber-300 text-xs font-mono uppercase tracking-widest">
                <span>SYSTEM {scorecardQuestions[currentStep].systemNumber} // {scorecardQuestions[currentStep].system}</span>
              </div>
            </div>

            {/* Question Card */}
            <div className="p-6 sm:p-10 rounded-2xl bg-[#090B10] border border-white/[0.08] shadow-2xl space-y-8">
              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl font-serif font-light text-white leading-snug">
                  {scorecardQuestions[currentStep].question}
                </h2>
              </div>

              {/* Options */}
              <div className="space-y-3.5">
                {scorecardQuestions[currentStep].options.map((option, idx) => {
                  const isSelected = answers[currentStep] === option.score;

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(option.score)}
                      className={`w-full text-left p-5 sm:p-6 rounded-xl border transition-all duration-200 cursor-pointer relative group flex items-start gap-4 ${
                        isSelected
                          ? 'bg-amber-400/10 border-amber-400 shadow-[0_0_20px_rgba(212,175,55,0.2)]'
                          : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05] hover:border-amber-400/50'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-amber-400 text-black'
                          : 'bg-white/[0.06] text-stone-400 group-hover:bg-amber-400/20 group-hover:text-amber-300'
                      }`}>
                        0{idx + 1}
                      </div>

                      <div className="flex-grow space-y-1">
                        <p className={`text-sm sm:text-base font-light leading-relaxed transition-colors ${
                          isSelected ? 'text-white' : 'text-stone-300 group-hover:text-white'
                        }`}>
                          {option.label}
                        </p>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 block">
                          Status: {option.signal}
                        </span>
                      </div>

                      <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-amber-400 shrink-0 mt-1 transition-transform group-hover:translate-x-1" />
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}

        {/* ========================================================
            STEP 3: PERSONALISED REPORT ON SCREEN
        ======================================================== */}
        {step === 'report' && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-10"
          >
            {/* Top Toolbar */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-[#090B10] border border-white/[0.08] font-mono text-xs">
              <div className="flex items-center gap-2 text-stone-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>PERSONALISED BOTTLENECK SCORECARD REPORT · REF: FO-{new Date().getFullYear()}-{(Math.random()*9000+1000).toFixed(0)}</span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Report</span>
                </button>
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/[0.04] hover:bg-white/10 text-stone-400 hover:text-white transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake</span>
                </button>
              </div>
            </div>

            {/* Main Result Card */}
            <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-[#0F121A] to-[#07080D] border border-amber-400/40 shadow-2xl space-y-8 relative overflow-hidden">
              <div className="border-b border-white/[0.08] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Immediate Diagnostic Read</span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-serif font-light text-white">
                    Founder-to-Owner Systemic Scorecard
                  </h1>
                  <p className="text-stone-300 text-sm font-light">
                    Prepared for <strong className="text-white font-medium">{formData.fullName}</strong>
                    {formData.companyName ? ` · ${formData.companyName}` : ''} ({formData.role || 'Executive Leadership'})
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-black/50 border border-white/10 text-center md:text-right shrink-0 min-w-[180px]">
                  <div className="text-[10px] font-mono text-stone-400 uppercase tracking-widest mb-1">
                    System Autonomy Index
                  </div>
                  <div className="text-4xl font-serif text-white font-light">
                    {percentage}%
                  </div>
                  <div className="text-[10px] font-mono text-amber-300 uppercase tracking-wider mt-1">
                    {percentage >= 75 ? 'Scalable Architecture' : percentage >= 50 ? 'Moderate Growth Ceiling' : 'Acute Founder Bottleneck'}
                  </div>
                </div>
              </div>

              {/* Primary Bottleneck Callout */}
              <div className="p-6 sm:p-8 rounded-xl bg-amber-400/10 border border-amber-400/30 space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-300 font-bold">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Primary Identified Bottleneck System</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-light text-white">
                  System {bottleneckItem.systemNumber}: <span className="text-amber-300">{bottleneckItem.system}</span>
                </h2>
                <p className="text-stone-300 font-sans text-sm sm:text-base font-light leading-relaxed">
                  Your business has substantial market opportunity, but the structural bottleneck in <strong className="text-white font-normal">{bottleneckItem.system}</strong> is the primary constraint limiting your scalability and preventing full founder detachment. Resolving this single leverage point will unlock immediate enterprise velocity.
                </p>
              </div>

              {/* 10 Core Systems Breakdown Grid */}
              <div className="space-y-4 pt-4">
                <div className="font-mono text-xs text-stone-400 uppercase tracking-widest">
                  10 Core Systems Maturity Breakdown:
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {scorecardQuestions.map((q, idx) => {
                    const score = answers[idx] || 3;
                    const isBottleneck = q.system === bottleneckItem.system;

                    return (
                      <div
                        key={idx}
                        className={`p-4 rounded-lg border flex items-center justify-between text-xs ${
                          isBottleneck
                            ? 'bg-amber-400/10 border-amber-400'
                            : 'bg-white/[0.02] border-white/[0.06]'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="font-mono text-stone-400 font-semibold">{q.systemNumber}</span>
                          <span className={`font-sans ${isBottleneck ? 'text-amber-300 font-medium' : 'text-stone-300'}`}>
                            {q.system}
                          </span>
                        </div>

                        <span className={`font-mono text-[10px] uppercase px-2 py-0.5 rounded ${
                          score === 5 ? 'bg-emerald-500/20 text-emerald-400' : score === 3 ? 'bg-amber-400/20 text-amber-300' : 'bg-rose-500/20 text-rose-400 font-bold'
                        }`}>
                          {score === 5 ? 'Optimized' : score === 3 ? 'Functional' : 'Bottleneck'}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Next Step CTA */}
              <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1 text-center sm:text-left">
                  <div className="text-sm font-serif text-white">
                    Ready to resolve your {bottleneckItem.system} bottleneck?
                  </div>
                  <div className="text-xs font-mono text-stone-400">
                    Schedule a 90-minute confidential diagnostic session with Avaron Advisory.
                  </div>
                </div>

                <button
                  onClick={() => setIsConversationOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-400 hover:bg-white text-black font-mono text-xs uppercase tracking-widest font-bold rounded transition-all shadow-[0_0_25px_rgba(212,175,55,0.3)] cursor-pointer"
                >
                  <span>Schedule 90-Min Diagnostic →</span>
                </button>
              </div>
            </div>

            {/* Footer IP */}
            <div className="text-center font-mono text-xs text-stone-400 pt-4">
              © 2026 Avaron Advisory · <a href="https://www.avaronadvisory.com/" target="_blank" rel="noreferrer" className="text-amber-400 hover:underline">avaronadvisory.com</a>
            </div>
          </motion.div>
        )}

      </div>

      <ConversationModal
        isOpen={isConversationOpen}
        onClose={() => setIsConversationOpen(false)}
      />
    </div>
  );
};

export default ScorecardPage;
