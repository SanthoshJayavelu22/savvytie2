import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';

const ConsultationForm = ({ serviceTitle }) => {
  const [activeTab, setActiveTab] = useState("employer");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    roleNeeded: "",
    profession: "",
    experience: ""
  });
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      roleNeeded: "",
      profession: "",
      experience: ""
    });
    setSubmitStatus(null);
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
      const endpoint = activeTab === "employer" 
        ? 'https://savvytiebackend.onrender.com/api/employers/register'
        : 'https://savvytiebackend.onrender.com/api/candidates/register';

      const payload = activeTab === "employer"
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
          name: "",
          email: "",
          phone: "",
          company: "",
          roleNeeded: "",
          profession: "",
          experience: ""
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

  return (
    <section className="py-16 bg-gradient-to-br from-yellow-400 to-yellow-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Consult a Savvy Tie Expert
            </h2>
            <p className="text-yellow-900 text-lg mb-8">
              Get complementary, one-on-one help from our experts. Let's discuss
              how {serviceTitle} can transform your business.
            </p>

            <div className="space-y-4">
              {[
                "Free consultation",
                "No commitment required",
                "Customized solution"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <FaCheck className="w-3 h-3 text-yellow-400" />
                  </div>
                  <span className="text-black font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <div className="flex bg-gray-100 rounded-lg p-1 mb-6">
              <button
                onClick={() => handleTabChange("employer")}
                className={`flex-1 py-2 md:py-3 px-4 md:px-6 rounded-md font-semibold text-sm md:text-base transition-colors duration-200 ${
                  activeTab === "employer"
                    ? "bg-yellow-400 text-black"
                    : "text-black hover:bg-gray-200"
                }`}
              >
                I'm Hiring
              </button>
              <button
                onClick={() => handleTabChange("candidate")}
                className={`flex-1 py-2 md:py-3 px-4 md:px-6 rounded-md font-semibold text-sm md:text-base transition-colors duration-200 ${
                  activeTab === "candidate"
                    ? "bg-yellow-400 text-black"
                    : "text-black hover:bg-gray-200"
                }`}
              >
                I'm Applying
              </button>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-black mb-2">
              {activeTab === "employer" ? "Find Your Perfect Hire" : "Join Our Talent Network"}
            </h3>
            <p className="text-gray-600 text-sm md:text-base mb-6">
              {activeTab === "employer" ? "Get matched with top talent in 48 hours" : "Access premium opportunities with UK companies"}
            </p>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center space-x-3">
                <CheckCircleIcon className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <p className="text-green-800 font-semibold">
                    {activeTab === "employer" ? "Request Submitted!" : "Application Submitted!"}
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
              {activeTab === "employer" ? (
                <>
                  <InputField
                    label="Full Name *"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    disabled={loading}
                  />
                  <InputField
                    label="Work Email *"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="your@company.com"
                    disabled={loading}
                  />
                  <InputField
                    label="Phone Number *"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="tel"
                    placeholder="+44 123 456 7890"
                    disabled={loading}
                  />
                  <InputField
                    label="Company Name *"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    disabled={loading}
                  />
                  <InputField
                    label="Role Needed *"
                    name="roleNeeded"
                    value={formData.roleNeeded}
                    onChange={handleChange}
                    placeholder="e.g., Accountant, Digital Marketer, Developer"
                    disabled={loading}
                  />
                </>
              ) : (
                <>
                  <InputField
                    label="Full Name *"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    disabled={loading}
                  />
                  <InputField
                    label="Email *"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="your@email.com"
                    disabled={loading}
                  />
                  <InputField
                    label="Phone Number *"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="tel"
                    placeholder="+91 12345 67890"
                    disabled={loading}
                  />
                  <InputField
                    label="Profession *"
                    name="profession"
                    value={formData.profession}
                    onChange={handleChange}
                    placeholder="e.g., Accountant, Developer, Digital Marketer"
                    disabled={loading}
                  />
                  <InputField
                    label="Experience *"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    placeholder="e.g., 3 years, 5+ years, etc."
                    disabled={loading}
                  />
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
                  activeTab === "employer" ? "Get Free Consultation" : "Apply Now"
                )}
              </button>
              <p className="text-gray-500 text-xs text-center">
                By submitting, you agree to our terms. We'll contact you within
                24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Reusable Input Component
const InputField = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
  disabled = false
}) => (
  <div>
    <label className="block text-black text-sm font-medium mb-2">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required
      disabled={disabled}
      placeholder={placeholder}
      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-sm md:text-base disabled:bg-gray-100 disabled:cursor-not-allowed"
    />
  </div>
);

export default ConsultationForm;