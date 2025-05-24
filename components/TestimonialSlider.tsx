import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  content: string;
  rating: number;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState<'next' | 'prev' | null>(null);
  
  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);
  
  const handlePrev = () => {
    setAnimationDirection('prev');
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setAnimationDirection('next');
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <div 
          className={`transition-all duration-500 ease-in-out ${
            animationDirection === 'next' 
              ? 'animate-slide-left' 
              : animationDirection === 'prev' 
                ? 'animate-slide-right' 
                : ''
          }`}
        >
          <div className="testimonial-card p-8">
            <div className="flex mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
              {[...Array(5 - testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i + testimonials[currentIndex].rating} className="h-5 w-5 text-gray-300" />
              ))}
            </div>
            
            <p className="text-gray-600 mb-6 text-lg italic">
              "{testimonials[currentIndex].content}"
            </p>
            
            <div className="flex items-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg">
                {testimonials[currentIndex].name.charAt(0)}
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-blue-900">{testimonials[currentIndex].name}</h4>
                <p className="text-gray-600">{testimonials[currentIndex].position}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation Buttons */}
      <button 
        onClick={handlePrev}
        className="absolute top-1/2 -left-4 md:-left-8 -translate-y-1/2 bg-white rounded-full p-2 shadow-md text-blue-600 hover:text-blue-800 transition-colors"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button 
        onClick={handleNext}
        className="absolute top-1/2 -right-4 md:-right-8 -translate-y-1/2 bg-white rounded-full p-2 shadow-md text-blue-600 hover:text-blue-800 transition-colors"
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      
      {/* Dots indicator */}
      <div className="flex justify-center space-x-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setAnimationDirection(index > currentIndex ? 'next' : 'prev');
              setCurrentIndex(index);
            }}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;