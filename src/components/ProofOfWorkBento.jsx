import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Radio, 
  Play, 
  Pause, 
  RotateCcw, 
  Sparkles, 
  Volume2, 
  VolumeX,
  FileText
} from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import ScrollReveal from './ScrollReveal';
import KineticTextReveal from './KineticTextReveal';
import TactileButton from './TactileButton';

export default function ProofOfWorkBento({ t, onSelectCaseStudy }) {
  // --- PULSEGYM OS INTERACTIVE TIMER STATE ---
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(180);
  const [timerMode, setTimerMode] = useState('AMRAP');
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Web Audio sound generator for gym timer
  const playBeep = (freq = 880, duration = 0.15) => {
    if (!soundEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {}
  };

  const handleToggleTimer = () => {
    playBeep(timerRunning ? 440 : 880, 0.12);
    setTimerRunning(!timerRunning);
  };

  const handleResetTimer = () => {
    playBeep(520, 0.08);
    setTimerRunning(false);
    setTimerSeconds(timerMode === 'TABATA' ? 20 : 180);
  };

  const handleChangeTimerMode = (mode) => {
    playBeep(650, 0.08);
    setTimerMode(mode);
    setTimerRunning(false);
    if (mode === 'TABATA') setTimerSeconds(20);
    else if (mode === 'EMOM') setTimerSeconds(60);
    else setTimerSeconds(180);
  };

  // --- 3FT INTERACTIVE FLAT-LAY STATE ---
  const [flatLayView, setFlatLayView] = useState('studio'); // 'raw' | 'studio'

  // --- ZAPANCE SIMULATOR STATE ---
  const [geofenceAlert, setGeofenceAlert] = useState(false);

  // Format seconds to mm:ss
  const formatTimer = (s) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const zapance = t.projects.items.find((p) => p.id === 'zapance');
  const pulsegym = t.projects.items.find((p) => p.id === 'pulsegym');
  const threefeet = t.projects.items.find((p) => p.id === 'threefeet');
  const manke = t.projects.items.find((p) => p.id === 'manke');
  const suwa = t.projects.items.find((p) => p.id === 'suwa');

  return (
    <section id="work" className="flex flex-col gap-12 sm:gap-16 pt-8">
      
      {/* Section Header with Kinetic Typography */}
      <ScrollReveal direction="up" delay={0}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>{t.projects.tag}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              <KineticTextReveal text={t.projects.title} delay={0.1} />
            </h2>
          </div>
          <p className="text-zinc-400 text-sm sm:text-base max-w-lg leading-relaxed font-normal">
            {t.projects.subtitle}
          </p>
        </div>
      </ScrollReveal>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">

        {/* ------------------------------------------------------------- */}
        {/* CARD 1: ZAPANCE (Span 7) - Flagship AgTech Virtual Fencing OS */}
        {/* ------------------------------------------------------------- */}
        <ScrollReveal direction="up" delay={100} className="lg:col-span-7">
          <SpotlightCard 
            className="p-7 sm:p-9 flex flex-col justify-between gap-8 h-full bg-[#090D14]/90 border border-white/10 chamfer-card"
            spotlightColor="rgba(255, 255, 255, 0.08)"
          >
            <div className="flex flex-col gap-6">
              
              {/* Top metadata row */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono font-bold text-zinc-300 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    [01 // AGTECH]
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-white/[0.02] border border-white/8 text-[11px] font-mono text-zinc-400">
                    MAG / SENASA
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <TactileButton
                    variant="secondary"
                    size="sm"
                    icon={<FileText className="w-3.5 h-3.5" />}
                    onClick={() => onSelectCaseStudy(zapance)}
                  >
                    {t.projects.deepCase}
                  </TactileButton>
                  <TactileButton
                    variant="primary"
                    size="sm"
                    icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                    href={zapance?.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.projects.viewLive}
                  </TactileButton>
                </div>
              </div>

              {/* Title & Description with Kinetic Reveal */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">
                  <KineticTextReveal text="Zapance — Precision Pasture OS" delay={0.15} />
                </h3>
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                  {zapance?.summary}
                </p>
              </div>

              {/* Simulated Collar Telemetry Map & Warning Buffer Widget */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#060A0E] border border-white/8 flex flex-col gap-4">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400 border-b border-white/[0.06] pb-3">
                  <div className="flex items-center gap-2 text-zinc-300 font-semibold">
                    <Radio className="w-4 h-4 text-emerald-400" />
                    <span>Telemetría LoRaWAN 915MHz · Nodo #4</span>
                  </div>
                  <span className="text-zinc-500">Guanacaste, CR · 10.32° N, 85.41° W</span>
                </div>

                {/* SVG Visualizer of Polygon Geofence + Satellite NDVI */}
                <div className="relative h-44 w-full rounded-xl overflow-hidden bg-black/60 border border-white/6 flex items-center justify-center">
                  
                  {/* Grid Lines mimicking GIS cartography */}
                  <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:24px_24px]" />

                  {/* Polygon Geofence Area */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 180">
                    {/* Safe Grazing Polygon */}
                    <polygon 
                      points="40,20 280,30 360,150 120,160 30,110" 
                      fill="rgba(255, 255, 255, 0.04)" 
                      stroke="rgba(255, 255, 255, 0.5)" 
                      strokeWidth="1.5" 
                      strokeDasharray="4 2"
                    />
                    {/* Audio Warning Buffer Zone */}
                    <polygon 
                      points="55,35 265,42 335,138 130,145 50,105" 
                      fill="rgba(245, 158, 11, 0.05)" 
                      stroke="#F59E0B" 
                      strokeWidth="1.2" 
                      strokeDasharray="2 2"
                    />
                    {/* Active Collar Position */}
                    <circle cx={geofenceAlert ? "345" : "190"} cy={geofenceAlert ? "142" : "90"} r="6" fill="#10B981">
                      <animate attributeName="r" values="5;8;5" dur="2s" repeatCount="indefinite" />
                    </circle>
                  </svg>

                  {/* Dynamic Alert Banner */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono px-3 py-1.5 rounded-lg bg-black/80 border border-white/10 backdrop-blur-md">
                    <span className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${geofenceAlert ? 'bg-amber-400 animate-ping' : 'bg-emerald-400'}`} />
                      <span className="text-zinc-300">
                        {geofenceAlert ? 'ESTÍMULO ACÚSTICO: FASE 2' : 'ESTADO: PASTOREO ACTIVO EN POLÍGONO'}
                      </span>
                    </span>
                    <button
                      onClick={() => setGeofenceAlert(!geofenceAlert)}
                      className="text-zinc-400 hover:text-white underline text-[11px] transition-colors"
                    >
                      {geofenceAlert ? 'Normalizar' : 'Simular Aproximación'}
                    </button>
                  </div>
                </div>

                {/* Telemetry Stats Strip */}
                <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                  <div className="p-2 rounded-lg bg-white/[0.02] border border-white/6">
                    <div className="text-zinc-500 text-[10px]">NORMATIVA</div>
                    <div className="font-bold text-zinc-200 mt-0.5">100% MAG/SENASA</div>
                  </div>
                  <div className="p-2 rounded-lg bg-white/[0.02] border border-white/6">
                    <div className="text-zinc-500 text-[10px]">PASTOREO</div>
                    <div className="font-bold text-zinc-200 mt-0.5">-35% Exceso</div>
                  </div>
                  <div className="p-2 rounded-lg bg-white/[0.02] border border-white/6">
                    <div className="text-zinc-500 text-[10px]">RADIO IOT</div>
                    <div className="font-bold text-zinc-200 mt-0.5">LoRaWAN 915MHz</div>
                  </div>
                </div>

              </div>

            </div>

            {/* Bottom Tech Tags */}
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.08]">
              {zapance?.tags.map((tg, i) => (
                <span key={i} className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/8 text-[11px] font-mono text-zinc-400">
                  {tg}
                </span>
              ))}
            </div>
          </SpotlightCard>
        </ScrollReveal>

        {/* ------------------------------------------------------------- */}
        {/* CARD 2: PULSEGYM OS (Span 5) - CrossFit & Hyrox Whiteboard    */}
        {/* ------------------------------------------------------------- */}
        <ScrollReveal direction="up" delay={150} className="lg:col-span-5">
          <SpotlightCard 
            className="p-7 sm:p-9 flex flex-col justify-between gap-8 h-full bg-[#090D14]/90 border border-white/10 chamfer-card"
            spotlightColor="rgba(255, 255, 255, 0.08)"
          >
            <div className="flex flex-col gap-6">
              
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono font-bold text-zinc-300 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  [02 // ATHTECH]
                </span>

                <div className="flex items-center gap-2">
                  <TactileButton
                    variant="secondary"
                    size="sm"
                    icon={<FileText className="w-3.5 h-3.5" />}
                    onClick={() => onSelectCaseStudy(pulsegym)}
                  >
                    {t.projects.deepCase}
                  </TactileButton>
                  <TactileButton
                    variant="primary"
                    size="sm"
                    icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                    href={pulsegym?.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.projects.viewLive}
                  </TactileButton>
                </div>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">
                  <KineticTextReveal text="PulseGym OS — Athletic Whiteboard" delay={0.2} />
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {pulsegym?.summary}
                </p>
              </div>

              {/* Interactive Tactical WOD Timer Micro-Widget */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#060A0E] border border-white/8 flex flex-col gap-4">
                
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                  <div className="flex items-center gap-1.5">
                    {['AMRAP', 'EMOM', 'TABATA'].map((mode) => (
                      <button
                        key={mode}
                        onClick={() => handleChangeTimerMode(mode)}
                        className={`px-2.5 py-1 rounded-md text-[10px] font-mono font-bold transition-all btn-tactile ${
                          timerMode === mode
                            ? 'bg-zinc-200 text-zinc-950 shadow-sm'
                            : 'bg-white/5 text-zinc-400 hover:text-white'
                        }`}
                      >
                        {mode}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setSoundEnabled(!soundEnabled)}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                    title={soundEnabled ? 'Sonido Activado' : 'Sonido Silenciado'}
                  >
                    {soundEnabled ? <Volume2 className="w-4 h-4 text-emerald-400" /> : <VolumeX className="w-4 h-4 text-zinc-500" />}
                  </button>
                </div>

                {/* Clock Display */}
                <div className="flex items-center justify-between py-2 px-3.5 rounded-xl bg-black/60 border border-white/8">
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                      WOD CLOCK {timerRunning && '· ACTIVO'}
                    </span>
                    <span className="text-4xl sm:text-5xl font-black font-mono text-white tracking-tight tabular-nums">
                      {formatTimer(timerSeconds)}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleToggleTimer}
                      className="w-11 h-11 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 flex items-center justify-center shadow-md active:scale-95 transition-all"
                      title={timerRunning ? 'Pausar' : 'Iniciar'}
                    >
                      {timerRunning ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
                    </button>
                    <button
                      onClick={handleResetTimer}
                      className="w-11 h-11 rounded-lg bg-zinc-900 border border-white/10 hover:bg-zinc-800 text-zinc-300 flex items-center justify-center active:scale-95 transition-all"
                      title="Reiniciar"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-center text-xs font-mono pt-1">
                  <div className="p-2 rounded-lg bg-white/[0.02] border border-white/6">
                    <span className="text-zinc-500 text-[10px]">CHECK-IN PISO</span>
                    <p className="font-bold text-zinc-200 mt-0.5">&lt;2s por Atleta</p>
                  </div>
                  <div className="p-2 rounded-lg bg-white/[0.02] border border-white/6">
                    <span className="text-zinc-500 text-[10px]">RETENCIÓN BOX</span>
                    <p className="font-bold text-zinc-200 mt-0.5">+28% Trimestral</p>
                  </div>
                </div>

              </div>

            </div>

            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.08]">
              {pulsegym?.tags.map((tg, i) => (
                <span key={i} className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/8 text-[11px] font-mono text-zinc-400">
                  {tg}
                </span>
              ))}
            </div>
          </SpotlightCard>
        </ScrollReveal>

        {/* ------------------------------------------------------------- */}
        {/* CARD 3: 3FT (Span 4) - Circular Fashion AI Studio             */}
        {/* ------------------------------------------------------------- */}
        <ScrollReveal direction="up" delay={200} className="lg:col-span-4">
          <SpotlightCard 
            className="p-7 flex flex-col justify-between gap-6 h-full bg-[#090D14]/90 border border-white/10 chamfer-card"
            spotlightColor="rgba(255, 255, 255, 0.08)"
          >
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono font-bold text-zinc-300 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  [03 // CIRCULAR-AI]
                </span>
                <TactileButton
                  variant="primary"
                  size="sm"
                  icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                  href={threefeet?.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.projects.viewLive}
                </TactileButton>
              </div>

              <div>
                <h3 className="text-2xl font-black text-white tracking-tight mb-2">
                  <KineticTextReveal text="3FT — Circular Commerce" delay={0.2} />
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {threefeet?.summary}
                </p>
              </div>

              {/* Interactive Before/After Toggle */}
              <div className="p-4 rounded-2xl bg-[#060A0E] border border-white/8 flex flex-col gap-3 font-mono text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                  <span className="text-zinc-400">Plano de Estudio IA</span>
                  <div className="flex gap-1 p-0.5 rounded-lg bg-white/5 border border-white/8">
                    <button
                      onClick={() => setFlatLayView('raw')}
                      className={`px-2.5 py-1 rounded-md text-[10px] transition-all btn-tactile ${
                        flatLayView === 'raw' ? 'bg-zinc-200 text-zinc-950 font-bold' : 'text-zinc-400'
                      }`}
                    >
                      Original
                    </button>
                    <button
                      onClick={() => setFlatLayView('studio')}
                      className={`px-2.5 py-1 rounded-md text-[10px] transition-all btn-tactile ${
                        flatLayView === 'studio' ? 'bg-zinc-200 text-zinc-950 font-bold' : 'text-zinc-400'
                      }`}
                    >
                      Estudio
                    </button>
                  </div>
                </div>

                <div className="h-28 rounded-xl overflow-hidden relative flex items-center justify-center border border-white/6 bg-black/60">
                  {flatLayView === 'raw' ? (
                    <div className="w-full h-full flex flex-col items-center justify-center p-3 text-center text-zinc-400">
                      <span className="text-[10px] uppercase font-mono text-zinc-500">Fondo irregular · Sombras duras</span>
                      <span className="text-xs font-bold text-zinc-300 mt-1">Fotografía cruda sin recortar</span>
                    </div>
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-3 text-center text-zinc-200">
                      <Sparkles className="w-4 h-4 text-zinc-400 mb-1" />
                      <span className="text-[10px] uppercase font-mono text-emerald-400">Recorte IA a 0.4s · Luz neutra</span>
                      <span className="text-xs font-bold text-white mt-0.5">Catálogo Editorial 100% Plano</span>
                    </div>
                  )}
                </div>

                <div className="flex justify-between text-[11px] text-zinc-400">
                  <span>Logística Local</span>
                  <span className="text-zinc-200 font-bold">API Pymexpress CR</span>
                </div>
              </div>

            </div>

            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.08]">
              {threefeet?.tags.map((tg, i) => (
                <span key={i} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-400">
                  {tg}
                </span>
              ))}
            </div>
          </SpotlightCard>
        </ScrollReveal>

        {/* ------------------------------------------------------------- */}
        {/* CARD 4: MANKÉ (Span 4) - Bioclimatic Condominium Master Plan  */}
        {/* ------------------------------------------------------------- */}
        <ScrollReveal direction="up" delay={250} className="lg:col-span-4">
          <SpotlightCard 
            className="p-7 flex flex-col justify-between gap-6 h-full bg-[#090D14]/90 border border-white/10 chamfer-card"
            spotlightColor="rgba(255, 255, 255, 0.08)"
          >
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono font-bold text-zinc-300 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  [04 // SPATIAL]
                </span>
                <TactileButton
                  variant="primary"
                  size="sm"
                  icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                  href={manke?.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.projects.viewLive}
                </TactileButton>
              </div>

              <div>
                <h3 className="text-2xl font-black text-white tracking-tight mb-2">
                  <KineticTextReveal text="Manké — Comunidad Residencial" delay={0.25} />
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {manke?.summary}
                </p>
              </div>

              {/* Master Plan concentric preview */}
              <div className="p-4 rounded-2xl bg-[#060A0E] border border-white/8 flex flex-col gap-3 font-mono text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                  <span className="text-zinc-300 font-semibold">26 Filiales · Belén de Carrillo</span>
                  <span className="text-zinc-500">Plaza Concéntrica</span>
                </div>

                <div className="h-28 rounded-xl bg-black/60 border border-white/8 relative flex items-center justify-center p-2">
                  {/* Concentric rings */}
                  <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full border border-dashed border-white/30 flex items-center justify-center">
                      <span className="text-[8px] text-zinc-300 font-bold">Plaza</span>
                    </div>
                  </div>
                  <span className="absolute bottom-2 left-2 text-[10px] text-zinc-500">Casa Nicole 80m²</span>
                  <span className="absolute bottom-2 right-2 text-[10px] text-emerald-400 font-bold">-4.2°C Pasivo</span>
                </div>

                <div className="flex justify-between text-[11px] text-zinc-400">
                  <span>Prefablock Sismorresistente</span>
                  <span className="text-zinc-300">Viento Alisio Norte</span>
                </div>
              </div>

            </div>

            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.08]">
              {manke?.tags.map((tg, i) => (
                <span key={i} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-400">
                  {tg}
                </span>
              ))}
            </div>
          </SpotlightCard>
        </ScrollReveal>

        {/* ------------------------------------------------------------- */}
        {/* CARD 5: SUWÁ OS & RUTA 21 (Span 4) - Hospitality & Sport      */}
        {/* ------------------------------------------------------------- */}
        <ScrollReveal direction="up" delay={300} className="lg:col-span-4">
          <SpotlightCard 
            className="p-7 flex flex-col justify-between gap-6 h-full bg-[#090D14]/90 border border-white/10 chamfer-card"
            spotlightColor="rgba(255, 255, 255, 0.08)"
          >
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono font-bold text-zinc-300 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  [05 // HOSPITALITY]
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/8 text-[10px] font-mono text-zinc-400">
                  Guanacaste
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-black text-white tracking-tight mb-2">
                  <KineticTextReveal text="SUWÁ Living & Ruta 21 DMC" delay={0.3} />
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  PMS de villas de lujo con Proof-of-Work fotográfico de limpieza, cobro SINPE/Tilopay y hub de turismo atlético con altimetría 3D GPX en el Pacífico.
                </p>
              </div>

              {/* Combined telemetry & verification strip */}
              <div className="p-4 rounded-2xl bg-[#060A0E] border border-white/8 flex flex-col gap-2.5 font-mono text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                  <span className="text-zinc-300 font-semibold">Housekeeping PoW</span>
                  <span className="text-emerald-400">100% Auditado</span>
                </div>
                
                <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/6 flex flex-col gap-1 text-[11px]">
                  <div className="flex justify-between text-zinc-300">
                    <span>SINPE Móvil & Tilopay:</span>
                    <span className="text-emerald-400 font-bold">&lt;30s Confirmación</span>
                  </div>
                  <div className="flex justify-between text-zinc-400">
                    <span>Factura Hacienda 4.3:</span>
                    <span>Automática XML</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[11px]">
                  <span className="text-zinc-400 font-semibold">Ruta 21 DMC:</span>
                  <span className="text-zinc-200">+1,200 Atletas GPX 3D</span>
                </div>
              </div>

            </div>

            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.08]">
              {['Villas PMS', 'SINPE Móvil', 'GPX 3D Altimetry', 'Costa Rica Western'].map((tg, i) => (
                <span key={i} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-400">
                  {tg}
                </span>
              ))}
            </div>
          </SpotlightCard>
        </ScrollReveal>

      </div>
    </section>
  );
}
