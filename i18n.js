// Textos em inglês e espanhol. O português é o que já está no HTML:
// script.js lê o PT do DOM na carga, então ele não é repetido aqui.
// Listas (…List) são HTML com <li>.

const li = (...items) => items.map((t) => `<li>${t}</li>`).join('');

window.I18N = {
  pt: {
    ui: {
      htmlLang: 'pt-BR',
      title: 'Júlio César Andrade · Líder de Tecnologia & IA',
      description: 'Portfólio de Júlio César Andrade, Líder de Tecnologia & IA. Construo produtos in-house que substituem SaaS, com LLMs e RAG em produção.',
      roles: ['Líder de Tecnologia & IA', 'Produtos in-house no lugar de SaaS', 'LLMs e RAG em produção', 'TypeScript · Node · AWS'],
      themeToLight: 'Mudar para tema claro',
      themeToDark: 'Mudar para tema escuro',
      menuOpen: 'Abrir menu',
      menuClose: 'Fechar menu'
    }
  },

  en: {
    ui: {
      htmlLang: 'en',
      title: 'Júlio César Andrade · Technology & AI Lead',
      description: 'Portfolio of Júlio César Andrade, Technology & AI Lead. I build in-house products that replace SaaS, with LLMs and RAG in production.',
      roles: ['Technology & AI Lead', 'In-house products over SaaS', 'LLMs and RAG in production', 'TypeScript · Node · AWS'],
      themeToLight: 'Switch to light theme',
      themeToDark: 'Switch to dark theme',
      menuOpen: 'Open menu',
      menuClose: 'Close menu'
    },
    skip: 'Skip to content',
    navHome: 'Home', navMain: 'Main', navAbout: 'About', navExp: 'Experience', navPlatform: 'Platform',
    navProjects: 'Projects', navLead: 'Leadership', navContact: 'Contact', langGroup: 'Language',
    status: 'Campina Grande, Brazil · Technology & VIP Lead at BPX Group',
    hello: "Hi, I'm",
    roleStatic: 'Technology and AI Lead',
    lead: 'I build in-house products that replace SaaS. I started in customer support in 2022 and today I lead the team that builds the platforms the operation uses every day, with LLMs and RAG in production.',
    ctaProjects: 'See projects', ctaContact: 'Get in touch', socials: 'Social links',
    termCaption: 'Stack and focus summary, in terminal format',
    termFile: 'focus',
    termFocus: 'in-house products over saas\nai that answers first\nleading with hands on the code',
    stat1: 'from call center agent to technology lead',
    stat2: 'call center teams served by the internal ecosystem',
    stat3: 'areas I lead: Innovation, VIP and Implementation',
    stat4: 'in-house omnichannel contact center, replacing Zendesk',
    stat4More: 'How it works',

    aboutEyebrow: '01 · about',
    aboutTitle: 'From the support floor to tech leadership',
    about1: 'I started as a call center agent in 2022. Four years later, I lead Technology at BPX Group, where we build in-house the platforms the operation uses every day.',
    about2: "My job is turning real operational problems into product. I know customer support from the inside, because I've been an agent, monitor, quality supervisor and analyst, and that helps me design systems that solve the right pain.",
    about3: 'I lead the team and keep coding alongside it. I design for scale and stability, with async queue processing and containers on AWS, and treat security and governance as day-one concerns: RBAC, audit logs and alignment with legal and compliance.',
    eduTitle: 'Education', eduCourse: "Bachelor's in Computer Science, UNINTER", eduDates: '2025 – 2029 · in progress',
    teamTitle: 'Team', teamText: 'I lead two developers in Innovation, plus the VIP and Implementation areas.',
    founderTitle: 'Founder', founderText: 'Founder of Sync CX, a Customer Experience and AI-for-support company.',

    expEyebrow: '02 · experience', expTitle: "Where I've been working",
    job1Date: '07/2026 – now', job1Role: 'Technology & VIP Lead',
    job1List: li(
      'Took over with a clear goal: turn technology from a support function into an engine of the business in a multi-brand operation.',
      'Led the creation of an in-house ecosystem serving more than five call center teams, reducing dependence on third-party tools.',
      'We built an omnichannel contact center (webchat, email, tickets, help center and voice integration) that replaced Zendesk and cut licensing costs.',
      'Brought AI where it matters: an autonomous support agent, operator-assist tools and a Responsible Gaming system compliant with Brazilian regulation.',
      'In VIP, designed a tiered loyalty program, validated by Responsible Gaming, with a 360° view of the area.'
    ),
    job2Role: 'VIP Coordinator',
    job2List: li(
      'Coordinated relationships with high-value customers in a multi-brand operation.',
      'Structured VIP portfolio analysis with profitability, retention and behavior indicators.',
      'Led the Account Manager team: goals, relationship routines and productivity.'
    ),
    job3Date: '03/2026 – now', job3Role: 'CEO & Founder',
    job3List: li(
      'Product strategy, operations and company growth.',
      'Building and deploying AI agents for customer support.',
      'Consulting on support operations: Zendesk, Intercom, flows, automations and dashboards.'
    ),
    job4Role: 'CX Tech Analyst',
    job4List: li(
      'Bridged the customer support operation and technology.',
      "Deployed and tuned chatbots and Zendesk's AI (Ultimate AI).",
      'Led contact center rollouts and CRM integrations for chat and voice.',
      'Took part as a reference customer at Zendesk ShowCase.'
    ),
    job5Role: 'Support, quality and operations',
    job5List: li(
      'Operations analyst: data analysis, action plans for chat and voice, and chatbot flow tuning.',
      'Quality supervisor: restructured the team and led the rollout of Zendesk as the support platform.',
      'Started as a call center agent and monitor: that is where I learned what customers and agents need from a tool.'
    ),
    job6Role: 'Telecommunications analyst',
    job6List: li('Email support for 99Food customers, then ticket handling for the 99Rider operation.'),
    techs: 'Technologies',

    platEyebrow: '03 · platform', platTitle: 'BPX Connect + Sync AI',
    plat1: 'We started using Twilio Flex just to route tasks. Today we have our own support platform, with chat, email and tickets unified.',
    plat2: 'BPX Connect is the structure: where agents work, where the operation edits flows and tracks metrics. Sync AI is the AI that answers first and, when a person is needed, hands off to the human queue with full context. The customer never repeats themselves.',
    platList: li(
      'Visual flow editor, executed by a state machine',
      'In-house help center that feeds the RAG',
      'Analytics with a 360° view and service level',
      'Audit log and rollback of any change',
      'RBAC with per-module permissions and role ceilings'
    ),
    platThanks: 'Built with Mateus Andrade and Edmar Silva.',
    pipeTitle: 'the path of a conversation',
    p1t: 'Intake', p1: 'The message arrives from any channel and is acknowledged immediately. Heavy work goes to BullMQ and Redis queues, which absorb the peaks.',
    p2t: 'Responsible Gaming', p2: 'Before the AI, topic rules and a semantic classifier look for risk signals. If they show up, the conversation goes to an agent.',
    p3t: 'AI answers', p3: 'RAG searches pgvector for the help center passages that answer the question, and the model writes the reply.',
    p4t: 'Faithfulness', p4: 'The reply is checked against the retrieved content, so the AI does not make things up.',
    p5: 'If the primary model fails, a backup model takes over and support stays online.',
    p6t: 'Human with context', p6: 'When a person is needed, the conversation enters the human queue with its full history.',

    projEyebrow: '04 · projects', projTitle: 'What we built',
    projSub: 'Internal systems in production, built by me and my team. Code and documentation are private.',
    kPlatform: 'platform', kAI: 'ai', kInfra: 'orchestration', kCompliance: 'compliance', kPeople: 'people',
    kKnowledge: 'knowledge', kSecurity: 'security', kProduct: 'product',
    prod: 'in production', dev: 'in development', design: 'product design',
    pr1: 'In-house omnichannel contact center: webchat, email, tickets and voice integration, with flows, queues, metrics and governance.',
    pr2: 'AI agent that answers first, with RAG on pgvector, faithfulness checks, model fallback and human handoff with context.',
    pr3: 'Proprietary conversation orchestrator to replace Twilio Flex on webchat, with Redis Streams events and JSONLogic rules.',
    pr4: 'Multi-brand Responsible Gaming case management, with blocks, follow-ups, escalation to legal and a complete audit trail.',
    pr5: 'Internal social network with a feed, peer recognition and an internal currency tied to CX metrics, on an immutable ledger.',
    pr6t: 'Multi-brand help center',
    pr6: 'In-house knowledge base replacing Zendesk Guide, with search, per-brand themes and an editor panel. It also feeds the AI’s RAG.',
    pr7t: 'Sync Platform',
    pr7: 'Ecosystem unifying internal tools in a monorepo, with central SSO (Google OAuth), signed JWTs and RBAC by role, brand and module.',
    pr8t: 'Tiered VIP program',
    pr8: 'Four-tier loyalty program with progressive benefits and account managers, validated by Responsible Gaming and aligned with Brazilian Law 14.790/2023.',
    tAudit: 'Audit', tGamif: 'Gamification', tRegulation: 'Regulation',

    leadEyebrow: '05 · leadership', leadTitle: 'How I work',
    l1t: 'Real problem before technology', l1: 'I know the operation from the inside. Every system starts from a pain I have seen up close, not a tool looking for a use.',
    l2t: 'In-house when it makes sense', l2: 'We swapped expensive, rigid SaaS for home-built systems, tailored to the operation and without per-seat licensing.',
    l3t: 'Scale and stability', l3: 'Support cannot stop. Async queues, containers on AWS ECS and model fallback keep everything online during peaks.',
    l4t: 'Security from day one', l4: 'RBAC, audit logs, rollback and alignment with legal and compliance are part of the scope, not post-launch.',
    l5t: 'Grounded AI', l5: 'AI where it solves problems: support, operator assist and risk triage. Always with answer checks and a human at the exit.',
    l6t: 'Hands-on leadership', l6: 'I lead the team and keep building alongside it, using AI agents in the engineering workflow, from design to code review.',
    sk1: 'AI and LLMs', skAgents: 'AI agents', sk2: 'Back-end and data', sk4: 'Infra and security',
    sk5: 'Support and CX', skQA: 'Quality', sk6: 'Management', skTeam: 'Team leadership', skArch: 'Software architecture',

    contactEyebrow: '06 · contact', contactTitle: "Let's talk",
    contactSub: 'Open to conversations about engineering leadership, AI products and customer support platforms.',
    ctaLinkedin: 'Message me on LinkedIn', location: 'Location', locationValue: 'Campina Grande, Paraíba, Brazil',
    footerMade: 'Plain HTML, CSS and JavaScript · hosted on GitHub Pages', backTop: 'Back to top'
  },

  es: {
    ui: {
      htmlLang: 'es',
      title: 'Júlio César Andrade · Líder de Tecnología e IA',
      description: 'Portafolio de Júlio César Andrade, Líder de Tecnología e IA. Construyo productos in-house que reemplazan SaaS, con LLMs y RAG en producción.',
      roles: ['Líder de Tecnología e IA', 'Productos in-house en lugar de SaaS', 'LLMs y RAG en producción', 'TypeScript · Node · AWS'],
      themeToLight: 'Cambiar a tema claro',
      themeToDark: 'Cambiar a tema oscuro',
      menuOpen: 'Abrir menú',
      menuClose: 'Cerrar menú'
    },
    skip: 'Saltar al contenido',
    navHome: 'Inicio', navMain: 'Principal', navAbout: 'Sobre mí', navExp: 'Experiencia', navPlatform: 'Plataforma',
    navProjects: 'Proyectos', navLead: 'Liderazgo', navContact: 'Contacto', langGroup: 'Idioma',
    status: 'Campina Grande, Brasil · Líder de Tecnología y VIP en BPX Group',
    hello: 'Hola, soy',
    roleStatic: 'Líder de Tecnología e IA',
    lead: 'Construyo productos in-house que reemplazan SaaS. Empecé en atención al cliente en 2022 y hoy lidero el equipo que desarrolla las plataformas que la operación usa todos los días, con LLMs y RAG en producción.',
    ctaProjects: 'Ver proyectos', ctaContact: 'Contactar', socials: 'Redes',
    termCaption: 'Resumen del stack y del enfoque, en formato de terminal',
    termFile: 'enfoque',
    termFocus: 'productos in-house en lugar de saas\nia que atiende primero\nliderazgo con las manos en el código',
    stat1: 'de agente de call center a líder de tecnología',
    stat2: 'áreas del call center atendidas por el ecosistema interno',
    stat3: 'áreas que lidero: Innovación, VIP e Implantación',
    stat4: 'contact center omnicanal propio, en lugar de Zendesk',
    stat4More: 'Cómo funciona',

    aboutEyebrow: '01 · sobre mí',
    aboutTitle: 'De la atención al cliente al liderazgo técnico',
    about1: 'Empecé como agente de call center en 2022. Cuatro años después, lidero el área de Tecnología de BPX Group, donde construimos en casa las plataformas que la operación usa todos los días.',
    about2: 'Mi trabajo es convertir problemas reales de la operación en producto. Conozco la atención al cliente por dentro, porque fui agente, monitor, supervisor de calidad y analista, y eso me ayuda a diseñar sistemas que resuelven el dolor correcto.',
    about3: 'Conduzco el equipo y sigo programando con él. Diseño para escala y estabilidad, con procesamiento asíncrono en colas y contenedores en AWS, y trato la seguridad y la gobernanza desde el primer día: RBAC, logs de auditoría y alineación con el área legal y de cumplimiento.',
    eduTitle: 'Formación', eduCourse: 'Licenciatura en Ciencias de la Computación, UNINTER', eduDates: '2025 – 2029 · en curso',
    teamTitle: 'Equipo', teamText: 'Lidero a dos desarrolladores en Innovación, además de las áreas de VIP e Implantación.',
    founderTitle: 'Fundador', founderText: 'Fundador de Sync CX, empresa de soluciones de Customer Experience e IA para atención.',

    expEyebrow: '02 · experiencia', expTitle: 'Dónde he trabajado',
    job1Date: '07/2026 – hoy', job1Role: 'Líder de Tecnología y VIP',
    job1List: li(
      'Asumí el liderazgo con un reto claro: que la tecnología dejara de ser soporte y pasara a ser motor del negocio en una operación multimarca.',
      'Lideré la creación de un ecosistema propio que atiende a más de cinco áreas del call center, reduciendo la dependencia de herramientas de terceros.',
      'Desarrollamos un contact center omnicanal (webchat, correo, tickets, centro de ayuda e integración con voz) que reemplazó a Zendesk y redujo los costos de licencias.',
      'Llevamos la IA donde marca la diferencia: un agente de atención autónomo, herramientas de apoyo a los operadores y un sistema de Juego Responsable conforme a la regulación brasileña.',
      'En VIP, diseñé un programa de fidelidad por niveles, validado por Juego Responsable, con visión 360° del área.'
    ),
    job2Role: 'Coordinador VIP',
    job2List: li(
      'Coordiné la relación y el seguimiento de clientes de alto valor en una operación multimarca.',
      'Estructuré el análisis de la cartera VIP con indicadores de rentabilidad, retención y comportamiento.',
      'Lideré el equipo de Account Managers: metas, rutina de relación y productividad.'
    ),
    job3Date: '03/2026 – hoy', job3Role: 'CEO y Fundador',
    job3List: li(
      'Estrategia de producto, operación y crecimiento de la empresa.',
      'Desarrollo e implantación de agentes de IA para atención al cliente.',
      'Consultoría en estructuración de operaciones: Zendesk, Intercom, flujos, automatizaciones y dashboards.'
    ),
    job4Role: 'Analista de CX Tech',
    job4List: li(
      'Hice de puente entre la operación de atención y la tecnología.',
      'Implanté y optimicé chatbots y la IA de Zendesk (Ultimate AI).',
      'Conduje implantaciones de contact center e integraciones de CRM para chat y voz.',
      'Participé como cliente de referencia en el Zendesk ShowCase.'
    ),
    job5Role: 'Atención, calidad y operaciones',
    job5List: li(
      'Analista de operaciones: análisis de datos, planes de acción para chat y voz y ajuste de flujos de chatbot.',
      'Supervisor de calidad: reestructuré el área y lideré la implantación de Zendesk como plataforma de atención.',
      'Empecé como agente de call center y monitor: ahí aprendí lo que el cliente y el agente necesitan de una herramienta.'
    ),
    job6Role: 'Analista de telecomunicaciones',
    job6List: li('Atención por correo a clientes de 99Food y, después, gestión de tickets de la operación 99Rider.'),
    techs: 'Tecnologías',

    platEyebrow: '03 · plataforma', platTitle: 'BPX Connect + Sync AI',
    plat1: 'Empezamos usando Twilio Flex solo para enrutar tareas. Hoy tenemos nuestra propia plataforma de atención, con chat, correo y tickets unificados.',
    plat2: 'BPX Connect es la estructura: donde trabajan los agentes, donde la operación edita los flujos y sigue las métricas. Sync AI es la IA que atiende primero y, cuando hace falta una persona, transfiere a la cola humana con el contexto. El cliente no repite nada.',
    platList: li(
      'Editor visual de flujos, ejecutado por una máquina de estados',
      'Centro de ayuda propio que alimenta el RAG',
      'Analytics con visión 360° y nivel de servicio',
      'Log de auditoría y rollback de cualquier cambio',
      'RBAC con permisos por módulo y techo de rol'
    ),
    platThanks: 'Construido con Mateus Andrade y Edmar Silva.',
    pipeTitle: 'el camino de una atención',
    p1t: 'Entrada', p1: 'El mensaje llega por cualquier canal y se confirma al instante. El trabajo pesado va a colas en BullMQ y Redis, que absorben los picos.',
    p2t: 'Juego Responsable', p2: 'Antes de la IA, reglas por tema y un clasificador semántico buscan señales de riesgo. Si aparecen, la conversación pasa a un agente.',
    p3t: 'La IA atiende', p3: 'El RAG busca en pgvector los fragmentos del centro de ayuda que responden la pregunta, y el modelo escribe la respuesta.',
    p4t: 'Fidelidad', p4: 'La respuesta se contrasta con el contenido recuperado, para que la IA no invente información.',
    p5: 'Si el modelo principal falla, un modelo de respaldo asume y la atención sigue en línea.',
    p6t: 'Humano con contexto', p6: 'Cuando hace falta una persona, la conversación entra a la cola humana con todo el historial.',

    projEyebrow: '04 · proyectos', projTitle: 'Lo que construimos',
    projSub: 'Sistemas internos en producción, hechos por mí y mi equipo. El código y la documentación son privados.',
    kPlatform: 'plataforma', kAI: 'ia', kInfra: 'orquestación', kCompliance: 'cumplimiento', kPeople: 'personas',
    kKnowledge: 'conocimiento', kSecurity: 'seguridad', kProduct: 'producto',
    prod: 'en producción', dev: 'en desarrollo', design: 'diseño de producto',
    pr1: 'Contact center omnicanal propio: webchat, correo, tickets e integración con voz, con flujos, colas, métricas y gobernanza.',
    pr2: 'Agente de IA que atiende primero, con RAG en pgvector, verificación de fidelidad, fallback de modelo y traspaso humano con contexto.',
    pr3: 'Orquestador de conversaciones propio para reemplazar Twilio Flex en el webchat, con eventos en Redis Streams y reglas en JSONLogic.',
    pr4: 'Gestión de casos de Juego Responsable multimarca, con bloqueos, seguimientos, escalamiento al área legal y trazabilidad de auditoría completa.',
    pr5: 'Red social interna con feed, reconocimiento entre colegas y una moneda interna ligada a los indicadores de CX, con ledger inmutable.',
    pr6t: 'Centro de ayuda multimarca',
    pr6: 'Base de conocimiento propia en lugar de Zendesk Guide, con búsqueda, temas por marca y panel de edición. También alimenta el RAG de la IA.',
    pr7t: 'Plataforma Sync',
    pr7: 'Ecosistema que unifica las herramientas internas en un monorepo, con SSO central (Google OAuth), JWT firmado y RBAC por rol, marca y módulo.',
    pr8t: 'Programa VIP por niveles',
    pr8: 'Programa de fidelidad de cuatro niveles, con beneficios progresivos y gerentes de cuenta, validado por Juego Responsable y alineado con la Ley 14.790/2023.',
    tAudit: 'Auditoría', tGamif: 'Gamificación', tRegulation: 'Regulación',

    leadEyebrow: '05 · liderazgo', leadTitle: 'Cómo trabajo',
    l1t: 'Problema real antes que tecnología', l1: 'Conozco la operación por dentro. Cada sistema nace de un dolor que vi de cerca, no de una herramienta buscando uso.',
    l2t: 'In-house cuando tiene sentido', l2: 'Cambiamos SaaS caros y rígidos por sistemas hechos en casa, a medida de la operación y sin licencias por agente.',
    l3t: 'Escala y estabilidad', l3: 'La atención no puede parar. Colas asíncronas, contenedores en AWS ECS y fallback de modelo mantienen todo en línea en los picos.',
    l4t: 'Seguridad desde el primer día', l4: 'RBAC, logs de auditoría, rollback y alineación con legal y cumplimiento son parte del alcance, no del post-lanzamiento.',
    l5t: 'IA con los pies en la tierra', l5: 'IA donde resuelve: atención, apoyo al operador y triaje de riesgo. Siempre con verificación de respuesta y un humano a la salida.',
    l6t: 'Liderazgo cercano', l6: 'Conduzco el equipo y sigo desarrollando con él, usando agentes de IA en el flujo de ingeniería, del diseño al code review.',
    sk1: 'IA y LLMs', skAgents: 'Agentes de IA', sk2: 'Back-end y datos', sk4: 'Infra y seguridad',
    sk5: 'Atención y CX', skQA: 'Calidad', sk6: 'Gestión', skTeam: 'Liderazgo de equipos', skArch: 'Arquitectura de software',

    contactEyebrow: '06 · contacto', contactTitle: 'Hablemos',
    contactSub: 'Abierto a conversaciones sobre liderazgo de ingeniería, productos con IA y plataformas de atención.',
    ctaLinkedin: 'Escríbeme en LinkedIn', location: 'Ubicación', locationValue: 'Campina Grande, Paraíba, Brasil',
    footerMade: 'HTML, CSS y JavaScript puro · alojado en GitHub Pages', backTop: 'Volver arriba'
  }
};
