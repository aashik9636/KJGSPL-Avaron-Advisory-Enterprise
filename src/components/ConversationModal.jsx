import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, CheckCircle2, Lock, ArrowRight, Mail } from 'lucide-react';

export const ConversationModal = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    organization: '',
    region: 'Gulf / GCC',
    focus: 'Executive Diagnostic Assessment',
    email: '',
    phone: '',
    notes: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

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

        {!isSubmitted ? (
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-amber-400 uppercase tracking-widest mb-3">
              <Lock className="w-3.5 h-3.5" />
              <span>Confidential Executive Inquiry</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif font-light text-white mb-2">
              Begin a Leadership Architecture Dialogue
            </h3>

            <p className="text-xs sm:text-sm font-sans text-stone-400 font-light mb-8">
              All discussions are conducted with strict institutional discretion under mutual non-disclosure protocols.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[10px] text-stone-400 uppercase tracking-widest mb-1.5">
                    Executive Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Tariq Al-Mansoor"
                    className="w-full bg-stone-950/70 border border-white/[0.1] px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors font-sans"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] text-stone-400 uppercase tracking-widest mb-1.5">
                    Executive Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    required
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="e.g. Group Chief Executive Officer"
                    className="w-full bg-stone-950/70 border border-white/[0.1] px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors font-sans"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[10px] text-stone-400 uppercase tracking-widest mb-1.5">
                    Organization / Entity *
                  </label>
                  <input
                    type="text"
                    name="organization"
                    required
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="e.g. Sovereign Enterprise / Holding Co."
                    className="w-full bg-stone-950/70 border border-white/[0.1] px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors font-sans"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] text-stone-400 uppercase tracking-widest mb-1.5">
                    Region
                  </label>
                  <select
                    name="region"
                    value={formData.region}
                    onChange={handleChange}
                    className="w-full bg-stone-950/70 border border-white/[0.1] px-4 py-3 text-sm text-stone-200 focus:outline-none focus:border-amber-400 transition-colors font-sans"
                  >
                    <option value="Gulf / GCC">Gulf / GCC (UAE, KSA, Qatar)</option>
                    <option value="Europe">Europe (UK, Netherlands, DACH)</option>
                    <option value="Americas">Americas (USA, Canada)</option>
                    <option value="Asia">Asia-Pacific</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[10px] text-stone-400 uppercase tracking-widest mb-1.5">
                    Direct Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="executive@domain.com"
                    className="w-full bg-stone-950/70 border border-white/[0.1] px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors font-sans"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] text-stone-400 uppercase tracking-widest mb-1.5">
                    Confidential Phone / Signal
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+971 50 000 0000"
                    className="w-full bg-stone-950/70 border border-white/[0.1] px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-[10px] text-stone-400 uppercase tracking-widest mb-1.5">
                  Core Area of Inquiry
                </label>
                <select
                  name="focus"
                  value={formData.focus}
                  onChange={handleChange}
                  className="w-full bg-stone-950/70 border border-white/[0.1] px-4 py-3 text-sm text-stone-200 focus:outline-none focus:border-amber-400 transition-colors font-sans"
                >
                  <option value="Executive Diagnostic Assessment">Executive Diagnostic Assessment</option>
                  <option value="CEO Advisory Retainer">CEO Advisory Retainer</option>
                  <option value="Succession Planning Architecture">Succession Planning Architecture</option>
                  <option value="Executive Team Alignment">Executive Team Alignment Program</option>
                  <option value="Founder to Owner Evolution">Founder → Owner Evolution</option>
                  <option value="Custom Sovereign Advisory">Custom Sovereign Mandate</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="luxury-btn luxury-btn-primary w-full justify-center !py-4 text-xs font-semibold"
                >
                  <span className="flex items-center gap-2">
                    Submit Confidential Briefing
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </button>
              </div>

              <div className="text-center font-mono text-[10px] text-stone-500 pt-2 flex items-center justify-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Protected under Avaron Institutional Privacy Charter</span>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-8 space-y-6">
            <div className="w-14 h-14 bg-amber-400/10 border border-amber-400/40 rounded-full flex items-center justify-center mx-auto text-amber-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-3xl font-serif text-white">
              Inquiry Confirmed
            </h3>

            <p className="text-stone-300 font-sans text-sm sm:text-base font-light max-w-md mx-auto leading-relaxed">
              Thank you, {formData.name || 'Executive'}. Your confidential inquiry has been routed directly to John Kairouz and senior advisory partners. We will reach out within 24 business hours.
            </p>

            <div className="p-4 bg-stone-950/80 border border-white/[0.08] max-w-md mx-auto text-xs font-mono text-stone-400 space-y-1 text-left">
              <div><strong>Organization:</strong> {formData.organization || 'Private'}</div>
              <div><strong>Focus:</strong> {formData.focus}</div>
              <div><strong>Region:</strong> {formData.region}</div>
            </div>

            <div className="pt-4">
              <button
                onClick={handleReset}
                className="luxury-btn luxury-btn-outline !py-3 !px-8 text-xs"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};
