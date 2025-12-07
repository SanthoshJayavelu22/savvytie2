// src/pages/ServiceDetail/ITOutsourcing.jsx
import React, { useState } from 'react';

import {  FaCheck, FaStar, FaChevronDown, FaChevronUp, FaLaptopCode } from 'react-icons/fa';
import CallToAction from '../../components/CallToAction';
import ConsultationForm from '../../components/ConsultationForm';

const ITOutsourcing = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);


  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };




  const serviceData = {
    title: 'IT Outsourcing',
    description: 'Expert IT professionals providing comprehensive technology solutions, from software development to technical support and system administration.',
    heroImage: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    whyOutsource: [
      {
        title: 'Access Top Tech Talent',
        description: 'Get access to highly skilled IT professionals with expertise across various technologies and platforms.'
      },
      {
        title: '60% Cost Savings',
        description: 'Achieve significant cost savings compared to local IT hires while maintaining high-quality technical support.'
      },
      {
        title: '24/7 Technical Support',
        description: 'Provide round-the-clock technical support and system monitoring for your global operations.'
      }
    ],
    advantages: [
      'No lock in contracts',
      'No set up fees (recruiting is free)',
      'Free to change your staff if you need to',
      'Only pay an hourly rate which includes computer, internet and all fees',
      '24/7 operation (we can handle global businesses)',
      'IT professionals can work from a minimum of 20 hours per week'
    ],
    benefits: [
      {
        title: 'Cost Effective',
        description: 'Save 60% compared to local IT staff while accessing top-tier technical expertise.'
      },
      {
        title: 'Expert Support',
        description: 'Get support from experienced IT professionals across software development, system administration, and cybersecurity.'
      },
      {
        title: 'Scalable Resources',
        description: 'Easily scale your IT team based on project requirements and business growth.'
      },
      {
        title: 'Latest Technologies',
        description: 'Access professionals skilled in the latest technologies and development methodologies.'
      }
    ],
    testimonials: [
      {
        name: 'Daniel Cooper',
        company: 'Tech Startup',
        role: 'CTO',
        content: 'The quality of our software development has improved dramatically while cutting costs by 65%. Exceptional talent!',
        rating: 5
      },
      {
        name: 'Amanda Foster',
        company: 'Enterprise Solutions',
        role: 'IT Director',
        content: '24/7 technical support has been a game-changer for our global operations. Highly professional team.',
        rating: 5
      }
    ],
    faqs: [
      {
        question: 'What IT services do you provide?',
        answer: 'We provide software development, technical support, system administration, cybersecurity monitoring, cloud infrastructure management, and IT project management.'
      },
      {
        question: 'What technologies are your developers experienced in?',
        answer: 'Our developers are experienced in JavaScript, Python, Java, .NET, React, Node.js, cloud platforms, and various databases.'
      },
      {
        question: 'Do you provide dedicated IT teams?',
        answer: 'Yes, we can provide dedicated IT teams that work exclusively on your projects and integrate with your existing processes.'
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
                <FaLaptopCode className="w-8 h-8 text-white" />
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

      {/* About IT Outsourcing Section */}
<section className="relative py-20 bg-gradient-to-b from-white to-yellow-50 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      
      {/* Left Content */}
      <div className="text-center lg:text-left">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          About Our <span className="text-yellow-500">IT Outsourcing Services</span>
        </h2>
        <div className="w-24 h-1 bg-yellow-400 mx-auto lg:mx-0 mb-8 rounded-full"></div>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          At <span className="font-semibold text-gray-900">Savvy Tie</span>, we specialize in providing top-tier IT outsourcing solutions designed to enhance your business operations. From software development to system administration, our experts ensure your technology backbone stays robust and efficient.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          With 24/7 technical support and access to skilled IT professionals, we help you scale efficiently, reduce costs, and stay ahead in the ever-evolving tech landscape. Our flexible engagement models allow you to focus on your core business while we handle your IT needs.
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
            alt="IT Outsourcing Team"
            className="w-full h-[480px] object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="absolute -top-6 -left-6 w-40 h-40 bg-yellow-200 rounded-full blur-3xl opacity-50 animate-pulse"></div>
      </div>
    </div>

    {/* Roles / Expertise Below Image */}
    <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
      {[
        { title: "Software Developers", desc: "Expert developers in modern technologies like React, Node.js, and Python." },
        { title: "System Administrators", desc: "Ensuring your systems run securely and efficiently around the clock." },
        { title: "Technical Support Engineers", desc: "24/7 assistance for troubleshooting and maintaining infrastructure." },
        { title: "Cybersecurity Specialists", desc: "Protecting your business from digital threats and ensuring data integrity." },
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Access top IT talent and drive your technology initiatives forward</p>
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

export default ITOutsourcing;