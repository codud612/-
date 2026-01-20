
import React, { useEffect, useState } from 'react';
import { Experience } from '../types';

interface ExperienceModalProps {
  experience: Experience | null;
  onClose: () => void;
}

export const ExperienceModal: React.FC<ExperienceModalProps> = ({ experience, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (experience) {
      document.body.style.overflow = 'hidden';
      setCurrentImageIndex(0); // Reset index when modal opens
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [experience]);

  if (!experience) return null;

  const images = experience.images || [experience.image];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity duration-500"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-6xl max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-300 rounded-sm shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-2 text-stone-400 hover:text-black transition-colors bg-white/50 backdrop-blur-md rounded-full shadow-sm"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Image Gallery Section */}
          <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[90vh] bg-stone-100 group">
            <img 
              src={images[currentImageIndex]} 
              alt={`${experience.company} gallery ${currentImageIndex + 1}`} 
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            
            {/* Gallery Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button 
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/90 text-white hover:text-black transition-all rounded-full opacity-0 group-hover:opacity-100 backdrop-blur-sm"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/90 text-white hover:text-black transition-all rounded-full opacity-0 group-hover:opacity-100 backdrop-blur-sm"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            {/* Gallery Dots */}
            {images.length > 1 && (
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                {images.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                    className={`h-1.5 transition-all duration-300 rounded-full ${idx === currentImageIndex ? 'w-8 bg-white' : 'w-1.5 bg-white/40'}`}
                  ></button>
                ))}
              </div>
            )}
          </div>

          {/* Details Section */}
          <div className="p-10 md:p-16 lg:p-20 flex flex-col justify-center bg-white">
            <div className="mb-12">
              <div className="flex items-center gap-6 mb-8">
                <span className="text-6xl font-serif text-stone-200">{experience.number}</span>
                <div className="h-[1px] w-12 bg-stone-200"></div>
              </div>
              <h4 className="text-xs tracking-[0.4em] font-medium uppercase text-stone-400 mb-2">
                {experience.role}
              </h4>
              <h3 className="text-4xl md:text-5xl font-serif mb-8 text-stone-900 leading-tight">
                {experience.company}
              </h3>
              
              <div className="space-y-5 mb-12">
                {experience.description.map((item, idx) => (
                  <p key={idx} className="text-stone-500 text-base font-light leading-relaxed flex items-start gap-4">
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-stone-300 shrink-0"></span>
                    {item}
                  </p>
                ))}
              </div>
              
              <div className="bg-stone-50 p-8 border-l-4 border-stone-900 mb-10">
                <p className="text-xs tracking-wider uppercase font-bold text-stone-900 mb-3">Main Product Portfolio</p>
                <p className="text-base text-stone-600 font-light italic leading-relaxed">{experience.keyProducts}</p>
              </div>

              <div className="border-t border-stone-100 pt-10">
                <p className="text-[13px] text-stone-400 font-light italic leading-relaxed text-center">
                  "{experience.quote}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
