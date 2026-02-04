import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center text-center px-6">
      <div className="max-w-7xl w-full">
        {/* Typographic Centerpiece */}
        <div className="mb-8 group cursor-default">
          <h1 className="font-editorial uppercase select-none transition-all duration-1000">
            <span className="text-white text-[15vw] md:text-[12vw] block font-bold fade-in [animation-delay:300ms] transition-all duration-700 group-hover:tracking-tight group-hover:contrast-150 drop-shadow-2xl">
              Akhilan A
            </span>
          </h1>
        </div>

        {/* Professional Descriptor */}
        <div className="fade-in [animation-delay:800ms] border-t border-white/20 pt-10 inline-block">
          <p className="text-[#A0151E] font-editorial uppercase text-sm md:text-lg tracking-[0.5em] font-medium drop-shadow-md">
            Associate Software Engineer <span className="mx-6 text-white/40">/</span> FullStack
          </p>
        </div>

        {/* Quick Links */}
        <div className="mt-16 flex flex-wrap gap-6 justify-center fade-in [animation-delay:1000ms]">
          <a
            href="#projects"
            className="group px-8 py-4 border border-white/20 hover:border-[#A0151E] rounded-full transition-all duration-300 hover:bg-[#A0151E]/10"
          >
            <span className="text-[11px] uppercase tracking-[0.3em] text-white/80 group-hover:text-[#A0151E] font-mono-system">
              View Projects
            </span>
          </a>
          <a
            href="#contact"
            className="group px-8 py-4 bg-[#A0151E] hover:bg-[#801118] rounded-full transition-all duration-300 hover:scale-105"
          >
            <span className="text-[11px] uppercase tracking-[0.3em] text-white font-mono-system">
              Get in Touch
            </span>
          </a>
        </div>
      </div>

      {/* Swiss Vertical Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 fade-in [animation-delay:1200ms]">
        <span className="text-[10px] uppercase tracking-[0.6em] text-white/60 font-mono-system drop-shadow-sm">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[#A0151E] origin-top animate-[scrollDown_2.5s_infinite]" />
        </div>
      </div>
      
      <style>{`
        @keyframes scrollDown {
          0% { transform: scaleY(0); transform-origin: top; }
          45% { transform: scaleY(1); transform-origin: top; }
          55% { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
      `}</style>
    </section>
  );
};