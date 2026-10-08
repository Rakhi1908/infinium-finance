import React, { useState, useMemo } from 'react';
import { 
  Search, 
  ChevronDown, 
  X, 
  HelpCircle, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2,
  FileText,
  LifeBuoy,
  Lock,
  TrendingUp,
  RefreshCw,
  Wallet
} from 'lucide-react';

// Static FAQ Knowledge Base matching Infinium Finance Solutions brand standards
const FAQ_DATA = [
  // GETTING STARTED
  {
    id: 'gs-1',
    category: 'Getting Started',
    categoryId: 'getting-started',
    question: 'What is Infinium Finance Solutions?',
    answer: 'Infinium Finance Solutions is an investment-focused platform designed to help users explore structured investment options and make informed financial decisions based on their individual goals and preferences.'
  },
  {
    id: 'gs-2',
    category: 'Getting Started',
    categoryId: 'getting-started',
    question: 'How do I get started?',
    answer: 'Start by exploring the available investment plans, reviewing the applicable terms, and selecting an approach that aligns with your financial objectives.'
  },
  {
    id: 'gs-3',
    category: 'Getting Started',
    categoryId: 'getting-started',
    question: 'Do I need an account to invest?',
    answer: 'Account requirements depend on the applicable investment process and plan. Review the onboarding requirements before proceeding.'
  },

  // INVESTMENT PLANS
  {
    id: 'ip-1',
    category: 'Investment Plans',
    categoryId: 'investment-plans',
    question: 'What investment plans are available?',
    answer: 'Available options are presented on our Investment Plans page. Each plan may have different features, terms, time horizons, and considerations.'
  },
  {
    id: 'ip-2',
    category: 'Investment Plans',
    categoryId: 'investment-plans',
    question: 'How do I choose an investment plan?',
    answer: 'Consider your financial objectives, preferred investment horizon, financial situation, and applicable plan terms before making a decision.'
  },
  {
    id: 'ip-3',
    category: 'Investment Plans',
    categoryId: 'investment-plans',
    question: 'Can I change my investment plan later?',
    answer: 'Plan changes depend on the applicable terms and conditions. Review the specific plan documentation or contact our support team for assistance.'
  },

  // INVESTMENT PROCESS
  {
    id: 'proc-1',
    category: 'Investment Process',
    categoryId: 'investment-process',
    question: 'How does the investment process work?',
    answer: 'The process generally involves registration, reviewing available investment options, completing the required onboarding steps, investing through the available process, and monitoring your investment.'
  },
  {
    id: 'proc-2',
    category: 'Investment Process',
    categoryId: 'investment-process',
    question: 'How can I monitor my investment?',
    answer: 'Investment information and updates may be available through the applicable account or reporting process. Availability depends on the selected plan and its terms.'
  },

  // RETURNS & COMPOUNDING
  {
    id: 'rc-1',
    category: 'Returns & Compounding',
    categoryId: 'returns-compounding',
    question: 'What does quarterly compounding mean?',
    answer: 'Quarterly compounding means that, where applicable under the selected plan, returns or interest are calculated and added to the investment at quarterly intervals. The exact calculation depends on the terms of the specific investment.'
  },
  {
    id: 'rc-2',
    category: 'Returns & Compounding',
    categoryId: 'returns-compounding',
    question: 'Are investment returns guaranteed?',
    answer: 'Investment returns should not be assumed to be guaranteed unless explicitly stated in official applicable documentation. Investments may involve risk, and users should review the relevant terms before investing.'
  },
  {
    id: 'rc-3',
    category: 'Returns & Compounding',
    categoryId: 'returns-compounding',
    question: 'Does past performance guarantee future results?',
    answer: 'No. Past performance does not guarantee future results. Investment outcomes may vary depending on market conditions, plan terms, and other factors.'
  },

  // WITHDRAWALS
  {
    id: 'wd-1',
    category: 'Withdrawals',
    categoryId: 'withdrawals',
    question: 'How do withdrawals work?',
    answer: 'Withdrawal availability depends on the selected investment plan and its applicable terms. Review the relevant plan conditions or contact support for assistance.'
  },
  {
    id: 'wd-2',
    category: 'Withdrawals',
    categoryId: 'withdrawals',
    question: 'Can I withdraw my investment at any time?',
    answer: 'Withdrawal timing and eligibility depend on the applicable plan terms. Please review the conditions associated with your investment before requesting a withdrawal.'
  },

  // ACCOUNT & SECURITY
  {
    id: 'sec-1',
    category: 'Account & Security',
    categoryId: 'account-security',
    question: 'How is my account information handled?',
    answer: 'Account information should be handled according to the platform\'s applicable privacy and security practices. Users should review the relevant privacy information before submitting personal details.'
  },
  {
    id: 'sec-2',
    category: 'Account & Security',
    categoryId: 'account-security',
    question: 'What should I do if I have an account-related issue?',
    answer: 'Contact the support team through the Contact page with the relevant details so your query can be reviewed.'
  }
];

const CATEGORIES = [
  { id: 'all', label: 'All Questions' },
  { id: 'getting-started', label: 'Getting Started' },
  { id: 'investment-plans', label: 'Investment Plans' },
  { id: 'investment-process', label: 'Investment Process' },
  { id: 'returns-compounding', label: 'Returns & Compounding' },
  { id: 'withdrawals', label: 'Withdrawals' },
  { id: 'account-security', label: 'Account & Security' }
];

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState({ 'gs-1': true }); // Default first open

  // Toggle dynamic accordion items
  const toggleAccordion = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Expand or collapse all visible items
  const toggleExpandAll = (expand) => {
    if (!expand) {
      setOpenItems({});
      return;
    }
    const newOpen = {};
    filteredFaqs.forEach(item => {
      newOpen[item.id] = true;
    });
    setOpenItems(newOpen);
  };

  // Filter FAQs based on active category and live search query
  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter(item => {
      const matchesCategory = activeCategory === 'all' || item.categoryId === activeCategory;
      
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = !query || 
        item.question.toLowerCase().includes(query) || 
        item.answer.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Group filtered results by category when viewing "All Questions"
  const groupedFaqs = useMemo(() => {
    if (activeCategory !== 'all') {
      return { [activeCategory]: filteredFaqs };
    }
    return filteredFaqs.reduce((acc, item) => {
      if (!acc[item.category]) acc[item.category] = [];
      acc[item.category].push(item);
      return acc;
    }, {});
  }, [filteredFaqs, activeCategory]);

  return (
    <div className="min-h-screen bg-[#F5F7FA] text-[#020817] font-sans antialiased selection:bg-[#D4AF37]/30 selection:text-[#004D40]">
      {/* Container wrapper */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        
        {/* ========================================================= */}
        {/* SECTION 1 — FAQ HERO                                      */}
        {/* ========================================================= */}
        <section className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          {/* Eyebrow */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#004D40]/5 border border-[#D4AF37]/30 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#004D40]">
              HELP CENTER
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#004D40] tracking-tight mb-4 font-serif">
            Frequently Asked Questions
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-2xl mx-auto">
            Find clear answers to common questions about our investment plans, process, account management, and available services.
          </p>
        </section>


        {/* ========================================================= */}
        {/* SECTION 2 — FAQ SEARCH                                    */}
        {/* ========================================================= */}
        <section className="max-w-2xl mx-auto mb-10 md:mb-14">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 sm:pl-5 flex items-center pointer-events-none text-[#004D40]/60 group-focus-within:text-[#004D40] transition-colors">
              <Search className="w-5 h-5" />
            </div>
            
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search your question..."
              aria-label="Search your question"
              className="w-full pl-11 sm:pl-12 pr-12 py-3.5 sm:py-4 bg-white rounded-xl border border-gray-200 text-[#020817] placeholder-gray-400 text-sm sm:text-base shadow-sm hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#004D40]/20 focus:border-[#004D40] transition-all duration-200"
            />

            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-[#004D40] transition-colors"
                title="Clear search"
                aria-label="Clear search"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
          {searchQuery && (
            <div className="mt-2 text-xs text-right text-[#4B5563] pr-1">
              Found {filteredFaqs.length} match{filteredFaqs.length === 1 ? '' : 'es'}
            </div>
          )}
        </section>


        {/* ========================================================= */}
        {/* SECTION 3 — FAQ CATEGORIES                                */}
        {/* ========================================================= */}
        <section className="mb-10 md:mb-12">
          {/* Scroll container for mobile horizontal scroll without page overflow */}
          <div className="flex items-center overflow-x-auto no-scrollbar py-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center gap-2 sm:gap-2.5">
            {CATEGORIES.map((cat) => {
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`whitespace-nowrap px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#004D40]/30 ${
                    isSelected
                      ? 'bg-[#004D40] text-white shadow-md border border-[#004D40]'
                      : 'bg-white text-[#004D40] border border-gray-200 hover:border-[#004D40]/30 hover:bg-gray-50'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </section>


        {/* ========================================================= */}
        {/* SECTION 4 — MAIN FAQ ACCORDION                            */}
        {/* ========================================================= */}
        <section className="max-w-4xl mx-auto mb-16">
          {/* Utility Bar if filtered results exist */}
          {filteredFaqs.length > 0 && (
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-200 text-xs text-[#4B5563]">
              <span>
                Showing <strong className="text-[#004D40]">{filteredFaqs.length}</strong> question{filteredFaqs.length !== 1 ? 's' : ''}
              </span>
              <div className="flex space-x-3">
                <button 
                  onClick={() => toggleExpandAll(true)}
                  className="hover:text-[#004D40] underline transition-colors"
                >
                  Expand all
                </button>
                <span>•</span>
                <button 
                  onClick={() => toggleExpandAll(false)}
                  className="hover:text-[#004D40] underline transition-colors"
                >
                  Collapse all
                </button>
              </div>
            </div>
          )}

          {/* EMPTY STATE */}
          {filteredFaqs.length === 0 && (
            <div className="bg-white rounded-2xl p-10 text-center border border-gray-200 shadow-sm my-6">
              <div className="w-12 h-12 rounded-full bg-[#004D40]/10 text-[#004D40] flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#004D40] mb-2">No matching questions found</h3>
              <p className="text-sm text-[#4B5563] max-w-md mx-auto mb-6">
                We couldn't find any questions matching "{searchQuery}". Try adjusting your keyword or filter category.
              </p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                className="inline-flex items-center justify-center px-4 py-2 bg-[#004D40] text-white text-xs font-semibold rounded-lg hover:bg-[#00382E] transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* ACCORDION GROUPS */}
          {Object.entries(groupedFaqs).map(([groupTitle, items]) => {
            if (!items || items.length === 0) return null;
            
            // Format label if it's an ID
            const categoryObj = CATEGORIES.find(c => c.id === groupTitle);
            const displayTitle = categoryObj ? categoryObj.label : groupTitle;

            return (
              <div key={groupTitle} className="mb-8 last:mb-0">
                {activeCategory === 'all' && (
                  <h2 className="text-xs font-bold text-[#004D40] uppercase tracking-wider mb-3 px-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
                    {displayTitle}
                  </h2>
                )}

                <div className="bg-white rounded-xl border border-gray-200/80 shadow-sm overflow-hidden divide-y divide-gray-100">
                  {items.map((item) => {
                    const isOpen = !!openItems[item.id];
                    return (
                      <div key={item.id} className="transition-colors hover:bg-gray-50/50">
                        <h3>
                          <button
                            onClick={() => toggleAccordion(item.id)}
                            aria-expanded={isOpen}
                            className="w-full px-5 py-4 sm:px-6 sm:py-5 text-left flex items-start justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004D40] focus-visible:ring-inset"
                          >
                            <span className="text-base sm:text-lg font-semibold text-[#020817] leading-snug pt-0.5">
                              {item.question}
                            </span>
                            <span className={`shrink-0 p-1 rounded-full text-[#004D40] transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#004D40]/10' : 'bg-gray-100'}`}>
                              <ChevronDown className="w-5 h-5" />
                            </span>
                          </button>
                        </h3>

                        {/* Collapsible Content */}
                        {isOpen && (
                          <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-[#4B5563] leading-relaxed border-t border-transparent">
                            <p className="pt-2">{item.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </section>


        {/* ========================================================= */}
        {/* SECTION 5 — TRUST / IMPORTANT NOTE                        */}
        {/* ========================================================= */}
        <section className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-[#004D40]/5 via-[#004D40]/10 to-[#004D40]/5 rounded-xl p-5 sm:p-6 border border-[#004D40]/20 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="shrink-0 w-11 h-11 rounded-lg bg-white shadow-sm border border-[#D4AF37]/40 flex items-center justify-center text-[#004D40]">
              <ShieldCheck className="w-6 h-6 text-[#004D40]" />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-bold text-[#004D40] flex items-center gap-2">
                Invest With Clarity
              </h3>
              <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                Investment decisions should be based on your individual financial goals, circumstances, and understanding of the applicable terms. Please review relevant documentation carefully before making an investment decision.
              </p>
            </div>
          </div>
        </section>


        {/* ========================================================= */}
        {/* SECTION 6 — STILL HAVE QUESTIONS? (FINAL CTA)             */}
        {/* ========================================================= */}
        <section className="max-w-4xl mx-auto">
          <div className="bg-[#004D40] text-white rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden shadow-lg border border-[#004D40]">
            {/* Subtle Luxury Gold Background Accent */}
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight font-serif">
                Still Have Questions?
              </h2>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed max-w-xl mx-auto">
                Our team is here to help you understand our investment options and process.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5">
                {/* Primary Button */}
                <a
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 bg-[#D4AF37] hover:bg-[#c4a02e] text-[#020817] font-semibold text-sm rounded-lg transition-colors shadow-sm duration-200 group"
                >
                  Contact Us
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Secondary Button */}
                <a
                  href="/plans"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 bg-white/10 hover:bg-white/15 text-white font-medium text-sm rounded-lg border border-white/20 transition-colors duration-200"
                >
                  Explore Investment Plans
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};
