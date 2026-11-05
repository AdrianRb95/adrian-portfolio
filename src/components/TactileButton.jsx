import React from 'react';

export default function TactileButton({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'ghost'
  size = 'md', // 'sm' | 'md' | 'lg'
  icon,
  iconPosition = 'right',
  href,
  onClick,
  target,
  rel,
  className = '',
  ...props
}) {
  const baseClasses =
    'group inline-flex items-center justify-center font-semibold select-none rounded-xl transition-all duration-150 ease-out focus:outline-none cursor-pointer will-change-transform btn-tactile';

  const sizeClasses = {
    sm: 'text-xs px-3 py-1.5 gap-1.5 min-h-[32px]',
    md: 'text-xs sm:text-sm px-4 py-2.5 gap-2 min-h-[40px]',
    lg: 'text-sm sm:text-base px-6 py-3.5 gap-2.5 min-h-[48px]',
  };

  const variantClasses = {
    // Alabaster Matte White - High-end, anti-slop primary CTA
    primary:
      'bg-zinc-100 text-zinc-950 hover:bg-white border border-white/20 shadow-[0_1px_2px_rgba(0,0,0,0.6),inset_0_1px_0_0_rgba(255,255,255,0.8)] active:bg-zinc-200',
    // Deep Obsidian Graphite - Secondary action
    secondary:
      'bg-zinc-900/90 text-zinc-200 hover:bg-zinc-800 hover:text-white border border-white/10 hover:border-white/20 shadow-[0_2px_8px_rgba(0,0,0,0.4),inset_0_1px_0_0_rgba(255,255,255,0.08)]',
    // Ghost
    ghost:
      'bg-transparent text-zinc-400 hover:text-white hover:bg-white/5 border border-transparent',
  };

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="shrink-0 transition-transform duration-150 group-hover:-translate-x-0.5">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="shrink-0 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {content}
    </button>
  );
}
