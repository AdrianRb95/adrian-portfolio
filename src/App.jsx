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
  FileSpreadsheet
} from 'lucide-react';

const CustomStyles = () => (
  <style>{`
    @keyframes gradientFlow {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    
    @keyframes blobBounce {
      0% { transform: translate(0px, 0px) scale(1); }
      33% { transform: translate(30px, -50px) scale(1.1); }
      66% { transform: translate(-20px, 20px) scale(0.9); }
      100% { transform: translate(0px, 0px) scale(1); }
    }

    .mesh-bg {
      background-color: #030712;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      overflow: hidden;
    }

    .mesh-blob {
      position: absolute;
      filter: blur(120px);
      border-radius: 50%;
      opacity: 0.55;
      animation: blobBounce 20s infinite alternate cubic-bezier(0.4, 0, 0.2, 1);
    }

    .blob-1 {
      top: -10%; left: -10%; width: 55vw; height: 55vw;
      background: linear-gradient(135deg, #4f46e5, #7c3aed);
      animation-delay: 0s;
    }
    
    .blob-2 {
      bottom: -20%; right: -10%; width: 60vw; height: 60vw;
      background: linear-gradient(135deg, #0284c7, #2563eb);
      animation-delay: 2s;
    }
    
    .blob-3 {
      top: 30%; left: 35%; width: 45vw; height: 45vw;
      background: linear-gradient(135deg, #9333ea, #db2777);
      animation-delay: 4s;
    }

    .glass-card {
      background: rgba(17, 24, 39, 0.55);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.08);
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    }
    
    .glass-badge {
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.12);
    }

    .noise-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 1;
      opacity: 0.035;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    }

    .fade-in-up {
      animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      opacity: 0;
      transform: translateY(20px);
    }

    @keyframes fadeInUp {
      to { opacity: 1; transform: translateY(0); }
    }
  `}</style>
);

const services = [
  {
    icon: <Settings className="w-8 h-8 text-blue-400" />,
    title: "Automatización de Procesos",
    tagline: "Ahorro de horas hombre y 0% margen de error",
    description: "Eliminación de tareas manuales repetitivas mediante flujos automatizados de trabajo, extracción sistemática de datos y reportes directos en tiempo real para optimizar los tiempos de respuesta de su equipo."
  },
  {
    icon: <Code2 className="w-8 h-8 text-purple-400" />,
    title: "Desarrollo de Software a la Medida",
    tagline: "Ecosistemas adaptados a su modelo de negocio",
    description: "Creación de plataformas web y aplicaciones internas seguras, robustas y escalables, diseñadas puntualmente según las necesidades operativas de su empresa sin software genérico innecesario."
  },
  {
    icon: <Workflow className="w-8 h-8 text-indigo-400" />,
    title: "Integración de Sistemas y ERPs",
    tagline: "Sincronización total entre plataformas",
    description: "Conexión integral de sistemas comerciales, plataformas logísticas, aduaneras y bases de datos para garantizar un flujo continuo y transparente de información en toda la organización."
  },
  {
    icon: <Database className="w-8 h-8 text-pink-400" />,
    title: "Desarrollo Backend y APIs",
    tagline: "Arquitecturas de alto desempeño",
    description: "Infraestructura interna moderna para procesar grandes volúmenes de datos con alta velocidad, seguridad de datos de grado empresarial y estabilidad operacional 24/7."
  }
];

const technologies = [
  { name: "C#", icon: <Cpu size={18} className="text-purple-400" /> },
  { name: ".NET Core", icon: <Layers size={18} className="text-blue-400" /> },
  { name: "Python", icon: <Code2 size={18} className="text-yellow-400" /> },
  { name: "SQL Server", icon: <Database size={18} className="text-red-400" /> },
  { name: "APIs RESTful", icon: <Server size={18} className="text-emerald-400" /> },
  { name: "Next.js / React", icon: <Server size={18} className="text-cyan-400" /> },
  { name: "Supabase", icon: <Database size={18} className="text-green-400" /> },
  { name: "ETL & Data Pipelines", icon: <Workflow size={18} className="text-indigo-400" /> }
];

const valuePillars = [
  {
    icon: <TrendingUp className="w-6 h-6 text-emerald-400" />,
    title: "Eficiencia Operativa",
    desc: "Reducción radical de tiempos en captura de pedidos, generación de reportes y conciliaciones."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-indigo-400" />,
    title: "Confiabilidad y Seguridad",
    desc: "Sistemas estructurados con validaciones estrictas para garantizar integridad en datos críticos."
  },
  {
    icon: <FileSpreadsheet className="w-6 h-6 text-pink-400" />,
    title: "Automatización de Documentos",
    desc: "Extracción y cruce inteligente de pedimentos, facturas y registros aduanales o logísticos."
  }
];

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
    <div className="relative min-h-screen text-slate-100 font-sans selection:bg-indigo-500/30">
      <CustomStyles />
      
      {/* Background Animated Gradient Blobs */}
      <div className="mesh-bg">
        <div className="mesh-blob blob-1"></div>
        <div className="mesh-blob blob-2"></div>
        <div className="mesh-blob blob-3"></div>
      </div>
      <div className="noise-overlay"></div>

      {/* Main Content Container */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 py-16 lg:py-28 flex flex-col gap-28 md:gap-36">
        
        {/* HERO SECTION */}
        <section className="flex flex-col items-center text-center gap-6 mt-6 fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-badge text-sm font-medium text-indigo-300 mb-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            Disponible para consultoría y proyectos
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-100 to-slate-400 leading-tight">
            Adrián Ramírez
          </h1>

          <p className="text-xl md:text-3xl text-slate-200 max-w-3xl font-light leading-snug">
            Desarrollador de Software & Especialista en <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">Automatización de Procesos</span>
          </p>

          <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Ayudo a empresas a transformar flujos operativos y logísticos complejos en soluciones digitales automatizadas, rápidas y escalables.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <a 
              href="#contacto"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-slate-950 font-bold hover:scale-105 hover:bg-indigo-50 transition-all duration-300 shadow-[0_0_40px_-10px_rgba(255,255,255,0.35)]"
            >
              Iniciar Conversación
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2.5 px-6 py-4 rounded-full glass-badge hover:bg-white/10 text-slate-200 font-medium transition-all duration-200"
              title="Copiar correo"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
              <span>{copied ? '¡Copiado!' : 'adrb95@gmail.com'}</span>
            </button>
          </div>
        </section>

        {/* PILLARS / VALUE PROP */}
        <section className="fade-in-up" style={{ animationDelay: '0.25s' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {valuePillars.map((pillar, i) => (
              <div 
                key={i} 
                className="glass-card rounded-2xl p-6 flex flex-col gap-3 hover:border-indigo-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{pillar.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="fade-in-up" style={{ animationDelay: '0.35s' }}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Áreas de Especialidad
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white">Soluciones y Servicios</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="glass-card rounded-3xl p-8 md:p-10 hover:-translate-y-2 hover:bg-slate-800/40 hover:border-indigo-500/40 transition-all duration-300 group"
              >
                <div className="bg-slate-800/60 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/10 shadow-lg">
                  {service.icon}
                </div>
                <div className="text-xs font-medium text-indigo-400 mb-1 tracking-wide">
                  {service.tagline}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-indigo-200 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* TECH STACK */}
        <section className="fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="glass-card rounded-3xl p-8 md:p-14 text-center border border-white/10 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-indigo-500/10 blur-[110px] pointer-events-none"></div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-3 relative z-10 text-white">
              Tecnologías y Herramientas
            </h2>
            <p className="text-sm md:text-base text-slate-400 max-w-xl mx-auto mb-8 relative z-10">
              Desarrollo con herramientas confiables y de alto rendimiento orientadas a la estabilidad operativa y escalabilidad.
            </p>

            <div className="flex flex-wrap justify-center gap-3 md:gap-4 relative z-10 max-w-3xl mx-auto">
              {technologies.map((tech, index) => (
                <div 
                  key={index}
                  className="glass-badge px-5 py-2.5 rounded-full flex items-center gap-2.5 hover:bg-white/10 hover:text-white transition-all duration-200 cursor-default"
                >
                  <span>{tech.icon}</span>
                  <span className="font-medium text-sm tracking-wide text-slate-200">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contacto" className="text-center fade-in-up pb-8" style={{ animationDelay: '0.65s' }}>
          <div className="glass-card max-w-3xl mx-auto rounded-3xl p-8 md:p-14 border border-indigo-500/20 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-transparent to-purple-500/10 pointer-events-none"></div>
            
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-white relative z-10">
              ¿Listo para optimizar su empresa?
            </h2>
            <p className="text-slate-300 max-w-xl mx-auto mb-8 text-base md:text-lg leading-relaxed relative z-10">
              Conversemos sobre cómo podemos reducir tiempos operativos, automatizar tareas repetitivas y asegurar la integridad de sus datos.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <a 
                href="mailto:adrb95@gmail.com?subject=Contacto%20de%20Proyecto%20-%20Automatizaci%C3%B3n"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 text-white font-semibold hover:from-indigo-500 hover:to-purple-500 hover:scale-105 transition-all duration-300 shadow-xl shadow-indigo-900/30"
              >
                <Mail className="w-5 h-5" />
                <span>adrb95@gmail.com</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl glass-badge hover:bg-white/10 text-slate-300 font-medium transition-all duration-200"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
                <span>{copied ? 'Copiado al portapapeles' : 'Copiar dirección'}</span>
              </button>
            </div>
          </div>
          
          <div className="mt-20 pt-8 border-t border-white/10 text-slate-500 text-sm flex flex-col sm:flex-row items-center justify-between gap-4 max-w-5xl mx-auto">
            <p>© {new Date().getFullYear()} Adrián Ramírez. Todos los derechos reservados.</p>
            <p className="text-xs text-slate-500">Desarrollo de Software & Automatización</p>
          </div>
        </section>

      </main>
    </div>
  );
}
