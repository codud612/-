
import React from 'react';

export const ContactSection: React.FC = () => {
  return (
    <div className="bg-stone-900 py-24 lg:py-40 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none hidden lg:block">
         <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('https://picsum.photos/id/102/800/800')` }}></div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-5">
            <h2 className="text-sm tracking-[0.4em] text-stone-500 uppercase mb-4">04. Connection</h2>
            <h3 className="text-5xl font-serif mb-10">Get in touch</h3>
            <p className="text-stone-400 font-light leading-relaxed mb-12 max-w-md">
              이채영 파티시에의 경력과 제품에 대해 궁금한 점이 있으시다면 언제든 연락주세요. 
              최상의 협업과 결과를 위해 노력하겠습니다.
            </p>

            <div className="space-y-8">
              <div className="group cursor-pointer">
                <p className="text-[10px] tracking-[0.3em] uppercase text-stone-500 mb-2">Email</p>
                <a href="mailto:codud612@naver.com" className="text-xl md:text-2xl font-light hover:text-stone-400 transition-colors">
                  codud612@naver.com
                </a>
              </div>
              <div className="group cursor-pointer">
                <p className="text-[10px] tracking-[0.3em] uppercase text-stone-500 mb-2">Phone</p>
                <a href="tel:010-8329-8201" className="text-xl md:text-2xl font-light hover:text-stone-400 transition-colors">
                  010. 8329. 8201
                </a>
              </div>
              <div className="group cursor-pointer">
                <p className="text-[10px] tracking-[0.3em] uppercase text-stone-500 mb-2">Address</p>
                <p className="text-xl md:text-2xl font-light">
                  (48925) 부산 중구 동광길111번길
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
             <div className="border border-stone-800 p-8 lg:p-12">
                <h4 className="text-xs tracking-[0.3em] font-bold uppercase mb-10 text-stone-400">Message Studio</h4>
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2 border-b border-stone-800 pb-2">
                         <label className="text-[10px] uppercase tracking-widest text-stone-500">Name</label>
                         <input type="text" className="w-full bg-transparent border-none outline-none focus:ring-0 py-2 font-light" placeholder="Your name" />
                      </div>
                      <div className="space-y-2 border-b border-stone-800 pb-2">
                         <label className="text-[10px] uppercase tracking-widest text-stone-500">Subject</label>
                         <input type="text" className="w-full bg-transparent border-none outline-none focus:ring-0 py-2 font-light" placeholder="Service Inquiry" />
                      </div>
                   </div>
                   <div className="space-y-2 border-b border-stone-800 pb-2">
                      <label className="text-[10px] uppercase tracking-widest text-stone-500">Message</label>
                      <textarea rows={4} className="w-full bg-transparent border-none outline-none focus:ring-0 py-2 font-light resize-none" placeholder="Tell me about your project..."></textarea>
                   </div>
                   <button className="w-full lg:w-fit px-12 py-5 bg-white text-black text-[10px] tracking-[0.3em] uppercase hover:bg-stone-200 transition-colors">
                      Send Message
                   </button>
                </form>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
