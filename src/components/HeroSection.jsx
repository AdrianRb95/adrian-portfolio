import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, Check, Copy } from 'lucide-react';
import KineticTextReveal from './KineticTextReveal';
import TactileButton from './TactileButton';
import { motion } from 'motion/react';

const EMAIL = 'adrb.95@hotmail.com';

export default function HeroSection({ t }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section className="relative pt-24 sm:pt-36 pb-16 md:pb-24 flex flex-col items-center text-center">
      
      {/* Subtle Architectural Backlight (Restrained, No AI Rainbow Blob) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-b from-white/[0.04] to-transparent rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Live Badge Pill */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl text-[11px] font-mono uppercase tracking-widest text-zinc-300 shadow-sm mb-8"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
        <span>{t.hero.badge}</span>
      </motion.div>

      {/* Kinetic Display Title with Word Mask Reveal on Scroll */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.04] text-white max-w-5xl">
        <KineticTextReveal 
          text={t.hero.titleLine1} 
          delay={0.1}
          stagger={0.04}
          wordClassName="text-white"
        />{' '}
        <KineticTextReveal 
          text={t.hero.titleLine2} 
          delay={0.25}
          stagger={0.04}
          wordClassName="text-zinc-400 font-extrabold"
        />
      </h1>

      {/* Kinetic Subheading */}
      <div className="mt-8 max-w-3xl">
        <KineticTextReveal
          text={t.hero.description}
          delay={0.4}
          stagger={0.015}
          className="text-base sm:text-lg md:text-xl text-zinc-400 font-normal leading-relaxed"
          wordClassName="text-zinc-300 font-normal"
        />
      </div>

      {/* Primary Actions with Unified Tactile Button Standard */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mt-10 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4"
      >
        <TactileButton
          href="#work"
          variant="primary"
          size="lg"
          icon={<ArrowDown className="w-4 h-4" />}
          iconPosition="right"
        >
          {t.hero.ctaWork}
        </TactileButton>

        <TactileButton
          onClick={handleCopy}
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
        >
          {copied ? t.hero.copySuccess : EMAIL}
        </TactileButton>

        <TactileButton
          href="#contacto"
          variant="ghost"
          size="lg"
          icon={<ArrowUpRight className="w-4 h-4" />}
          iconPosition="right"
        >
          {t.hero.ctaContact}
        </TactileButton>
      </motion.div>

      {/* Technical Ticker Strip (Clean Monospace, No Rainbow Confetti) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="w-full max-w-4xl mx-auto overflow-hidden py-3 px-4 rounded-xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-md mt-14"
      >
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] font-mono text-zinc-400">
          {t.hero.ticker.map((item, idx) => (
            <span key={idx} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
              <span className="text-zinc-300 font-semibold">{item}</span>
            </span>
          ))}
        </div>
      </motion.div>

    </section>
  );
}
