
import React from 'react';
import { Experience } from '../types';

interface ExperienceItemProps {
  experience: Experience;
  isReversed?: boolean;
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience, isReversed }) => {
  return (
    <div className={`group relative w-full border-t border-stone-100 py-24 lg:py-40 transition-colors hover:bg-stone-50 overflow-hidden`}>
      <div className={`max-w-screen-2xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center`}>
        {/* Content Side */}
        <div className={`lg:col-span-5 ${isReversed ? 'lg:order-last' : ''}`}>
          <div className="flex items-center gap-6 mb-8">
            <span className="text-6xl font-serif text-stone-200 group-hover:text-stone-900 transition-colors duration-500">
              {experience.number}
            </span>
            <div className="h-[1px] w-12 bg-stone-200"></div>
          </div>
          
          <h4 className="text-xs tracking-[0.3em] font-medium uppercase text-stone-400 mb-2">
            {experience.role}
          </h4>
          <h3 className="text-3xl md:text-4xl font-serif mb-8 group-hover:translate-x-2 transition-transform duration-500">
            {experience.company}
          </h3>
          
          <div className="space-y-4 mb-10">
            {experience.description.map((item, idx) => (
              <p key={idx} className="text-stone-500 text-sm font-light leading-relaxed">
                • {item}
              </p>
            ))}
          </div>
          
          <div className="bg-white/50 p-6 border-l-2 border-stone-900">
            <p className="text-xs tracking-wider uppercase font-bold text-stone-900 mb-2">Main Product</p>
            <p className="text-sm text-stone-600 font-light italic">{experience.keyProducts}</p>
          </div>
        </div>

        {/* Image Side */}
        <div className="lg:col-span-7">
          <div className="relative aspect-video bg-stone-100 overflow-hidden shadow-2xl">
            <img 
              src={experience.image} 
              alt={experience.company} 
              className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
            
            {/* Quote Overlay */}
            <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm p-4 max-w-xs transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 delay-100">
              <p className="text-[11px] text-stone-500 font-light italic leading-relaxed">
                "{experience.quote}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
