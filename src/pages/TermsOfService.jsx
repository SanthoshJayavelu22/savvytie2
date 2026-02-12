// src/pages/TermsOfService.jsx
import React from 'react';

const TermsOfService = () => {
  const lastUpdated = "February 8, 2026";

  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <header className="mb-12 border-b border-gray-100 pb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Terms of Service</h1>
          <p className="text-gray-500 font-medium">Last Updated: {lastUpdated}</p>
        </header>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-black mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the services provided by Savvy Tie ("we," "us," or "our") through our website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">2. Description of Service</h2>
            <p>
              Savvy Tie provides a platform that connects businesses ("Employers") with virtual talent ("Candidates") primarily based in Asia/India for remote work opportunities. We act as a facilitator in the recruitment and staffing process.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">3. User Obligations</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Accuracy:</strong> Users must provide true, accurate, and complete information during registration and application processes.</li>
              <li><strong>Lawful Use:</strong> You agree to use the service only for lawful purposes and in a way that does not infringe the rights of others.</li>
              <li><strong>Confidentiality:</strong> You are responsible for maintaining the confidentiality of any account details and for all activities that occur under your account.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">4. Recruitment & Placements</h2>
            <p>
              While we strive to vet all candidates and verify employer details, Savvy Tie does not guarantee the performance of any candidate or the continued solvency of any employer. The final hiring decision rests solely with the Employer. Use of our platform does not constitute an employment contract between Savvy Tie and the user.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">5. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and software, is the property of Savvy Tie or its content suppliers and is protected by international copyright laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">6. Limitation of Liability</h2>
            <p>
              Savvy Tie shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services, or for the cost of procurement of substitute services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">7. Termination</h2>
            <p>
              We reserve the right to terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
          </section>

          <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <h2 className="text-2xl font-bold text-black mb-4">8. Contact Us</h2>
            <p>If you have any questions about these Terms of Service, please contact us at:</p>
            <p className="font-bold text-yellow-600 mt-2">sales@savvytie.com</p>
            <p className="text-sm text-gray-500 mt-4 leading-relaxed">
              Savvy Tie Ltd.<br />
              London, United Kingdom
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;