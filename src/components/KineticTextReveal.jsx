import React from 'react';
import { motion } from 'motion/react';

/**
 * KineticTextReveal
 * Splits text into individual words, each masked inside an overflow-hidden span.
 * On scroll entry, words glide upward with spring physics (Fudali / Linear / With Honey standard).
 */
export default function KineticTextReveal({
  text = '',
  className = '',
  wordClassName = '',
  delay = 0,
  stagger = 0.035,
  as: Component = 'span',
}) {
  const words = text.split(' ');

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: {
      y: '115%',
      opacity: 0,
      filter: 'blur(4px)',
    },
    visible: {
      y: '0%',
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1], // Apple / Linear signature spring ease
      },
    },
  };

  return (
    <Component className={`inline-block ${className}`}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        className="inline-flex flex-wrap gap-x-[0.28em] gap-y-[0.1em]"
      >
        {words.map((word, index) => (
          <span key={index} className="inline-block overflow-hidden pb-[0.08em]">
            <motion.span
              variants={wordVariants}
              className={`inline-block will-change-transform ${wordClassName}`}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Component>
  );
}
