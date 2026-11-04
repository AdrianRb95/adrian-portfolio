export const translations = {
  es: {
    nav: {
      role: 'Senior Design Engineer & Digital Venture Builder',
      work: 'Proof of Work',
      architecture: 'Arquitectura & Stack',
      craft: 'Filosofía & Craft',
      contact: 'Contacto',
      available: 'Disponible para proyectos selectos',
      talk: 'Iniciar Conversación'
    },
    hero: {
      badge: 'DESIGN ENGINEERING · DIGITAL VENTURE BUILDER · REAL-WORLD SOFTWARE',
      name: 'Adrián Rodríguez',
      titleLine1: 'Ingeniería de Diseño & Sistemas',
      titleLine2: 'Construidos para el Mundo Real.',
      description: 'Senior Design Engineer & Constructor de Ventures Digitales. Transformo operaciones complejas —desde ganadería de precisión satelital y boxes de CrossFit hasta retail con visión artificial y desarrollo inmobiliario boutique— en productos de software de alta gama, táctiles y desplegados en producción real.',
      ctaWork: 'Explorar Proof of Work',
      ctaContact: 'Iniciar Proyecto',
      copySuccess: '¡Email copiado!',
      ticker: [
        '6 VENTURES EN PRODUCCIÓN',
        'REACT 19 · VERCEL · SUPABASE',
        'CUMPLIMIENTO MAG / SENASA DECRETO 43818',
        'TELEMETRÍA SATELITAL SENTINEL-2 NDVI',
        'ARQUITECTURA DE CERO FRICCIÓN'
      ],
      metrics: {
        ventures: { value: '6+', label: 'Ventures Desplegados', sub: 'Producción activa en Vercel' },
        uptime: { value: '99.9%', label: 'Disponibilidad Cloud', sub: 'Edge infrastructure & GIS' },
        craft: { value: '<16ms', label: 'Respuesta Háptica', sub: 'Estándar Emil Kowalski' }
      }
    },
    projects: {
      tag: 'PRUEBA IRREFUTABLE DE CONSTRUCCIÓN',
      title: 'Proof of Work — Proyectos Activos',
      subtitle: 'No conceptos ni maquetas de Figma: sistemas operativos completos, desplegados en la nube, con usuarios reales y arquitecturas de misión crítica.',
      viewLive: 'Ver App en Vivo',
      deepCase: 'Caso de Estudio',
      featuredBadge: 'VENTURE DESTACADO',
      items: [
        {
          id: 'zapance',
          featured: true,
          title: 'Zapance',
          category: 'AgTech · Virtual Fencing OS',
          summary: 'Sistema Operativo de Cercas Virtuales y Pastoreo Dinámico con paridad de hardware frente a líderes globales (Halter / Nofence). Integración con Decreto MAG/SENASA 43818-MAG, auditoría FONAFIFO PSA y NDVI satelital.',
          liveUrl: 'https://potrero-virtual-cr.vercel.app',
          badges: ['[LIVE PRODUCTION]', '[MAG/SENASA]', '[SENTINEL-2 NDVI]', '[LoRaWAN 915MHz]'],
          accentColor: '#10B981',
          stats: [
            { label: 'Normativa', value: '100% MAG/SENASA' },
            { label: 'Pastoreo', value: '-35% Sobrepastoreo' },
            { label: 'Radio IoT', value: 'LoRaWAN 915MHz' }
          ],
          tags: ['React 19', 'Leaflet GIS', 'Sentinel-2 NDVI', 'LoRaWAN', 'GeoJSON', 'PostGIS'],
          caseStudy: {
            title: 'Zapance OS — Ganadería Satelital & Geofencing Dinámico',
            client: 'Sector Agropecuario de Costa Rica & Exportadores Ganaderos',
            challenge: 'La ganadería tradicional en Centroamérica depende de kilómetros de cerca de alambre de púas, deforestación innecesaria, erosión de suelos y cero trazabilidad oficial. Las soluciones nórdicas o neozelandesas (Halter/Nofence) superan los $400 USD por collar con suscripciones exorbitantes e incompatibilidad con las normativas locales del MAG/SENASA.',
            solution: 'Diseñamos Zapance como un Sistema Operativo completo de cercas virtuales y pastoreo regenerativo adaptado a Costa Rica. Con polígonos dinámicos trazados en mapas satelitales, búfer sonoro de aproximación (geocercas de advertencia progresiva), integración directa con el Decreto Ejecutivo 43818-MAG (Trazar Agro / CVO) y cálculo espectral de biomasa forrajera vía Sentinel-2 NDVI.',
            architecturePoints: [
              'Geocercas poligonales interactivas sobre capas satelitales Sentinel-2 con cálculo de NDVI para no sobrepastorear parcelas secas.',
              'Simulador y telemetría de collar LoRaWAN a 915 MHz con estímulo de advertencia sonora progresiva previo a cualquier corrección.',
              'Módulo de auditoría forestal para el Pago de Servicios Ambientales (PSA) de FONAFIFO bajo Ley Forestal 7575.',
              'Ficha técnica y trazabilidad individual de ganado exportable apta para inspección sanitaria SENASA.'
            ]
          }
        },
        {
          id: 'pulsegym',
          featured: true,
          title: 'PulseGym OS',
          category: 'Sports Infrastructure · Box CRM',
          summary: 'CRM atlético dual (Atleta vs Coach/Admin) para boxes de CrossFit y Hyrox. Pizarra WOD interactiva, cronómetro táctil multi-modal de intervalos, roster de check-in en piso y cobro mensual automatizado.',
          liveUrl: 'https://pulsegym-crm.vercel.app',
          badges: ['[LIVE PRODUCTION]', '[DUAL ROLE PORTAL]', '[WOD INTERVAL ENGINE]', '[REACT 19]'],
          accentColor: '#6366F1',
          stats: [
            { label: 'Check-in Piso', value: '<2s por Atleta' },
            { label: 'Retención Box', value: '+28% Trimestral' },
            { label: 'Ergonomía', value: '48px+ Tap Targets' }
          ],
          tags: ['React 19', 'Web Audio API', 'CrossFit / Hyrox Logic', 'Supabase', 'Tailwind v4'],
          caseStudy: {
            title: 'PulseGym OS — CRM de Alto Rendimiento para Boxes',
            client: 'Boxes de CrossFit, Hyrox & Gimnasios Funcionales',
            challenge: 'Los software existentes de gestión de gimnasios (Mindbody, Wodify) son lentos, con interfaces de escritorio saturadas, costos prohibitivos para el mercado latinoamericano y pésima experiencia en el teléfono cuando el atleta está sudado y con tiza en las manos.',
            solution: 'Construimos PulseGym OS con mentalidad táctil de grado militar: una experiencia mobile-first ultrarrápida con cambio de rol instantáneo entre "Modo Atleta" y "Modo Coach". Cuenta con temporizador sonoro de alta precisión (EMOM, AMRAP, For Time, Tabata) generado mediante Web Audio API, pizarra de WOD con pesos prescritos (Rx / Scaled) y control de asistencia con un solo toque.',
            architecturePoints: [
              'Temporizador Web Audio Oscillator libre de drift de hilo de JavaScript, audible en ambientes ruidosos con música alta.',
              'Portal dual con permisos dinámicos: el coach ve el roster en vivo y aprueba pagos; el atleta registra sus PRs y marcas.',
              'Optimización ergonómica: áreas de pulsación mínimas de 52x52px pensadas para uso con dedos sudados o manos con magnesia.',
              'Liquidación automática de mensualidades y alertas proactivas antes del vencimiento.'
            ]
          }
        },
        {
          id: 'threefeet',
          featured: false,
          title: '3FT (Three Feet)',
          category: 'Circular Fashion · AI Vision Marketplace',
          summary: 'Marketplace social de moda circular con recorte inteligente por Computer Vision. Transforma fotos de celular en tomas de estudio flat-lay profesionales, feed editorial dinámico e integración con Correos de Costa Rica.',
          liveUrl: 'https://3ft-thrift-app.vercel.app',
          badges: ['[LIVE PRODUCTION]', '[AI STUDIO VISION]', '[CORREOS CR API]', '[CIRCULAR FASHION]'],
          accentColor: '#EC4899',
          stats: [
            { label: 'Catalogación', value: '45s vs 12min manual' },
            { label: 'Render', value: '100% Plano de Estudio' },
            { label: 'Logística', value: 'API Pymexpress CR' }
          ],
          tags: ['Computer Vision AI', 'Canvas Alpha Shaders', 'Correos de Costa Rica', 'React 19'],
          caseStudy: {
            title: '3FT — Marketplace Social de Segunda Mano con IA de Estudio',
            client: 'Emprendedores de Ropa Vintage & Moda Circular',
            challenge: 'La venta de ropa de segunda mano en Instagram sufre por fotos con mala iluminación, fondos desordenados en pisos de casas y tediosa negociación manual de envíos por mensajería.',
            solution: '3FT incorpora un motor de Computer Vision que detecta los contornos de la prenda, elimina sombras irregulares y monta el artículo sobre una superficie de estudio neutra con iluminación balanceada. Incluye cálculo de fletes con las tarifas vigentes de Correos de Costa Rica.',
            architecturePoints: [
              'Segmentación y remoción de fondo instantánea en el navegador para catálogo premium uniforme.',
              'Feed visual con micro-interacciones inspiradas en las mejores aplicaciones editoriales de moda.',
              'Tarifador automático por peso y cantón para envíos por Correos de Costa Rica.',
              'Sistema de checkout directo con soporte de comprobante SINPE Móvil.'
            ]
          }
        },
        {
          id: 'manke',
          featured: false,
          title: 'Manké Guanacaste',
          category: 'Real Estate · Bioclimatic Master Plan',
          summary: 'Condominio residencial horizontal boutique de 26 filiales en Belén de Carrillo, Guanacaste. Arquitectura bioclimática de una planta (Casa Nicole 80m² Prefablock) y urbanismo concéntrico de plaza ceremonial chorotega.',
          liveUrl: 'https://belen-master-plan.vercel.app',
          badges: ['[LIVE DEMO]', '[GUANACASTE MASTERPLAN]', '[BIOCLIMATIC ARCH]', '[PREFABLOCK 80m²]'],
          accentColor: '#06B6D4',
          stats: [
            { label: 'Filiales', value: '26 Lotes Privados' },
            { label: 'Confort Térmico', value: '-4.2°C Pasivo' },
            { label: 'Sistema', value: 'Prefablock Sismo-resistente' }
          ],
          tags: ['Master Plan Interactivo', 'Arquitectura Bioclimática', 'SVG Geométrico', 'React 19'],
          caseStudy: {
            title: 'Manké — Urbanismo Bioclimático en el Trópico Seco',
            client: 'Desarrolladora Inmobiliaria Guanacasteca',
            challenge: 'Comercializar lotes residenciales en el Pacífico Seco requiere convencer a compradores exigentes de que el diseño arquitectónico soporta el calor extremo de Guanacaste sin depender al 100% de costosos aires acondicionados.',
            solution: 'Creamos la plataforma interactiva del Master Plan de Manké, visualizando la orientación de las 26 filiales frente a los vientos alisios dominantes, la plaza central comunitaria chorotega y el prototipo bioclimático Casa Nicole (80m²) construido con Prefablock y aleros de protección solar.',
            architecturePoints: [
              'Visor vectorial interactivo con estado de reserva de cada filial en tiempo real.',
              'Desglose técnico de la solución estructural Casa Nicole con ventilación cruzada cenital.',
              'Calculadora financiera de cuota de mantenimiento y amenidades sustentables (pozo propio, arborización nativa).'
            ]
          }
        },
        {
          id: 'suwa',
          featured: false,
          title: 'SUWÁ Property OS',
          category: 'Hospitality · Luxury PMS',
          summary: 'Property Management System para villas de ultra-lujo en Guanacaste y Península de Papagayo. Verificación fotográfica Proof-of-Work de limpieza antes de check-in y cobro integrado vía SINPE Móvil / Tilopay.',
          liveUrl: '#',
          badges: ['[ENTERPRISE PMS]', '[PROOF OF WORK INSPECTION]', '[SINPE / TILOPAY]', '[HACIENDA 4.3]'],
          accentColor: '#F59E0B',
          stats: [
            { label: 'Reclamaciones', value: '0% por Limpieza' },
            { label: 'Confirmación', value: '<30s SINPE Móvil' },
            { label: 'Fiscal', value: 'Facturación 4.3 Automática' }
          ],
          tags: ['Property OS', 'TILOPAY API', 'SINPE Móvil', 'Hacienda 4.3 XML', 'Housekeeping PoW'],
          caseStudy: {
            title: 'SUWÁ Property OS — PMS de Villas de Lujo con Verificación Real',
            client: 'Gestoras de Villas Vacacionales en Guanacaste (Las Catalinas / Papagayo)',
            challenge: 'Los huéspedes que pagan $800-$2,500/noche exigen perfección absoluta. Cualquier toalla faltante o detalle descuidado genera reembolsos y malas reseñas, mientras que los PMS tradicionales no supervisan la ejecución física de las mucamas en campo.',
            solution: 'SUWÁ implementa un flujo de inspección Proof-of-Work: el personal de limpieza debe escanear el tag NFC o código de cada habitación y subir fotos obligatorias con georreferenciación antes de que el sistema libere el código de la cerradura inteligente al huésped.',
            architecturePoints: [
              'Auditoría fotográfica de preparación de villa con marca de tiempo y geolocalización verificada.',
              'Integración con pasarela Tilopay y conciliador desatendido de transferencias SINPE Móvil.',
              'Emisión automática de tiquete y factura electrónica ante el Ministerio de Hacienda de Costa Rica.'
            ]
          }
        },
        {
          id: 'ruta21',
          featured: false,
          title: 'Ruta 21 & RUN N\' REEF',
          category: 'Sports Tourism · Trail Running Platform',
          summary: 'Plataforma de turismo deportivo comercial, trail running y carreras en el Pacífico Norte de Costa Rica. Visor 3D de altimetría GPX en senderos tropicales, gestión de inscripciones y portal para atletas.',
          liveUrl: '#',
          badges: ['[ATHLETIC VENTURE]', '[3D TOPO GPX]', '[SPORTS TOURISM DMC]', '[GUANACASTE PACIFIC]'],
          accentColor: '#3B82F6',
          stats: [
            { label: 'Atletas', value: '+1,200 en Eventos' },
            { label: 'Topografía', value: 'Perfil GPX Milimétrico' },
            { label: 'Turismo', value: 'Destino Papagayo / Tamarindo' }
          ],
          tags: ['Three.js GPX Viewer', 'Trail Running Logistics', 'Chip Timing Hub', 'DMC Sports'],
          caseStudy: {
            title: 'Ruta 21 Run Club & RUN N\' REEF — Turismo Deportivo y Logística de Trail',
            client: 'Comunidad Atlética del Pacífico Norte & Turistas Internacionales',
            challenge: 'La organización de eventos deportivos de trail en terrenos costeros con microclimas severos exige una comunicación milimétrica de altimetría, puestos de hidratación y seguridad médica en ruta.',
            solution: 'Construimos una plataforma interactiva que renderiza el perfil altimétrico en 3D de cada ruta, sincroniza los registros de atletas con el sistema de cronometraje por chips y promociona paquetes combinados de deporte + hospedaje (DMC).',
            architecturePoints: [
              'Visor topográfico 3D de senderos tropicales con puntos críticos de hidratación y primeros auxilios.',
              'Sistema de asignación de categorías, waivers digitales y entrega de dorsales.',
              'Integración con comercios locales de Guanacaste para fomento del turismo comunitario.'
            ]
          }
        }
      ]
    },
    philosophy: {
      tag: 'CRAFT & INGENIERÍA DE DISEÑO',
      title: 'El Estándar Emil Kowalski: Software que se Siente Físico',
      subtitle: 'Creemos que las aplicaciones web no deben sentirse como documentos de texto inertes, sino como hardware táctil de $100 millones de dólares con respuesta inmediata y acabado luminescente.',
      cards: [
        {
          title: 'Física de Resortes & Compresión Táctil',
          desc: 'Los botones se comprimen al tacto (active:scale-[0.98]) con curvas elásticas calibradas. La interfaz responde visualmente en menos de 16 milisegundos, ofreciendo retroalimentación táctil antes de que la red responda.',
          badge: 'Micro-feedback <16ms'
        },
        {
          title: 'Bordes Luminescentes & Obsidian Mate',
          desc: 'Rechazamos los bordes grises planos y los gradientes genéricos. Utilizamos biseles luminescentes (box-shadow inset 0 1px 0 rgba(255,255,255,0.12)) que imitan la luz cenital atrapada en cristal pulido.',
          badge: 'Surface Depth Hierarchy'
        },
        {
          title: 'Ergonomía de Campo para Dedos Sudados',
          desc: 'Diseñado para atletas en boxes de CrossFit o ganaderos con botas en el potrero. Áreas de toque mínimas de 48x48px, alto contraste bajo el sol de Guanacaste y eliminación total del tap-flash móvil.',
          badge: 'Rugged Hardware Usability'
        },
        {
          title: 'Prueba de Trabajo vs Promesas de Figma',
          desc: 'Cada tarjeta en este portafolio enlaza a software real en vivo en Vercel. Diseñamos con código en React 19, probamos en dispositivos móviles físicos y entregamos soluciones que facturan y operan.',
          badge: 'Zero AI Slop'
        }
      ]
    },
    stack: {
      tag: 'STACK TECNOLÓGICO & INFRAESTRUCTURA',
      title: 'Arquitectura Diseñada para Rendimiento Extremo',
      subtitle: 'Un arsenal de tecnologías modernas seleccionadas por confiabilidad, velocidad de renderizado y escalabilidad sin fricción.',
      categories: [
        {
          name: 'Frontend & Design Engineering',
          items: [
            { name: 'React 19', desc: 'Concurrent UI, Server Components & Action Hooks' },
            { name: 'Tailwind CSS v4', desc: 'CSS-first engine con variables nativas ultra-rápidas' },
            { name: 'Three.js / WebGL', desc: 'Shaders de ruido fractal y mallas 3D interactivas' },
            { name: 'Lucide Icons', desc: 'Iconografía vectorizada precisa de trazo uniforme' },
            { name: 'Vite 6', desc: 'Bundler optimizado con Hot Module Replacement <50ms' }
          ]
        },
        {
          name: 'GIS, Satélites & Hardware IoT',
          items: [
            { name: 'Sentinel-2 NDVI', desc: 'Índice de vegetación y biomasa satelital de la ESA' },
            { name: 'Leaflet & GeoJSON', desc: 'Cartografía vectorial y polígonos de geocercas' },
            { name: 'LoRaWAN 915MHz', desc: 'Red de largo alcance para telemetría de collares ganaderos' },
            { name: 'PostGIS / Spatial SQL', desc: 'Cálculo de intersección espacial y buffers de advertencia' }
          ]
        },
        {
          name: 'Backend, Cloud & Pagos',
          items: [
            { name: 'Supabase / PostgreSQL', desc: 'Bases de datos relacionales con Row Level Security' },
            { name: 'Vercel Edge Network', desc: 'Despliegues globales serverless de latencia ultra-baja' },
            { name: 'SINPE Móvil & Tilopay', desc: 'Integración de pasarelas de pago y cobros QR en Costa Rica' },
            { name: 'Factura Electrónica 4.3', desc: 'Firmado de XMLs y comunicación con Ministerio de Hacienda' }
          ]
        }
      ]
    },
    contact: {
      tag: 'INICIAR COLABORACIÓN',
      title: '¿Tienes un Desafío Operativo o un Venture por Construir?',
      description: 'Estoy disponible para consultoría de arquitectura de software, liderazgo de diseño de ingeniería y construcción de productos digitales de alta conversión.',
      emailBtn: 'Enviar Correo Directo',
      waBtn: 'Chatear por WhatsApp',
      copySuccess: '¡Email copiado al portapapeles!',
      copyBtn: 'Copiar Email',
      location: 'Guanacaste & San José, Costa Rica · Disponible Remoto Global',
      responseTime: 'Respuesta promedio en menos de 4 horas'
    },
    footer: {
      copyright: 'Adrián Rodríguez. Construido con React 19, Tailwind CSS v4 & WebGL Three.js.',
      tagline: 'Senior Design Engineer & Digital Venture Builder.',
      proofBadge: '100% PRODUCTION READY CODE'
    }
  },
  en: {
    nav: {
      role: 'Senior Design Engineer & Digital Venture Builder',
      work: 'Proof of Work',
      architecture: 'Architecture & Stack',
      craft: 'Craft & Philosophy',
      contact: 'Contact',
      available: 'Available for Select Ventures',
      talk: 'Start Conversation'
    },
    hero: {
      badge: 'DESIGN ENGINEERING · DIGITAL VENTURE BUILDER · REAL-WORLD SOFTWARE',
      name: 'Adrián Rodríguez',
      titleLine1: 'Design Engineering & Systems',
      titleLine2: 'Crafted for the Real World.',
      description: 'Senior Design Engineer & Digital Venture Builder. I transform complex operational challenges—from precision satellite livestock ranching and CrossFit boxes to computer-vision circular retail and boutique residential master planning—into tactile, high-performance software deployed in live production.',
      ctaWork: 'Explore Proof of Work',
      ctaContact: 'Start a Project',
      copySuccess: 'Email copied!',
      ticker: [
        '6 VENTURES IN LIVE PRODUCTION',
        'REACT 19 · VERCEL · SUPABASE',
        'MAG / SENASA DECREE 43818 COMPLIANT',
        'SENTINEL-2 NDVI SATELLITE TELEMETRY',
        'ZERO-FRICTION ARCHITECTURE'
      ],
      metrics: {
        ventures: { value: '6+', label: 'Ventures Deployed', sub: 'Live on Vercel production' },
        uptime: { value: '99.9%', label: 'Cloud Availability', sub: 'Edge infrastructure & GIS' },
        craft: { value: '<16ms', label: 'Haptic Feedback', sub: 'Emil Kowalski Standard' }
      }
    },
    projects: {
      tag: 'IRREFUTABLE PROOF OF WORK',
      title: 'Proof of Work — Active Deployments',
      subtitle: 'Not Figma mockups or speculative concepts: full-scale operating systems deployed on cloud infrastructure with real users and mission-critical reliability.',
      viewLive: 'View Live App',
      deepCase: 'Case Study',
      featuredBadge: 'FEATURED VENTURE',
      items: [
        {
          id: 'zapance',
          featured: true,
          title: 'Zapance',
          category: 'AgTech · Virtual Fencing OS',
          summary: 'Virtual Livestock Fencing & Dynamic Grazing Operating System with hardware-parity against global leaders (Halter / Nofence). Direct integration with MAG/SENASA Decree 43818, FONAFIFO PSA forest audits, and Sentinel-2 NDVI satellite imagery.',
          liveUrl: 'https://potrero-virtual-cr.vercel.app',
          badges: ['[LIVE PRODUCTION]', '[MAG/SENASA]', '[SENTINEL-2 NDVI]', '[LoRaWAN 915MHz]'],
          accentColor: '#10B981',
          stats: [
            { label: 'Compliance', value: '100% MAG/SENASA' },
            { label: 'Pasture Loss', value: '-35% Overgrazing' },
            { label: 'IoT Protocol', value: 'LoRaWAN 915MHz' }
          ],
          tags: ['React 19', 'Leaflet GIS', 'Sentinel-2 NDVI', 'LoRaWAN', 'GeoJSON', 'PostGIS'],
          caseStudy: {
            title: 'Zapance OS — Satellite Precision Ranching & Dynamic Geofencing',
            client: 'Costa Rican Cattle Ranching Sector & Beef Exporters',
            challenge: 'Traditional cattle ranching relies on miles of barbwire fencing, unnecessary land clearing, soil compaction, and zero digital compliance with livestock traceability decrees. Foreign solutions (Halter, Nofence) cost over $400/collar plus prohibitive recurring subscriptions and lack local regulatory integration.',
            solution: 'We engineered Zapance as a full-fledged virtual fencing and regenerative grazing OS tailored for Costa Rica and tropical environments. Features dynamic polygon geofencing over satellite maps, progressive audio warning zones, official compliance with Executive Decree 43818-MAG (Trazar Agro / CVO), and real-time vegetative forage biomass calculation via Sentinel-2 NDVI spectral bands.',
            architecturePoints: [
              'Interactive polygon geofences atop Sentinel-2 satellite imagery with vegetative biomass indexing to prevent pasture depletion.',
              'LoRaWAN 915 MHz collar node telemetry simulator with multi-stage audio warning cues before humane stimulus.',
              'Forest preservation audit module designed for FONAFIFO Payment for Environmental Services (PSA) under Forestry Law 7575.',
              'Individual cattle sanitary passport ready for official SENASA export verification.'
            ]
          }
        },
        {
          id: 'pulsegym',
          featured: true,
          title: 'PulseGym OS',
          category: 'Sports Infrastructure · Box CRM',
          summary: 'Dual-role athletic CRM (Athlete workout log vs Head Coach floor command) for CrossFit & Hyrox boxes. Interactive WOD whiteboard, tactical multi-modal interval timer, 1-tap floor check-in roster, and automated dues billing.',
          liveUrl: 'https://pulsegym-crm.vercel.app',
          badges: ['[LIVE PRODUCTION]', '[DUAL ROLE PORTAL]', '[WOD INTERVAL ENGINE]', '[REACT 19]'],
          accentColor: '#6366F1',
          stats: [
            { label: 'Floor Check-in', value: '<2s per Athlete' },
            { label: 'Box Retention', value: '+28% Quarterly' },
            { label: 'Touch Ergonomics', value: '48px+ Tap Targets' }
          ],
          tags: ['React 19', 'Web Audio API', 'CrossFit / Hyrox Logic', 'Supabase', 'Tailwind v4'],
          caseStudy: {
            title: 'PulseGym OS — High-Performance Box CRM & Workout Engine',
            client: 'CrossFit Affiliates, Hyrox Training Centers & Functional Gyms',
            challenge: 'Legacy gym software (Mindbody, Wodify) is sluggish, cluttered with desktop paradigms, overpriced for emerging markets, and nearly impossible to use on mobile devices with chalked, sweaty hands.',
            solution: 'PulseGym OS was engineered with military-grade mobile ergonomics: a split-second role toggle between "Athlete Mode" and "Coach Mode", a drift-free interval timer (EMOM, AMRAP, For Time, Tabata) built directly on the Web Audio API, and an interactive WOD whiteboard with instant 1-tap floor check-ins.',
            architecturePoints: [
              'Web Audio oscillator timer immune to JavaScript thread latency, audible over loud gym sound systems.',
              'Dynamic dual-role portal: coaches view floor rosters in real-time while athletes track PRs and barbell loads.',
              'Ergonomic tap targets (>52px) calibrated for rugged use in high-intensity gym environments.',
              'Automated recurring billing cycles with proactive renewal notifications.'
            ]
          }
        },
        {
          id: 'threefeet',
          featured: false,
          title: '3FT (Three Feet)',
          category: 'Circular Fashion · AI Vision Marketplace',
          summary: 'Social circular fashion marketplace featuring computer-vision background removal. Converts raw smartphone camera snapshots into studio-grade flat-lay product renders, with an editorial feed and Costa Rica Postal Service shipping rates.',
          liveUrl: 'https://3ft-thrift-app.vercel.app',
          badges: ['[LIVE PRODUCTION]', '[AI STUDIO VISION]', '[CORREOS CR API]', '[CIRCULAR FASHION]'],
          accentColor: '#EC4899',
          stats: [
            { label: 'Cataloging Time', value: '45s vs 12min manual' },
            { label: 'Render Style', value: '100% Studio Flat-Lay' },
            { label: 'Logistics', value: 'Correos CR Pymexpress' }
          ],
          tags: ['Computer Vision AI', 'Canvas Alpha Shaders', 'Correos de Costa Rica', 'React 19'],
          caseStudy: {
            title: '3FT — Circular Second-Hand Social Marketplace with Studio AI',
            client: 'Vintage Apparel Curators & Circular Fashion Creators',
            challenge: 'Selling thrift and second-hand clothing on social media suffers from poor lighting, messy domestic backgrounds, and friction-filled manual shipping quotes.',
            solution: '3FT implements an in-browser Computer Vision pipeline that detects garment contours, strips uneven shadows, and renders clothing atop neutral studio surfaces. Includes real-time Correos de Costa Rica courier rate calculations.',
            architecturePoints: [
              'Instant client-side canvas contour extraction for consistent luxury studio aesthetics.',
              'Editorial social feed with tactile micro-interactions inspired by top luxury magazines.',
              'Automated parcel shipping calculation by weight and postal district across Costa Rica.',
              'Streamlined mobile checkout with direct SINPE Móvil proof upload.'
            ]
          }
        },
        {
          id: 'manke',
          featured: false,
          title: 'Manké Guanacaste',
          category: 'Real Estate · Bioclimatic Master Plan',
          summary: 'Boutique 26-lot horizontal residential condominium in Belén de Carrillo, Guanacaste. Bioclimatic single-story architectural prototype (Casa Nicole 80m² Prefablock) with an urban concentric plan inspired by Chorotega plazas.',
          liveUrl: 'https://belen-master-plan.vercel.app',
          badges: ['[LIVE DEMO]', '[GUANACASTE MASTERPLAN]', '[BIOCLIMATIC ARCH]', '[PREFABLOCK 80m²]'],
          accentColor: '#06B6D4',
          stats: [
            { label: 'Condo Lots', value: '26 Private Parcels' },
            { label: 'Passive Comfort', value: '-4.2°C Thermal Load' },
            { label: 'System', value: 'Earthquake-safe Prefablock' }
          ],
          tags: ['Interactive Master Plan', 'Bioclimatic CAD', 'Vector SVG GIS', 'React 19'],
          caseStudy: {
            title: 'Manké — Bioclimatic Master Plan in the Dry Tropics',
            client: 'Guanacaste Eco-Residential Developers',
            challenge: 'Marketing residential lots in Costa Rica\'s North Pacific dry tropical zone requires proving to discerning buyers that the architectural layout withstands extreme heat without extreme air conditioning bills.',
            solution: 'We built Manké\'s interactive Master Plan platform, visualizing lot alignments against prevailing trade winds, the central Chorotega ceremonial plaza, and the Casa Nicole 80m² bioclimatic prototype featuring passive cross-ventilation.',
            architecturePoints: [
              'Interactive SVG vector map with real-time lot availability and boundary coordinates.',
              'Bioclimatic thermal ventilation blueprints highlighting shaded overhangs and solar deflection.',
              'Financial HOA estimator and eco-amenity specs (dedicated private well, native tree canopy).'
            ]
          }
        },
        {
          id: 'suwa',
          featured: false,
          title: 'SUWÁ Property OS',
          category: 'Hospitality · Luxury PMS',
          summary: 'Property Management System for ultra-luxury villas in Guanacaste & Papagayo Peninsula. Georeferenced Proof-of-Work photographic housekeeping verification prior to check-in, paired with native SINPE Móvil & Tilopay payments.',
          liveUrl: '#',
          badges: ['[ENTERPRISE PMS]', '[PROOF OF WORK INSPECTION]', '[SINPE / TILOPAY]', '[HACIENDA 4.3]'],
          accentColor: '#F59E0B',
          stats: [
            { label: 'Guest Complaints', value: '0% Cleanliness Issues' },
            { label: 'Payment Time', value: '<30s SINPE Instant' },
            { label: 'Tax Compliance', value: 'Automated 4.3 Invoicing' }
          ],
          tags: ['Property OS', 'TILOPAY API', 'SINPE Móvil', 'Hacienda 4.3 XML', 'Housekeeping PoW'],
          caseStudy: {
            title: 'SUWÁ Property OS — Luxury Villa PMS with Verified Turnovers',
            client: 'High-End Vacation Rental Operators in Guanacaste (Las Catalinas / Papagayo)',
            challenge: 'Guests paying $1,000 to $3,000/night demand absolute perfection. A single missed detail causes refunds and damaged reputations, yet existing PMS tools fail to verify real-world cleaning execution.',
            solution: 'SUWÁ enforces a Proof-of-Work housekeeping workflow: staff must scan room NFC tags and upload mandatory geotagged inspection photos before smart lock codes are dispatched to arriving guests.',
            architecturePoints: [
              'Time-stamped, geolocated photo verification before releasing guest villa access codes.',
              'Automated reconciliation engine for Costa Rican SINPE Móvil and Tilopay credit card payments.',
              'Direct electronic tax invoice dispatch to Costa Rica\'s Ministry of Finance (Hacienda 4.3 XML).'
            ]
          }
        },
        {
          id: 'ruta21',
          featured: false,
          title: 'Ruta 21 & RUN N\' REEF',
          category: 'Sports Tourism · Trail Running Platform',
          summary: 'Commercial sports tourism and trail running engine across Costa Rica\'s North Pacific coast. Interactive 3D GPX trail elevation viewer, event registration portal, and athletic tour booking.',
          liveUrl: '#',
          badges: ['[ATHLETIC VENTURE]', '[3D TOPO GPX]', '[SPORTS TOURISM DMC]', '[GUANACASTE PACIFIC]'],
          accentColor: '#3B82F6',
          stats: [
            { label: 'Athletes', value: '+1,200 Annually' },
            { label: 'Topography', value: 'Millimetric GPX Profile' },
            { label: 'Tourism', value: 'Papagayo / Tamarindo DMC' }
          ],
          tags: ['Three.js GPX Viewer', 'Trail Running Logistics', 'Chip Timing Hub', 'DMC Sports'],
          caseStudy: {
            title: 'Ruta 21 Run Club & RUN N\' REEF — Sports Tourism & Trail Logistics',
            client: 'North Pacific Athletic Community & International Endurance Travelers',
            challenge: 'Organizing coastal trail endurance events in challenging tropical climates demands precision communication of elevation gains, aid station checkpoints, and safety logistics.',
            solution: 'We engineered an interactive platform rendering 3D topographic GPX trail profiles, syncing athlete registries with RFID timing chips, and bundling race packages with local eco-resorts.',
            architecturePoints: [
              '3D topographic trail visualization with hydration checkpoint overlays and medical stations.',
              'Automated digital waivers, bib number assignments, and athlete category rosters.',
              'Direct integration with local Guanacaste hospitality vendors promoting sustainable sports travel.'
            ]
          }
        }
      ]
    },
    philosophy: {
      tag: 'CRAFT & DESIGN ENGINEERING',
      title: 'The Emil Kowalski Standard: Software that Feels Physical',
      subtitle: 'We reject sterile, generic web templates. We build interfaces that feel like $100M hardware devices with instantaneous tactile feedback, crisp spring curves, and luminescent obsidian depth.',
      cards: [
        {
          title: 'Spring Physics & Tactile Compression',
          desc: 'Buttons compress under pressure (active:scale-[0.98]) with calibrated spring physics. The UI responds in under 16ms, delivering haptic visual confirmation before server latency kicks in.',
          badge: 'Micro-feedback <16ms'
        },
        {
          title: 'Luminescent Chamfers & Matte Obsidian',
          desc: 'No flat gray borders or AI gradients. We craft luminescent chamfers (box-shadow inset 0 1px 0 rgba(255,255,255,0.12)) that capture overhead light like beveled dark glass and anodized aluminum.',
          badge: 'Surface Depth Hierarchy'
        },
        {
          title: 'Rugged Field Ergonomics for Sweaty Hands',
          desc: 'Designed for athletes in CrossFit boxes or ranchers in muddy boots. Strict 48px+ tap targets, high sunlight contrast under Guanacaste skies, and zero mobile tap flash.',
          badge: 'Rugged Hardware Usability'
        },
        {
          title: 'Proof of Work vs Speculative Figma Mockups',
          desc: 'Every card in this showcase points to live code deployed on Vercel. We design directly in React 19, test on physical mobile devices, and deliver systems that actually transact and operate.',
          badge: 'Zero AI Slop'
        }
      ]
    },
    stack: {
      tag: 'TECH STACK & ARCHITECTURE',
      title: 'Engineered for Mission-Critical Performance',
      subtitle: 'A modern arsenal selected for uncompromised reliability, sub-millisecond render cycles, and frictionless cloud scalability.',
      categories: [
        {
          name: 'Frontend & Design Engineering',
          items: [
            { name: 'React 19', desc: 'Concurrent UI, Server Components & Action Hooks' },
            { name: 'Tailwind CSS v4', desc: 'Next-gen CSS engine with native variables & instant compile' },
            { name: 'Three.js / WebGL', desc: 'Perlin noise mesh shaders & interactive 3D terrain models' },
            { name: 'Lucide Icons', desc: 'Precision geometric iconography with consistent stroke weight' },
            { name: 'Vite 6', desc: 'Ultra-fast bundler with Hot Module Replacement under 50ms' }
          ]
        },
        {
          name: 'GIS, Satellites & IoT Hardware',
          items: [
            { name: 'Sentinel-2 NDVI', desc: 'ESA Earth Observation satellite spectral vegetation index' },
            { name: 'Leaflet & GeoJSON', desc: 'Vector cartography, polygon geofences & dynamic buffers' },
            { name: 'LoRaWAN 915MHz', desc: 'Long-range sub-gigahertz telemetry for livestock collars' },
            { name: 'PostGIS / Spatial SQL', desc: 'Real-time spatial intersections and geospatial calculations' }
          ]
        },
        {
          name: 'Backend, Cloud & Local Gateways',
          items: [
            { name: 'Supabase / PostgreSQL', desc: 'Relational database architecture with Row Level Security' },
            { name: 'Vercel Edge Network', desc: 'Ultra-low latency global serverless edge deployment' },
            { name: 'SINPE Móvil & Tilopay', desc: 'Direct Costa Rican payment rails & QR automated reconciliations' },
            { name: 'Tax Invoicing 4.3 XML', desc: 'Cryptographic signing for Costa Rica Ministry of Finance' }
          ]
        }
      ]
    },
    contact: {
      tag: 'GET IN TOUCH',
      title: 'Have an Operational Bottleneck or a High-Impact Venture?',
      description: 'Available for technical venture advisory, design engineering leadership, and end-to-end fullstack product development.',
      emailBtn: 'Send Direct Email',
      waBtn: 'WhatsApp Message',
      copySuccess: 'Email copied to clipboard!',
      copyBtn: 'Copy Email',
      location: 'Guanacaste & San José, Costa Rica · Available Globally Remote',
      responseTime: 'Average response time under 4 hours'
    },
    footer: {
      copyright: 'Adrián Rodríguez. Built with React 19, Tailwind CSS v4 & WebGL Three.js.',
      tagline: 'Senior Design Engineer & Digital Venture Builder.',
      proofBadge: '100% PRODUCTION READY CODE'
    }
  }
};
