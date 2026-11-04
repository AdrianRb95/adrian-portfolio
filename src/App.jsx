import React, { useEffect, useState } from 'react';
import HeaderFloatingPill from './components/HeaderFloatingPill';
import HeroSection from './components/HeroSection';
import ProofOfWorkBento from './components/ProofOfWorkBento';
import ProjectModal from './components/ProjectModal';
import InteractivePlayground from './components/InteractivePlayground';
import TechStackSection from './components/TechStackSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';
import Mesh3DCanvas from './components/Mesh3DCanvas';
import { translations } from './i18n/translations';

export default function App() {
  const [mounted, setMounted] = useState(false);
  const [lang, setLang] = useState('es');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  useEffect(() => {
    setMounted(true);

    try {
      const savedLang = localStorage.getItem('adrian_portfolio_lang');
      if (savedLang === 'en' || savedLang === 'es') {
        setLang(savedLang);
      } else {
        const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
        if (browserLang.startsWith('en')) {
          setLang('en');
        } else {
          setLang('es');
        }
      }
    } catch (e) {
      setLang('es');
    }
  }, []);

  if (!mounted) return null;

  const t = translations[lang] || translations.es;

  return (
    <div className="relative min-h-screen bg-[#06090E] text-slate-100 font-sans selection:bg-emerald-500/20 selection:text-white">
      
      {/* 3D WebGL Shader Parallax Background */}
      <Mesh3DCanvas />

      {/* Cinematic noise overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-1 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Floating Tactical Header Pill */}
      <HeaderFloatingPill lang={lang} setLang={setLang} t={t} />

      {/* Main Container */}
      <main className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 flex flex-col gap-24 sm:gap-36 pb-20">
        
        {/* Hero Section */}
        <HeroSection t={t} />

        {/* Proof of Work Bento (The 6 Live Ventures) */}
        <ProofOfWorkBento 
          t={t} 
          onSelectCaseStudy={(proj) => setSelectedCaseStudy(proj)} 
        />

        {/* Philosophy & Emil Kowalski Interactive Playground */}
        <InteractivePlayground t={t} />

        {/* Tech Stack & Architecture Matrix */}
        <TechStackSection t={t} />

        {/* Contact & Venture Advisory CTA */}
        <ContactSection t={t} />

      </main>

      {/* Footer */}
      <FooterSection t={t} />

      {/* Deep Case Study Modal */}
      {selectedCaseStudy && (
        <ProjectModal 
          project={selectedCaseStudy} 
          onClose={() => setSelectedCaseStudy(null)} 
          t={t} 
        />
      )}

    </div>
  );
}
