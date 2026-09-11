import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight, ArrowLeft, RotateCcw, Sparkles, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ScorecardModal = ({ isOpen, onClose, onOpenConversation }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);

  const questions = [
    {
      id: 1,
      system: 'Strategy & Positioning',
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
      question: 'Do you have qualified, fully groomed successors prepared for every C-suite seat?',
      options: [
        { label: 'Zero pipeline; single-point-of-failure across key roles.', score: 1 },
        { label: 'Informal candidates needing 12+ months preparation.', score: 3 },
        { label: 'Active, stress-tested succession bench ready today.', score: 5 },
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
          particleCount: 75,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#D4AF37', '#F5F2EB', '#A48123'],
        });
      } catch (e) {
        // silent fail if confetti unsupported
      }
    }
  };

  const calculateResults = () => {
    const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
    const maxScore = questions.length * 5;
    const percentage = Math.round((totalScore / maxScore) * 100);

    // Identify lowest scoring system
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

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
    setIsCompleted(false);
  };

  if (!isOpen) return null;

  const results = isCompleted ? calculateResults() : null;

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
          className="absolute top-6 right-6 text-stone-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isCompleted ? (
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
                  className="w-full text-left p-4 sm:p-5 bg-stone-950/60 border border-white/[0.08] hover:border-amber-400/60 hover:bg-white/[0.04] transition-all group"
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
            {currentStep > 0 && (
              <button
                onClick={() => setCurrentStep(currentStep - 1)}
                className="flex items-center gap-2 font-mono text-xs text-stone-400 hover:text-white uppercase tracking-wider"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Previous Question
              </button>
            )}
          </div>
        ) : (
          /* Results View */
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-amber-400 uppercase tracking-widest px-3 py-1 rounded-full border border-amber-400/30 bg-amber-400/10">
              <Sparkles className="w-3.5 h-3.5" />
              Diagnostic Complete
            </div>

            <h3 className="text-3xl sm:text-4xl font-serif font-light text-white">
              Architecture Score: <span className="text-amber-300">{results.percentage}%</span>
            </h3>

            <div className="p-6 bg-stone-950/80 border border-amber-400/30 text-left space-y-3">
              <div className="font-mono text-xs text-stone-400 uppercase tracking-wider">
                Primary Bottleneck Identified:
              </div>
              <div className="text-xl sm:text-2xl font-serif text-amber-200">
                {results.bottleneckSystem}
              </div>
              <p className="text-xs sm:text-sm font-sans text-stone-300 font-light leading-relaxed">
                Your enterprise demonstrates strategic potential, but friction in <strong>{results.bottleneckSystem}</strong> creates an operational bottleneck that prevents autonomous scaling without executive over-involvement.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  onClose();
                  onOpenConversation();
                }}
                className="luxury-btn luxury-btn-primary !py-3.5 !px-8 text-xs font-semibold"
              >
                Schedule Confidential Review →
              </button>

              <button
                onClick={handleReset}
                className="luxury-btn luxury-btn-outline !py-3.5 !px-6 text-xs flex items-center justify-center gap-2"
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
