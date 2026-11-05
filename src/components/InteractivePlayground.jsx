import React, { useState } from 'react';
import { Zap, ShieldCheck } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import ScrollReveal from './ScrollReveal';
import KineticTextReveal from './KineticTextReveal';

export default function InteractivePlayground({ t }) {
  const [clickCount, setClickCount] = useState(0);
  const [latencyMs, setLatencyMs] = useState(12);

  const handleTestClick = () => {
    const start = performance.now();
    // Micro tactile audio click
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(1200, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.06, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.04);
    } catch (e) {}

    const end = performance.now();
    setLatencyMs(Math.max(4, Math.round(end - start) || 8));
    setClickCount((c) => c + 1);
  };

  const phil = t.philosophy;

  return (
    <section id="craft" className="flex flex-col gap-12 sm:gap-16 pt-8">
      
      {/* Section Header */}
      <ScrollReveal direction="up" delay={0}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>{phil.tag}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              <KineticTextReveal text={phil.title} delay={0.1} />
            </h2>
          </div>
          <p className="text-zinc-400 text-sm sm:text-base max-w-lg leading-relaxed font-normal">
            {phil.subtitle}
          </p>
        </div>
      </ScrollReveal>

      {/* Interactive Micro-Bench Box */}
      <ScrollReveal direction="up" delay={100}>
        <div className="p-6 sm:p-8 rounded-3xl bg-[#090D14] border border-white/10 shadow-2xl chamfer-card">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            
            <div className="flex flex-col gap-2 text-left">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-300 font-bold uppercase tracking-wider">
                <Zap className="w-4 h-4 text-emerald-400" />
                <span>Micro-Banco Interactivo de Tactilidad</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Prueba la Compresión Háptica & Micro-Feedback en Tiempo Real
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-xl">
                Haz clic en el actuador físico para verificar el tiempo de respuesta visual y la síntesis de audio micro-háptico antes de latencia de red.
              </p>
            </div>

            {/* Interactive Actuator & Live Telemetry */}
            <div className="flex flex-wrap items-center gap-4">
              
              <button
                onClick={handleTestClick}
                className="px-8 py-4 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-black text-sm uppercase tracking-wider active:scale-[0.94] active:translate-y-[1px] transition-all duration-100 shadow-[0_1px_2px_rgba(0,0,0,0.6),inset_0_1px_0_0_rgba(255,255,255,0.8)] border border-white/20 cursor-pointer select-none"
              >
                Pulsar Actuador
              </button>

              <div className="p-3.5 rounded-xl bg-black/60 border border-white/8 font-mono text-xs flex flex-col gap-1 text-left min-w-[160px]">
                <div className="flex justify-between items-center text-zinc-400 text-[10px] uppercase">
                  <span>Latencia Micro-UI:</span>
                  <span className="text-emerald-400 font-bold">{latencyMs} ms</span>
                </div>
                <div className="flex justify-between items-center text-zinc-400 text-[10px] uppercase">
                  <span>Pulsaciones:</span>
                  <span className="text-zinc-100 font-bold">{clickCount}</span>
                </div>
                <div className="flex justify-between items-center text-zinc-400 text-[10px] uppercase">
                  <span>Estado Háptico:</span>
                  <span className="text-white font-bold">Activo</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </ScrollReveal>

      {/* 4 Craft Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {phil.cards.map((card, idx) => (
          <ScrollReveal key={idx} direction="up" delay={150 + idx * 80}>
            <SpotlightCard 
              className="p-7 sm:p-9 h-full flex flex-col justify-between gap-6 bg-[#090D14]/80 border border-white/10 chamfer-card"
              spotlightColor="rgba(255, 255, 255, 0.08)"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300 font-bold">
                    {card.badge}
                  </span>
                  <span className="text-xs font-mono text-zinc-500">0{idx + 1}</span>
                </div>

                <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {card.title}
                </h4>

                <p className="text-zinc-400 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-zinc-500">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Estándar Emil Kowalski Implementado</span>
              </div>
            </SpotlightCard>
          </ScrollReveal>
        ))}
      </div>

    </section>
  );
}
