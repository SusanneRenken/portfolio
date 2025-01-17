import { Component } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { PROJECTS } from './project-data';

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [ProjectComponent],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.scss',
})
export class MyWorkComponent {
  projects = PROJECTS;
}
