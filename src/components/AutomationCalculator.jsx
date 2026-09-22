import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Zap, Clock } from 'lucide-react';

export default function AutomationCalculator({ t }) {
  const [hoursPerWeek, setHoursPerWeek] = useState(25);
  const [teamMembers, setTeamMembers] = useState(3);
  const hourlyCost = 18; // Average USD/hr benchmark for operational/administrative roles

  const monthlyHoursSpent = Math.round(hoursPerWeek * teamMembers * 4.2);
  const monthlyHoursSaved = Math.round(monthlyHoursSpent * 0.85); // 85% typical automation gain
  const monthlySavings = Math.round(monthlyHoursSaved * hourlyCost);
  const annualSavings = Math.round(monthlySavings * 12);

  const calc = t.calculator;

  const subject = encodeURIComponent(
    calc.emailSubject.replace('{team}', teamMembers)
  );
  const body = encodeURIComponent(
    calc.emailBody.replace('{hours}', monthlyHoursSaved)
  );

  return (
    <div className="w-full relative overflow-hidden rounded-3xl border border-indigo-500/30 bg-gradient-to-b from-slate-900/80 via-slate-950/90 to-slate-950 p-8 md:p-12 shadow-2xl backdrop-blur-2xl">
      {/* Ambient gradient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

      <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center justify-between">
        
        {/* Left: Input controls */}
        <div className="flex-1 w-full flex flex-col gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono uppercase tracking-wider text-indigo-300 mb-3">
              <Zap className="w-3.5 h-3.5 text-indigo-400" />
              {calc.tag}
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              {calc.title}
            </h3>
            <p className="text-slate-400 text-sm mt-2">
              {calc.subtitle}
            </p>
          </div>

          {/* Slider 1: Hours per week */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-300 font-medium flex items-center gap-2">
                <Clock className="w-4 h-4 text-indigo-400" />
                {calc.sliderHours}
              </span>
              <span className="font-mono text-base font-bold text-indigo-300 bg-indigo-950/60 px-3 py-1 rounded-lg border border-indigo-500/30">
                {hoursPerWeek} {calc.sliderHoursUnit}
              </span>
            </div>
            <input
              type="range"
              min="5"
              max="40"
              step="1"
              value={hoursPerWeek}
              onChange={(e) => setHoursPerWeek(Number(e.target.value))}
              className="w-full accent-indigo-500 cursor-pointer h-2 bg-slate-800 rounded-lg appearance-none"
            />
            <div className="flex justify-between text-xs text-slate-500 font-mono">
              <span>{calc.sliderHoursMin}</span>
              <span>{calc.sliderHoursMax}</span>
            </div>
          </div>

          {/* Slider 2: Team members */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-300 font-medium">{calc.sliderTeam}</span>
              <span className="font-mono text-base font-bold text-cyan-300 bg-cyan-950/60 px-3 py-1 rounded-lg border border-cyan-500/30">
                {teamMembers} {teamMembers === 1 ? calc.teamUnitSingular : calc.teamUnitPlural}
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="20"
              step="1"
              value={teamMembers}
              onChange={(e) => setTeamMembers(Number(e.target.value))}
              className="w-full accent-cyan-500 cursor-pointer h-2 bg-slate-800 rounded-lg appearance-none"
            />
            <div className="flex justify-between text-xs text-slate-500 font-mono">
              <span>1 {calc.teamUnitSingular}</span>
              <span>20 {calc.teamUnitPlural}</span>
            </div>
          </div>
        </div>

        {/* Right: Calculated Metrics Box */}
        <div className="w-full lg:w-96 flex flex-col gap-6 bg-slate-900/90 border border-white/10 rounded-2xl p-6 md:p-8 shadow-inner">
          <div className="text-xs font-mono uppercase tracking-widest text-slate-400">
            {calc.roiBadge}
          </div>

          <div className="flex flex-col gap-1 border-b border-white/10 pb-5">
            <span className="text-xs text-slate-400">{calc.monthlyHoursSaved}</span>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                ~{monthlyHoursSaved.toLocaleString()} hrs
              </span>
              <span className="text-xs text-emerald-400 font-semibold font-mono">{calc.monthlyHoursUnit}</span>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              {calc.equivalent} <span className="text-white font-medium">{Math.round(monthlyHoursSaved / 160)} {calc.shifts}</span>.
            </p>
          </div>

          <div className="flex flex-col gap-1 border-b border-white/10 pb-5">
            <span className="text-xs text-slate-400">{calc.annualSavings}</span>
            <div className="text-3xl font-extrabold text-emerald-400">
              ${annualSavings.toLocaleString()} USD
            </div>
            <span className="text-xs text-slate-500 font-mono">
              {calc.disclaimer}
            </span>
          </div>

          <ul className="flex flex-col gap-2 text-xs text-slate-300">
            {calc.benefits.map((benefit, i) => (
              <li key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <a
            href={`mailto:adrb.95@hotmail.com?subject=${subject}&body=${body}`}
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold text-sm hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-indigo-500/25"
          >
            <span>{calc.cta}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
}
