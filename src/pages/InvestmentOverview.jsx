import React from 'react';
import { Link } from 'react-router-dom';

const InvestmentOverview = () => {
  return (
    <div className="min-h-screen bg-[#f5f7fa] text-slate-800 font-sans selection:bg-[#d4af37] selection:text-[#004d40]">
      
      {/* ==========================================
          1. HERO SECTION
         ========================================== */}
      <section className="relative bg-[#004d40] text-white overflow-hidden py-16 md:py-20 lg:py-24 border-b border-teal-900/60">
        {/* Faint Geometric Detail */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
          <div className="absolute top-0 right-1/4 w-[450px] h-[450px] rounded-full border border-white" />
          <div className="absolute -bottom-24 -left-24 w-[550px] h-[550px] rounded-full border border-white" />
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* HERO LEFT */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-900/70 border border-[#d4af37]/40 text-[#d4af37] text-xs font-semibold tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse"></span>
                SMART INVESTING. STRUCTURED GROWTH.
              </div>

              {/* Responsive Hero Heading Scale: ~32px mobile to ~48px desktop */}
              <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-extrabold text-white tracking-tight leading-[1.15] max-w-2xl mx-auto lg:mx-0">
                Build a Stronger Financial Future
              </h1>

              {/* Body text scale: ~15-16px */}
              <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                Explore structured investment opportunities designed to help you grow your wealth through disciplined investing and transparent financial planning.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to="/auth"
                  className="w-full sm:w-auto px-8 h-12 inline-flex items-center justify-center rounded bg-[#d4af37] text-[#004d40] font-bold text-base shadow-md hover:bg-[#c29f2e] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-center"
                >
                  Invest Now
                </Link>
                <Link
                  to="/calculator"
                  className="w-full sm:w-auto px-8 h-12 inline-flex items-center justify-center rounded bg-transparent text-white border border-white/40 hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0 font-bold text-base transition-all duration-200 text-center"
                >
                  Calculate Returns
                </Link>
              </div>

              {/* Trust Indicator */}
              <div className="pt-2 flex items-center justify-center lg:justify-start gap-3 text-xs sm:text-sm text-slate-300 font-medium">
                <span>Structured</span>
                <span className="text-[#d4af37]">•</span>
                <span>Transparent</span>
                <span className="text-[#d4af37]">•</span>
                <span>Growth-Focused</span>
              </div>
            </div>

            {/* HERO RIGHT: Portfolio Card Visual */}
            <div className="lg:col-span-5 w-full max-w-lg mx-auto lg:max-w-none">
              <div className="bg-white text-slate-800 rounded-xl p-6 sm:p-7 shadow-xl border border-slate-100 relative">
                
                {/* Header Info */}
                <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                  <div>
                    <span className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">Portfolio Overview</span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#004d40] mt-0.5">₹1,25,400</h3>
                  </div>
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shrink-0">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                    </svg>
                    +14.2%
                  </div>
                </div>

                {/* SVG Graph Visual */}
                <div className="py-6">
                  <div className="flex justify-between text-xs text-slate-400 mb-2 font-medium">
                    <span>Q1</span>
                    <span>Q2</span>
                    <span>Q3</span>
                    <span>Q4</span>
                  </div>
                  <svg className="w-full h-32 overflow-visible" viewBox="0 0 300 100" fill="none">
                    <defs>
                      <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#d4af37" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#d4af37" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <line x1="0" y1="20" x2="300" y2="20" stroke="#f1f5f9" strokeDasharray="3 3" />
                    <line x1="0" y1="50" x2="300" y2="50" stroke="#f1f5f9" strokeDasharray="3 3" />
                    <line x1="0" y1="80" x2="300" y2="80" stroke="#f1f5f9" strokeDasharray="3 3" />
                    
                    <path d="M0,85 Q 75,60 150,45 T 300,15 L 300,100 L 0,100 Z" fill="url(#goldGradient)" />
                    <path d="M0,85 Q 75,60 150,45 T 300,15" fill="none" stroke="#d4af37" strokeWidth="3" strokeLinecap="round" />
                    <circle cx="300" cy="15" r="5" fill="#004d40" stroke="#d4af37" strokeWidth="2.5" />
                  </svg>
                </div>

                {/* Information Chips */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="bg-[#f5f7fa] p-3 rounded-lg border border-slate-200/70">
                    <p className="text-[11px] text-slate-500 font-medium">Quarterly Compounding</p>
                    <div className="flex items-center gap-1.5 mt-1">
                      <span className="w-2 h-2 rounded-full bg-[#004d40]"></span>
                      <p className="text-xs sm:text-sm font-semibold text-[#004d40]">Active</p>
                    </div>
                  </div>
                  <div className="bg-[#f5f7fa] p-3 rounded-lg border border-slate-200/70">
                    <p className="text-[11px] text-slate-500 font-medium">Investment Plan</p>
                    <div className="flex items-center gap-1.5 mt-1">
                      <span className="w-2 h-2 rounded-full bg-[#d4af37]"></span>
                      <p className="text-xs sm:text-sm font-semibold text-slate-800">Structured</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          2. TRUST FEATURE STRIP
         ========================================== */}
      <section className="bg-white border-b border-slate-200 py-7">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0 text-[#d4af37]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#004d40]">Structured Investment Plans</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-snug">Clear investment options designed around financial goals.</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0 text-[#d4af37]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#004d40]">Transparent Process</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-snug">A simple and easy-to-understand investment journey.</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0 text-[#d4af37]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#004d40]">Quarterly Compounding</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-snug">A structured approach to quarterly investment growth.</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0 text-[#d4af37]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#004d40]">Secure Experience</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-snug">Designed around a disciplined investment process.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          3. WHY CHOOSE INFINIUM
         ========================================== */}
      <section className="py-16 md:py-20 bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#004d40] tracking-tight">
              Why Choose Infinium Finance Solutions?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2.5">
              Simple, structured and transparent investment solutions designed to support your financial goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* LEFT - 4 Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              <div className="bg-white p-6 rounded-lg border border-slate-200/80 shadow-sm hover:shadow-md hover:border-[#d4af37]/60 hover:-translate-y-0.5 transition-all duration-200">
                <div className="w-9 h-9 rounded bg-teal-50 flex items-center justify-center text-[#d4af37] mb-3.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#004d40] text-base mb-2">Structured Investment Plans</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Choose investment options designed around different financial goals and investment preferences.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-slate-200/80 shadow-sm hover:shadow-md hover:border-[#d4af37]/60 hover:-translate-y-0.5 transition-all duration-200">
                <div className="w-9 h-9 rounded bg-teal-50 flex items-center justify-center text-[#d4af37] mb-3.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#004d40] text-base mb-2">Transparent Growth Model</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Understand your investment journey through a clear and easy-to-follow growth model.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-slate-200/80 shadow-sm hover:shadow-md hover:border-[#d4af37]/60 hover:-translate-y-0.5 transition-all duration-200">
                <div className="w-9 h-9 rounded bg-teal-50 flex items-center justify-center text-[#d4af37] mb-3.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#004d40] text-base mb-2">Quarterly Compounding</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Benefit from a structured quarterly compounding approach to investment growth.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-slate-200/80 shadow-sm hover:shadow-md hover:border-[#d4af37]/60 hover:-translate-y-0.5 transition-all duration-200">
                <div className="w-9 h-9 rounded bg-teal-50 flex items-center justify-center text-[#d4af37] mb-3.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#004d40] text-base mb-2">Family-Oriented Planning</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Build a disciplined approach to long-term financial planning for yourself and your family.
                </p>
              </div>

            </div>

            {/* RIGHT - Financial Growth Panel */}
            <div className="lg:col-span-5">
              <div className="bg-white p-6 sm:p-7 rounded-lg border border-slate-200/80 shadow-sm h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5 pb-4 border-b border-slate-100">
                    <div>
                      <h3 className="font-bold text-[#004d40] text-lg sm:text-xl">Your Financial Growth</h3>
                      <p className="text-xs text-slate-500 font-medium">Growth Projection</p>
                    </div>
                    <span className="text-xs px-2.5 py-1 bg-teal-50 text-[#004d40] font-semibold rounded border border-teal-100">Standard Plan</span>
                  </div>

                  <div className="space-y-3.5 my-4">
                    <div className="flex justify-between items-center py-2 border-b border-slate-100 text-xs sm:text-sm">
                      <span className="text-slate-500 font-medium">Initial Investment</span>
                      <span className="font-bold text-slate-800 text-sm sm:text-base">₹10,000</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-100 text-xs sm:text-sm">
                      <span className="text-slate-500 font-medium">Quarterly Growth</span>
                      <span className="font-bold text-emerald-600 text-sm sm:text-base">+₹600</span>
                    </div>
                    <div className="flex justify-between items-center py-3 text-xs sm:text-sm bg-slate-50 px-3.5 rounded">
                      <span className="text-[#004d40] font-bold">Projected Portfolio</span>
                      <span className="font-bold text-[#004d40] text-base sm:text-lg">₹10,850</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <div className="flex justify-between text-xs text-slate-500 mb-2 font-medium">
                    <span>Progress Target</span>
                    <span>85% Achieved</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-[#004d40] to-[#d4af37] h-full rounded-full w-[85%]"></div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ==========================================
          4. INVESTMENT PLANS PREVIEW
         ========================================== */}
      <section className="py-16 md:py-20 bg-white border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#004d40] tracking-tight">
              Investment Plans for Different Goals
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2.5">
              Choose a structured approach that aligns with your financial objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            
            {/* Card 1 (Featured) */}
            <div className="bg-white rounded-lg border-2 border-[#d4af37] p-6 shadow-md relative flex flex-col justify-between hover:-translate-y-0.5 transition-all duration-200">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#d4af37] text-[#004d40] text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">
                Popular
              </span>
              <div>
                <div className="w-10 h-10 rounded bg-teal-50 flex items-center justify-center text-[#d4af37] mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#004d40] text-lg mb-2">Quarterly Compounding</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  A structured investment approach focused on quarterly compounding and long-term growth.
                </p>
              </div>
              <div>
                <div className="py-2.5 border-t border-slate-100 mb-4">
                  <span className="text-[11px] text-slate-400 uppercase font-semibold">Highlight</span>
                  <p className="text-xs sm:text-sm font-bold text-[#004d40]">Quarterly Growth</p>
                </div>
                <Link
                  to="/auth"
                  className="inline-flex items-center justify-center w-full h-10 rounded bg-[#004d40] text-white text-xs sm:text-sm font-bold hover:bg-teal-900 transition-colors"
                >
                  View Plan →
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg border border-slate-200/80 p-6 shadow-sm hover:shadow-md hover:border-[#d4af37]/60 hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded bg-slate-50 flex items-center justify-center text-[#d4af37] mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#004d40] text-lg mb-2">Tree Family Plan</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  A family-oriented investment model designed for individual and family wealth planning.
                </p>
              </div>
              <div>
                <div className="py-2.5 border-t border-slate-100 mb-4">
                  <span className="text-[11px] text-slate-400 uppercase font-semibold">Highlight</span>
                  <p className="text-xs sm:text-sm font-bold text-[#004d40]">Family Wealth Planning</p>
                </div>
                <Link
                  to="/auth"
                  className="inline-flex items-center justify-center w-full h-10 rounded bg-slate-100 text-[#004d40] text-xs sm:text-sm font-bold hover:bg-slate-200 transition-colors"
                >
                  View Plan →
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg border border-slate-200/80 p-6 shadow-sm hover:shadow-md hover:border-[#d4af37]/60 hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded bg-slate-50 flex items-center justify-center text-[#d4af37] mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#004d40] text-lg mb-2">Systematic Investment</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  A disciplined investment approach designed for regular and consistent contributions.
                </p>
              </div>
              <div>
                <div className="py-2.5 border-t border-slate-100 mb-4">
                  <span className="text-[11px] text-slate-400 uppercase font-semibold">Highlight</span>
                  <p className="text-xs sm:text-sm font-bold text-[#004d40]">Regular Investing</p>
                </div>
                <Link
                  to="/auth"
                  className="inline-flex items-center justify-center w-full h-10 rounded bg-slate-100 text-[#004d40] text-xs sm:text-sm font-bold hover:bg-slate-200 transition-colors"
                >
                  View Plan →
                </Link>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-lg border border-slate-200/80 p-6 shadow-sm hover:shadow-md hover:border-[#d4af37]/60 hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded bg-slate-50 flex items-center justify-center text-[#d4af37] mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#004d40] text-lg mb-2">Custom Growth Plan</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  A flexible approach designed around individual financial objectives and growth targets.
                </p>
              </div>
              <div>
                <div className="py-2.5 border-t border-slate-100 mb-4">
                  <span className="text-[11px] text-slate-400 uppercase font-semibold">Highlight</span>
                  <p className="text-xs sm:text-sm font-bold text-[#004d40]">Goal-Based Growth</p>
                </div>
                <Link
                  to="/auth"
                  className="inline-flex items-center justify-center w-full h-10 rounded bg-slate-100 text-[#004d40] text-xs sm:text-sm font-bold hover:bg-slate-200 transition-colors"
                >
                  View Plan →
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ==========================================
          5. INVESTMENT JOURNEY
         ========================================== */}
      <section className="py-16 md:py-20 bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#004d40] tracking-tight">
              Your Investment Journey, Simplified
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2.5">
              Start your investment journey through a clear and straightforward process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-8 relative">
            
            {/* Horizontal Line for Desktop */}
            <div className="hidden md:block absolute top-1/2 left-12 right-12 h-0.5 bg-slate-200/80 -translate-y-8 z-0" />

            <div className="bg-white p-6 rounded-lg border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-200 relative z-10 text-center md:text-left">
              <span className="text-3xl sm:text-4xl font-black text-[#d4af37] block mb-2">01</span>
              <h3 className="font-bold text-[#004d40] text-base mb-1.5">Register</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Create your account and complete your investor profile.</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-200 relative z-10 text-center md:text-left">
              <span className="text-3xl sm:text-4xl font-black text-[#d4af37] block mb-2">02</span>
              <h3 className="font-bold text-[#004d40] text-base mb-1.5">Choose a Plan</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Select an investment plan according to your financial goals.</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-200 relative z-10 text-center md:text-left">
              <span className="text-3xl sm:text-4xl font-black text-[#d4af37] block mb-2">03</span>
              <h3 className="font-bold text-[#004d40] text-base mb-1.5">Invest</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Make your investment through the available secure process.</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-200 relative z-10 text-center md:text-left">
              <span className="text-3xl sm:text-4xl font-black text-[#d4af37] block mb-2">04</span>
              <h3 className="font-bold text-[#004d40] text-base mb-1.5">Track Your Growth</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Monitor your investment progress and returns easily.</p>
            </div>

          </div>

          <div className="text-center mt-12">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#004d40] hover:text-teal-800 hover:underline transition-colors"
            >
              Explore How It Works <span className="text-[#d4af37]">→</span>
            </Link>
          </div>

        </div>
      </section>

      {/* ==========================================
          6. CALCULATOR CTA
         ========================================== */}
      <section className="bg-[#004d40] text-white py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">See How Your Investment Can Grow</h2>
              <p className="text-slate-200 text-sm sm:text-base mt-2.5 max-w-xl">
                Explore potential investment growth using our investment calculator.
              </p>
              <div className="mt-6">
                <Link
                  to="/calculator"
                  className="inline-flex items-center justify-center h-12 px-7 rounded bg-[#d4af37] text-[#004d40] font-bold text-sm sm:text-base shadow hover:bg-[#c29f2e] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                >
                  Calculate Your Returns
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="bg-teal-900/70 border border-teal-700/60 p-6 rounded-lg text-center lg:text-right shadow-sm">
                <div className="text-xs text-slate-300 uppercase font-semibold tracking-wider">Estimated Returns Indicator</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#d4af37] mt-1">+14.2% APY</div>
                <div className="text-xs text-slate-300 mt-1">Based on compounding projections</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          7. TREE FAMILY PREVIEW
         ========================================== */}
      <section className="py-16 md:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* LEFT */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#004d40] leading-tight">
                Build Wealth Together With the Tree Family System
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Our Tree Family model is designed to support individual and family-oriented financial growth through structured distribution.
              </p>

              <ul className="space-y-3.5">
                {[
                  'Family-oriented wealth planning',
                  'Structured distribution',
                  'Long-term financial growth',
                  'Disciplined saving and investment',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-semibold">
                    <span className="w-5 h-5 rounded-full bg-teal-50 text-[#d4af37] flex items-center justify-center font-bold text-xs shrink-0 border border-teal-100">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <Link
                  to="/how-it-works"
                  className="inline-flex items-center justify-center h-11 px-6 rounded bg-[#004d40] text-white text-xs sm:text-sm font-bold hover:bg-teal-900 transition-colors"
                >
                  Explore Tree Family Plan →
                </Link>
              </div>
            </div>

            {/* RIGHT Diagram Visual */}
            <div className="lg:col-span-6">
              <div className="bg-[#f5f7fa] p-8 rounded-xl border border-slate-200/80 text-center">
                
                <div className="inline-block bg-white border-2 border-[#004d40] px-6 py-3.5 rounded-lg shadow-sm">
                  <span className="text-[10px] text-[#d4af37] font-bold uppercase tracking-wider block">Primary Investor</span>
                  <span className="text-sm font-extrabold text-[#004d40]">MAIN ACCOUNT</span>
                </div>

                <div className="w-0.5 h-6 bg-[#d4af37] mx-auto my-2"></div>
                <div className="w-1/2 h-0.5 bg-[#d4af37] mx-auto"></div>
                <div className="flex justify-between w-1/2 mx-auto">
                  <div className="w-0.5 h-6 bg-[#d4af37]"></div>
                  <div className="w-0.5 h-6 bg-[#d4af37]"></div>
                </div>

                <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
                  <div className="bg-white border border-slate-200/90 p-3.5 rounded-lg shadow-sm">
                    <span className="text-[10px] text-slate-400 font-semibold block">Family Member</span>
                    <span className="text-xs sm:text-sm font-bold text-[#004d40]">Allocation A</span>
                  </div>
                  <div className="bg-white border border-slate-200/90 p-3.5 rounded-lg shadow-sm">
                    <span className="text-[10px] text-slate-400 font-semibold block">Family Member</span>
                    <span className="text-xs sm:text-sm font-bold text-[#004d40]">Allocation B</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          8. FINANCIAL PHILOSOPHY
         ========================================== */}
      <section className="py-16 md:py-20 bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#004d40] tracking-tight">
              Designed Around Clarity and Discipline
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2.5">
              A structured approach to help investors understand and manage their investment journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            <div className="bg-white p-7 rounded-lg border border-slate-200/80 shadow-sm text-center hover:shadow-md transition-all duration-200">
              <div className="w-10 h-10 rounded-full bg-teal-50 text-[#004d40] font-extrabold text-sm flex items-center justify-center mx-auto mb-4 border border-teal-100">
                01
              </div>
              <h3 className="font-bold text-[#004d40] text-base sm:text-lg mb-2">Clear Process</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Understand each stage of your investment journey clearly and thoroughly without hidden complexity.
              </p>
            </div>

            <div className="bg-white p-7 rounded-lg border border-slate-200/80 shadow-sm text-center hover:shadow-md transition-all duration-200">
              <div className="w-10 h-10 rounded-full bg-teal-50 text-[#004d40] font-extrabold text-sm flex items-center justify-center mx-auto mb-4 border border-teal-100">
                02
              </div>
              <h3 className="font-bold text-[#004d40] text-base sm:text-lg mb-2">Structured Approach</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Choose investment options aligned with your specific short and long-term financial objectives.
              </p>
            </div>

            <div className="bg-white p-7 rounded-lg border border-slate-200/80 shadow-sm text-center hover:shadow-md transition-all duration-200">
              <div className="w-10 h-10 rounded-full bg-teal-50 text-[#004d40] font-extrabold text-sm flex items-center justify-center mx-auto mb-4 border border-teal-100">
                03
              </div>
              <h3 className="font-bold text-[#004d40] text-base sm:text-lg mb-2">Long-Term Focus</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Build consistent financial habits with a disciplined, compounding approach over time.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default InvestmentOverview;