import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppFloating = () => {
  // Use wa.me link to open WhatsApp chat in new tab
  const waHref = 'https://wa.me/442081295022';

  return (
    <div className="fixed left-6 bottom-6 z-50">
      <a
        href={waHref}
        aria-label="Open WhatsApp chat"
        className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-150 inline-flex items-center justify-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="w-6 h-6" />
      </a>
    </div>
  );
};

export default WhatsAppFloating;
