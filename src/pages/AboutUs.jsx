// src/pages/AboutUs.jsx
import React from 'react';
import CallToAction from '../components/CallToAction';
import brinda from '../assets/images/Brinda Nicholson.png'

const AboutUs = () => {
const teamMembers = [
  {
    name: 'Mark Nicholson',
    role: 'Co-Founder',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    description: 'Strategic vision and business development expert with 15+ years in international operations.'
  },
  {
    name: 'Sue Li',
    role: 'Operations Manager',
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    description: 'Ensures seamless delivery and exceptional client experiences across all operations.'
  },
  {
    name: 'Tia Rodriguez',
    role: 'Accounts Manager',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    description: 'Financial strategist dedicated to maximizing client savings and operational efficiency.'
  },
  {
    name: 'Nina Patel',
    role: 'Staff Services Manager',
    image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    description: 'Talent acquisition specialist focused on matching the perfect candidates with client needs.'
  },
  {
    name: 'Luke Riley',
    role: 'Marketing Manager',
    image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    description: 'Creative storyteller driving brand awareness and client engagement strategies.'
  },
  {
    name: 'Raesha Nathan',
    role: 'Sales Executive',
    image: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    description: 'Client relationship expert passionate about understanding and solving business challenges.'
  },
  {
    name: 'Jerome Nicholson',
    role: 'Social Media Manager',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    description: 'Digital engagement specialist building vibrant communities and brand presence.'
  }
];



  const values = [
    {
      icon: '🤝',
      title: 'Trust & Transparency',
      description: 'We believe in open communication and building relationships based on mutual trust and honesty.'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'Constantly evolving our processes to deliver cutting-edge outsourcing solutions.'
    },
    {
      icon: '🌍',
      title: 'Global Excellence',
      description: 'Bridging cultures and time zones to deliver world-class service from anywhere.'
    },
    {
      icon: '🚀',
      title: 'Growth Mindset',
      description: 'Committed to the continuous improvement of our clients, team, and services.'
    }
  ];

  const milestones = [
    { year: '2004', event: 'Brinda establishes first offshore team in India' },
    { year: '2010', event: 'Expanded to serve multiple UK law firms' },
    { year: '2018', event: 'Personal outsourcing concept born' },
    { year: '2022', event: 'Savvy Tie officially launched' },
    { year: '2023', event: '500+ clients served across Europe' },
    { year: '2024', event: 'Expanded service offerings to 10+ categories' }
  ];

  return (
    <div className="pt-20">
  {/* Hero Section (Responsive Fix) */}
<section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
  {/* Background Image */}
  <div
    className="absolute inset-0 z-0 opacity-10 rounded-none sm:rounded-2xl"
    style={{
      backgroundImage:
        'url("https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  ></div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
    <div className="text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6 leading-tight">
        About <span className="text-yellow-600">Savvy Tie</span>
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-2">
        Transforming businesses and lives through strategic outsourcing solutions.
      </p>
    </div>
  </div>
</section>


      {/* Founder Story with Enhanced Design */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-100 border border-yellow-200 mb-6">
                <span className="text-yellow-800 text-sm font-medium">Meet the Visionary</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
                Brinda Nicholson<br />
                <span className="text-yellow-600">Founder & CEO</span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p className="text-xl italic border-l-4 border-yellow-400 pl-4 text-gray-600">
                  "At Savvy Tie, I bring my years of experience, insight, and passion to help other entrepreneurs and companies thrive by building efficient, scalable teams without borders."
                </p>
                
                <p>
                  With over two decades of hands-on experience in outsourcing, Brinda Nicholson is a pioneer in leveraging global talent to drive business efficiency and growth. Her journey began 20 years ago when she established a team in India to support her UK-based law firm with essential administrative tasks.
                </p>
                
                <p>
                  What started as a solution to streamline operations quickly evolved into a highly skilled offshore team, now trained to assist with complex legal work allowing her business to grow, lower overheads and consistently boost profit margins.
                </p>
              </div>

              {/* Founder Stats */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-yellow-50 rounded-xl">
                  <div className="text-2xl font-bold text-yellow-600">20+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-xl">
                  <div className="text-2xl font-bold text-yellow-600">500+</div>
                  <div className="text-sm text-gray-600">Businesses Transformed</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl p-8 text-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="w-72 h-72 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <img 
                    src={brinda}
                    alt="Brinda Nicholson"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-black">Brinda Nicholson</h3>
                <p className="text-yellow-800 font-medium">Founder & CEO</p>
                <p className="text-yellow-700 text-sm mt-2">Pioneer in Global Outsourcing</p>
                
                {/* Social Links */}
                <div className="flex justify-center space-x-4 mt-4">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">in</span>
                  </div>
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✉</span>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-300 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-yellow-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* The Insight Section - Missing Content Added */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Business Insight"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-100 border border-yellow-200 mb-6">
                <span className="text-yellow-800 text-sm font-medium">The Insight</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
                The Birth of Savvy Tie
              </h2>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  She identified a major need in the UK market for overseas support: although outsourcing had huge potential, most people didn't know how it worked, weren't aware of its benefits, and weren't taking advantage of it.
                </p>
                
                <p>
                  That insight led to the creation of Savvy Tie, a company dedicated to helping busy entrepreneurs, businesses and families reclaim their time, to grow their businesses, improve profit margins, reduce their costs, and unlock the full potential of virtual assistance.
                </p>
                
                <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
                  <p className="text-yellow-800 font-semibold italic">
                    "We bridge the gap between exceptional global talent and forward-thinking businesses, making outsourcing accessible and beneficial for everyone."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Team Collaboration"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-black p-6 rounded-2xl shadow-2xl">
                  <div className="text-3xl font-bold">60%</div>
                  <div className="text-sm">Average Cost Savings</div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-100 border border-yellow-200 mb-6">
                <span className="text-yellow-800 text-sm font-medium">The Transformation</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
                From Chaos to Clarity
              </h2>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  As a full-time business owner of multiple businesses and a mother of two energetic young boys, Brinda was no stranger to the daily juggle of work, home and family life. But amid the chaos, she had a powerful realization: outsourcing wasn't just for CEOs and startups, it could be a lifeline for working parents too.
                </p>
                
                <p>
                  In a bold, game-changing move, Brinda hired a personal assistant in India to handle routine but time-consuming tasks like paying bills, managing school emails, scheduling appointments, and more. The result was nothing short of transformative.
                </p>
                
                <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
                  <p className="text-yellow-800 font-semibold italic">
                    "Her stress levels dropped, her productivity soared, and most importantly she finally had time back for what mattered most: her family."
                  </p>
                </div>
                
                <p>
                  What started as a practical decision turned into a total life upgrade. Brinda quickly realised she hadn't just solved her own problem she'd uncovered a powerful solution for households and professionals everywhere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide every decision we make and every relationship we build
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-8 text-center hover:bg-gray-700 transition-all duration-300 group hover:transform hover:scale-105">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision with Enhanced Design */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Our Purpose & Promise
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Mission */}
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl p-8 text-black relative overflow-hidden">
            
              
              <div className="text-center mb-6 relative z-10">
                <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-yellow-400">🎯</span>
                </div>
                <h3 className="text-3xl font-bold text-black mb-4">Our Mission</h3>
              </div>
              <p className="text-lg text-yellow-900 text-center leading-relaxed relative z-10">
                To empower businesses and individuals with strategic outsourcing solutions that drive efficiency, reduce costs, and create more time for what truly matters. We connect you with exceptional global talent to transform your operations and enhance your quality of life.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-black rounded-3xl p-8 text-white relative overflow-hidden">
             
              
              <div className="text-center mb-6 relative z-10">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-black">🌟</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-300 text-center leading-relaxed relative z-10">
                To become the world's most trusted partner in outsourcing, revolutionizing how businesses and households operate by making premium global talent accessible to everyone, everywhere.
              </p>
            </div>
          </div>

          {/* Value Proposition */}
          <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-3xl p-12 text-center relative overflow-hidden">
           
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-yellow-300 rounded-full opacity-20 transform translate-x-16 translate-y-16"></div>
            
            <h3 className="text-4xl font-bold text-black mb-6 relative z-10">
              Savvy Tie is more than just outsourcing.
            </h3>
            <p className="text-xl text-yellow-900 leading-relaxed max-w-4xl mx-auto mb-8 relative z-10">
              It's your behind the scenes powerhouse designed to help you streamline operations, boost profit margins, cut costs, and finally focus on what truly matters. Whether you're scaling a business or managing a busy household, we connect you with skilled virtual assistants who handle the details, so you can focus on the big picture.
            </p>
            <div className="mt-8 relative z-10">
              <p className="text-2xl font-bold text-black bg-white/30 rounded-full px-8 py-4 inline-block">
                Be Savvy. Live smarter, work better—one task at a time with Savvy Tie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section with Enhanced Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Meet The Savvy Tie Team
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Our dedicated team of experts is committed to delivering exceptional outsourcing solutions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 group hover:border-yellow-400 border-2 border-transparent">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-yellow-400 group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{member.name}</h3>
                <p className="text-yellow-600 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <CallToAction />
    </div>
  );
};

export default AboutUs;