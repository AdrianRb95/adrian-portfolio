import React from 'react';
import { ArrowUpRight, Globe, Sparkles } from 'lucide-react';

export default function HeaderFloatingPill({ lang, setLang, t }) {
  const toggleLang = (target) => {
    setLang(target);
    try {
      localStorage.setItem('adrian_portfolio_lang', target);
    } catch (e) {}
  };

  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="pointer-events-auto max-w-5xl w-full flex items-center justify-between gap-3 px-3.5 sm:px-5 py-2.5 rounded-full bg-[#0B1017]/80 backdrop-blur-2xl border border-white/10 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.8)] chamfer-pill">
        
        {/* Monogram / Brand Identity */}
        <a 
          href="#" 
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-500 via-indigo-600 to-cyan-400 p-[1px] shadow-sm shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-150">
            <div className="w-full h-full rounded-full bg-[#0B1017] flex items-center justify-center font-mono font-black text-xs text-white">
              AR
            </div>
          </div>
          <div className="hidden sm:flex flex-col text-left">
            <span className="font-bold text-xs tracking-tight text-white group-hover:text-emerald-300 transition-colors">
              Adrián Rodríguez
            </span>
            <span className="text-[10px] font-mono text-slate-400 tracking-wide">
              Design Engineer
            </span>
          </div>
        </a>

        {/* Central Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-300">
          <a 
            href="#work" 
            className="hover:text-white transition-colors duration-150 flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            {t.nav.work}
          </a>
          <a 
            href="#stack" 
            className="hover:text-white transition-colors duration-150"
          >
            {t.nav.architecture}
          </a>
          <a 
            href="#craft" 
            className="hover:text-white transition-colors duration-150"
          >
            {t.nav.craft}
          </a>
        </nav>

        {/* Controls: Language + Status + Action */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Bilingual Switcher (ES / EN) */}
          <div className="flex items-center p-0.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono">
            <button
              onClick={() => toggleLang('es')}
              className={`px-2.5 py-0.5 rounded-full transition-all duration-150 btn-tactile ${
                lang === 'es' 
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              ES
            </button>
            <button
              onClick={() => toggleLang('en')}
              className={`px-2.5 py-0.5 rounded-full transition-all duration-150 btn-tactile ${
                lang === 'en' 
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>

          {/* Availability Status Badge */}
          <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{lang === 'es' ? 'DISPONIBLE' : 'AVAILABLE'}</span>
          </div>

          {/* Quick Contact CTA */}
          <a
            href="#contacto"
            className="px-3.5 py-1.5 rounded-full bg-white text-slate-950 hover:bg-slate-200 active:scale-95 text-xs font-bold transition-all duration-150 flex items-center gap-1 shadow-sm btn-tactile"
          >
            <span>{t.nav.talk}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

        </div>
      </div>
    </header>
  );
}
