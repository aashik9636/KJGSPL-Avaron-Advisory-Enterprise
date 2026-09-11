import React, { useState } from 'react';
import { ShieldCheck, Lock, CheckCircle2, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

export const ContactPage = () => {
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

  return (
    <div className="bg-[#06070A] text-white pt-16 md:pt-20 min-h-screen">
      {/* HEADER */}
      <section className="pt-4 pb-14 md:pt-6 md:pb-20 bg-[#090B0F] border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-4xl space-y-4">
            <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-amber-400 font-semibold">
              CONFIDENTIAL INTAKE
            </div>
            <h1 className="text-hero-giant font-serif font-light text-ivory-gradient leading-tight">
              Begin an Executive Architecture Dialogue
            </h1>
            <p className="text-xl sm:text-2xl font-serif italic text-stone-300 leading-relaxed max-w-3xl">
              "Every engagement begins with a confidential briefing under non-disclosure protocol."
            </p>
          </div>
        </div>
      </section>

      {/* FORM & LOCATIONS GRID */}
      <section className="py-28 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Form (7 Cols) */}
          <div className="lg:col-span-7 glass-panel-elevated p-8 sm:p-14 rounded-2xl border border-amber-400/30">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="inline-flex items-center gap-2 font-mono text-xs text-amber-400 uppercase tracking-widest font-semibold mb-2">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Confidential Executive Inquiry</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-mono text-[11px] text-stone-400 uppercase tracking-wider mb-2 font-semibold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Tariq Al-Mansoor"
                      className="w-full bg-white/[0.03] border border-white/10 px-4 py-3.5 text-sm text-white focus:outline-none focus:border-amber-400 font-sans rounded"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] text-stone-400 uppercase tracking-wider mb-2 font-semibold">
                      Executive Title *
                    </label>
                    <input
                      type="text"
                      name="title"
                      required
                      value={formData.title}
                      onChange={handleChange}
                      placeholder="e.g. Group CEO / Managing Director"
                      className="w-full bg-white/[0.03] border border-white/10 px-4 py-3.5 text-sm text-white focus:outline-none focus:border-amber-400 font-sans rounded"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-mono text-[11px] text-stone-400 uppercase tracking-wider mb-2 font-semibold">
                      Organization / Entity *
                    </label>
                    <input
                      type="text"
                      name="organization"
                      required
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="e.g. Holding Group / Sovereign Body"
                      className="w-full bg-white/[0.03] border border-white/10 px-4 py-3.5 text-sm text-white focus:outline-none focus:border-amber-400 font-sans rounded"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] text-stone-400 uppercase tracking-wider mb-2 font-semibold">
                      Primary Region
                    </label>
                    <select
                      name="region"
                      value={formData.region}
                      onChange={handleChange}
                      className="w-full bg-stone-900 border border-white/10 px-4 py-3.5 text-sm text-white focus:outline-none focus:border-amber-400 font-sans rounded"
                    >
                      <option value="Gulf / GCC">Gulf / GCC (UAE, KSA, Qatar)</option>
                      <option value="Europe">Europe (UK, Netherlands, DACH)</option>
                      <option value="Americas">Americas (USA, Canada)</option>
                      <option value="Asia">Asia-Pacific</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-mono text-[11px] text-stone-400 uppercase tracking-wider mb-2 font-semibold">
                      Confidential Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="executive@domain.com"
                      className="w-full bg-white/[0.03] border border-white/10 px-4 py-3.5 text-sm text-white focus:outline-none focus:border-amber-400 font-sans rounded"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] text-stone-400 uppercase tracking-wider mb-2 font-semibold">
                      Direct Phone / Signal
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+971 50 000 0000"
                      className="w-full bg-white/[0.03] border border-white/10 px-4 py-3.5 text-sm text-white focus:outline-none focus:border-amber-400 font-sans rounded"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[11px] text-stone-400 uppercase tracking-wider mb-2 font-semibold">
                    Core Area of Inquiry
                  </label>
                  <select
                    name="focus"
                    value={formData.focus}
                    onChange={handleChange}
                    className="w-full bg-stone-900 border border-white/10 px-4 py-3.5 text-sm text-white focus:outline-none focus:border-amber-400 font-sans rounded"
                  >
                    <option value="Executive Diagnostic Assessment">Executive Diagnostic Assessment</option>
                    <option value="CEO Advisory Retainer">CEO Advisory Retainer</option>
                    <option value="Succession Planning Architecture">Succession Planning Architecture</option>
                    <option value="Executive Team Alignment Program">Executive Team Alignment Program</option>
                    <option value="Founder to Owner Evolution">Founder → Owner Evolution</option>
                    <option value="Sovereign Mandate Governance">Custom Sovereign Mandate</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-[11px] text-stone-400 uppercase tracking-wider mb-2 font-semibold">
                    Strategic Context / Notes (Optional)
                  </label>
                  <textarea
                    name="notes"
                    rows="3"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Briefly describe the governance or organizational milestone you are navigating..."
                    className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 font-sans rounded"
                  />
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

                <div className="flex items-center justify-center gap-2 text-stone-400 font-mono text-[10px]">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  <span>Protected under Avaron Institutional Privacy Charter</span>
                </div>
              </form>
            ) : (
              <div className="text-center py-12 space-y-6">
                <div className="w-16 h-16 bg-amber-400/10 border border-amber-400/40 rounded-full flex items-center justify-center mx-auto text-amber-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-serif text-white">Inquiry Confirmed</h3>
                <p className="text-stone-300 font-sans text-base max-w-md mx-auto leading-relaxed">
                  Thank you, {formData.name || 'Executive'}. Your confidential inquiry has been routed directly to John Kairouz. We will reach out within 24 business hours.
                </p>
                <div className="p-4 bg-black/60 border border-white/10 text-left font-mono text-xs text-stone-400 space-y-1 max-w-md mx-auto rounded">
                  <div><strong>Organization:</strong> {formData.organization}</div>
                  <div><strong>Focus:</strong> {formData.focus}</div>
                  <div><strong>Region:</strong> {formData.region}</div>
                </div>
              </div>
            )}
          </div>

          {/* Hubs Information (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-amber-400 font-bold">
                Global Operations
              </span>
              <h2 className="text-3xl font-serif text-white font-normal">
                International Hubs & Direct Lines
              </h2>
              <p className="text-sm font-sans text-stone-400 font-light leading-relaxed">
                Operating with seamless executive availability across GCC, European, and American time zones.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { city: 'Abu Dhabi', country: 'United Arab Emirates', note: 'GCC & Middle East Sovereign Headquarters' },
                { city: 'Amsterdam', country: 'Netherlands', note: 'European Corporate Advisory Hub' },
                { city: 'Los Angeles', country: 'United States', note: 'Americas & Global Technology Practice' },
              ].map((h, idx) => (
                <div key={idx} className="p-5 bg-white/[0.02] border border-white/10 rounded-xl space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-xl font-medium text-white">{h.city}</span>
                    <span className="font-mono text-[10px] text-amber-400 uppercase font-bold">{h.country}</span>
                  </div>
                  <p className="text-xs font-sans text-stone-400 font-light">{h.note}</p>
                </div>
              ))}
            </div>

            <div className="p-6 bg-stone-950 border border-amber-400/30 rounded-xl space-y-3">
              <div className="font-mono text-xs text-white uppercase font-bold">
                Direct Confidential Email
              </div>
              <a href="mailto:info@avaronadvisory.com" className="inline-flex items-center gap-2 text-amber-300 font-mono text-sm font-semibold hover:underline">
                <Mail className="w-4 h-4" />
                info@avaronadvisory.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
