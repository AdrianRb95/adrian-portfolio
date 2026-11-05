import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

function ScrubWord({ word, progress, range }) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  const y = useTransform(progress, range, [4, 0]);

  return (
    <span className="relative inline-block mr-[0.3em] mb-[0.15em]">
      <motion.span
        style={{ opacity, y }}
        className="inline-block transition-colors will-change-transform will-change-opacity"
      >
        {word}
      </motion.span>
    </span>
  );
}

/**
 * ScrollScrubStatement
 * Editorial manifest where words illuminate progressively from dimmed gray to high-contrast white
 * as the user scrolls past the viewport.
 */
export default function ScrollScrubStatement({ text, label = 'MANIFESTO // 01' }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.35'],
  });

  const words = text.split(' ');

  return (
    <section ref={containerRef} className="py-12 sm:py-20 border-y border-white/[0.08] relative">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        {/* Monospace editorial label */}
        <div className="flex items-center gap-3 text-[11px] font-mono tracking-widest text-zinc-500 uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
          <span>{label}</span>
          <span className="flex-1 h-[1px] bg-white/[0.06]" />
        </div>

        {/* Scroll-scrub illuminated text */}
        <p className="text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-[1.25]">
          {words.map((word, index) => {
            const start = index / words.length;
            const end = start + 1 / words.length;
            return (
              <ScrubWord
                key={index}
                word={word}
                progress={scrollYProgress}
                range={[start, end]}
              />
            );
          })}
        </p>
      </div>
    </section>
  );
}
