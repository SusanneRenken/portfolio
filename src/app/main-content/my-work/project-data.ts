import { Project } from './project.model';

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: 'Join',
    aboutEn:
      'Join is a web-based task management application following the Kanban principle, developed as a team project. The focus was on a clear structure, dynamic UI updates, and an intuitive drag-and-drop interaction. Tasks can be created, categorized, and assigned to team members.',
    aboutDe:
      'Join ist eine webbasierte Aufgabenverwaltung nach dem Kanban-Prinzip, entwickelt im Team. Der Fokus lag auf einer klaren Struktur, dynamischen UI-Updates und einer intuitiven Drag-and-Drop-Interaktion. Aufgaben können erstellt, kategorisiert und Teammitgliedern zugewiesen werden.',
    techStack: 'JavaScript | HTML | CSS | Firebase',
    image: 'join.jpg',
    repositoryUrl: 'https://github.com/SusanneRenken/join/',
    liveDemoUrl: 'https://join.susanne-renken.com',
  },
  {
    id: 2,
    name: 'Sharkie',
    aboutEn:
      'Sharkie is a browser-based 2D game built using object-oriented programming in JavaScript and the HTML5 canvas element. The focus was on collision detection, animation handling, and structuring complex game states. A Firebase-based leaderboard stores high scores persistently.',
    aboutDe:
      'Sharkie ist ein browserbasiertes 2D-Spiel, umgesetzt mit objektorientierter Programmierung in JavaScript und dem HTML5-Canvas-Element. Im Fokus standen Kollisionslogik, Animationssteuerung und die Strukturierung komplexer Spielzustände. Ein Firebase-basiertes Leaderboard speichert Highscores dauerhaft.',
    techStack: 'JavaScript | HTML | CSS | Firebase',
    image: 'sharkie.jpg',
    repositoryUrl: 'https://github.com/SusanneRenken/sharkie/',
    liveDemoUrl: 'https://sharkie.susanne-renken.com',
  },
  {
    id: 3,
    name: 'DA Bubble',
    aboutEn:
      'DA Bubble is a team-developed chat application built with Angular and Firebase. The focus was on a modular component architecture, real-time communication using RxJS and Observables, and structured channel and user management. The goal was to create a scalable and performant solution for collaborative team communication.',
    aboutDe:
      'DA Bubble ist eine im Team entwickelte Chat-Anwendung mit Angular und Firebase. Im Fokus standen eine modulare Komponentenarchitektur, Echtzeitkommunikation mittels RxJS und Observables sowie eine strukturierte Kanal- und Nutzerverwaltung. Ziel war eine skalierbare und performante Lösung für kollaborative Teamkommunikation.',
    techStack: 'Angular | TypeScript | Firebase',
    image: 'dabubble.png',
    repositoryUrl: 'https://github.com/SusanneRenken/DA-Bubble/',
    liveDemoUrl: 'https://dabubble.susanne-renken.com/access',
  },
  {
    id: 4,
    name: 'KanMind',
    aboutEn:
      'KanMind provides the technical foundation for structured task and board management. In the backend, I implemented a clearly defined Kanban logic with a well-structured architecture and clean data models. A stable API ensures reliable interaction with the frontend.',
    aboutDe:
      'KanMind bildet die technische Grundlage für strukturiertes Aufgaben- und Board-Management. Im Backend entwickle ich eine klar definierte Kanban-Logik mit durchdachter Architektur und sauberen Datenstrukturen. Eine stabile API sorgt für die zuverlässige Zusammenarbeit mit dem Frontend.',
    techStack: 'Python | Django | DRF | Token Authentication | PostgreSQL',
    image: 'kanmind.png',
    repositoryUrl: 'https://github.com/SusanneRenken/kanmind/',
    liveDemoUrl: 'https://kanmind.susanne-renken.com',
  },
  {
    id: 5,
    name: 'Coderr',
    aboutEn:
      'Coderr is the backend of a freelancer marketplace built around a well-structured REST API. Users, profiles, offers, orders and reviews are clearly modeled and connected through typical marketplace workflows. Authentication, role management and data validation provide a stable and extensible foundation for modern frontend applications.',
    aboutDe:
      'Coderr ist das Backend einer Freelancer-Plattform mit klar strukturierter REST-API. Nutzer, Profile, Angebote, Aufträge und Bewertungen werden sauber modelliert und in typischen Marktplatz-Workflows miteinander verknüpft. Authentifizierung, Rollenlogik und Datenvalidierung sorgen für eine stabile und erweiterbare Grundlage moderner Frontend-Anwendungen.',
    techStack: 'Python | Django | DRF | PostgreSQL | Docker | JWTAuthentication',
    image: 'coderr.png',
    repositoryUrl: 'https://github.com/SusanneRenken/coderr/',
    liveDemoUrl: 'https://coderr.susanne-renken.com',
  },
  {
    id: 6,
    name: 'Quizly',
    aboutEn:
      'Quizly is an AI-powered backend that automatically generates quizzes from YouTube videos. A modular pipeline orchestrates video download, transcription (Whisper), and AI-based question generation (Gemini).',
    aboutDe:
      'Quizly ist ein KI-gestütztes Backend zur automatischen Generierung von Quizzen aus YouTube-Videos. Über eine klar strukturierte API wird eine Pipeline aus Video-Download, Transkription (Whisper) und KI-basierter Fragengenerierung (Gemini) orchestriert.',
    techStack: 'DRF | FFmpeg | Whisper | Gemini API',
    image: 'quizly.png',
    repositoryUrl: 'https://github.com/SusanneRenken/quizly/',
    liveDemoUrl: '',
  },
  {
    id: 7,
    name: 'Videoflix',
    aboutEn:
      'Videoflix is the backend of a video streaming platform featuring automated video processing and HLS streaming. Uploaded videos are transcoded via background workers into multiple resolutions and delivered as HLS streams.',
    aboutDe:
      'Videoflix ist das Backend einer Video-Streaming-Plattform mit HLS-Streaming und automatischer Videoverarbeitung. Hochgeladene Videos werden per Background Worker transkodiert, in mehrere Auflösungen konvertiert und als HLS-Streams bereitgestellt.',
    techStack: 'Redis | django-rq | FFmpeg | HLS | Docker',
    image: 'videoflix.png',
    repositoryUrl: 'https://github.com/SusanneRenken/videoflix/',
    liveDemoUrl: '',
  }
];
