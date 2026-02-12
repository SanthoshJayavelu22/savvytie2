// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const location = useLocation(); // 👈 to detect current path

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  const services = [
    { name: 'Property Assistants', path: '/services/property-assistants' },
    { name: 'Personal Assistants', path: '/services/personal-assistants' },
    { name: 'Social Media Management', path: '/services/social-media-management' },
    { name: 'Call Centre', path: '/services/call-centre' },
    { name: 'Live Chat Support', path: '/services/live-chat-support' },
    { name: 'Telesales', path: '/services/telesales' },
    { name: 'Data Entry Services', path: '/services/data-entry-services' },
    { name: 'Debt Collection', path: '/services/debt-collection' },
    { name: 'IT Outsourcing', path: '/services/it-outsourcing' },
    { name: 'Sales Assistants', path: '/services/sales-assistants' },
    { name: 'Legal Assistants', path: '/services/legal-assistants' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="SavvyTie Logo" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link
              to="/"
              className={`font-bold text-md transition-colors duration-200 ${
                isActive('/') ? 'text-yellow-500' : 'text-black hover:text-yellow-500'
              }`}
            >
              Home
            </Link>

            <Link
              to="/about-us"
              className={`font-bold text-md transition-colors duration-200 ${
                isActive('/about-us') ? 'text-yellow-500' : 'text-black hover:text-yellow-500'
              }`}
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                if (window.closeDropdownTimeout) clearTimeout(window.closeDropdownTimeout);
                setIsServicesDropdownOpen(true);
              }}
              onMouseLeave={() => {
                window.closeDropdownTimeout = setTimeout(() => {
                  setIsServicesDropdownOpen(false);
                }, 200);
              }}
            >
              <button
                className={`font-bold text-md transition-colors duration-200 flex items-center ${
                  location.pathname.startsWith('/services')
                    ? 'text-yellow-500'
                    : 'text-black hover:text-yellow-500'
                }`}
              >
                <Link to="/services">Services</Link>
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isServicesDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                  onMouseEnter={() => {
                    if (window.closeDropdownTimeout) clearTimeout(window.closeDropdownTimeout);
                    setIsServicesDropdownOpen(true);
                  }}
                  onMouseLeave={() => {
                    window.closeDropdownTimeout = setTimeout(() => {
                      setIsServicesDropdownOpen(false);
                    }, 200);
                  }}
                >
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                        isActive(service.path)
                          ? 'bg-yellow-50 text-yellow-600 font-semibold'
                          : 'text-gray-700 hover:bg-yellow-50 hover:text-black'
                      }`}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/hire-now"
              className={`font-bold text-md transition-colors duration-200 ${
                isActive('/hire-now') ? 'text-yellow-500' : 'text-black hover:text-yellow-500'
              }`}
            >
              Hire Now
            </Link>

            <Link
              to="/jobs"
              className={`font-bold text-md transition-colors duration-200 ${
                isActive('/jobs') ? 'text-yellow-500' : 'text-black hover:text-yellow-500'
              }`}
            >
              Jobs
            </Link>

            <Link
              to="/contact-us"
              className={`font-bold text-md transition-colors duration-200 ${
                isActive('/contact-us') ? 'text-yellow-500' : 'text-black hover:text-yellow-500'
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Get Started + Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Link 
              to="/schedule-call"
              className="hidden md:block bg-yellow-400 text-black px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-yellow-500 transition-colors duration-200"
            >
              Get Started
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-black"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-white border-t border-gray-100`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <nav className="space-y-3">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block font-semibold text-gray-800 ${isActive('/') ? 'text-yellow-500' : 'hover:text-yellow-500'}`}
            >
              Home
            </Link>
            <Link
              to="/about-us"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block font-semibold text-gray-800 ${isActive('/about-us') ? 'text-yellow-500' : 'hover:text-yellow-500'}`}
            >
              About Us
            </Link>
            <div className="pt-2">
              <div className="font-semibold text-gray-800 mb-2">Services</div>
              <div className="grid grid-cols-2 gap-2">
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-sm text-gray-700 px-3 py-2 rounded hover:bg-gray-50"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              to="/hire-now"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block font-semibold text-gray-800 ${isActive('/hire-now') ? 'text-yellow-500' : 'hover:text-yellow-500'}`}
            >
              Hire Now
            </Link>
            <Link
              to="/jobs"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block font-semibold text-gray-800 ${isActive('/jobs') ? 'text-yellow-500' : 'hover:text-yellow-500'}`}
            >
              Jobs
            </Link>
            <Link
              to="/contact-us"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block font-semibold text-gray-800 ${isActive('/contact-us') ? 'text-yellow-500' : 'hover:text-yellow-500'}`}
            >
              Contact Us
            </Link>
            <div className="pt-3">
              <Link
                to="/schedule-call"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block bg-yellow-400 text-black text-center px-4 py-2 rounded font-semibold hover:bg-yellow-500"
              >
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
