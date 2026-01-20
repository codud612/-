
import React from 'react';

export const ContactSection: React.FC = () => {
  return (
    <div className="bg-[#1a1a1a] py-24 lg:py-40 text-white overflow-hidden relative" id="contact">
      {/* Background Image on the right half, lightly visible (opacity-20) */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full opacity-20 pointer-events-none z-0">
         <div 
           className="w-full h-full bg-cover bg-center" 
           style={{ backgroundImage: `url('https://raw.githubusercontent.com/codud612/-/dee48abf7c02e9973de9fec0d792f11f2c5a1ef6/KakaoTalk_20260120_175616285_05.jpg')` }}
         ></div>
         {/* Gradient overlay to blend with the dark left side */}
         <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/40 to-transparent"></div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left Column: Info */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="text-[10px] tracking-[0.4em] text-stone-500 uppercase mb-4">04. Connection</h2>
            <h3 className="text-5xl md:text-6xl font-serif mb-12">Get in touch</h3>
            <p className="text-stone-400 font-light leading-relaxed mb-16 max-w-md text-sm md:text-base">
              이채영 파티시에의 경력과 제품에 대해 궁금한 점이 있으시다면 언제든 연락주세요. 
              최상의 협업과 결과를 위해 노력하겠습니다.
            </p>

            <div className="space-y-12">
              <div className="group cursor-pointer">
                <p className="text-[9px] tracking-[0.3em] uppercase text-stone-500 mb-3 font-bold">Email</p>
                <a href="mailto:codud612@naver.com" className="text-xl md:text-3xl font-light hover:text-stone-400 transition-colors block border-b border-white/5 pb-2">
                  codud612@naver.com
                </a>
              </div>
              <div className="group cursor-pointer">
                <p className="text-[9px] tracking-[0.3em] uppercase text-stone-500 mb-3 font-bold">Phone</p>
                <a href="tel:010-8329-8201" className="text-xl md:text-3xl font-light hover:text-stone-400 transition-colors block border-b border-white/5 pb-2">
                  010. 8329. 8201
                </a>
              </div>
              <div className="group cursor-pointer">
                <p className="text-[9px] tracking-[0.3em] uppercase text-stone-500 mb-3 font-bold">Address</p>
                <p className="text-xl md:text-3xl font-light border-b border-white/5 pb-2">
                  (48925) 부산 중구 동광길111번길
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Message Form */}
          <div className="lg:col-span-7 flex items-center">
             <div className="w-full border border-white/10 p-8 lg:p-16 backdrop-blur-sm bg-black/20">
                <h4 className="text-[10px] tracking-[0.3em] font-bold uppercase mb-12 text-stone-400">Message Studio</h4>
                <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div className="space-y-3 border-b border-white/10 pb-3 group focus-within:border-white transition-colors">
                         <label className="text-[9px] uppercase tracking-widest text-stone-500 font-bold">Name</label>
                         <input type="text" className="w-full bg-transparent border-none outline-none focus:ring-0 py-2 font-light text-lg" placeholder="Your name" />
                      </div>
                      <div className="space-y-3 border-b border-white/10 pb-3 group focus-within:border-white transition-colors">
                         <label className="text-[9px] uppercase tracking-widest text-stone-500 font-bold">Subject</label>
                         <input type="text" className="w-full bg-transparent border-none outline-none focus:ring-0 py-2 font-light text-lg" placeholder="Service Inquiry" />
                      </div>
                   </div>
                   <div className="space-y-3 border-b border-white/10 pb-3 group focus-within:border-white transition-colors">
                      <label className="text-[9px] uppercase tracking-widest text-stone-500 font-bold">Message</label>
                      <textarea rows={5} className="w-full bg-transparent border-none outline-none focus:ring-0 py-2 font-light resize-none text-lg" placeholder="Tell me about your project..."></textarea>
                   </div>
                   <button className="w-full lg:w-fit px-16 py-5 bg-white text-black text-[10px] tracking-[0.4em] uppercase hover:bg-stone-200 transition-all font-bold">
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
