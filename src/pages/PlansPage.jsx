import React, { useState } from 'react';
import {
  TrendingUp,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Calculator,
  Compass,
  Layers,
  BarChart3,
  Clock,
  Briefcase,
  Users,
  ArrowUpRight,
  ChevronRight,
  Lock,
  Sparkles
} from 'lucide-react';

// ============================================================================
// INFINIUM FINANCE SOLUTIONS — BRAND DESIGN SYSTEM
// Primary: #004D40 (Deep Teal)
// Accent: #D4AF37 (Luxury Gold)
// Background: #F8FAFC (Slate Cool-Gray)
// White: #FFFFFF
// Body Text: #334155 / Headings: #0F172A
// ============================================================================

export default function InvestmentPlansPage() {
  const [selectedPlan, setSelectedPlan] = useState('quarterly-compounding');

  return (
    <div className="bg-[#F8FAFC] text-slate-700 font-sans min-h-screen antialiased selection:bg-[#004D40] selection:text-white overflow-x-hidden">
      
      {/* =========================================================================
          SECTION 1 — HERO SECTION
          ========================================================================= */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-slate-50/50 to-[#F8FAFC] border-b border-slate-200/80 overflow-hidden">
        {/* Subtle Background Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#004D40]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-7">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#004D40]/10 text-[#004D40] border border-[#004D40]/20 w-fit shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] shrink-0 animate-pulse" />
                <span>Infinium Finance Solutions</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.18]">
                Investment Plans Designed Around Your Goals
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
                Choose a structured investment approach designed by Infinium Finance Solutions to support your financial objectives, time horizon, and long-term growth priorities.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <a
                  href="#plan-cards"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg font-bold text-slate-950 bg-[#D4AF37] hover:bg-[#c29f2e] active:bg-[#b59328] transition-all duration-200 shadow-md hover:shadow-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D4AF37] group"
                >
                  Explore Plans
                  <ArrowRight className="ml-2 h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#compounding-highlight"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg font-bold text-[#004D40] bg-white hover:bg-slate-100 active:bg-slate-200 transition-all duration-200 border border-slate-200/90 shadow-sm hover:shadow text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#004D40] group"
                >
                  <Calculator className="mr-2 h-4 w-4 shrink-0 text-[#D4AF37]" />
                  Calculate Returns
                </a>
              </div>

              {/* Trust/Value Indicator */}
              <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-600 font-medium border-t border-slate-200/60 pt-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#D4AF37] shrink-0" />
                  <span>Structured Approach</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#D4AF37] shrink-0" />
                  <span>Transparent Model</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#D4AF37] shrink-0" />
                  <span>Fiduciary Growth</span>
                </div>
              </div>
            </div>

            {/* Right Column: Portfolio Overview Card */}
            <div className="lg:col-span-5 w-full flex items-center justify-center">
              <div className="w-full bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-900/5 relative overflow-hidden backdrop-blur-sm">
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#004D40]/5 rounded-full blur-2xl pointer-events-none" />
                
                {/* Card Header Tag */}
                <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-3 h-3 rounded-full bg-[#004D40] ring-4 ring-[#004D40]/10" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Portfolio Overview</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 shadow-2xs">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-600" /> Active Growth
                  </span>
                </div>

                {/* Portfolio Value Display */}
                <div className="my-6">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Portfolio Value</span>
                  <div className="flex items-baseline justify-between mt-1.5">
                    <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-mono">₹1,25,400</span>
                    <span className="text-xs sm:text-sm font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200/80">
                      +14.2%
                    </span>
                  </div>
                </div>

                {/* Growth Visualization Bars */}
                <div className="space-y-2.5 mb-6">
                  <div className="flex justify-between text-xs text-slate-500 font-semibold">
                    <span>Performance Trajectory</span>
                    <span className="text-[#004D40] font-bold">Q3 Benchmark</span>
                  </div>
                  <div className="h-20 w-full bg-[#F8FAFC] rounded-xl p-3 flex items-end justify-between gap-2 border border-slate-200/70">
                    <div className="w-1/6 bg-[#004D40]/20 h-[35%] rounded-xs transition-all duration-300 hover:bg-[#004D40]/30" />
                    <div className="w-1/6 bg-[#004D40]/35 h-[48%] rounded-xs transition-all duration-300 hover:bg-[#004D40]/45" />
                    <div className="w-1/6 bg-[#004D40]/55 h-[62%] rounded-xs transition-all duration-300 hover:bg-[#004D40]/65" />
                    <div className="w-1/6 bg-[#004D40]/75 h-[75%] rounded-xs transition-all duration-300 hover:bg-[#004D40]/85" />
                    <div className="w-1/6 bg-[#004D40] h-[88%] rounded-xs shadow-2xs" />
                    <div className="w-1/6 bg-[#D4AF37] h-[100%] rounded-xs shadow-xs relative group">
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] py-0.5 px-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity font-mono">
                        Target
                      </div>
                    </div>
                  </div>
                </div>

                {/* Attributes Summary Grid */}
                <div className="grid grid-cols-2 gap-3.5 pt-4 border-t border-slate-100 text-xs">
                  <div className="bg-[#F8FAFC] p-3.5 rounded-xl border border-slate-200/70">
                    <span className="text-slate-500 block mb-1 font-medium">Investment Approach</span>
                    <span className="font-extrabold text-[#004D40] text-sm block">Structured</span>
                  </div>
                  <div className="bg-[#F8FAFC] p-3.5 rounded-xl border border-slate-200/70">
                    <span className="text-slate-500 block mb-1 font-medium">Quarterly Growth</span>
                    <span className="font-extrabold text-slate-900 text-sm block font-mono">+₹600</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — CHOOSE WITH CLARITY (SECTION INTRO)
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#D4AF37] block">
              CHOOSE WITH CLARITY
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Investment Plans for Different Financial Goals
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-normal pt-1">
              Explore structured investment options crafted by Infinium Finance Solutions to support different financial objectives and investment horizons.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — INVESTMENT PLAN CARDS (4 EQUAL HEIGHT CARDS)
          ========================================================================= */}
      <section id="plan-cards" className="py-16 sm:py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
            
            {/* CARD 1: Quarterly Compounding (RECOMMENDED) */}
            <div className="relative bg-white rounded-2xl p-6 sm:p-7 border-2 border-[#D4AF37] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full group">
              {/* Popular Badge */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-slate-950 text-[11px] font-extrabold uppercase tracking-widest px-4 py-1 rounded-full shadow-sm flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 fill-slate-950" /> POPULAR
              </div>

              <div className="flex flex-col flex-grow pt-2">
                <div className="w-12 h-12 rounded-xl bg-[#004D40]/10 text-[#004D40] flex items-center justify-center mb-6 shrink-0 border border-[#004D40]/20 group-hover:scale-105 transition-transform">
                  <BarChart3 className="w-6 h-6" />
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3 leading-snug">
                  Quarterly Compounding
                </h3>

                <p className="text-sm sm:text-[0.9375rem] text-slate-600 leading-relaxed mb-6">
                  A structured investment approach focused on disciplined quarterly compounding and long-term capital growth.
                </p>

                <div className="space-y-3.5 pt-6 border-t border-slate-100 text-sm mt-auto">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Ideal For</span>
                    <span className="font-extrabold text-slate-900">Long-Term Growth</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Approach</span>
                    <span className="font-extrabold text-[#004D40]">Quarterly Compound</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Key Benefit</span>
                    <span className="font-extrabold text-slate-900">Structured Growth</span>
                  </div>
                  <div className="flex justify-between items-center pt-1">
                    <span className="text-slate-500 font-medium">Strategy / Risk</span>
                    <span className="inline-flex items-center font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-md text-xs border border-emerald-200/80">
                      Balanced
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-2">
                <button
                  onClick={() => setSelectedPlan('quarterly-compounding')}
                  className="w-full inline-flex items-center justify-center px-4 py-3 rounded-lg text-sm font-extrabold text-white bg-[#004D40] hover:bg-[#00382E] active:bg-[#002B23] transition-all duration-200 shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#004D40] group/btn"
                >
                  View Plan
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>

            {/* CARD 2: Tree Family Plan */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#004D40]/30 transition-all duration-300 flex flex-col justify-between h-full group">
              <div className="flex flex-col flex-grow">
                <div className="w-12 h-12 rounded-xl bg-[#F8FAFC] text-[#004D40] flex items-center justify-center mb-6 shrink-0 border border-slate-200/80 group-hover:scale-105 transition-transform">
                  <Users className="w-6 h-6" />
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3 leading-snug">
                  Tree Family Plan
                </h3>

                <p className="text-sm sm:text-[0.9375rem] text-slate-600 leading-relaxed mb-6">
                  A family-oriented investment approach designed to support structured wealth planning across generations.
                </p>

                <div className="space-y-3.5 pt-6 border-t border-slate-100 text-sm mt-auto">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Ideal For</span>
                    <span className="font-extrabold text-slate-900">Family Wealth</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Approach</span>
                    <span className="font-extrabold text-[#004D40]">Long-Term Horizon</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Key Benefit</span>
                    <span className="font-extrabold text-slate-900">Family Security</span>
                  </div>
                  <div className="flex justify-between items-center pt-1">
                    <span className="text-slate-500 font-medium">Strategy / Risk</span>
                    <span className="inline-flex items-center font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-md text-xs border border-emerald-200/80">
                      Conservative
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-2">
                <button
                  onClick={() => setSelectedPlan('tree-family-plan')}
                  className="w-full inline-flex items-center justify-center px-4 py-3 rounded-lg text-sm font-extrabold text-[#004D40] bg-[#F8FAFC] hover:bg-slate-100 active:bg-slate-200 transition-all duration-200 border border-slate-200/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#004D40] group/btn"
                >
                  View Plan
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>

            {/* CARD 3: Systematic Investment */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#004D40]/30 transition-all duration-300 flex flex-col justify-between h-full group">
              <div className="flex flex-col flex-grow">
                <div className="w-12 h-12 rounded-xl bg-[#F8FAFC] text-[#004D40] flex items-center justify-center mb-6 shrink-0 border border-slate-200/80 group-hover:scale-105 transition-transform">
                  <Clock className="w-6 h-6" />
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3 leading-snug">
                  Systematic Investment
                </h3>

                <p className="text-sm sm:text-[0.9375rem] text-slate-600 leading-relaxed mb-6">
                  A disciplined investment approach designed for regular contributions and consistent financial growth.
                </p>

                <div className="space-y-3.5 pt-6 border-t border-slate-100 text-sm mt-auto">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Ideal For</span>
                    <span className="font-extrabold text-slate-900">Regular Investing</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Approach</span>
                    <span className="font-extrabold text-[#004D40]">Periodic SIP</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Key Benefit</span>
                    <span className="font-extrabold text-slate-900">Disciplined Savings</span>
                  </div>
                  <div className="flex justify-between items-center pt-1">
                    <span className="text-slate-500 font-medium">Strategy / Risk</span>
                    <span className="inline-flex items-center font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-md text-xs border border-emerald-200/80">
                      Low Volatility
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-2">
                <button
                  onClick={() => setSelectedPlan('systematic-investment')}
                  className="w-full inline-flex items-center justify-center px-4 py-3 rounded-lg text-sm font-extrabold text-[#004D40] bg-[#F8FAFC] hover:bg-slate-100 active:bg-slate-200 transition-all duration-200 border border-slate-200/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#004D40] group/btn"
                >
                  View Plan
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>

            {/* CARD 4: Custom Growth Plan */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#004D40]/30 transition-all duration-300 flex flex-col justify-between h-full group">
              <div className="flex flex-col flex-grow">
                <div className="w-12 h-12 rounded-xl bg-[#F8FAFC] text-[#004D40] flex items-center justify-center mb-6 shrink-0 border border-slate-200/80 group-hover:scale-105 transition-transform">
                  <Briefcase className="w-6 h-6" />
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3 leading-snug">
                  Custom Growth Plan
                </h3>

                <p className="text-sm sm:text-[0.9375rem] text-slate-600 leading-relaxed mb-6">
                  A flexible investment approach tailored around unique financial objectives, timelines, and allocation goals.
                </p>

                <div className="space-y-3.5 pt-6 border-t border-slate-100 text-sm mt-auto">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Ideal For</span>
                    <span className="font-extrabold text-slate-900">Goal-Based Growth</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Approach</span>
                    <span className="font-extrabold text-[#004D40]">Tailored Strategy</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Key Benefit</span>
                    <span className="font-extrabold text-slate-900">Maximum Flexibility</span>
                  </div>
                  <div className="flex justify-between items-center pt-1">
                    <span className="text-slate-500 font-medium">Strategy / Risk</span>
                    <span className="inline-flex items-center font-bold text-[#004D40] bg-[#004D40]/10 px-2.5 py-0.5 rounded-md text-xs border border-[#004D40]/20">
                      Bespoke
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-2">
                <button
                  onClick={() => setSelectedPlan('custom-growth-plan')}
                  className="w-full inline-flex items-center justify-center px-4 py-3 rounded-lg text-sm font-extrabold text-[#004D40] bg-[#F8FAFC] hover:bg-slate-100 active:bg-slate-200 transition-all duration-200 border border-slate-200/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#004D40] group/btn"
                >
                  View Plan
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4 — COMPARISON TABLE
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#D4AF37] mb-2 block">
              SIDE-BY-SIDE EVALUATION
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Compare Investment Plans
            </h2>
            <p className="text-base text-slate-600 mt-3 leading-relaxed font-normal">
              Evaluate key attributes side-by-side to determine which Infinium Finance Solutions strategy matches your portfolio requirements.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200/90 shadow-sm bg-white">
            <table className="w-full text-left border-collapse min-w-[760px]">
              <thead>
                <tr className="border-b border-slate-200 bg-[#F8FAFC]">
                  <th className="py-5 px-6 text-xs font-extrabold uppercase tracking-wider text-[#004D40]">Plan Name</th>
                  <th className="py-5 px-6 text-xs font-extrabold uppercase tracking-wider text-slate-700">Ideal For</th>
                  <th className="py-5 px-6 text-xs font-extrabold uppercase tracking-wider text-slate-700">Investment Approach</th>
                  <th className="py-5 px-6 text-xs font-extrabold uppercase tracking-wider text-slate-700">Growth Style</th>
                  <th className="py-5 px-6 text-xs font-extrabold uppercase tracking-wider text-slate-700">Time Horizon</th>
                  <th className="py-5 px-6 text-xs font-extrabold uppercase tracking-wider text-[#004D40] text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm sm:text-[0.9375rem]">
                
                {/* Row 1 - Quarterly Compounding */}
                <tr className="hover:bg-slate-50/90 transition-colors">
                  <td className="py-5 px-6 font-extrabold text-slate-900">
                    <div className="flex items-center gap-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] shrink-0" />
                      <span className="text-sm sm:text-base font-extrabold text-slate-900">Quarterly Compounding</span>
                    </div>
                  </td>
                  <td className="py-5 px-6 text-slate-600 font-medium">Long-Term Growth</td>
                  <td className="py-5 px-6 font-bold text-[#004D40]">Quarterly Compounding</td>
                  <td className="py-5 px-6 text-slate-600 font-medium">Structured Compound</td>
                  <td className="py-5 px-6 text-slate-600 font-medium">3 – 5+ Years</td>
                  <td className="py-5 px-6 text-right">
                    <a href="#contact-advisory" className="inline-flex items-center text-xs font-extrabold text-[#004D40] hover:text-[#D4AF37] transition-colors group">
                      Select <ArrowUpRight className="w-4 h-4 ml-0.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  </td>
                </tr>

                {/* Row 2 - Tree Family Plan */}
                <tr className="hover:bg-slate-50/90 transition-colors">
                  <td className="py-5 px-6 font-extrabold text-slate-900">
                    <div className="flex items-center gap-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-300 shrink-0" />
                      <span className="text-sm sm:text-base font-extrabold text-slate-900">Tree Family Plan</span>
                    </div>
                  </td>
                  <td className="py-5 px-6 text-slate-600 font-medium">Family Wealth Planning</td>
                  <td className="py-5 px-6 font-bold text-[#004D40]">Long-Term Planning</td>
                  <td className="py-5 px-6 text-slate-600 font-medium">Generational Growth</td>
                  <td className="py-5 px-6 text-slate-600 font-medium">5 – 10+ Years</td>
                  <td className="py-5 px-6 text-right">
                    <a href="#contact-advisory" className="inline-flex items-center text-xs font-extrabold text-[#004D40] hover:text-[#D4AF37] transition-colors group">
                      Select <ArrowUpRight className="w-4 h-4 ml-0.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  </td>
                </tr>

                {/* Row 3 - Systematic Investment */}
                <tr className="hover:bg-slate-50/90 transition-colors">
                  <td className="py-5 px-6 font-extrabold text-slate-900">
                    <div className="flex items-center gap-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-300 shrink-0" />
                      <span className="text-sm sm:text-base font-extrabold text-slate-900">Systematic Investment</span>
                    </div>
                  </td>
                  <td className="py-5 px-6 text-slate-600 font-medium">Regular Investing</td>
                  <td className="py-5 px-6 font-bold text-[#004D40]">Systematic</td>
                  <td className="py-5 px-6 text-slate-600 font-medium">Consistent Periodic</td>
                  <td className="py-5 px-6 text-slate-600 font-medium">1 – 3 Years</td>
                  <td className="py-5 px-6 text-right">
                    <a href="#contact-advisory" className="inline-flex items-center text-xs font-extrabold text-[#004D40] hover:text-[#D4AF37] transition-colors group">
                      Select <ArrowUpRight className="w-4 h-4 ml-0.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  </td>
                </tr>

                {/* Row 4 - Custom Growth Plan */}
                <tr className="hover:bg-slate-50/90 transition-colors">
                  <td className="py-5 px-6 font-extrabold text-slate-900">
                    <div className="flex items-center gap-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-300 shrink-0" />
                      <span className="text-sm sm:text-base font-extrabold text-slate-900">Custom Growth Plan</span>
                    </div>
                  </td>
                  <td className="py-5 px-6 text-slate-600 font-medium">Goal-Based Growth</td>
                  <td className="py-5 px-6 font-bold text-[#004D40]">Custom Strategy</td>
                  <td className="py-5 px-6 text-slate-600 font-medium">Tailored Flexibility</td>
                  <td className="py-5 px-6 text-slate-600 font-medium">Flexible Horizon</td>
                  <td className="py-5 px-6 text-right">
                    <a href="#contact-advisory" className="inline-flex items-center text-xs font-extrabold text-[#004D40] hover:text-[#D4AF37] transition-colors group">
                      Select <ArrowUpRight className="w-4 h-4 ml-0.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5 — WHICH PLAN IS RIGHT FOR YOU (4 STEPS EQUAL HEIGHT)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#D4AF37] mb-2 block">
              GUIDED SELECTION PROCESS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Which Investment Plan Is Right for You?
            </h2>
            <p className="text-base text-slate-600 mt-3 leading-relaxed font-normal">
              Follow our four-step structured roadmap to align your capital with the ideal wealth growth plan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            
            {/* Step 1 */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full relative group">
              <div>
                <span className="text-4xl font-black text-[#D4AF37] block mb-4 font-mono group-hover:scale-105 transition-transform origin-left">
                  01
                </span>
                <h3 className="text-lg font-extrabold text-slate-900 mb-2.5">Define Your Goal</h3>
                <p className="text-sm sm:text-[0.9375rem] text-slate-600 leading-relaxed">
                  Determine whether your primary focus is steady capital expansion, generational inheritance, or structured periodic compounding.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full relative group">
              <div>
                <span className="text-4xl font-black text-[#D4AF37] block mb-4 font-mono group-hover:scale-105 transition-transform origin-left">
                  02
                </span>
                <h3 className="text-lg font-extrabold text-slate-900 mb-2.5">Consider Time Horizon</h3>
                <p className="text-sm sm:text-[0.9375rem] text-slate-600 leading-relaxed">
                  Match your capital allocation with short-term liquidity needs or multi-year wealth accumulation timelines.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full relative group">
              <div>
                <span className="text-4xl font-black text-[#D4AF37] block mb-4 font-mono group-hover:scale-105 transition-transform origin-left">
                  03
                </span>
                <h3 className="text-lg font-extrabold text-slate-900 mb-2.5">Choose Your Approach</h3>
                <p className="text-sm sm:text-[0.9375rem] text-slate-600 leading-relaxed">
                  Select between structured quarterly compounding, long-term generational planning, or bespoke tailored allocations.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full relative group">
              <div>
                <span className="text-4xl font-black text-[#D4AF37] block mb-4 font-mono group-hover:scale-105 transition-transform origin-left">
                  04
                </span>
                <h3 className="text-lg font-extrabold text-slate-900 mb-2.5">Select Your Plan</h3>
                <p className="text-sm sm:text-[0.9375rem] text-slate-600 leading-relaxed">
                  Finalize your strategy parameters with our dedicated advisors to initiate your structured wealth expansion.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6 — FEATURED GROWTH (DEEP TEAL)
          ========================================================================= */}
      <section id="compounding-highlight" className="py-16 sm:py-20 bg-[#004D40] text-white relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-radial from-white/5 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/10 text-[#D4AF37] border border-white/15 w-fit">
                FEATURED HIGHLIGHT
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Let Your Investment Growth Compound
              </h2>
              <p className="text-base sm:text-lg text-slate-100 leading-relaxed max-w-xl font-normal">
                Discover how disciplined quarterly compounding at Infinium Finance Solutions can support long-term capital preservation and structured wealth accumulation.
              </p>
              <div className="pt-3">
                <a
                  href="#contact-advisory"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg font-extrabold text-slate-950 bg-[#D4AF37] hover:bg-[#c29f2e] active:bg-[#b59328] transition-all duration-200 shadow-md hover:shadow-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D4AF37] group"
                >
                  Calculate Your Returns
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Right Financial Visual (ENLARGED & PERFECTLY ALIGNED) */}
            <div className="lg:col-span-6 w-full flex items-center justify-center">
              <div className="w-full bg-[#00382E] border border-white/20 rounded-2xl p-7 sm:p-9 space-y-6 text-white shadow-2xl relative overflow-hidden backdrop-blur-xs">
                <div className="flex justify-between items-center border-b border-white/15 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">Compounding Model</span>
                  <span className="text-xs text-slate-200 font-medium">Quarterly Schedule</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black/25 p-4.5 rounded-xl border border-white/10">
                    <span className="text-xs text-slate-200 block mb-1 font-medium">Initial Allocation</span>
                    <span className="text-2xl sm:text-3xl font-black text-white font-mono">₹10,000</span>
                  </div>
                  <div className="bg-black/25 p-4.5 rounded-xl border border-white/10">
                    <span className="text-xs text-slate-200 block mb-1 font-medium">Quarterly Addition</span>
                    <span className="text-2xl sm:text-3xl font-black text-[#D4AF37] font-mono">+₹600</span>
                  </div>
                </div>

                <div className="bg-black/25 p-5 rounded-xl border border-white/10 flex justify-between items-center">
                  <div>
                    <span className="text-xs text-slate-200 block mb-0.5 font-medium">Projected Portfolio Value</span>
                    <span className="text-2xl sm:text-3xl font-black text-white font-mono">₹10,850</span>
                  </div>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-3 py-1.5 rounded-md shadow-2xs">
                    +8.5% Rate
                  </span>
                </div>

                {/* Growth Line Illustration */}
                <div className="pt-2">
                  <svg className="w-full h-14 text-[#D4AF37] drop-shadow-xs" viewBox="0 0 300 40" fill="none">
                    <path d="M0 35 Q 75 30, 150 18 T 300 5" stroke="currentColor" strokeWidth="3.5" fill="none" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7 — TRANSPARENCY & CLARITY (EQUAL HEIGHT 3 CARDS)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#D4AF37] mb-2 block">
              TRANSPARENCY & TRUST
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Designed Around Clarity and Discipline
            </h2>
            <p className="text-base text-slate-600 mt-3 leading-relaxed font-normal">
              At Infinium Finance Solutions, every investment plan is crafted to be straightforward, disciplined, and strictly transparent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#004D40]/10 text-[#004D40] flex items-center justify-center mb-5 border border-[#004D40]/20 group-hover:scale-105 transition-transform">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2.5">01 — Clear Process</h3>
                <p className="text-sm sm:text-[0.9375rem] text-slate-600 leading-relaxed">
                  Understand every milestone of your wealth creation process from initial setup to long-term compounding execution.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#004D40]/10 text-[#004D40] flex items-center justify-center mb-5 border border-[#004D40]/20 group-hover:scale-105 transition-transform">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2.5">02 — Structured Approach</h3>
                <p className="text-sm sm:text-[0.9375rem] text-slate-600 leading-relaxed">
                  Choose a methodology aligned with your exact risk appetite, timeline, and strategic asset allocation criteria.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#004D40]/10 text-[#004D40] flex items-center justify-center mb-5 border border-[#004D40]/20 group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2.5">03 — Transparent Communication</h3>
                <p className="text-sm sm:text-[0.9375rem] text-slate-600 leading-relaxed">
                  Receive straightforward performance updates and reporting without hidden fees or obscure financial terminology.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}