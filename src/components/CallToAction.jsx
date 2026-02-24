// src/components/CallToAction.jsx
import { Link } from 'react-router-dom';

const CallToAction = ({ 
  title = "Ready to Transform Your Team?", 
  description = "Join 500+ forward-thinking businesses that are scaling efficiently with premium talent from India and Asia. Experience enterprise-quality work at sustainable costs.",
  primaryButtonText = "Start Hiring Today",
  primaryButtonLink = "/hire-now",
  secondaryButtonText = "Schedule a Call",
  secondaryButtonLink = "/schedule-call",
  primaryButtonClick = null
}) => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
          {title}
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          {primaryButtonClick ? (
            <button
              onClick={primaryButtonClick}
              className="bg-yellow-400 text-black px-12 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
            >
              {primaryButtonText}
            </button>
          ) : (
            <Link
              to={primaryButtonLink}
              className="bg-yellow-400 text-black px-12 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
            >
              {primaryButtonText}
            </Link>
          )}
          <Link
            to={secondaryButtonLink}
            className="border-2 border-white text-white px-12 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition-colors duration-200"
          >
            {secondaryButtonText}
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">70%</div>
            <div className="text-gray-300">Average Cost Savings</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">48h</div>
            <div className="text-gray-300">Candidate Matching</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">98%</div>
            <div className="text-gray-300">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;