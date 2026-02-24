// src/components/WhyChoose.jsx
import React from 'react';

const WhyChoose = () => {
  const benefits = [
    {
      title: 'Reduce Costs by 70%',
      description: 'Access premium talent from India and Asia at significantly lower rates than local hires',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      title: 'Zero Compromise on Quality',
      description: 'All professionals are university-educated with 3+ years experience and rigorous vetting',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      title: 'Dedicated Full-Time Staff',
      description: 'Get committed professionals working exclusively on your business during your timezone hours',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      title: 'Seamless Integration',
      description: 'We handle all payroll, compliance, and management for a hassle-free experience',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 md:mb-6">
            Enterprise Talent at Fractional Costs
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto px-4">
            Why UK and European businesses choose SavvyTie for their critical operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group hover:border-yellow-400 border-2 border-transparent">
              <div className="h-40 md:h-48 overflow-hidden">
                <img 
                  src={benefit.image} 
                  alt={benefit.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-bold text-black mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Cost Comparison Section */}
        <div className="mt-16 md:mt-20 bg-white rounded-xl md:rounded-2xl p-6 md:p-8 border border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-6">
                Real Cost Comparison: UK vs SavvyTie
              </h3>
              <div className="space-y-4">
                {[
                  { role: 'Bookkeeper', uk: '40,000 UK', savvy: '12,000', saving: '70%' },
                  { role: 'Personal Assistant', uk: '35,000 UK', savvy: '10,500', saving: '70%' },
                  { role: 'Customer Service', uk: '30,000 UK', savvy: '9,000', saving: '70%' }
                ].map((item, index) => (
                  <div key={index} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-yellow-400 transition-colors duration-200">
                    <div className="font-medium text-black mb-2 sm:mb-0">{item.role}</div>
                    <div className="flex items-center space-x-4">
                      <div className="text-gray-500 line-through text-sm">£{item.uk}</div>
                      <div className="text-black font-semibold">£{item.savvy}</div>
                      <div className="bg-yellow-400 text-black px-2 py-1 rounded text-xs font-medium">
                        Save {item.saving}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-yellow-400 rounded-xl md:rounded-2xl p-8 text-black text-center h-full flex items-center justify-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">70%</div>
                <div className="text-lg md:text-xl font-semibold">Yearly Full-Time Staffing Cost Savings</div>
                {/* <div className="text-yellow-800 mt-4 text-sm md:text-base">Yearly cost reduction for our clients</div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;