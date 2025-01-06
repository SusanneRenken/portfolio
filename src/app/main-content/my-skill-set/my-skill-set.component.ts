import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skill-set',
  standalone: true,
  imports: [],
  templateUrl: './my-skill-set.component.html',
  styleUrl: './my-skill-set.component.scss',
})
export class MySkillSetComponent {

  skillIconsList = [
    {
      url: 'assets/img/angular.svg',
      name: 'Angular',
    },
    {
      url: 'assets/img/typescript.svg',
      name: 'TypeScript',
    },
    {
      url: 'assets/img/javascript.svg',
      name: 'JavaScript',
    },
    {
      url: 'assets/img/html.svg',
      name: 'HTML',
    },
    {
      url: 'assets/img/css.svg',
      name: 'CSS',
    },
    {
      url: 'assets/img/api.svg',
      name: 'Rest-Api',
    },
    {
      url: 'assets/img/firebase.svg',
      name: 'Firebase',
    },
    {
      url: 'assets/img/git.svg',
      name: 'GIT',
    },
    {
      url: 'assets/img/scrum.svg',
      name: 'Scrum',
    },
    {
      url: 'assets/img/materialdesign.svg',
      name: 'Material design',
    },
    {
      url: 'assets/img/challengeme.svg',
      name: 'Challenge me',
    },
  ];
}
