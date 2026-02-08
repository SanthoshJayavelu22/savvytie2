import React, { useState } from 'react';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('Property Assistants');

  const categories = {
    'Property Assistants': {
      roles: ['Property Management', 'Tenant Coordination', 'Listing Management', 'Administrative Support'],
      description: 'Professional assistants specialized in property management and real estate support',
      averageCost: '£300 to £999',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    'Personal Assistants': {
      roles: ['Executive Support', 'Calendar Management', 'Travel Arrangements', 'Personal Errands'],
      description: 'Dedicated personal assistants for executive and personal support tasks',
      averageCost: '£300 to £999',
      image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    'Social Media Management': {
      roles: ['Content Creation', 'Community Management', 'Strategy Planning', 'Analytics Reporting'],
      description: 'Social media experts to grow your online presence and engagement',
      averageCost: '£300 to £999',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    'Call Centre': {
      roles: ['Inbound Calls', 'Customer Service', 'Order Processing', 'Technical Support'],
      description: 'Professional call center agents for customer support and service',
      averageCost: '£300 to £999',
      image: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    'Live Chat Support': {
      roles: ['Real-time Support', 'Customer Engagement', 'Sales Assistance', 'Technical Help'],
      description: 'Live chat specialists for instant customer support and engagement',
      averageCost: '£300 to £999',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    'Telesales': {
      roles: ['Lead Generation', 'Sales Calls', 'Appointment Setting', 'Customer Follow-up'],
      description: 'Skilled telesales professionals to drive your sales and revenue',
      averageCost: '£300 to £999',
      image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    'Data Entry Services': {
      roles: ['Data Processing', 'Database Management', 'Record Keeping', 'Data Analysis'],
      description: 'Accurate data entry specialists for all your information management needs',
      averageCost: '£300 to £999',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    'Debt Collection': {
      roles: ['Account Recovery', 'Payment Follow-up', 'Customer Communication', 'Documentation'],
      description: 'Professional debt collection agents with excellent communication skills',
      averageCost: '£300 to £999',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    'IT Outsourcing': {
      roles: ['Software Development', 'Technical Support', 'IT Maintenance', 'System Administration'],
      description: 'IT professionals for development, support, and technical solutions',
      averageCost: '£300 to £999',
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    'Sales Assistants': {
      roles: ['Customer Assistance', 'Order Processing', 'Product Knowledge', 'Sales Support'],
      description: 'Sales assistants to support your sales team and customer interactions',
      averageCost: '£300 to £999',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    'Legal Assistants': {
      roles: ['Document Preparation', 'Case Management', 'Legal Research', 'Client Communication', 'Court Filing'],
      description: 'Skilled legal assistants to support law firms and legal departments',
      averageCost: '£300 to £999',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  };

  return (
    <section id="services" className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 md:mb-6">
            Our Professional Services
          </h2>
          <p className="text-lg md:text-xl text-gray-700 px-4">
            Comprehensive virtual assistant services tailored to your business needs
          </p>
        </div>

        {/* Mobile Category Selector */}
        <div className="md:hidden mb-8 px-4">
          <select
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-black font-semibold focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
          >
            {Object.keys(categories).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Desktop Category Tabs */}
        <div className="hidden md:flex flex-wrap gap-2 pb-4 mb-8 lg:mb-12 justify-center">
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex-shrink-0 px-4 py-2 rounded-full font-semibold text-sm transition-colors duration-200 ${
                activeCategory === category
                  ? 'bg-yellow-400 text-black'
                  : 'bg-white text-black border border-gray-300 hover:border-yellow-400'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-xl md:rounded-2xl shadow-lg border border-gray-200 overflow-hidden mx-4 md:mx-0">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Content Section */}
            <div className="p-6 md:p-8 lg:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-4 md:mb-6">{activeCategory}</h3>
              <p className="text-gray-700 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                {categories[activeCategory].description}
              </p>
              
              <div className="mb-6 md:mb-8">
                <div className="text-sm font-medium text-gray-600 mb-3 md:mb-4 uppercase tracking-wide">Available Roles</div>
                <div className="grid grid-cols-1 gap-2 md:gap-3">
                  {categories[activeCategory].roles.map((role, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></div>
                      <span className="text-black font-medium text-sm md:text-base">{role}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-yellow-400 text-black rounded-lg md:rounded-xl p-4 md:p-6">
                <div className="font-semibold text-sm md:text-base mb-2">Average Monthly Cost</div>
                <div className="text-xl md:text-2xl font-bold">{categories[activeCategory].averageCost}</div>
                <div className="text-yellow-800 text-xs md:text-sm mt-1">Full-time dedicated professional</div>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative min-h-[300px] md:min-h-[400px] lg:min-h-[500px] order-first lg:order-last">
              <img 
                src={categories[activeCategory].image}
                alt={activeCategory}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-yellow-400 rounded-lg p-3 md:p-4 shadow-lg">
                <div className="text-lg md:text-2xl font-bold text-black">100+</div>
                <div className="text-yellow-800 text-xs md:text-sm">Professionals Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;