// src/components/TalentVetting.jsx
import React from 'react';
import { FaCheckCircle, FaLaptopCode, FaUserTie, FaRocket } from 'react-icons/fa';

const TalentVetting = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Handpicked Talent, Selected by You
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don't just provide staff; we curate elite teams that drive your business forward.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-yellow-400 rounded-2xl opacity-20 blur-lg group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Elite Virtual Professional" 
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            
            {/* Trust Badges */}
            <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-black p-6 rounded-2xl shadow-xl flex items-center space-x-4">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-yellow-400 text-2xl font-bold">
                2%
              </div>
              <div>
                <div className="font-bold text-lg">Top Tier</div>
                <div className="text-sm opacity-80">Selection Rate</div>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center text-yellow-600">
                <FaCheckCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-black mb-2">Rigorous Vetting Process</h4>
                <p className="text-gray-700 leading-relaxed">
                  The candidates we endorse represent the top 2% of all applicants. To be considered, professionals must pass our background checks, aptitude tests, and multiple interview rounds. We evaluate both technical excellence and cultural fit for your team.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center text-yellow-600">
                <FaRocket className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-black mb-2">Efficient Remote Model</h4>
                <p className="text-gray-700 leading-relaxed">
                  SavvyTie is 100% remote-first. This saves our talent time and money by avoiding lengthy commutes, and we pass those significant office cost savings directly onto you without compromising on the quality of work.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center text-yellow-600">
                <FaLaptopCode className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-black mb-2">Pre-Qualified Technology</h4>
                <p className="text-gray-700 leading-relaxed">
                  Our recruitment team verifies that every professional has high-performance hardware and stable, high-speed internet access to our strict specifications before they are recommended to you.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center text-yellow-600">
                <FaUserTie className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-black mb-2">Transparent Partnership</h4>
                <p className="text-gray-700 leading-relaxed">
                  Unlike traditional BPOs, we bring you directly into the recruitment process. This ensures we match the absolute best candidate to your specific needs, resulting in a long-term, successful partnership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalentVetting;
