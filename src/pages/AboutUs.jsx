// import React from 'react';
// import { Link } from 'react-router-dom';

// const About = () => {
//   return (
//     <div className="min-h-screen bg-[#F5F7FA] text-slate-800 font-sans selection:bg-[#D4AF37] selection:text-[#004D40] antialiased">
      
//       {/* ==========================================
//           1. HERO SECTION
//          ========================================== */}
//       <section className="relative bg-[#004D40] text-white overflow-hidden py-16 sm:py-20 lg:py-24 border-b border-teal-900/60">
//         {/* Subtle Background Structural Geometry */}
//         <div className="absolute inset-0 pointer-events-none opacity-[0.03]" aria-hidden="true">
//           <div className="absolute top-0 right-1/3 w-[500px] h-[500px] rounded-full border border-white" />
//           <div className="absolute -bottom-32 -left-20 w-[600px] h-[600px] rounded-full border border-white" />
//           <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:28px_28px]" />
//         </div>

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
//             {/* HERO LEFT */}
//             <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
//               <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-900/80 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold tracking-wider uppercase">
//                 <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
//                 ABOUT INFINIUM FINANCE SOLUTIONS
//               </div>

//               <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-extrabold text-white tracking-tight leading-[1.15] max-w-2xl mx-auto lg:mx-0">
//                 Building Confidence Through Structured Investing
//               </h1>

//               <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
//                 Infinium Finance Solutions is focused on creating a clear, structured and transparent investment experience designed around disciplined financial planning.
//               </p>

//               <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
//                 <Link
//                   to="/auth"
//                   className="w-full sm:w-auto min-w-[200px] h-12 px-8 inline-flex items-center justify-center rounded bg-[#D4AF37] text-[#004D40] font-bold text-base shadow-md hover:bg-[#c29f2e] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-center"
//                 >
//                   Explore Investment Plans
//                 </Link>
//                 <Link
//                   to="/how-it-works"
//                   className="w-full sm:w-auto min-w-[160px] h-12 px-8 inline-flex items-center justify-center rounded bg-transparent text-white border border-white/40 hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0 font-bold text-base transition-all duration-200 text-center"
//                 >
//                   How It Works
//                 </Link>
//               </div>
//             </div>

//             {/* HERO RIGHT: Concept Card */}
//             <div className="lg:col-span-5 w-full max-w-lg mx-auto lg:max-w-none">
//               <div className="bg-white text-slate-800 rounded-xl p-6 sm:p-8 shadow-xl border border-slate-100/80 relative">
                
//                 <div className="flex items-center justify-between pb-5 border-b border-slate-100">
//                   <div>
//                     <span className="text-[11px] text-[#D4AF37] uppercase tracking-wider font-extrabold block">CORE STRATEGY</span>
//                     <h2 className="text-xl sm:text-2xl font-extrabold text-[#004D40] mt-0.5">OUR APPROACH</h2>
//                   </div>
//                   <span className="text-xs px-2.5 py-1 bg-teal-50 text-[#004D40] font-bold rounded border border-teal-100/80">
//                     DISCIPLINED
//                   </span>
//                 </div>

//                 <div className="py-6 space-y-3.5">
//                   <div className="p-4 rounded-lg bg-[#F5F7FA] border border-slate-200/70 flex items-center justify-between transition-colors hover:border-slate-300">
//                     <div className="flex items-center gap-3">
//                       <span className="w-2.5 h-2.5 rounded-full bg-[#004D40]" />
//                       <span className="font-bold text-[#004D40] text-sm sm:text-base">Structured</span>
//                     </div>
//                     <span className="text-xs text-slate-500 font-medium">Defined Framework</span>
//                   </div>

//                   <div className="p-4 rounded-lg bg-[#F5F7FA] border border-slate-200/70 flex items-center justify-between transition-colors hover:border-slate-300">
//                     <div className="flex items-center gap-3">
//                       <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]" />
//                       <span className="font-bold text-slate-800 text-sm sm:text-base">Transparent</span>
//                     </div>
//                     <span className="text-xs text-slate-500 font-medium">Clear Expectations</span>
//                   </div>

//                   <div className="p-4 rounded-lg bg-[#F5F7FA] border border-slate-200/70 flex items-center justify-between transition-colors hover:border-slate-300">
//                     <div className="flex items-center gap-3">
//                       <span className="w-2.5 h-2.5 rounded-full bg-slate-400" />
//                       <span className="font-bold text-slate-800 text-sm sm:text-base">Disciplined</span>
//                     </div>
//                     <span className="text-xs text-slate-500 font-medium">Long-Term Focus</span>
//                   </div>
//                 </div>

//                 <div className="pt-2 text-center border-t border-slate-100">
//                   <p className="text-xs text-slate-500 font-medium pt-2">
//                     Focused on clarity and long-term financial perspectives.
//                   </p>
//                 </div>

//               </div>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* ==========================================
//           2. WHO WE ARE
//          ========================================== */}
//       <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            
//             {/* LEFT */}
//             <div className="lg:col-span-7 space-y-5 flex flex-col justify-center">
//               <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#004D40] tracking-tight">
//                 Who We Are
//               </h2>
//               <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
//                 Infinium Finance Solutions is built around a simple idea: investment decisions should be structured, understandable and aligned with clearly defined financial objectives.
//               </p>
//               <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
//                 Our approach focuses on helping investors understand the journey behind their investment — from selecting an appropriate plan to tracking progress over time.
//               </p>
//             </div>

//             {/* RIGHT */}
//             <div className="lg:col-span-5 flex">
//               <div className="w-full bg-[#F5F7FA] p-6 sm:p-8 rounded-xl border border-slate-200/80 shadow-xs flex flex-col justify-between">
//                 <div>
//                   <h3 className="text-lg sm:text-xl font-bold text-[#004D40] mb-6 pb-3 border-b border-slate-200">
//                     Built Around Clarity
//                   </h3>

//                   <div className="space-y-5">
//                     <div className="flex items-start gap-4">
//                       <span className="text-xs font-extrabold text-[#D4AF37] bg-white w-8 h-8 rounded-md border border-slate-200/80 flex items-center justify-center shrink-0 shadow-xs mt-0.5">
//                         01
//                       </span>
//                       <div>
//                         <h4 className="font-bold text-[#004D40] text-base">Clear Planning</h4>
//                         <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
//                           Well-defined processes that make goals easy to map out.
//                         </p>
//                       </div>
//                     </div>

//                     <div className="flex items-start gap-4">
//                       <span className="text-xs font-extrabold text-[#D4AF37] bg-white w-8 h-8 rounded-md border border-slate-200/80 flex items-center justify-center shrink-0 shadow-xs mt-0.5">
//                         02
//                       </span>
//                       <div>
//                         <h4 className="font-bold text-[#004D40] text-base">Structured Approach</h4>
//                         <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
//                           Organized options aligned with investor expectations.
//                         </p>
//                       </div>
//                     </div>

//                     <div className="flex items-start gap-4">
//                       <span className="text-xs font-extrabold text-[#D4AF37] bg-white w-8 h-8 rounded-md border border-slate-200/80 flex items-center justify-center shrink-0 shadow-xs mt-0.5">
//                         03
//                       </span>
//                       <div>
//                         <h4 className="font-bold text-[#004D40] text-base">Long-Term Thinking</h4>
//                         <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
//                           Consistent wealth perspectives rather than speculative moves.
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//               </div>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* ==========================================
//           3. OUR APPROACH
//          ========================================== */}
//       <section className="py-16 sm:py-20 bg-[#F5F7FA]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
//           <div className="text-center max-w-2xl mx-auto mb-12">
//             <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#004D40] tracking-tight">
//               Our Approach
//             </h2>
//             <p className="text-slate-600 text-sm sm:text-base mt-2">
//               A structured way to make the investment journey easier to understand.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            
//             <div className="bg-white p-7 rounded-xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-[#D4AF37]/60 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between">
//               <div>
//                 <span className="text-[11px] font-extrabold tracking-wider text-[#D4AF37] bg-teal-50 px-2.5 py-1 rounded border border-teal-100 inline-block mb-4">
//                   STEP 01
//                 </span>
//                 <h3 className="font-bold text-[#004D40] text-lg sm:text-xl mb-2.5">Understand</h3>
//                 <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
//                   Start with clearly defined financial objectives and understand the structure of the selected investment approach.
//                 </p>
//               </div>
//               <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#004D40]">
//                 <span>Clarity First</span>
//                 <span className="text-[#D4AF37] text-sm">→</span>
//               </div>
//             </div>

//             <div className="bg-white p-7 rounded-xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-[#D4AF37]/60 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between">
//               <div>
//                 <span className="text-[11px] font-extrabold tracking-wider text-[#D4AF37] bg-teal-50 px-2.5 py-1 rounded border border-teal-100 inline-block mb-4">
//                   STEP 02
//                 </span>
//                 <h3 className="font-bold text-[#004D40] text-lg sm:text-xl mb-2.5">Plan</h3>
//                 <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
//                   Choose an investment approach based on your objectives, preferences and intended investment horizon.
//                 </p>
//               </div>
//               <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#004D40]">
//                 <span>Goal Alignment</span>
//                 <span className="text-[#D4AF37] text-sm">→</span>
//               </div>
//             </div>

//             <div className="bg-white p-7 rounded-xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-[#D4AF37]/60 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between">
//               <div>
//                 <span className="text-[11px] font-extrabold tracking-wider text-[#D4AF37] bg-teal-50 px-2.5 py-1 rounded border border-teal-100 inline-block mb-4">
//                   STEP 03
//                 </span>
//                 <h3 className="font-bold text-[#004D40] text-lg sm:text-xl mb-2.5">Track</h3>
//                 <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
//                   Monitor your investment journey through structured reporting and consistent progress tracking.
//                 </p>
//               </div>
//               <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#004D40]">
//                 <span>Consistent Review</span>
//                 <span className="text-[#D4AF37] text-sm">→</span>
//               </div>
//             </div>

//           </div>

//         </div>
//       </section>

//       {/* ==========================================
//           4. WHAT WE STAND FOR
//          ========================================== */}
//       <section className="py-16 sm:py-20 bg-white border-t border-b border-slate-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
//           <div className="text-center max-w-2xl mx-auto mb-12">
//             <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#004D40] tracking-tight">
//               What We Stand For
//             </h2>
//             <p className="text-slate-600 text-sm sm:text-base mt-2">
//               Principles that shape a more disciplined investment experience.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            
//             <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-[#D4AF37]/60 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-start">
//               <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-[#D4AF37] mb-5 border border-teal-100/80 shrink-0">
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                 </svg>
//               </div>
//               <h3 className="font-extrabold text-[#004D40] text-sm uppercase tracking-wider mb-2">TRANSPARENCY</h3>
//               <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
//                 Clear information and straightforward communication throughout the investment journey.
//               </p>
//             </div>

//             <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-[#D4AF37]/60 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-start">
//               <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-[#D4AF37] mb-5 border border-teal-100/80 shrink-0">
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
//                 </svg>
//               </div>
//               <h3 className="font-extrabold text-[#004D40] text-sm uppercase tracking-wider mb-2">STRUCTURE</h3>
//               <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
//                 Defined processes designed to make investment decisions easier to understand and follow.
//               </p>
//             </div>

//             <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-[#D4AF37]/60 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-start">
//               <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-[#D4AF37] mb-5 border border-teal-100/80 shrink-0">
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//                 </svg>
//               </div>
//               <h3 className="font-extrabold text-[#004D40] text-sm uppercase tracking-wider mb-2">DISCIPLINE</h3>
//               <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
//                 A consistent approach that keeps long-term financial objectives at the center.
//               </p>
//             </div>

//             <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-[#D4AF37]/60 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-start">
//               <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-[#D4AF37] mb-5 border border-teal-100/80 shrink-0">
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//                 </svg>
//               </div>
//               <h3 className="font-extrabold text-[#004D40] text-sm uppercase tracking-wider mb-2">RESPONSIBILITY</h3>
//               <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
//                 An investor-focused mindset built around clarity, communication and informed decision-making.
//               </p>
//             </div>

//           </div>

//         </div>
//       </section>

//       {/* ==========================================
//           5. HOW WE THINK ABOUT INVESTING (SIGNATURE VISUAL)
//          ========================================== */}
//       <section className="py-16 sm:py-20 bg-[#F5F7FA]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
//             {/* LEFT */}
//             <div className="lg:col-span-6 space-y-5">
//               <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#004D40] tracking-tight">
//                 How We Think About Investing
//               </h2>
//               <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
//                 Investing is not only about selecting a financial product. It is about understanding objectives, choosing an appropriate structure and maintaining discipline throughout the journey.
//               </p>
//               <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
//                 We believe a clear investment process helps investors understand where they are starting, what they are working toward and how their progress can be monitored over time.
//               </p>
//             </div>

//             {/* RIGHT: Financial Dashboard Process Diagram */}
//             <div className="lg:col-span-6 w-full max-w-lg mx-auto lg:max-w-none">
//               <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200/90 shadow-sm">
                
//                 <div className="flex items-center justify-between pb-5 mb-6 border-b border-slate-100">
//                   <span className="text-[11px] text-[#D4AF37] font-extrabold uppercase tracking-widest">
//                     THE INVESTMENT JOURNEY
//                   </span>
//                   <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
//                     5 STAGE PROCESS
//                   </span>
//                 </div>

//                 <div className="relative space-y-3">
                  
//                   {/* Thin Vertical Connecting Line */}
//                   <div className="absolute left-[19px] top-6 bottom-6 w-0.5 bg-slate-200 z-0" aria-hidden="true" />

//                   {/* STEP 1 */}
//                   <div className="relative z-10 flex items-center gap-3.5 p-3.5 rounded-lg bg-[#004D40] text-white border border-[#004D40] shadow-xs">
//                     <span className="w-8 h-8 rounded-full bg-white/10 text-[#D4AF37] font-bold text-xs flex items-center justify-center shrink-0 border border-white/20">
//                       01
//                     </span>
//                     <span className="font-bold text-sm tracking-wide">Financial Goals</span>
//                   </div>

//                   {/* STEP 2 */}
//                   <div className="relative z-10 flex items-center gap-3.5 p-3.5 rounded-lg bg-[#F5F7FA] text-[#004D40] border border-slate-200/90 hover:border-slate-300 transition-colors">
//                     <span className="w-8 h-8 rounded-full bg-white text-[#004D40] font-bold text-xs flex items-center justify-center shrink-0 border border-slate-200 shadow-2xs">
//                       02
//                     </span>
//                     <span className="font-semibold text-sm">Investment Approach</span>
//                   </div>

//                   {/* STEP 3 */}
//                   <div className="relative z-10 flex items-center gap-3.5 p-3.5 rounded-lg bg-[#F5F7FA] text-[#004D40] border border-slate-200/90 hover:border-slate-300 transition-colors">
//                     <span className="w-8 h-8 rounded-full bg-white text-[#004D40] font-bold text-xs flex items-center justify-center shrink-0 border border-slate-200 shadow-2xs">
//                       03
//                     </span>
//                     <span className="font-semibold text-sm">Capital Allocation</span>
//                   </div>

//                   {/* STEP 4 */}
//                   <div className="relative z-10 flex items-center gap-3.5 p-3.5 rounded-lg bg-[#F5F7FA] text-[#004D40] border border-slate-200/90 hover:border-slate-300 transition-colors">
//                     <span className="w-8 h-8 rounded-full bg-white text-[#004D40] font-bold text-xs flex items-center justify-center shrink-0 border border-slate-200 shadow-2xs">
//                       04
//                     </span>
//                     <span className="font-semibold text-sm">Progress Tracking</span>
//                   </div>

//                   {/* STEP 5 */}
//                   <div className="relative z-10 flex items-center gap-3.5 p-3.5 rounded-lg bg-[#004D40] text-white border border-[#D4AF37]/80 shadow-xs">
//                     <span className="w-8 h-8 rounded-full bg-[#D4AF37] text-[#004D40] font-extrabold text-xs flex items-center justify-center shrink-0">
//                       05
//                     </span>
//                     <span className="font-extrabold text-sm text-white tracking-wide">Long-Term Growth</span>
//                   </div>

//                 </div>

//               </div>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* ==========================================
//           6. OUR INVESTMENT PHILOSOPHY
//          ========================================== */}
//       <section className="bg-[#004D40] text-white py-16 sm:py-20 border-t border-teal-900/60">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
//           <div className="text-center max-w-2xl mx-auto mb-12">
//             <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-white tracking-tight">
//               Our Investment Philosophy
//             </h2>
//             <p className="text-slate-200 text-sm sm:text-base mt-2">
//               Simple principles. Structured decisions. Long-term perspective.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            
//             <div className="bg-teal-900/60 border border-teal-700/60 p-7 rounded-xl flex flex-col justify-start space-y-3">
//               <span className="text-2xl font-black text-[#D4AF37] block tracking-wider">01</span>
//               <h3 className="text-lg font-bold text-white">Clarity Before Commitment</h3>
//               <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
//                 Investors should understand the structure, expectations and objectives of an investment approach before making a commitment.
//               </p>
//             </div>

//             <div className="bg-teal-900/60 border border-teal-700/60 p-7 rounded-xl flex flex-col justify-start space-y-3">
//               <span className="text-2xl font-black text-[#D4AF37] block tracking-wider">02</span>
//               <h3 className="text-lg font-bold text-white">Consistency Over Complexity</h3>
//               <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
//                 A disciplined and understandable process can be more valuable than unnecessary complexity.
//               </p>
//             </div>

//             <div className="bg-teal-900/60 border border-teal-700/60 p-7 rounded-xl flex flex-col justify-start space-y-3">
//               <span className="text-2xl font-black text-[#D4AF37] block tracking-wider">03</span>
//               <h3 className="text-lg font-bold text-white">Growth With Perspective</h3>
//               <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
//                 Long-term financial growth requires patience, planning and an approach aligned with clearly defined objectives.
//               </p>
//             </div>

//           </div>

//         </div>
//       </section>

//       {/* ==========================================
//           7. WHY CHOOSE A STRUCTURED APPROACH?
//          ========================================== */}
//       <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
//           <div className="text-center max-w-2xl mx-auto mb-12">
//             <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#004D40] tracking-tight">
//               Why Choose a Structured Approach?
//             </h2>
//             <p className="text-slate-600 text-sm sm:text-base mt-2">
//               Designed to make the investment journey clearer, more organized and easier to follow.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            
//             {/* LEFT Checklist */}
//             <div className="lg:col-span-7 flex flex-col justify-center">
//               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
//                 {[
//                   'Structured investment options',
//                   'Clear investment process',
//                   'Transparent communication',
//                   'Progress-focused approach',
//                   'Family-oriented planning options',
//                   'Long-term financial perspective',
//                 ].map((item, idx) => (
//                   <li key={idx} className="flex items-center gap-3 p-3.5 bg-[#F5F7FA] rounded-lg border border-slate-200/80 text-xs sm:text-sm font-semibold text-slate-800">
//                     <span className="w-5 h-5 rounded-full bg-teal-50 text-[#D4AF37] flex items-center justify-center font-bold text-xs shrink-0 border border-teal-100">
//                       ✓
//                     </span>
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* RIGHT Summary Card */}
//             <div className="lg:col-span-5 flex">
//               <div className="w-full bg-[#F5F7FA] p-7 rounded-xl border border-slate-200/80 text-center flex flex-col justify-between">
//                 <div>
//                   <span className="text-[11px] font-extrabold text-[#D4AF37] uppercase tracking-widest block mb-4">
//                     THE INFINIUM APPROACH
//                   </span>

//                   <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-[#004D40] mb-6 flex-wrap">
//                     <span>Structured</span>
//                     <span className="text-[#D4AF37]">→</span>
//                     <span>Transparent</span>
//                     <span className="text-[#D4AF37]">→</span>
//                     <span>Disciplined</span>
//                     <span className="text-[#D4AF37]">→</span>
//                     <span className="text-[#D4AF37]">Growth-Focused</span>
//                   </div>
//                 </div>

//                 <p className="text-xs sm:text-sm text-slate-600 font-medium italic pt-4 border-t border-slate-200">
//                   "Every investment journey begins with understanding."
//                 </p>
//               </div>
//             </div>

//           </div>

//         </div>
//       </section>    

//     </div>
//   );
// };

// export default About;
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Target, 
  HeartHandshake, 
  Eye, 
  ArrowRight, 
  CheckCircle2, 
  Award, 
  Users, 
  TrendingUp, 
  Building2,
  Lock,
  ChevronRight
} from 'lucide-react';

// BRAND PALETTE REFERENCE:
// Primary: #004D40 -> bg-[#004D40], text-[#004D40], border-[#004D40]
// Accent: #D4AF37  -> bg-[#D4AF37], text-[#D4AF37], border-[#D4AF37]
// Background: #F5F7FA -> bg-[#F5F7FA]
// Pure White: #FFFFFF -> bg-white

const AboutPage = () => {
  return (
    <div className="bg-[#F5F7FA] text-slate-800 font-sans min-h-screen antialiased selection:bg-[#004D40] selection:text-white overflow-x-hidden">
      
      {/* =========================================================================
          1. HERO SECTION — Institutional Precision & Alignment
          ========================================================================= */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-6 sm:space-y-7">
              
              {/* Badge */}
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-[#004D40]/10 text-[#004D40] border border-[#004D40]/20">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] shrink-0" />
                About Infinium Finance
              </span>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.18]">
                Architecting Financial Growth with Precision & Integrity
              </h1>

              {/* Supporting Paragraph */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
                At Infinium Finance Solutions, we empower enterprises, institutional investors, and private clients to navigate complex capital markets with tailored, value-driven advisory and execution strategies.
              </p>

              {/* CTA Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg font-medium text-white bg-[#004D40] hover:bg-[#00382E] active:bg-[#002B23] transition-colors duration-200 shadow-sm text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#004D40]"
                >
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4 shrink-0" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg font-medium text-[#004D40] bg-[#F5F7FA] hover:bg-slate-200/70 active:bg-slate-200 transition-colors duration-200 border border-slate-200 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#004D40]"
                >
                  Explore Our Solutions
                </Link>
              </div>

              {/* Trust Signal */}
              <div className="pt-2 flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium">
                <CheckCircle2 className="h-4 w-4 text-[#D4AF37] shrink-0" />
                <span>SEBI Registered & Fully Compliant Financial Advisory</span>
              </div>
            </div>

            {/* Right "OUR APPROACH" Card Column */}
            <div className="lg:col-span-5 w-full">
              <div className="bg-[#F5F7FA] border border-slate-200/90 rounded-xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
                <div className="border-b border-slate-200/80 pb-4 mb-6">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                    Our Strategic Approach
                  </h3>
                  <h2 className="text-xl font-bold text-[#004D40] mt-1 tracking-tight">
                    Structured for Sustainable Wealth
                  </h2>
                </div>

                <ul className="space-y-5">
                  {[
                    {
                      title: "Data-Driven Risk Management",
                      desc: "Robust analytics ensuring risk optimization across volatile market cycles."
                    },
                    {
                      title: "Bespoke Portfolio Structuring",
                      desc: "Tailored institutional and private wealth strategies aligned with your goals."
                    },
                    {
                      title: "Transparent & Ethical Execution",
                      desc: "Zero hidden agendas—only clear, objective fiduciary guidance."
                    }
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3.5">
                      <div className="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-[#004D40] text-white flex items-center justify-center text-xs font-bold leading-none shadow-xs">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900 leading-snug">{item.title}</h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-normal mt-1">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          2. TRUST / STATISTICS SECTION — Clean & Demonstrative Metrics
          ========================================================================= */}
      <section className="py-12 sm:py-14 bg-[#004D40] text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x-0 sm:divide-x divide-white/10">
            {[
              { label: "Assets Under Advisory", value: "₹2,500+ Cr", icon: TrendingUp },
              { label: "Corporate Clients Served", value: "450+", icon: Building2 },
              { label: "Client Retention Rate", value: "98.5%", icon: Users },
              { label: "Years of Excellence", value: "15+", icon: Award },
            ].map((stat, idx) => {
              const IconComp = stat.icon;
              return (
                <div key={idx} className="p-2 sm:p-4 flex flex-col items-center">
                  <IconComp className="h-5 w-5 text-[#D4AF37] mb-2.5 opacity-90 shrink-0" />
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-200 font-medium mt-1">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. LEGACY / COMPANY STORY — Refined Center Hierarchy
          ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Our Firm
            </h2>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-snug sm:leading-tight">
              A Legacy of Financial Discipline and Institutional Trust
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed pt-2 font-normal">
              Founded on the belief that financial strategy should be as resilient as it is ambitious, Infinium Finance Solutions bridges high-level macroeconomic perspective with execution. We work side-by-side with business leaders and investors to safeguard assets while capturing market opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. CORE PRINCIPLES — Uniform & Polished Card System
          ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-2">
              Core Principles
            </h2>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              What We Stand For
            </p>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              Our foundation is built on uncompromising fiduciary standards, analytical rigour, and a long-term commitment to client prosperity.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {[
              {
                icon: ShieldCheck,
                title: "Uncompromising Integrity",
                description: "We operate with absolute transparency, putting your financial interests and regulatory compliance above everything else."
              },
              {
                icon: Target,
                title: "Precision Execution",
                description: "Every capital allocation strategy is meticulously modeled to balance yield potential against rigorous risk bounds."
              },
              {
                icon: HeartHandshake,
                title: "Client Partnership",
                description: "We don't do transactions; we build multi-decade relationships based on trust, access, and continuous value."
              },
              {
                icon: Eye,
                title: "Forward Vision",
                description: "Anticipating macroeconomic shifts to proactively reposition portfolios before market dynamics evolve."
              }
            ].map((card, idx) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={idx}
                  className="group bg-white rounded-xl p-6 sm:p-7 border border-slate-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,77,64,0.08)] hover:border-[#004D40]/30 transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 flex flex-col justify-between h-full"
                >
                  <div className="flex flex-col items-start">
                    {/* Branded Icon Container */}
                    <div className="w-12 h-12 rounded-lg bg-[#F5F7FA] border border-slate-200/80 text-[#004D40] group-hover:bg-[#004D40] group-hover:text-white group-hover:border-[#004D40] transition-colors duration-300 flex items-center justify-center mb-5 shrink-0">
                      <IconComponent className="h-6 w-6 stroke-[1.75]" />
                    </div>

                    {/* Card Title */}
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#004D40] transition-colors duration-200 mb-2.5 leading-snug">
                      {card.title}
                    </h3>

                    {/* Card Description */}
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                  
                  {/* Subtle Accent Bottom Indicator */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between w-full">
                    <span className="text-xs font-semibold text-[#004D40] group-hover:text-[#D4AF37] transition-colors duration-200">
                      Standard 0{idx + 1}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#D4AF37] transition-colors duration-200" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>


    </div>
  );
};

export default AboutPage;