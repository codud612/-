import React, { useState } from 'react';
import { ExperienceCard } from './ExperienceCard';
import { ExperienceModal } from './ExperienceModal';
import { Experience } from '../types';

const experiences: Experience[] = [
  {
    id: 'exp1',
    number: '01',
    company: '박배철 과자점',
    role: 'Patissier',
    description: [
      '다양한 종류의 홀 케이크 및 타르트 생산 및 데코레이션',
      '신선한 재료를 활용한 샌드위치 제조 및 각종 튀김 제품군 담당',
      '재료 발주 및 재고 관리, 철저한 품질 관리 공정 수행'
    ],
    keyProducts: '정통 생크림 케이크, 계절 과일 타르트',
    image: 'https://raw.githubusercontent.com/codud612/-/1646ad5d1fb3fe265689c6f131c9ca95458c3a2d/KakaoTalk_20260120_175616285_06.jpg',
    images: [
      'https://raw.githubusercontent.com/codud612/-/1646ad5d1fb3fe265689c6f131c9ca95458c3a2d/KakaoTalk_20260120_175616285_06.jpg',
      'https://raw.githubusercontent.com/codud612/-/1646ad5d1fb3fe265689c6f131c9ca95458c3a2d/KakaoTalk_20260120_175616285_04.jpg',
      'https://raw.githubusercontent.com/codud612/-/1646ad5d1fb3fe265689c6f131c9ca95458c3a2d/KakaoTalk_20260120_175616285.jpg'
    ],
    quote: '숙련된 기술로 완성한 케이크와 타르트 라인업입니다.'
  },
  {
    id: 'exp2',
    number: '02',
    company: '러브인더부산 남포당',
    role: 'Signature Macaron Specialist',
    description: [
      '트렌디하고 화려한 비주얼의 시그니처 마카롱 대량 생산',
      '꼬끄의 일정한 식감 유지와 다채로운 필링 제조 공정 관리',
      '대중적인 선호도를 반영한 마카롱 라인업 기획'
    ],
    keyProducts: '다양한 종류의 수제 마카롱 (시그니처 필링 및 뚱카롱)',
    image: 'https://raw.githubusercontent.com/codud612/-/6f9fa657c3f5e229be61edc24b00ea21109c6489/components/KakaoTalk_20260120_175616285_07.jpg',
    images: [
      'https://raw.githubusercontent.com/codud612/-/6f9fa657c3f5e229be61edc24b00ea21109c6489/components/KakaoTalk_20260120_175616285_07.jpg'
    ],
    quote: '최상의 식감과 풍부한 맛을 담아낸 시그니처 마카롱입니다.'
  },
  {
    id: 'exp3',
    number: '03',
    company: '디저트를 팝니다, 스미다',
    role: 'Seasonal Cake Maker',
    description: [
      '섬세한 플레이팅 디저트와 시즌별 생과일을 활용한 케이크 제조',
      '부드러운 시트와 크림의 조화를 강조한 롤케이크 생산'
    ],
    keyProducts: '시즌 생과일 케이크, 다양한 롤케이크, 생과일 타르트',
    image: 'https://raw.githubusercontent.com/codud612/-/f99fafe75096e82beca286e97cbfa39c9033a418/KakaoTalk_20260120_175616285_15.jpg',
    images: [
      'https://raw.githubusercontent.com/codud612/-/f99fafe75096e82beca286e97cbfa39c9033a418/KakaoTalk_20260120_175616285_15.jpg',
      'https://raw.githubusercontent.com/codud612/-/f99fafe75096e82beca286e97cbfa39c9033a418/KakaoTalk_20260120_175616285_13.jpg',
      'https://raw.githubusercontent.com/codud612/-/f99fafe75096e82beca286e97cbfa39c9033a418/KakaoTalk_20260120_175616285_11.jpg',
      'https://raw.githubusercontent.com/codud612/-/f99fafe75096e82beca286e97cbfa39c9033a418/KakaoTalk_20260120_175616285_19.jpg',
      'https://raw.githubusercontent.com/codud612/-/f99fafe75096e82beca286e97cbfa39c9033a418/KakaoTalk_20260120_175616285_20.jpg',
      'https://raw.githubusercontent.com/codud612/-/f99fafe75096e82beca286e97cbfa39c9033a418/KakaoTalk_20260120_175616285_21.jpg'
    ],
    quote: '제철 과일의 신선함과 부드러운 시트의 조화가 돋보입니다.'
  },
  {
    id: 'exp4',
    number: '04',
    company: '㈜ 온더무브 전차카페',
    role: 'Menu Development',
    description: [
      '공간의 컨셉을 직관적으로 시각화한 무스 디저트 개발',
      '카페 고유의 감성을 담은 디저트 메뉴 기획 및 운영 효율화'
    ],
    keyProducts: '시그니처 전차모양 무스케이크, 커피와 어울리는 구움과자',
    image: 'https://raw.githubusercontent.com/codud612/-/5ec29b40af75e0de3946bc04d497ffde5f30e54c/KakaoTalk_20260120_185735377.jpg',
    images: [
      'https://raw.githubusercontent.com/codud612/-/5ec29b40af75e0de3946bc04d497ffde5f30e54c/KakaoTalk_20260120_185735377.jpg',
      'https://raw.githubusercontent.com/codud612/-/5ec29b40af75e0de3946bc04d497ffde5f30e54c/KakaoTalk_20260120_175616285_23.jpg',
      'https://raw.githubusercontent.com/codud612/-/5ec29b40af75e0de3946bc04d497ffde5f30e54c/KakaoTalk_20260120_175616285_26.jpg'
    ],
    quote: '전차카페만의 아이덴티티를 정교한 기법으로 표현했습니다.'
  },
  {
    id: 'exp5',
    number: '05',
    company: '㈜ 엘에프앤비',
    role: 'Quality & System Manager',
    description: [
      'HACCP 인증 시스템 내 냉동 CCP 담당 및 기록 관리',
      '기업형 베이커리 시스템 기반의 메뉴 표준화 및 대량 생산 관리',
      '균일한 퀄리티 유지를 위한 제조 매뉴얼 준수'
    ],
    keyProducts: '고품질 냉동 생지 라인업, 테이크아웃 최적화 베이커리',
    image: 'https://raw.githubusercontent.com/codud612/-/d00237cb882ba2fff64db2fe6edf47aa71124c37/KakaoTalk_20260120_175616285_28.jpg',
    images: [
      'https://raw.githubusercontent.com/codud612/-/d00237cb882ba2fff64db2fe6edf47aa71124c37/KakaoTalk_20260120_175616285_28.jpg',
      'https://raw.githubusercontent.com/codud612/-/d00237cb882ba2fff64db2fe6edf47aa71124c37/KakaoTalk_20260120_175616285_27.jpg',
      'https://raw.githubusercontent.com/codud612/-/c5ed8cd3f90b296797711e6518d4a5ebda5d9f4e/KakaoTalk_20260120_175616285_29.jpg'
    ],
    quote: '생산 효율과 품질을 동시에 확보한 대량 생산 라인업입니다.'
  }
];

export const ExperienceSection: React.FC = () => {
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null);

  return (
    <div className="py-24" id="experience">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 mb-20">
        <h2 className="text-sm tracking-[0.4em] text-stone-400 uppercase mb-4">02. Experience</h2>
        <h3 className="text-5xl font-serif">Selected Works</h3>
      </div>
      
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {experiences.map((exp) => (
          <ExperienceCard 
            key={exp.id} 
            experience={exp} 
            onClick={() => setSelectedExp(exp)} 
          />
        ))}
      </div>

      <ExperienceModal 
        experience={selectedExp} 
        onClose={() => setSelectedExp(null)} 
      />
    </div>
  );
};