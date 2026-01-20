
import React from 'react';
import { Experience } from '../types';

interface ExperienceCardProps {
  experience: Experience;
  onClick: () => void;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group relative cursor-pointer overflow-hidden bg-stone-100 aspect-[4/5] shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
    >
      <img 
        src={experience.image} 
        alt={experience.company} 
        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
      
      <div className="absolute top-6 left-6 flex items-center gap-4">
        <span className="text-3xl font-serif text-white/50">{experience.number}</span>
        <div className="h-[1px] w-8 bg-white/30"></div>
      </div>

      <div className="absolute bottom-8 left-8 right-8">
        <p className="text-[10px] tracking-[0.3em] font-medium uppercase text-white/70 mb-2">
          {experience.role}
        </p>
        <h3 className="text-2xl font-serif text-white mb-4">
          {experience.company}
        </h3>
        <div className="w-10 h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
      </div>
    </div>
  );
};
