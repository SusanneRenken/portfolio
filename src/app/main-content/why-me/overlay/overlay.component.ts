import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-overlay',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {
  private _ability: any;

  @Input() set ability(value: any) {
    this._ability = value;
    if (value) {
      this.updateAboutText(this.translate.currentLang);
    }
  }

  get ability() {
    return this._ability;
  }

  @Input() isOpen = false;
  @Output() overlayClosed = new EventEmitter<void>();

  headlineLanguage = '';
  aboutLanguage = '';

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.translate.onLangChange.subscribe(event => {
      this.updateAboutText(event.lang);
    });
  }

  updateAboutText(lang: string) {
    if (!this._ability) { return; }
    this.headlineLanguage = (lang === 'de')
      ? this._ability.headlineDe
      : this._ability.headlineEN;

    this.aboutLanguage = (lang === 'de')
      ? this._ability.aboutDe
      : this._ability.aboutEn;
  }

  toggleOverlay() {
    this.overlayClosed.emit();
  }
}
