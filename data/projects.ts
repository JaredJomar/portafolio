import type {
  Project,
  ProjectContent,
  ProjectLocaleContent,
} from "../types/project"

type ProjectSeed = Omit<Project, "content"> & {
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
    `Implementacion enfocada para ${seed.title}`,
    "Flujo principal documentado en el repositorio",
    `Stack principal: ${seed.technologies.slice(0, 4).join(", ")}`,
    "Estructura lista para continuar iterando",
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
    summary: `Caso de estudio de ${seed.title}: implementacion practica orientada a resultados.`,
    problem: `Se necesitaba una solucion clara para el flujo principal de ${seed.title}.`,
    solution: `${seed.title} se implemento con alcance definido, funcionalidades concretas y un repositorio publico para evolucionar el proyecto.`,
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
  return {
    en: mergeLocaleContent(defaults.en, seed.content?.en),
    es: mergeLocaleContent(defaults.es, seed.content?.es),
  }
}

const projectSeeds: ProjectSeed[] = [
  {
    slug: "walletalert",
    featured: true,
    title: "WalletAlert",
    icon: "fa-wallet",
    description:
      "A smart budgeting companion designed for students. Set weekly and monthly budgets, log expenses, visualize spending trends with charts, and receive alerts before overspending. Features Auth0 authentication and optimistic UI updates.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Vite", "Auth0"],
    link: "https://github.com/uprm-torre/software-engineering-project-walletalert",
    content: {
      en: {
        summary:
          "Budgeting web app for students: set budgets, log expenses, and get alerts before you overspend.",
        problem:
          "Students want visibility into day-to-day spending, but tracking across notes or spreadsheets is slow and easy to abandon.",
        solution:
          "A React app with an optimistic UX for logging expenses, chart-based insights, and budget alerts, secured with Auth0 and backed by a Node/Express API and MongoDB.",
        features: [
          "Weekly and monthly budgets",
          "Quick expense logging and editing",
          "Spending breakdowns and trend charts",
          "Budget threshold alerts (before overspending)",
          "Auth0 authentication and protected routes",
          "Optimistic UI updates for snappy interactions",
        ],
        stack: ["React", "Node.js", "MongoDB", "Express", "Vite", "Auth0"],
        links: {
          repo: "https://github.com/uprm-torre/software-engineering-project-walletalert",
        },
      },
      es: {
        summary:
          "App web de presupuesto para estudiantes: define presupuestos, registra gastos y recibe alertas antes de pasarte.",
        problem:
          "Los estudiantes quieren visibilidad del gasto diario, pero llevar el control en notas o hojas de calculo es lento y se abandona facil.",
        solution:
          "App en React con UX agil (optimistic UI) para registrar gastos, ver insights con graficas y recibir alertas; autenticacion con Auth0 y API Node/Express con MongoDB.",
        features: [
          "Presupuestos semanales y mensuales",
          "Registro y edicion rapida de gastos",
          "Desglose y graficas de tendencia",
          "Alertas por umbral de presupuesto",
          "Autenticacion Auth0 y rutas protegidas",
          "Actualizaciones optimistas para interacciones rapidas",
        ],
        stack: ["React", "Node.js", "MongoDB", "Express", "Vite", "Auth0"],
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
          "Streamlit-based virtual institutional counselor that helps students navigate academic information through an AI-assisted interface.",
        problem:
          "Academic policies, requirements, and resources are spread across sources, so students need quick and consistent guidance.",
        solution:
          "A Python + Streamlit app backed by PostgreSQL, using NLP to interpret requests and an ETL flow to structure institutional data for retrieval.",
        features: [
          "Streamlit web UI for guidance sessions",
          "NLP layer to classify and route requests",
          "ETL pipeline to ingest and normalize institutional data",
          "PostgreSQL storage for structured program and rule data",
          "Reproducible local setup for demos and iteration",
        ],
        stack: ["Python", "Streamlit", "PostgreSQL", "NLP", "ETL"],
        links: {
          repo: "https://github.com/JaredJomar/VIC-Virtual-Institutional-Counselor",
        },
      },
      es: {
        summary:
          "Consejero institucional virtual en Streamlit que ayuda a estudiantes a navegar informacion academica con una interfaz asistida por IA.",
        problem:
          "Politicas, requisitos y recursos academicos estan distribuidos en varias fuentes, asi que se necesita orientacion rapida y consistente.",
        solution:
          "App en Python + Streamlit con base de datos PostgreSQL, usando NLP para interpretar solicitudes y un flujo ETL para estructurar datos institucionales para consulta.",
        features: [
          "UI web en Streamlit para sesiones de orientacion",
          "Capa NLP para clasificar y enrutar solicitudes",
          "Pipeline ETL para ingestacion y normalizacion de datos",
          "Almacenamiento en PostgreSQL para datos estructurados",
          "Setup reproducible para demos e iteracion",
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
    content: {
      en: {
        summary:
          "Desktop PDF utility that consolidates common PDF tasks into one fast, offline app.",
        problem:
          "Everyday PDF operations (merge, split, extract, rotate, compress, convert) often require bouncing between multiple tools.",
        solution:
          "A PyQt6 desktop app that wraps proven PDF libraries into a single workflow, with clear inputs and predictable results.",
        features: [
          "Merge multiple PDFs into one",
          "Split PDFs into individual pages",
          "Extract specific page ranges",
          "Rotate pages for correction",
          "Compress PDFs to reduce file size",
          "Convert PDFs to other formats (where supported)",
        ],
        stack: ["Python", "PyQt6", "PyPDF2", "PyMuPDF", "pdf2docx"],
        links: {
          repo: "https://github.com/JaredJomar/Projects/tree/main/Pdf_Combiner",
        },
      },
      es: {
        summary:
          "Utilidad de escritorio para PDFs que concentra tareas comunes en una sola app offline.",
        problem:
          "Operaciones diarias de PDF (unir, dividir, extraer, rotar, comprimir, convertir) suelen requerir varias herramientas.",
        solution:
          "App de escritorio en PyQt6 que integra librerias de PDF en un flujo unico, con entradas claras y resultados predecibles.",
        features: [
          "Unir varios PDFs en uno",
          "Dividir PDFs en paginas individuales",
          "Extraer rangos de paginas",
          "Rotar paginas para correccion",
          "Comprimir PDFs para reducir tamano",
          "Convertir PDFs a otros formatos (segun soporte)",
        ],
        stack: ["Python", "PyQt6", "PyPDF2", "PyMuPDF", "pdf2docx"],
        links: {
          repo: "https://github.com/JaredJomar/Projects/tree/main/Pdf_Combiner",
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
          "App de escritorio en PyQt5 que facilita descargas con yt-dlp y conversion con FFmpeg sin depender de la terminal.",
        problem:
          "yt-dlp es potente, pero recordar flags y pasos de post-procesado agrega friccion cuando solo quieres una descarga rapida o una conversion.",
        solution:
          "GUI alrededor de yt-dlp con post-procesado en FFmpeg para conversiones, con un flujo explicito y repetible.",
        features: [
          "Descargar video o audio con yt-dlp",
          "Seleccionar opciones disponibles de formato y calidad",
          "Post-procesado con FFmpeg para conversion o remux",
          "Flujo de escritorio para descargas repetibles",
          "Configuracion simple y seleccion de salida",
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
    content: mergeProjectContent(seed),
  }
})
