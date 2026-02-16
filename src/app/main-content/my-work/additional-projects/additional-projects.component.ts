import { Component, Input } from '@angular/core';
import type { Project } from '../project.model';

@Component({
  selector: 'app-additional-projects',
  standalone: true,
  imports: [],
  templateUrl: './additional-projects.component.html',
  styleUrl: './additional-projects.component.scss'
})
export class AdditionalProjectsComponent {
  @Input() projects: Project[] = [];
  @Input() isExpanded: boolean = false;


  
}
