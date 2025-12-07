// src/components/OutsourcingBenefits.jsx
import React from 'react';

const OutsourcingBenefits = () => {
  const benefits = [
    {
      icon: '🔓',
      title: 'No Lock-in Contracts',
      description: 'Complete flexibility with no long-term commitments. Scale up or down as needed.'
    },
    {
      icon: '💰',
      title: 'No Setup Fees',
      description: 'Recruiting is completely free. No hidden costs or setup charges.'
    },
    {
      icon: '🔄',
      title: 'Free Staff Changes',
      description: 'Swap team members anytime at no additional cost until you find the perfect fit.'
    },
    {
      icon: '💻',
      title: 'All-Inclusive Hourly Rate',
      description: 'Single rate covers computer, internet, software, and all operational fees.'
    },
    {
      icon: '🌍',
      title: '24/7 Global Operation',
      description: 'Support global business needs with round-the-clock service coverage.'
    },
    {
      icon: '⏰',
      title: 'Flexible 20+ Hours/Week',
      description: 'Start with as little as 20 hours per week and scale as you grow.'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 md:mb-6">
            Experience the Power of Outsourcing the SavvyTie Way
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto px-4">
            Flexible, transparent, and designed for modern businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 group hover:border-yellow-400">
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-black mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 md:mt-20 text-center">
          <div className="bg-yellow-400 rounded-xl md:rounded-2xl p-8 md:p-12 text-black">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-yellow-800 mb-8 text-lg md:text-xl max-w-2xl mx-auto">
              Join hundreds of businesses that have transformed their operations with our flexible outsourcing model.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200">
                Start Your Free Trial
              </button>
              <button className="border-2 border-black text-black px-8 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors duration-200">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutsourcingBenefits;