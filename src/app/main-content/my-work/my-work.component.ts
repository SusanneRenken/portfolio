import { Component, OnInit } from '@angular/core';
import { ProjectSectionComponent } from './project-section/project-section.component';
import type { Project } from './project.model';
import { PROJECTS } from './project-data';
import { TranslateModule } from '@ngx-translate/core';
import { NavigationService } from '../../shared/services/navigation.service';

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [TranslateModule, ProjectSectionComponent],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.scss',
})
export class MyWorkComponent implements OnInit {
  projects: Project[] = PROJECTS;

  frontendProjects: Project[] = [];
  backendProjects: Project[] = [];

  expandedProjectId: number | null = null;

  constructor(private navigationService: NavigationService) {}

  ngOnInit(): void {
    this.frontendProjects = this.projects.filter((p) => p.id >= 1 && p.id <= 3);
    this.backendProjects = this.projects.filter((p) => p.id >= 4 && p.id <= 6);

  }

  goToNextSection() {
    this.navigationService.navigate('contact_me');
  }

  toggleProjectExpansion(projectId: number) {
    if (this.expandedProjectId === projectId) {
      this.expandedProjectId = null;
    } else {
      this.expandedProjectId = projectId;
    }
  }
}
