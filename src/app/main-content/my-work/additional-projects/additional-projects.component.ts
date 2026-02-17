import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import type { Project } from '../project.model';

@Component({
  selector: 'app-additional-projects',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './additional-projects.component.html',
  styleUrl: './additional-projects.component.scss',
})
export class AdditionalProjectsComponent implements OnInit {
  @Input() projects: Project[] = [];
  @Input() isExpanded: boolean = false;

  @Output() toggleRequest = new EventEmitter<void>();

  isDesktop = false;
  currentLang: string = '';

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.isDesktop = window.innerWidth >= 576;

    window.addEventListener('resize', () => {
      this.isDesktop = window.innerWidth >= 576;
    });

    this.currentLang = this.translate.currentLang;

    this.translate.onLangChange.subscribe((event) => {
      this.currentLang = event.lang;
    });
  }

  getAboutText(project: Project): string {
    return this.currentLang === 'de' ? project.aboutDe : project.aboutEn;
  }

  onToggle() {
    this.toggleRequest.emit();
  }
}
