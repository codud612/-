
import React from 'react';

export const SkillsSection: React.FC = () => {
  const certifications = ["제과기능사", "제빵기능사", "바리스타 2급"];
  const skills = [
    {
      title: "Pâtisserie",
      details: "100% 동물성 생크림 아이싱, 고품격 케이크 제조 숙련, 페스츄리 정교한 적층 및 성형 기술"
    },
    {
      title: "Quality Control",
      details: "HACCP 기반 제품 품질 및 위생 관리 능력, 냉동 CCP(중요관리점) 담당 및 기록 관리"
    },
    {
      title: "Operation",
      details: "대규모 생산 공정 최적화, 효율적인 재고 관리 프로세스, 매뉴얼 준수 및 대량 생산 공정 관리"
    }
  ];

  return (
    <div className="py-24 lg:py-40">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="mb-24">
          <h2 className="text-[11px] tracking-[0.4em] text-stone-400 uppercase mb-4">03. Capabilities</h2>
          <h3 className="text-5xl md:text-6xl font-serif text-stone-900">Skills & Certifications</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32">
          {/* Left Column: Certifications & Motto */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <h4 className="text-[11px] tracking-[0.3em] font-bold uppercase mb-10 text-stone-900 border-b border-stone-200 pb-5">
                Certifications
              </h4>
              <ul className="space-y-6 mb-16">
                {certifications.map((cert, idx) => (
                  <li key={idx} className="flex items-center gap-4 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-stone-900 group-hover:scale-125 transition-transform"></div>
                    <span className="text-lg font-light text-stone-600">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-[#1a1a1a] p-10 text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-stone-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              <p className="text-[10px] tracking-[0.3em] uppercase opacity-40 mb-6 font-bold">Motto</p>
              <p className="text-xl font-serif italic leading-relaxed text-stone-100">
                "재료의 조화가 만들어내는 예술, <br />
                그 중심에는 파티시에의 진심이 있어야 합니다."
              </p>
            </div>
          </div>

          {/* Right Column: Expertise */}
          <div className="lg:col-span-8">
            <h4 className="text-[11px] tracking-[0.3em] font-bold uppercase mb-10 text-stone-900 border-b border-stone-200 pb-5">
              Expertise
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
              {skills.map((skill, idx) => (
                <div key={idx} className="group flex flex-col">
                  <span className="text-xs font-serif text-stone-300 block mb-3">0{idx + 1}</span>
                  <h5 className="text-2xl font-medium text-stone-800 mb-5 group-hover:text-stone-500 transition-colors duration-300">
                    {skill.title}
                  </h5>
                  <p className="text-base text-stone-500 font-light leading-relaxed">
                    {skill.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
