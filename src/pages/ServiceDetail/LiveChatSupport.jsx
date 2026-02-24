// src/pages/ServiceDetail/LiveChatSupport.jsx
import React, { useState } from 'react';

import {  FaCheck, FaStar, FaChevronDown, FaChevronUp, FaComments } from 'react-icons/fa';
import CallToAction from '../../components/CallToAction';
import ConsultationForm from '../../components/ConsultationForm';

const LiveChatSupport = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);


  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };



  const serviceData = {
    title: 'Live Chat Support',
    description: 'Real-time live chat specialists to engage website visitors, provide instant support, and convert leads into customers.',
   heroImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    whyOutsource: [
      {
        title: 'Increased Conversion Rates',
        description: 'Achieve 40% higher conversion rates with real-time customer engagement and instant support for website visitors.'
      },
      {
        title: 'Instant Customer Response',
        description: 'Provide immediate assistance to potential customers, reducing bounce rates and improving user experience.'
      },
      {
        title: 'Reduced Support Costs',
        description: 'Lower support ticket volume and operational costs while maintaining high customer satisfaction levels.'
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
        title: 'Higher Conversions',
        description: 'Convert more website visitors into customers with instant support and lead qualification.'
      },
      {
        title: 'Improved Satisfaction',
        description: 'Deliver exceptional customer experiences with real-time problem resolution and support.'
      },
      {
        title: 'Cost Effective',
        description: 'Reduce support costs by 50% compared to traditional call centers while improving service quality.'
      },
      {
        title: 'Scalable Support',
        description: 'Easily scale your live chat operations based on website traffic and customer demand.'
      }
    ],
    testimonials: [
      {
        name: 'Emily Thompson',
        company: 'E-commerce Pro',
        role: 'Customer Experience Manager',
        content: 'Our conversion rates increased by 45% after implementing live chat support. The ROI has been incredible.',
        rating: 5
      },
      {
        name: 'David Park',
        company: 'SaaS Solutions',
        role: 'Growth Manager',
        content: 'The instant support has significantly reduced our bounce rates and improved customer satisfaction scores.',
        rating: 5
      }
    ],
    faqs: [
      {
        question: 'What platforms do you support for live chat?',
        answer: 'We support all major live chat platforms including Intercom, Zendesk, LiveChat, Drift, and custom solutions.'
      },
      {
        question: 'How do you handle multiple chat sessions?',
        answer: 'Our agents are trained to handle 3-5 chat sessions simultaneously while maintaining quality and response times.'
      },
      {
        question: 'Do you provide 24/7 live chat support?',
        answer: 'Yes, we offer 24/7 live chat support to serve customers across different time zones and regions.'
      }
    ]
  };

  return (
    <div className="pt-20">


{/* Hero Section */}
<section className="relative py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
  <div className="absolute inset-0 z-0 opacity-20" style={{backgroundImage: `url(${serviceData.heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
    <div className="text-center">
      <div className="inline-flex items-center justify-center space-x-4 mb-6">
        <div className="bg-yellow-400 rounded-2xl p-4 shadow-lg">
          <FaComments className="w-8 h-8 text-white" />
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

{/* About Live Chat Support Section */}
<section className="relative py-20 bg-gradient-to-b from-white to-yellow-50 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 items-center">

      {/* Left Text Content */}
      <div className="text-center lg:text-left">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          About Our <span className="text-yellow-500">Live Chat Support</span> Services
        </h2>
        <div className="w-24 h-1 bg-yellow-400 mx-auto lg:mx-0 mb-8 rounded-full"></div>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          At <span className="font-semibold text-gray-900">Savvy Tie</span>, our Live Chat Support team helps businesses engage customers 
          in real time — converting website visitors into paying clients through instant, personalized assistance. 
          We ensure that every interaction builds trust, reduces response time, and enhances user experience.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Whether you're an e-commerce brand, SaaS platform, or global enterprise, our trained chat specialists 
          deliver professional, 24/7 support that keeps your customers connected and satisfied.
        </p>

        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-xl shadow-md transition-all duration-300">
          Get a Free Consultation
        </button>
      </div>

      {/* Right Image - Same as Hero */}
      <div className="relative">
        <div className="rounded-3xl overflow-hidden shadow-xl">
          <img
            src={serviceData.heroImage}
            alt="Live Chat Support"
            className="w-full h-[480px] object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="absolute -top-6 -left-6 w-40 h-40 bg-yellow-200 rounded-full blur-3xl opacity-50 animate-pulse"></div>
      </div>
    </div>

    {/* Roles / Expertise Below Image */}
    <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
      {[
        { title: "Customer Engagement Agents", desc: "Professionals who provide real-time assistance and personalized communication." },
        { title: "Lead Conversion Specialists", desc: "Experts in converting chat leads into paying customers with proven strategies." },
        { title: "Technical Support Agents", desc: "Offer immediate technical help to resolve user issues and queries on the spot." },
        { title: "24/7 Global Support Team", desc: "Round-the-clock agents ready to serve clients across time zones with efficiency." },
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Boost conversions and customer satisfaction with real-time support</p>
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

export default LiveChatSupport;