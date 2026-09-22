import React, { useEffect, useState } from 'react';
import { 
  Settings, 
  Code2, 
  Database, 
  Workflow, 
  Mail, 
  Cpu, 
  Layers, 
  Server, 
  Check, 
  Copy, 
  ArrowRight,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  FileSpreadsheet,
  Terminal,
  Network,
  Truck,
  DollarSign,
  Boxes,
  Building2,
  CheckCircle2,
  ChevronRight,
  Globe
} from 'lucide-react';
import Mesh3DCanvas from './components/Mesh3DCanvas';
import SpotlightCard from './components/SpotlightCard';
import AutomationCalculator from './components/AutomationCalculator';
import ScrollReveal from './components/ScrollReveal';
import { translations } from './i18n/translations';

const EMAIL = 'adrb.95@hotmail.com';

export default function App() {
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [lang, setLang] = useState('es');

  useEffect(() => {
    setMounted(true);

    // Auto-detect user browser language (e.g. clients in USA, Canada or Mexico/LatAm)
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

  const toggleLanguage = (newLang) => {
    setLang(newLang);
    try {
      localStorage.setItem('adrian_portfolio_lang', newLang);
    } catch (e) {}
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  if (!mounted) return null;

  const t = translations[lang] || translations.es;

  const getVerticalIcon = (id) => {
    switch (id) {
      case 'logistica':
        return <Truck className="w-5 h-5 text-cyan-400" />;
      case 'finanzas':
        return <DollarSign className="w-5 h-5 text-emerald-400" />;
      case 'operaciones':
        return <Boxes className="w-5 h-5 text-indigo-400" />;
      case 'software':
        return <Building2 className="w-5 h-5 text-purple-400" />;
      default:
        return <Boxes className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-indigo-500/30 selection:text-white">
      
      {/* 3D WebGL Mesh Shader Canvas (Interactive to cursor and scroll parallax) */}
      <Mesh3DCanvas />

      {/* Cinematic noise texture */}
      <div 
        className="fixed inset-0 pointer-events-none z-1 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* HEADER / NAVIGATION */}
      <header className="sticky top-0 z-50 w-full px-4 sm:px-8 py-3.5 backdrop-blur-xl bg-slate-950/50 border-b border-white/[0.06] transition-all">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          
          {/* Logo / Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-500 flex items-center justify-center font-mono font-black text-sm text-white shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform duration-200">
              AR
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bold text-sm tracking-tight text-white group-hover:text-indigo-200 transition-colors">
                Adrián Ramírez
              </span>
              <span className="text-[10px] font-mono text-slate-400">
                {t.nav.role}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-medium text-slate-300">
            <a href="#soluciones" className="hover:text-white transition-colors">{t.nav.solutions}</a>
            <a href="#sectores" className="hover:text-white transition-colors">{t.nav.sectors}</a>
            <a href="#calculadora" className="hover:text-white transition-colors">{t.nav.calculator}</a>
            <a href="#stack" className="hover:text-white transition-colors">{t.nav.stack}</a>
          </nav>

          {/* Language Selector & CTA */}
          <div className="flex items-center gap-3">
            
            {/* Bilingual Switcher (ES / EN) */}
            <div className="flex items-center rounded-xl p-1 bg-white/[0.04] border border-white/10 text-xs font-mono">
              <button
                onClick={() => toggleLanguage('es')}
                className={`px-2.5 py-1 rounded-lg transition-all duration-200 ${
                  lang === 'es' 
                    ? 'bg-indigo-600 text-white font-bold shadow-md shadow-indigo-600/30' 
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Español"
              >
                ES
              </button>
              <button
                onClick={() => toggleLanguage('en')}
                className={`px-2.5 py-1 rounded-lg transition-all duration-200 ${
                  lang === 'en' 
                    ? 'bg-indigo-600 text-white font-bold shadow-md shadow-indigo-600/30' 
                    : 'text-slate-400 hover:text-white'
                }`}
                title="English (US/CA)"
              >
                EN
              </button>
            </div>

            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="hidden md:inline">{t.nav.available}</span>
            </div>

            <a
              href="#contacto"
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 active:scale-95 border border-white/10 text-xs font-semibold text-white transition-all duration-150 shadow-sm"
            >
              {t.nav.startChat}
            </a>

          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-28 flex flex-col gap-32 md:gap-44">

        {/* HERO SECTION */}
        <section className="flex flex-col items-center text-center pt-6 md:pt-14 gap-8">
          <ScrollReveal direction="up" delay={0}>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-950/40 backdrop-blur-xl text-xs font-mono text-indigo-300 shadow-xl shadow-indigo-950/50">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>{t.hero.badge}</span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100}>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[1.04] text-white">
              {t.hero.titleLine1} <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-cyan-200 to-indigo-400">
                {t.hero.titleLine2}
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <p className="text-lg sm:text-2xl text-slate-300 max-w-3xl font-light leading-relaxed">
              {t.hero.description}
            </p>
          </ScrollReveal>

          {/* Action buttons */}
          <ScrollReveal direction="up" delay={300}>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
              <a 
                href="#contacto"
                className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-white text-slate-950 font-bold text-sm sm:text-base hover:scale-[1.03] active:scale-[0.98] hover:bg-indigo-50 transition-all duration-200 shadow-[0_0_50px_-10px_rgba(255,255,255,0.4)]"
              >
                <span>{t.hero.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2.5 px-6 py-4 rounded-2xl border border-white/10 bg-slate-900/60 hover:bg-white/10 active:scale-[0.98] text-slate-200 font-mono text-sm backdrop-blur-xl transition-all duration-200"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
                <span>{copied ? t.hero.copySuccess : EMAIL}</span>
              </button>
            </div>
          </ScrollReveal>

          {/* Metrics Quick Strip */}
          <ScrollReveal direction="up" delay={400} className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl mx-auto mt-10 pt-8 border-t border-white/[0.08]">
              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-left">
                <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">{t.hero.metrics.efficiency.label}</div>
                  <div className="text-sm font-semibold text-white">{t.hero.metrics.efficiency.value}</div>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-left">
                <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">{t.hero.metrics.reliability.label}</div>
                  <div className="text-sm font-semibold text-white">{t.hero.metrics.reliability.value}</div>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-left">
                <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                  <Workflow className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">{t.hero.metrics.connectivity.label}</div>
                  <div className="text-sm font-semibold text-white">{t.hero.metrics.connectivity.value}</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </section>

        {/* MULTI-SECTOR EXPANDED SECTION */}
        <section id="sectores" className="flex flex-col gap-12">
          
          <ScrollReveal direction="up" delay={0}>
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
                  <Boxes className="w-3.5 h-3.5" />
                  {t.sectors.tag}
                </div>
                <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                  {t.sectors.title}
                </h2>
              </div>
              <p className="text-slate-400 text-sm sm:text-base max-w-md">
                {t.sectors.subtitle}
              </p>
            </div>
          </ScrollReveal>

          {/* Elevated Interactive Spotlight Cards with 3D Tilt */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {t.sectors.items.map((vertical, idx) => (
              <ScrollReveal key={vertical.id} direction="up" delay={idx * 100}>
                <SpotlightCard 
                  className="p-8 sm:p-10 flex flex-col justify-between gap-8 border border-white/[0.08]"
                  spotlightColor={vertical.color === 'cyan' ? 'rgba(6, 182, 212, 0.22)' : vertical.color === 'emerald' ? 'rgba(16, 185, 129, 0.22)' : vertical.color === 'indigo' ? 'rgba(99, 102, 241, 0.22)' : 'rgba(168, 85, 247, 0.22)'}
                >
                  <div className="flex flex-col gap-6">
                    
                    {/* Card Header */}
                    <div className="flex items-center justify-between gap-4">
                      <div className="w-13 h-13 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center p-3 shadow-inner">
                        {getVerticalIcon(vertical.id)}
                      </div>
                      <span className="text-xs font-mono px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-slate-300">
                        {vertical.tag}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                        {vertical.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {vertical.subtitle}
                      </p>
                    </div>

                    {/* Bullet Points */}
                    <ul className="flex flex-col gap-2.5 pt-4 border-t border-white/[0.08] text-xs sm:text-sm text-slate-300">
                      {vertical.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                  </div>

                  {/* Simulated Telemetry / Real-Time Micro-Widget inside tile */}
                  <div className="p-4 rounded-2xl bg-slate-900/90 border border-white/[0.08] flex flex-col gap-2 font-mono text-xs">
                    <div className="flex items-center justify-between text-[11px] text-slate-400 pb-2 border-b border-white/[0.06]">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span className="text-slate-300 font-semibold">{vertical.badge}</span>
                      </div>
                      <span className="text-emerald-400 font-bold">{vertical.metric}</span>
                    </div>
                    <div className="text-slate-300 text-[11px] truncate flex items-center gap-1.5">
                      <ChevronRight className="w-3 h-3 text-indigo-400 shrink-0" />
                      <span>{vertical.line1}</span>
                    </div>
                    <div className="text-slate-400 text-[11px] truncate flex items-center gap-1.5">
                      <ChevronRight className="w-3 h-3 text-cyan-400 shrink-0" />
                      <span>{vertical.line2}</span>
                    </div>
                  </div>

                </SpotlightCard>
              </ScrollReveal>
            ))}
          </div>

        </section>

        {/* CORE SERVICES & ARCHITECTURE BENTO */}
        <section id="soluciones" className="flex flex-col gap-12">
          
          <ScrollReveal direction="up" delay={0}>
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-indigo-400 mb-2">
                  {t.solutions.tag}
                </div>
                <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                  {t.solutions.title}
                </h2>
              </div>
              <p className="text-sm text-slate-400 max-w-md">
                {t.solutions.subtitle}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Bento 1: Automation (Span 2) */}
            <ScrollReveal direction="up" delay={100} className="md:col-span-2">
              <SpotlightCard className="p-8 sm:p-10 h-full" spotlightColor="rgba(99, 102, 241, 0.2)">
                <div className="flex flex-col justify-between h-full gap-8">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6">
                      <Settings className="w-7 h-7 text-indigo-400" />
                    </div>
                    <div className="text-xs font-mono uppercase text-indigo-400 mb-2">{t.solutions.card1.tag}</div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                      {t.solutions.card1.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                      {t.solutions.card1.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-white/[0.08] text-xs text-slate-300">
                    {t.solutions.card1.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </ScrollReveal>

            {/* Bento 2: ERP Integration */}
            <ScrollReveal direction="up" delay={200}>
              <SpotlightCard className="p-8 sm:p-10 h-full" spotlightColor="rgba(6, 182, 212, 0.2)">
                <div className="flex flex-col justify-between h-full gap-8">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6">
                      <Workflow className="w-7 h-7 text-cyan-400" />
                    </div>
                    <div className="text-xs font-mono uppercase text-cyan-400 mb-2">{t.solutions.card2.tag}</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                      {t.solutions.card2.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed text-sm">
                      {t.solutions.card2.description}
                    </p>
                  </div>

                  <div className="text-xs font-mono text-cyan-300/90 bg-cyan-950/40 p-3.5 rounded-xl border border-cyan-500/20">
                    {t.solutions.card2.badge}
                  </div>
                </div>
              </SpotlightCard>
            </ScrollReveal>

            {/* Bento 3: Custom Software */}
            <ScrollReveal direction="up" delay={300}>
              <SpotlightCard className="p-8 sm:p-10 h-full" spotlightColor="rgba(168, 85, 247, 0.2)">
                <div className="flex flex-col justify-between h-full gap-8">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6">
                      <Code2 className="w-7 h-7 text-purple-400" />
                    </div>
                    <div className="text-xs font-mono uppercase text-purple-400 mb-2">{t.solutions.card3.tag}</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                      {t.solutions.card3.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed text-sm">
                      {t.solutions.card3.description}
                    </p>
                  </div>

                  <div className="text-xs font-mono text-purple-300/90 bg-purple-950/40 p-3.5 rounded-xl border border-purple-500/20">
                    {t.solutions.card3.badge}
                  </div>
                </div>
              </SpotlightCard>
            </ScrollReveal>

            {/* Bento 4: Backend & Databases (Span 2) */}
            <ScrollReveal direction="up" delay={400} className="md:col-span-2">
              <SpotlightCard className="p-8 sm:p-10 h-full" spotlightColor="rgba(236, 72, 153, 0.2)">
                <div className="flex flex-col justify-between h-full gap-8">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center mb-6">
                      <Database className="w-7 h-7 text-pink-400" />
                    </div>
                    <div className="text-xs font-mono uppercase text-pink-400 mb-2">{t.solutions.card4.tag}</div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                      {t.solutions.card4.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                      {t.solutions.card4.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-300">
                    <span className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10">C# / .NET Core</span>
                    <span className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10">SQL Server / PostgreSQL</span>
                    <span className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10">Python Data Pipelines</span>
                    <span className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10">High-Concurrency REST APIs</span>
                  </div>
                </div>
              </SpotlightCard>
            </ScrollReveal>

          </div>
        </section>

        {/* INTERACTIVE ROI / AUTOMATION CALCULATOR */}
        <section id="calculadora" className="flex flex-col gap-6">
          <ScrollReveal direction="up" delay={0}>
            <AutomationCalculator t={t} />
          </ScrollReveal>
        </section>

        {/* TECH STACK */}
        <section id="stack" className="flex flex-col items-center text-center gap-10">
          <ScrollReveal direction="up" delay={0}>
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-indigo-400 mb-2">
                {t.tech.tag}
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                {t.tech.title}
              </h2>
              <p className="text-sm text-slate-400 max-w-lg mx-auto mt-2">
                {t.tech.subtitle}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={150}>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl">
              {[
                { name: "C#", category: "Backend", icon: <Cpu size={16} className="text-purple-400" /> },
                { name: ".NET Core", category: "Enterprise", icon: <Layers size={16} className="text-blue-400" /> },
                { name: "Python", category: "Automation", icon: <Code2 size={16} className="text-yellow-400" /> },
                { name: "SQL Server", category: "Database", icon: <Database size={16} className="text-red-400" /> },
                { name: "PostgreSQL", category: "Database", icon: <Database size={16} className="text-emerald-400" /> },
                { name: "RESTful APIs", category: "Integration", icon: <Server size={16} className="text-cyan-400" /> },
                { name: "Next.js / React", category: "Frontend", icon: <Server size={16} className="text-indigo-400" /> },
                { name: "Supabase", category: "Cloud DB", icon: <Database size={16} className="text-green-400" /> },
                { name: "ETL & Pipelines", category: "Data", icon: <Workflow size={16} className="text-pink-400" /> },
                { name: "Git & CI/CD", category: "DevOps", icon: <Terminal size={16} className="text-slate-400" /> }
              ].map((tech, idx) => (
                <div 
                  key={idx}
                  className="group flex items-center gap-3 px-5 py-3 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl hover:border-indigo-500/40 hover:bg-slate-850 transition-all duration-200 cursor-default"
                >
                  <span>{tech.icon}</span>
                  <div className="flex flex-col text-left">
                    <span className="font-semibold text-sm text-white group-hover:text-indigo-200 transition-colors">
                      {tech.name}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">
                      {tech.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* CONTACT / CALL TO ACTION */}
        <section id="contacto" className="flex flex-col items-center">
          <ScrollReveal direction="up" delay={0} className="w-full">
            <div className="w-full relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-slate-900/90 via-slate-950 to-black p-8 sm:p-16 text-center shadow-2xl backdrop-blur-2xl">
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-indigo-500/10 via-cyan-500/10 to-purple-500/10 blur-[120px] pointer-events-none"></div>

              <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6">
                
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  {t.contact.badge}
                </div>

                <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                  {t.contact.title}
                </h2>

                <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                  {t.contact.description}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full mt-4">
                  <a
                    href={`mailto:${EMAIL}?subject=Contacto%20de%20Proyecto%20-%20Automatizaci%C3%B3n%20y%20Software`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 text-white font-bold text-sm sm:text-base hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 shadow-xl shadow-indigo-600/30"
                  >
                    <Mail className="w-5 h-5" />
                    <span>{EMAIL}</span>
                  </a>

                  <button
                    onClick={handleCopyEmail}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 active:scale-[0.98] text-slate-200 font-mono text-sm transition-all duration-200"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
                    <span>{copied ? t.hero.copySuccess : t.contact.copyButton}</span>
                  </button>
                </div>

                <div className="pt-8 mt-6 border-t border-white/[0.08] w-full flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-4">
                  <span>{t.contact.footerCredits}</span>
                  <span>{EMAIL}</span>
                </div>

              </div>

            </div>
          </ScrollReveal>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="relative z-10 w-full py-8 border-t border-white/[0.06] text-center text-xs text-slate-500 font-mono">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Adrián Ramírez. {t.contact.allRights}</p>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">{EMAIL}</span>
            <span>·</span>
            <span>Three.js WebGL & Tailwind CSS</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
