import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Activity,
  Shield,
  Eye,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  Lock,
  Download,
  Share2,
  RotateCcw,
  Sparkles,
  TrendingUp,
  Award,
  ChevronRight,
  Mail,
  Phone,
  Building,
  User,
  FileText,
  Clock,
  Layers,
  BarChart3,
  ExternalLink,
  Printer
} from 'lucide-react';
import { ConversationModal } from '../components/ConversationModal';

// --- DIAGNOSTIC QUESTION DATA (12 Questions across 3 PEM Layers) ---
const diagnosticQuestions = [
  // --- LAYER 01: STATE MANAGEMENT ---
  {
    id: 1,
    layerId: '01',
    layerName: 'STATE MANAGEMENT',
    layerSubtitle: 'Performance Under Pressure & High-Stakes Decision Clarity',
    layerIcon: Activity,
    layerColor: 'text-amber-400',
    layerBorder: 'border-amber-400/40',
    layerBg: 'bg-amber-400/10',
    questionNumber: 1,
    title: 'High-Stakes Decision-Making Under Critical Pressure',
    scenario: 'When major market disruption, reputational exposure, or high-stakes capital decisions confront your executive team, what is the default behavioral response?',
    options: [
      {
        score: 1,
        label: 'A',
        text: 'Reactive anxiety and fragmented crisis management; decisions become rushed, emotional, or delayed.',
        signal: 'Critical Vulnerability'
      },
      {
        score: 2,
        label: 'B',
        text: 'Decision paralysis and defensive posturing; leaders protect turf rather than decisive capital allocation.',
        signal: 'High Friction'
      },
      {
        score: 3,
        label: 'C',
        text: 'Methodical execution under stress, but sustained friction causes mental fatigue and subtle strategic hesitation.',
        signal: 'Emerging Stability'
      },
      {
        score: 4,
        label: 'D',
        text: 'Calibrated neural poise and collective cognitive clarity; de-escalation protocols operate with surgical precision.',
        signal: 'Optimized Architecture'
      }
    ]
  },
  {
    id: 2,
    layerId: '01',
    layerName: 'STATE MANAGEMENT',
    layerSubtitle: 'Performance Under Pressure & High-Stakes Decision Clarity',
    layerIcon: Activity,
    layerColor: 'text-amber-400',
    layerBorder: 'border-amber-400/40',
    layerBg: 'bg-amber-400/10',
    questionNumber: 2,
    title: 'Cognitive Neutrality & Emotional Contagion',
    scenario: 'How effectively does your C-suite isolate strategic debate from emotional escalation, defensiveness, and interpersonal tension?',
    options: [
      {
        score: 1,
        label: 'A',
        text: 'Emotional volatility frequently hijacks boardroom agenda; decisions reflect emotional power plays.',
        signal: 'Critical Vulnerability'
      },
      {
        score: 2,
        label: 'B',
        text: 'Debates regularly generate defensive resentment requiring substantial post-meeting diplomacy to heal.',
        signal: 'High Friction'
      },
      {
        score: 3,
        label: 'C',
        text: 'Mostly disciplined and professional, though unspoken frustration occasionally suppresses dissent.',
        signal: 'Emerging Stability'
      },
      {
        score: 4,
        label: 'D',
        text: 'Absolute cognitive neutrality; rigorous debate occurs with zero emotional contagion or defensive posturing.',
        signal: 'Optimized Architecture'
      }
    ]
  },
  {
    id: 3,
    layerId: '01',
    layerName: 'STATE MANAGEMENT',
    layerSubtitle: 'Performance Under Pressure & High-Stakes Decision Clarity',
    layerIcon: Activity,
    layerColor: 'text-amber-400',
    layerBorder: 'border-amber-400/40',
    layerBg: 'bg-amber-400/10',
    questionNumber: 3,
    title: 'Executive Cognitive Bandwidth & Stamina Across Cycles',
    scenario: 'During prolonged transformation, complex restructuring, or continuous high-intensity execution cycles, how does executive cognitive bandwidth hold up?',
    options: [
      {
        score: 1,
        label: 'A',
        text: 'Pervasive executive burnout, rising cynicism, and noticeable decay in judgment and stamina.',
        signal: 'Critical Vulnerability'
      },
      {
        score: 2,
        label: 'B',
        text: 'Leaders become reactive bottlenecks, operating in survival mode with deteriorating cross-functional focus.',
        signal: 'High Friction'
      },
      {
        score: 3,
        label: 'C',
        text: 'Adequate resilience, but critical key-man dependencies create acute points of systemic exhaustion.',
        signal: 'Emerging Stability'
      },
      {
        score: 4,
        label: 'D',
        text: 'Regenerative cognitive protocols and structured pacing ensure sustained high-performance stamina.',
        signal: 'Optimized Architecture'
      }
    ]
  },
  {
    id: 4,
    layerId: '01',
    layerName: 'STATE MANAGEMENT',
    layerSubtitle: 'Performance Under Pressure & High-Stakes Decision Clarity',
    layerIcon: Activity,
    layerColor: 'text-amber-400',
    layerBorder: 'border-amber-400/40',
    layerBg: 'bg-amber-400/10',
    questionNumber: 4,
    title: 'Executive Nervous System Calibration & De-escalation',
    scenario: 'When friction arises between key functional heads, how systematically is team alignment restored before performance degrades?',
    options: [
      {
        score: 1,
        label: 'A',
        text: 'No structured calibration; conflicts simmer indefinitely until executive relationships fracture.',
        signal: 'Critical Vulnerability'
      },
      {
        score: 2,
        label: 'B',
        text: 'Relying exclusively on the CEO to unilaterally arbitrate every interpersonal dispute.',
        signal: 'High Friction'
      },
      {
        score: 3,
        label: 'C',
        text: 'Periodic post-crisis mediation that soothes symptoms without altering underlying structural triggers.',
        signal: 'Emerging Stability'
      },
      {
        score: 4,
        label: 'D',
        text: 'Institutionalized de-escalation protocols and peer calibration mechanisms embedded in governance.',
        signal: 'Optimized Architecture'
      }
    ]
  },

  // --- LAYER 02: LOYALTY ARCHITECTURE ---
  {
    id: 5,
    layerId: '02',
    layerName: 'LOYALTY ARCHITECTURE',
    layerSubtitle: 'Trust, Alignment & Non-Monetary Organizational Allegiance',
    layerIcon: Shield,
    layerColor: 'text-amber-300',
    layerBorder: 'border-amber-300/40',
    layerBg: 'bg-amber-300/10',
    questionNumber: 5,
    title: 'Non-Monetary Allegiance & Core Psychological Contract',
    scenario: 'Beyond base compensation and equity allocations, what binds your top tier-1 leadership talent to the enterprise mission?',
    options: [
      {
        score: 1,
        label: 'A',
        text: 'Strictly mercenary; senior talent is susceptible to competitor poaching at the first sign of friction.',
        signal: 'Critical Vulnerability'
      },
      {
        score: 2,
        label: 'B',
        text: 'Surface compliance; leaders remain while conditions are easy, but commitment wavers during hardship.',
        signal: 'High Friction'
      },
      {
        score: 3,
        label: 'C',
        text: 'Genuine alignment with vision, though loyalty is anchored to specific individuals rather than the enterprise.',
        signal: 'Emerging Stability'
      },
      {
        score: 4,
        label: 'D',
        text: 'Ironclad mutual loyalty architecture; deep psychological investment in the institution’s multi-decade legacy.',
        signal: 'Optimized Architecture'
      }
    ]
  },
  {
    id: 6,
    layerId: '02',
    layerName: 'LOYALTY ARCHITECTURE',
    layerSubtitle: 'Trust, Alignment & Non-Monetary Organizational Allegiance',
    layerIcon: Shield,
    layerColor: 'text-amber-300',
    layerBorder: 'border-amber-300/40',
    layerBg: 'bg-amber-300/10',
    questionNumber: 6,
    title: 'Silent Executive Attrition & Covert Agendas',
    scenario: 'To what degree do covert power struggles, hidden empire-building, or passive disengagement exist among senior executives?',
    options: [
      {
        score: 1,
        label: 'A',
        text: 'Pervasive backchannel politics, covert fiefdoms, and passive-aggressive resistance to strategic mandates.',
        signal: 'Critical Vulnerability'
      },
      {
        score: 2,
        label: 'B',
        text: 'Polite public agreement followed by quiet non-compliance or foot-dragging in execution.',
        signal: 'High Friction'
      },
      {
        score: 3,
        label: 'C',
        text: 'Generally collaborative, though certain legacy leaders quietly protect their departmental autonomy.',
        signal: 'Emerging Stability'
      },
      {
        score: 4,
        label: 'D',
        text: 'Zero covert politics; total transparency, collective accountability, and cross-functional stewardship.',
        signal: 'Optimized Architecture'
      }
    ]
  },
  {
    id: 7,
    layerId: '02',
    layerName: 'LOYALTY ARCHITECTURE',
    layerSubtitle: 'Trust, Alignment & Non-Monetary Organizational Allegiance',
    layerIcon: Shield,
    layerColor: 'text-amber-300',
    layerBorder: 'border-amber-300/40',
    layerBg: 'bg-amber-300/10',
    questionNumber: 7,
    title: 'Cross-Functional Trust & Vulnerability in the Boardroom',
    scenario: 'Can C-suite peers openly acknowledge operational vulnerabilities, capability gaps, or strategic missteps without fear of political penalty?',
    options: [
      {
        score: 1,
        label: 'A',
        text: 'Deeply punitive environment; mistakes are aggressively concealed or shifted onto other departments.',
        signal: 'Critical Vulnerability'
      },
      {
        score: 2,
        label: 'B',
        text: 'Guarded disclosure; executives only share what has been sanitized and defensible.',
        signal: 'High Friction'
      },
      {
        score: 3,
        label: 'C',
        text: 'Moderate safety among select executive peers, but guarded in formal board and CEO reviews.',
        signal: 'Emerging Stability'
      },
      {
        score: 4,
        label: 'D',
        text: 'Radical institutional candor; failures are dissected objectively as systemic learning opportunities.',
        signal: 'Optimized Architecture'
      }
    ]
  },
  {
    id: 8,
    layerId: '02',
    layerName: 'LOYALTY ARCHITECTURE',
    layerSubtitle: 'Trust, Alignment & Non-Monetary Organizational Allegiance',
    layerIcon: Shield,
    layerColor: 'text-amber-300',
    layerBorder: 'border-amber-300/40',
    layerBg: 'bg-amber-300/10',
    questionNumber: 8,
    title: 'Succession Architecture & Generational Trust',
    scenario: 'How confident is ownership/board that next-in-line leaders possess the structural loyalty and authority to govern without founder intervention?',
    options: [
      {
        score: 1,
        label: 'A',
        text: 'Zero succession trust; current leadership hoards control and views prospective successors as threats.',
        signal: 'Critical Vulnerability'
      },
      {
        score: 2,
        label: 'B',
        text: 'Ambiguous succession pipeline; high risk of internal factionalism and exodus upon leadership transition.',
        signal: 'High Friction'
      },
      {
        score: 3,
        label: 'C',
        text: 'Identified candidates on paper, but hesitance to transfer genuine sovereign decision rights.',
        signal: 'Emerging Stability'
      },
      {
        score: 4,
        label: 'D',
        text: 'Battle-tested succession architecture with distributed authority and verified stewardship.',
        signal: 'Optimized Architecture'
      }
    ]
  },

  // --- LAYER 03: RELATIONAL AWARENESS ---
  {
    id: 9,
    layerId: '03',
    layerName: 'RELATIONAL AWARENESS',
    layerSubtitle: 'Political Intelligence, Organizational Sensing & Influence',
    layerIcon: Eye,
    layerColor: 'text-stone-200',
    layerBorder: 'border-stone-200/40',
    layerBg: 'bg-stone-200/10',
    questionNumber: 9,
    title: 'Organizational Sensing & Weak-Signal Detection',
    scenario: 'How rapidly does executive leadership sense subterranean cultural drift, employee disillusionment, or emerging operational friction?',
    options: [
      {
        score: 1,
        label: 'A',
        text: 'Leadership is isolated in an ivory tower; issues only surface when key talent quits or KPIs crash.',
        signal: 'Critical Vulnerability'
      },
      {
        score: 2,
        label: 'B',
        text: 'Awareness is retrospective, relying on filtered managerial reports and lagging quarterly reviews.',
        signal: 'High Friction'
      },
      {
        score: 3,
        label: 'C',
        text: 'Informal sensing relies on individual charismatic leaders rather than systemic intelligence loops.',
        signal: 'Emerging Stability'
      },
      {
        score: 4,
        label: 'D',
        text: 'Real-time systemic organizational antenna; subtle undercurrents are diagnosed and resolved early.',
        signal: 'Optimized Architecture'
      }
    ]
  },
  {
    id: 10,
    layerId: '03',
    layerName: 'RELATIONAL AWARENESS',
    layerSubtitle: 'Political Intelligence, Organizational Sensing & Influence',
    layerIcon: Eye,
    layerColor: 'text-stone-200',
    layerBorder: 'border-stone-200/40',
    layerBg: 'bg-stone-200/10',
    questionNumber: 10,
    title: 'Informal Power Networks vs. Formal Hierarchy Navigation',
    scenario: 'How skillfully does executive leadership map and mobilize the informal power brokers and shadow networks that dictate real execution speed?',
    options: [
      {
        score: 1,
        label: 'A',
        text: 'Naive belief in org charts; initiatives repeatedly stall against invisible political roadblocks.',
        signal: 'Critical Vulnerability'
      },
      {
        score: 2,
        label: 'B',
        text: 'Executives are aware of shadow networks but frequently clash with or fail to influence them.',
        signal: 'High Friction'
      },
      {
        score: 3,
        label: 'C',
        text: 'Senior executives navigate informal channels well individually, but systemic mapping is absent.',
        signal: 'Emerging Stability'
      },
      {
        score: 4,
        label: 'D',
        text: 'Mastery of informal power dynamics; formal governance and informal networks are fully synchronized.',
        signal: 'Optimized Architecture'
      }
    ]
  },
  {
    id: 11,
    layerId: '03',
    layerName: 'RELATIONAL AWARENESS',
    layerSubtitle: 'Political Intelligence, Organizational Sensing & Influence',
    layerIcon: Eye,
    layerColor: 'text-stone-200',
    layerBorder: 'border-stone-200/40',
    layerBg: 'bg-stone-200/10',
    questionNumber: 11,
    title: 'Multi-Stakeholder & Board Diplomacy Under Divergent Interests',
    scenario: 'When board members, sovereign shareholders, family owners, or regulators hold diverging priorities, how are alignment and momentum preserved?',
    options: [
      {
        score: 1,
        label: 'A',
        text: 'Continuous appeasement and compromise that dilute strategic core focus and create executive paralysis.',
        signal: 'Critical Vulnerability'
      },
      {
        score: 2,
        label: 'B',
        text: 'Turbulent relationship management marked by recurring diplomatic misunderstandings and friction.',
        signal: 'High Friction'
      },
      {
        score: 3,
        label: 'C',
        text: 'Competent stakeholder handling, but high energy drain on the CEO prevents long-term architectural execution.',
        signal: 'Emerging Stability'
      },
      {
        score: 4,
        label: 'D',
        text: 'Sovereign-grade relational diplomacy; complex stakeholder tensions are channeled into decisive strategic clarity.',
        signal: 'Optimized Architecture'
      }
    ]
  },
  {
    id: 12,
    layerId: '03',
    layerName: 'RELATIONAL AWARENESS',
    layerSubtitle: 'Political Intelligence, Organizational Sensing & Influence',
    layerIcon: Eye,
    layerColor: 'text-stone-200',
    layerBorder: 'border-stone-200/40',
    layerBg: 'bg-stone-200/10',
    questionNumber: 12,
    title: 'Relational Agility & Cross-Boundary Collaboration',
    scenario: 'When shifting strategic market demands require instant cross-departmental realignment, how fluidly do leaders reorganize relationships?',
    options: [
      {
        score: 1,
        label: 'A',
        text: 'Rigid silo protection; departments aggressively hoard resources and reject cross-functional mandates.',
        signal: 'Critical Vulnerability'
      },
      {
        score: 2,
        label: 'B',
        text: 'Sluggish realignment requiring weeks of executive coercion and repeated escalations to enforce.',
        signal: 'High Friction'
      },
      {
        score: 3,
        label: 'C',
        text: 'Functional cooperation occurs, though subtle territorial instincts slow down critical velocity.',
        signal: 'Emerging Stability'
      },
      {
        score: 4,
        label: 'D',
        text: 'Fluid relational agility; executive relationships instantly reconfigure around shared strategic imperatives.',
        signal: 'Optimized Architecture'
      }
    ]
  }
];

export const AssessmentPage = () => {
  // Step state: 'intake' -> 'diagnostic' -> 'analyzing' -> 'report'
  const [step, setStep] = useState('intake');
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isConversationOpen, setIsConversationOpen] = useState(false);
  
  // User profile
  const [userProfile, setUserProfile] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    role: 'Chief Executive Officer / Founder'
  });

  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step, currentQIndex]);

  // Handle Form Change
  const handleProfileChange = (e) => {
    setUserProfile({
      ...userProfile,
      [e.target.name]: e.target.value
    });
    if (formErrors[e.target.name]) {
      setFormErrors({ ...formErrors, [e.target.name]: null });
    }
  };

  // Validate Intake Form
  const handleStartDiagnostic = (e) => {
    e.preventDefault();
    const errors = {};
    if (!userProfile.name.trim()) errors.name = 'Please enter your full name';
    if (!userProfile.email.trim() || !userProfile.email.includes('@')) errors.email = 'Please enter a valid executive email address';
    if (!userProfile.phone.trim()) errors.phone = 'Please enter your direct phone or contact number';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setStep('diagnostic');
    setCurrentQIndex(0);
  };

  // Handle Question Selection
  const handleSelectOption = (score) => {
    const updated = { ...answers, [currentQIndex]: score };
    setAnswers(updated);

    if (currentQIndex < diagnosticQuestions.length - 1) {
      setTimeout(() => {
        setCurrentQIndex((prev) => prev + 1);
      }, 200);
    } else {
      // Completed all questions
      setStep('analyzing');
      setTimeout(() => {
        setStep('report');
      }, 1600);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQIndex > 0) {
      setCurrentQIndex((prev) => prev - 1);
    } else {
      setStep('intake');
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentQIndex(0);
    setStep('intake');
  };

  const handlePrint = () => {
    window.print();
  };

  // --- SCORING CALCULATIONS ---
  const currentQ = diagnosticQuestions[currentQIndex];
  const progressPercent = Math.round(((currentQIndex + 1) / diagnosticQuestions.length) * 100);

  // Layer 1: State Management (Q0 to Q3)
  const l1Scores = [0, 1, 2, 3].map((i) => answers[i] || 0);
  const l1Total = l1Scores.reduce((a, b) => a + b, 0);
  const l1Max = 16; // 4 questions * 4 max
  const l1Pct = Math.round((l1Total / l1Max) * 100);

  // Layer 2: Loyalty Architecture (Q4 to Q7)
  const l2Scores = [4, 5, 6, 7].map((i) => answers[i] || 0);
  const l2Total = l2Scores.reduce((a, b) => a + b, 0);
  const l2Max = 16;
  const l2Pct = Math.round((l2Total / l2Max) * 100);

  // Layer 3: Relational Awareness (Q8 to Q11)
  const l3Scores = [8, 9, 10, 11].map((i) => answers[i] || 0);
  const l3Total = l3Scores.reduce((a, b) => a + b, 0);
  const l3Max = 16;
  const l3Pct = Math.round((l3Total / l3Max) * 100);

  // Total Composite
  const totalScore = l1Total + l2Total + l3Total;
  const maxScore = 48;
  const overallPct = Math.round((totalScore / maxScore) * 100);

  // Tier categorization
  const getTier = (pct) => {
    if (pct >= 85) return { name: 'Sovereign Architecture', badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30', status: 'Fortified' };
    if (pct >= 68) return { name: 'Engineered System', badge: 'bg-amber-400/10 text-amber-300 border-amber-400/30', status: 'Moderate Stability' };
    if (pct >= 50) return { name: 'Emerging Architecture', badge: 'bg-amber-500/10 text-amber-400 border-amber-500/30', status: 'Elevated Friction' };
    return { name: 'Vulnerable Architecture', badge: 'bg-rose-500/10 text-rose-400 border-rose-500/30', status: 'Critical Bottleneck' };
  };

  // Find lowest layer (primary constraint)
  const layersScored = [
    { id: '01', name: 'State Management', pct: l1Pct, icon: Activity, raw: l1Total },
    { id: '02', name: 'Loyalty Architecture', pct: l2Pct, icon: Shield, raw: l2Total },
    { id: '03', name: 'Relational Awareness', pct: l3Pct, icon: Eye, raw: l3Total }
  ];
  const sortedLayers = [...layersScored].sort((a, b) => a.pct - b.pct);
  const criticalLayer = sortedLayers[0];
  const strongestLayer = sortedLayers[sortedLayers.length - 1];

  return (
    <div className="min-h-screen bg-[#06070A] text-[#F8F6F0] pt-24 pb-20 selection:bg-amber-400 selection:text-black">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-400/[0.03] blur-[150px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[400px] bg-white/[0.01] blur-[120px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ========================================================
            STEP 1: INTAKE & WELCOME
        ======================================================== */}
        {step === 'intake' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-10"
          >
            {/* Header Monogram & Sub-label */}
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.03] border border-amber-400/30 text-amber-400 font-mono text-[11px] tracking-[0.25em] uppercase shadow-[0_0_20px_rgba(212,175,55,0.12)]">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                <span>Avaron Advisory · Diagnostic Engine</span>
              </div>

              <div className="pt-2">
                <div className="font-mono text-xs text-stone-400 uppercase tracking-[0.2em] mb-2">
                  Performance Environment Model
                </div>
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-light text-white leading-[1.15] tracking-tight">
                  The Performance Environment Assessment
                </h1>
              </div>

              <p className="text-base sm:text-xl font-serif italic text-amber-200/90 max-w-2xl mx-auto">
                "A 12-question diagnostic designed to show you where your leadership architecture is working — and where it is working against you."
              </p>
            </div>

            {/* 4 Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              <div className="p-5 rounded-xl bg-[#0B0D12] border border-white/[0.08] flex flex-col justify-between space-y-3">
                <div className="w-9 h-9 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-mono text-xs text-stone-200 font-semibold mb-1">12 Questions</div>
                  <p className="text-xs text-stone-400 font-light leading-relaxed">
                    Spanning three interdependent diagnostic layers.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#0B0D12] border border-white/[0.08] flex flex-col justify-between space-y-3">
                <div className="w-9 h-9 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-mono text-xs text-stone-200 font-semibold mb-1">PEM Framework</div>
                  <p className="text-xs text-stone-400 font-light leading-relaxed">
                    Results mapped to the Performance Environment Model.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#0B0D12] border border-white/[0.08] flex flex-col justify-between space-y-3">
                <div className="w-9 h-9 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-mono text-xs text-stone-200 font-semibold mb-1">Independent Scoring</div>
                  <p className="text-xs text-stone-400 font-light leading-relaxed">
                    No generic scoring — each layer analyzed independently.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#0B0D12] border border-white/[0.08] flex flex-col justify-between space-y-3">
                <div className="w-9 h-9 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-mono text-xs text-stone-200 font-semibold mb-1">Instant Delivery</div>
                  <p className="text-xs text-stone-400 font-light leading-relaxed">
                    Your full personalised report delivered on screen immediately.
                  </p>
                </div>
              </div>
            </div>

            {/* Executive Intake Card */}
            <div className="p-6 sm:p-10 rounded-2xl bg-[#0A0C11] border border-amber-400/30 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/[0.03] rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-6">
                <div className="border-b border-white/[0.08] pb-5 space-y-2">
                  <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Takes 5 to 8 Minutes · Confidential Assessment</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-light text-white">
                    Before we begin, tell us who you are
                  </h2>
                  <p className="text-stone-300 font-light text-sm sm:text-base leading-relaxed">
                    Your results will be delivered as a personalised diagnostic report immediately after completion. Your information is confidential and will only be used to send your results and, with your permission, to follow up with you directly.
                  </p>
                </div>

                {/* Form Inputs */}
                <form onSubmit={handleStartDiagnostic} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Your Name */}
                    <div className="space-y-2">
                      <label className="block text-xs font-mono uppercase tracking-wider text-stone-300">
                        Your Name <span className="text-amber-400">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          name="name"
                          value={userProfile.name}
                          onChange={handleProfileChange}
                          placeholder="e.g. Marcus Vance"
                          className={`w-full pl-10 pr-4 py-3 bg-white/[0.03] border ${
                            formErrors.name ? 'border-rose-500' : 'border-white/10 focus:border-amber-400'
                          } rounded text-sm text-white placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-colors`}
                        />
                      </div>
                      {formErrors.name && (
                        <p className="text-xs text-rose-400 font-mono">{formErrors.name}</p>
                      )}
                    </div>

                    {/* Email Address */}
                    <div className="space-y-2">
                      <label className="block text-xs font-mono uppercase tracking-wider text-stone-300">
                        Email Address <span className="text-amber-400">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          name="email"
                          value={userProfile.email}
                          onChange={handleProfileChange}
                          placeholder="e.g. marcus@enterprise.com"
                          className={`w-full pl-10 pr-4 py-3 bg-white/[0.03] border ${
                            formErrors.email ? 'border-rose-500' : 'border-white/10 focus:border-amber-400'
                          } rounded text-sm text-white placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-colors`}
                        />
                      </div>
                      {formErrors.email && (
                        <p className="text-xs text-rose-400 font-mono">{formErrors.email}</p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-2">
                      <label className="block text-xs font-mono uppercase tracking-wider text-stone-300">
                        Phone Number <span className="text-amber-400">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          name="phone"
                          value={userProfile.phone}
                          onChange={handleProfileChange}
                          placeholder="e.g. +971 50 000 0000 / +1 (555) 000-0000"
                          className={`w-full pl-10 pr-4 py-3 bg-white/[0.03] border ${
                            formErrors.phone ? 'border-rose-500' : 'border-white/10 focus:border-amber-400'
                          } rounded text-sm text-white placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-colors`}
                        />
                      </div>
                      {formErrors.phone && (
                        <p className="text-xs text-rose-400 font-mono">{formErrors.phone}</p>
                      )}
                    </div>

                    {/* Organisation (optional) */}
                    <div className="space-y-2">
                      <label className="block text-xs font-mono uppercase tracking-wider text-stone-300">
                        Organisation <span className="text-stone-400 lowercase font-normal">(optional)</span>
                      </label>
                      <div className="relative">
                        <Building className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          name="organization"
                          value={userProfile.organization}
                          onChange={handleProfileChange}
                          placeholder="e.g. Sovereign Holdings / Global Tech Corp"
                          className="w-full pl-10 pr-4 py-3 bg-white/[0.03] border border-white/10 focus:border-amber-400 rounded text-sm text-white placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Role Selection */}
                  <div className="space-y-2 pt-2">
                    <label className="block text-xs font-mono uppercase tracking-wider text-stone-300">
                      Your Executive Role / Focus
                    </label>
                    <select
                      name="role"
                      value={userProfile.role}
                      onChange={handleProfileChange}
                      className="w-full px-4 py-3 bg-[#0B0D12] border border-white/10 focus:border-amber-400 rounded text-sm text-stone-200 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-colors font-sans"
                    >
                      <option value="Chief Executive Officer / Founder">Chief Executive Officer / Founder</option>
                      <option value="Board Member / Non-Executive Director">Board Member / Non-Executive Director</option>
                      <option value="Managing Director / General Partner">Managing Director / General Partner</option>
                      <option value="C-Suite Executive (COO, CFO, CTO, CHRO)">C-Suite Executive (COO, CFO, CTO, CHRO)</option>
                      <option value="Family Office Principal / Sovereign Leader">Family Office Principal / Sovereign Leader</option>
                      <option value="Senior Vice President / Division Head">Senior Vice President / Division Head</option>
                    </select>
                  </div>

                  {/* Submission & Action Button */}
                  <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/[0.08]">
                    <div className="flex items-center gap-2 text-xs font-mono text-stone-400">
                      <Lock className="w-3.5 h-3.5 text-amber-400" />
                      <span>Confidentiality Guaranteed · 256-bit Secure</span>
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black hover:bg-amber-400 font-mono text-xs uppercase tracking-widest font-bold rounded shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all cursor-pointer"
                    >
                      <span>Begin the Diagnostic</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Legal & Intellectual Property Notice */}
            <div className="text-center pt-6 space-y-2 border-t border-white/[0.06] font-mono text-xs text-stone-400">
              <p>
                © 2026 Avaron Advisory · <a href="https://www.avaronadvisory.com/" target="_blank" rel="noreferrer" className="text-amber-400/80 hover:text-amber-300 underline underline-offset-4">avaronadvisory.com</a>
              </p>
              <p className="text-[11px] text-stone-400 max-w-xl mx-auto">
                The Performance Environment Model is the personal intellectual property of John Kairouz. All rights reserved.
              </p>
            </div>
          </motion.div>
        )}

        {/* ========================================================
            STEP 2: 12-QUESTION INTERACTIVE DIAGNOSTIC
        ======================================================== */}
        {step === 'diagnostic' && currentQ && (
          <motion.div
            key={currentQ.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            {/* Top Stepper & Progress Ribbon */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
                <button
                  onClick={handlePrevQuestion}
                  className="inline-flex items-center gap-1.5 text-stone-400 hover:text-white transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>{currentQIndex === 0 ? 'Back to Overview' : 'Previous Question'}</span>
                </button>

                <div className="inline-flex items-center gap-2 text-stone-400">
                  <span>Diagnostic Progress:</span>
                  <span className="text-amber-400 font-bold">{currentQIndex + 1} / 12</span>
                </div>
              </div>

              {/* Glowing Progress Bar */}
              <div className="w-full h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-300 shadow-[0_0_12px_rgba(212,175,55,0.8)]"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              {/* Layer Badge Bar */}
              <div className="flex items-center justify-between pt-2">
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${currentQ.layerBorder} ${currentQ.layerBg} ${currentQ.layerColor} text-[10px] sm:text-xs font-mono uppercase tracking-widest`}>
                  <currentQ.layerIcon className="w-3.5 h-3.5" />
                  <span>Layer {currentQ.layerId} // {currentQ.layerName}</span>
                </div>

                <div className="text-[11px] font-mono text-stone-400 hidden sm:block">
                  {currentQ.layerSubtitle}
                </div>
              </div>
            </div>

            {/* Question Box */}
            <div className="p-6 sm:p-10 rounded-2xl bg-[#0A0C11] border border-white/[0.08] shadow-2xl space-y-8">
              <div className="space-y-3">
                <span className="font-mono text-xs text-amber-400 tracking-widest uppercase block font-semibold">
                  Question 0{currentQ.questionNumber} of 12
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-white leading-snug">
                  {currentQ.title}
                </h2>
                <p className="text-stone-300 font-sans text-sm sm:text-base leading-relaxed pt-1">
                  {currentQ.scenario}
                </p>
              </div>

              {/* 4 Interactive Option Cards */}
              <div className="space-y-3.5">
                {currentQ.options.map((option, idx) => {
                  const isSelected = answers[currentQIndex] === option.score;

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(option.score)}
                      className={`w-full text-left p-5 sm:p-6 rounded-xl border transition-all duration-200 cursor-pointer relative group flex items-start gap-4 ${
                        isSelected
                          ? 'bg-amber-400/10 border-amber-400 shadow-[0_0_25px_rgba(212,175,55,0.2)] ring-1 ring-amber-400'
                          : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05] hover:border-amber-400/50'
                      }`}
                    >
                      {/* Letter / Badge Indicator */}
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-amber-400 text-black'
                          : 'bg-white/[0.06] text-stone-400 group-hover:bg-amber-400/20 group-hover:text-amber-300'
                      }`}>
                        {option.label}
                      </div>

                      {/* Content */}
                      <div className="flex-grow space-y-1.5">
                        <p className={`text-sm sm:text-base font-light leading-relaxed transition-colors ${
                          isSelected ? 'text-white font-normal' : 'text-stone-300 group-hover:text-white'
                        }`}>
                          {option.text}
                        </p>
                        <div className="flex items-center gap-2">
                          <span className={`text-[10px] font-mono tracking-wider uppercase ${
                            isSelected ? 'text-amber-400' : 'text-stone-400 group-hover:text-stone-400'
                          }`}>
                            Diagnostic Indicator: {option.signal}
                          </span>
                        </div>
                      </div>

                      {/* Radio Circle */}
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-1 transition-colors ${
                        isSelected ? 'border-amber-400 bg-amber-400' : 'border-white/20 group-hover:border-amber-400/60'
                      }`}>
                        {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-black" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Bottom Nav Helper */}
              <div className="flex items-center justify-between pt-4 border-t border-white/[0.06] font-mono text-xs text-stone-400">
                <span>Select the response that most authentically represents current reality.</span>
                {answers[currentQIndex] && (
                  <span className="text-amber-400 font-semibold hidden sm:inline">Selection Recorded ✓</span>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* ========================================================
            STEP 3: ANALYZING STATE TRANSITION
        ======================================================== */}
        {step === 'analyzing' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="py-24 text-center space-y-6 max-w-lg mx-auto"
          >
            <div className="relative w-24 h-24 mx-auto">
              <div className="absolute inset-0 rounded-full border-2 border-amber-400/20 border-t-amber-400 animate-spin" />
              <div className="absolute inset-3 rounded-full border-2 border-white/10 border-b-amber-300 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-amber-400 animate-pulse" />
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-mono text-xs uppercase tracking-[0.25em] text-amber-400">
                Performance Environment Model Engine
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-white font-light">
                Synthesizing Your Leadership Diagnostic...
              </h3>
              <p className="text-stone-400 font-light text-sm">
                Mapping your answers across State Management, Loyalty Architecture, and Relational Awareness.
              </p>
            </div>
          </motion.div>
        )}

        {/* ========================================================
            STEP 4: PERSONALISED DIAGNOSTIC REPORT (ON SCREEN)
        ======================================================== */}
        {step === 'report' && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            {/* Top Action Bar (Print / Reset) */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-[#0A0C11] border border-white/[0.08] font-mono text-xs">
              <div className="flex items-center gap-2 text-stone-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>CONFIDENTIAL EXECUTIVE DIAGNOSTIC REPORT · REF: PEM-{new Date().getFullYear()}-{(Math.random()*9000+1000).toFixed(0)}</span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print / Save PDF</span>
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

            {/* Report Header Card */}
            <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-[#0C0E14] via-[#08090D] to-[#050608] border border-amber-400/40 shadow-2xl relative overflow-hidden space-y-8">
              <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/[0.04] rounded-full blur-3xl pointer-events-none" />

              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-amber-400 font-semibold">
                    <span>Performance Environment Model // Diagnostic Output</span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white leading-tight">
                    Executive Leadership Architecture Report
                  </h1>
                  <p className="text-stone-300 font-sans text-sm sm:text-base font-light">
                    Prepared exclusively for <strong className="text-white font-medium">{userProfile.name}</strong>
                    {userProfile.organization ? ` · ${userProfile.organization}` : ''} ({userProfile.role})
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-center md:text-right shrink-0 min-w-[200px]">
                  <div className="text-[10px] font-mono text-stone-400 uppercase tracking-widest mb-1">
                    Systemic Composite Index
                  </div>
                  <div className="text-4xl sm:text-5xl font-serif text-white font-light">
                    {overallPct}%
                  </div>
                  <div className={`mt-2 inline-block px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider border ${getTier(overallPct).badge}`}>
                    {getTier(overallPct).name}
                  </div>
                </div>
              </div>

              {/* Executive Summary Diagnosis Callout */}
              <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
                  <AlertCircle className="w-4 h-4" />
                  <span>Primary Systemic Diagnosis</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-light text-white">
                  Critical Architectural Constraint: <span className="text-amber-300 italic">{criticalLayer.name} ({criticalLayer.pct}%)</span>
                </h3>
                <p className="text-stone-300 font-light text-sm sm:text-base leading-relaxed">
                  Your leadership ecosystem's primary performance ceiling is rooted in <strong className="text-white font-normal">{criticalLayer.name}</strong>. While other systems may operate with baseline competence, vulnerabilities in this layer create compounding friction that diminishes executive stamina, stalls execution velocity, and puts strategic value at risk.
                </p>
              </div>

              {/* 3-Layer Comparative Benchmark Grid */}
              <div className="space-y-4 pt-2">
                <div className="font-mono text-xs text-stone-400 uppercase tracking-widest">
                  Independent Layer Analysis (Performance Environment Model)
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {/* Layer 01: State Management */}
                  <div className="p-6 rounded-xl bg-[#0A0C11] border border-white/[0.08] space-y-4 relative">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Activity className="w-4 h-4 text-amber-400" />
                        <span className="font-mono text-xs uppercase tracking-wider text-stone-300 font-semibold">01 · State</span>
                      </div>
                      <span className="font-serif text-2xl text-white font-light">{l1Pct}%</span>
                    </div>

                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-amber-400 transition-all duration-500"
                        style={{ width: `${l1Pct}%` }}
                      />
                    </div>

                    <div className="space-y-1">
                      <div className="text-[11px] font-mono text-stone-400 uppercase">
                        Decision Poise & Nervous System:
                      </div>
                      <div className={`text-xs font-mono font-medium ${l1Pct >= 75 ? 'text-emerald-400' : l1Pct >= 50 ? 'text-amber-300' : 'text-rose-400'}`}>
                        {getTier(l1Pct).name}
                      </div>
                    </div>
                  </div>

                  {/* Layer 02: Loyalty Architecture */}
                  <div className="p-6 rounded-xl bg-[#0A0C11] border border-white/[0.08] space-y-4 relative">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-amber-300" />
                        <span className="font-mono text-xs uppercase tracking-wider text-stone-300 font-semibold">02 · Loyalty</span>
                      </div>
                      <span className="font-serif text-2xl text-white font-light">{l2Pct}%</span>
                    </div>

                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-amber-300 transition-all duration-500"
                        style={{ width: `${l2Pct}%` }}
                      />
                    </div>

                    <div className="space-y-1">
                      <div className="text-[11px] font-mono text-stone-400 uppercase">
                        Trust & Non-Monetary Allegiance:
                      </div>
                      <div className={`text-xs font-mono font-medium ${l2Pct >= 75 ? 'text-emerald-400' : l2Pct >= 50 ? 'text-amber-300' : 'text-rose-400'}`}>
                        {getTier(l2Pct).name}
                      </div>
                    </div>
                  </div>

                  {/* Layer 03: Relational Awareness */}
                  <div className="p-6 rounded-xl bg-[#0A0C11] border border-white/[0.08] space-y-4 relative">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Eye className="w-4 h-4 text-stone-200" />
                        <span className="font-mono text-xs uppercase tracking-wider text-stone-300 font-semibold">03 · Relational</span>
                      </div>
                      <span className="font-serif text-2xl text-white font-light">{l3Pct}%</span>
                    </div>

                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-stone-200 transition-all duration-500"
                        style={{ width: `${l3Pct}%` }}
                      />
                    </div>

                    <div className="space-y-1">
                      <div className="text-[11px] font-mono text-stone-400 uppercase">
                        Political Sensing & Influence:
                      </div>
                      <div className={`text-xs font-mono font-medium ${l3Pct >= 75 ? 'text-emerald-400' : l3Pct >= 50 ? 'text-amber-300' : 'text-rose-400'}`}>
                        {getTier(l3Pct).name}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* In-Depth Qualitative Diagnostic Report Section */}
            <div className="space-y-8">
              <div className="border-b border-white/[0.08] pb-4">
                <span className="font-mono text-xs text-amber-400 uppercase tracking-widest block font-semibold mb-1">
                  Architectural Breakdown
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-light text-white">
                  Detailed Layer-by-Layer Findings & Prescriptions
                </h2>
              </div>

              {/* Deep Dive: Layer 1 */}
              <div className="p-8 rounded-2xl bg-[#090B10] border border-white/[0.08] space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.06] pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif text-white font-light">Layer 01: State Management</h3>
                      <p className="text-xs font-mono text-stone-400">Executive Nervous System & High-Stakes Decision Clarity</p>
                    </div>
                  </div>
                  <div className="font-mono text-xs text-amber-400 px-3 py-1 rounded bg-amber-400/10 border border-amber-400/20">
                    Score: {l1Pct}% ({getTier(l1Pct).name})
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-stone-300 font-light">
                  <div className="space-y-2">
                    <div className="font-mono text-xs uppercase tracking-wider text-stone-400 font-semibold">
                      Where Architecture Is Working:
                    </div>
                    <p className="leading-relaxed">
                      {l1Pct >= 75
                        ? 'Your leadership team demonstrates commendable cognitive neutrality under friction. Decision-making protocols remain grounded, insulating capital allocation from emotional contagion.'
                        : 'Baseline tactical composure exists in predictable operational routines, with key individual leaders holding individual composure.'}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="font-mono text-xs uppercase tracking-wider text-rose-400 font-semibold">
                      Where Architecture Is Working Against You:
                    </div>
                    <p className="leading-relaxed">
                      {l1Pct < 75
                        ? 'Under acute disruption or prolonged uncertainty, emotional contagion leaks into C-suite debates. Decision latency increases, and reactive fire-fighting drains executive cognitive stamina.'
                        : 'Subtle fatigue during multi-quarter transformation sprints risks reducing bandwidth for sovereign innovation and high-stakes pivoting.'}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-amber-400/[0.04] border border-amber-400/20 font-mono text-xs text-stone-300 flex items-start gap-3">
                  <span className="text-amber-400 font-bold uppercase shrink-0">Prescribed Intervention:</span>
                  <span>Executive State Calibration & High-Stakes Decision Protocol Integration.</span>
                </div>
              </div>

              {/* Deep Dive: Layer 2 */}
              <div className="p-8 rounded-2xl bg-[#090B10] border border-white/[0.08] space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.06] pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-300/10 border border-amber-300/30 flex items-center justify-center text-amber-300">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif text-white font-light">Layer 02: Loyalty Architecture</h3>
                      <p className="text-xs font-mono text-stone-400">Systemic Cohesion, Non-Monetary Allegiance & Succession Trust</p>
                    </div>
                  </div>
                  <div className="font-mono text-xs text-amber-300 px-3 py-1 rounded bg-amber-300/10 border border-amber-300/20">
                    Score: {l2Pct}% ({getTier(l2Pct).name})
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-stone-300 font-light">
                  <div className="space-y-2">
                    <div className="font-mono text-xs uppercase tracking-wider text-stone-400 font-semibold">
                      Where Architecture Is Working:
                    </div>
                    <p className="leading-relaxed">
                      {l2Pct >= 75
                        ? 'Senior leaders operate with genuine institutional fidelity. Alignment on strategic outcomes transcends individual compensation packages, minimizing silent attrition risks.'
                        : 'Formal contractual terms and incentive structures maintain nominal retention of key personnel in primary operational seats.'}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="font-mono text-xs uppercase tracking-wider text-rose-400 font-semibold">
                      Where Architecture Is Working Against You:
                    </div>
                    <p className="leading-relaxed">
                      {l2Pct < 75
                        ? 'Trust contracts are fragile. Unspoken territorial defenses and fear of political vulnerability prevent radical candor, creating hidden friction and succession vulnerabilities.'
                        : 'Generational stewardship protocols require formalization to guarantee zero reliance on charismatic personality-driven retention.'}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-amber-400/[0.04] border border-amber-400/20 font-mono text-xs text-stone-300 flex items-start gap-3">
                  <span className="text-amber-400 font-bold uppercase shrink-0">Prescribed Intervention:</span>
                  <span>Loyalty Matrix Restructuring & Succession Governance Framework.</span>
                </div>
              </div>

              {/* Deep Dive: Layer 3 */}
              <div className="p-8 rounded-2xl bg-[#090B10] border border-white/[0.08] space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.06] pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-stone-200/10 border border-stone-200/30 flex items-center justify-center text-stone-200">
                      <Eye className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif text-white font-light">Layer 03: Relational Awareness</h3>
                      <p className="text-xs font-mono text-stone-400">Political Intelligence, Organizational Sensing & Stakeholder Diplomacy</p>
                    </div>
                  </div>
                  <div className="font-mono text-xs text-stone-200 px-3 py-1 rounded bg-stone-200/10 border border-stone-200/20">
                    Score: {l3Pct}% ({getTier(l3Pct).name})
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-stone-300 font-light">
                  <div className="space-y-2">
                    <div className="font-mono text-xs uppercase tracking-wider text-stone-400 font-semibold">
                      Where Architecture Is Working:
                    </div>
                    <p className="leading-relaxed">
                      {l3Pct >= 75
                        ? 'High organizational antenna. Executive leadership senses subterranean currents early and maps informal power nodes with astute diplomatic agility.'
                        : 'Direct stakeholder communications operate with standard corporate governance and formal reporting cadence.'}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="font-mono text-xs uppercase tracking-wider text-rose-400 font-semibold">
                      Where Architecture Is Working Against You:
                    </div>
                    <p className="leading-relaxed">
                      {l3Pct < 75
                        ? 'Over-reliance on formal org charts leaves leadership blind to shadow power dynamics and subtle cultural disillusionment until severe friction manifests.'
                        : 'Stakeholder diplomacy requires deeper institutionalization to prevent excessive CEO time consumption during multi-party negotiations.'}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-amber-400/[0.04] border border-amber-400/20 font-mono text-xs text-stone-300 flex items-start gap-3">
                  <span className="text-amber-400 font-bold uppercase shrink-0">Prescribed Intervention:</span>
                  <span>Relational Intelligence Blueprint & Multi-Stakeholder Influence Mapping.</span>
                </div>
              </div>
            </div>

            {/* Strategic Debrief CTA Panel */}
            <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-[#0E1118] to-[#07080C] border border-amber-400/50 shadow-2xl relative overflow-hidden text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 font-mono text-xs uppercase tracking-widest">
                <Lock className="w-3.5 h-3.5" />
                <span>Next Strategic Step</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white max-w-2xl mx-auto leading-tight">
                Review Your Full Diagnostic with John Kairouz & Avaron Advisory
              </h2>

              <p className="text-stone-300 font-light text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                We invite CEOs, sovereign authorities, and enterprise principals to schedule a confidential 45-minute Architectural Debrief to review your specific diagnostic results and discuss custom systemic redesign.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => setIsConversationOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-amber-400 text-black font-mono text-xs uppercase tracking-widest font-bold rounded hover:bg-white transition-all shadow-[0_0_30px_rgba(212,175,55,0.3)] cursor-pointer"
                >
                  <span>Request Strategic Debrief →</span>
                </button>

                <button
                  onClick={handlePrint}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-mono text-xs uppercase tracking-widest rounded transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4 text-amber-400" />
                  <span>Export Report Summary</span>
                </button>
              </div>

              <div className="pt-4 font-mono text-[11px] text-stone-400">
                Direct inquiry: <a href="mailto:info@avaronadvisory.com" className="text-amber-400 hover:underline">info@avaronadvisory.com</a> · Abu Dhabi · Amsterdam · Los Angeles
              </div>
            </div>

            {/* Legal & IP notice */}
            <div className="text-center pt-4 pb-12 space-y-2 font-mono text-xs text-stone-400 border-t border-white/[0.06]">
              <p>© 2026 Avaron Advisory · <a href="https://www.avaronadvisory.com/" target="_blank" rel="noreferrer" className="text-amber-400/80 hover:text-amber-300 underline underline-offset-4">avaronadvisory.com</a></p>
              <p className="text-[11px] text-stone-400">
                The Performance Environment Model is the personal intellectual property of John Kairouz.
              </p>
            </div>
          </motion.div>
        )}

      </div>

      {/* Global Executive Conversation Modal */}
      <ConversationModal
        isOpen={isConversationOpen}
        onClose={() => setIsConversationOpen(false)}
      />
    </div>
  );
};

export default AssessmentPage;
