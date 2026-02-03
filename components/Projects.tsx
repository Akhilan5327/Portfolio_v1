
import React from 'react';

const PROJECTS = [
  { 
    id: '01', 
    title: 'Automated Appointment Reminder Platform', 
    subtitle: 'WhatsApp Integration System',
    year: '2025',
    description: 'A robust Reminder System that autonomously monitors appointment schedules and dispatches personalized notifications via WhatsApp, ensuring timely engagement based on individual customer parameters.',
    tech: ['Node.js', 'Express', 'WhatsApp-web.js', 'Multer'],
    link: 'https://github.com' // Replace with actual link
  }
];

export const Projects: React.FC = () => {
  return (
    <section className="py-40 px-6 md:px-12 max-w-5xl mx-auto border-t swiss-border">
      {/* Section Header */}
      <div className="flex flex-col items-center mb-32 gap-6 text-center">
        <h2 className="font-editorial uppercase text-6xl text-white/25 tracking-tighter drop-shadow-md">
          04 / Projects
        </h2>
        <span className="text-[10px] uppercase tracking-[0.5em] text-[#A0151E] font-mono-system font-bold">
          Technical Ventures
        </span>
      </div>

      <div className="flex flex-col gap-32">
        {PROJECTS.map((project) => (
          <div key={project.id} className="grid grid-cols-1 md:grid-cols-12 gap-12 group relative">
            
            {/* Project Header - ID and Year */}
            <div className="md:col-span-3 flex flex-col items-start gap-4">
              <span className="font-mono-system text-xs text-[#A0151E] tracking-[0.4em] font-bold">
                PROJ_{project.id}
              </span>
              <span className="font-mono-system text-[10px] text-white/60 uppercase tracking-[0.3em] group-hover:text-white transition-colors drop-shadow-sm">
                Fiscal Year // {project.year}
              </span>
              <div className="w-12 h-[1px] bg-white/20 group-hover:w-full group-hover:bg-[#A0151E] transition-all duration-1000"></div>
            </div>

            {/* Project Content */}
            <div className="md:col-span-9 flex flex-col gap-10">
              <div className="flex flex-col gap-2">
                <h3 className="font-editorial uppercase text-5xl md:text-7xl text-white tracking-tighter leading-none group-hover:italic transition-all duration-700 drop-shadow-lg">
                  {project.title}
                </h3>
                <p className="text-xs uppercase tracking-[0.4em] text-white/60 mt-4 font-bold drop-shadow-sm">
                  {project.subtitle}
                </p>
              </div>

              <div className="flex flex-col md:flex-row gap-12">
                <div className="flex-1">
                  <p className="text-white/80 leading-relaxed text-sm md:text-lg max-w-xl transition-colors duration-500 drop-shadow-sm">
                    {project.description}
                  </p>
                </div>
                
                {/* Tech Stack Column */}
                <div className="flex flex-col gap-4 min-w-[140px]">
                  <span className="text-[10px] font-mono-system uppercase tracking-[0.3em] text-[#A0151E]">Stack</span>
                  <div className="flex flex-wrap md:flex-col gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-[11px] uppercase tracking-[0.15em] text-white/60 font-bold drop-shadow-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-4">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 group/btn"
                >
                  <span className="text-[10px] font-mono-system uppercase tracking-[0.5em] text-white/80 group-hover/btn:text-[#A0151E] transition-colors drop-shadow-sm">
                    View on GitHub
                  </span>
                  <div className="w-8 h-[1px] bg-white/40 group-hover/btn:w-16 group-hover/btn:bg-[#A0151E] transition-all duration-500"></div>
                </a>
              </div>
            </div>

            {/* Hover Background Mask */}
            <div className="absolute -inset-x-6 -inset-y-12 bg-white/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 pointer-events-none rounded-xl"></div>
          </div>
        ))}
      </div>
    </section>
  );
};
