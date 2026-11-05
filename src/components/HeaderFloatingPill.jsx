import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function HeaderFloatingPill({ lang, setLang, t }) {
  const toggleLang = (target) => {
    setLang(target);
    try {
      localStorage.setItem('adrian_portfolio_lang', target);
    } catch (e) {}
  };

  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="pointer-events-auto max-w-5xl w-full flex items-center justify-between gap-3 px-3.5 sm:px-5 py-2.5 rounded-full bg-[#0B1017]/85 backdrop-blur-2xl border border-white/10 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.8)] chamfer-pill">
        
        {/* Monogram / Brand Identity */}
        <a 
          href="#" 
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-8 h-8 rounded-full bg-white/10 p-[1px] border border-white/15 group-hover:border-white/30 transition-all duration-150">
            <div className="w-full h-full rounded-full bg-[#0B1017] flex items-center justify-center font-mono font-black text-xs text-zinc-100">
              AR
            </div>
          </div>
          <div className="hidden sm:flex flex-col text-left">
            <span className="font-bold text-xs tracking-tight text-white group-hover:text-zinc-200 transition-colors">
              Adrián Rodríguez
            </span>
            <span className="text-[10px] font-mono text-zinc-400 tracking-wide">
              Design Engineer
            </span>
          </div>
        </a>

        {/* Central Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-zinc-400">
          <a 
            href="#work" 
            className="hover:text-white transition-colors duration-150 flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            {t.nav.work}
          </a>
          <a 
            href="#craft" 
            className="hover:text-white transition-colors duration-150"
          >
            {t.nav.craft}
          </a>
          <a 
            href="#stack" 
            className="hover:text-white transition-colors duration-150"
          >
            {t.nav.architecture}
          </a>
        </nav>

        {/* Controls: Language + Status + Action */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Bilingual Switcher (ES / EN) - High-end monochromatic */}
          <div className="flex items-center p-0.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono">
            <button
              onClick={() => toggleLang('es')}
              className={`px-2.5 py-0.5 rounded-full transition-all duration-150 btn-tactile ${
                lang === 'es' 
                  ? 'bg-zinc-200 text-zinc-950 font-bold shadow-sm' 
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              ES
            </button>
            <button
              onClick={() => toggleLang('en')}
              className={`px-2.5 py-0.5 rounded-full transition-all duration-150 btn-tactile ${
                lang === 'en' 
                  ? 'bg-zinc-200 text-zinc-950 font-bold shadow-sm' 
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>

          {/* Availability Status Badge */}
          <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[10px] font-mono text-zinc-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>{lang === 'es' ? 'DISPONIBLE' : 'AVAILABLE'}</span>
          </div>

          {/* Quick Contact CTA */}
          <a
            href="#contacto"
            className="px-3.5 py-1.5 rounded-full bg-zinc-100 text-zinc-950 hover:bg-white active:scale-95 text-xs font-bold transition-all duration-150 flex items-center gap-1 shadow-sm btn-tactile"
          >
            <span>{t.nav.talk}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

        </div>
      </div>
    </header>
  );
}
