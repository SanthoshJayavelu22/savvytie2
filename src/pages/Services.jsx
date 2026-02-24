// src/pages/Services.jsx
import React, { useState } from 'react';
import { 
  FaHome, 
  FaUserTie, 
  FaHashtag, 
  FaPhone, 
  FaComments,
  FaChartLine,
  FaDatabase,
  FaMoneyBillWave,
  FaLaptopCode,
  FaShoppingCart,
  FaBalanceScale,
  FaChevronDown,
  FaChevronUp,
  FaArrowRight
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';

const Services = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const services = [
    {
      id: 'property-assistants',
      title: 'Property Assistants',
      icon: <FaHome className="w-12 h-12" />,
      description: 'Professional property management assistants to handle all your real estate administrative tasks, tenant coordination, and property maintenance coordination.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      roles: [
        'Property Listing Management',
        'Tenant Communication & Coordination',
        'Rent Collection & Payment Tracking',
        'Maintenance Request Handling',
        'Property Inspection Coordination',
        'Lease Agreement Management'
      ],
      benefits: [
        'Reduce property management time by 70%',
        '24/7 tenant support coverage',
        'Streamlined communication processes',
        'Automated rent collection tracking'
      ]
    },
    {
      id: 'personal-assistants',
      title: 'Personal Assistants',
      icon: <FaUserTie className="w-12 h-12" />,
      description: 'Dedicated personal assistants to manage your schedule, communications, and daily tasks, giving you back valuable time for what matters most.',
      image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      roles: [
        'Calendar & Schedule Management',
        'Email & Communication Handling',
        'Travel Arrangements & Booking',
        'Personal Errands Coordination',
        'Meeting Preparation & Follow-up',
        'Document Management'
      ],
      benefits: [
        'Save 15+ hours per week',
        'Never miss important appointments',
        'Reduced mental load and stress',
        'Better work-life balance'
      ]
    },
    {
      id: 'social-media-management',
      title: 'Social Media Management',
      icon: <FaHashtag className="w-12 h-12" />,
      description: 'Expert social media managers to grow your online presence, engage your audience, and drive business growth through strategic social media campaigns.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      roles: [
        'Content Creation & Scheduling',
        'Community Engagement & Management',
        'Social Media Strategy Development',
        'Analytics & Performance Tracking',
        'Paid Social Campaign Management',
        'Brand Voice Maintenance'
      ],
      benefits: [
        'Increase engagement by 300%',
        'Consistent brand presence',
        'Data-driven strategy optimization',
        'Time-saving content production'
      ]
    },
    {
      id: 'call-centre',
      title: 'Call Centre',
      icon: <FaPhone className="w-12 h-12" />,
      description: 'Professional call center agents providing exceptional customer service, technical support, and sales assistance for your business.',
      image: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      roles: [
        'Inbound Customer Support',
        'Technical Troubleshooting',
        'Order Processing & Management',
        'Appointment Scheduling',
        'Customer Query Resolution',
        'Quality Assurance Monitoring'
      ],
      benefits: [
        '24/7 customer support coverage',
        '70% cost savings vs local call centers',
        'Multilingual support available',
        'Scalable team based on demand'
      ]
    },
    {
      id: 'live-chat-support',
      title: 'Live Chat Support',
      icon: <FaComments className="w-12 h-12" />,
      description: 'Real-time live chat specialists to engage website visitors, provide instant support, and convert leads into customers.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      roles: [
        'Real-time Customer Engagement',
        'Lead Qualification & Nurturing',
        'Product Information & Support',
        'Issue Resolution & Escalation',
        'Sales Conversion Assistance',
        'Customer Feedback Collection'
      ],
      benefits: [
        'Increase conversion rates by 40%',
        'Instant customer response',
        'Reduced support ticket volume',
        'Improved customer satisfaction'
      ]
    },
    {
      id: 'telesales',
      title: 'Telesales',
      icon: <FaChartLine className="w-12 h-12" />,
      description: 'Skilled telesales professionals to drive revenue growth through outbound calls, lead generation, and customer relationship building.',
      image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      roles: [
        'Outbound Lead Generation',
        'Sales Calls & Presentations',
        'Appointment Setting',
        'Customer Follow-up',
        'Sales Pipeline Management',
        'Performance Reporting'
      ],
      benefits: [
        '3x more leads generated',
        'Consistent sales pipeline',
        'Professional brand representation',
        'Cost-effective sales expansion'
      ]
    },
    {
      id: 'data-entry-services',
      title: 'Data Entry Services',
      icon: <FaDatabase className="w-12 h-12" />,
      description: 'Accurate and efficient data entry specialists to handle all your information management needs with precision and attention to detail.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      roles: [
        'Database Management & Updates',
        'Document Processing & Digitization',
        'Record Keeping & Organization',
        'Data Validation & Cleaning',
        'Report Generation',
        'Data Analysis Support'
      ],
      benefits: [
        '99.9% accuracy guarantee',
        '70% faster processing times',
        'Secure data handling',
        'Scalable data management'
      ]
    },
    {
      id: 'debt-collection',
      title: 'Debt Collection',
      icon: <FaMoneyBillWave className="w-12 h-12" />,
      description: 'Professional debt collection agents with excellent communication skills to recover outstanding payments while maintaining customer relationships.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      roles: [
        'Account Recovery Management',
        'Payment Plan Negotiation',
        'Customer Communication',
        'Documentation & Record Keeping',
        'Legal Compliance Monitoring',
        'Performance Reporting'
      ],
      benefits: [
        'Increase recovery rates by 50%',
        'Professional customer communication',
        'Legal compliance assurance',
        'Improved cash flow'
      ]
    },
    {
      id: 'it-outsourcing',
      title: 'IT Outsourcing',
      icon: <FaLaptopCode className="w-12 h-12" />,
      description: 'Expert IT professionals providing comprehensive technology solutions, from software development to technical support and system administration.',
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      roles: [
        'Software Development',
        'Technical Support & Maintenance',
        'System Administration',
        'Cybersecurity Monitoring',
        'Cloud Infrastructure Management',
        'IT Project Management'
      ],
      benefits: [
        'Access to top tech talent',
        '70% cost savings',
        '24/7 technical support',
        'Scalable IT resources'
      ]
    },
    {
      id: 'sales-assistants',
      title: 'Sales Assistants',
      icon: <FaShoppingCart className="w-12 h-12" />,
      description: 'Sales support professionals to assist your sales team with customer service, order processing, and sales administration tasks.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      roles: [
        'Customer Service Support',
        'Order Processing & Management',
        'Product Knowledge Assistance',
        'Sales Documentation',
        'Customer Relationship Management',
        'Sales Team Support'
      ],
      benefits: [
        'Increase sales team productivity',
        'Better customer experience',
        'Faster order processing',
        'Improved sales operations'
      ]
    },
    {
      id: 'legal-assistants',
      title: 'Legal Assistants',
      icon: <FaBalanceScale className="w-12 h-12" />,
      description: 'Skilled legal assistants to support law firms and legal departments with research, documentation, and administrative tasks.',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      roles: [
        'Legal Research & Analysis',
        'Document Preparation & Review',
        'Case Management Support',
        'Client Communication',
        'Court Filing Assistance',
        'Legal Database Management'
      ],
      benefits: [
        'Reduce legal research time by 70%',
        'Accurate document preparation',
        'Enhanced client service',
        'Cost-effective legal support'
      ]
    }
  ];

  const faqs = [
    {
      question: "How quickly can I get started with a Savvy Tie assistant?",
      answer: "Most clients are matched with their perfect assistant within 72 hours. The onboarding process typically takes 3-5 business days, and your assistant can start delivering value immediately after training."
    },
    {
      question: "What's the typical cost savings compared to hiring locally?",
      answer: "Our clients save an average of 70% compared to local hires in the UK and Europe, while maintaining the same quality of work. This includes all costs - salary, equipment, software, and management overhead."
    },
    {
      question: "How do you ensure the quality of your assistants?",
      answer: "Every Savvy Tie assistant undergoes a rigorous 5-step vetting process including skills assessment, language proficiency testing, background checks, and role-specific competency evaluations. Only the top 3% of applicants are selected."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We serve clients across various industries including real estate, legal, healthcare, e-commerce, technology, and professional services. Our assistants are trained to adapt to specific industry requirements."
    },
    {
      question: "Can I scale my team up or down as needed?",
      answer: "Absolutely! Our flexible model allows you to scale your virtual assistant team based on your business needs. You can add or reduce assistants with a 30-day notice period."
    },
    {
      question: "What kind of support do you provide after hiring?",
      answer: "We provide dedicated account management, regular performance reviews, and 24/7 operational support to ensure your assistants are meeting your expectations and business objectives."
    },
    {
      question: "How do you handle data security and confidentiality?",
      answer: "We implement enterprise-grade security measures including encrypted communications, secure data storage, confidentiality agreements, and regular security audits to protect your business information."
    },
    {
      question: "What are your working hours and availability?",
      answer: "Our assistants are available across different time zones to match your business hours. We offer 24/7 support for certain services like call center and live chat support."
    },
    {
      question: "Can I interview candidates before hiring?",
      answer: "Yes, we provide curated shortlists of pre-vetted candidates, and you can conduct final interviews to ensure the perfect cultural and skill fit for your business."
    },
    {
      question: "What happens if I'm not satisfied with my assistant?",
      answer: "We offer a satisfaction guarantee. If you're not happy with your assistant within the first 30 days, we'll find you a replacement at no additional cost."
    },
    {
      question: "Do you provide training for the assistants?",
      answer: "Yes, all our assistants undergo comprehensive training in communication, tools, and processes. We also provide role-specific training to match your business requirements."
    },
    {
      question: "What tools and software do your assistants use?",
      answer: "Our assistants are proficient in all major business tools including Microsoft Office, Google Workspace, CRM systems, project management tools, and industry-specific software."
    }
  ];

  // Split FAQs into two columns
  const leftFaqs = faqs.slice(0, 6);
  const rightFaqs = faqs.slice(6, 12);

  return (
    <div className="pt-20">
      {/* Hero Section - Same as About page */}
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
              Our <span className="text-yellow-600">Services</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-2">
              Comprehensive virtual assistant services designed to transform your business operations and drive growth
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid - One by One */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Left Side - Service Title & Icon */}
                <div className="lg:w-1/2">
                  <div className="text-center lg:text-left">
                    <div className="inline-flex items-center justify-center lg:justify-start space-x-4 mb-8">
                      <div className="bg-yellow-400 rounded-2xl p-4 shadow-lg">
                        {service.icon}
                      </div>
                      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black">
                        {service.title}
                      </h2>
                    </div>
                    
                    <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Benefits */}
                    <div className="space-y-3 mb-8">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-sm">✓</span>
                          </div>
                          <span className="text-gray-700 font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link 
                        to="/hire-now"
                        className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-semibold text-lg hover:bg-yellow-500 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center"
                      >
                        Hire {service.title}
                        <FaArrowRight className="ml-2" />
                      </Link>
                      <Link 
                        to={`/services/${service.id}`}
                        className="border-2 border-yellow-400 text-yellow-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-200 transform hover:scale-105 flex items-center justify-center"
                      >
                        Read More
                        <FaArrowRight className="ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Right Side - Image & Available Roles */}
                <div className="lg:w-1/2">
                  <div className="relative">
                    {/* Image */}
                    <div className="rounded-3xl overflow-hidden shadow-2xl mb-8">
                      <img 
                        src={service.image}
                        alt={service.title}
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold shadow-lg">
                        Available Now
                      </div>
                    </div>

                    {/* Available Roles */}
                    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                      <h3 className="text-2xl font-bold text-black mb-6 flex items-center">
                        <span className="w-2 h-6 bg-yellow-400 rounded-full mr-3"></span>
                        Available Roles
                      </h3>
                      <div className="space-y-3">
                        {service.roles.map((role, roleIndex) => (
                          <div key={roleIndex} className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-yellow-400 transition-colors duration-200 group">
                            <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-200"></div>
                            <span className="text-gray-700 font-medium text-sm">
                              {role}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">70%</div>
              <div className="text-gray-300">Cost Savings</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">98%</div>
              <div className="text-gray-300">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">48h</div>
              <div className="text-gray-300">Average Match Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Two Columns with Click to Open */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-700">
              Everything you need to know about our services
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - First 6 FAQs */}
            <div className="space-y-2">
              {leftFaqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-gray-100 border-b border-gray-200 overflow-hidden"
                >
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none hover:bg-gray-200 transition-colors"
                    onClick={() => toggleFaq(index)}
                  >
                    <h3 className="text-base font-semibold text-gray-700 pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0 text-gray-500 font-bold ml-4">
                      {openFaqIndex === index ? 'v' : '>'}
                    </div>
                  </button>
                  {openFaqIndex === index && (
                    <div className="px-6 pb-4 bg-gray-100">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Column - Next 6 FAQs */}
            <div className="space-y-2">
              {rightFaqs.map((faq, index) => (
                <div 
                  key={index + 6} 
                  className="bg-gray-100 border-b border-gray-200 overflow-hidden"
                >
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none hover:bg-gray-200 transition-colors"
                    onClick={() => toggleFaq(index + 6)}
                  >
                    <h3 className="text-base font-semibold text-gray-700 pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0 text-gray-500 font-bold ml-4">
                      {openFaqIndex === index + 6 ? 'v' : '>'}
                    </div>
                  </button>
                  {openFaqIndex === index + 6 && (
                    <div className="px-6 pb-4 bg-gray-100">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Still Have Questions */}
          <div className="text-center mt-16">
            <div className="bg-yellow-400 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-black mb-4">
                Still have questions?
              </h3>
              <p className="text-yellow-900 mb-6 text-lg">
                Our team is here to help you find the perfect solution for your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/schedule-call"
                  className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 text-lg flex items-center justify-center"
                >
                  Schedule a Call
                </Link>
                <Link 
                  to="/contact-us"
                  className="border-2 border-black text-black px-8 py-4 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors duration-200 text-lg flex items-center justify-center"
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CallToAction />
    </div>
  );
};

export default Services;