import { Component, Input, Output, EventEmitter } from '@angular/core';
import type { Project } from '../project.model';
import { ProjectComponent } from '../project/project.component';
import { AdditionalProjectsComponent } from '../additional-projects/additional-projects.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-project-section',
  standalone: true,
  imports: [ProjectComponent, AdditionalProjectsComponent, TranslateModule],
  templateUrl: './project-section.component.html',
  styleUrl: './project-section.component.scss',
})
export class ProjectSectionComponent {
  @Input() title!: string;
  @Input() expandedProjectId: number | null = null;

  _projects: Project[] = [];
  activeProject!: Project;
  normalProjects: Project[] = [];
  additionalProjects: Project[] = [];
  showAdditional: boolean = false;

  @Input() set projects(value: Project[]) {
    this._projects = value;

    if (this.title === 'Backend') {
      this.normalProjects = value.filter((p) => p.id <= 5);
      this.additionalProjects = value.filter((p) => p.id >= 6);
      this.activeProject = this.normalProjects[0]!;
    } else {
      this.normalProjects = value;
      this.additionalProjects = [];
      this.activeProject = value[0]!;
    }

    this.showAdditional = false;
  }

  get projects(): Project[] {
    return this._projects;
  }

  @Output() toggle = new EventEmitter<number>();

  selectProject(project: Project): void {
    this.showAdditional = false;
    this.activeProject = project;
  }

  selectAdditional(): void {
    this.showAdditional = true;
  }

  toggleMobile(projectId: number): void {
    this.toggle.emit(projectId);
  }
}
