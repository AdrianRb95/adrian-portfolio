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
  Boxes,
  Building2,
  DollarSign,
  BarChart3,
  CheckCircle2,
  Clock,
  Zap,
  ChevronRight
} from 'lucide-react';
import Mesh3DCanvas from './components/Mesh3DCanvas';
import SpotlightCard from './components/SpotlightCard';
import AutomationCalculator from './components/AutomationCalculator';

export default function App() {
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('adrb95@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  if (!mounted) return null;

  const industryVerticals = [
    {
      id: 'logistica',
      tag: 'Logística & Comercio Exterior',
      icon: <Truck className="w-5 h-5 text-cyan-400" />,
      color: 'cyan',
      title: 'Aduanas, Transporte & Cadena de Suministro',
      subtitle: 'Eliminación del trabajo manual en expedientes, pedimentos y monitoreo de fletes.',
      highlights: [
        'Cruce desatendido de pedimentos, manifiestos y cuentas de gastos',
        'Detección anticipada de inconsistencias documentales antes de multas',
        'Monitoreo centralizado de contenedores en tránsito y aduanas',
        'Generación y envío automático de reportes matutinos a clientes'
      ],
      previewSnippet: {
        badge: 'Operación Desatendida',
        line1: 'Pedimento #50218-A -> Validado vs Factura Comercial',
        line2: 'Status Aduana: Despachado (Laredo) -> Alerta enviada a cliente',
        metric: '-94% tiempo de captura en tráfico'
      }
    },
    {
      id: 'finanzas',
      tag: 'Finanzas & Conciliación ERP',
      icon: <DollarSign className="w-5 h-5 text-emerald-400" />,
      color: 'emerald',
      title: 'Conciliaciones Bancarias, SAT & Facturación',
      subtitle: 'Flujo financiero blindado entre bancos, portales fiscales y sistemas de gestión.',
      highlights: [
        'Conciliación automática de estados de cuenta bancarios vs facturas emitidas/recibidas',
        'Validación y descarga automática de XMLs fiscales ante el SAT',
        'Actualización automática de cuentas por cobrar y cobros recurrentes',
        'Sincronización en tiempo real de asientos contables en su ERP (Acumatica, SAP, etc.)'
      ],
      previewSnippet: {
        badge: 'Auditoría Continua',
        line1: 'Cruce Bancario: 1,420 movimientos verificados automáticamente',
        line2: 'Discrepancias detectadas: 0 | Saldo cuadrado al centavo',
        metric: 'Cierre mensual en 1 hora en vez de 4 días'
      }
    },
    {
      id: 'operaciones',
      tag: 'Operaciones, Almacén & Retail',
      icon: <Boxes className="w-5 h-5 text-indigo-400" />,
      color: 'indigo',
      title: 'Gestión de Inventarios, Almacén & Pedidos',
      subtitle: 'Control preciso de existencias, compras inteligentes y despacho ágil.',
      highlights: [
        'Sincronización de stock entre múltiples bodegas, tiendas y e-commerce',
        'Alertas inteligentes de reabastecimiento basadas en rotación histórica',
        'Automatización de órdenes de compra y recepción de mercancías con lectores',
        'Eliminación de mermas y pedidos duplicados por captura humana errónea'
      ],
      previewSnippet: {
        badge: 'Sincronización Multicanal',
        line1: 'Inventario Centralizado: 4 Bodegas sincronizadas en tiempo real',
        line2: 'Stock mínimo activado -> Orden de compra preliminar generada',
        metric: 'Cero ventas sin inventario físico'
      }
    },
    {
      id: 'software',
      tag: 'Portales B2B & Software a la Medida',
      icon: <Building2 className="w-5 h-5 text-purple-400" />,
      color: 'purple',
      title: 'Plataformas Web, Portales de Clientes & APIs',
      subtitle: 'Herramientas creadas específicamente para la forma en que opera su negocio.',
      highlights: [
        'Portales para clientes: consulta de facturas, pedidos y cotizaciones 24/7',
        'Paneles operativos internos con permisos estrictos por departamento y rol',
        'APIs REST seguras y de alta concurrencia construidas en C# .NET y Python',
        'Migración de hojas de cálculo desordenadas a bases de datos relacionales estables'
      ],
      previewSnippet: {
        badge: 'Arquitectura Empresarial',
        line1: 'Portal Clientes: +850 usuarios concurrentes sin degradación',
        line2: 'Microservicio de Facturación: 18ms tiempo promedio de respuesta',
        metric: '99.98% disponibilidad garantizada'
      }
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-indigo-500/30 selection:text-white">
      
      {/* 3D WebGL Mesh Shader Background */}
      <Mesh3DCanvas />

      {/* Subtle Noise Texture */}
      <div 
        className="fixed inset-0 pointer-events-none z-1 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* HEADER NAVBAR */}
      <header className="sticky top-0 z-50 w-full px-4 sm:px-8 py-4 backdrop-blur-md bg-slate-950/40 border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-500 flex items-center justify-center font-mono font-black text-sm text-white shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform duration-200">
              AR
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight text-white group-hover:text-indigo-200 transition-colors">
                Adrián Ramírez
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                Sistemas & Automatizaciones
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-slate-300">
            <a href="#soluciones" className="hover:text-white transition-colors">Soluciones</a>
            <a href="#sectores" className="hover:text-white transition-colors">Sectores de Impacto</a>
            <a href="#calculadora" className="hover:text-white transition-colors">Calculadora ROI</a>
            <a href="#stack" className="hover:text-white transition-colors">Tecnologías</a>
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
              Iniciar Charla
            </a>
          </div>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-28 flex flex-col gap-32 md:gap-44">

        {/* HERO SECTION */}
        <section className="flex flex-col items-center text-center pt-6 md:pt-12 gap-8">
          
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-950/40 backdrop-blur-xl text-xs font-mono text-indigo-300 shadow-xl shadow-indigo-950/50">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>DESARROLLO DE SOFTWARE · AUTOMATIZACIÓN · INTEGRACIÓN ERP</span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[1.04] text-white">
            Automatizo la operación de su empresa <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-cyan-200 to-indigo-400">
              para multiplicar su capacidad.
            </span>
          </h1>

          <p className="text-lg sm:text-2xl text-slate-300 max-w-3xl font-light leading-relaxed">
            Diseño e implemento soluciones de <strong className="text-white font-semibold">automatización de flujos</strong>, <strong className="text-white font-semibold">integraciones de sistemas (ERPs)</strong> y <strong className="text-white font-semibold">arquitectura backend</strong>. Convierto procesos manuales lentos en sistemas seguros, automáticos y medibles.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <a 
              href="#contacto"
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-white text-slate-950 font-bold text-sm sm:text-base hover:scale-[1.03] active:scale-[0.98] hover:bg-indigo-50 transition-all duration-200 shadow-[0_0_50px_-10px_rgba(255,255,255,0.4)]"
            >
              <span>Plantear una necesidad o proyecto</span>
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

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl mt-10 pt-8 border-t border-white/[0.08]">
            <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-left">
              <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                <TrendingUp className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Eficiencia Medible</div>
                <div className="text-sm font-semibold text-white">80% a 95% ahorro de tiempo manual</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-left">
              <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Seguridad de Datos</div>
                <div className="text-sm font-semibold text-white">Validaciones estrictas y cero descuadre</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-left">
              <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                <Workflow className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Conectividad Total</div>
                <div className="text-sm font-semibold text-white">Integración nativa ERPs, APIs y SAT</div>
              </div>
            </div>
          </div>

        </section>

        {/* MULTI-INDUSTRY EXPANDED SECTION (SECTORES DE IMPACTO) */}
        <section id="sectores" className="flex flex-col gap-12">
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
                <Boxes className="w-3.5 h-3.5" />
                Versatilidad Multisectorial
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                Automatización Aplicada por Sector
              </h2>
            </div>
            <p className="text-slate-400 text-sm sm:text-base max-w-md">
              Soluciones estructuradas que resuelven cuellos de botella específicos en las áreas operativas más críticas de cualquier empresa.
            </p>
          </div>

          {/* Elevated Interactive Vertical Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {industryVerticals.map((vertical) => (
              <SpotlightCard 
                key={vertical.id} 
                className="p-8 sm:p-10 flex flex-col justify-between gap-8 border border-white/[0.08]"
                spotlightColor={vertical.color === 'cyan' ? 'rgba(6, 182, 212, 0.2)' : vertical.color === 'emerald' ? 'rgba(16, 185, 129, 0.2)' : vertical.color === 'indigo' ? 'rgba(99, 102, 241, 0.2)' : 'rgba(168, 85, 247, 0.2)'}
              >
                <div className="flex flex-col gap-6">
                  
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="w-13 h-13 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center p-3 shadow-inner">
                      {vertical.icon}
                    </div>
                    <span className="text-xs font-mono px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-slate-300">
                      {vertical.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                      {vertical.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {vertical.subtitle}
                    </p>
                  </div>

                  {/* Bullet Highlights */}
                  <ul className="flex flex-col gap-2.5 pt-4 border-t border-white/[0.08] text-xs sm:text-sm text-slate-300">
                    {vertical.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                </div>

                {/* Simulated Real-Time System Preview Widget inside the tile */}
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-white/[0.08] flex flex-col gap-2 font-mono text-xs">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 pb-2 border-b border-white/[0.06]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span className="text-slate-300 font-semibold">{vertical.previewSnippet.badge}</span>
                    </div>
                    <span className="text-emerald-400 font-bold">{vertical.previewSnippet.metric}</span>
                  </div>
                  <div className="text-slate-300 text-[11px] truncate flex items-center gap-1.5">
                    <ChevronRight className="w-3 h-3 text-indigo-400 shrink-0" />
                    <span>{vertical.previewSnippet.line1}</span>
                  </div>
                  <div className="text-slate-400 text-[11px] truncate flex items-center gap-1.5">
                    <ChevronRight className="w-3 h-3 text-cyan-400 shrink-0" />
                    <span>{vertical.previewSnippet.line2}</span>
                  </div>
                </div>

              </SpotlightCard>
            ))}
          </div>

        </section>

        {/* CORE SERVICES & ARCHITECTURE BENTO */}
        <section id="soluciones" className="flex flex-col gap-12">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-indigo-400 mb-2">
                Ingeniería de Software
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                Pilares Técnicos & Servicios
              </h2>
            </div>
            <p className="text-sm text-slate-400 max-w-md">
              Desarrollo con estándares rigurosos de código, seguridad y documentación para que su empresa crezca sin deuda técnica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Bento 1: Automation */}
            <SpotlightCard className="md:col-span-2 p-8 sm:p-10" spotlightColor="rgba(99, 102, 241, 0.2)">
              <div className="flex flex-col justify-between h-full gap-8">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6">
                    <Settings className="w-7 h-7 text-indigo-400" />
                  </div>
                  <div className="text-xs font-mono uppercase text-indigo-400 mb-2">Automatización de Workflows</div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    Flujos de Trabajo & Procesamiento Desatendido
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                    Sustituyo tareas manuales repetitivas por scripts y microservicios automáticos. Extracción inteligente de información en PDFs, hojas de cálculo de proveedores, cruces de inventario y generación automática de reportes ejecutivos.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-white/[0.08] text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
                    Extracción y transformación de archivos masivos (ETL)
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
                    Generación desatendida de reportes y balances
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
                    Alertas instantáneas vía WhatsApp, Slack o Correo
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
                    Control de excepciones y bitácoras de auditoría
                  </div>
                </div>
              </div>
            </SpotlightCard>

            {/* Bento 2: ERP Integration */}
            <SpotlightCard className="p-8 sm:p-10" spotlightColor="rgba(6, 182, 212, 0.2)">
              <div className="flex flex-col justify-between h-full gap-8">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6">
                    <Workflow className="w-7 h-7 text-cyan-400" />
                  </div>
                  <div className="text-xs font-mono uppercase text-cyan-400 mb-2">Conectividad Empresarial</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    Integración de ERPs & APIs
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-sm">
                    Comunicación fluida entre Acumatica, SAP, plataformas bancarias, sistemas de facturación y software de terceros sin recaptura manual.
                  </p>
                </div>

                <div className="text-xs font-mono text-cyan-300/90 bg-cyan-950/40 p-3.5 rounded-xl border border-cyan-500/20">
                  Sincronización bidireccional continua
                </div>
              </div>
            </SpotlightCard>

            {/* Bento 3: Custom Software */}
            <SpotlightCard className="p-8 sm:p-10" spotlightColor="rgba(168, 85, 247, 0.2)">
              <div className="flex flex-col justify-between h-full gap-8">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6">
                    <Code2 className="w-7 h-7 text-purple-400" />
                  </div>
                  <div className="text-xs font-mono uppercase text-purple-400 mb-2">A Medida</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    Portales Web & Herramientas Internas
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-sm">
                    Aplicaciones web diseñadas exactamente a la medida de la dinámica operativa de su empresa, accesibles desde cualquier navegador con seguridad por rol.
                  </p>
                </div>

                <div className="text-xs font-mono text-purple-300/90 bg-purple-950/40 p-3.5 rounded-xl border border-purple-500/20">
                  Interfaces rápidas y seguras
                </div>
              </div>
            </SpotlightCard>

            {/* Bento 4: Robust Backend */}
            <SpotlightCard className="md:col-span-2 p-8 sm:p-10" spotlightColor="rgba(236, 72, 153, 0.2)">
              <div className="flex flex-col justify-between h-full gap-8">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center mb-6">
                    <Database className="w-7 h-7 text-pink-400" />
                  </div>
                  <div className="text-xs font-mono uppercase text-pink-400 mb-2">Base Sólida</div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    Arquitectura Backend & Bases de Datos
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                    Infraestructura sólida en C#, .NET Core, Python y SQL Server capaz de manejar grandes volúmenes de registros con alta disponibilidad, respaldos estructurados y rendimiento instantáneo.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-300">
                  <span className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10">C# / .NET Core</span>
                  <span className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10">SQL Server / Postgres</span>
                  <span className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10">Python Data Pipelines</span>
                  <span className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10">REST APIs Seguras</span>
                </div>
              </div>
            </SpotlightCard>

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
              Tecnología Empresarial
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Herramientas & Ecosistema
            </h2>
            <p className="text-sm text-slate-400 max-w-lg mx-auto mt-2">
              Stack moderno y robusto enfocado en estabilidad operacional y compatibilidad a largo plazo.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl">
            {[
              { name: "C#", category: "Backend", icon: <Cpu size={16} className="text-purple-400" /> },
              { name: ".NET Core", category: "Enterprise", icon: <Layers size={16} className="text-blue-400" /> },
              { name: "Python", category: "Automatización", icon: <Code2 size={16} className="text-yellow-400" /> },
              { name: "SQL Server", category: "Base de Datos", icon: <Database size={16} className="text-red-400" /> },
              { name: "PostgreSQL", category: "Base de Datos", icon: <Database size={16} className="text-emerald-400" /> },
              { name: "APIs RESTful", category: "Integración", icon: <Server size={16} className="text-cyan-400" /> },
              { name: "Next.js / React", category: "Frontend", icon: <Server size={16} className="text-indigo-400" /> },
              { name: "Supabase", category: "Cloud DB", icon: <Database size={16} className="text-green-400" /> },
              { name: "ETL & Pipelines", category: "Datos", icon: <Workflow size={16} className="text-pink-400" /> },
              { name: "Git & CI/CD", category: "DevOps", icon: <Terminal size={16} className="text-slate-400" /> }
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
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-indigo-500/10 via-cyan-500/10 to-purple-500/10 blur-[120px] pointer-events-none"></div>

            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                RESPUESTA DIRECTA
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                ¿Conversamos sobre su proyecto u operación?
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Si busca eliminar tareas manuales repetitivas, conectar plataformas desconectadas o desarrollar una solución tecnológica sólida, escríbame directamente:
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
                <span>Adrián Ramírez · Soluciones en Automatización & Software</span>
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
          <p>Three.js WebGL & Tailwind CSS</p>
        </div>
      </footer>

    </div>
  );
}
