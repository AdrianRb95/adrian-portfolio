export const translations = {
  es: {
    nav: {
      role: 'Sistemas & Automatizaciones',
      solutions: 'Soluciones',
      sectors: 'Sectores de Impacto',
      calculator: 'Calculadora ROI',
      stack: 'Tecnologías',
      available: 'Disponible para proyectos',
      contact: 'Contacto',
      startChat: 'Iniciar Charla'
    },
    hero: {
      badge: 'ARQUITECTURA DE SOFTWARE · AUTOMATIZACIÓN · INTEGRACIÓN ERP',
      titleLine1: 'Automatizo la operación de su empresa',
      titleLine2: 'para multiplicar su capacidad.',
      description: 'Diseño e implemento soluciones de automatización de flujos, integraciones de sistemas (ERPs) y arquitectura backend. Convierto procesos manuales lentos en sistemas seguros, automáticos y medibles.',
      ctaPrimary: 'Plantear una necesidad o proyecto',
      copySuccess: '¡Copiado al portapapeles!',
      copyDefault: 'Copiar dirección',
      metrics: {
        efficiency: { label: 'Eficiencia Medible', value: '80% a 95% ahorro de tiempo manual' },
        reliability: { label: 'Seguridad de Datos', value: 'Validaciones estrictas y cero descuadre' },
        connectivity: { label: 'Conectividad Total', value: 'Integración nativa ERPs, APIs y SAT' }
      }
    },
    sectors: {
      tag: 'Versatilidad Multisectorial',
      title: 'Automatización Aplicada por Sector',
      subtitle: 'Soluciones estructuradas que resuelven cuellos de botella específicos en las áreas operativas más críticas de cualquier empresa.',
      items: [
        {
          id: 'logistica',
          tag: 'Logística & Comercio Exterior',
          color: 'cyan',
          title: 'Aduanas, Transporte & Cadena de Suministro',
          subtitle: 'Eliminación del trabajo manual en expedientes, pedimentos y monitoreo de fletes.',
          highlights: [
            'Cruce desatendido de pedimentos, manifiestos y cuentas de gastos',
            'Detección anticipada de inconsistencias documentales antes de multas',
            'Monitoreo centralizado de contenedores en tránsito y aduanas',
            'Generación y envío automático de reportes matutinos a clientes'
          ],
          badge: 'Operación Desatendida',
          line1: 'Pedimento #50218-A -> Validado vs Factura Comercial',
          line2: 'Status Aduana: Despachado (Laredo) -> Alerta enviada a cliente',
          metric: '-94% tiempo de captura en tráfico'
        },
        {
          id: 'finanzas',
          tag: 'Finanzas & Conciliación ERP',
          color: 'emerald',
          title: 'Conciliaciones Bancarias, SAT & Facturación',
          subtitle: 'Flujo financiero blindado entre bancos, portales fiscales y sistemas de gestión.',
          highlights: [
            'Conciliación automática de estados de cuenta bancarios vs facturas emitidas/recibidas',
            'Validación y descarga automática de XMLs fiscales ante el SAT',
            'Actualización automática de cuentas por cobrar y cobros recurrentes',
            'Sincronización en tiempo real de asientos contables en su ERP (Acumatica, SAP, etc.)'
          ],
          badge: 'Auditoría Continua',
          line1: 'Cruce Bancario: 1,420 movimientos verificados automáticamente',
          line2: 'Discrepancias detectadas: 0 | Saldo cuadrado al centavo',
          metric: 'Cierre mensual en 1 hora en vez de 4 días'
        },
        {
          id: 'operaciones',
          tag: 'Operaciones, Almacén & Retail',
          color: 'indigo',
          title: 'Gestión de Inventarios, Almacén & Pedidos',
          subtitle: 'Control preciso de existencias, compras inteligentes y despacho ágil.',
          highlights: [
            'Sincronización de stock entre múltiples bodegas, tiendas y e-commerce',
            'Alertas inteligentes de reabastecimiento basadas en rotación histórica',
            'Automatización de órdenes de compra y recepción de mercancías con lectores',
            'Eliminación de mermas y pedidos duplicados por captura humana errónea'
          ],
          badge: 'Sincronización Multicanal',
          line1: 'Inventario Centralizado: 4 Bodegas sincronizadas en tiempo real',
          line2: 'Stock mínimo activado -> Orden de compra preliminar generada',
          metric: 'Cero ventas sin inventario físico'
        },
        {
          id: 'software',
          tag: 'Portales B2B & Software a la Medida',
          color: 'purple',
          title: 'Plataformas Web, Portales de Clientes & APIs',
          subtitle: 'Herramientas creadas específicamente para la forma en que opera su negocio.',
          highlights: [
            'Portales para clientes: consulta de facturas, pedidos y cotizaciones 24/7',
            'Paneles operativos internos con permisos estrictos por departamento y rol',
            'APIs REST seguras y de alta concurrencia construidas en C# .NET y Python',
            'Migración de hojas de cálculo desordenadas a bases de datos relacionales estables'
          ],
          badge: 'Arquitectura Empresarial',
          line1: 'Portal Clientes: +850 usuarios concurrentes sin degradación',
          line2: 'Microservicio de Facturación: 18ms tiempo promedio de respuesta',
          metric: '99.98% disponibilidad garantizada'
        }
      ]
    },
    solutions: {
      tag: 'Ingeniería de Software',
      title: 'Pilares Técnicos & Servicios',
      subtitle: 'Desarrollo con estándares rigurosos de código, seguridad y documentación para que su empresa crezca sin deuda técnica.',
      card1: {
        tag: 'Automatización de Workflows',
        title: 'Flujos de Trabajo & Procesamiento Desatendido',
        description: 'Sustituyo tareas manuales repetitivas por scripts y microservicios automáticos. Extracción inteligente de información en PDFs, hojas de cálculo de proveedores, cruces de inventario y generación automática de reportes ejecutivos.',
        items: [
          'Extracción y transformación de archivos masivos (ETL)',
          'Generación desatendida de reportes y balances',
          'Alertas instantáneas vía WhatsApp, Slack o Correo',
          'Control de excepciones y bitácoras de auditoría'
        ]
      },
      card2: {
        tag: 'Conectividad Empresarial',
        title: 'Integración de ERPs & APIs',
        description: 'Comunicación fluida entre Acumatica, SAP, plataformas bancarias, sistemas de facturación y software de terceros sin recaptura manual.',
        badge: 'Sincronización bidireccional continua'
      },
      card3: {
        tag: 'A Medida',
        title: 'Portales Web & Herramientas Internas',
        description: 'Aplicaciones web diseñadas exactamente a la medida de la dinámica operativa de su empresa, accesibles desde cualquier navegador con seguridad por rol.',
        badge: 'Interfaces rápidas y seguras'
      },
      card4: {
        tag: 'Base Sólida',
        title: 'Arquitectura Backend & Bases de Datos',
        description: 'Infraestructura sólida en C#, .NET Core, Python y SQL Server capaz de manejar grandes volúmenes de registros con alta disponibilidad, respaldos estructurados y rendimiento instantáneo.'
      }
    },
    calculator: {
      tag: 'Calculadora de Impacto Operativo',
      title: '¿Cuánto tiempo pierde su equipo en tareas manuales?',
      subtitle: 'Ajuste los controles para estimar el ahorro directo en logística, importaciones y conciliaciones administrativas.',
      sliderHours: 'Horas semanales dedicadas a procesos repetitivos',
      sliderHoursUnit: 'hrs / persona',
      sliderHoursMin: '5 hrs (mínimo)',
      sliderHoursMax: '40 hrs (tiempo completo)',
      sliderTeam: 'Colaboradores en el área operativa',
      teamUnitSingular: 'persona',
      teamUnitPlural: 'personas',
      roiBadge: 'Retorno de Inversión Proyectado',
      monthlyHoursSaved: 'Horas liberadas al mes',
      monthlyHoursUnit: '/ mes',
      equivalent: 'Equivalente a',
      shifts: 'jornada(s) laboral(es)',
      annualSavings: 'Ahorro operativo estimado al año',
      disclaimer: 'Basado en costo operativo promedio',
      benefits: [
        'Reducción de errores manuales al 0.1%',
        'Reportes automáticos en tiempo real',
        'Sincronización directa con su ERP'
      ],
      cta: 'Cotizar Automatización',
      emailSubject: 'Propuesta de Automatización para {team} colaboradores',
      emailBody: 'Hola Adrián, calculamos que podemos liberar aproximadamente {hours} horas al mes en nuestra operación. Nos gustaría coordinar una breve charla.'
    },
    tech: {
      tag: 'Tecnología Empresarial',
      title: 'Herramientas & Ecosistema',
      subtitle: 'Stack moderno y robusto enfocado en estabilidad operacional y compatibilidad a largo plazo.'
    },
    contact: {
      badge: 'RESPUESTA DIRECTA',
      title: '¿Conversamos sobre su proyecto u operación?',
      description: 'Si busca eliminar tareas manuales repetitivas, conectar plataformas desconectadas o desarrollar una solución tecnológica sólida, escríbame directamente:',
      copyButton: 'Copiar dirección',
      footerCredits: 'Adrián Ramírez · Soluciones en Automatización & Software',
      allRights: 'Todos los derechos reservados.'
    }
  },

  en: {
    nav: {
      role: 'Software & Automation Architecture',
      solutions: 'Solutions',
      sectors: 'Target Sectors',
      calculator: 'ROI Calculator',
      stack: 'Tech Stack',
      available: 'Available for projects',
      contact: 'Contact',
      startChat: 'Get in Touch'
    },
    hero: {
      badge: 'SOFTWARE ARCHITECTURE · PROCESS AUTOMATION · ERP INTEGRATION',
      titleLine1: 'I automate enterprise operations',
      titleLine2: 'to compound your execution capacity.',
      description: 'I architect and build end-to-end workflow automation, enterprise ERP integrations, and resilient backend systems. Turning slow manual bottlenecks into secure, automated, and auditable pipelines.',
      ctaPrimary: 'Discuss a project or bottleneck',
      copySuccess: 'Copied to clipboard!',
      copyDefault: 'Copy email address',
      metrics: {
        efficiency: { label: 'Measurable Efficiency', value: '80% to 95% manual time eliminated' },
        reliability: { label: 'Data Integrity', value: 'Strict validation rules & zero reconciliation drift' },
        connectivity: { label: 'Full Connectivity', value: 'Native ERP, API, and cloud synchronization' }
      }
    },
    sectors: {
      tag: 'Multi-Industry Versatility',
      title: 'Automation Applied Across Sectors',
      subtitle: 'Engineered solutions that eliminate specific operational roadblocks in the most critical functional areas of any company.',
      items: [
        {
          id: 'logistica',
          tag: 'Logistics & Cross-Border Trade',
          color: 'cyan',
          title: 'Customs, Freight & Supply Chain Operations',
          subtitle: 'Zero manual paperwork across import manifests, customs declarations, and dispatch logs.',
          highlights: [
            'Unattended cross-checking of customs pedimentos, manifests, and freight bills',
            'Early discrepancy detection before customs penalties or demurrage delays occur',
            'Real-time tracking of in-transit shipping containers, ports, and border crossings',
            'Automated morning executive summary delivery directly to logistics clients'
          ],
          badge: 'Hands-Free Operation',
          line1: 'Entry Doc #50218-A -> Verified against Commercial Invoice',
          line2: 'Customs Status: Cleared (Laredo) -> Client automated notification sent',
          metric: '-94% dispatch data entry time'
        },
        {
          id: 'finanzas',
          tag: 'Finance & ERP Reconciliation',
          color: 'emerald',
          title: 'Bank Reconciliations, Tax Portals & Invoicing',
          subtitle: 'Fortified financial data flow connecting banking, tax authorities, and core ERP systems.',
          highlights: [
            'Automated bank statement reconciliation against issued/received invoices',
            'Automated fiscal invoice and XML validation and downloads from government portals',
            'Real-time accounts receivable aging and recurring billing synchronization',
            'Instant general ledger journal entry sync into your ERP (Acumatica, SAP, etc.)'
          ],
          badge: 'Continuous Audit Trail',
          line1: 'Bank Matching: 1,420 transactions automatically reconciled',
          line2: 'Discrepancies found: 0 | Ledger balanced to the cent',
          metric: 'Monthly book close in 1 hour instead of 4 days'
        },
        {
          id: 'operaciones',
          tag: 'Operations, Inventory & Retail',
          color: 'indigo',
          title: 'Multi-Warehouse Inventory & Order Fulfillment',
          subtitle: 'Precision stock tracking, intelligent replenishment, and seamless fulfillment.',
          highlights: [
            'Real-time inventory synchronization across multi-location warehouses and e-commerce',
            'Smart restocking alerts triggered by dynamic historical velocity and lead times',
            'Automated purchase order creation and warehouse scanner receipt pipelines',
            'Elimination of stockouts, overselling, and manual order entry duplication'
          ],
          badge: 'Omnichannel Sync',
          line1: 'Central Inventory: 4 Warehouses synchronized in real-time',
          line2: 'Safety stock threshold hit -> Draft Purchase Order generated',
          metric: 'Zero out-of-stock orders'
        },
        {
          id: 'software',
          tag: 'B2B Client Portals & Custom Software',
          color: 'purple',
          title: 'Web Platforms, Client Self-Service & Robust APIs',
          subtitle: 'Software tailor-made to match exactly how your team works and scales.',
          highlights: [
            '24/7 Client portals: invoice retrieval, order status, and instant quote generation',
            'Internal operational command centers with strict role-based access control (RBAC)',
            'High-concurrency, low-latency RESTful APIs engineered in C# .NET and Python',
            'Seamless migration of fragile, oversized spreadsheets into rock-solid relational DBs'
          ],
          badge: 'Enterprise Architecture',
          line1: 'Client Portal: +850 concurrent users with zero latency drift',
          line2: 'Billing Microservice: 18ms average roundtrip latency',
          metric: '99.98% guaranteed uptime SLA'
        }
      ]
    },
    solutions: {
      tag: 'Software Engineering',
      title: 'Core Technical Capabilities',
      subtitle: 'Built with rigorous code quality, defensive data validation, and clean architecture so your business scales without technical debt.',
      card1: {
        tag: 'Workflow Automation',
        title: 'Unattended Background Workflows & Data Pipelines',
        description: 'I replace tedious, repetitive manual tasks with bulletproof background workers and microservices. Intelligent extraction from vendor PDFs, complex spreadsheets, inventory cross-referencing, and automated executive reporting.',
        items: [
          'Bulk data extraction and transformation (ETL pipelines)',
          'Automated unattended financial and operational report generation',
          'Instant multi-channel alerts via WhatsApp, Slack, or Email',
          'Auditable exception handling and centralized error telemetry'
        ]
      },
      card2: {
        tag: 'Enterprise Connectivity',
        title: 'ERP & System Integrations',
        description: 'Frictionless data exchange between Acumatica, SAP, commercial banking APIs, invoicing platforms, and custom internal software.',
        badge: 'Continuous bidirectional synchronization'
      },
      card3: {
        tag: 'Tailor-Made',
        title: 'Custom Web Apps & Internal Tools',
        description: 'Web applications purposefully built around your company’s exact operational workflows, secure and accessible across any device.',
        badge: 'High-speed, role-secured interfaces'
      },
      card4: {
        tag: 'Solid Foundation',
        title: 'Backend Architecture & Database Engineering',
        description: 'Resilient backend foundations built in C#, .NET Core, Python, and SQL Server designed to process heavy transaction volumes with high availability and instant responsiveness.'
      }
    },
    calculator: {
      tag: 'Operational Impact Calculator',
      title: 'How many hours does your team lose to manual workflows?',
      subtitle: 'Adjust the controls below to project direct time and cost savings across logistics, billing, and back-office reconciliation.',
      sliderHours: 'Weekly hours spent on manual, repetitive tasks',
      sliderHoursUnit: 'hrs / team member',
      sliderHoursMin: '5 hrs (part-time)',
      sliderHoursMax: '40 hrs (full-time)',
      sliderTeam: 'Team members handling operational data',
      teamUnitSingular: 'person',
      teamUnitPlural: 'people',
      roiBadge: 'Projected Return on Investment',
      monthlyHoursSaved: 'Hours liberated per month',
      monthlyHoursUnit: '/ mo',
      equivalent: 'Equivalent to',
      shifts: 'full-time employee shift(s)',
      annualSavings: 'Estimated annual operational savings',
      disclaimer: 'Calculated using median operations cost benchmark',
      benefits: [
        'Manual error rate reduced to <0.1%',
        'Real-time automated reports delivered on schedule',
        'Direct automated synchronization with your ERP'
      ],
      cta: 'Request an Automation Quote',
      emailSubject: 'Automation Proposal for {team} team members',
      emailBody: 'Hi Adrian, we calculated that we can liberate approximately {hours} hours per month in our operations. We would like to schedule a brief introductory call.'
    },
    tech: {
      tag: 'Enterprise Technology',
      title: 'Battle-Tested Tech Stack',
      subtitle: 'A modern, reliable technology stack chosen for operational stability, maintainability, and long-term compatibility.'
    },
    contact: {
      badge: 'DIRECT INQUIRIES',
      title: 'Ready to optimize your company’s operations?',
      description: 'Whether you want to automate repetitive manual tasks, connect siloed systems, or build custom enterprise software, reach out directly:',
      copyButton: 'Copy email address',
      footerCredits: 'Adrián Ramírez · Software Architecture & Process Automation',
      allRights: 'All rights reserved.'
    }
  }
};
