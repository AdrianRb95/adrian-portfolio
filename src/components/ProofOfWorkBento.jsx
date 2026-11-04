import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  ExternalLink, 
  Radio, 
  Play, 
  Pause, 
  RotateCcw, 
  Layers, 
  Sparkles, 
  Eye, 
  ShieldCheck, 
  MapPin, 
  Activity, 
  CheckCircle2, 
  Compass, 
  Volume2, 
  VolumeX,
  FileText
} from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import ScrollReveal from './ScrollReveal';

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
  const ruta21 = t.projects.items.find((p) => p.id === 'ruta21');

  return (
    <section id="work" className="flex flex-col gap-12 sm:gap-16 pt-8">
      
      {/* Section Header */}
      <ScrollReveal direction="up" delay={0}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3">
              <ShieldCheck className="w-4 h-4" />
              <span>{t.projects.tag}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              {t.projects.title}
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-lg leading-relaxed">
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
            className="p-7 sm:p-9 flex flex-col justify-between gap-8 h-full bg-[#090D14]/90 border border-emerald-500/20 chamfer-card"
            spotlightColor="rgba(16, 185, 129, 0.16)"
          >
            <div className="flex flex-col gap-6">
              
              {/* Top metadata row */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono font-bold text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    [LIVE PRODUCTION]
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300">
                    MAG / SENASA
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onSelectCaseStudy(zapance)}
                    className="px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 active:scale-95 border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-all btn-tactile"
                  >
                    {t.projects.deepCase}
                  </button>
                  <a
                    href={zapance?.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-slate-950 font-bold text-xs flex items-center gap-1 transition-all shadow-md shadow-emerald-500/20 btn-tactile"
                  >
                    <span>{t.projects.viewLive}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-2">
                  🐄 Zapance — Virtual Fencing OS
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {zapance?.summary}
                </p>
              </div>

              {/* Simulated Collar Telemetry Map & Warning Buffer Widget */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#060A0E] border border-white/10 flex flex-col gap-4">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-white/[0.08] pb-3">
                  <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                    <Radio className="w-4 h-4 animate-pulse" />
                    <span>Telemetría LoRaWAN 915MHz · Nodo #4</span>
                  </div>
                  <span className="text-slate-400">Guanacaste, CR · 10.32° N, 85.41° W</span>
                </div>

                {/* SVG Visualizer of Polygon Geofence + Satellite NDVI */}
                <div className="relative h-44 w-full rounded-xl overflow-hidden bg-slate-950 border border-white/5 flex items-center justify-center">
                  
                  {/* Grid Lines mimicking GIS cartography */}
                  <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#10b981_1px,transparent_1px),linear-gradient(to_bottom,#10b981_1px,transparent_1px)] bg-[size:24px_24px]" />

                  {/* Polygon Geofence Area */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 180">
                    {/* Safe Grazing Polygon */}
                    <polygon 
                      points="40,20 280,30 360,150 120,160 30,110" 
                      fill="rgba(16, 185, 129, 0.12)" 
                      stroke="#10B981" 
                      strokeWidth="2" 
                      strokeDasharray="4 2"
                    />
                    {/* Audio Warning Buffer Zone */}
                    <polygon 
                      points="55,35 265,42 335,138 130,145 50,105" 
                      fill="rgba(245, 158, 11, 0.08)" 
                      stroke="#F59E0B" 
                      strokeWidth="1.5" 
                      strokeDasharray="2 2"
                    />
                    {/* Active Collar Position */}
                    <circle cx={geofenceAlert ? "345" : "190"} cy={geofenceAlert ? "142" : "90"} r="6" fill="#10B981">
                      <animate attributeName="r" values="5;9;5" dur="2s" repeatCount="indefinite" />
                    </circle>
                  </svg>

                  {/* Floating live collar pill */}
                  <div className="absolute bottom-3 left-3 z-10 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-slate-200 flex items-center gap-3">
                    <span className="text-emerald-400 font-bold">Lote El Jobo #12</span>
                    <span>NDVI: 0.72 (Pastura Óptima)</span>
                    <span className="text-slate-400">Batería: 96%</span>
                  </div>

                  {/* Trigger interactive alert simulation */}
                  <button
                    onClick={() => setGeofenceAlert(!geofenceAlert)}
                    className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 active:scale-95 text-[10px] font-mono text-slate-300 border border-white/10 transition-all btn-tactile"
                  >
                    {geofenceAlert ? 'Reiniciar Posición' : 'Simular Búfer Límite'}
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-[11px] font-mono text-slate-300">
                  <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5">
                    <span className="text-slate-500 block text-[9px] uppercase">Decreto Oficial</span>
                    <span className="font-semibold text-emerald-400">43818-MAG Trazar</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5">
                    <span className="text-slate-500 block text-[9px] uppercase">FONAFIFO PSA</span>
                    <span className="font-semibold text-white">Ley 7575 Verificada</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5">
                    <span className="text-slate-500 block text-[9px] uppercase">Estimulo Animal</span>
                    <span className="font-semibold text-amber-400">Sonoro Progresivo</span>
                  </div>
                </div>

              </div>

            </div>

            {/* Bottom tags */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.08]">
              {zapance?.tags.map((tg, i) => (
                <span key={i} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300">
                  {tg}
                </span>
              ))}
            </div>

          </SpotlightCard>
        </ScrollReveal>

        {/* ------------------------------------------------------------- */}
        {/* CARD 2: PULSEGYM OS (Span 5) - CrossFit & Hyrox Dual CRM     */}
        {/* ------------------------------------------------------------- */}
        <ScrollReveal direction="up" delay={150} className="lg:col-span-5">
          <SpotlightCard 
            className="p-7 sm:p-9 flex flex-col justify-between gap-8 h-full bg-[#090D14]/90 border border-indigo-500/20 chamfer-card"
            spotlightColor="rgba(99, 102, 241, 0.16)"
          >
            <div className="flex flex-col gap-6">
              
              {/* Top metadata */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-[11px] font-mono font-bold text-indigo-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
                  [DUAL ROLE PORTAL]
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onSelectCaseStudy(pulsegym)}
                    className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 active:scale-95 border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-all btn-tactile"
                  >
                    {t.projects.deepCase}
                  </button>
                  <a
                    href={pulsegym?.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white font-bold text-xs flex items-center gap-1 transition-all shadow-md shadow-indigo-600/30 btn-tactile"
                  >
                    <span>{t.projects.viewLive}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">
                  🏋️ PulseGym OS
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {pulsegym?.summary}
                </p>
              </div>

              {/* Interactive Tactical WOD Timer Micro-Widget (Real Web Audio synth) */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#060A0E] border border-white/10 flex flex-col gap-4">
                
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                  <div className="flex items-center gap-1.5">
                    {['AMRAP', 'EMOM', 'TABATA'].map((mode) => (
                      <button
                        key={mode}
                        onClick={() => handleChangeTimerMode(mode)}
                        className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold transition-all btn-tactile ${
                          timerMode === mode
                            ? 'bg-indigo-600 text-white shadow-sm'
                            : 'bg-white/5 text-slate-400 hover:text-white'
                        }`}
                      >
                        {mode}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setSoundEnabled(!soundEnabled)}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                    title={soundEnabled ? 'Sonido Activado' : 'Sonido Silenciado'}
                  >
                    {soundEnabled ? <Volume2 className="w-4 h-4 text-emerald-400" /> : <VolumeX className="w-4 h-4" />}
                  </button>
                </div>

                {/* Clock Display */}
                <div className="flex items-center justify-between py-2 px-3 rounded-xl bg-slate-950 border border-indigo-500/20">
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-400">
                      WOD CLOCK {timerRunning && '· ACTIVO'}
                    </span>
                    <span className="text-4xl sm:text-5xl font-black font-mono text-white tracking-tight">
                      {formatTimer(timerSeconds)}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleToggleTimer}
                      className="w-12 h-12 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:scale-90 text-white flex items-center justify-center shadow-lg shadow-indigo-600/30 transition-all btn-tactile"
                    >
                      {timerRunning ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                    </button>
                    <button
                      onClick={handleResetTimer}
                      className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 active:scale-90 text-slate-400 hover:text-white flex items-center justify-center transition-all btn-tactile"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Micro Telemetry Bar */}
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-1">
                  <span>Atletas en Piso: <strong className="text-white">18 Checked-in</strong></span>
                  <span className="text-indigo-400 font-semibold">Touch Ergonomics 52px+</span>
                </div>

              </div>

            </div>

            {/* Bottom tags */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.08]">
              {pulsegym?.tags.map((tg, i) => (
                <span key={i} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300">
                  {tg}
                </span>
              ))}
            </div>

          </SpotlightCard>
        </ScrollReveal>

        {/* ------------------------------------------------------------- */}
        {/* CARD 3: 3FT THRIFT (Span 4) - Circular Fashion AI Studio     */}
        {/* ------------------------------------------------------------- */}
        <ScrollReveal direction="up" delay={200} className="lg:col-span-4">
          <SpotlightCard 
            className="p-7 flex flex-col justify-between gap-6 h-full bg-[#090D14]/90 border border-pink-500/20 chamfer-card"
            spotlightColor="rgba(236, 72, 153, 0.16)"
          >
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-[11px] font-mono font-bold text-pink-400">
                  [AI STUDIO VISION]
                </span>
                <a
                  href={threefeet?.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-xl bg-pink-600 hover:bg-pink-500 text-white font-bold text-xs flex items-center gap-1 active:scale-95 transition-all btn-tactile"
                >
                  <span>{t.projects.viewLive}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div>
                <h3 className="text-2xl font-black text-white tracking-tight mb-2">
                  🏷️ 3FT — Circular AI
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {threefeet?.summary}
                </p>
              </div>

              {/* Interactive Before/After Toggle */}
              <div className="p-4 rounded-2xl bg-[#060A0E] border border-white/10 flex flex-col gap-3 font-mono text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
                  <span className="text-slate-400">Plano de Estudio IA</span>
                  <div className="flex gap-1 p-0.5 rounded-lg bg-white/5 border border-white/10">
                    <button
                      onClick={() => setFlatLayView('raw')}
                      className={`px-2 py-0.5 rounded text-[10px] transition-all btn-tactile ${
                        flatLayView === 'raw' ? 'bg-pink-600 text-white font-bold' : 'text-slate-400'
                      }`}
                    >
                      Foto Celular
                    </button>
                    <button
                      onClick={() => setFlatLayView('studio')}
                      className={`px-2 py-0.5 rounded text-[10px] transition-all btn-tactile ${
                        flatLayView === 'studio' ? 'bg-pink-600 text-white font-bold' : 'text-slate-400'
                      }`}
                    >
                      Studio Render
                    </button>
                  </div>
                </div>

                <div className="h-28 rounded-xl overflow-hidden relative flex items-center justify-center border border-white/5">
                  {flatLayView === 'raw' ? (
                    <div className="w-full h-full bg-amber-950/30 flex flex-col items-center justify-center p-3 text-center text-amber-200/80">
                      <span className="text-[10px] uppercase font-mono">Fondo desordenado · Sombras duras</span>
                      <span className="text-xs font-bold text-amber-100 mt-1">Foto original sin procesar</span>
                    </div>
                  ) : (
                    <div className="w-full h-full bg-[#161C24] flex flex-col items-center justify-center p-3 text-center text-pink-300">
                      <Sparkles className="w-5 h-5 text-pink-400 mb-1 animate-pulse" />
                      <span className="text-[10px] uppercase font-mono">Recorte IA a 0.4s · Luz neutra</span>
                      <span className="text-xs font-bold text-white mt-0.5">Catálogo Editorial 100% Plano</span>
                    </div>
                  )}
                </div>

                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>Correos de Costa Rica</span>
                  <span className="text-emerald-400 font-bold">API Pymexpress CR</span>
                </div>
              </div>

            </div>

            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.08]">
              {threefeet?.tags.map((tg, i) => (
                <span key={i} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300">
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
            className="p-7 flex flex-col justify-between gap-6 h-full bg-[#090D14]/90 border border-cyan-500/20 chamfer-card"
            spotlightColor="rgba(6, 182, 212, 0.16)"
          >
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-[11px] font-mono font-bold text-cyan-400">
                  [BIOCLIMATIC ARCH]
                </span>
                <a
                  href={manke?.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1 active:scale-95 transition-all btn-tactile"
                >
                  <span>{t.projects.viewLive}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div>
                <h3 className="text-2xl font-black text-white tracking-tight mb-2">
                  🌿 Manké Guanacaste
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {manke?.summary}
                </p>
              </div>

              {/* Master Plan concentric preview */}
              <div className="p-4 rounded-2xl bg-[#060A0E] border border-white/10 flex flex-col gap-3 font-mono text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
                  <span className="text-cyan-400 font-semibold">26 Filiales · Belén de Carrillo</span>
                  <span className="text-slate-400">Plaza Chorotega</span>
                </div>

                <div className="h-28 rounded-xl bg-[#0A121A] border border-cyan-500/20 relative flex items-center justify-center p-2">
                  {/* Concentric rings */}
                  <div className="w-20 h-20 rounded-full border border-cyan-500/30 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full border border-dashed border-cyan-400/50 flex items-center justify-center">
                      <span className="text-[8px] text-cyan-300 font-bold">Plaza</span>
                    </div>
                  </div>
                  <span className="absolute bottom-2 left-2 text-[10px] text-slate-400">Casa Nicole 80m²</span>
                  <span className="absolute bottom-2 right-2 text-[10px] text-emerald-400 font-bold">-4.2°C Pasivo</span>
                </div>

                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>Prefablock Sismo-resistente</span>
                  <span className="text-cyan-300">Viento Alisio Norte</span>
                </div>
              </div>

            </div>

            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.08]">
              {manke?.tags.map((tg, i) => (
                <span key={i} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300">
                  {tg}
                </span>
              ))}
            </div>
          </SpotlightCard>
        </ScrollReveal>

        {/* ------------------------------------------------------------- */}
        {/* CARD 5 & 6: SUWÁ OS + RUTA 21 (Span 4)                       */}
        {/* ------------------------------------------------------------- */}
        <ScrollReveal direction="up" delay={300} className="lg:col-span-4">
          <SpotlightCard 
            className="p-7 flex flex-col justify-between gap-6 h-full bg-[#090D14]/90 border border-amber-500/20 chamfer-card"
            spotlightColor="rgba(245, 158, 11, 0.16)"
          >
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-[11px] font-mono font-bold text-amber-400">
                  [LUXURY PMS & DMC]
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-slate-400">
                  Guanacaste
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-black text-white tracking-tight mb-2">
                  🏨 SUWÁ & Ruta 21
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  PMS de villas de lujo con Proof-of-Work fotográfico de limpieza, cobro SINPE/Tilopay y hub de turismo atlético con altimetría 3D GPX en el Pacífico.
                </p>
              </div>

              {/* Combined telemetry & verification strip */}
              <div className="p-4 rounded-2xl bg-[#060A0E] border border-white/10 flex flex-col gap-2.5 font-mono text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
                  <span className="text-amber-400 font-semibold">SUWÁ Housekeeping PoW</span>
                  <span className="text-emerald-400">100% Auditado</span>
                </div>
                
                <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 flex flex-col gap-1 text-[11px]">
                  <div className="flex justify-between text-slate-300">
                    <span>SINPE Móvil & Tilopay:</span>
                    <span className="text-emerald-400 font-bold">&lt;30s Confirmación</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Factura Hacienda 4.3:</span>
                    <span>Automática XML</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between text-[11px]">
                  <span className="text-blue-400 font-semibold">Ruta 21 DMC:</span>
                  <span className="text-slate-300">+1,200 Atletas GPX 3D</span>
                </div>
              </div>

            </div>

            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.08]">
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300">
                Proof-of-Work PMS
              </span>
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300">
                SINPE Móvil Tilopay
              </span>
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300">
                3D GPX Sports
              </span>
            </div>
          </SpotlightCard>
        </ScrollReveal>

      </div>
    </section>
  );
}
