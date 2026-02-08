// src/pages/FAQ.jsx
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaPhone, FaEnvelope, FaSearch } from 'react-icons/fa';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      category: 'General',
      question: 'How quickly will I get a response?',
      answer: 'We typically respond within 2 hours during business hours and within 24 hours on weekends. Our team is dedicated to providing timely responses to all inquiries.'
    },
    {
      category: 'General',
      question: 'Do you offer free consultations?',
      answer: 'Yes, we offer free 30-minute consultations to discuss your specific needs and requirements. This helps us understand your business and provide the best possible solution.'
    },
    {
      category: 'Clients',
      question: 'What information should I include in my inquiry?',
      answer: 'Please include your name, company, specific needs, timeline, and any relevant details about your project. The more information you provide, the better we can assist you.'
    },
    {
      category: 'General',
      question: 'Do you work with international clients?',
      answer: 'Absolutely! We serve clients worldwide and can accommodate different time zones. Our team is experienced in working with international businesses across various industries.'
    },
    {
      category: 'Process',
      question: 'How do you vet your virtual assistants?',
      answer: 'We have a rigorous 5-step vetting process including skill assessment tests, multiple interview rounds, reference checks, and background verification. Only the top 2% of candidates are selected.'
    },
    {
      category: 'Process',
      question: 'What is the typical onboarding time?',
      answer: 'You can typically have a virtual assistant ready to work within 48 to 72 hours of your initial consultation, depending on the complexity of the role.'
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="bg-gray-900 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-yellow-500/5 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-400 mb-8">
              Everything you need to know about SavvyTie and how we help businesses scale with elite virtual talent.
            </p>
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search for answers..."
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FaSearch className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <div 
                  key={index}
                  className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-200 hover:border-yellow-400 group"
                >
                  <button 
                    className="w-full px-6 py-6 text-left flex justify-between items-center bg-white group-hover:bg-yellow-50/30 transition-colors"
                    onClick={() => toggleFaq(index)}
                  >
                    <div>
                      <span className="text-xs font-bold text-yellow-600 uppercase tracking-wider mb-1 block">
                        {faq.category}
                      </span>
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                    </div>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${openIndex === index ? 'bg-yellow-500 text-white' : 'bg-gray-100 text-gray-500'}`}>
                      {openIndex === index ? <FaChevronUp className="w-4 h-4" /> : <FaChevronDown className="w-4 h-4" />}
                    </div>
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-6 bg-white">
                      <div className="w-12 h-1 bg-yellow-500 rounded-full mb-4"></div>
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-20">
                <p className="text-gray-500 text-lg">No questions found matching your search.</p>
              </div>
            )}
          </div>

          {/* Contact Support */}
          <div className="mt-20 flex flex-col items-center">
            <div className="bg-gray-50 rounded-3xl p-10 border border-gray-200 text-center max-w-2xl w-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h3>
              <p className="text-gray-600 mb-8">
                Can't find the answer you're looking for? Please chat with our friendly team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact-us"
                  className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all flex items-center justify-center"
                >
                  <FaEnvelope className="mr-2" />
                  Contact Us
                </a>
                <a 
                  href="tel:+442012345678"
                  className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-yellow-500 hover:text-yellow-600 transition-all flex items-center justify-center"
                >
                  <FaPhone className="mr-2" />
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
