export interface Projects {
  id: number;
  name: string;
  about: string;
  techStack: string;
  image: string;
  repositoryUrl: string;
  liveDemoUrl: string;
}

export const PROJECTS: Projects[] = [
  {
    id: 1,
    name: 'Join',
    about:
      'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
    techStack: 'JavaScript | HTML | CSS | Firebase',
    image: 'join.png',
    repositoryUrl: 'https://github.com/SusanneRenken/join',
    liveDemoUrl:
      'https://susanne-renken.developerakademie.net/FERTIG/m10_join/',
  },
  {
    id: 2,
    name: 'Sharkie',
    about:
      'A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.',
    techStack: 'JavaScript | HTML | CSS | Firebase',
    image: 'join.png',
    repositoryUrl: 'https://github.com/SusanneRenken/join',
    liveDemoUrl:
      'https://susanne-renken.developerakademie.net/FERTIG/m10_join/',
  },
];
