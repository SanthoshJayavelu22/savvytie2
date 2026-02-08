// src/pages/PrivacyPolicy.jsx
import React from 'react';

const PrivacyPolicy = () => {
  const lastUpdated = "February 8, 2026";

  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <header className="mb-12 border-b border-gray-100 pb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Privacy Policy</h1>
          <p className="text-gray-500 font-medium">Last Updated: {lastUpdated}</p>
        </header>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-black mb-4">1. Introduction</h2>
            <p>
              Welcome to Savvy Tie. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at support@savvytie.com.
            </p>
            <p>
              When you visit our website and use our services, you trust us with your personal information. We take your privacy very seriously. In this privacy notice, we seek to explain to you in the clearest way possible what information we collect, how we use it and what rights you have in relation to it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">2. Information We Collect</h2>
            <p>
              We collect personal information that you voluntarily provide to us when you register on the Website, express an interest in obtaining information about us or our products and Services, or otherwise when you contact us.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal Data:</strong> Name, email address, phone number, and company details provided through our forms.</li>
              <li><strong>Professional Details:</strong> Experience, profession, and business requirements when you apply for roles or hire talent.</li>
              <li><strong>Log Data:</strong> We automatically collect certain information when you visit, use, or navigate the Website. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">3. How We Use Your Information</h2>
            <p>We use personal information collected via our Website for a variety of business purposes described below:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To facilitate account creation and logon process.</li>
              <li>To send administrative information to you.</li>
              <li>To provide the services you requested (Staff matching, Recruitment).</li>
              <li>To respond to user inquiries and offer support.</li>
              <li>To improve our Website and user experience through analytics.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">4. Will Your Information Be Shared With Anyone?</h2>
            <p>
              We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. This includes sharing details between potential employers and candidates within our vetting process. We DO NOT sell your data to third-party marketers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">5. Data Retention</h2>
            <p>
              We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">6. Security Measures</h2>
            <p>
              We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">7. Your Rights</h2>
            <p>
              Depending on your location (e.g., UK or EU), you may have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability.
            </p>
          </section>

          <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <h2 className="text-2xl font-bold text-black mb-4">8. Contact Us</h2>
            <p>If you have questions or comments about this notice, you may email us at:</p>
            <p className="font-bold text-yellow-600 mt-2">support@savvytie.com</p>
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

export default PrivacyPolicy;