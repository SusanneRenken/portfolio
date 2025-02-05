export interface Projects {
  id: number;
  name: string;
  aboutEn: string;
  aboutDe: string;
  techStack: string;
  image: string;
  repositoryUrl: string;
  liveDemoUrl: string;
}

export const PROJECTS: Projects[] = [
  {
    id: 1,
    name: 'Join',
    aboutEn:
      'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
    aboutDe:
      'Aufgabenverwaltung inspiriert vom Kanban System. Erstelle und organisiere Aufgaben mit Drag-and-Drop-Funktionen, weise Benutzer und Kategorien zu.',
    techStack: 'JavaScript | HTML | CSS | Firebase',
    image: 'join.jpg',
    repositoryUrl: 'https://github.com/SusanneRenken/join/',
    liveDemoUrl:
      'https://susanne-renken.developerakademie.net/FERTIG/m10_join/',
  },
  {
    id: 2,
    name: 'Sharkie',
    aboutEn:
      'A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.',
    aboutDe:
      'Ein einfaches Jump-and-Run-Spiel basierend auf einem objektorientierten Ansatz. Hilf Sharkie Münzen und Giftflaschen zu finden, um gegen den Schwertwal zu kämpfen.',
    techStack: 'JavaScript | HTML | CSS | Firebase',
    image: 'sharkie.jpg',
    repositoryUrl: 'https://github.com/SusanneRenken/sharkie/',
    liveDemoUrl:
      'https://susanne-renken.developerakademie.net/FERTIG/m12_sharkie/index.html',
  },
];
