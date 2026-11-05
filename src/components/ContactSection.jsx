import React, { useState } from 'react';
import { Mail, Copy, Check, MapPin, Clock } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import KineticTextReveal from './KineticTextReveal';
import TactileButton from './TactileButton';

const EMAIL = 'adrb.95@hotmail.com';

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
        <div className="w-full relative overflow-hidden rounded-3xl bg-[#090D14] border border-white/10 p-8 sm:p-14 md:p-16 text-center shadow-2xl chamfer-card">
          
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6">
            
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-widest text-zinc-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>{c.tag}</span>
            </div>

            {/* Title with Kinetic Word Reveal */}
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              <KineticTextReveal text={c.title} delay={0.1} />
            </h2>

            {/* Subtitle */}
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              {c.description}
            </p>

            {/* Actions using TactileButton (No rainbow slop) */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full mt-4">
              <TactileButton
                href={`mailto:${EMAIL}?subject=Consulta%20de%20Venture%20o%20Arquitectura%20de%20Software`}
                variant="primary"
                size="lg"
                icon={<Mail className="w-4 h-4" />}
                iconPosition="left"
                className="w-full sm:w-auto"
              >
                {c.emailBtn}
              </TactileButton>

              <TactileButton
                onClick={handleCopyEmail}
                variant="secondary"
                size="lg"
                icon={
                  copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-zinc-400" />
                  )
                }
                iconPosition="left"
                className="w-full sm:w-auto font-mono"
              >
                {copied ? c.copySuccess : EMAIL}
              </TactileButton>
            </div>

            {/* Location & Response SLA */}
            <div className="pt-8 mt-6 border-t border-white/[0.08] w-full flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 font-mono gap-3">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-zinc-400" />
                <span>{c.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-zinc-400" />
                <span>{c.responseTime}</span>
              </div>
            </div>

          </div>

        </div>
      </ScrollReveal>
    </section>
  );
}
