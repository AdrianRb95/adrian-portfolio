import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, Check, Copy, Sparkles, Terminal, Activity, ShieldCheck, Zap } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const EMAIL = 'adrb.95@hotmail.com';

export default function HeroSection({ t }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section className="relative pt-24 sm:pt-32 pb-16 md:pb-24 flex flex-col items-center text-center">
      
      {/* Dynamic Glow Orb Behind Hero */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-emerald-500/15 via-indigo-600/15 to-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse-glow" />

      {/* Live Badge Pill */}
      <ScrollReveal direction="up" delay={0}>
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/30 backdrop-blur-xl text-[11px] font-mono uppercase tracking-widest text-emerald-300 shadow-lg shadow-emerald-950/40 mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>{t.hero.badge}</span>
        </div>
      </ScrollReveal>

      {/* Main Punchy Display Title */}
      <ScrollReveal direction="up" delay={100}>
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.03] text-white max-w-5xl">
          {t.hero.titleLine1}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-400">
            {t.hero.titleLine2}
          </span>
        </h1>
      </ScrollReveal>

      {/* Subheading / Value Proposition */}
      <ScrollReveal direction="up" delay={180}>
        <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-3xl font-normal leading-relaxed">
          {t.hero.description}
        </p>
      </ScrollReveal>

      {/* Primary Actions with Emil Kowalski standard tactile compression */}
      <ScrollReveal direction="up" delay={260}>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
          
          <a
            href="#work"
            className="group px-7 py-3.5 rounded-2xl bg-white text-slate-950 font-bold text-sm sm:text-base hover:bg-slate-100 active:scale-[0.97] transition-all duration-150 flex items-center gap-2.5 shadow-[0_0_35px_-5px_rgba(255,255,255,0.3)] btn-tactile"
          >
            <span>{t.hero.ctaWork}</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-150 text-slate-900" />
          </a>

          <button
            onClick={handleCopy}
            className="px-5 py-3.5 rounded-2xl border border-white/10 bg-[#0F151C]/90 hover:bg-[#151D28] active:scale-[0.97] text-slate-200 font-mono text-xs sm:text-sm backdrop-blur-xl transition-all duration-150 flex items-center gap-2.5 chamfer-card btn-tactile"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300 font-semibold">{t.hero.copySuccess}</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-slate-400" />
                <span>{EMAIL}</span>
              </>
            )}
          </button>

          <a
            href="#contacto"
            className="px-5 py-3.5 rounded-2xl border border-emerald-500/25 bg-emerald-950/20 hover:bg-emerald-900/30 active:scale-[0.97] text-emerald-300 font-medium text-xs sm:text-sm transition-all duration-150 flex items-center gap-1.5 btn-tactile"
          >
            <span>{t.hero.ctaContact}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

        </div>
      </ScrollReveal>

      {/* Outpace-style Marquee / Live Ticker Strip */}
      <ScrollReveal direction="up" delay={340} className="w-full mt-10">
        <div className="w-full max-w-4xl mx-auto overflow-hidden py-3 px-4 rounded-xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-md">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] font-mono text-slate-400">
            {t.hero.ticker.map((item, idx) => (
              <span key={idx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span className="text-slate-300 font-semibold">{item}</span>
              </span>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Telemetry Strip Metric Cards */}
      <ScrollReveal direction="up" delay={420} className="w-full mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-4xl mx-auto">
          
          <div className="p-4 rounded-2xl bg-[#0B1017]/80 border border-white/[0.08] text-left chamfer-card">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400">
                {t.hero.metrics.ventures.label}
              </span>
              <Activity className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl font-black text-white font-mono">
              {t.hero.metrics.ventures.value}
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              {t.hero.metrics.ventures.sub}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#0B1017]/80 border border-white/[0.08] text-left chamfer-card">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400">
                {t.hero.metrics.uptime.label}
              </span>
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-2xl font-black text-white font-mono">
              {t.hero.metrics.uptime.value}
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              {t.hero.metrics.uptime.sub}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#0B1017]/80 border border-white/[0.08] text-left chamfer-card">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-400">
                {t.hero.metrics.craft.label}
              </span>
              <Zap className="w-4 h-4 text-indigo-400" />
            </div>
            <div className="text-2xl font-black text-white font-mono">
              {t.hero.metrics.craft.value}
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              {t.hero.metrics.craft.sub}
            </div>
          </div>

        </div>
      </ScrollReveal>

    </section>
  );
}
