// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.jpg';

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
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-lg">Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {['Accounting & Finance', 'Legal Services', 'Digital Marketing', 'Technology', 'Administrative'].map((service) => (
                <li key={service}>
                  <a href="#" className="hover:text-white transition-colors duration-200">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-lg">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Hire Now', path: '/hire-now' },
                { name: 'Jobs', path: '/jobs' },
                { name: 'Contact', path: '/contact' }
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

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2025 SavvyTie. All rights reserved.
          </div>
          <p className='text-gray-400 text-sm'>Developed By: Santhosh Jayavelu</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <Link 
              to="/privacy-policy" 
              className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
            >
              Privacy Policy
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