
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
        <div className="mb-20">
          <h2 className="text-sm tracking-[0.4em] text-stone-400 uppercase mb-4">03. Capabilities</h2>
          <h3 className="text-5xl font-serif">Skills & Certifications</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-4">
            <h4 className="text-xs tracking-[0.3em] font-bold uppercase mb-8 border-b border-stone-200 pb-4">
              Certifications
            </h4>
            <div className="flex flex-col gap-6">
              {certifications.map((cert, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-stone-900"></div>
                  <span className="text-lg font-light text-stone-600">{cert}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-16 bg-stone-900 p-8 text-white hidden lg:block">
              <p className="text-[10px] tracking-[0.3em] uppercase opacity-50 mb-4">Motto</p>
              <p className="text-lg font-serif italic leading-relaxed">
                "재료의 조화가 만들어내는 예술, <br />그 중심에는 파티시에의 진심이 있어야 합니다."
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <h4 className="text-xs tracking-[0.3em] font-bold uppercase mb-8 border-b border-stone-200 pb-4">
              Expertise
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {skills.map((skill, idx) => (
                <div key={idx} className="group">
                  <span className="text-xs font-serif text-stone-300 block mb-2">0{idx + 1}</span>
                  <h5 className="text-xl font-medium mb-4 group-hover:text-stone-500 transition-colors">
                    {skill.title}
                  </h5>
                  <p className="text-sm text-stone-500 font-light leading-relaxed">
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
