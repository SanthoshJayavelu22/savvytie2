// src/components/Testimonials.jsx
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'James Wilson',
      company: 'FinTech Solutions UK',
      role: 'CFO',
      content: 'Our SavvyTie accountant from Bangalore has been exceptional. The quality of work is on par with UK CPAs, but at 70% of the cost. They seamlessly integrated with our team.',
      savings: '£28,000',
      roleType: 'Senior Accountant',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Sarah Chen',
      company: 'LegalEase Partners',
      role: 'Managing Partner',
      content: 'The legal researchers from Chennai have transformed our case preparation process. Their attention to detail and understanding of European law is impressive.',
      savings: '£35,000',
      roleType: 'Legal Research Team',
      image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Michael Roberts',
      company: 'GrowthDigital Ltd',
      role: 'Marketing Director',
      content: 'Our marketing team from Hyderabad delivered a 3x ROI in the first quarter. Their digital expertise combined with cost efficiency is a game-changer for our agency.',
      savings: '£25,000',
      roleType: 'Digital Marketing Manager',
      image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Stats Section */}
        <div className="mb-16 md:mb-20 bg-white rounded-xl md:rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-center">
            {[
              { number: '£15M+', label: 'Client Savings' },
              { number: '2,000+', label: 'Professionals' },
              { number: '500+', label: 'Happy Clients' },
              { number: '98%', label: 'Retention Rate' }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm md:text-base font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-700">
            See how UK and European businesses are transforming their operations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-black">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">"{testimonial.content}"</p>
              
              <div className="border-t border-gray-200 pt-6">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm text-gray-600">Role</div>
                    <div className="font-semibold text-black">{testimonial.roleType}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Annual Savings</div>
                    <div className="font-bold text-black text-lg">{testimonial.savings}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;