import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, OnChanges, SimpleChanges, Output } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-overlay',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit, OnChanges {
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

  public contentStyle = { transform: 'translateY(100vh)' };
  public isClosing = false;
  public internalShow: boolean = false;

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.translate.onLangChange.subscribe(event => {
      this.updateAboutText(event.lang);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isOpen']) {
      if (changes['isOpen'].currentValue) {
        this.internalShow = true;
        this.isClosing = false;
        this.contentStyle.transform = 'translateY(100vh)';
        setTimeout(() => {
          this.contentStyle.transform = 'translateY(0)';
        }, 50);
      }
    }
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
    if (!this.isClosing) {
      this.isClosing = true;
      this.internalShow = false;
      this.contentStyle.transform = 'translateY(100vh)';
    }
  }

  onTransitionEnd(event: TransitionEvent) {
    if (event.propertyName === 'transform' && this.isClosing) {
      this.overlayClosed.emit();
    }
  }
}
