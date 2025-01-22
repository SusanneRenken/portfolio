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
  @Input() isExpanded: boolean = false;
  @Output() toggleRequest = new EventEmitter<void>();

  isDesktop = false;

  ngOnInit() {
    // Einmalige Abfrage beim Laden:
    this.isDesktop = window.innerWidth >= 576;  // oder 1200, je nach Wunsch

    // Willst du auch bei Fenster-Resize reagieren? Dann so:
    window.addEventListener('resize', () => {
      this.isDesktop = window.innerWidth >= 576;
    });
  }

  onToggle() {
    this.toggleRequest.emit();
  }

  constructor() {} 
}
