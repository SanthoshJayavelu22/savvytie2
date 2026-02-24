import React from 'react';
import savvyVideo from '../assets/images/Savvy Tie video.mp4';

const PromoVideo = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            See How Savvy Tie Can Help You
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Watch our short video to discover how outsourcing to our top-tier virtual assistants can scale your business and save you time.
          </p>
        </div>
        
        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-gray-900 aspect-video border-4 border-white">
          <video 
            className="w-full h-full object-cover"
            controls
            playsInline
            poster="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          >
            <source src={savvyVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default PromoVideo;
