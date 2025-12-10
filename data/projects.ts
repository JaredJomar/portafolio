import type { Project } from "../types/project"

export const projects: Project[] = [
  {
    title: "WalletAlert",
    icon: "fa-wallet",
    description:
      "A smart budgeting companion designed for students. Set weekly and monthly budgets, log expenses, visualize spending trends with charts, and receive alerts before overspending. Features Auth0 authentication and optimistic UI updates.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Vite", "Auth0"],
    link: "https://github.com/uprm-torre/software-engineering-project-walletalert",
  },
  {
    title: "VIC - Virtual Institutional Counselor",
    icon: "fa-robot",
    description:
      "An AI-powered institutional counseling system that provides academic guidance to university students. Built with Python, Streamlit for the frontend and PostgreSQL for the database.",
    technologies: ["Python", "Streamlit", "PostgreSQL", "NLP", "ETL"],
    link: "https://github.com/JaredJomar/VIC-Virtual-Institutional-Counselor",
  },
  {
    title: "Cracking the Crime Code",
    icon: "fa-shield-alt",
    description:
      "A Java application for deciphering hidden messages used by criminal organizations, extracting key information, and planning arrest operations to maximize criminal arrests.",
    technologies: ["Java", "Data Structures", "Algorithms", "Recursion"],
    link: "https://github.com/JaredJomar/Cracking-the-Crime-Code",
  },
  {
    title: "Huffman Coding",
    icon: "fa-compress",
    description:
      "An implementation of the Huffman coding algorithm for data compression, optimizing encoding by assigning shorter codes to more frequently occurring symbols.",
    technologies: ["Java", "Data Structures", "Algorithms", "Binary Trees"],
    link: "https://github.com/JaredJomar/Huffman-Coding",
  },
  {
    title: "Pacman Deluxe",
    icon: "fa-ghost",
    description:
      "An enhanced version of Pacman with advanced features including power-up collections, sorting algorithms, pathfinding for ghost eyes, and a GPS system for locating power-ups.",
    technologies: ["C++", "Game Development", "Algorithms", "OOP"],
    link: "https://github.com/JaredJomar/Pacman-Deluxe",
  },
  {
    title: "Pacman",
    icon: "fa-dot-circle",
    description:
      "A Pacman game implementation with various power-ups, multiple game states, and customizable features including character selection and random ghost spawning.",
    technologies: ["C++", "Game Development", "OOP", "State Pattern"],
    link: "https://github.com/JaredJomar/Pacman",
  },
  {
    title: "Audio Visualizer Simulator",
    icon: "fa-music",
    description:
      "An audio visualization application with multiple visualization modes, volume control, song selection, and a record/replay feature for user interactions.",
    technologies: ["C++", "Audio Processing", "Graphics", "UI Development"],
    link: "https://github.com/JaredJomar/Audio-Visualizer-Simulator-",
  },
  {
    title: "Fractals Project",
    icon: "fa-snowflake",
    description:
      "An interactive fractal visualization application with customizable recursion levels, multiple fractal types, and animations. Features an abstract class hierarchy and polymorphic implementations.",
    technologies: ["C++", "Recursion", "Graphics", "OOP"],
    link: "https://github.com/JaredJomar/Fractals-Project-",
  },
  {
    title: "Spooky Quest",
    icon: "fa-gamepad",
    description:
      "A text-based adventure game featuring multiple areas, enemy battles using Rock-Paper-Scissors mechanics, boss fights with multiple phases, and NPC interactions.",
    technologies: ["C++", "Game Development", "OOP", "State Pattern"],
    link: "https://github.com/JaredJomar/Spooky-Quest",
  },
  {
    title: "Particles System Simulator",
    icon: "fa-atom",
    description:
      "A particle system simulator with features like color toggling, velocity control, particle magnification, and record/replay functionality for user interactions.",
    technologies: ["C++", "Physics Simulation", "Graphics", "User Interaction"],
    link: "https://github.com/JaredJomar/Particles-System-Simulator",
  },
  {
    title: "Archive.org-Downloader",
    icon: "fa-book",
    description:
      "A batch script that simplifies downloading books from Internet Archive. It saves your credentials and default image resolution for easy, repeated use.",
    technologies: ["Batch Scripting", "Python", "Archive.org API"],
    link: "https://github.com/JaredJomar/Projects/tree/main/ArchiveBooksDownloader",
  },
  {
    title: "Note App",
    icon: "fa-sticky-note",
    description:
      "A PyQt5-based note-taking application with features like text editing, file operations, and keyboard shortcuts for efficient note management.",
    technologies: ["Python", "PyQt5", "GUI Development"],
    link: "https://github.com/JaredJomar/Projects/tree/main/NoteApp",
  },
  {
    title: "PDF Tool",
    icon: "fa-file-pdf",
    description:
      "A powerful PDF utility with a modern dark-themed interface offering comprehensive features: combine PDFs, split into pages, extract specific ranges, rotate pages, compress files, and convert to various formats.",
    technologies: ["Python", "PyQt6", "PyPDF2", "PyMuPDF", "pdf2docx"],
    link: "https://github.com/JaredJomar/Projects/tree/main/Pdf_Combiner",
  },
  {
    title: "Video Download App",
    icon: "fa-video",
    description:
      "A PyQt5-based application for downloading videos and audio from YouTube, leveraging yt-dlp and FFmpeg for high-quality downloads and format conversions.",
    technologies: ["Python", "PyQt5", "yt-dlp", "FFmpeg"],
    link: "https://github.com/JaredJomar/Projects/tree/main/VideoDownload",
  },
  {
    title: "AnimeFLV Enhancements",
    icon: "fa-tv",
    description:
      "A Tampermonkey script that enhances the AnimeFLV experience by automating video provider selection and adding a 'Page Up' button for improved navigation.",
    technologies: ["JavaScript", "Tampermonkey", "DOM Manipulation"],
    link: "https://github.com/JaredJomar/Projects/tree/main/TampermonkeyProjects/AnimeFLV",
  },
  {
    title: "Disney Plus Enhancements",
    icon: "fa-film",
    description:
      "Enhances Disney Plus with features like automatic intro/recap skipping, next episode autoplay, and fullscreen mode automation, all customizable via a settings dialog.",
    technologies: ["JavaScript", "Tampermonkey", "Streaming Platforms"],
    link: "https://github.com/JaredJomar/Projects/tree/main/TampermonkeyProjects/DisneyPlus",
  },
  {
    title: "Fast Search",
    icon: "fa-search",
    description:
      "A powerful Tampermonkey script providing quick search shortcuts across 30+ platforms, featuring a modern React-based UI with auto-suggestions and multi-search capabilities.",
    technologies: ["JavaScript", "React", "Tampermonkey"],
    link: "https://github.com/JaredJomar/Projects/tree/main/TampermonkeyProjects/FastSearch",
  },
  {
    title: "LookMovie Ad Blocker",
    icon: "fa-ban",
    description:
      "Automatically closes ads on LookMovie, removes specific reCAPTCHA divs, and banner ads for an uninterrupted viewing experience.",
    technologies: ["JavaScript", "Tampermonkey", "Ad Blocking"],
    link: "https://github.com/JaredJomar/Projects/tree/main/TampermonkeyProjects/LookMovie",
  },
  {
    title: "Netflix Enhancements",
    icon: "fa-play",
    description:
      "Enhances Netflix with features like automatic skipping of recaps, intros, and outros, fullscreen management, and the ability to hide the games section.",
    technologies: ["JavaScript", "Tampermonkey", "Streaming Platforms"],
    link: "https://github.com/JaredJomar/Projects/tree/main/TampermonkeyProjects/Netflix",
  },
  {
    title: "Auto Click 'I'm not a robot'",
    icon: "fa-robot",
    description:
      "Automatically clicks the 'I'm not a robot' checkbox on various captcha systems, including reCaptcha V2, reCaptcha V2 Enterprise, and hCaptcha.",
    technologies: ["JavaScript", "Tampermonkey", "Browser API"],
    link: "https://github.com/JaredJomar/Projects/tree/main/TampermonkeyProjects/NotARobot",
  },
  {
    title: "Perplexity AI Enhancements",
    icon: "fa-brain",
    description:
      "A Tampermonkey script that enhances the Perplexity AI chat interface, allowing users to delete threads using keyboard shortcuts for improved workflow.",
    technologies: ["JavaScript", "Tampermonkey", "AI Platforms"],
    link: "https://github.com/JaredJomar/Projects/tree/main/TampermonkeyProjects/Perplexity",
  },
  {
    title: "Prime Video Enhancements",
    icon: "fa-amazon",
    description:
      "Enhances Amazon Prime Video with features like automatic skipping of recaps and intros, fullscreen management, and ad skipping, all customizable via a settings dialog.",
    technologies: ["JavaScript", "Tampermonkey", "Streaming Platforms"],
    link: "https://github.com/JaredJomar/Projects/tree/main/TampermonkeyProjects/PrimeVideo",
  },
  {
    title: "Serieslan Enhancements",
    icon: "fa-closed-captioning",
    description:
      "A Tampermonkey script that enhances the Serieslan website by automating video provider selection and improving the user interface with custom styling.",
    technologies: ["JavaScript", "Tampermonkey", "DOM Manipulation"],
    link: "https://github.com/JaredJomar/Projects/tree/main/TampermonkeyProjects/Serieslan",
  },
  {
    title: "Twitch Enhancements",
    icon: "fa-twitch",
    description:
      "A comprehensive Tampermonkey script that enhances Twitch with features like automatic channel point claiming, theater mode, prime reward claiming, and drop claiming.",
    technologies: ["JavaScript", "Tampermonkey", "Twitch API"],
    link: "https://github.com/JaredJomar/Projects/tree/main/TampermonkeyProjects/Twitch",
  },
  {
    title: "HTML5 Video Player Enhancements",
    icon: "fa-play-circle",
    description:
      "A Tampermonkey script that enhances HTML5 video players with playback speed control, keyboard shortcuts, and a speed indicator for improved viewing experience.",
    technologies: ["JavaScript", "Tampermonkey", "HTML5 Video API"],
    link: "https://github.com/JaredJomar/Projects/tree/main/TampermonkeyProjects/VideoPlayer",
  },
  {
    title: "YouTube Enhancements",
    icon: "fa-youtube",
    description:
      "A suite of Tampermonkey scripts that enhance YouTube with features like auto-liking videos, AdBlock ban bypass, scroll control, and customizable settings.",
    technologies: ["JavaScript", "Tampermonkey", "YouTube API"],
    link: "https://github.com/JaredJomar/Projects/tree/main/TampermonkeyProjects/Youtube/YouTube Enchantments",
  },
  {
    title: "YouTube AdBlock Ban Bypass",
    icon: "fa-shield-alt",
    description:
      "A Tampermonkey script that bypasses YouTube's AdBlock detection, maintaining full video functionality without visual artifacts or loss of features.",
    technologies: ["JavaScript", "Tampermonkey", "YouTube API"],
    link: "https://github.com/JaredJomar/Projects/tree/main/TampermonkeyProjects/Youtube/YouTubeAdBlockBanBypass",
  },
]

