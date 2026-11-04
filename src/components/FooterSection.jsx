import React from 'react';
import { ShieldCheck, Heart } from 'lucide-react';

const EMAIL = 'adrb.95@hotmail.com';

export default function FooterSection({ t }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 w-full py-12 border-t border-white/[0.08] text-xs text-slate-500 font-mono mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="w-6 h-6 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center font-bold text-emerald-400 text-xs">
            AR
          </div>
          <p>© {currentYear} {t.footer.copyright}</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <span className="text-slate-400">{EMAIL}</span>
          <span className="text-slate-700">·</span>
          <span className="text-emerald-400 font-bold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            {t.footer.proofBadge}
          </span>
        </div>

      </div>
    </footer>
  );
}
