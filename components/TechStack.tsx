import React from 'react';

// Using alternative sources for better reliability
const ICON_DATA = [
  { 
    name: 'Java', 
    slug: 'java', 
    // Using devicon for Java which is more reliable
    source: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg'
  },
  { 
    name: 'Oracle', 
    slug: 'oracle',
    // Using devicon for Oracle
    source: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg'
  },
  { 
    name: 'HTML5', 
    slug: 'html5', 
    source: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg'
  },
  { 
    name: 'CSS3', 
    slug: 'css3', 
    source: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg'
  },
  { 
    name: 'Spring Boot', 
    slug: 'springboot', 
    source: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg'
  },
  { 
    name: 'React', 
    slug: 'react', 
    source: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'
  },
  { 
    name: 'Tailwind CSS', 
    slug: 'tailwindcss', 
    source: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'
  },
  { 
    name: 'MySQL', 
    slug: 'mysql', 
    source: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg'
  },
  { 
    name: 'PostgreSQL', 
    slug: 'postgresql', 
    source: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg'
  },
  { 
    name: 'Next.js', 
    slug: 'nextdotjs', 
    source: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg'
  },
  { 
    name: 'Express', 
    slug: 'express', 
    source: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg'
  },
  { 
    name: 'MongoDB', 
    slug: 'mongodb', 
    source: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg'
  },
  { 
    name: 'Node.js', 
    slug: 'nodejs', 
    source: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg'
  },
  { 
    name: 'TypeScript', 
    slug: 'typescript', 
    source: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg'
  },
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

      {/* Marquee Section */}
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
                  className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-500 drop-shadow-lg"
                  onError={(e) => {
                    // Fallback if image fails to load
                    console.log(`Failed to load icon: ${icon.name}`);
                  }}
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
      `}</style>
    </section>
  );
};