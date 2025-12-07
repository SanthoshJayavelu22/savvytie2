// src/components/TalentPool.jsx
import React from 'react';

const TalentPool = () => {
  const locations = [
    {
      city: 'Bangalore',
      country: 'India',
      professionals: '650+',
      specialty: 'Tech & Finance',
      image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      city: 'Chennai',
      country: 'India',
      professionals: '420+',
      specialty: 'Legal & Accounting',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      city: 'Hyderabad',
      country: 'India',
      professionals: '380+',
      specialty: 'Tech & Marketing',
      image: 'https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      city: 'Kochi',
      country: 'India',
      professionals: '290+',
      specialty: 'Finance & Admin',
      image: 'https://images.unsplash.com/photo-1522205408450-add114ad53fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section id="talent" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Global Talent Network
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Carefully selected professionals from premier educational institutions across South India and Asia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {locations.map((location, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group hover:border-yellow-400 border-2 border-transparent">
              <div className="h-48 overflow-hidden">
                <img 
                  src={location.image}
                  alt={`${location.city} professionals`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <div className="font-bold text-black text-lg">{location.city}</div>
                    <div className="text-gray-600 text-sm">{location.country}</div>
                  </div>
                  <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium">
                    {location.professionals}
                  </div>
                </div>
                <div className="text-gray-700">{location.specialty}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-12 border border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-black mb-6">Why South Indian Talent Excels</h3>
              <div className="space-y-4">
                {[
                  "Graduates from IITs, IIMs, and premier universities",
                  "Exceptional English proficiency and communication",
                  "Strong technical and analytical capabilities",
                  "Cultural alignment with European business practices",
                  "Proven track record with international clients"
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                    </div>
                    <span className="text-gray-700 text-lg">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Professional South Indian team"
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-black p-6 rounded-2xl shadow-2xl">
                <div className="text-3xl font-bold">85%</div>
                <div className="text-sm">From South India</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalentPool;