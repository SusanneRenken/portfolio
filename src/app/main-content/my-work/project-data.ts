import { Project } from './project.model';

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: 'Join',
    aboutEn:
      'With Join, task management becomes a breeze – inspired by the Kanban system, I bring structure to your daily workflow. Thanks to its intuitive drag-and-drop feature, you can quickly create tasks, rearrange them, and effortlessly assign users and categories. This makes teamwork both more efficient and creatively engaging.',
    aboutDe:
      'Mit Join wird Aufgabenverwaltung zum Kinderspiel – inspiriert vom Kanban-System bringe ich Struktur in den Arbeitsalltag. Dank intuitiver Drag-and-Drop-Funktion kannst du Aufgaben schnell erstellen, neu anordnen und ganz einfach Benutzer sowie Kategorien zuweisen. So wird die Teamarbeit effizienter und gleichzeitig kreativer.',
    techStack: 'JavaScript | HTML | CSS | Firebase',
    image: 'join.jpg',
    repositoryUrl: 'https://github.com/SusanneRenken/join/',
    liveDemoUrl: 'https://join.susanne-renken.com',
  },
  {
    id: 2,
    name: 'Sharkie',
    aboutEn:
      'With Sharkie, you dive into an exciting underwater adventure – steer a little shark, collect coins, and use poison. With the Bubble and Fin Attack, you strategically overcome dangerous foes and face the mighty final boss.',
    aboutDe:
      'Mit Sharkie tauchst du in ein spannendes Unterwasser-Abenteuer ein – steuere einen kleinen Hai, sammle Münzen und nutze Gift. Mit dem Bubble- und Fin Attack meisterst du gezielt gefährliche Gegner und stellst dich dem mächtigen Endboss.',
    techStack: 'JavaScript | HTML | CSS | Firebase',
    image: 'sharkie.jpg',
    repositoryUrl: 'https://github.com/SusanneRenken/sharkie/',
    liveDemoUrl: 'https://sharkie.susanne-renken.com',
  },
  {
    id: 3,
    name: 'DA Bubble',
    aboutEn:
      'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
    aboutDe:
      'Diese App ist eine Slack-Klon-App. Sie revolutioniert die Teamkommunikation und Zusammenarbeit mit ihrer intuitiven Benutzeroberfläche, Echtzeitnachrichten und einer robusten Kanalorganisation.',
    techStack: 'Angular | TypeScript | Firebase',
    image: 'dabubble.png',
    repositoryUrl: 'https://github.com/SusanneRenken/DA-Bubble/',
    liveDemoUrl: 'https://dabubble.susanne-renken.com/access',
  },
  {
    id: 4,
    name: 'KanMind',
    aboutEn:
      'With KanMind, task and board management happens reliably behind the scenes. The backend provides a clear and structured Kanban logic – from creating boards to assigning tasks and collaborating through comments. Designed as a solid foundation for modern frontend applications.',
    aboutDe:
      'Mit KanMind läuft Aufgaben- und Board-Management zuverlässig im Hintergrund. Das Backend bildet eine klare und strukturierte Kanban-Logik ab – von der Erstellung von Boards über die Zuweisung von Tasks bis zur Zusammenarbeit per Kommentare. Entwickelt als stabile Grundlage für moderne Frontend-Anwendungen.',
    techStack: 'Python | Django | DRF | Token Authentication | SQLite',
    image: 'kanmind.png',
    repositoryUrl: 'https://github.com/SusanneRenken/kanmind/',
    liveDemoUrl: 'https://kanmind.susanne-renken.com',
  },
  {
    id: 5,
    name: 'Coderr',
    aboutEn:
      'Coderr is the backend of a freelance platform and provides a structured API for users, profiles, offers, orders and reviews. Common marketplace workflows are clearly mapped and designed as a solid foundation for modern frontend applications.',
    aboutDe:
      'Coderr ist das Backend einer Freelancer-Plattform und stellt eine strukturierte API für Nutzer, Profile, Angebote, Aufträge und Bewertungen bereit. Typische Marktplatz-Workflows werden klar abgebildet und bilden eine stabile Grundlage für moderne Frontend-Anwendungen.',
    techStack: 'Python | Django | DRF | PostgreSQL | Docker | JWTAuthentication',
    image: 'coderr.png',
    repositoryUrl: 'https://github.com/SusanneRenken/coderr/',
    liveDemoUrl: 'https://coderr.susanne-renken.com',
  }
];
