import { Component } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { PROJECTS } from './project-data';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [ProjectComponent, TranslateModule],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.scss',
})
export class MyWorkComponent {
  projects = PROJECTS;
  activeProjectId: number | null = null;

  toggleProjectExpansion(projectId: number) {
    if (this.activeProjectId === projectId) {
      this.activeProjectId = null;
    } else {
      this.activeProjectId = projectId;
    }
  }
}