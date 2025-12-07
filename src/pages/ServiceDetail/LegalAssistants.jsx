// src/pages/ServiceDetail/LegalAssistants.jsx
import React, { useState } from 'react';

import {  FaCheck, FaStar, FaChevronDown, FaChevronUp, FaBalanceScale } from 'react-icons/fa';
import CallToAction from '../../components/CallToAction';
import ConsultationForm from '../../components/ConsultationForm';

const LegalAssistants = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);


  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };



  const serviceData = {
    title: 'Legal Assistants',
    description: 'Skilled legal assistants to support law firms and legal departments with research, documentation, and administrative tasks.',
    heroImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    whyOutsource: [
      {
        title: '60% Time Savings',
        description: 'Reduce legal research time by 60% with our trained legal assistants handling case preparation and documentation.'
      },
      {
        title: 'Accurate Documentation',
        description: 'Ensure precise document preparation and review with our detail-oriented legal support specialists.'
      },
      {
        title: 'Enhanced Client Service',
        description: 'Provide better client service with dedicated support for communication and case management.'
      }
    ],
    advantages: [
      'No lock in contracts',
      'No set up fees (recruiting is free)',
      'Free to change your staff if you need to',
      'Only pay an hourly rate which includes computer, internet and all fees',
      '24/7 operation (we can handle global businesses)',
      'Assistants can work from a minimum of 20 hours per week'
    ],
    benefits: [
      {
        title: 'Cost Effective',
        description: 'Save 60% compared to local legal assistants while maintaining professional legal support standards.'
      },
      {
        title: 'Expert Support',
        description: 'Get support from trained legal professionals skilled in research, documentation, and case management.'
      },
      {
        title: 'Accurate Work',
        description: 'Ensure precise legal document preparation and thorough research with our quality-focused assistants.'
      },
      {
        title: 'Scalable Resources',
        description: 'Easily scale your legal support based on case load and firm requirements.'
      }
    ],
    testimonials: [
      {
        name: 'Robert Henderson',
        company: 'Henderson Law Firm',
        role: 'Managing Partner',
        content: 'Our legal research efficiency has improved dramatically. The quality of work is exceptional.',
        rating: 5
      },
      {
        name: 'Susan Mitchell',
        company: 'Corporate Legal Dept',
        role: 'General Counsel',
        content: 'The cost savings and quality of legal support have been outstanding for our department.',
        rating: 5
      }
    ],
    faqs: [
      {
        question: 'What legal tasks can assistants handle?',
        answer: 'Our legal assistants handle legal research, document preparation, case management support, client communication, court filing assistance, and legal database management.'
      },
      {
        question: 'Are your legal assistants familiar with legal software?',
        answer: 'Yes, our assistants are trained in popular legal software including Clio, PracticePanther, Westlaw, and LexisNexis.'
      },
      {
        question: 'How do you ensure confidentiality?',
        answer: 'All legal assistants sign strict confidentiality agreements and we implement secure data handling protocols for sensitive legal information.'
      }
    ]
  };

  return (
    <div className="pt-20">


      <section className="relative py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20" style={{backgroundImage: `url(${serviceData.heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center justify-center space-x-4 mb-6">
              <div className="bg-yellow-400 rounded-2xl p-4 shadow-lg">
                <FaBalanceScale className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6 leading-tight">
              {serviceData.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-2">
              {serviceData.description}
            </p>
          </div>
        </div>
      </section>

      {/* About Legal Assistants Section */}
<section className="relative py-20 bg-gradient-to-b from-white to-yellow-50 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      
      {/* Left Content */}
      <div className="text-center lg:text-left">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          About Our <span className="text-yellow-500">Legal Assistant Services</span>
        </h2>
        <div className="w-24 h-1 bg-yellow-400 mx-auto lg:mx-0 mb-8 rounded-full"></div>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          At <span className="font-semibold text-gray-900">Savvy Tie</span>, our Legal Assistants provide reliable support to law firms and corporate legal departments. 
          We handle legal research, drafting, documentation, and administrative work so your legal teams can focus on core case strategies.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          With expertise in tools like <span className="font-semibold">Clio, PracticePanther, and LexisNexis</span>, our assistants ensure accuracy, confidentiality, 
          and efficiency in every task — making your legal operations smoother and more productive.
        </p>

        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-xl shadow-md transition-all duration-300">
          Get a Free Consultation
        </button>
      </div>

      {/* Right Image */}
      <div className="relative">
        <div className="rounded-3xl overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=900&q=80"
            alt="Legal Assistants Team"
            className="w-full h-[480px] object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="absolute -top-6 -left-6 w-40 h-40 bg-yellow-200 rounded-full blur-3xl opacity-50 animate-pulse"></div>
      </div>
    </div>

    {/* Roles / Expertise Below Image */}
    <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
      {[
        { title: "Legal Researchers", desc: "Conducting detailed case and precedent research with accuracy and efficiency." },
        { title: "Document Drafters", desc: "Preparing legal drafts, affidavits, and contract documentation." },
        { title: "Case Management Support", desc: "Managing client communication, filings, and scheduling for lawyers." },
        { title: "Paralegal Support", desc: "Assisting attorneys with trial preparation, discovery, and case review." },
      ].map((role, index) => (
        <div key={index} className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg border border-gray-100 transition">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{role.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{role.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Why Outsource Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Why Choose Savvy Tie for {serviceData.title}?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Enhance your legal practice with professional support</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {serviceData.whyOutsource.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-yellow-400 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <FaCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Savvy Tie Advantage Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">The Savvy Tie Advantage</h2>
            <p className="text-xl text-gray-600">Unparalleled Service, Unrivaled Quality</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceData.advantages.map((advantage, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-gray-700 font-medium">{advantage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Benefits of {serviceData.title} for Your Business</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {serviceData.benefits.map((benefit, index) => (
              <div key={index} className="flex space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                    <FaCheck className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Don't just take our word for it</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {serviceData.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-bold text-black">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about {serviceData.title}</p>
          </div>
          <div className="space-y-4">
            {serviceData.faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-xl">
                <button className="w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none" onClick={() => toggleFaq(index)}>
                  <h3 className="text-lg font-bold text-black pr-4">{faq.question}</h3>
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                    {openFaqIndex === index ? <FaChevronUp className="w-4 h-4 text-yellow-600" /> : <FaChevronDown className="w-4 h-4 text-yellow-600" />}
                  </div>
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-6">
                    <div className="w-12 h-1 bg-yellow-400 rounded-full mb-4"></div>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

<ConsultationForm/>

      <CallToAction />
    </div>
  );
};

export default LegalAssistants;