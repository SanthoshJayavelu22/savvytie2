import React, { useState, useEffect } from 'react';
import { ChevronUpIcon } from '@heroicons/react/24/outline';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[999]">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 rounded-full shadow-2xl transition-all transform hover:scale-110 active:scale-95 border-2 border-white focus:outline-none focus:ring-4 focus:ring-yellow-400/30 group"
          aria-label="Scroll to top"
        >
          <ChevronUpIcon className="w-6 h-6 animate-bounce group-hover:animate-none" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
