import React, { useEffect, useState } from 'react';
import { 
  Settings, 
  Code2, 
  Database, 
  Workflow, 
  Mail, 
  Cpu, 
  Layers, 
  Server, 
  Check, 
  Copy, 
  ArrowRight,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  FileSpreadsheet,
  Terminal,
  ExternalLink,
  MessageSquare,
  Network,
  Truck,
  FileCheck2,
  Boxes
} from 'lucide-react';
import Mesh3DCanvas from './components/Mesh3DCanvas';
import SpotlightCard from './components/SpotlightCard';
import AutomationCalculator from './components/AutomationCalculator';

export default function App() {
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('adrb95@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-indigo-500/30 selection:text-white">
      
      {/* 3D WebGL Mesh Shader Background */}
      <Mesh3DCanvas />

      {/* Subtle Noise Texture for Cinematic Depth */}
      <div 
        className="fixed inset-0 pointer-events-none z-1 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* TOP NAVIGATION BAR */}
      <header className="sticky top-0 z-50 w-full px-4 sm:px-8 py-4 backdrop-blur-md bg-slate-950/40 border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center font-mono font-black text-sm text-white shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
              AR
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight text-white group-hover:text-indigo-200 transition-colors">
                Adrián Ramírez
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                Software & Automatización
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-slate-300">
            <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
            <a href="#calculadora" className="hover:text-white transition-colors">Calculadora ROI</a>
            <a href="#soluciones-logisticas" className="hover:text-white transition-colors">Logística & Aduanas</a>
            <a href="#stack" className="hover:text-white transition-colors">Stack Técnico</a>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Disponible para proyectos
            </div>

            <a
              href="#contacto"
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 active:scale-95 border border-white/10 text-xs font-semibold text-white transition-all duration-150"
            >
              Contacto
            </a>
          </div>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-28 flex flex-col gap-32 md:gap-40">

        {/* HERO SECTION */}
        <section className="flex flex-col items-center text-center pt-8 md:pt-14 gap-8">
          
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-950/40 backdrop-blur-xl text-xs font-mono text-indigo-300 shadow-xl shadow-indigo-950/50">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>ARQUITECTURA DE SOFTWARE & AUTOMATIZACIÓN OPERATIVA</span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] text-white">
            Transformo tareas manuales en <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-cyan-200 to-indigo-400">
              flujos que no se detienen.
            </span>
          </h1>

          <p className="text-lg sm:text-2xl text-slate-300 max-w-3xl font-light leading-relaxed">
            Especialista en desarrollo <strong className="text-white font-semibold">backend, integraciones ERP</strong> y <strong className="text-white font-semibold">automatización de procesos logísticos</strong>. Reduzco drásticamente horas de captura manual y margen de error en su empresa.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <a 
              href="#contacto"
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-white text-slate-950 font-bold text-sm sm:text-base hover:scale-[1.03] active:scale-[0.98] hover:bg-indigo-50 transition-all duration-200 shadow-[0_0_50px_-10px_rgba(255,255,255,0.4)]"
            >
              <span>Hablemos de su proyecto</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2.5 px-6 py-4 rounded-2xl border border-white/10 bg-slate-900/60 hover:bg-white/10 active:scale-[0.98] text-slate-200 font-mono text-sm backdrop-blur-xl transition-all duration-200"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
              <span>{copied ? '¡Copiado al portapapeles!' : 'adrb95@gmail.com'}</span>
            </button>
          </div>

          {/* Quick Pillars Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl mt-12 pt-8 border-t border-white/[0.08]">
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] text-left">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                <TrendingUp className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <div className="text-xs font-mono uppercase text-slate-400">Eficiencia</div>
                <div className="text-sm font-semibold text-white">-85% tiempo operativo manual</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] text-left">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <div className="text-xs font-mono uppercase text-slate-400">Confiabilidad</div>
                <div className="text-sm font-semibold text-white">99.9% precisión en datos</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] text-left">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                <Network className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <div className="text-xs font-mono uppercase text-slate-400">Integración</div>
                <div className="text-sm font-semibold text-white">Conexión total de ERPs y APIs</div>
              </div>
            </div>
          </div>

        </section>

        {/* SERVICES BENTO GRID WITH SPOTLIGHT */}
        <section id="servicios" className="flex flex-col gap-12">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-indigo-400 mb-2">
                Capacidades & Especialidades
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                Soluciones de Alto Impacto
              </h2>
            </div>
            <p className="text-sm text-slate-400 max-w-md">
              Desarrollo orientado a resultados medibles: reducción de costos, eliminación de duplicidad y control en tiempo real.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Bento Card 1 (Span 2): Automation */}
            <SpotlightCard className="md:col-span-2 p-8 sm:p-10" spotlightColor="rgba(99, 102, 241, 0.2)">
              <div className="flex flex-col justify-between h-full gap-8">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6">
                    <Settings className="w-7 h-7 text-indigo-400" />
                  </div>
                  <div className="text-xs font-mono uppercase text-indigo-400 mb-2">Automatización Inteligente</div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    Automatización de Procesos & Extracción de Datos
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                    Elimino horas de trabajo manual repetitivo. Convierto documentos caóticos (facturas, pedimentos aduanales, reportes de estatus, hojas de Excel) en datos limpios que se integran y concilian solos de manera automática.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-white/[0.08] text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
                    Extracción automatizada de pedimentos y facturas
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
                    Generación de reportes ejecutivos desatendidos
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
                    Alertas automáticas vía WhatsApp, Correo y Slack
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
                    Cero duplicidad y 0% de errores humanos
                  </div>
                </div>
              </div>
            </SpotlightCard>

            {/* Bento Card 2: ERP Integration */}
            <SpotlightCard className="p-8 sm:p-10" spotlightColor="rgba(6, 182, 212, 0.2)">
              <div className="flex flex-col justify-between h-full gap-8">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6">
                    <Workflow className="w-7 h-7 text-cyan-400" />
                  </div>
                  <div className="text-xs font-mono uppercase text-cyan-400 mb-2">Sincronización Total</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    Integración de ERPs & APIs
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-sm">
                    Conecto plataformas heterogéneas (Acumatica, SAP, aduanas, inventarios y bancos) para que la información fluya sin barreras entre departamentos.
                  </p>
                </div>

                <div className="text-xs font-mono text-cyan-300/80 bg-cyan-950/40 p-3 rounded-xl border border-cyan-500/20">
                  Flujo de datos bidireccional en milisegundos
                </div>
              </div>
            </SpotlightCard>

            {/* Bento Card 3: Custom Software */}
            <SpotlightCard className="p-8 sm:p-10" spotlightColor="rgba(168, 85, 247, 0.2)">
              <div className="flex flex-col justify-between h-full gap-8">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6">
                    <Code2 className="w-7 h-7 text-purple-400" />
                  </div>
                  <div className="text-xs font-mono uppercase text-purple-400 mb-2">Software a la Medida</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    Portales y Aplicaciones Web
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-sm">
                    Desarrollo herramientas internas y paneles para clientes con interfaz moderna, rápida y adaptable a la dinámica real de su negocio sin depender de software rígido.
                  </p>
                </div>

                <div className="text-xs font-mono text-purple-300/80 bg-purple-950/40 p-3 rounded-xl border border-purple-500/20">
                  UX intuitiva + seguridad de accesos por rol
                </div>
              </div>
            </SpotlightCard>

            {/* Bento Card 4 (Span 2): Robust Backend */}
            <SpotlightCard className="md:col-span-2 p-8 sm:p-10" spotlightColor="rgba(236, 72, 153, 0.2)">
              <div className="flex flex-col justify-between h-full gap-8">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center mb-6">
                    <Database className="w-7 h-7 text-pink-400" />
                  </div>
                  <div className="text-xs font-mono uppercase text-pink-400 mb-2">Arquitectura Crítica</div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    Backend de Alto Desempeño & Bases de Datos
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                    Diseño servicios backend estructurados con C#, .NET Core, Python y SQL Server para soportar miles de transacciones concurrentes, respaldos automáticos y trazabilidad de cada cambio operativo.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-300">
                  <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10">SQL Server</span>
                  <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10">C# / .NET</span>
                  <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10">Python Data Scripts</span>
                  <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10">RESTful Microservices</span>
                </div>
              </div>
            </SpotlightCard>

          </div>
        </section>

        {/* LOGISTICS & IMPORT-EXPORT AUTOMATION FOCUS (Perfect for Grupo Trans Remont) */}
        <section id="soluciones-logisticas" className="flex flex-col gap-10">
          
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono uppercase tracking-wider text-cyan-300 mb-3">
              <Truck className="w-3.5 h-3.5 text-cyan-400" />
              Especialidad en Operaciones & Logística
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Soluciones diseñadas para Importaciones y Transporte
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3">
              El sector de comercio exterior y transporte exige velocidad y exactitud absoluta. Estas son las áreas donde aporto mayor retorno:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-3xl border border-white/10 bg-slate-900/50 backdrop-blur-xl flex flex-col gap-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white">Conciliación de Pedimentos & Facturas</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Cruce automático de cuentas de gastos, manifiestos y números de pedimento contra facturas para detectar discrepancias antes de que generen multas o demoras.
              </p>
            </div>

            <div className="p-6 rounded-3xl border border-white/10 bg-slate-900/50 backdrop-blur-xl flex flex-col gap-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <Boxes className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white">Trazabilidad de Embarques</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Sincronización en tiempo real de estatus de tránsito, aduanas y bodegas con actualización desatendida hacia clientes y personal de operaciones.
              </p>
            </div>

            <div className="p-6 rounded-3xl border border-white/10 bg-slate-900/50 backdrop-blur-xl flex flex-col gap-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <FileSpreadsheet className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white">Automatización de Reportes a Clientes</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Generación y envío automático de reportes diarios de contenedores y despachos en formatos PDF/Excel sin necesidad de captura manual matutina.
              </p>
            </div>

          </div>
        </section>

        {/* INTERACTIVE ROI / AUTOMATION CALCULATOR */}
        <section id="calculadora" className="flex flex-col gap-6">
          <AutomationCalculator />
        </section>

        {/* TECH STACK SECTION */}
        <section id="stack" className="flex flex-col items-center text-center gap-10">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-indigo-400 mb-2">
              Infraestructura & Herramientas
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Stack Tecnológico Comprobado
            </h2>
            <p className="text-sm text-slate-400 max-w-lg mx-auto mt-2">
              Tecnologías líderes en la industria empresarial que garantizan estabilidad, rendimiento y fácil mantenimiento a largo plazo.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl">
            {[
              { name: "C#", category: "Backend", icon: <Cpu size={16} className="text-purple-400" /> },
              { name: ".NET Core", category: "Enterprise", icon: <Layers size={16} className="text-blue-400" /> },
              { name: "Python", category: "Automation", icon: <Code2 size={16} className="text-yellow-400" /> },
              { name: "SQL Server", category: "Database", icon: <Database size={16} className="text-red-400" /> },
              { name: "RESTful APIs", category: "Integration", icon: <Server size={16} className="text-emerald-400" /> },
              { name: "Next.js / React", category: "Frontend", icon: <Server size={16} className="text-cyan-400" /> },
              { name: "Supabase / PostgreSQL", category: "Database", icon: <Database size={16} className="text-green-400" /> },
              { name: "ETL Pipelines", category: "Data", icon: <Workflow size={16} className="text-indigo-400" /> },
              { name: "Git / CI/CD", category: "DevOps", icon: <Terminal size={16} className="text-slate-400" /> }
            ].map((tech, idx) => (
              <div 
                key={idx}
                className="group flex items-center gap-3 px-5 py-3 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl hover:border-indigo-500/40 hover:bg-slate-850 transition-all duration-200 cursor-default"
              >
                <span>{tech.icon}</span>
                <div className="flex flex-col text-left">
                  <span className="font-semibold text-sm text-white group-hover:text-indigo-200 transition-colors">
                    {tech.name}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">
                    {tech.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT / CONVERSION SECTION */}
        <section id="contacto" className="flex flex-col items-center">
          <div className="w-full relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-slate-900/90 via-slate-950 to-black p-8 sm:p-16 text-center shadow-2xl backdrop-blur-2xl">
            
            {/* Ambient Background Accents */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-indigo-500/10 via-cyan-500/10 to-purple-500/10 blur-[120px] pointer-events-none"></div>

            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                RESPUESTA EN MENOS DE 24 HORAS
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                ¿Listo para optimizar la operativa de su empresa?
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Si busca eliminar tareas manuales, conectar sus sistemas o desarrollar una solución a la medida, contácteme directamente:
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full mt-4">
                <a
                  href="mailto:adrb95@gmail.com?subject=Contacto%20de%20Proyecto%20-%20Automatizaci%C3%B3n%20y%20Software"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 text-white font-bold text-sm sm:text-base hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 shadow-xl shadow-indigo-600/30"
                >
                  <Mail className="w-5 h-5" />
                  <span>adrb95@gmail.com</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 active:scale-[0.98] text-slate-200 font-mono text-sm transition-all duration-200"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
                  <span>{copied ? '¡Copiado al portapapeles!' : 'Copiar dirección'}</span>
                </button>
              </div>

              <div className="pt-8 mt-6 border-t border-white/[0.08] w-full flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-4">
                <span>Adrián Ramírez · Desarrollador de Software & Automatización</span>
                <span>adrb95@gmail.com</span>
              </div>

            </div>

          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="relative z-10 w-full py-8 border-t border-white/[0.06] text-center text-xs text-slate-500 font-mono">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Adrián Ramírez. Todos los derechos reservados.</p>
          <p>Diseñado con Three.js WebGL & Tailwind CSS</p>
        </div>
      </footer>

    </div>
  );
}
