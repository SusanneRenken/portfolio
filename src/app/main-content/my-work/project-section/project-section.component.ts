import { Component, Input, Output, EventEmitter } from '@angular/core';
import type { Project } from '../project.model';
import { ProjectComponent } from '../project/project.component';

@Component({
  selector: 'app-project-section',
  standalone: true,
  imports: [ProjectComponent],
  templateUrl: './project-section.component.html',
  styleUrl: './project-section.component.scss',
})
export class ProjectSectionComponent {
  @Input() title!: string;
  @Input() expandedProjectId: number | null = null;

  _projects: Project[] = [];
  activeProject: Project | null = null;

  @Input() set projects(value: Project[]) {
    this._projects = value;
    this.activeProject = value[0] ?? null;
  }

  get projects(): Project[] {
    return this._projects;
  }

  @Output() toggle = new EventEmitter<number>();

  selectProject(project: Project): void {
    this.activeProject = project;
  }

  toggleMobile(projectId: number): void {
    this.toggle.emit(projectId);
  }
}
