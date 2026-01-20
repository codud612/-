
import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-12 relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
        
        {/* Left Side: Image with vertical text and overlap box */}
        <div className="lg:col-span-5 relative flex items-start justify-center lg:justify-start">
          {/* Vertical Label next to image */}
          <div className="hidden md:block pr-8 pt-12 shrink-0">
            <span className="vertical-text text-[10px] tracking-[0.5em] text-stone-300 uppercase font-light whitespace-nowrap">
              PATISSIER PORTFOLIO
            </span>
          </div>
          
          <div className="relative flex-1 max-w-[220px]">
            {/* ID Photo (증명사진) style small frame */}
            <div className="aspect-[3/4] bg-white overflow-hidden shadow-md border-[6px] border-white ring-1 ring-stone-100">
              <img 
                src="https://raw.githubusercontent.com/codud612/-/c5ed8cd3f90b296797711e6518d4a5ebda5d9f4e/pksny6_81te-ygu2su_pksny5aoayygu2supksnxr87ajygu2su.jpg" 
                alt="이채영 파티시에" 
                className="w-full h-full object-cover transition-all duration-700"
              />
            </div>
            
            {/* The Black Overlap Box */}
            <div className="absolute -bottom-4 -right-8 w-28 h-28 bg-[#1a1a1a] flex items-center justify-center p-3 shadow-xl z-10">
              <p className="text-white text-[8px] tracking-[0.2em] leading-loose text-center uppercase font-medium">
                SINCERITY &<br />TECHNICAL SKILL
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="lg:col-span-7 pt-4 lg:pl-4">
          <h3 className="text-2xl md:text-3xl font-light text-stone-800 leading-relaxed mb-10">
            안녕하세요, 파티시에 <span className="font-bold">"이채영"</span>입니다.
          </h3>
          
          <div className="space-y-6 text-stone-500 font-light leading-relaxed mb-12 text-sm md:text-base">
            <p>
              재료의 본질을 깊이 있게 이해하고, 기본에 충실하면서도 트렌디한 감각을 더한 제품을 만듭니다. 
              단순히 맛있는 빵을 넘어, 한 입의 디저트가 먹는 사람의 소중하고 행복한 기억으로 남을 수 있도록 매일 진심을 다해 굽습니다.
            </p>
            <p>
              다양한 업장에서의 실무 경험을 통해 다져진 탄탄한 기술력과 운영 노하우를 바탕으로, 항상 신뢰할 수 있는 맛과 품질을 약속드립니다.
            </p>
          </div>

          <div className="w-full h-[1px] bg-stone-100 mb-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-[11px] tracking-[0.1em] font-bold text-stone-900 mb-4 uppercase">전 문 분 야</h4>
              <ul className="text-[13px] text-stone-500 space-y-2.5 font-light">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-stone-300 rounded-full"></span>
                  구움과자 (휘낭시에, 마들렌)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-stone-300 rounded-full"></span>
                  데코레이션 케이크
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-stone-300 rounded-full"></span>
                  고품격 페스츄리
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-[11px] tracking-[0.1em] font-bold text-stone-900 mb-4 uppercase">핵 심 가 치</h4>
              <ul className="text-[13px] text-stone-500 space-y-2.5 font-light">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-stone-300 rounded-full"></span>
                  최상의 식재료 선정
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-stone-300 rounded-full"></span>
                  철저한 위생 관리
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-stone-300 rounded-full"></span>
                  끊임없는 디자인 연구
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
