// src/pages/ServiceDetail/DebtCollection.jsx
import React, { useState } from 'react';

import {  FaCheck, FaStar, FaChevronDown, FaChevronUp, FaMoneyBillWave } from 'react-icons/fa';
import CallToAction from '../../components/CallToAction';
import ConsultationForm from '../../components/ConsultationForm';

const DebtCollection = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);


  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };





  const serviceData = {
    title: 'Debt Collection',
    description: 'Professional debt collection agents with excellent communication skills to recover outstanding payments while maintaining customer relationships.',
    heroImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    whyOutsource: [
      {
        title: '50% Higher Recovery Rates',
        description: 'Achieve significantly higher debt recovery rates with our professional collection strategies and persistent follow-up.'
      },
      {
        title: 'Professional Communication',
        description: 'Maintain positive customer relationships while recovering debts with our trained communication specialists.'
      },
      {
        title: 'Legal Compliance',
        description: 'Ensure complete compliance with debt collection regulations and maintain your company reputation.'
      }
    ],
    advantages: [
      'No lock in contracts',
      'No set up fees (recruiting is free)',
      'Free to change your staff if you need to',
      'Only pay an hourly rate which includes computer, internet and all fees',
      '24/7 operation (we can handle global businesses)',
      'Agents can work from a minimum of 20 hours per week'
    ],
    benefits: [
      {
        title: 'Improved Cash Flow',
        description: 'Recover outstanding payments faster and improve your business cash flow with professional collection services.'
      },
      {
        title: 'Professional Approach',
        description: 'Maintain customer relationships while effectively recovering debts with our trained collection specialists.'
      },
      {
        title: 'Cost Effective',
        description: 'Save 70% compared to local collection agencies while achieving better recovery rates.'
      },
      {
        title: 'Legal Protection',
        description: 'Ensure compliance with all debt collection laws and regulations to protect your business.'
      }
    ],
    testimonials: [
      {
        name: 'Richard Barnes',
        company: 'Financial Services Ltd',
        role: 'Credit Manager',
        content: 'Recovery rates improved by 55% while maintaining positive customer relationships. Exceptional service!',
        rating: 5
      },
      {
        name: 'Patricia Wong',
        company: 'Healthcare Provider',
        role: 'Accounts Receivable Manager',
        content: 'Professional, persistent, and effective. Our cash flow has improved significantly.',
        rating: 5
      }
    ],
    faqs: [
      {
        question: 'What debt collection methods do you use?',
        answer: 'We use professional phone calls, email communication, payment plan negotiation, and documented follow-up processes.'
      },
      {
        question: 'How do you ensure legal compliance?',
        answer: 'All our agents are trained in debt collection laws and regulations, and we implement strict compliance monitoring.'
      },
      {
        question: 'Can you handle international debt collection?',
        answer: 'Yes, we have experience with international debt collection and understand different regulatory environments.'
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
                <FaMoneyBillWave className="w-8 h-8 text-white" />
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

      {/* About Debt Collection Section */}
<section className="relative py-20 bg-gradient-to-b from-white to-yellow-50 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 items-center">

      {/* Text Content */}
      <div className="text-center lg:text-left">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          About Our <span className="text-yellow-500">Debt Collection Services</span>
        </h2>

        <div className="w-24 h-1 bg-yellow-400 mx-auto lg:mx-0 mb-8 rounded-full"></div>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          At <span className="font-semibold text-gray-900">Savvy Tie</span>, our Debt Collection specialists combine professionalism with empathy to help businesses recover outstanding payments effectively and ethically.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          We focus on improving your cash flow while maintaining strong client relationships. Our trained agents follow strict compliance protocols and use modern CRM tools to ensure transparency and accuracy in every interaction.
        </p>

        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-xl shadow-md transition-all duration-300">
          Get a Free Consultation
        </button>
      </div>

      {/* Image Section */}
      <div className="relative">
        <div className="rounded-3xl overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80"
            alt="Debt Collection Professionals"
            className="w-full h-[480px] object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Decorative Glow */}
        <div className="absolute -top-6 -left-6 w-40 h-40 bg-yellow-200 rounded-full blur-3xl opacity-50 animate-pulse"></div>
      </div>
    </div>

    {/* Roles / Key Areas Below Image */}
    <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
      {[
        { title: "Debt Recovery Specialists", desc: "Skilled professionals in ethical and efficient debt collection." },
        { title: "Legal Compliance Experts", desc: "Ensuring adherence to regional and international regulations." },
        { title: "Customer Retention Focused", desc: "Balancing recovery with positive customer relationships." },
        { title: "Multi-Industry Experience", desc: "Serving finance, healthcare, retail, and global businesses." },
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Recover outstanding payments while maintaining customer relationships</p>
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
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">
            {serviceData.faqs.map((faq, index) => (
              <div key={index} className="bg-gray-100 border-b border-gray-200 overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none hover:bg-gray-200 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-base font-semibold text-gray-700 pr-4">{faq.question}</h3>
                  <div className="flex-shrink-0 text-gray-500 font-bold ml-4">
                    {openFaqIndex === index ? 'v' : '>'}
                  </div>
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-4 bg-gray-100">
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
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

export default DebtCollection;