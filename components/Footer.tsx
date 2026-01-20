
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 border-t border-stone-100">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xs tracking-[0.2em] font-bold">
          L.C.Y <span className="font-light text-stone-400">STUDIO</span>
        </div>
        
        <div className="text-[10px] tracking-[0.1em] text-stone-400 font-light uppercase">
          © 2026 이채영. All rights reserved. Built for Excellence.
        </div>

        <div className="flex gap-8">
           <a href="#" className="text-[10px] tracking-[0.2em] uppercase text-stone-400 hover:text-black transition-colors">Instagram</a>
           <a href="#" className="text-[10px] tracking-[0.2em] uppercase text-stone-400 hover:text-black transition-colors">Behance</a>
        </div>
      </div>
    </footer>
  );
};
