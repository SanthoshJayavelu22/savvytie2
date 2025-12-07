import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">
            Last Updated: November 2025
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              At SavvyTie, we value your privacy and are committed to protecting your personal data.
              This Privacy Policy explains how we collect, use, and safeguard the information you 
              provide while using our website and services.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-12">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 flex items-center">
                <span className="w--8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black text-lg font-bold mr-4">
                  1
                </span>
                Information We Collect
              </h2>
              <div className="ml-12">
                <p className="text-gray-700 mb-4">
                  We may collect the following types of information:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-3">•</span>
                    <span><strong>Personal Information:</strong> Name, email address, phone number, and company details when you fill out forms or apply for jobs.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-3">•</span>
                    <span><strong>Employment Information:</strong> Skills, resume, experience, and other professional data shared during applications.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-3">•</span>
                    <span><strong>Usage Data:</strong> Browser type, IP address, pages visited, and time spent on our website (for analytics and optimization).</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-3">•</span>
                    <span><strong>Cookies:</strong> We use cookies to improve user experience and analyze website performance.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 flex items-center">
                <span className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black text-lg font-bold mr-4">
                  2
                </span>
                How We Use Your Information
              </h2>
              <div className="ml-12">
                <p className="text-gray-700 mb-4">
                  We use your data to:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-3">•</span>
                    <span>Connect employers with suitable virtual assistants.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-3">•</span>
                    <span>Process job applications and hiring requests.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-3">•</span>
                    <span>Communicate updates, inquiries, or promotional content (with your consent).</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-3">•</span>
                    <span>Improve website performance and user experience.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-3">•</span>
                    <span>Maintain security and prevent fraudulent activities.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 flex items-center">
                <span className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black text-lg font-bold mr-4">
                  3
                </span>
                Data Sharing
              </h2>
              <div className="ml-12">
                <p className="text-gray-700 mb-4">
                  We do not sell or rent your personal data. However, we may share information with:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-3">•</span>
                    <span>Employers seeking candidates (only relevant applicant data).</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-3">•</span>
                    <span>Service providers who help us operate the website and manage communications.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-3">•</span>
                    <span>Legal authorities when required by law or to protect our legal rights.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 flex items-center">
                <span className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black text-lg font-bold mr-4">
                  4
                </span>
                Data Retention
              </h2>
              <div className="ml-12">
                <p className="text-gray-700">
                  We retain your information for as long as necessary to fulfill the purposes stated above or as required by law. You may request deletion of your data by contacting us.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 flex items-center">
                <span className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black text-lg font-bold mr-4">
                  5
                </span>
                Your Rights
              </h2>
              <div className="ml-12">
                <p className="text-gray-700 mb-4">
                  You have the right to:
                </p>
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-3">•</span>
                    <span>Access, update, or delete your personal data.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-3">•</span>
                    <span>Withdraw consent for communications at any time.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-3">•</span>
                    <span>Request a copy of the data we hold about you.</span>
                  </li>
                </ul>
                <p className="text-gray-700">
                  To exercise these rights, please email us at{' '}
                  <a href="mailto:support@savvytie.com" className="text-yellow-600 hover:text-yellow-700 font-medium">
                    support@savvytie.com
                  </a>
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 flex items-center">
                <span className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black text-lg font-bold mr-4">
                  6
                </span>
                Data Security
              </h2>
              <div className="ml-12">
                <p className="text-gray-700">
                  We use industry-standard security measures to protect your information from unauthorized access, disclosure, or alteration. However, no online system is 100% secure, and users share data at their own risk.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 flex items-center">
                <span className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black text-lg font-bold mr-4">
                  7
                </span>
                Third-Party Links
              </h2>
              <div className="ml-12">
                <p className="text-gray-700">
                  Our website may contain links to other websites. We are not responsible for their content or privacy practices.
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 flex items-center">
                <span className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black text-lg font-bold mr-4">
                  8
                </span>
                Policy Updates
              </h2>
              <div className="ml-12">
                <p className="text-gray-700">
                  We may update this Privacy Policy periodically. The latest version will always be available on this page.
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 flex items-center">
                <span className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black text-lg font-bold mr-4">
                  9
                </span>
                Contact Us
              </h2>
              <div className="ml-12">
                <p className="text-gray-700 mb-4">
                  If you have any questions or concerns about this Privacy Policy, please contact us at:
                </p>
                <div className="flex items-center text-gray-700">
                  <span className="text-2xl mr-3">📧</span>
                  <a href="mailto:support@savvytie.com" className="text-yellow-600 hover:text-yellow-700 font-medium text-lg">
                    support@savvytie.com
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;