import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectDataService {
  private projects = [
    {
      id: 1,
      name: 'Join',
      about: 'Task manager inspired ba the Kanban System.',
      technologies: 'JavaScript | HTML | CSS | Firebase',
      image: 'assets/img/located-default.svg',
    },
    {
      id: 2,
      name: 'Sharkie',
      about: 'Little game based on object-oriented approach.',
      technologies: 'JavaScript | HTML | CSS | Firebase',
      image: 'assets/img/located-hover.svg',
    },
  ];

  constructor() {}

  getProject(): {
    id: number;
    name: string;
    about: string;
    technologies: string;
    image: string;
  }[] {
    return this.projects;
  }
}
