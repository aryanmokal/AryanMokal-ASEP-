
import React, { useState, useEffect } from 'react';

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<'slide' | 'center' | 'zoom' | 'text' | 'fade'>('slide');

  useEffect(() => {
    const timer1 = setTimeout(() => setStage('center'), 1000);
    const timer2 = setTimeout(() => setStage('zoom'), 2500);
    const timer3 = setTimeout(() => setStage('text'), 4000);
    const timer4 = setTimeout(() => setStage('fade'), 6000);
    const timer5 = setTimeout(() => onComplete(), 7000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-[#020617] transition-all duration-1000 ${stage === 'fade' ? 'opacity-0' : 'opacity-100'}`}>
      
      {/* Metallic Credit Card - Color matches the Persian Blue accent theme */}
      <div 
        className={`relative w-[380px] h-[240px] rounded-3xl p-8 text-white shadow-2xl transition-all duration-[1500ms] ease-in-out transform
          ${stage === 'slide' ? 'translate-x-[-150vw] rotate-[-10deg]' : ''}
          ${stage === 'center' ? 'translate-x-0 rotate-0 scale-100' : ''}
          ${stage === 'zoom' ? 'scale-[20] rotate-0' : ''}
          ${stage === 'text' || stage === 'fade' ? 'hidden' : ''}
          metallic-gradient
        `}
      >
        <div className="card-shine rounded-3xl" />
        <div className="flex justify-between items-start mb-10">
          <span className="text-2xl font-black tracking-widest opacity-95">ASEP</span>
          <div className="flex -space-x-4 opacity-90">
            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm" />
            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm" />
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="text-2xl tracking-[0.25em] font-mono font-medium">5412 7500 1234 4021</div>
          <div className="flex justify-between items-end">
            <div>
              <div className="text-[11px] uppercase opacity-50 mb-1 font-bold tracking-widest">Card Holder</div>
              <div className="text-base tracking-wider font-semibold">PREMIUM USER</div>
            </div>
            <div>
              <div className="text-[11px] uppercase opacity-50 mb-1 font-bold tracking-widest">Expires</div>
              <div className="text-base font-semibold">12/30</div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Introduction Text */}
      <div className={`absolute flex flex-col items-center justify-center transition-all duration-1000 ${stage === 'text' ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
         <span className={`text-[#3b82f6] transition-all duration-1000 transform font-bold tracking-widest
           ${stage === 'text' ? '-translate-y-16 -translate-x-20 text-xl' : 'text-5xl'}
         `}>
           LOANGUARD.COM
         </span>
         <h1 className="text-7xl font-black text-white tracking-tighter">LoanGuard</h1>
         <p className="mt-6 text-slate-400 font-medium text-lg tracking-wide uppercase">Secure • Transparent • Simple</p>
         
         <div className="mt-12 flex space-x-2">
            <div className="w-2 h-2 rounded-full bg-blue-600 animate-bounce" style={{animationDelay: '0ms'}} />
            <div className="w-2 h-2 rounded-full bg-blue-600 animate-bounce" style={{animationDelay: '150ms'}} />
            <div className="w-2 h-2 rounded-full bg-blue-600 animate-bounce" style={{animationDelay: '300ms'}} />
         </div>
      </div>

    </div>
  );
};

export default IntroAnimation;
