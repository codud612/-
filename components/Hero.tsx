
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] hover:scale-105"
        style={{ backgroundImage: `url('https://picsum.photos/id/488/1920/1080')` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative h-full max-w-screen-2xl mx-auto px-6 lg:px-12 flex flex-col justify-center text-white">
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <p className="text-xs lg:text-sm tracking-[0.4em] font-light mb-6 opacity-80">
            PASTRY & BAKERY PORTFOLIO
          </p>
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-serif leading-none mb-8 tracking-tighter">
            Redefining<br />
            <span className="italic">Pâtisserie</span>
          </h1>
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
            <p className="max-w-md text-sm lg:text-base font-light leading-relaxed opacity-90 border-l border-white/30 pl-6">
              "정성과 기술로 구워내는 일상의 달콤한 순간"<br />
              기본에 충실하면서도 트렌디한 감각을 더한 제품을 만듭니다.
            </p>
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 border border-white/50 hover:bg-white hover:text-black transition-all duration-500 text-[10px] tracking-[0.3em] uppercase w-fit"
            >
              Explore Story
            </button>
          </div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50">
        <div className="w-[1px] h-12 bg-white/50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-white animate-scroll-down"></div>
        </div>
        <span className="text-[9px] tracking-[0.4em] uppercase text-white">Scroll</span>
      </div>

      <style>{`
        @keyframes scroll-down {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-scroll-down {
          animation: scroll-down 2s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};
