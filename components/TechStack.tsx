
import React from 'react';

// Using high-reliability raw SVG sources from jsdelivr for consistent loading
const ICON_DATA = [
  { name: 'Java', slug: 'java', source: 'https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/java.svg' },
  { name: 'Oracle', slug: 'oracle', source: 'https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/oracle.svg' },
  { name: 'HTML5', slug: 'html5', source: 'https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/html5.svg' },
  { name: 'CSS3', slug: 'css3', source: 'https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/css3.svg' },
  { name: 'Spring Boot', slug: 'springboot', source: 'https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/springboot.svg' },
  { name: 'React', slug: 'react', source: 'https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/react.svg' },
  { name: 'n8n', slug: 'n8n', source: 'https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/n8n.svg' },
  { name: 'Tailwind CSS', slug: 'tailwindcss', source: 'https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/tailwindcss.svg' },
  { name: 'MySQL', slug: 'mysql', source: 'https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/mysql.svg' },
  { name: 'PostgreSQL', slug: 'postgresql', source: 'https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/postgresql.svg' },
  { name: 'Next.js', slug: 'nextdotjs', source: 'https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/nextdotjs.svg' },
  { name: 'Express', slug: 'express', source: 'https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/express.svg' },
  { name: 'MongoDB', slug: 'mongodb', source: 'https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/mongodb.svg' },
  { name: 'OpenAI', slug: 'openai', source: 'https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/openai.svg' },
];

export const TechStack: React.FC = () => {
  return (
    <section className="py-24 border-t swiss-border relative overflow-hidden bg-transparent">
      {/* Header */}
      <div className="max-w-5xl mx-auto px-6 mb-12 text-center flex flex-col items-center gap-4">
        <h2 className="font-editorial uppercase text-5xl md:text-7xl text-white/20 tracking-tighter drop-shadow-md">
          01 / TechStack
        </h2>
      </div>

      {/* Marquee Section - Constrained width, masks removed to reveal icons fully */}
      <div className="max-w-4xl mx-auto relative py-8 px-6 overflow-hidden">
        <div className="relative flex whitespace-nowrap group">
          <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
            {[...ICON_DATA, ...ICON_DATA, ...ICON_DATA].map((icon, idx) => (
              <div 
                key={idx} 
                className="mx-4 md:mx-6 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-all duration-700 ease-out cursor-pointer transform hover:scale-125 hover:-translate-y-2"
                title={icon.name}
              >
                <img 
                  src={icon.source} 
                  alt={icon.name}
                  loading="lazy"
                  className="w-full h-full object-contain filter invert-white opacity-60 group-hover:opacity-40 transition-all duration-500 hover:!opacity-100 brightness-200 contrast-150 drop-shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.3333%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .invert-white {
          filter: invert(1) brightness(1) grayscale(1);
        }
      `}</style>
    </section>
  );
};
