
import React from 'react';

export const About: React.FC = () => {
  return (
    <section className="py-40 px-6 md:px-12 max-w-5xl mx-auto border-t swiss-border text-center">
      <div className="flex flex-col items-center gap-16">
        <div className="flex flex-col items-center gap-4">
          <h2 className="font-editorial uppercase text-6xl text-white/30 tracking-tighter drop-shadow-md">
            02 / ABOUT
          </h2>
        </div>

        <p className="text-2xl md:text-5xl font-medium leading-[1.2] text-white/70 transition-all duration-1000 max-w-4xl tracking-tight drop-shadow-sm">
          Hi, I'm <span className="text-white font-editorial uppercase tracking-normal">Akhilan</span>, an 
          <span className="text-white/90"> Associate Software Engineer</span> who loves turning complex ideas into 
          <span className="text-[#A0151E] transition-colors duration-500 font-semibold"> functional solutions</span>. 
          <br /><br />
          I build projects that solve problems, explore emerging tech, and constantly push the boundaries of my knowledge. 
          <span className="block mt-8 italic text-white/80">
            Curious, creative, and driven—
          </span>
          I'm always ready to create something <span className="relative inline-block group cursor-default text-white">
            impactful
            <span className="absolute bottom-2 left-0 w-full h-[3px] bg-[#A0151E] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></span>
          </span>.
        </p>

        <div className="w-16 h-[1px] bg-[#A0151E] opacity-70"></div>
      </div>
    </section>
  );
};
