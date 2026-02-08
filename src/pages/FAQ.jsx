// src/pages/FAQ.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp, FaPhone, FaEnvelope, FaSearch, FaRegQuestionCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: 'General',
      question: 'What exactly is a Savvy Tie Virtual Assistant?',
      answer: 'A Savvy Tie VA is a highly-vetted professional trained specifically to handle digital and administrative tasks for modern businesses. Unlike general freelancers, our assistants undergo a rigorous 5-step vetting process and are managed by our success team to ensure consistent, enterprise-grade quality.'
    },
    {
      category: 'Services',
      question: 'What kind of tasks can my VA handle?',
      answer: 'Our professionals are versatile digital specialists. They handle: \n• Marketing: SEO, lead funnels, social media coordination, and email campaigns.\n• Sales: CRM management, appointment setting, and sales deck preparation.\n• Operations: Email management, calendar organization, data entry, and research. If it’s a repeatable business process, we have a specialist for it.'
    },
    {
      category: 'Security',
      question: 'How do you ensure my company data is secure?',
      answer: 'Security is our baseline. All Savvy Tie professionals sign legally binding NDAs and undergo comprehensive background checks. We also train our team in cybersecurity best practices and mandate the use of secure password management tools like LastPass or 1Password for credential sharing.'
    },
    {
      category: 'Contracts',
      question: 'Is there a long-term commitment or minimum contract?',
      answer: "We focus on building long-term partnerships but offer flexibility. Most of our plans are monthly. If you wish to stop your service, we simply require 30 days' notice, ensuring a smooth handback of all tasks and assets."
    },
    {
      category: 'Process',
      question: 'Do I need to provide training for my VA?',
      answer: 'Our VAs arrive pre-equipped with high proficiency in standard tools (Slack, G-Suite, Trello, etc.). While you will need to brief them on your specific business workflows and brand voice, they are proactive learners designed to minimize your management overhead.'
    },
    {
      category: 'Logistics',
      question: 'How do we handle different time zones?',
      answer: 'We specifically match you with talent that can align with your core business hours—whether you are in London, Berlin, or New York. This ensures real-time collaboration and seamless communication during your working day.'
    },
    {
      category: 'Satisfaction',
      question: 'What happens if I’m not happy with my VA match?',
      answer: 'We strive for the perfect fit, but if for any reason the relationship isn’t working, our Client Success Team will facilitate additional training or provide a new candidate match at no extra setup cost. Your business continuity is our priority.'
    },
    {
      category: 'General',
      question: 'How quickly can I get started?',
      answer: 'Once you’ve had your initial consultation and we’ve defined your requirements, we can typically match you with an elite professional within 48 to 72 hours.'
    }
  ];


  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
          
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                How can we <span className="text-yellow-400">help?</span>
              </h1>
              <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                Expert answers to common questions about scaling your business with premium virtual talent.
              </p>
            </motion.div>
            

          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-24 bg-gray-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                key={index}
                className={`bg-white rounded-3xl border transition-all duration-300 overflow-hidden ${
                  openIndex === index 
                    ? 'border-yellow-400 shadow-xl shadow-yellow-400/5' 
                    : 'border-gray-200 hover:border-yellow-200 shadow-sm'
                }`}
              >
                <button 
                  className="w-full px-8 py-7 text-left flex justify-between items-center group"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="text-[10px] font-black text-yellow-600 bg-yellow-100 px-2 py-0.5 rounded uppercase tracking-widest mr-3">
                        {faq.category}
                      </span>
                      <div className="h-px flex-1 bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <h3 className={`text-xl font-bold transition-colors ${openIndex === index ? 'text-black' : 'text-gray-800'}`}>
                      {faq.question}
                    </h3>
                  </div>
                  <div className={`ml-4 flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                    openIndex === index ? 'bg-black text-white rotate-180' : 'bg-gray-100 text-gray-400 group-hover:bg-yellow-50'
                  }`}>
                    <FaChevronDown className="w-4 h-4" />
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-8 pb-8">
                        <div className="pt-4 border-t border-gray-100">
                           <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-line">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Contact Support Card */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-24 relative"
          >
            <div className="absolute inset-0 bg-yellow-400 blur-3xl opacity-10 rounded-full"></div>
            <div className="relative bg-black rounded-[2.5rem] p-12 text-center overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
               
               <h3 className="text-3xl font-extrabold text-white mb-4">Still have questions?</h3>
               <p className="text-gray-400 mb-10 text-lg max-w-xl mx-auto">
                 We're here to help you find the perfect solution for your business. Chat with us today.
               </p>
               
               <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <Link 
                   to="/contact-us"
                   className="bg-yellow-400 text-black px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white transition-all transform hover:scale-105"
                 >
                   Send an Email
                 </Link>
                 <a 
                   href="tel:+442012345678"
                   className="bg-white/10 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all border border-white/10"
                 >
                   Call Support
                 </a>
               </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;

