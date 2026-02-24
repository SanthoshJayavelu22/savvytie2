import React from 'react';
import { FaTimesCircle, FaCheckCircle } from 'react-icons/fa';

const Comparison = () => {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 md:px-12">
          
          {/* Without Section */}
          <div className="bg-white rounded-xl shadow-md p-10 border border-gray-200 flex flex-col items-center transform transition duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="mb-10 text-center flex flex-col items-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Without A Virtual Assistant
              </h3>
              <div className="w-20 h-1 bg-yellow-400"></div>
            </div>

            <div className="space-y-6 w-full max-w-[260px] sm:max-w-xs mx-auto">
              <div className="flex items-center space-x-5">
                <FaTimesCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                <span className="text-gray-700 text-lg">Never Ending To-Do List</span>
              </div>
              <div className="flex items-center space-x-5">
                <FaTimesCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                <span className="text-gray-700 text-lg">Struggling To Achieve Goals</span>
              </div>
              <div className="flex items-center space-x-5">
                <FaTimesCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                <span className="text-gray-700 text-lg">No Sales</span>
              </div>
              <div className="flex items-center space-x-5">
                <FaTimesCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                <span className="text-gray-700 text-lg">Overworked & Tired</span>
              </div>
            </div>
          </div>

          {/* With Section */}
          <div className="bg-white rounded-xl shadow-md p-10 border border-gray-200 flex flex-col items-center transform transition duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="mb-10 text-center flex flex-col items-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                With A Virtual Assistant
              </h3>
              <div className="w-20 h-1 bg-yellow-400"></div>
            </div>

            <div className="space-y-6 w-full max-w-[260px] sm:max-w-xs mx-auto">
              <div className="flex items-center space-x-5">
                <FaCheckCircle className="w-6 h-6 text-teal-500 flex-shrink-0" />
                <span className="text-gray-700 text-lg">Completed To-Do List</span>
              </div>
              <div className="flex items-center space-x-5">
                <FaCheckCircle className="w-6 h-6 text-teal-500 flex-shrink-0" />
                <span className="text-gray-700 text-lg">Increased Leads And Sales</span>
              </div>
              <div className="flex items-center space-x-5">
                <FaCheckCircle className="w-6 h-6 text-teal-500 flex-shrink-0" />
                <span className="text-gray-700 text-lg">Smashing Goals</span>
              </div>
              <div className="flex items-center space-x-5">
                <FaCheckCircle className="w-6 h-6 text-teal-500 flex-shrink-0" />
                <span className="text-gray-700 text-lg">Focused & Energised</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Comparison;
