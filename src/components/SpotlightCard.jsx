import React, { useRef, useState } from 'react';

export default function SpotlightCard({ 
  children, 
  className = '', 
  spotlightColor = 'rgba(99, 102, 241, 0.18)', 
  onClick,
  enableTilt = true
}) {
  const cardRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setPosition({ x, y });

    if (enableTilt) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -4.5;
      const rotateY = ((x - centerX) / centerX) * 4.5;
      setTilt({ rotateX, rotateY });
    }
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <div
      style={{ perspective: 1200 }}
      className="w-full h-full"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        className={`group relative overflow-hidden rounded-3xl border border-white/[0.09] bg-slate-950/70 backdrop-blur-2xl hover:border-white/25 active:scale-[0.985] will-change-transform ${className}`}
        style={{
          boxShadow: opacity ? '0 25px 50px -12px rgba(0,0,0,0.7), 0 0 40px -10px rgba(99,102,241,0.15)' : '0 20px 45px -15px rgba(0,0,0,0.5)',
          transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) translateZ(0)`,
          transition: 'transform 0.22s cubic-bezier(0.23, 1, 0.32, 1), border-color 0.22s ease, box-shadow 0.22s ease',
        }}
      >
        {/* Spotlight radial glow */}
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
          style={{
            opacity,
            background: `radial-gradient(550px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 55%)`,
          }}
        />

        {/* Dynamic edge illumination */}
        <div
          className="pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-300 z-0"
          style={{
            opacity,
            border: '1px solid rgba(165, 180, 252, 0.5)',
            maskImage: `radial-gradient(320px circle at ${position.x}px ${position.y}px, black 25%, transparent 75%)`,
            WebkitMaskImage: `radial-gradient(320px circle at ${position.x}px ${position.y}px, black 25%, transparent 75%)`,
          }}
        />

        {/* Card Content with subtle depth */}
        <div className="relative z-10 h-full w-full">{children}</div>
      </div>
    </div>
  );
}
