import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Sparkles,
  User,
  Briefcase,
  Building2,
  Mail,
  Phone,
  Lock,
  AlertTriangle
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const ScorecardModal = ({ isOpen, onClose, onOpenConversation }) => {
  // Step: 'intake' | 'scorecard' | 'report'
  const [modalStep, setModalStep] = useState('intake');
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [formData, setFormData] = useState({
    fullName: '',
    role: '',
    companyName: '',
    email: '',
    phone: '',
  });
  const [formErrors, setFormErrors] = useState({});

  const questions = [
    {
      id: 1,
      system: 'Strategy & Positioning',
      systemNumber: '01',
      question: 'How clearly does your executive team articulate your competitive moat without CEO intervention?',
      options: [
        { label: 'Significant ambiguity; relies entirely on CEO presence.', score: 1 },
        { label: 'Moderate alignment; occasional strategic drift.', score: 3 },
        { label: 'Total clarity; autonomous execution across all units.', score: 5 },
      ],
    },
    {
      id: 2,
      system: 'Offer & Product Ecosystem',
      systemNumber: '02',
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
      systemNumber: '03',
      question: 'Can multi-million dollar deals close predictably without the CEO personally leading discussions?',
      options: [
        { label: 'No; founder/CEO is required for key conversions.', score: 1 },
        { label: 'Sometimes; senior partners handle mid-tier deals.', score: 3 },
        { label: 'Yes; institutionalized enterprise sales machine.', score: 5 },
      ],
    },
    {
      id: 4,
      system: 'Marketing & Authority',
      systemNumber: '04',
      question: 'Does your executive brand generate inbound inquiries from sovereign and enterprise buyers?',
      options: [
        { label: 'Rely primarily on personal network and word of mouth.', score: 1 },
        { label: 'Periodic inbound flow with irregular consistency.', score: 3 },
        { label: 'Dominant category authority with steady inbound dealflow.', score: 5 },
      ],
    },
    {
      id: 5,
      system: 'Operations & Delivery',
      systemNumber: '05',
      question: 'How smoothly does fulfillment scale when client volume surges 2x to 3x?',
      options: [
        { label: 'Severe delivery strain and quality breakdowns.', score: 1 },
        { label: 'Functional but requires extreme team overtime.', score: 3 },
        { label: 'Effortless scalability with robust operational scaffolding.', score: 5 },
      ],
    },
    {
      id: 6,
      system: 'Team & Org Design',
      systemNumber: '06',
      question: 'Do executive departments collaborate seamlessly without political silos or territorial friction?',
      options: [
        { label: 'Frequent siloed disputes and delayed decisions.', score: 1 },
        { label: 'Acceptable collaboration with sporadic friction.', score: 3 },
        { label: 'High-trust, synchronized cross-functional velocity.', score: 5 },
      ],
    },
    {
      id: 7,
      system: 'Founder & Leadership Evolution',
      systemNumber: '07',
      question: 'How much of the CEO’s time is spent on $10k/hr strategic vision vs. operational firefighting?',
      options: [
        { label: 'Over 60% spent on daily firefighting and micromanagement.', score: 1 },
        { label: 'Balanced 50/50 between operations and strategy.', score: 3 },
        { label: '85%+ dedicated to long-term capital & architectural vision.', score: 5 },
      ],
    },
    {
      id: 8,
      system: 'Knowledge Transfer & IP',
      systemNumber: '08',
      question: 'If two key executive leaders departed tomorrow, would operations continue undisrupted?',
      options: [
        { label: 'Catastrophic loss of institutional wisdom.', score: 1 },
        { label: 'Temporary disruption with manual recovery.', score: 3 },
        { label: 'Zero interruption; comprehensive architectural playbooks.', score: 5 },
      ],
    },
    {
      id: 9,
      system: 'AI & Autonomous Systems',
      systemNumber: '09',
      question: 'Have you integrated AI workflows and automated decision frameworks into executive routines?',
      options: [
        { label: 'Virtually no automated intelligence workflows.', score: 1 },
        { label: 'Ad-hoc usage across individual team members.', score: 3 },
        { label: 'Institutionalized AI leverage and autonomous agents.', score: 5 },
      ],
    },
    {
      id: 10,
      system: 'Talent & Succession Engine',
      systemNumber: '10',
      question: 'Do you have qualified, fully groomed successors prepared for every C-suite seat?',
      options: [
        { label: 'Zero pipeline; single-point-of-failure across key roles.', score: 1 },
        { label: 'Informal candidates needing 12+ months preparation.', score: 3 },
        { label: 'Active, stress-tested succession bench ready today.', score: 5 },
      ],
    },
  ];

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

    setModalStep('scorecard');
    setCurrentStep(0);
  };

  const handleSelectOption = (score) => {
    const newAnswers = { ...answers, [currentStep]: score };
    setAnswers(newAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setModalStep('report');
      try {
        confetti({
          particleCount: 75,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#D4AF37', '#F5F2EB', '#A48123'],
        });
      } catch (e) {
        // silent fail
      }
    }
  };

  const calculateResults = () => {
    const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
    const maxScore = questions.length * 5;
    const percentage = Math.round((totalScore / maxScore) * 100);

    let lowestScore = 6;
    let bottleneckSystem = questions[0].system;
    let bottleneckNumber = questions[0].systemNumber;
    questions.forEach((q, idx) => {
      const score = answers[idx] !== undefined ? answers[idx] : 3;
      if (score < lowestScore) {
        lowestScore = score;
        bottleneckSystem = q.system;
        bottleneckNumber = q.systemNumber;
      }
    });

    return { totalScore, maxScore, percentage, bottleneckSystem, bottleneckNumber };
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
    setModalStep('intake');
  };

  if (!isOpen) return null;

  const results = modalStep === 'report' ? calculateResults() : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-lg">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="glass-panel-elevated p-6 sm:p-10 max-w-2xl w-full border border-amber-400/40 relative max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-stone-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* ========================================================
            MODAL STEP 1: INTAKE FORM
        ======================================================== */}
        {modalStep === 'intake' && (
          <div className="space-y-6">
            <div className="space-y-2 border-b border-white/[0.08] pb-5">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-amber-400 uppercase tracking-widest font-semibold bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Bottleneck Scorecard</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-light text-white leading-tight">
                Which System Is Holding Your Business Back?
              </h2>
              <p className="text-stone-300 font-sans text-xs sm:text-sm font-light leading-relaxed">
                Ten questions. Three minutes. You will receive an immediate, personalised read on which of the ten core business systems is the most likely constraint on your growth.
              </p>
              <div className="text-[11px] font-mono text-amber-300/90 pt-1">
                Complimentary. No commitment required.
              </div>
            </div>

            <form onSubmit={handleStartScorecard} className="space-y-4">
              {/* Full Name * */}
              <div className="space-y-1">
                <label className="block text-xs font-mono uppercase tracking-wider text-stone-300">
                  Full Name <span className="text-amber-400">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleFormChange}
                    placeholder="Your full name"
                    className={`w-full pl-9 pr-3 py-2.5 bg-white/[0.03] border ${
                      formErrors.fullName ? 'border-rose-500' : 'border-white/10 focus:border-amber-400'
                    } rounded text-xs text-white placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-colors`}
                  />
                </div>
                {formErrors.fullName && <p className="text-[10px] text-rose-400 font-mono">{formErrors.fullName}</p>}
              </div>

              {/* Your Role */}
              <div className="space-y-1">
                <label className="block text-xs font-mono uppercase tracking-wider text-stone-300">
                  Your Role
                </label>
                <div className="relative">
                  <Briefcase className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleFormChange}
                    placeholder="e.g., Founder & CEO"
                    className="w-full pl-9 pr-3 py-2.5 bg-white/[0.03] border border-white/10 focus:border-amber-400 rounded text-xs text-white placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-colors"
                  />
                </div>
              </div>

              {/* Company Name * */}
              <div className="space-y-1">
                <label className="block text-xs font-mono uppercase tracking-wider text-stone-300">
                  Company Name <span className="text-amber-400">*</span>
                </label>
                <div className="relative">
                  <Building2 className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleFormChange}
                    placeholder="Your company name"
                    className={`w-full pl-9 pr-3 py-2.5 bg-white/[0.03] border ${
                      formErrors.companyName ? 'border-rose-500' : 'border-white/10 focus:border-amber-400'
                    } rounded text-xs text-white placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-colors`}
                  />
                </div>
                {formErrors.companyName && <p className="text-[10px] text-rose-400 font-mono">{formErrors.companyName}</p>}
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="block text-xs font-mono uppercase tracking-wider text-stone-300">
                    Email Address <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      placeholder="your@company.com"
                      className={`w-full pl-9 pr-3 py-2.5 bg-white/[0.03] border ${
                        formErrors.email ? 'border-rose-500' : 'border-white/10 focus:border-amber-400'
                      } rounded text-xs text-white placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-colors`}
                    />
                  </div>
                  {formErrors.email && <p className="text-[10px] text-rose-400 font-mono">{formErrors.email}</p>}
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-mono uppercase tracking-wider text-stone-300">
                    Phone Number <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      placeholder="+971 XX XXX XXXX"
                      className={`w-full pl-9 pr-3 py-2.5 bg-white/[0.03] border ${
                        formErrors.phone ? 'border-rose-500' : 'border-white/10 focus:border-amber-400'
                      } rounded text-xs text-white placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-colors`}
                    />
                  </div>
                  {formErrors.phone && <p className="text-[10px] text-rose-400 font-mono">{formErrors.phone}</p>}
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-end">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-amber-400 hover:bg-white text-black font-mono text-xs uppercase tracking-widest font-bold rounded transition-all shadow-[0_0_20px_rgba(212,175,55,0.25)] cursor-pointer"
                >
                  <span>Begin the Scorecard</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        )}

        {/* ========================================================
            MODAL STEP 2: QUESTIONS
        ======================================================== */}
        {modalStep === 'scorecard' && (
          <div>
            {/* Header & Progress */}
            <div className="mb-6">
              <div className="flex items-center justify-between font-mono text-xs text-stone-400 mb-2">
                <span className="text-amber-400 uppercase tracking-widest">
                  System {currentStep + 1} of {questions.length}
                </span>
                <span>{questions[currentStep].system}</span>
              </div>
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-amber-400 transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question */}
            <h3 className="text-xl sm:text-2xl font-serif text-white mb-8 font-light leading-snug">
              {questions[currentStep].question}
            </h3>

            {/* Options */}
            <div className="space-y-3 mb-8">
              {questions[currentStep].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(opt.score)}
                  className="w-full text-left p-4 sm:p-5 bg-stone-950/60 border border-white/[0.08] hover:border-amber-400/60 hover:bg-white/[0.04] transition-all group rounded-xl cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm sm:text-base font-sans font-light text-stone-200 group-hover:text-white">
                      {opt.label}
                    </span>
                    <ArrowRight className="w-4 h-4 text-stone-600 group-hover:text-amber-400 shrink-0 ml-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </button>
              ))}
            </div>

            {/* Navigation back */}
            <button
              onClick={() => {
                if (currentStep > 0) setCurrentStep(currentStep - 1);
                else setModalStep('intake');
              }}
              className="flex items-center gap-2 font-mono text-xs text-stone-400 hover:text-white uppercase tracking-wider cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              {currentStep > 0 ? 'Previous Question' : 'Back to Intake'}
            </button>
          </div>
        )}

        {/* ========================================================
            MODAL STEP 3: RESULTS / REPORT
        ======================================================== */}
        {modalStep === 'report' && results && (
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-amber-400 uppercase tracking-widest px-3 py-1 rounded-full border border-amber-400/30 bg-amber-400/10 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              Diagnostic Complete
            </div>

            <h3 className="text-3xl sm:text-4xl font-serif font-light text-white">
              System Autonomy Score: <span className="text-amber-300 font-medium">{results.percentage}%</span>
            </h3>

            <div className="p-6 bg-stone-950/80 border border-amber-400/30 text-left space-y-3 rounded-xl">
              <div className="font-mono text-xs text-amber-400 uppercase tracking-wider font-semibold">
                Primary Bottleneck Identified:
              </div>
              <div className="text-xl sm:text-2xl font-serif text-white">
                System {results.bottleneckNumber}: <span className="text-amber-300">{results.bottleneckSystem}</span>
              </div>
              <p className="text-xs sm:text-sm font-sans text-stone-300 font-light leading-relaxed">
                Prepared for <strong className="text-white font-normal">{formData.fullName}</strong>{formData.companyName ? ` (${formData.companyName})` : ''}. Your enterprise demonstrates strong market positioning, but friction in <strong>{results.bottleneckSystem}</strong> creates an operational bottleneck that prevents true founder detachment.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  onClose();
                  onOpenConversation();
                }}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded bg-amber-400 text-black font-mono text-xs uppercase tracking-wider font-bold hover:bg-white transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] cursor-pointer"
              >
                <span>Schedule 90-Min Diagnostic →</span>
              </button>

              <button
                onClick={handleReset}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded border border-white/20 text-stone-300 font-mono text-xs uppercase tracking-wider hover:border-amber-400 hover:text-white transition-all cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Retake
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ScorecardModal;
