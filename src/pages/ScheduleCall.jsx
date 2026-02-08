// src/pages/ScheduleCall.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaArrowRight, 
  FaArrowLeft, 
  FaCheckCircle, 
  FaBuilding, 
  FaGlobe, 
  FaWallet, 
  FaCalendarAlt 
} from 'react-icons/fa';
import apiClient from '../services/apiClient';

const ScheduleCall = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 4;
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    businessType: '',
    budget: '',
    companyWebsite: '',
    preferredDateTime: '',
    name: '',
    email: '',
    phone: '',
  });

  const nextStep = () => setStep(prev => Math.min(prev + 1, totalSteps + 1));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    setLoading(true);
    
    try {
      // Sending to the dedicated schedule-call endpoint
      const result = await apiClient.post('/schedule-call', formData);

      if (result.success) {
        setIsSubmitted(true);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('Error connecting to server.');
    } finally {
      setLoading(false);
    }
  };

  const businessTypes = [
    'Legal / Law Firm',
    'Real Estate Agency',
    'E-commerce Store',
    'Digital Marketing Agency',
    'SaaS / Technology',
    'Accounting / Finance',
    'Other Service Based Business'
  ];

  const budgetOptions = [
    'Less than £500 / month',
    '£500 - £1,000 / month',
    '£1,000 - £2,500 / month',
    '£2,500 - £5,000 / month',
    '£5,000+ / month'
  ];

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <FaBuilding className="text-yellow-400 text-5xl mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-black">What type of business do you own?</h2>
              <p className="text-gray-600 mt-2">This helps us match you with the right expertise.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {businessTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => {
                    setFormData({ ...formData, businessType: type });
                    nextStep();
                  }}
                  className={`p-4 rounded-xl border-2 transition-all text-left font-semibold ${
                    formData.businessType === type 
                      ? 'border-yellow-400 bg-yellow-50 text-black' 
                      : 'border-gray-200 hover:border-yellow-200 hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <FaWallet className="text-yellow-400 text-5xl mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-black">What is your monthly budget?</h2>
              <p className="text-gray-600 mt-2">Knowing your budget helps us suggest the best staff tiers.</p>
            </div>
            <div className="space-y-4">
              {budgetOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    setFormData({ ...formData, budget: option });
                    nextStep();
                  }}
                  className={`w-full p-4 rounded-xl border-2 transition-all text-left font-semibold ${
                    formData.budget === option 
                      ? 'border-yellow-400 bg-yellow-50 text-black' 
                      : 'border-gray-200 hover:border-yellow-200 hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            <button 
              onClick={prevStep}
              className="mt-6 flex items-center text-gray-500 hover:text-black transition-colors"
            >
              <FaArrowLeft className="mr-2" /> Back
            </button>
          </motion.div>
        );

      case 3:
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <FaGlobe className="text-yellow-400 text-5xl mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-black">Your Company Website</h2>
              <p className="text-gray-600 mt-2">We like to do some research before our call.</p>
            </div>
            <div className="relative">
              <input
                type="url"
                name="companyWebsite"
                value={formData.companyWebsite}
                onChange={handleChange}
                placeholder="https://yourcompany.com"
                className="w-full p-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:outline-none text-lg"
                autoFocus
              />
            </div>
            <div className="flex justify-between items-center mt-8">
              <button 
                onClick={prevStep}
                className="flex items-center text-gray-500 hover:text-black transition-colors"
              >
                <FaArrowLeft className="mr-2" /> Back
              </button>
              <button
                onClick={nextStep}
                disabled={!formData.companyWebsite}
                className="bg-yellow-400 text-black px-8 py-3 rounded-xl font-bold flex items-center hover:bg-yellow-500 transition-all disabled:opacity-50"
              >
                Continue <FaArrowRight className="ml-2" />
              </button>
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <FaCalendarAlt className="text-yellow-400 text-5xl mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-black">Schedule Your Call</h2>
              <p className="text-gray-600 mt-2">What date and time is most convenient for you?</p>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Preferred Date & Time</label>
                  <input
                    type="datetime-local"
                    name="preferredDateTime"
                    value={formData.preferredDateTime}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-yellow-400 focus:outline-none"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Your Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full p-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-yellow-400 focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full p-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-yellow-400 focus:outline-none"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+44 123 456 7890"
                    className="w-full p-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-yellow-400 focus:outline-none"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center mt-8">
              <button 
                onClick={prevStep}
                className="flex items-center text-gray-500 hover:text-black transition-colors"
              >
                <FaArrowLeft className="mr-2" /> Back
              </button>
              <button
                onClick={handleSubmit}
                disabled={loading || !formData.preferredDateTime || !formData.name || !formData.email}
                className="bg-black text-white px-10 py-4 rounded-xl font-bold flex items-center hover:bg-gray-800 transition-all disabled:opacity-50"
              >
                {loading ? 'Scheduling...' : 'Confirm Call'} <FaCheckCircle className="ml-2" />
              </button>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center bg-gray-50">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg w-full bg-white rounded-3xl p-12 text-center shadow-2xl mx-4"
        >
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 text-green-600 text-5xl">
            <FaCheckCircle />
          </div>
          <h1 className="text-4xl font-bold text-black mb-4">You're All Set!</h1>
          <p className="text-xl text-gray-600 mb-8">
            Thank you, <span className="font-bold text-black">{formData.name}</span>! We've received your request for a call on <span className="font-bold text-black">{new Date(formData.preferredDateTime).toLocaleString()}</span>. 
          </p>
          <p className="text-gray-600 mb-8">
            An expert from Savvy Tie will reach out to you at the scheduled time. A confirmation has been sent to {formData.email}.
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            className="w-full bg-yellow-400 text-black py-4 rounded-xl font-bold text-lg hover:bg-yellow-500 transition-all"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
            <span>Step {step} of {totalSteps}</span>
            <span>{Math.round((step / totalSteps) * 100)}% Complete</span>
          </div>
          <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${(step / totalSteps) * 100}%` }}
              className="h-full bg-yellow-400"
            />
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden min-h-[500px] flex flex-col justify-center p-8 md:p-12 relative">
          <AnimatePresence mode="wait">
            {renderStep()}
          </AnimatePresence>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center text-gray-500 flex flex-wrap justify-center gap-8 opacity-70">
          <div className="flex items-center"><FaCheckCircle className="text-yellow-400 mr-2" /> 100% Confidential</div>
          <div className="flex items-center"><FaCheckCircle className="text-yellow-400 mr-2" /> No Obligation Call</div>
          <div className="flex items-center"><FaCheckCircle className="text-yellow-400 mr-2" /> Expert Advice</div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCall;
