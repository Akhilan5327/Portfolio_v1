import React, { useState } from 'react';

interface NavigationProps {
  activeSection: string;
}

export const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'techstack', label: 'Tech Stack' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex fixed top-0 left-0 z-[110] p-12 flex-col gap-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`text-[10px] uppercase tracking-[0.3em] font-mono-system transition-all duration-300 text-left group ${
              activeSection === item.id ? 'text-[#A0151E]' : 'text-white/60 hover:text-white'
            }`}
            aria-label={`Navigate to ${item.label}`}
          >
            <span className="flex items-center gap-3">
              <span className={`w-8 h-[1px] transition-all duration-300 ${
                activeSection === item.id ? 'bg-[#A0151E] w-12' : 'bg-white/40 group-hover:w-10'
              }`} />
              {item.label}
            </span>
          </button>
        ))}
      </nav>

      {/* Mobile Navigation - Hamburger Menu */}
      <div className="md:hidden fixed top-0 left-0 z-[110] p-6">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-12 h-12 flex flex-col items-center justify-center gap-2 bg-black/80 backdrop-blur-md rounded-full border border-white/20 hover:border-[#A0151E] transition-all"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-[105] bg-black/95 backdrop-blur-xl transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-2xl uppercase tracking-[0.3em] font-editorial transition-all duration-300 transform ${
                activeSection === item.id ? 'text-[#A0151E] scale-110' : 'text-white hover:text-[#A0151E] hover:scale-105'
              }`}
              style={{
                animation: isMenuOpen ? `fadeInUp 0.5s ease-out ${index * 0.1}s both` : 'none'
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Social Links - Top Right */}
      <div className="fixed top-0 right-0 z-[110] p-6 md:p-12 flex gap-6 items-center">
        <a 
          href="https://x.com/theakhilan" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white/80 hover:text-[#A0151E] transition-all duration-500 hover:scale-110 active:scale-95 drop-shadow-md" 
          aria-label="X (Twitter)"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
        <a 
          href="https://www.linkedin.com/in/akhilan-a-7b31b825a/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white/80 hover:text-[#A0151E] transition-all duration-500 hover:scale-110 active:scale-95 drop-shadow-md" 
          aria-label="LinkedIn"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.5c1.55 0 3.4 1.01 3.4 3.85z"/>
          </svg>
        </a>
        <a 
          href="https://github.com/Akhilan5327" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white/80 hover:text-[#A0151E] transition-all duration-500 hover:scale-110 active:scale-95 drop-shadow-md" 
          aria-label="GitHub"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.292 24 17.81 24 12.5 24 5.87 18.63.5 12 .5z"/>
          </svg>
        </a>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};