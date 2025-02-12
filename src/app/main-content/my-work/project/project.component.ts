import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent implements OnInit {
  @Input() project: any;
  @Input() isActive: boolean = false;
  @Output() toggleRequest = new EventEmitter<void>();

  isDesktop = false;
  aboutLanguage = '';

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.isDesktop = window.innerWidth >= 576;

    window.addEventListener('resize', () => {
      this.isDesktop = window.innerWidth >= 576;
    });

    this.updateAboutText(this.translate.currentLang);

    this.translate.onLangChange.subscribe(event => {
      this.updateAboutText(event.lang);
    });
  }

  updateAboutText(lang: string) {
    this.aboutLanguage = lang === 'de'
      ? this.project.aboutDe
      : this.project.aboutEn;
  }

  onToggle() {
    this.toggleRequest.emit();
  }
  
}
