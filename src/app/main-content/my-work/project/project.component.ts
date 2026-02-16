import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import type { Project } from '../project.model';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent implements OnInit, OnChanges {
  @Input() project!: Project;
  @Input() isExpanded: boolean = false;
  @Output() toggleRequest = new EventEmitter<void>();

  isDesktop = false;
  aboutLanguage: string = '';

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.isDesktop = window.innerWidth >= 576;

    window.addEventListener('resize', () => {
      this.isDesktop = window.innerWidth >= 576;
    });

    this.updateAboutText(this.translate.currentLang);

    this.translate.onLangChange.subscribe((event) => {
      this.updateAboutText(event.lang);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['project'] && changes['project'].currentValue) {
      this.updateAboutText(this.translate.currentLang);
    }
  }

  updateAboutText(lang: string) {
    this.aboutLanguage =
      lang === 'de' ? this.project?.aboutDe : this.project?.aboutEn;
  }

  onToggle() {
    this.toggleRequest.emit();
  }
}
