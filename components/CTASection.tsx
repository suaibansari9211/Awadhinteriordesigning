import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="mb-8 lg:mb-0 lg:mr-8 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready for Cool, Clean Air?
            </h2>
            <p className="text-blue-100 text-lg">
              Contact Cooling Centre today for a free consultation and quote.
              Our expert technicians are ready to provide the perfect cooling solution for your space.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/contact" 
              className="btn-primary bg-white text-blue-600 hover:bg-blue-50"
            >
              Get a Free Quote
            </Link>
            <a 
              href="tel:+919211992119" 
              className="btn-secondary bg-transparent text-white border-white hover:bg-white/10"
            >
              <Phone className="h-5 w-5 mr-2" />
              +91 92119 92119
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;