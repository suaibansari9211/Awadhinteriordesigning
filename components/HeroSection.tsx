import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-blue-900 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/3637739/pexels-photo-3637739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Air Conditioning" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900/80 to-blue-900/70"></div>
      </div>
      
      <div className="container-custom relative z-10 pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Cool Comfort for Every Space
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Professional air conditioning services for homes and businesses.
            Installation, repair, and maintenance from Delhi's trusted cooling experts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="btn-primary bg-blue-500 hover:bg-blue-600">
              Get a Free Quote
            </Link>
            <a 
              href="tel:+919211992119" 
              className="btn-secondary bg-transparent text-white border-white hover:bg-white/10"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Us Now
            </a>
          </div>
          
          <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-4 md:mb-0">
                <div className="text-white font-bold mb-1">Emergency Service Available</div>
                <p className="text-blue-100">24/7 support for urgent AC repairs</p>
              </div>
              <Link 
                to="/services#emergency" 
                className="btn-primary bg-white text-blue-900 hover:bg-blue-50"
              >
                Emergency Service
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Service brands */}
      <div className="bg-white/10 backdrop-blur-sm border-t border-white/20 py-4 relative z-10">
        <div className="container-custom">
          <div className="text-center text-blue-100 mb-2 text-sm">We service all major AC brands</div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 items-center">
            <div className="text-white font-medium">Daikin</div>
            <div className="text-white font-medium">Carrier</div>
            <div className="text-white font-medium">Mitsubishi</div>
            <div className="text-white font-medium">Hitachi</div>
            <div className="text-white font-medium">Voltas</div>
            <div className="text-white font-medium">Blue Star</div>
            <div className="text-white font-medium">LG</div>
            <div className="text-white font-medium">Samsung</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;