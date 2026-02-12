// src/pages/CookiePolicy.jsx
import React from 'react';

const CookiePolicy = () => {
  const lastUpdated = "February 8, 2026";

  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <header className="mb-12 border-b border-gray-100 pb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Cookie Policy</h1>
          <p className="text-gray-500 font-medium">Last Updated: {lastUpdated}</p>
        </header>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-black mb-4">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">2. How We Use Cookies</h2>
            <p>
              Savvy Tie uses cookies for various reasons. Some cookies are required for technical reasons for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies enable us to track and target the interests of our users to enhance the experience on our Website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">3. Types of Cookies We Use</h2>
            <div className="overflow-x-auto mt-6">
              <table className="w-full border-collapse border border-gray-200 text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 p-4 text-left font-bold">Type</th>
                    <th className="border border-gray-200 p-4 text-left font-bold">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 p-4 font-semibold">Strictly Necessary</td>
                    <td className="border border-gray-200 p-4">Essential for you to browse the website and use its features.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-4 font-semibold">Performance & Analytics</td>
                    <td className="border border-gray-200 p-4">Help us understand how visitors interact with our website (e.g., Google Analytics).</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-4 font-semibold">Functionality</td>
                    <td className="border border-gray-200 p-4">Used to recognize you when you return to our website and remember your choices.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">4. Managing Your Cookie Preferences</h2>
            <p>
              You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted. 
            </p>
            <p>
              To find out more about how to manage cookies on popular browsers, please visit:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-yellow-600 font-medium">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
              <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63447330-79a0-38d1-ba4d-2212642130b1" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
              <li><a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">5. Updates to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. 
            </p>
          </section>

          <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <h2 className="text-2xl font-bold text-black mb-4">6. More Information</h2>
            <p>If you have any questions about our use of cookies or other technologies, please email us at <span className="font-bold text-yellow-600">sales@savvytie.com</span>.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
