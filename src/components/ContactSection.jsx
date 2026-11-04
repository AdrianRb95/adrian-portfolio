import React, { useState } from 'react';
import { Mail, MessageCircle, Copy, Check, MapPin, Clock, ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const EMAIL = 'adrb.95@hotmail.com';
const WHATSAPP_URL = 'https://wa.me/50688888888?text=Hola%20Adri%C3%A1n,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20conversar%20sobre%20un%20proyecto.';

export default function ContactSection({ t }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const c = t.contact;

  return (
    <section id="contacto" className="flex flex-col items-center pt-8">
      <ScrollReveal direction="up" delay={0} className="w-full">
        <div className="w-full relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#0C121B] via-[#080D14] to-[#04070B] border border-white/15 p-8 sm:p-14 md:p-16 text-center shadow-2xl chamfer-card">
          
          {/* Ambient Lighting Orb */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-emerald-500/10 via-indigo-600/10 to-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6">
            
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-mono uppercase tracking-widest text-emerald-300">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>{c.tag}</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              {c.title}
            </h2>

            {/* Subtitle */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {c.description}
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full mt-4">
              
              <a
                href={`mailto:${EMAIL}?subject=Consulta%20de%20Venture%20o%20Arquitectura%20de%20Software`}
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 text-slate-950 font-black text-sm flex items-center justify-center gap-2.5 hover:opacity-95 active:scale-[0.97] transition-all shadow-xl shadow-emerald-500/20 btn-tactile"
              >
                <Mail className="w-4 h-4 text-slate-950" />
                <span>{c.emailBtn}</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="w-full sm:w-auto px-6 py-4 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 active:scale-[0.97] text-slate-200 font-mono text-xs sm:text-sm flex items-center justify-center gap-2 transition-all btn-tactile"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300 font-semibold">{c.copySuccess}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>{EMAIL}</span>
                  </>
                )}
              </button>

            </div>

            {/* Location & Response SLA */}
            <div className="pt-8 mt-6 border-t border-white/[0.08] w-full flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-mono gap-3">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>{c.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span>{c.responseTime}</span>
              </div>
            </div>

          </div>

        </div>
      </ScrollReveal>
    </section>
  );
}
