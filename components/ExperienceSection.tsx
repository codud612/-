
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
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=1200&auto=format&fit=crop'
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
    image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1559181567-c3190ca9959b?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1569864358642-9d16197022c3?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1566121334905-172951a42318?q=80&w=1200&auto=format&fit=crop'
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
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519340333755-5c0d61a3ec75?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=1200&auto=format&fit=crop'
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
    image: 'https://images.unsplash.com/photo-1551443874-7667d1306307?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1551443874-7667d1306307?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1514066558159-fc8c737ef259?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop'
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
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1534620808146-d33bb39128b2?q=80&w=1200&auto=format&fit=crop'
    ],
    quote: '생산 효율과 품질을 동시에 확보한 대량 생산 라인업입니다.'
  }
];

export const ExperienceSection: React.FC = () => {
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null);

  return (
    <div className="py-24">
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
