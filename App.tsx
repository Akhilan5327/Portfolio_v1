import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { TechStack } from './components/TechStack';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('');

  // Update IST time every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // IST is UTC+5:30
      const istOffset = 5.5 * 60 * 60 * 1000;
      const istTime = new Date(now.getTime() + istOffset);
      
      const hours = istTime.getUTCHours().toString().padStart(2, '0');
      const minutes = istTime.getUTCMinutes().toString().padStart(2, '0');
      const seconds = istTime.getUTCSeconds().toString().padStart(2, '0');
      
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    };

    updateTime(); // Initial call
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalScroll) * 100);

      // Update active section based on scroll position
      const sections = ['hero', 'techstack', 'about', 'experience', 'projects', 'certifications', 'contact'];
      const sectionElements = sections.map(id => document.getElementById(id));
      
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section && section.getBoundingClientRect().top <= 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="relative min-h-screen w-full selection:bg-[#A0151E] selection:text-white">
      {/* Scroll Progress Indicator */}
      <div 
        className="fixed top-0 left-0 h-1 bg-[#A0151E] z-[120] transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Cinematic Grain Micro-Detail Overlay */}
      <div className="noise-overlay" />
      
      {/* Background Layer */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('https://image2url.com/r2/default/images/1769960992834-8e3447a6-a6b5-4e6b-8596-83909e6b209f.jpg')`,
            filter: 'contrast(1.1) saturate(1.1) blur(4px)',
            transform: 'scale(1.02)' 
          }}
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Navigation Component */}
      <Navigation activeSection={activeSection} />

      {/* IST Time Display - Right aligned, centered with social icons */}
      <div className="fixed top-20 md:top-24 right-3 md:right-7 z-[100] bg-black/60 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 flex flex-col items-center gap-1 hover:bg-black/80 transition-all duration-300">
        <span className="text-white font-mono-system text-lg md:text-xl font-bold tracking-wider">
          {currentTime}
        </span>
        <span className="text-white/60 text-[8px] uppercase tracking-[0.3em] font-mono-system">
          IST
        </span>
      </div>

      {/* Content Layer */}
      <div className="relative z-10">
        <div id="hero">
          <Hero />
        </div>
        <div id="techstack">
          <TechStack />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="certifications">
          <Certifications />
        </div>
        <div id="contact">
          <Contact />
        </div>
        
        <footer className="py-20 px-12 border-t swiss-border flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.4em] text-white/60 font-medium bg-black/40 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <span className="w-2 h-2 bg-[#A0151E]"></span>
            <span>&copy; 2025 Akhilan A</span>
          </div>
          <span className="mt-4 md:mt-0 italic opacity-70">Build With Passion</span>
          <span className="mt-4 md:mt-0">Grinding</span>
        </footer>
      </div>

      {/* Back to Top Button */}
      {scrollProgress > 20 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-[100] w-12 h-12 bg-[#A0151E] text-white rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl group"
          aria-label="Back to top"
        >
          <svg className="w-6 h-6 transform group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </main>
  );
};

export default App;