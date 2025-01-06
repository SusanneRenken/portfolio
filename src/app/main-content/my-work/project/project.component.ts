import { Component } from '@angular/core';
import { ProjectDataService } from './project.service';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
 projects: {
    id: number;
    name: string;
    about: string;
    technologies: string;
    image: string;
  }[] = [];

  constructor(private ProjectDataService: ProjectDataService) {}

  ngOnInit() {
    this.projects = this.ProjectDataService.getProject();
  }
}
