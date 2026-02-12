// src/components/Hero.jsx
import React, { useState } from 'react';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';
import apiClient from '../services/apiClient';

const Hero = () => {
  const [activeTab, setActiveTab] = useState('employer');
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
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus(null);

    try {
      const endpoint = activeTab === 'employer' 
        ? '/employers/register'
        : '/candidates/register';

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

      const result = await apiClient.post(endpoint, payload);

      if (result.success) {
        setSubmitStatus('success');
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
        console.error('Registration failed:', result.message);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (submitStatus) setSubmitStatus(null);
  };

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

  return (
    <section className="pt-28 pb-16 md:pb-28  bg-white relative overflow-hidden">
      {/* Soft Background Image with Border Radius */}
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          borderRadius: '20px',
          margin: '20px'
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left Content */}
          <div className="px-4 sm:px-0">
            <div className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-yellow-100 border border-yellow-200 mb-6 md:mb-8">
              <span className="text-yellow-800 text-xs md:text-sm font-medium">Trusted by 500+ UK & European Businesses</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6 md:mb-8">
              Premium Virtual Assistants
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 md:mb-8 leading-relaxed">
              Connect with pre-vetted professionals from India & Asia. 60% cost savings without quality compromise.
            </p>
            
            <div className="flex items-center space-x-6 md:space-x-12 mt-12 md:mt-16 pt-6 md:pt-8 border-t border-gray-200">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-black">60%</div>
                <div className="text-gray-600 text-xs md:text-sm mt-1">Cost Savings</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-black">48h</div>
                <div className="text-gray-600 text-xs md:text-sm mt-1">Average Match</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-black">98%</div>
                <div className="text-gray-600 text-xs md:text-sm mt-1">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white rounded-xl md:rounded-2xl shadow-xl p-6 md:p-8 border border-gray-200 mx-4 sm:mx-0 relative z-20">
            <div className="flex bg-gray-100 rounded-lg p-1 mb-6 md:mb-8">
              <button
                onClick={() => handleTabChange('employer')}
                className={`flex-1 py-2 md:py-3 px-4 md:px-6 rounded-md font-semibold text-sm md:text-base transition-colors duration-200 ${
                  activeTab === 'employer'
                    ? 'bg-yellow-400 text-black'
                    : 'text-black hover:bg-gray-200'
                }`}
              >
                I'm Hiring
              </button>
              <button
                onClick={() => handleTabChange('employee')}
                className={`flex-1 py-2 md:py-3 px-4 md:px-6 rounded-md font-semibold text-sm md:text-base transition-colors duration-200 ${
                  activeTab === 'employee'
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
            <p className="text-gray-600 text-sm md:text-base mb-6">
              {activeTab === 'employer' ? 'Get matched with top talent in 48 hours' : 'Access premium opportunities with UK companies'}
            </p>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center space-x-3">
                <CheckCircleIcon className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <p className="text-green-800 font-semibold text-sm">
                    {activeTab === 'employer' ? 'Request Submitted!' : 'Application Submitted!'}
                  </p>
                  <p className="text-green-600 text-xs">We'll contact you within 24 hours.</p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center space-x-3">
                <XCircleIcon className="w-6 h-6 text-red-600 flex-shrink-0" />
                <div>
                  <p className="text-red-800 font-semibold text-sm">Submission Failed</p>
                  <p className="text-red-600 text-xs">Please try again or contact support.</p>
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
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-sm md:text-base disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-sm md:text-base disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-sm md:text-base disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-sm md:text-base disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-sm md:text-base disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-sm md:text-base disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-sm md:text-base disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-sm md:text-base disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-sm md:text-base disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-sm md:text-base disabled:bg-gray-100 disabled:cursor-not-allowed"
                      placeholder="e.g., 3 years, 5+ years, etc."
                    />
                  </div>
                </>
              )}
              
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-yellow-400 text-black py-3 md:py-4 px-6 rounded-lg font-semibold text-sm md:text-base hover:bg-yellow-500 transition-colors duration-200 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-600"
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
        </div>
      </div>
    </section>
  );
};

export default Hero;