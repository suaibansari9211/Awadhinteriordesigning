import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <NavLink to="/" className="flex items-center">
          <span className="text-2xl font-bold text-blue-900">COOLING CENTRE</span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink 
            to="/"
            className={({isActive}) => 
              isActive 
                ? "text-blue-600 font-medium" 
                : "text-gray-700 hover:text-blue-600 transition-colors"
            }
          >
            Home
          </NavLink>
          
          <div className="relative">
            <button 
              className="text-gray-700 hover:text-blue-600 transition-colors flex items-center"
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
            >
              Services <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            
            {servicesDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md py-2 z-10">
                <NavLink 
                  to="/services#installation"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  onClick={() => setServicesDropdownOpen(false)}
                >
                  AC Installation
                </NavLink>
                <NavLink 
                  to="/services#repair"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  onClick={() => setServicesDropdownOpen(false)}
                >
                  AC Repair & Service
                </NavLink>
                <NavLink 
                  to="/services#maintenance"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  onClick={() => setServicesDropdownOpen(false)}
                >
                  AC Maintenance
                </NavLink>
                <NavLink 
                  to="/services#commercial"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  onClick={() => setServicesDropdownOpen(false)}
                >
                  Commercial HVAC
                </NavLink>
              </div>
            )}
          </div>
          
          <NavLink 
            to="/about"
            className={({isActive}) => 
              isActive 
                ? "text-blue-600 font-medium" 
                : "text-gray-700 hover:text-blue-600 transition-colors"
            }
          >
            About Us
          </NavLink>
          
          <NavLink 
            to="/contact"
            className={({isActive}) => 
              isActive 
                ? "text-blue-600 font-medium" 
                : "text-gray-700 hover:text-blue-600 transition-colors"
            }
          >
            Contact
          </NavLink>
        </div>

        <div className="hidden md:flex items-center">
          <a 
            href="tel:+919211992119" 
            className="flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
          >
            <Phone className="h-5 w-5 mr-2" />
            <span>+91 92119 92119</span>
          </a>
          
          <NavLink 
            to="/contact" 
            className="btn-primary ml-6"
          >
            Get a Quote
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full shadow-lg py-4 animate-fade-in">
          <div className="container-custom flex flex-col space-y-4">
            <NavLink 
              to="/" 
              className="py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            
            <div>
              <button 
                className="py-2 text-gray-700 hover:text-blue-600 flex items-center w-full justify-between"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              >
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {servicesDropdownOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  <NavLink 
                    to="/services#installation"
                    className="block py-2 text-gray-700 hover:text-blue-600"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setServicesDropdownOpen(false);
                    }}
                  >
                    AC Installation
                  </NavLink>
                  <NavLink 
                    to="/services#repair"
                    className="block py-2 text-gray-700 hover:text-blue-600"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setServicesDropdownOpen(false);
                    }}
                  >
                    AC Repair & Service
                  </NavLink>
                  <NavLink 
                    to="/services#maintenance"
                    className="block py-2 text-gray-700 hover:text-blue-600"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setServicesDropdownOpen(false);
                    }}
                  >
                    AC Maintenance
                  </NavLink>
                  <NavLink 
                    to="/services#commercial"
                    className="block py-2 text-gray-700 hover:text-blue-600"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setServicesDropdownOpen(false);
                    }}
                  >
                    Commercial HVAC
                  </NavLink>
                </div>
              )}
            </div>
            
            <NavLink 
              to="/about" 
              className="py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </NavLink>
            
            <NavLink 
              to="/contact" 
              className="py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>
            
            <div className="pt-4 border-t border-gray-200">
              <a 
                href="tel:+919211992119" 
                className="flex items-center text-blue-600 font-medium"
              >
                <Phone className="h-5 w-5 mr-2" />
                <span>+91 92119 92119</span>
              </a>
              
              <NavLink 
                to="/contact" 
                className="btn-primary mt-4 w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get a Quote
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;