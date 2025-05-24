import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter 
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">COOLING CENTRE</h3>
            <p className="text-blue-100 mb-4">
              Your trusted partner for all air conditioning needs. 
              We provide installation, repair, and maintenance services 
              for residential and commercial properties.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" className="text-blue-100 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" className="text-blue-100 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className="text-blue-100 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-blue-100 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-blue-100 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-blue-100 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-blue-100 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-blue-100 hover:text-white transition-colors">
                  AC Installation
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-blue-100 hover:text-white transition-colors">
                  AC Repair
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#installation" className="text-blue-100 hover:text-white transition-colors">
                  AC Installation
                </Link>
              </li>
              <li>
                <Link to="/services#repair" className="text-blue-100 hover:text-white transition-colors">
                  AC Repair & Service
                </Link>
              </li>
              <li>
                <Link to="/services#maintenance" className="text-blue-100 hover:text-white transition-colors">
                  AC Maintenance
                </Link>
              </li>
              <li>
                <Link to="/services#commercial" className="text-blue-100 hover:text-white transition-colors">
                  Commercial HVAC
                </Link>
              </li>
              <li>
                <Link to="/services#emergency" className="text-blue-100 hover:text-white transition-colors">
                  Emergency Services
                </Link>
              </li>
              <li>
                <Link to="/services#consultation" className="text-blue-100 hover:text-white transition-colors">
                  Free Consultation
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                <span>
                  <a href="tel:+919211992119" className="text-blue-100 hover:text-white transition-colors">
                    +91 92119 92119
                  </a>
                </span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                <span>
                  <a href="mailto:info@coolingcentre.com" className="text-blue-100 hover:text-white transition-colors">
                    info@coolingcentre.com
                  </a>
                </span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-blue-100">
                  123 Cooling Street, Delhi, 110001, India
                </span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-blue-100">
                  Mon - Sat: 9:00 AM - 7:00 PM<br />
                  Sunday: 10:00 AM - 4:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-blue-950 py-4">
        <div className="container-custom text-center text-blue-200 text-sm">
          <p>© {currentYear} Cooling Centre. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;