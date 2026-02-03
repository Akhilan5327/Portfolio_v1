
import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { TechStack } from './components/TechStack';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';

const App: React.FC = () => {
  return (
    <main className="relative min-h-screen w-full selection:bg-[#A0151E] selection:text-white">
      {/* Cinematic Grain Micro-Detail Overlay */}
      <div className="noise-overlay" />
      
      {/* Background Layer: Light focus with a slight darkening overlay for text pop */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('https://image2url.com/r2/default/images/1769960992834-8e3447a6-a6b5-4e6b-8596-83909e6b209f.jpg')`,
            filter: 'contrast(1.1) saturate(1.1) blur(4px)',
            transform: 'scale(1.02)' 
          }}
        />
        {/* Subtle darkening overlay to help white text visibility */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Top Navigation / Social Links */}
      <nav className="fixed top-0 right-0 z-[110] p-8 md:p-12 flex gap-6 items-center">
        <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#A0151E] transition-all duration-500 hover:scale-110 active:scale-95 drop-shadow-md" aria-label="X (Twitter)">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#A0151E] transition-all duration-500 hover:scale-110 active:scale-95 drop-shadow-md" aria-label="LinkedIn">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.5c1.55 0 3.4 1.01 3.4 3.85z"/>
          </svg>
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#A0151E] transition-all duration-500 hover:scale-110 active:scale-95 drop-shadow-md" aria-label="GitHub">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.292 24 17.81 24 12.5 24 5.87 18.63.5 12 .5z"/>
          </svg>
        </a>
      </nav>

      {/* Content Layer */}
      <div className="relative z-10">
        <Hero />
        <TechStack />
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
        
        <footer className="py-20 px-12 border-t swiss-border flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.4em] text-white/60 font-medium bg-black/40 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <span className="w-2 h-2 bg-[#A0151E]"></span>
            <span>&copy; 2025 Akhilan A</span>
          </div>
          <span className="mt-4 md:mt-0 italic opacity-70">Precision through restraint</span>
          <span className="mt-4 md:mt-0">Systems Architect Portfolio</span>
        </footer>
      </div>
    </main>
  );
};

export default App;
