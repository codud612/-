
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
      // 배경 스크롤 방지
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      setCurrentImageIndex(0); 
    } else {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity duration-500"
        onClick={onClose}
      ></div>

      {/* Modal Content - '스크롤 안되게' 요청에 따라 overflow-hidden 적용 및 고정 레이아웃 구성 */}
      <div className="relative bg-white w-full max-w-6xl h-auto max-h-[95vh] lg:h-[85vh] overflow-hidden animate-in zoom-in-95 duration-300 rounded-sm shadow-2xl flex flex-col lg:flex-row">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-2 text-stone-400 hover:text-black transition-colors bg-white/50 backdrop-blur-md rounded-full shadow-sm"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image Gallery Section */}
        <div className="relative w-full lg:w-1/2 aspect-[4/3] lg:aspect-auto lg:h-full bg-stone-100 group shrink-0">
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
        <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white overflow-hidden">
          <div className="max-w-md mx-auto w-full">
            <div className="flex items-center gap-6 mb-6 lg:mb-10">
              <span className="text-5xl lg:text-7xl font-serif text-stone-200">{experience.number}</span>
              <div className="h-[1px] w-12 bg-stone-200"></div>
            </div>
            <h4 className="text-[10px] tracking-[0.4em] font-medium uppercase text-stone-400 mb-2">
              {experience.role}
            </h4>
            <h3 className="text-3xl lg:text-4xl font-serif mb-6 lg:mb-10 text-stone-900 leading-tight">
              {experience.company}
            </h3>
            
            <div className="space-y-4 mb-8 lg:mb-12">
              {experience.description.map((item, idx) => (
                <p key={idx} className="text-stone-500 text-sm lg:text-base font-light leading-relaxed flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-stone-300 shrink-0"></span>
                  {item}
                </p>
              ))}
            </div>
            
            <div className="bg-stone-50 p-6 lg:p-8 border-l-4 border-stone-900">
              <p className="text-[10px] tracking-wider uppercase font-bold text-stone-900 mb-3">Main Product Portfolio</p>
              <p className="text-sm lg:text-base text-stone-600 font-light italic leading-relaxed">{experience.keyProducts}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
