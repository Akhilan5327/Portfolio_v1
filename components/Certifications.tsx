import React from 'react';

const CERTS = [
  { 
    title: 'AWS Data Engineer', 
    body: 'Amazon Web Services · Associate Level Certification',
    badge: 'ASSOCIATE',
    code: 'AWS-DE',
    // Using a reliable AWS logo source
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg'
  },
  { 
    title: 'Oracle APEX Cloud Certified Developer Professional', 
    body: 'Oracle University · Professional Level Certification',
    badge: 'PROFESSIONAL',
    code: 'ORCL-APX',
    // Using a reliable Oracle logo source
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg'
  }
];

export const Certifications: React.FC = () => {
  return (
    <section className="py-40 px-6 md:px-12 max-w-5xl mx-auto border-t swiss-border text-center">
      <div className="mb-24 flex flex-col items-center gap-6">
        <h2 className="font-editorial uppercase text-6xl md:text-8xl text-white/20 tracking-tighter leading-none drop-shadow-md">
          05 / Certifications
        </h2>
        <span className="text-[10px] uppercase tracking-[0.5em] text-[#A0151E] font-mono-system font-bold">
          Validated Expertise
        </span>
      </div>

      <div className="flex flex-col items-center gap-12 w-full">
        {CERTS.map((cert, i) => (
          <div key={i} className="group relative w-full max-w-4xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-700 py-16 px-8 md:px-16 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 rounded-2xl shadow-xl">
            
            {/* Certification Details */}
            <div className="text-left flex-1 order-2 md:order-1">
              <span className="text-[10px] font-mono-system text-[#A0151E] tracking-[0.4em] mb-4 block opacity-70 group-hover:opacity-100 transition-opacity">
                ID // {cert.code}
              </span>
              <h4 className="font-editorial uppercase text-3xl md:text-5xl mb-4 text-white group-hover:italic transition-all tracking-tight leading-tight drop-shadow-lg">
                {cert.title}
              </h4>
              <p className="text-[11px] uppercase tracking-[0.3em] text-white/60 font-bold leading-relaxed max-w-md drop-shadow-sm">
                {cert.body}
              </p>
              
              <div className="mt-8">
                <span className="inline-block text-[9px] font-mono-system text-white/70 border border-white/20 px-3 py-1 uppercase tracking-[0.3em] group-hover:border-[#A0151E] group-hover:text-[#A0151E] group-hover:bg-[#A0151E]/10 transition-all">
                  Rank: {cert.badge}
                </span>
              </div>
            </div>

            {/* Visual Logo - High Contrast White Circular "Medal" Style */}
            <div className="relative shrink-0 order-1 md:order-2 group-hover:scale-110 transition-transform duration-700">
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-white flex items-center justify-center p-8 md:p-12 shadow-2xl shadow-black/80 overflow-hidden relative z-10 border-[6px] border-white">
                <img 
                  src={cert.logoUrl} 
                  alt={`${cert.title} Logo`} 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    console.log(`Failed to load certification logo: ${cert.code}`);
                    e.currentTarget.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y="50" font-size="40" fill="%23A0151E">' + cert.code + '</text></svg>';
                  }}
                />
              </div>
              
              {/* Decorative depth elements */}
              <div className="absolute -inset-4 border border-[#A0151E]/0 group-hover:border-[#A0151E]/20 rounded-full transition-all duration-700 -z-0" />
              <div className="absolute inset-0 bg-[#A0151E]/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />
            </div>

            {/* Background Polish Elements */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#A0151E]/60 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-1000" />
            <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50" />
            
            <div className="absolute top-1/2 -translate-y-1/2 left-4 opacity-[0.05] font-editorial text-8xl pointer-events-none select-none group-hover:opacity-[0.1] transition-opacity">
              {i + 1}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};