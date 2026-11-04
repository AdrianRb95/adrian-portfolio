import React from 'react';
import { Layers, Globe, Radio, Database, Server, Cpu, CheckCircle2 } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import ScrollReveal from './ScrollReveal';

export default function TechStackSection({ t }) {
  const stack = t.stack;

  const getCategoryIcon = (idx) => {
    switch (idx) {
      case 0:
        return <Layers className="w-5 h-5 text-indigo-400" />;
      case 1:
        return <Radio className="w-5 h-5 text-emerald-400" />;
      case 2:
        return <Database className="w-5 h-5 text-cyan-400" />;
      default:
        return <Cpu className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="stack" className="flex flex-col gap-12 sm:gap-16 pt-8">
      
      {/* Header */}
      <ScrollReveal direction="up" delay={0}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-indigo-400 mb-3">
              <Cpu className="w-4 h-4" />
              <span>{stack.tag}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              {stack.title}
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-lg leading-relaxed">
            {stack.subtitle}
          </p>
        </div>
      </ScrollReveal>

      {/* 3 Main Architectural Pillars */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {stack.categories.map((cat, idx) => (
          <ScrollReveal key={idx} direction="up" delay={100 + idx * 100}>
            <SpotlightCard 
              className="p-7 sm:p-8 flex flex-col justify-between gap-6 h-full bg-[#090D14]/80 border border-white/[0.08] chamfer-card"
              spotlightColor={
                idx === 0 
                  ? 'rgba(99, 102, 241, 0.16)' 
                  : idx === 1 
                  ? 'rgba(16, 185, 129, 0.16)' 
                  : 'rgba(6, 182, 212, 0.16)'
              }
            >
              <div className="flex flex-col gap-6">
                
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-4 border-b border-white/[0.08]">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    {getCategoryIcon(idx)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {cat.name}
                    </h3>
                    <span className="text-[10px] font-mono text-slate-400 uppercase">
                      Arquitectura de Nivel de Producción
                    </span>
                  </div>
                </div>

                {/* Tech list */}
                <div className="flex flex-col gap-3.5">
                  {cat.items.map((item, i) => (
                    <div 
                      key={i}
                      className="p-3 rounded-xl bg-[#06090E] border border-white/[0.06] hover:border-white/15 transition-all flex flex-col gap-1 text-left"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-white">
                          {item.name}
                        </span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                      <p className="text-[11px] text-slate-400 leading-normal">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

              </div>

              {/* Bottom Telemetry tag */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>0 Downtime Deployments</span>
                <span className="text-white font-semibold">100% Auditado</span>
              </div>

            </SpotlightCard>
          </ScrollReveal>
        ))}
      </div>

    </section>
  );
}
