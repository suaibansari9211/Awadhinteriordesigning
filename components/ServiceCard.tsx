import React from 'react';
import { Link } from 'react-router-dom';
import { AirVent, PenTool as Tool, Settings, Building, AlertCircle, Zap, Thermometer, Fan, LucideCrop as LucideProps } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  iconName: string;
  whatsappMessage: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  iconName,
  whatsappMessage
}) => {
  const iconMap: Record<string, React.FC<LucideProps>> = {
    'AirVent': AirVent,
    'Tool': Tool,
    'Settings': Settings,
    'Building': Building,
    'AlertCircle': AlertCircle,
    'Zap': Zap,
    'Thermometer': Thermometer,
    'Fan': Fan
  };
  
  const IconComponent = iconMap[iconName] || AirVent;
  
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/918418944572?text=${encodedMessage}`, '_blank');
  };
  
  return (
    <div className="service-card group">
      <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
        <IconComponent className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-blue-900">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <button 
        onClick={handleWhatsAppClick}
        className="text-blue-600 font-medium hover:text-blue-800 transition-colors inline-flex items-center"
      >
        Enquire on WhatsApp
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-4 w-4 ml-1" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M9 5l7 7-7 7" 
          />
        </svg>
      </button>
    </div>
  );
};

export default ServiceCard;