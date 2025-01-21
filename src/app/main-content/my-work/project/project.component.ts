import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input() project: any;
  @Input() isExpanded: boolean = false;    // Erhält Info vom Parent
  @Output() toggleRequest = new EventEmitter<void>(); // Um den Parent zu informieren

  onToggle() {
    this.toggleRequest.emit();
  }

  constructor() {}

 
}
