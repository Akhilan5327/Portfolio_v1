
import React from 'react';

const EXPERIENCE = [
  {
    company: 'Hexaware Technologies',
    role: 'Associate Software Engineer',
    start: 'July 2025',
    end: 'Present',
    description: [
      'Developed backend features using Oracle APEX and managed database logic.',
      'Built and integrated REST APIs with PLSQL, Java, Spring Boot, and React frontend.',
      'Used Git for version control, merging code and managing repositories.'
    ]
  },
  {
    company: 'InnovistAi Solutions Pvt Ltd',
    role: 'AI Engineer',
    start: 'April 2025',
    end: 'June 2025',
    description: [
      'Built automation solutions using LLM APIs, Google Cloud APIs, n8n, and Docker.',
      'Developed backend services with Node.js, Express.js, and managed code with Git.',
      'Explored AI-assisted development through vibe coding with ChatGPT and Claude AI.'
    ]
  }
];

export const Experience: React.FC = () => {
  return (
    <section className="py-40 px-6 md:px-12 max-w-5xl mx-auto border-t swiss-border">
      {/* Section Header */}
      <div className="flex flex-col items-center mb-32 gap-6 text-center">
        <h2 className="font-editorial uppercase text-6xl text-white/25 tracking-tighter drop-shadow-md">
          03 / EXPERIENCE
        </h2>
      </div>

      <div className="flex flex-col gap-32">
        {EXPERIENCE.map((job, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-12 relative group">
            
            {/* Vertical Date Column - Cinematic Stack */}
            <div className="md:col-span-2 flex md:flex-col items-center md:items-start gap-4">
              <div className="flex flex-col items-center md:items-start">
                <span className="text-[10px] font-mono-system uppercase tracking-[0.3em] text-white/50 group-hover:text-white transition-colors duration-500 whitespace-nowrap drop-shadow-sm">
                  {job.start}
                </span>
                
                {/* Architectural Line */}
                <div className="my-4 w-[1px] h-16 md:h-24 bg-white/20 group-hover:bg-[#A0151E] transition-all duration-700 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[#A0151E] translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-[1.5s] ease-in-out" />
                </div>

                <span className="text-[10px] font-mono-system uppercase tracking-[0.3em] text-white/50 group-hover:text-[#A0151E] transition-colors duration-500 whitespace-nowrap drop-shadow-sm">
                  {job.end}
                </span>
              </div>
            </div>

            {/* Main Content Body */}
            <div className="md:col-span-10 flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <h3 className="font-editorial uppercase text-5xl md:text-8xl text-white tracking-tighter leading-[0.85] transition-all duration-700 group-hover:pl-6 drop-shadow-lg">
                  {job.company}
                </h3>
                <div className="flex items-center gap-6 mt-2">
                   <div className="w-12 h-[1px] bg-[#A0151E]/60 group-hover:w-20 transition-all duration-700"></div>
                   <span className="text-xs uppercase tracking-[0.6em] text-white/60 font-bold group-hover:text-white transition-colors drop-shadow-sm">
                    {job.role}
                  </span>
                </div>
              </div>

              <ul className="flex flex-col gap-6 max-w-2xl">
                {job.description.map((item, i) => (
                  <li key={i} className="relative text-white/70 leading-relaxed text-sm md:text-base pl-8 transition-all duration-500">
                    <span className="absolute left-0 top-3 w-4 h-[1px] bg-white/40 group-hover:bg-[#A0151E] transition-colors duration-700"></span>
                    <span className="group-hover:text-white transition-colors duration-700 block drop-shadow-sm">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Minimalist divider between items */}
            {index !== EXPERIENCE.length - 1 && (
              <div className="absolute -bottom-16 left-0 w-full h-[1px] bg-white/10" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
