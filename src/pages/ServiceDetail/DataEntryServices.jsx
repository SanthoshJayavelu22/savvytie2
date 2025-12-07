// src/pages/ServiceDetail/DataEntryServices.jsx
import React, { useState } from 'react';

import { FaCheck, FaStar, FaChevronDown, FaChevronUp, FaDatabase } from 'react-icons/fa';
import CallToAction from '../../components/CallToAction';
import ConsultationForm from '../../components/ConsultationForm';

const DataEntryServices = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);


  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };




  const serviceData = {
    title: 'Data Entry Services',
    description: 'Accurate and efficient data entry specialists to handle all your information management needs with precision and attention to detail.',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    whyOutsource: [
      {
        title: '99.9% Accuracy Guarantee',
        description: 'Achieve near-perfect data accuracy with our meticulous data entry specialists and rigorous quality control processes.'
      },
      {
        title: '70% Faster Processing',
        description: 'Complete data entry projects 70% faster than in-house teams with our optimized workflows and experienced specialists.'
      },
      {
        title: 'Secure Data Handling',
        description: 'Ensure complete data security and confidentiality with our secure systems and trained professionals.'
      }
    ],
    advantages: [
      'No lock in contracts',
      'No set up fees (recruiting is free)',
      'Free to change your staff if you need to',
      'Only pay an hourly rate which includes computer, internet and all fees',
      '24/7 operation (we can handle global businesses)',
      'Specialists can work from a minimum of 20 hours per week'
    ],
    benefits: [
      {
        title: 'Cost Effective',
        description: 'Save 60% compared to local data entry staff while maintaining 99.9% accuracy rates.'
      },
      {
        title: 'High Accuracy',
        description: 'Ensure data integrity with our rigorous quality control and experienced data entry professionals.'
      },
      {
        title: 'Fast Turnaround',
        description: 'Complete large data entry projects quickly with our scalable team and efficient processes.'
      },
      {
        title: 'Scalable Resources',
        description: 'Easily scale your data entry capacity up or down based on project requirements and deadlines.'
      }
    ],
    testimonials: [
      {
        name: 'Karen Mitchell',
        company: 'Healthcare Systems',
        role: 'Data Manager',
        content: 'The accuracy and speed of data processing has transformed our operations. 99.9% accuracy is no exaggeration!',
        rating: 5
      },
      {
        name: 'Thomas Reed',
        company: 'Research Institute',
        role: 'Research Director',
        content: 'Handled 50,000+ records with incredible accuracy. The turnaround time was impressive.',
        rating: 5
      }
    ],
    faqs: [
      {
        question: 'What types of data entry do you handle?',
        answer: 'We handle database management, document processing, record keeping, data validation, report generation, and data analysis support.'
      },
      {
        question: 'How do you ensure data accuracy?',
        answer: 'We implement double-entry verification, automated validation checks, and manual quality control processes to ensure 99.9% accuracy.'
      },
      {
        question: 'Can you handle sensitive or confidential data?',
        answer: 'Yes, all our specialists sign confidentiality agreements and we implement secure data handling protocols.'
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
                <FaDatabase className="w-8 h-8 text-white" />
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

{/* About Data Entry Services Section */}
<section className="relative py-20 bg-gradient-to-b from-white to-yellow-50 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 items-center">

      {/* Text Content */}
      <div className="text-center lg:text-left">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          About Our <span className="text-yellow-500">Data Entry Services</span>
        </h2>
        <div className="w-24 h-1 bg-yellow-400 mx-auto lg:mx-0 mb-8 rounded-full"></div>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          At <span className="font-semibold text-gray-900">Savvy Tie</span>, our Data Entry Services ensure every piece of information is handled with precision and efficiency.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Our specialists focus on accuracy, timely delivery, and secure handling of your valuable business data.
        </p>

        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-xl shadow-md transition-all duration-300">
          Get a Free Consultation
        </button>
      </div>

      {/* Image Section */}
      <div className="relative">
        <div className="rounded-3xl overflow-hidden shadow-xl">
          <img
          src={serviceData.heroImage}
            alt="Data Entry Specialist"
            className="w-full h-[480px] object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="absolute -top-6 -left-6 w-40 h-40 bg-yellow-200 rounded-full blur-3xl opacity-50 animate-pulse"></div>
      </div>
    </div>

    {/* Roles / Expertise Below Image */}
    <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
      {[
        { title: "Database Specialists", desc: "Manage and update records accurately with attention to detail." },
        { title: "Document Digitization Experts", desc: "Convert physical records into organized digital formats efficiently." },
        { title: "Data Validation Professionals", desc: "Ensure all entries are accurate and consistent to maintain quality." },
        { title: "Secure Data Handlers", desc: "Maintain confidentiality and security for sensitive business information." },
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Achieve perfect data accuracy with our expert specialists</p>
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

export default DataEntryServices;