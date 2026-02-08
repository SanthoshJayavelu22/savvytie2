import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import TalentVetting from '../components/TalentVetting';
import { ChevronDownIcon, ChevronUpIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';

const HireNow = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    roleNeeded: ''
  });

  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear submit status when user starts typing again
    if (submitStatus) setSubmitStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://savvytiebackend.onrender.com/api/employers/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          roleNeeded: ''
        });
        // Scroll to success message
        setTimeout(() => {
          document.getElementById('hire-form').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      } else {
        setSubmitStatus('error');
        console.error('Registration failed:', data.message);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  const roles = [
    { name: 'Property Assistants', path: '/services/property-assistants' },
    { name: 'Personal Assistants', path: '/services/personal-assistants' },
    { name: 'Social Media Management', path: '/services/social-media-management' },
    { name: 'Call Centre', path: '/services/call-centre' },
    { name: 'Live Chat Support', path: '/services/live-chat-support' },
    { name: 'Telesales', path: '/services/telesales' },
    { name: 'Data Entry Services', path: '/services/data-entry-services' },
    { name: 'Debt Collection', path: '/services/debt-collection' },
    { name: 'IT Outsourcing', path: '/services/it-outsourcing' },
    { name: 'Sales Assistants', path: '/services/sales-assistants' },
    { name: 'Legal Assistants', path: '/services/legal-assistants' },
  ];

  const valueProps = [
    {
      icon: '✅',
      title: 'Pre-vetted Professionals',
      description: 'Every candidate undergoes rigorous screening and skill assessment'
    },
    {
      icon: '💸',
      title: 'Cost-effective Hiring',
      description: 'Save up to 70% on operational costs compared to local hiring'
    },
    {
      icon: '🕓',
      title: 'Flexible Working Hours',
      description: 'Access talent that works according to your business hours'
    },
    {
      icon: '🌍',
      title: 'Seamless Communication',
      description: 'English-proficient professionals with time zone alignment'
    },
    {
      icon: '🔒',
      title: 'Secure & Reliable',
      description: 'Protected contracts and guaranteed work delivery'
    },
    {
      icon: '⚡',
      title: 'Quick Onboarding',
      description: 'Get started within 48 hours of selecting your candidate'
    }
  ];

  const industries = [
    { name: 'Legal', count: '50+', icon: '⚖️' },
    { name: 'Real Estate', count: '35+', icon: '🏠' },
    { name: 'Healthcare', count: '28+', icon: '🏥' },
    { name: 'E-commerce', count: '42+', icon: '🛒' },
    { name: 'Finance', count: '30+', icon: '💳' },
    { name: 'Technology', count: '45+', icon: '💻' },
    { name: 'Education', count: '22+', icon: '🎓' },
    { name: 'Marketing', count: '38+', icon: '📈' }
  ];

  const faqItems = [
    {
      question: "How quickly can I start working with a virtual assistant?",
      answer: "Most clients are matched with their ideal virtual assistant within 48 hours of completing the onboarding process. Once you submit your requirements, our team will immediately start the matching process and present you with suitable candidates within 24-48 hours."
    },
    {
      question: "What's the hiring process like?",
      answer: "We follow a simple 3-step process: 1) Free consultation to understand your specific needs and requirements, 2) Candidate matching where we present you with pre-vetted professionals that fit your criteria, 3) Interviews and onboarding where you can interview selected candidates and we handle all the paperwork and setup."
    },
    {
      question: "Can I change my virtual assistant if needed?",
      answer: "Yes, we offer a risk-free trial period of 14 days and can reassign you to a different assistant if the first match isn't perfect. Our goal is to ensure you have the right fit for your business needs."
    },
    {
      question: "What about data security and confidentiality?",
      answer: "All our assistants sign comprehensive NDAs and we implement strict security protocols including secure VPN connections, encrypted communication tools, and regular security audits to protect your business information. We comply with international data protection standards."
    },
    {
      question: "Do you provide training for the virtual assistants?",
      answer: "Yes, we provide initial training on tools and processes, and ongoing support to ensure our assistants meet your specific business requirements. We also facilitate training on your specific business processes during the onboarding phase."
    },
    {
      question: "What kind of support do you provide after hiring?",
      answer: "We provide dedicated account management, regular performance reviews, and 24/7 operational support. Our team is always available to address any concerns and ensure smooth collaboration between you and your virtual assistant."
    },
    {
      question: "Can I hire multiple virtual assistants for different roles?",
      answer: "Absolutely! Many of our clients hire multiple assistants for different functions such as administrative tasks, social media management, customer support, and specialized technical roles. We can help you build an entire offshore team."
    },
    {
      question: "What are the working hours and time zone considerations?",
      answer: "Our virtual assistants can work according to your time zone or have overlapping hours as needed. We offer flexible scheduling options including full-time (40 hours/week), part-time (20 hours/week), and customized hours to match your business requirements."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 opacity-10 rounded-none sm:rounded-2xl"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6 leading-tight">
              Hire Now <span className="text-yellow-600">Savvy Tie</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-2">
              Connect with top-tier professionals in accounting, marketing, legal, and more
              handpicked for your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Why Hire From Us - 6 Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Why Choose Savvy Tie?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide more than just virtual assistants - we deliver reliable, skilled professionals 
              who become integral parts of your team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valueProps.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group border-2 border-transparent hover:border-yellow-400">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by businesses across various industries worldwide
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="text-3xl mb-3">{industry.icon}</div>
                <h3 className="text-lg font-semibold text-black mb-2">{industry.name}</h3>
                <p className="text-yellow-600 font-bold">{industry.count} Clients</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Talent Vetting Section - High Impact Trust */}
      <TalentVetting />

      {/* How It Works Component */}
      <HowItWorks />

      {/* Roles You Can Hire with Links */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Roles You Can Hire
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Access a diverse pool of skilled professionals across various domains
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {roles.map((role, index) => (
              <Link 
                key={index}
                to={role.path}
                className="block bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 group hover:border-yellow-400 border-2 border-transparent cursor-pointer hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center group-hover:bg-yellow-200 transition-colors duration-300">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="text-lg font-semibold text-black group-hover:text-yellow-600 transition-colors duration-300">
                  {role.name}
                </h3>
                <p className="text-gray-500 text-sm mt-2">Learn more →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Component */}
      <Testimonials />

      {/* Hire Now Form */}
      <section id="hire-form" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Start Hiring Today
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Fill out the form below and we'll connect you with the perfect virtual assistant within 24 hours.
              </p>
            </div>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center space-x-3">
                <CheckCircleIcon className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <p className="text-green-800 font-semibold">Request Submitted Successfully!</p>
                  <p className="text-green-600 text-sm">Thank you! We'll connect you with the perfect candidate within 24 hours.</p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center space-x-3">
                <XCircleIcon className="w-6 h-6 text-red-600 flex-shrink-0" />
                <div>
                  <p className="text-red-800 font-semibold">Submission Failed</p>
                  <p className="text-red-600 text-sm">Please try again or contact support if the problem persists.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-black text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-base disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-black text-sm font-medium mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-base disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="your@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-black text-sm font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-base disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="+44 123 456 7890"
                  />
                </div>
                
                <div>
                  <label className="block text-black text-sm font-medium mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-base disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-black text-sm font-medium mb-2">
                  Role Needed *
                </label>
                <input
                  type="text"
                  name="roleNeeded"
                  value={formData.roleNeeded}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-base disabled:bg-gray-100 disabled:cursor-not-allowed"
                  placeholder="e.g., Accountant, Digital Marketer, Developer, etc."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-yellow-400 text-black py-4 px-6 rounded-lg font-semibold text-lg hover:bg-yellow-500 transition-colors duration-200 shadow-lg hover:shadow-xl disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-600"
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  'Get Free Consultation'
                )}
              </button>
              
              <p className="text-gray-500 text-sm text-center">
                By submitting, you agree to our terms. We'll contact you within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section with Toggle */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about hiring virtual assistants with Savvy Tie
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <button
                  className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-lg font-semibold text-black pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 ml-4">
                    {openFaqIndex === index ? (
                      <ChevronUpIcon className="w-5 h-5 text-gray-600" />
                    ) : (
                      <ChevronDownIcon className="w-5 h-5 text-gray-600" />
                    )}
                  </div>
                </button>
                
                <div 
                  className={`px-6 pb-6 transition-all duration-300 ${
                    openFaqIndex === index ? 'block' : 'hidden'
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Help CTA */}
          <div className="text-center mt-12">
            <div className="bg-yellow-50 rounded-2xl p-8 border border-yellow-200">
              <h3 className="text-2xl font-bold text-black mb-4">
                Still have questions?
              </h3>
              <p className="text-gray-600 mb-6">
                Our team is here to help you find the perfect virtual assistant for your needs.
              </p>
              <button 
                onClick={() => document.getElementById('hire-form').scrollIntoView({ behavior: 'smooth' })}
                className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-200"
              >
                Contact Our Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Footer */}
      <CallToAction />
    </div>
  );
};

export default HireNow;