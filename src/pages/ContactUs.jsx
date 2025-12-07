// src/pages/ContactUs/ContactUs.jsx
import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaLinkedin, FaTwitter, FaFacebook, FaArrowRight, FaCheck, FaHeadset, FaRocket, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';

const ContactUs = () => {
  const [activeTab, setActiveTab] = useState('employer');
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    roleNeeded: '',
    profession: '',
    experience: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setFormData({ 
      name: '', 
      email: '', 
      phone: '', 
      company: '', 
      roleNeeded: '',
      profession: '',
      experience: ''
    });
    setSubmitStatus(null);
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (submitStatus) setSubmitStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus(null);

    try {
      const endpoint = activeTab === 'employer' 
        ? 'https://appsail-50036604868.development.catalystappsail.in/api/employers/register'
        : 'https://appsail-50036604868.development.catalystappsail.in/api/candidates/register';

      const payload = activeTab === 'employer'
        ? {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            company: formData.company,
            roleNeeded: formData.roleNeeded
          }
        : {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            profession: formData.profession,
            experience: formData.experience
          };

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
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
          roleNeeded: '',
          profession: '',
          experience: ''
        });
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

  const contactDetails = [
    {
      icon: <FaPhone className="w-5 h-5" />,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 123-4568'],
      description: 'Mon-Fri from 8am to 6pm'
    },
    {
      icon: <FaEnvelope className="w-5 h-5" />,
      title: 'Email Us',
      details: ['hello@savvytie.com', 'support@savvytie.com'],
      description: 'We reply within 2 hours'
    },
    {
      icon: <FaMapMarkerAlt className="w-5 h-5" />,
      title: 'Visit Us',
      details: ['123 Business District', 'New York, NY 10001'],
      description: 'Come say hello at our office'
    },
    {
      icon: <FaClock className="w-5 h-5" />,
      title: 'Office Hours',
      details: ['Monday - Friday: 9:00 - 18:00', 'Saturday: 10:00 - 14:00'],
      description: 'Eastern Standard Time'
    }
  ];

  const features = [
    {
      icon: <FaHeadset className="w-6 h-6" />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support for all your inquiries'
    },
    {
      icon: <FaRocket className="w-6 h-6" />,
      title: 'Quick Response',
      description: 'Get responses within 2 hours during business hours'
    },
    {
      icon: <FaCheck className="w-6 h-6" />,
      title: 'Quality Guarantee',
      description: 'We ensure the highest quality service and support'
    }
  ];

  const faqs = [
    {
      question: 'How quickly will I get a response?',
      answer: 'We typically respond within 2 hours during business hours and within 24 hours on weekends. Our team is dedicated to providing timely responses to all inquiries.'
    },
    {
      question: 'Do you offer free consultations?',
      answer: 'Yes, we offer free 30-minute consultations to discuss your specific needs and requirements. This helps us understand your business and provide the best possible solution.'
    },
    {
      question: 'What information should I include in my inquiry?',
      answer: 'Please include your name, company, specific needs, timeline, and any relevant details about your project. The more information you provide, the better we can assist you.'
    },
    {
      question: 'Do you work with international clients?',
      answer: 'Absolutely! We serve clients worldwide and can accommodate different time zones. Our team is experienced in working with international businesses across various industries.'
    },
    {
      question: 'What is your typical response time?',
      answer: 'During business hours (9 AM - 6 PM EST), we respond within 2 hours. For inquiries received outside business hours, we respond by the next business day.'
    },
    {
      question: 'Can I schedule a call instead of filling out the form?',
      answer: 'Yes, you can schedule a call directly using the "Schedule a Call" button in our hero section. We will contact you at your preferred time.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-transparent z-0"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 mt-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Get In Touch
              <span className="text-yellow-500 block">With Our Team</span>
            </h1>
            
            <p className="text-xl text-gray-200 leading-relaxed mb-8 max-w-2xl mx-auto">
              Ready to transform your business with our virtual assistants? Let's start the conversation. 
              We're here to help you find the perfect solution.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-200 transform hover:scale-105 flex items-center">
                Schedule a Call
                <FaArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Send us a Message
                </h2>
                <p className="text-lg text-gray-600">
                  Fill out the form and our team will get back to you within 2 hours.
                </p>
              </div>

              <div className="flex bg-gray-100 rounded-lg p-1 mb-8">
                <button
                  onClick={() => handleTabChange('employer')}
                  className={`flex-1 py-3 px-6 rounded-md font-semibold text-base transition-colors duration-200 ${
                    activeTab === 'employer'
                      ? 'bg-yellow-400 text-black'
                      : 'text-black hover:bg-gray-200'
                  }`}
                >
                  I'm Hiring
                </button>
                <button
                  onClick={() => handleTabChange('candidate')}
                  className={`flex-1 py-3 px-6 rounded-md font-semibold text-base transition-colors duration-200 ${
                    activeTab === 'candidate'
                      ? 'bg-yellow-400 text-black'
                      : 'text-black hover:bg-gray-200'
                  }`}
                >
                  I'm Applying
                </button>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-black mb-2">
                {activeTab === 'employer' ? 'Find Your Perfect Hire' : 'Join Our Talent Network'}
              </h3>
              <p className="text-gray-600 text-base mb-6">
                {activeTab === 'employer' ? 'Get matched with top talent in 48 hours' : 'Access premium opportunities with UK companies'}
              </p>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center space-x-3">
                  <CheckCircleIcon className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="text-green-800 font-semibold">
                      {activeTab === 'employer' ? 'Request Submitted!' : 'Application Submitted!'}
                    </p>
                    <p className="text-green-600 text-sm">We'll contact you within 24 hours.</p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center space-x-3">
                  <XCircleIcon className="w-6 h-6 text-red-600 flex-shrink-0" />
                  <div>
                    <p className="text-red-800 font-semibold">Submission Failed</p>
                    <p className="text-red-600 text-sm">Please try again or contact support.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {activeTab === 'employer' ? (
                  <>
                    <div>
                      <label className="block text-black text-sm font-medium mb-2">Full Name *</label>
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
                      <label className="block text-black text-sm font-medium mb-2">Work Email *</label>
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

                    <div>
                      <label className="block text-black text-sm font-medium mb-2">Phone Number *</label>
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
                      <label className="block text-black text-sm font-medium mb-2">Company Name *</label>
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
                    
                    <div>
                      <label className="block text-black text-sm font-medium mb-2">Role Needed *</label>
                      <input
                        type="text"
                        name="roleNeeded"
                        value={formData.roleNeeded}
                        onChange={handleChange}
                        required
                        disabled={loading}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-base disabled:bg-gray-100 disabled:cursor-not-allowed"
                        placeholder="e.g., Accountant, Digital Marketer, Developer"
                      />
                    </div>
                    
              
                  </>
                ) : (
                  <>
                    <div>
                      <label className="block text-black text-sm font-medium mb-2">Full Name *</label>
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
                      <label className="block text-black text-sm font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={loading}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-base disabled:bg-gray-100 disabled:cursor-not-allowed"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-black text-sm font-medium mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        disabled={loading}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-base disabled:bg-gray-100 disabled:cursor-not-allowed"
                        placeholder="+91 12345 67890"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-black text-sm font-medium mb-2">Profession *</label>
                      <input
                        type="text"
                        name="profession"
                        value={formData.profession}
                        onChange={handleChange}
                        required
                        disabled={loading}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-base disabled:bg-gray-100 disabled:cursor-not-allowed"
                        placeholder="e.g., Accountant, Developer, Digital Marketer"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-black text-sm font-medium mb-2">Experience *</label>
                      <input
                        type="text"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        required
                        disabled={loading}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-base disabled:bg-gray-100 disabled:cursor-not-allowed"
                        placeholder="e.g., 3 years, 5+ years, etc."
                      />
                    </div>
                  </>
                )}
                
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-yellow-400 text-black py-4 px-6 rounded-lg font-semibold text-lg hover:bg-yellow-500 transition-colors duration-200 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-600"
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
                    activeTab === 'employer' ? 'Get Free Consultation' : 'Apply Now'
                  )}
                </button>
                
                <p className="text-gray-500 text-xs text-center">
                  By submitting, you agree to our terms. We'll contact you within 24 hours.
                </p>
              </form>
            </div>

            {/* Right Side - Contact Details */}
            <div className="lg:pl-12">
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
                
                <div className="space-y-6">
                  {contactDetails.map((contact, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center">
                        <div className="text-white">
                          {contact.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{contact.title}</h4>
                        {contact.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-700">{detail}</p>
                        ))}
                        <p className="text-gray-500 text-sm mt-1">{contact.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-500 transition-colors duration-200">
                      <FaLinkedin className="w-5 h-5 text-white" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-500 transition-colors duration-200">
                      <FaTwitter className="w-5 h-5 text-white" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-500 transition-colors duration-200">
                      <FaFacebook className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-yellow-500 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-2">Emergency Support</h4>
                  <p className="text-gray-700 mb-4">Need immediate assistance?</p>
                  <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center">
                    <FaHeadset className="mr-2 w-4 h-4" />
                    Call Emergency Line
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Contact Savvy Tie?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to providing exceptional support and building lasting partnerships
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-50 transition-colors duration-200 shadow-sm">
                  <div className="text-yellow-600">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">Quick answers to common questions</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-200 hover:border-yellow-300"
              >
                <button 
                  className="w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-yellow-600">
                    {openFaqIndex === index ? (
                      <FaChevronUp className="w-4 h-4" />
                    ) : (
                      <FaChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-6">
                    <div className="w-12 h-1 bg-yellow-500 rounded-full mb-4"></div>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-yellow-50 rounded-2xl p-8 border border-yellow-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Still have questions?</h3>
              <p className="text-gray-600 mb-6">Our team is here to help you get the answers you need.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-200 flex items-center justify-center">
                  <FaPhone className="mr-2 w-4 h-4" />
                  Call Us Now
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-yellow-500 hover:text-yellow-600 transition-colors duration-200 flex items-center justify-center">
                  <FaEnvelope className="mr-2 w-4 h-4" />
                  Email Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that have transformed their operations with Savvy Tie virtual assistants.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-200 transform hover:scale-105">
              Schedule a Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200">
              View Our Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;