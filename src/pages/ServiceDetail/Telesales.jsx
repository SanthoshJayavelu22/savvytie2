// src/pages/ServiceDetail/Telesales.jsx
import React, { useState } from 'react';

import { FaCheck, FaStar, FaChevronDown, FaChevronUp, FaChartLine } from 'react-icons/fa';
import CallToAction from '../../components/CallToAction';
import ConsultationForm from '../../components/ConsultationForm';

const Telesales = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);


  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };



  const serviceData = {
    title: 'Telesales',
    description: 'Skilled telesales professionals to drive revenue growth through outbound calls, lead generation, and customer relationship building.',
    heroImage: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    whyOutsource: [
      {
        title: '3x More Leads',
        description: 'Generate three times more qualified leads with our professional outbound calling and lead generation strategies.'
      },
      {
        title: 'Consistent Sales Pipeline',
        description: 'Maintain a steady flow of opportunities with systematic outbound calling and follow-up processes.'
      },
      {
        title: 'Cost-Effective Growth',
        description: 'Expand your sales reach without the overhead costs of hiring and training an in-house sales team.'
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
        title: 'Increased Revenue',
        description: 'Drive consistent revenue growth with professional outbound sales calls and appointment setting.'
      },
      {
        title: 'Professional Representation',
        description: 'Ensure your brand is represented professionally with trained sales agents who understand your products.'
      },
      {
        title: 'Cost Effective',
        description: 'Save 70% compared to local sales teams while achieving better results and higher conversion rates.'
      },
      {
        title: 'Scalable Sales',
        description: 'Quickly scale your sales efforts up or down based on market conditions and business objectives.'
      }
    ],
    testimonials: [
      {
        name: 'James Wilson',
        company: 'Software Solutions',
        role: 'Sales Director',
        content: 'Our lead generation has tripled since outsourcing telesales. The quality of appointments set is exceptional.',
        rating: 5
      },
      {
        name: 'Lisa Chen',
        company: 'B2B Services',
        role: 'CEO',
        content: 'The ROI from our telesales team has been outstanding. Professional, persistent, and productive.',
        rating: 5
      }
    ],
    faqs: [
      {
        question: 'What industries do your telesales agents specialize in?',
        answer: 'Our agents have experience across various industries including technology, healthcare, finance, education, and professional services.'
      },
      {
        question: 'How do you measure telesales performance?',
        answer: 'We track key metrics including calls made, conversations had, appointments set, lead conversion rates, and revenue generated.'
      },
      {
        question: 'Do you provide sales training for specific products?',
        answer: 'Yes, we provide comprehensive product training to ensure our agents can effectively represent your offerings.'
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
                <FaChartLine className="w-8 h-8 text-white" />
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

      {/* About Telesales Section */}
<section className="relative py-20 bg-gradient-to-b from-white to-yellow-50 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 items-center">

      {/* Left Text Content */}
      <div className="text-center lg:text-left">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          About Our <span className="text-yellow-500">Telesales</span> Services
        </h2>
        <div className="w-24 h-1 bg-yellow-400 mx-auto lg:mx-0 mb-8 rounded-full"></div>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          At <span className="font-semibold text-gray-900">Savvy Tie</span>, our Telesales team drives revenue by engaging 
          prospects over the phone, qualifying leads, and closing deals efficiently. 
          We ensure that your sales pipeline stays strong and productive.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Our trained telesales professionals follow best practices, handle objections effectively, 
          and represent your brand professionally to deliver measurable sales results.
        </p>

        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-xl shadow-md transition-all duration-300">
          Get a Free Consultation
        </button>
      </div>

      {/* Right Image */}
      <div className="relative">
        <div className="rounded-3xl overflow-hidden shadow-xl">
          <img
          src={serviceData.heroImage}
            alt="Telesales"
            className="w-full h-[480px] object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="absolute -top-6 -left-6 w-40 h-40 bg-yellow-200 rounded-full blur-3xl opacity-50 animate-pulse"></div>
      </div>
    </div>

    {/* Roles / Expertise Below Image */}
    <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
      {[
        { title: "Lead Call Specialists", desc: "Contact prospects and qualify leads efficiently over the phone." },
        { title: "Follow-Up Experts", desc: "Maintain consistent communication to nurture potential clients." },
        { title: "Sales Closers", desc: "Convert qualified leads into paying customers with persuasive techniques." },
        { title: "Pipeline Management", desc: "Track all sales activities and ensure targets are met on time." },
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Accelerate revenue growth with professional outbound sales</p>
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

export default Telesales;