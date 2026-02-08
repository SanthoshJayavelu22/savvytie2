// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.jpg';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img src={logo} alt="SavvyTie Logo" className="h-12 w-auto"/>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Connecting UK and European businesses with elite virtual talent from South India and Asia. 
              Premium quality at sustainable costs.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-yellow-500 transition-all duration-200">
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-yellow-500 transition-all duration-200">
                <FaInstagram className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-yellow-500 transition-all duration-200">
                <FaYoutube className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-lg">Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {[
                { name: 'Accounting & Finance', path: '/services/property-assistants' }, // Mapping roughly or just /services
                { name: 'Legal Services', path: '/services/legal-assistants' },
                { name: 'Digital Marketing', path: '/services/social-media-management' },
                { name: 'Technology', path: '/services/it-outsourcing' },
                { name: 'Administrative', path: '/services/personal-assistants' }
              ].map((service) => (
                <li key={service.name}>
                  <Link to={service.path} className="hover:text-white transition-colors duration-200">{service.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about-us' },
                { name: 'Services', path: '/services' },
                { name: 'Hire Now', path: '/hire-now' },
                { name: 'Jobs', path: '/jobs' },
                { name: 'Contact', path: '/contact-us' },
                { name: 'FAQ', path: '/faq' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-lg">Contact</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div>hello@savvytie.com</div>
              <div>+44 20 1234 5678</div>
              <div>London, United Kingdom</div>
              <div>Bangalore • Chennai • Hyderabad</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
          <div className="text-gray-400 text-sm">
            Savvy Tie © {new Date().getFullYear()}. All rights reserved.
          </div>
          <p className='text-gray-400 text-sm'>Designed & Developed by <a href="https://www.linkedin.com/in/santhosh-jayavelu/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">Santhosh Jayavelu</a></p>
          <div className="flex flex-wrap justify-center gap-6">
        
            <Link 
              to="/privacy-policy" 
              className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/cookie-policy" 
              className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
            >
              Cookie Policy
            </Link>
            <Link 
              to="/terms-of-service" 
              className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;