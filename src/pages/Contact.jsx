import React, { useState } from 'react';
import { 
  Building2, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  MapPin, 
  Compass, 
  ShieldCheck, 
  HelpCircle, 
  ArrowRight, 
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

// Existing brand contact information (kept strictly consistent)
const CONTACT_INFO = {
  companyName: 'Infinium Finance Solutions',
  address: {
    line1: 'Infinium Finance Solutions',
    line2: 'Financial District, SG Highway',
    cityState: 'Ahmedabad, Gujarat 380015',
    country: 'India'
  },
  phone: '+91 (079) 4000-8800',
  email: 'contact@infiniumfinance.com',
  hours: 'Monday – Friday: 9:00 AM – 6:00 PM IST'
};

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required.';
    if (!formData.message.trim()) newErrors.message = 'Message is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmissionStatus(null);

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Controlled client-side submission simulation
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionStatus({
        type: 'info',
        message: 'Thank you for reaching out. Your request has been recorded locally. For urgent inquiries, please contact our support email directly.'
      });
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA] text-[#020817] font-sans antialiased selection:bg-[#D4AF37]/30 selection:text-[#004D40]">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">

        {/* ========================================================= */}
        {/* SECTION 1 — CONTACT HERO                                  */}
        {/* ========================================================= */}
        <section className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#004D40]/5 border border-[#D4AF37]/30 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#004D40]">
              CONTACT US
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#004D40] tracking-tight mb-4 font-serif">
            Let’s Start a Conversation
          </h1>

          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-2xl mx-auto">
            Have questions about our investment solutions or need assistance?
            Our team is here to help you understand your options and next steps.
          </p>
        </section>

        {/* ========================================================= */}
        {/* SECTION 2 — CONTACT INFORMATION + FORM                    */}
        {/* ========================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16 md:mb-20">
          
          {/* LEFT SIDE: GET IN TOUCH PANEL */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-sm space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[#004D40] font-serif mb-3">
                Get In Touch
              </h2>
              <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
                Whether you have a question about our investment plans, the investment process, or need assistance, reach out to our team.
              </p>
            </div>

            <div className="space-y-6">
              {/* Office Item */}
              <div className="flex items-start space-x-4">
                <div className="shrink-0 w-11 h-11 rounded-xl bg-[#004D40]/10 text-[#004D40] flex items-center justify-center border border-[#004D40]/15">
                  <Building2 className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#004D40]">
                    Office
                  </h3>
                  <p className="text-sm font-semibold text-[#020817]">
                    {CONTACT_INFO.address.line1}
                  </p>
                  <p className="text-xs sm:text-sm text-[#4B5563]">
                    {CONTACT_INFO.address.line2}<br />
                    {CONTACT_INFO.address.cityState}<br />
                    {CONTACT_INFO.address.country}
                  </p>
                </div>
              </div>

              {/* Phone Item */}
              <div className="flex items-start space-x-4">
                <div className="shrink-0 w-11 h-11 rounded-xl bg-[#004D40]/10 text-[#004D40] flex items-center justify-center border border-[#004D40]/15">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#004D40]">
                    Phone
                  </h3>
                  <a 
                    href={`tel:${CONTACT_INFO.phone}`} 
                    className="text-sm font-semibold text-[#020817] hover:text-[#004D40] transition-colors"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Email Item */}
              <div className="flex items-start space-x-4">
                <div className="shrink-0 w-11 h-11 rounded-xl bg-[#004D40]/10 text-[#004D40] flex items-center justify-center border border-[#004D40]/15">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#004D40]">
                    Email
                  </h3>
                  <a 
                    href={`mailto:${CONTACT_INFO.email}`} 
                    className="text-sm font-semibold text-[#020817] hover:text-[#004D40] transition-colors"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              {/* Business Hours Item */}
              <div className="flex items-start space-x-4">
                <div className="shrink-0 w-11 h-11 rounded-xl bg-[#004D40]/10 text-[#004D40] flex items-center justify-center border border-[#004D40]/15">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#004D40]">
                    Business Hours
                  </h3>
                  <p className="text-sm font-semibold text-[#020817]">
                    {CONTACT_INFO.hours}
                  </p>
                </div>
              </div>
            </div>

            {/* Credibility Notice Banner */}
            <div className="pt-4 border-t border-gray-100 flex items-start space-x-3 text-xs text-[#4B5563]">
              <ShieldCheck className="w-5 h-5 text-[#004D40] shrink-0 mt-0.5" />
              <span>
                Your privacy and data security are strictly respected. Information submitted is handled with care and confidential protocol.
              </span>
            </div>
          </div>

          {/* RIGHT SIDE: CONTACT FORM */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 md:p-10 border border-gray-200/80 shadow-sm">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-[#004D40] font-serif mb-2">
                Send Us a Message
              </h2>
              <p className="text-sm text-[#4B5563]">
                Fill in the details below and our team will get back to you.
              </p>
            </div>

            {submissionStatus && (
              <div className="mb-6 p-4 rounded-xl bg-[#004D40]/5 border border-[#004D40]/20 flex items-start space-x-3 text-sm text-[#004D40]">
                <AlertCircle className="w-5 h-5 text-[#004D40] shrink-0 mt-0.5" />
                <p>{submissionStatus.message}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Full Name Field */}
              <div>
                <label htmlFor="fullName" className="block text-xs font-bold text-[#020817] uppercase tracking-wider mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="e.g. Rahul Sharma"
                  className={`w-full px-4 py-3 bg-white border ${
                    errors.fullName ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-[#004D40] focus:ring-[#004D40]/20'
                  } rounded-xl text-sm text-[#020817] placeholder-gray-400 focus:outline-none focus:ring-2 transition-colors`}
                />
                {errors.fullName && (
                  <p className="mt-1 text-xs text-red-500 font-medium">{errors.fullName}</p>
                )}
              </div>

              {/* Email & Phone Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-[#020817] uppercase tracking-wider mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@example.com"
                    className={`w-full px-4 py-3 bg-white border ${
                      errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-[#004D40] focus:ring-[#004D40]/20'
                    } rounded-xl text-sm text-[#020817] placeholder-gray-400 focus:outline-none focus:ring-2 transition-colors`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500 font-medium">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-[#020817] uppercase tracking-wider mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-[#004D40] focus:ring-2 focus:ring-[#004D40]/20 rounded-xl text-sm text-[#020817] placeholder-gray-400 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-xs font-bold text-[#020817] uppercase tracking-wider mb-1.5">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Inquiry regarding investment options"
                  className={`w-full px-4 py-3 bg-white border ${
                    errors.subject ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-[#004D40] focus:ring-[#004D40]/20'
                  } rounded-xl text-sm text-[#020817] placeholder-gray-400 focus:outline-none focus:ring-2 transition-colors`}
                />
                {errors.subject && (
                  <p className="mt-1 text-xs text-red-500 font-medium">{errors.subject}</p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-[#020817] uppercase tracking-wider mb-1.5">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Please write your questions or details here..."
                  className={`w-full px-4 py-3 bg-white border ${
                    errors.message ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-[#004D40] focus:ring-[#004D40]/20'
                  } rounded-xl text-sm text-[#020817] placeholder-gray-400 focus:outline-none focus:ring-2 transition-colors resize-y`}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500 font-medium">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-[#004D40] hover:bg-[#00382E] text-white font-semibold text-sm rounded-xl transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#004D40] focus:ring-offset-2 disabled:opacity-70 group"
              >
                {isSubmitting ? (
                  <span>Processing...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 3 — WHY CONTACT US                                */}
        {/* ========================================================= */}
        <section className="mb-16 md:mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#004D40] font-serif mb-3">
              Here to Help You Move Forward
            </h2>
            <p className="text-sm sm:text-base text-[#4B5563]">
              Clear communication is an important part of a structured investment experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 01 */}
            <div className="bg-white rounded-xl p-6 border border-gray-200/80 shadow-sm hover:border-[#004D40]/30 transition-all">
              <div className="text-xs font-bold text-[#D4AF37] mb-2 tracking-widest font-mono">
                01
              </div>
              <h3 className="text-lg font-bold text-[#004D40] mb-2">
                Clear Guidance
              </h3>
              <p className="text-sm text-[#4B5563] leading-relaxed">
                Get answers to questions about our investment options and process.
              </p>
            </div>

            {/* Card 02 */}
            <div className="bg-white rounded-xl p-6 border border-gray-200/80 shadow-sm hover:border-[#004D40]/30 transition-all">
              <div className="text-xs font-bold text-[#D4AF37] mb-2 tracking-widest font-mono">
                02
              </div>
              <h3 className="text-lg font-bold text-[#004D40] mb-2">
                Transparent Communication
              </h3>
              <p className="text-sm text-[#4B5563] leading-relaxed">
                Understand the information and terms relevant to your investment.
              </p>
            </div>

            {/* Card 03 */}
            <div className="bg-white rounded-xl p-6 border border-gray-200/80 shadow-sm hover:border-[#004D40]/30 transition-all">
              <div className="text-xs font-bold text-[#D4AF37] mb-2 tracking-widest font-mono">
                03
              </div>
              <h3 className="text-lg font-bold text-[#004D40] mb-2">
                Client Support
              </h3>
              <p className="text-sm text-[#4B5563] leading-relaxed">
                Reach out when you need assistance with your account or investment journey.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 4 — LOCATION / OFFICE                             */}
        {/* ========================================================= */}
        <section className="mb-16 md:mb-20">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 sm:p-10 border border-gray-200/80 shadow-sm">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-3 max-w-xl">
                <div className="inline-flex items-center space-x-2 text-[#004D40] font-bold text-xs uppercase tracking-wider">
                  <MapPin className="w-4 h-4 text-[#D4AF37]" />
                  <span>Headquarters</span>
                </div>
                <h2 className="text-2xl font-bold text-[#004D40] font-serif">
                  Visit Our Office
                </h2>
                <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
                  {CONTACT_INFO.address.line1}, {CONTACT_INFO.address.line2}, {CONTACT_INFO.address.cityState}, {CONTACT_INFO.address.country}
                </p>
                <p className="text-xs text-[#4B5563]">
                  <strong>Operating Hours:</strong> {CONTACT_INFO.hours}
                </p>
              </div>

              <div className="shrink-0 w-full md:w-auto">
                <div className="p-4 bg-[#F5F7FA] rounded-xl border border-gray-200 text-center space-y-2">
                  <Compass className="w-8 h-8 text-[#004D40] mx-auto" />
                  <div className="text-xs font-semibold text-[#004D40]">
                    Infinium Advisory Center
                  </div>
                  <span className="inline-block text-[11px] text-[#4B5563]">
                    Appointment Preferred
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 5 — FAQ SHORTCUT                                  */}
        {/* ========================================================= */}
        <section className="max-w-4xl mx-auto mb-16 md:mb-20">
          <div className="bg-gradient-to-r from-[#004D40]/5 via-[#004D40]/10 to-[#004D40]/5 rounded-2xl p-6 sm:p-8 border border-[#004D40]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-1 max-w-xl">
              <h3 className="text-lg font-bold text-[#004D40] flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#004D40]" />
                Looking for Quick Answers?
              </h3>
              <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                Explore our frequently asked questions for information about investment plans, the investment process, withdrawals, and more.
              </p>
            </div>

            <a
              href="/faqs"
              className="shrink-0 inline-flex items-center justify-center px-5 py-2.5 bg-white text-[#004D40] hover:bg-[#004D40] hover:text-white border border-[#004D40]/30 rounded-lg text-xs font-bold transition-colors duration-200 shadow-sm"
            >
              View FAQs →
            </a>
          </div>
        </section>

      </main>
    </div>
  );
}