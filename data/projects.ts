import type {
  Project,
  ProjectCollection,
  ProjectContent,
  ProjectLocaleContent,
} from "../types/project"
import { README_CONTENT_OVERRIDES } from "./projectReadmeContent"

type ProjectSeed = Omit<Project, "content" | "collection"> & {
  content?: {
    en?: Partial<ProjectLocaleContent>
    es?: Partial<ProjectLocaleContent>
  }
}

const README_INSIGHTS: Record<string, { summary: string; features: string[] }> = {
  vic: {
    summary:
      "Virtual institutional counselor with a Streamlit interface backed by a PostgreSQL database.",
    features: [
      "Guided academic assistance workflow",
      "Local and production run modes documented in README",
      "Database-backed records for repeatable interactions",
    ],
  },
  "cracking-the-crime-code": {
    summary:
      "Java project focused on deciphering hidden criminal messages and planning arrest operations.",
    features: [
      "Leader identification from encoded text patterns",
      "Case reports with captain, arrests, and organization status",
      "Rule-based processing flow for investigation scenarios",
    ],
  },
  "huffman-coding": {
    summary:
      "Implementation of Huffman Coding for variable-length compression based on symbol frequency.",
    features: [
      "Frequency-driven tree construction",
      "Encoding with shorter codes for common symbols",
      "Course-oriented data structures implementation",
    ],
  },
  "pacman-deluxe": {
    summary:
      "Enhanced Pacman project with recursion, backtracking, sorting, and collection-based mechanics.",
    features: [
      "Power-up ordering with collection management",
      "Compare method for ranked power-ups",
      "Deluxe gameplay extensions over the base Pacman project",
    ],
  },
  pacman: {
    summary:
      "Pacman implementation extended in phases with new states, power-ups, and gameplay controls.",
    features: [
      "Random ghost spawning options",
      "Win and pause states",
      "Additional power-up mechanics",
      "Game-state reset logic improvements",
    ],
  },
  "audio-visualizer-simulator": {
    summary:
      "Audio visualizer simulator with multiple modes and interactive keyboard controls.",
    features: [
      "Background and shape color controls",
      "Pause and resume interactions",
      "Song switching and volume controls",
      "Enhanced rectangle-bar visualization mode",
    ],
  },
  "fractals-project": {
    summary:
      "Fractal visualization project extended with new modes, refactors, and animation support.",
    features: [
      "Multiple fractal display modes",
      "Recursion-focused rendering logic",
      "Animation enhancements over the base project",
    ],
  },
  "spooky-quest": {
    summary:
      "Text-based adventure game with progression, enemy encounters, and combat mechanics.",
    features: [
      "Multi-area progression",
      "Rock-paper-scissors style combat",
      "Expanded enemies and encounter flow",
    ],
  },
  "particles-system-simulator": {
    summary:
      "Particle simulator improved in multiple phases with increasingly complex interactions.",
    features: [
      "Interactive particle behavior controls",
      "Visual tuning and color behavior options",
      "Phased implementation with growing complexity",
    ],
  },
  "animeflv-enhancements": {
    summary:
      "Tampermonkey script that improves AnimeFLV with provider automation and navigation helpers.",
    features: [
      "Automatic provider selection",
      "Saved preferences across sessions",
      "Quick provider access menu",
      "Page-up navigation helper",
    ],
  },
  "disney-plus-enhancements": {
    summary:
      "Tampermonkey enhancement script for Disney Plus focused on skip and playback automation.",
    features: [
      "Auto-skip intros and recaps",
      "Configurable skip behavior",
      "Next-episode playback automation",
      "Automatic fullscreen support",
    ],
  },
  "fast-search": {
    summary:
      "React-based Tampermonkey search launcher with shortcuts across many platforms.",
    features: [
      "Multi-platform quick search",
      "Shortcut-only home navigation",
      "Auto-suggestions while typing",
      "Keyboard-first interaction model",
    ],
  },
  "lookmovie-ad-blocker": {
    summary:
      "Tampermonkey script that removes interruptions on LookMovie by handling ads and dialogs.",
    features: [
      "Automatic ad closure",
      "Banner removal",
      "Dialog handling for ad prompts",
      "Runtime DOM monitoring",
    ],
  },
  "netflix-enhancements": {
    summary:
      "Netflix enhancement script with skip automation and fullscreen behavior improvements.",
    features: [
      "Recap/intro/outro skip automation",
      "Configurable playback behavior",
      "Fullscreen flow improvements",
      "Cleaner viewing experience",
    ],
  },
  "auto-click-not-a-robot": {
    summary:
      "Automation script for checkbox captcha flows across supported providers.",
    features: [
      "Automatic checkbox click attempts",
      "Support for multiple captcha providers",
      "Real-time element detection",
      "Cross-site compatibility",
    ],
  },
  "prime-video-enhancements": {
    summary:
      "Prime Video enhancement script with automated skip and playback controls.",
    features: [
      "Recap and intro skip automation",
      "Ad handling workflow",
      "Fullscreen behavior tuning",
      "Configurable settings model",
    ],
  },
  "serieslan-enhancements": {
    summary:
      "Serieslan enhancer with provider auto-selection and visual comfort tweaks.",
    features: [
      "Automatic provider selection",
      "Preference-based provider strategy",
      "Immediate application on page load",
      "Cross-browser support",
    ],
  },
  "twitch-enhancements": {
    summary:
      "Twitch/Amazon Gaming automation script for rewards, drops, and utility actions.",
    features: [
      "Automatic channel points claiming",
      "Prime rewards claim support",
      "Batch claim controls",
      "Drop claim checks on interval",
    ],
  },
  "html5-video-player-enhancements": {
    summary:
      "HTML5 video enhancer with speed presets, indicators, and keyboard controls.",
    features: [
      "Incremental speed controls",
      "Quick preset/toggle speeds",
      "Speed memory for toggles",
      "Overlay indicator with fade",
    ],
  },
  "youtube-enhancements": {
    summary:
      "YouTube enhancements suite for likes, navigation shortcuts, and playback utilities.",
    features: [
      "Auto-like workflows with configurable thresholds",
      "Optional live-stream support",
      "Subscription-aware behavior",
      "Trusted Types-compatible implementation",
    ],
  },
  "youtube-adblock-ban-bypass": {
    summary:
      "YouTube AdBlock warning bypass script that preserves core playback features.",
    features: [
      "AdBlock warning detection",
      "Seamless player replacement",
      "Clean UI integration",
      "Maintains full playback quality",
    ],
  },
}

const toSentenceCase = (value: string) => {
  if (!value) return value
  return value.charAt(0).toUpperCase() + value.slice(1)
}

const buildDefaultEnglishFeatures = (
  seed: Pick<Project, "description" | "technologies">
) => {
  const clauses = seed.description
    .split(/[.;]/)
    .map((part) => part.trim())
    .filter((part) => part.length > 18)
    .slice(0, 3)
    .map((part) => toSentenceCase(part))

  return [
    ...clauses,
    `Built with ${seed.technologies.slice(0, 4).join(", ")}`,
    "Public repository available for review and iteration",
  ].slice(0, 5)
}

const buildDefaultSpanishFeatures = (
  seed: Pick<Project, "title" | "technologies">
) => {
  return [
    `Implementación centrada en el flujo principal de ${seed.title}`,
    "Repositorio con punto de partida claro para revisar o extender el proyecto",
    `Stack principal: ${seed.technologies.slice(0, 4).join(", ")}`,
    "Base lista para seguir iterando con nuevas funcionalidades",
  ]
}

const createDefaultLocaleContent = (
  locale: "en" | "es",
  seed: Pick<Project, "slug" | "title" | "description" | "technologies" | "link">
): ProjectLocaleContent => {
  const insight = README_INSIGHTS[seed.slug]

  if (locale === "en") {
    const summary = insight?.summary || seed.description
    const features =
      insight?.features && insight.features.length > 0
        ? insight.features
        : buildDefaultEnglishFeatures(seed)

    return {
      title: seed.title,
      summary,
      problem: `Users need a reliable way to execute the core workflow described in ${seed.title}.`,
      solution: `${seed.title} ships a focused implementation with clear scope, practical features, and a repository ready to inspect or extend.`,
      features,
      stack: seed.technologies,
      links: {
        repo: seed.link,
      },
    }
  }

  return {
    title: seed.title,
    summary: `${seed.title} es un proyecto práctico construido para resolver un flujo concreto con alcance claro y base técnica reutilizable.`,
    problem: `${seed.title} requería una solución clara para ejecutar su flujo principal de forma consistente y fácil de mantener.`,
    solution: `${seed.title} se desarrolló con alcance definido, funcionalidades concretas y una base pública lista para revisar, adaptar o seguir evolucionando.`,
    features: buildDefaultSpanishFeatures(seed),
    stack: seed.technologies,
    links: {
      repo: seed.link,
    },
  }
}

const createDefaultContent = (
  seed: Pick<Project, "slug" | "title" | "description" | "technologies" | "link">
): ProjectContent => {
  return {
    en: createDefaultLocaleContent("en", seed),
    es: createDefaultLocaleContent("es", seed),
  }
}

const mergeLocaleContent = (
  base: ProjectLocaleContent,
  override?: Partial<ProjectLocaleContent>
): ProjectLocaleContent => {
  return {
    ...base,
    ...override,
    context: override?.context ?? base.context,
    decisions: override?.decisions ?? base.decisions,
    results: override?.results ?? base.results,
    features: override?.features ?? base.features,
    stack: override?.stack ?? base.stack,
    links: {
      ...base.links,
      ...override?.links,
    },
  }
}

const mergeProjectContent = (seed: ProjectSeed): ProjectContent => {
  const defaults = createDefaultContent(seed)
  const readmeOverrides = README_CONTENT_OVERRIDES[seed.slug]

  return {
    en: mergeLocaleContent(
      mergeLocaleContent(defaults.en, readmeOverrides?.en),
      seed.content?.en
    ),
    es: mergeLocaleContent(
      mergeLocaleContent(defaults.es, readmeOverrides?.es),
      seed.content?.es
    ),
  }
}

const automationProjectSlugs = new Set([
  "animeflv-enhancements",
  "disney-plus-enhancements",
  "fast-search",
  "lookmovie-ad-blocker",
  "netflix-enhancements",
  "auto-click-not-a-robot",
  "perplexity-ai-enhancements",
  "prime-video-enhancements",
  "serieslan-enhancements",
  "twitch-enhancements",
  "html5-video-player-enhancements",
  "youtube-enhancements",
  "youtube-adblock-ban-bypass",
])

const getProjectCollection = (seed: ProjectSeed): ProjectCollection => {
  if (seed.featured) {
    return "featured"
  }

  if (automationProjectSlugs.has(seed.slug)) {
    return "automation"
  }

  return "archive"
}

const projectSeeds: ProjectSeed[] = [
  {
    slug: "walletalert",
    featured: true,
    title: "WalletAlert",
    icon: "fa-wallet",
    description:
      "A student-focused budgeting app with weekly and category budgets, fast expense logging, charts, proactive alerts, and Auth0-secured accounts.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Vite", "Auth0"],
    link: "https://github.com/uprm-torre/software-engineering-project-walletalert",
    screenshots: [
      {
        src: "/walletalert-demo-desktop.png",
        alt: "WalletAlert dashboard showing budgets, expense tracking, and spending charts",
        caption: "Student budgeting dashboard",
      },
    ],
    content: {
      en: {
        summary:
          "Student budgeting app built to keep expense tracking quick, visual, and realistic for weekly spending decisions.",
        context:
          "Built as a software engineering project around a common student pain point: small daily purchases add up fast, but most budgeting tools feel heavier than the workflow they are supposed to simplify.",
        problem:
          "Students need to set budgets, categorize expenses, and spot overspending early, but spreadsheets and generic finance apps create too much friction for quick daily use.",
        solution:
          "WalletAlert combines a React + Vite frontend, an Express API, MongoDB persistence, Recharts visualizations, and Auth0 authentication to deliver fast expense logging, budget monitoring, and clear trend visibility in one focused product.",
        decisions: [
          "Used optimistic UI updates so expense logging feels immediate instead of blocked by round-trips.",
          "Scoped the product around weekly and category budgeting, which matches how students usually reason about spending better than long financial dashboards.",
          "Added an in-memory fallback in development so the API remains usable even when MongoDB is not configured.",
          "Documented local and Render deployment flows so the app could move from coursework to a shareable demo more easily.",
        ],
        features: [
          "Weekly and category-based budgets",
          "Quick expense creation, categorization, and editing",
          "Spending breakdowns and charts with Recharts",
          "Proactive alerts before overspending",
          "Auth0 authentication and protected routes",
          "Accessible custom modals and keyboard shortcuts",
          "Local setup plus Render-ready deployment flow",
        ],
        results: [
          "Turned budgeting into a lightweight daily interaction instead of an end-of-month cleanup task.",
          "Connected product UX, authentication, persistence, testing, and deployment concerns in one coherent full-stack build.",
          "Created a more credible featured case study by pairing user-facing polish with documented architecture and UML artifacts.",
        ],
        stack: ["React", "Vite", "Node.js", "Express", "MongoDB", "Auth0", "Recharts", "Vitest"],
        links: {
          repo: "https://github.com/uprm-torre/software-engineering-project-walletalert",
        },
      },
      es: {
        summary:
          "Aplicación de presupuesto para estudiantes pensada para que registrar gastos y entender el dinero semanal sea rápido, visual y sostenible.",
        context:
          "Proyecto de ingeniería de software enfocado en un problema común entre estudiantes: los gastos pequeños se acumulan rápido, pero muchas herramientas de presupuesto se sienten más pesadas que el problema que intentan resolver.",
        problem:
          "Los estudiantes necesitan definir presupuestos, categorizar gastos y detectar excesos con anticipación, pero llevar el control en hojas de cálculo o apps genéricas genera demasiada fricción para el uso diario.",
        solution:
          "WalletAlert combina un frontend en React + Vite, una API en Express, persistencia con MongoDB, gráficas con Recharts y autenticación con Auth0 para ofrecer registro rápido de gastos, monitoreo de presupuesto y visibilidad clara en un solo producto.",
        decisions: [
          "Se usó optimistic UI para que registrar un gasto se sintiera inmediato y no bloqueado por viajes al servidor.",
          "El alcance se centró en presupuestos semanales y por categoría, que se ajustan mejor a cómo suelen pensar sus gastos muchos estudiantes.",
          "Se añadió un fallback en memoria para desarrollo, de modo que la API siguiera siendo usable incluso sin MongoDB configurado.",
          "Se documentaron flujos de ejecución local y despliegue en Render para volver el proyecto más fácil de compartir y demostrar.",
        ],
        features: [
          "Presupuestos semanales y por categoría",
          "Registro, categorización y edición rápida de gastos",
          "Desglose del gasto y gráficas con Recharts",
          "Alertas preventivas antes de exceder el presupuesto",
          "Autenticación con Auth0 y rutas protegidas",
          "Modales accesibles y atajos de teclado",
          "Setup local y flujo de despliegue listo para Render",
        ],
        results: [
          "Convirtió el presupuesto en una interacción ligera y frecuente, en lugar de una tarea manual de fin de mes.",
          "Conectó UX de producto, autenticación, persistencia, testing y despliegue en una sola entrega full-stack.",
          "Fortaleció el caso destacado al combinar pulido visual con documentación de arquitectura y diagramas UML.",
        ],
        stack: ["React", "Vite", "Node.js", "Express", "MongoDB", "Auth0", "Recharts", "Vitest"],
        links: {
          repo: "https://github.com/uprm-torre/software-engineering-project-walletalert",
        },
      },
    },
  },
  {
    slug: "vic",
    featured: true,
    title: "VIC - Virtual Institutional Counselor",
    icon: "fa-robot",
    description:
      "An AI-powered institutional counseling system that provides academic guidance to university students. Built with Python, Streamlit for the frontend and PostgreSQL for the database.",
    technologies: ["Python", "Streamlit", "PostgreSQL", "NLP", "ETL"],
    link: "https://github.com/JaredJomar/VIC-Virtual-Institutional-Counselor",
    content: {
      en: {
        summary:
          "AI-assisted academic guidance tool that organizes scattered institutional information into a more usable student-facing experience.",
        context:
          "Designed around the reality that academic requirements, policies, and procedural information are usually spread across different documents and sources.",
        problem:
          "Students need quick answers about academic processes, but the source material is fragmented, repetitive, and difficult to navigate consistently.",
        solution:
          "VIC uses Python, Streamlit, PostgreSQL, NLP, and ETL pipelines to transform institutional content into a searchable guidance workflow that is easier to query and maintain.",
        decisions: [
          "Used Streamlit to move quickly on an interface centered on guided information retrieval rather than custom frontend complexity.",
          "Added an ETL layer so institutional data could be normalized before retrieval instead of relying on raw source text.",
          "Kept PostgreSQL as the structured storage layer to support repeatable lookups and rule-driven responses.",
        ],
        features: [
          "Streamlit web UI for guidance sessions",
          "NLP layer to classify and route requests",
          "ETL pipeline to ingest and normalize institutional data",
          "PostgreSQL storage for structured program and rule data",
          "Reproducible local setup for demos and iteration",
        ],
        results: [
          "Turned institutional guidance into a workflow that is faster to consult and easier to demonstrate.",
          "Connected applied AI concepts to a concrete academic use case instead of a generic chatbot wrapper.",
          "Created a stronger portfolio example of data preparation, retrieval logic, and user-facing delivery working together.",
        ],
        stack: ["Python", "Streamlit", "PostgreSQL", "NLP", "ETL"],
        links: {
          repo: "https://github.com/JaredJomar/VIC-Virtual-Institutional-Counselor",
        },
      },
      es: {
        summary:
          "Herramienta de orientación académica asistida por IA que organiza información institucional dispersa en una experiencia más útil para estudiantes.",
        context:
          "Nació de un problema común en la universidad: requisitos, políticas y procesos académicos repartidos entre múltiples documentos y fuentes.",
        problem:
          "Los estudiantes necesitan respuestas rápidas sobre procesos académicos, pero la información institucional suele estar fragmentada y es difícil de consultar de forma consistente.",
        solution:
          "VIC usa Python, Streamlit, PostgreSQL, NLP y procesos ETL para transformar contenido institucional disperso en un flujo de orientación más claro, consultable y mantenible.",
        decisions: [
          "Se eligió Streamlit para avanzar rápido con una interfaz centrada en la consulta guiada, sin cargar el proyecto con complejidad frontend innecesaria.",
          "Se añadió una capa ETL para normalizar la información antes de consultarla, en lugar de depender de texto crudo.",
          "Se mantuvo PostgreSQL como base estructurada para soportar consultas repetibles y respuestas guiadas por reglas.",
        ],
        features: [
          "Interfaz web en Streamlit para sesiones de orientación",
          "Capa de NLP para clasificar y enrutar solicitudes",
          "Pipeline ETL para la ingestión y normalización de datos",
          "Almacenamiento en PostgreSQL para datos estructurados",
          "Setup reproducible para demos e iteración",
        ],
        results: [
          "Convirtió la orientación institucional en un flujo más rápido de consultar y más fácil de demostrar.",
          "Conectó conceptos de IA aplicada con un caso universitario concreto, en lugar de limitarse a un chatbot genérico.",
          "Fortaleció el portafolio con un ejemplo claro de preparación de datos, lógica de consulta y entrega al usuario final trabajando en conjunto.",
        ],
        stack: ["Python", "Streamlit", "PostgreSQL", "NLP", "ETL"],
        links: {
          repo: "https://github.com/JaredJomar/VIC-Virtual-Institutional-Counselor",
        },
      },
    },
  },
  {
    slug: "cracking-the-crime-code",
    title: "Cracking the Crime Code",
    icon: "fa-shield-alt",
    description:
      "A Java application for deciphering hidden messages used by criminal organizations, extracting key information, and planning arrest operations to maximize criminal arrests.",
    technologies: ["Java", "Data Structures", "Algorithms", "Recursion"],
    link: "https://github.com/JaredJomar/Cracking-the-Crime-Code",
  },
  {
    slug: "huffman-coding",
    title: "Huffman Coding",
    icon: "fa-compress",
    description:
      "An implementation of the Huffman coding algorithm for data compression, optimizing encoding by assigning shorter codes to more frequently occurring symbols.",
    technologies: ["Java", "Data Structures", "Algorithms", "Binary Trees"],
    link: "https://github.com/JaredJomar/Huffman-Coding",
  },
  {
    slug: "pacman-deluxe",
    title: "Pacman Deluxe",
    icon: "fa-ghost",
    description:
      "An enhanced version of Pacman with advanced features including power-up collections, sorting algorithms, pathfinding for ghost eyes, and a GPS system for locating power-ups.",
    technologies: ["C++", "Game Development", "Algorithms", "OOP"],
    link: "https://github.com/JaredJomar/Pacman-Deluxe",
  },
  {
    slug: "pacman",
    title: "Pacman",
    icon: "fa-dot-circle",
    description:
      "A Pacman game implementation with various power-ups, multiple game states, and customizable features including character selection and random ghost spawning.",
    technologies: ["C++", "Game Development", "OOP", "State Pattern"],
    link: "https://github.com/JaredJomar/Pacman",
  },
  {
    slug: "audio-visualizer-simulator",
    title: "Audio Visualizer Simulator",
    icon: "fa-music",
    description:
      "An audio visualization application with multiple visualization modes, volume control, song selection, and a record/replay feature for user interactions.",
    technologies: ["C++", "Audio Processing", "Graphics", "UI Development"],
    link: "https://github.com/JaredJomar/Audio-Visualizer-Simulator-",
  },
  {
    slug: "fractals-project",
    title: "Fractals Project",
    icon: "fa-snowflake",
    description:
      "An interactive fractal visualization application with customizable recursion levels, multiple fractal types, and animations. Features an abstract class hierarchy and polymorphic implementations.",
    technologies: ["C++", "Recursion", "Graphics", "OOP"],
    link: "https://github.com/JaredJomar/Fractals-Project-",
  },
  {
    slug: "spooky-quest",
    title: "Spooky Quest",
    icon: "fa-gamepad",
    description:
      "A text-based adventure game featuring multiple areas, enemy battles using Rock-Paper-Scissors mechanics, boss fights with multiple phases, and NPC interactions.",
    technologies: ["C++", "Game Development", "OOP", "State Pattern"],
    link: "https://github.com/JaredJomar/Spooky-Quest",
  },
  {
    slug: "particles-system-simulator",
    title: "Particles System Simulator",
    icon: "fa-atom",
    description:
      "A particle system simulator with features like color toggling, velocity control, particle magnification, and record/replay functionality for user interactions.",
    technologies: ["C++", "Physics Simulation", "Graphics", "User Interaction"],
    link: "https://github.com/JaredJomar/Particles-System-Simulator",
  },
  {
    slug: "archive-org-downloader",
    title: "Archive.org-Downloader",
    icon: "fa-book",
    description:
      "A batch script that simplifies downloading books from Internet Archive. It saves your credentials and default image resolution for easy, repeated use.",
    technologies: ["Batch Scripting", "Python", "Archive.org API"],
    link: "https://github.com/JaredJomar/Projects/tree/main/ArchiveBooksDownloader",
  },
  {
    slug: "note-app",
    title: "Note App",
    icon: "fa-sticky-note",
    description:
      "A PyQt5-based note-taking application with features like text editing, file operations, and keyboard shortcuts for efficient note management.",
    technologies: ["Python", "PyQt5", "GUI Development"],
    link: "https://github.com/JaredJomar/Projects/tree/main/NoteApp",
  },
  {
    slug: "pdf-tool",
    featured: true,
    title: "PDF Tool",
    icon: "fa-file-pdf",
    description:
      "A powerful PDF utility with a modern dark-themed interface offering comprehensive features: combine PDFs, split into pages, extract specific ranges, rotate pages, compress files, and convert to various formats.",
    technologies: ["Python", "PyQt6", "PyPDF2", "PyMuPDF", "pdf2docx"],
    link: "https://github.com/JaredJomar/Projects/tree/main/Pdf_Combiner",
    screenshots: [
      {
        src: "https://raw.githubusercontent.com/JaredJomar/Projects/main/apps/Pdf_Combiner/main.png",
        alt: "PDF Tool main interface with merge, split, and rotate controls",
        caption: "All-in-one PDF utility"
      },
    ],
    content: {
      en: {
        summary:
          "Offline desktop utility that consolidates repetitive PDF operations into one predictable workspace.",
        context:
          "Built around a practical workflow problem: common PDF tasks are simple on their own, but usually scattered across multiple tools and websites.",
        problem:
          "Routine PDF tasks like merging, splitting, extracting, rotating, and compressing are common, but switching tools for each one creates unnecessary friction.",
        solution:
          "PDF Tool packages several proven Python PDF libraries into a single PyQt6 desktop interface so the user can stay in one workflow from input to output.",
        decisions: [
          "Kept the app offline-first to avoid upload friction and make the tool more practical for repeated local use.",
          "Grouped related actions into one interface instead of optimizing for a single PDF operation.",
          "Used mature libraries behind the scenes so the value came from workflow design, not reinventing document processing primitives.",
        ],
        features: [
          "Merge multiple PDFs into one",
          "Split PDFs into individual pages",
          "Extract specific page ranges",
          "Rotate pages for correction",
          "Compress PDFs to reduce file size",
          "Convert PDFs to other formats (where supported)",
        ],
        results: [
          "Reduced a multi-tool document workflow to one local utility.",
          "Demonstrated practical desktop product design rather than a single-script utility.",
          "Added a portfolio piece that shows packaging multiple technical capabilities behind a simpler user experience.",
        ],
        stack: ["Python", "PyQt6", "PyPDF2", "PyMuPDF", "pdf2docx"],
        links: {
          repo: "https://github.com/JaredJomar/Projects/tree/main/Pdf_Combiner",
        },
      },
      es: {
        summary:
          "Utilidad de escritorio offline que reúne en una sola app las operaciones de PDF más comunes del día a día.",
        context:
          "Se construyó a partir de un problema muy práctico: tareas sencillas sobre PDF suelen estar repartidas entre varias herramientas o sitios web.",
        problem:
          "Operaciones rutinarias como unir, dividir, extraer, rotar o comprimir PDFs son frecuentes, pero cambiar de herramienta para cada una agrega fricción innecesaria.",
        solution:
          "PDF Tool reúne varias librerías maduras de procesamiento de PDF dentro de una interfaz PyQt6 para resolver todo el flujo en un solo lugar.",
        decisions: [
          "Se mantuvo como herramienta offline para evitar fricción por carga de archivos y hacerla más útil en uso repetido.",
          "Se priorizó una interfaz única con varias acciones relacionadas, en lugar de optimizar solo una operación.",
          "Se aprovecharon librerías probadas para que el valor del proyecto estuviera en el diseño del flujo y no en reinventar el procesamiento documental.",
        ],
        features: [
          "Unir varios PDFs en uno",
          "Dividir PDFs en páginas individuales",
          "Extraer rangos de páginas",
          "Rotar páginas para corrección",
          "Comprimir PDFs para reducir tamaño",
          "Convertir PDFs a otros formatos (según soporte)",
        ],
        results: [
          "Redujo un flujo documental de varias herramientas a una sola utilidad local.",
          "Demostró diseño de producto para escritorio más allá de un script puntual.",
          "Sumó al portafolio una pieza que empaqueta varias capacidades técnicas detrás de una experiencia más simple para el usuario.",
        ],
        stack: ["Python", "PyQt6", "PyPDF2", "PyMuPDF", "pdf2docx"],
        links: {
          repo: "https://github.com/JaredJomar/Projects/tree/main/Pdf_Combiner",
        },
      },
    },
  },
  {
    slug: "transcriber",
    featured: true,
    title: "Transcriber",
    icon: "fa-microphone",
    description:
      "Desktop app to transcribe audio from any URL supported by yt-dlp (including YouTube videos and playlists) with Whisper models from a PyQt6 interface.",
    technologies: [
      "Python",
      "PyQt6",
      "OpenAI Whisper",
      "yt-dlp",
      "FFmpeg",
      "PyTorch",
    ],
    link: "https://github.com/JaredJomar/Transcriber",
    screenshots: [
      {
        src: "https://raw.githubusercontent.com/JaredJomar/Transcriber/main/img/main.png",
        alt: "Main window screenshot showing transcription controls and progress",
        caption: "Main window",
      },
      {
        src: "https://raw.githubusercontent.com/JaredJomar/Transcriber/main/img/settings.png",
        alt: "Settings screenshot showing backend and theme configuration",
        caption: "Settings",
      },
    ],
    content: {
      en: {
        summary:
          "Desktop transcription workflow that turns supported media URLs into structured transcripts without juggling terminal tools.",
        context:
          "Created around a repeated workflow: downloading media, selecting the right transcription backend, and formatting clean output usually requires several separate tools.",
        problem:
          "Transcribing audio from any URL supported by yt-dlp (including YouTube videos and playlists) required memorizing yt-dlp/ffmpeg flags and juggling multiple tools for backend selection and output formatting.",
        solution:
          "Transcriber wraps yt-dlp, Whisper, and FFmpeg in a focused PyQt6 workflow where the user can choose model, backend, language, and output preferences without leaving the app.",
        decisions: [
          "Exposed backend choice explicitly so the workflow can adapt to CUDA, DirectML, or CPU depending on the machine.",
          "Included visible logs and configurable paths because media and transcription pipelines fail in real-world ways that users need to inspect.",
          "Exported Markdown with metadata so the output is useful beyond raw text capture.",
        ],
        features: [
          "Download audio from single videos or entire playlists using yt-dlp",
          "Select Whisper model (tiny/base/small/medium) with language or auto-detect",
          "Choose CUDA, DirectML, or CPU backend and keep logs visible",
          "Customize ffmpeg/yt-dlp paths, output folder, and theme (system/light/dark)",
          "Export transcripts as Markdown files that include video metadata",
        ],
        results: [
          "Turned a multi-tool terminal-heavy workflow into a single desktop experience.",
          "Shows stronger product thinking around AI tooling, configuration, and output quality.",
          "Adds a portfolio piece with clear value for creators, researchers, or anyone working with long-form audio content.",
        ],
        stack: [
          "Python",
          "PyQt6",
          "OpenAI Whisper",
          "yt-dlp",
          "FFmpeg",
          "PyTorch",
        ],
        links: {
          repo: "https://github.com/JaredJomar/Transcriber",
        },
      },
      es: {
        summary:
          "Flujo de transcripción de escritorio que convierte URLs compatibles en transcripciones estructuradas sin depender de varias herramientas de terminal.",
        context:
          "Se diseñó a partir de un flujo repetido: descargar medios, elegir el backend de transcripción correcto y formatear una salida limpia suele requerir varias herramientas separadas.",
        problem:
          "Transcribir audio de cualquier URL soportada por yt-dlp (incluyendo videos y playlists de YouTube) exigía aprender flags de yt-dlp/ffmpeg y coordinar varias herramientas para escoger backend y formatear la salida.",
        solution:
          "Transcriber unifica yt-dlp, Whisper y FFmpeg en un flujo PyQt6 donde el usuario puede elegir modelo, backend, idioma y preferencias de salida sin salir de la aplicación.",
        decisions: [
          "Se expuso la elección del backend para adaptarse a CUDA, DirectML o CPU según la máquina disponible.",
          "Se mantuvieron logs visibles y rutas configurables porque estos flujos fallan de formas reales que el usuario necesita inspeccionar.",
          "Se exportó en Markdown con metadatos para que la salida sea útil más allá del texto crudo.",
        ],
        features: [
          "Descarga audio de videos individuales o playlists completas con yt-dlp",
          "Elige el modelo Whisper (tiny/base/small/medium) con idioma fijo o detección automática",
          "Selecciona backend CUDA, DirectML o CPU y mantiene visibles los logs del proceso",
          "Configura rutas de ffmpeg/yt-dlp, carpeta de salida y tema (sistema/claro/oscuro)",
          "Exporta transcripciones en Markdown con metadatos del video",
        ],
        results: [
          "Convirtió un flujo técnico y fragmentado en una experiencia de escritorio unificada.",
          "Muestra mejor criterio de producto alrededor de tooling con IA, configuración y calidad de salida.",
          "Aporta al portafolio una pieza con valor claro para creadores, investigadores o usuarios que trabajan con audio largo.",
        ],
        stack: [
          "Python",
          "PyQt6",
          "OpenAI Whisper",
          "yt-dlp",
          "FFmpeg",
          "PyTorch",
        ],
        links: {
          repo: "https://github.com/JaredJomar/Transcriber",
        },
      },
    },
  },
  {
    slug: "video-download-app",
    featured: true,
    title: "Video Download App",
    icon: "fa-video",
    description:
      "A PyQt5-based application for downloading videos and audio from YouTube, leveraging yt-dlp and FFmpeg for high-quality downloads and format conversions.",
    technologies: ["Python", "PyQt5", "yt-dlp", "FFmpeg"],
    link: "https://github.com/JaredJomar/Projects/tree/main/VideoDownload",
    screenshots: [
      {
        src: "https://raw.githubusercontent.com/JaredJomar/Projects/main/apps/VideoDownload/img/main.png",
        alt: "Video Download App main window showing format and quality selectors",
        caption: "Download view"
      },
      {
        src: "https://raw.githubusercontent.com/JaredJomar/Projects/main/apps/VideoDownload/img/settings.png",
        alt: "Settings pane for the Video Download App with output and post-processing options",
        caption: "Settings dialog"
      },
    ],
    content: {
      en: {
        summary:
          "PyQt5 desktop app that makes yt-dlp and FFmpeg downloads approachable for non-terminal workflows.",
        problem:
          "yt-dlp is powerful, but remembering flags and post-processing steps adds friction when you just want a quick download or conversion.",
        solution:
          "A GUI wrapper around yt-dlp with FFmpeg post-processing for conversions, keeping the toolchain explicit and the workflow repeatable.",
        features: [
          "Download video or audio using yt-dlp",
          "Select available format and quality options",
          "FFmpeg post-processing for conversion or remuxing",
          "Desktop workflow for repeatable downloads",
          "Simple configuration and output selection",
        ],
        stack: ["Python", "PyQt5", "yt-dlp", "FFmpeg"],
        links: {
          repo: "https://github.com/JaredJomar/Projects/tree/main/VideoDownload",
        },
      },
      es: {
        summary:
          "Aplicación de escritorio en PyQt5 que hace más accesibles las descargas con yt-dlp y la conversión con FFmpeg sin depender de la terminal.",
        problem:
          "yt-dlp es potente, pero recordar flags y pasos de postprocesado agrega fricción cuando solo quieres una descarga rápida o una conversión.",
        solution:
          "Se creó una interfaz gráfica alrededor de yt-dlp con postprocesado en FFmpeg para ofrecer un flujo explícito, repetible y fácil de usar.",
        features: [
          "Descarga video o audio con yt-dlp",
          "Permite elegir formato y calidad entre las opciones disponibles",
          "Aplica postprocesado con FFmpeg para conversión o remux",
          "Ofrece un flujo de escritorio para descargas repetibles",
          "Incluye configuración simple y selección de salida",
        ],
        stack: ["Python", "PyQt5", "yt-dlp", "FFmpeg"],
        links: {
          repo: "https://github.com/JaredJomar/Projects/tree/main/VideoDownload",
        },
      },
    },
  },
  {
    slug: "animeflv-enhancements",
    title: "AnimeFLV Enhancements",
    icon: "fa-tv",
    description:
      "A Tampermonkey script that enhances the AnimeFLV experience by automating video provider selection and adding a 'Page Up' button for improved navigation.",
    technologies: ["JavaScript", "Tampermonkey", "DOM Manipulation"],
    link: "https://github.com/JaredJomar/Projects/tree/main/TampermonkeyProjects/AnimeFLV",
  },
  {
    slug: "disney-plus-enhancements",
    title: "Disney Plus Enhancements",
    icon: "fa-film",
    description:
      "Enhances Disney Plus with features like automatic intro/recap skipping, next episode autoplay, and fullscreen mode automation, all customizable via a settings dialog.",
    technologies: ["JavaScript", "Tampermonkey", "Streaming Platforms"],
    link: "https://github.com/JaredJomar/Projects/tree/main/TampermonkeyProjects/DisneyPlus",
  },
  {
    slug: "fast-search",
    title: "Fast Search",
    icon: "fa-search",
    description:
      "A powerful Tampermonkey script providing quick search shortcuts across 30+ platforms, featuring a modern React-based UI with auto-suggestions and multi-search capabilities.",
    technologies: ["JavaScript", "React", "Tampermonkey"],
    link: "https://github.com/JaredJomar/Projects/tree/main/TampermonkeyProjects/FastSearch",
  },
  {
    slug: "lookmovie-ad-blocker",
    title: "LookMovie Ad Blocker",
    icon: "fa-ban",
    description:
      "Automatically closes ads on LookMovie, removes specific reCAPTCHA divs, and banner ads for an uninterrupted viewing experience.",
    technologies: ["JavaScript", "Tampermonkey", "Ad Blocking"],
    link: "https://github.com/JaredJomar/Projects/tree/main/TampermonkeyProjects/LookMovie",
  },
  {
    slug: "netflix-enhancements",
    title: "Netflix Enhancements",
    icon: "fa-play",
    description:
      "Enhances Netflix with features like automatic skipping of recaps, intros, and outros, fullscreen management, and the ability to hide the games section.",
    technologies: ["JavaScript", "Tampermonkey", "Streaming Platforms"],
    link: "https://github.com/JaredJomar/Projects/tree/main/TampermonkeyProjects/Netflix",
  },
  {
    slug: "auto-click-not-a-robot",
    title: "Auto Click 'I'm not a robot'",
    icon: "fa-robot",
    description:
      "Automatically clicks the 'I'm not a robot' checkbox on various captcha systems, including reCaptcha V2, reCaptcha V2 Enterprise, and hCaptcha.",
    technologies: ["JavaScript", "Tampermonkey", "Browser API"],
    link: "https://github.com/JaredJomar/Projects/tree/main/TampermonkeyProjects/NotARobot",
  },
  {
    slug: "perplexity-ai-enhancements",
    title: "Perplexity AI Enhancements",
    icon: "fa-brain",
    description:
      "A Tampermonkey script that enhances the Perplexity AI chat interface, allowing users to delete threads using keyboard shortcuts for improved workflow.",
    technologies: ["JavaScript", "Tampermonkey", "AI Platforms"],
    link: "https://github.com/JaredJomar/Projects/tree/main/TampermonkeyProjects/Perplexity",
  },
  {
    slug: "prime-video-enhancements",
    title: "Prime Video Enhancements",
    icon: "fa-amazon",
    description:
      "Enhances Amazon Prime Video with features like automatic skipping of recaps and intros, fullscreen management, and ad skipping, all customizable via a settings dialog.",
    technologies: ["JavaScript", "Tampermonkey", "Streaming Platforms"],
    link: "https://github.com/JaredJomar/Projects/tree/main/TampermonkeyProjects/PrimeVideo",
  },
  {
    slug: "serieslan-enhancements",
    title: "Serieslan Enhancements",
    icon: "fa-closed-captioning",
    description:
      "A Tampermonkey script that enhances the Serieslan website by automating video provider selection and improving the user interface with custom styling.",
    technologies: ["JavaScript", "Tampermonkey", "DOM Manipulation"],
    link: "https://github.com/JaredJomar/Projects/tree/main/TampermonkeyProjects/Serieslan",
  },
  {
    slug: "twitch-enhancements",
    title: "Twitch Enhancements",
    icon: "fa-twitch",
    description:
      "A comprehensive Tampermonkey script that enhances Twitch with features like automatic channel point claiming, theater mode, prime reward claiming, and drop claiming.",
    technologies: ["JavaScript", "Tampermonkey", "Twitch API"],
    link: "https://github.com/JaredJomar/Projects/tree/main/TampermonkeyProjects/Twitch",
  },
  {
    slug: "html5-video-player-enhancements",
    title: "HTML5 Video Player Enhancements",
    icon: "fa-play-circle",
    description:
      "A Tampermonkey script that enhances HTML5 video players with playback speed control, keyboard shortcuts, and a speed indicator for improved viewing experience.",
    technologies: ["JavaScript", "Tampermonkey", "HTML5 Video API"],
    link: "https://github.com/JaredJomar/Projects/tree/main/TampermonkeyProjects/VideoPlayer",
  },
  {
    slug: "youtube-enhancements",
    title: "YouTube Enhancements",
    icon: "fa-youtube",
    description:
      "A suite of Tampermonkey scripts that enhance YouTube with features like auto-liking videos, AdBlock ban bypass, scroll control, and customizable settings.",
    technologies: ["JavaScript", "Tampermonkey", "YouTube API"],
    link: "https://github.com/JaredJomar/Projects/tree/main/TampermonkeyProjects/Youtube/YouTube Enchantments",
  },
  {
    slug: "youtube-adblock-ban-bypass",
    title: "YouTube AdBlock Ban Bypass",
    icon: "fa-shield-alt",
    description:
      "A Tampermonkey script that bypasses YouTube's AdBlock detection, maintaining full video functionality without visual artifacts or loss of features.",
    technologies: ["JavaScript", "Tampermonkey", "YouTube API"],
    link: "https://github.com/JaredJomar/Projects/tree/main/TampermonkeyProjects/Youtube/YouTubeAdBlockBanBypass",
  },
]

export const projects: Project[] = projectSeeds.map((seed) => {
  return {
    ...seed,
    collection: getProjectCollection(seed),
    content: mergeProjectContent(seed),
  }
})
