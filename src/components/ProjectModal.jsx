import React, { useEffect } from 'react';
import { X, ShieldCheck, CheckCircle2, Cpu, ArrowUpRight } from 'lucide-react';
import TactileButton from './TactileButton';

export default function ProjectModal({ project, onClose, t }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  const cs = project.caseStudy || {};

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#090D14] border border-white/12 shadow-[0_25px_70px_rgba(0,0,0,0.9)] p-6 sm:p-10 chamfer-card text-left flex flex-col gap-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-6">
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider bg-white/[0.04] text-zinc-300 border border-white/10">
                {project.category}
              </span>
              <span className="text-xs font-mono text-zinc-500">
                {cs.client}
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              {cs.title || project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 active:scale-95 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-150 shrink-0 btn-tactile"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Challenge vs Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex flex-col gap-2">
            <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 font-bold">
              Desafío Operativo en Campo
            </span>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {cs.challenge}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex flex-col gap-2">
            <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-300 font-bold">
              Arquitectura de Solución
            </span>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {cs.solution}
            </p>
          </div>
        </div>

        {/* Architecture & Engineering Pillars */}
        <div className="flex flex-col gap-3">
          <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-300 font-bold flex items-center gap-2">
            <Cpu className="w-4 h-4 text-zinc-400" />
            Pilares de Ingeniería & Validación de Terreno
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {cs.architecturePoints && cs.architecturePoints.map((point, idx) => (
              <div 
                key={idx}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-[#0E141D] border border-white/[0.06] text-xs text-zinc-300"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Metrics Strip */}
        <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-[#0E141D] border border-white/[0.08]">
          {project.stats.map((st, i) => (
            <div key={i} className="flex flex-col text-center">
              <span className="text-[10px] font-mono uppercase text-zinc-500">{st.label}</span>
              <span className="text-base sm:text-xl font-bold font-mono text-white mt-0.5">{st.value}</span>
            </div>
          ))}
        </div>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-white/[0.08]">
          {project.tags.map((tag, i) => (
            <span key={i} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-zinc-400">
              {tag}
            </span>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Código auditado y desplegado en producción Vercel</span>
          </div>

          <div className="flex items-center gap-3">
            <TactileButton
              variant="secondary"
              size="md"
              onClick={onClose}
            >
              Cerrar
            </TactileButton>
            {project.liveUrl && project.liveUrl !== '#' && (
              <TactileButton
                variant="primary"
                size="md"
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                icon={<ArrowUpRight className="w-4 h-4" />}
                iconPosition="right"
              >
                {t.projects.viewLive}
              </TactileButton>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
