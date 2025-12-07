import React from 'react';

const TermsOfService = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600">
            Last Updated: November 2025
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              Welcome to SavvyTie! By using our website and services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully before using the site.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-12">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 flex items-center">
                <span className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black text-lg font-bold mr-4">
                  1
                </span>
                Use of Our Services
              </h2>
              <div className="ml-12">
                <p className="text-gray-700">
                  Our platform connects businesses ("Employers") with professionals ("Virtual Assistants" or "Applicants") for remote work opportunities. You agree to use our services only for lawful purposes and in compliance with all applicable laws.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 flex items-center">
                <span className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black text-lg font-bold mr-4">
                  2
                </span>
                Account Registration
              </h2>
              <div className="ml-12">
                <p className="text-gray-700 mb-4">
                  When registering or submitting details:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-3">•</span>
                    <span>You must provide accurate and complete information.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-3">•</span>
                    <span>You are responsible for maintaining the confidentiality of your information.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-3">•</span>
                    <span>We reserve the right to suspend or terminate accounts that violate our policies.</span>
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
                Job Listings and Applications
              </h2>
              <div className="ml-12">
                <p className="text-gray-700 mb-4">
                  Employers may post job openings, and applicants may apply through our forms. SavvyTie is not responsible for:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-3">•</span>
                    <span>The accuracy of job descriptions or applicant information.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-3">•</span>
                    <span>Employment decisions made between employers and applicants.</span>
                  </li>
                </ul>
                <p className="text-gray-700 mt-4">
                  We act solely as a facilitator between both parties.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 flex items-center">
                <span className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black text-lg font-bold mr-4">
                  4
                </span>
                Payments and Fees
              </h2>
              <div className="ml-12">
                <p className="text-gray-700 mb-4">
                  If any paid services or subscriptions are introduced:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-3">•</span>
                    <span>Fees will be clearly disclosed before payment.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-3">•</span>
                    <span>All payments are non-refundable unless otherwise stated.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-3">•</span>
                    <span>We use secure third-party payment gateways.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 flex items-center">
                <span className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black text-lg font-bold mr-4">
                  5
                </span>
                Prohibited Activities
              </h2>
              <div className="ml-12">
                <p className="text-gray-700 mb-4">
                  You agree not to:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-3">•</span>
                    <span>Use the platform for illegal, fraudulent, or abusive activities.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-3">•</span>
                    <span>Misrepresent your identity, qualifications, or company information.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-3">•</span>
                    <span>Copy, modify, or distribute any part of the website without permission.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-3">•</span>
                    <span>Attempt to hack, disrupt, or harm our servers or services.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 flex items-center">
                <span className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black text-lg font-bold mr-4">
                  6
                </span>
                Intellectual Property
              </h2>
              <div className="ml-12">
                <p className="text-gray-700">
                  All content, graphics, logos, and designs on this website are owned by SavvyTie and protected under copyright laws. You may not reproduce or use them without prior written consent.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 flex items-center">
                <span className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black text-lg font-bold mr-4">
                  7
                </span>
                Limitation of Liability
              </h2>
              <div className="ml-12">
                <p className="text-gray-700 mb-4">
                  SavvyTie shall not be held responsible for:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-3">•</span>
                    <span>Any direct or indirect losses arising from use of our platform.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-3">•</span>
                    <span>Errors, delays, or issues in job placements or communication between users.</span>
                  </li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Use of our website is at your own risk.
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 flex items-center">
                <span className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black text-lg font-bold mr-4">
                  8
                </span>
                Termination
              </h2>
              <div className="ml-12">
                <p className="text-gray-700">
                  We reserve the right to suspend or terminate access to any user who violates these Terms or engages in misconduct.
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 flex items-center">
                <span className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black text-lg font-bold mr-4">
                  9
                </span>
                Changes to These Terms
              </h2>
              <div className="ml-12">
                <p className="text-gray-700">
                  We may modify or update these Terms at any time. Continued use of the website after updates constitutes acceptance of the new Terms.
                </p>
              </div>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 flex items-center">
                <span className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black text-lg font-bold mr-4">
                  10
                </span>
                Contact Us
              </h2>
              <div className="ml-12">
                <p className="text-gray-700 mb-4">
                  If you have any questions about these Terms, please contact us at:
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

export default TermsOfService;