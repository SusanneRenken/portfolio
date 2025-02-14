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
      'With Join, task management becomes a breeze – inspired by the Kanban system, I bring structure to your daily workflow. Thanks to its intuitive drag-and-drop feature, you can quickly create tasks, rearrange them, and effortlessly assign users and categories. This makes teamwork both more efficient and creatively engaging.',
    aboutDe:
      'Mit Join wird Aufgabenverwaltung zum Kinderspiel – inspiriert vom Kanban-System bringe ich Struktur in den Arbeitsalltag. Dank intuitiver Drag-and-Drop-Funktion kannst du Aufgaben schnell erstellen, neu anordnen und ganz einfach Benutzer sowie Kategorien zuweisen. So wird die Teamarbeit effizienter und gleichzeitig kreativer.',
    techStack: 'JavaScript | HTML | CSS | Firebase',
    image: 'join.jpg',
    repositoryUrl: 'https://github.com/SusanneRenken/join/',
    liveDemoUrl:
      'https://join.susanne-renken.com',
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
    liveDemoUrl:
      'https://sharkie.susanne-renken.com',
  },
];
