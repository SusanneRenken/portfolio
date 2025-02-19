import { Component, OnInit, OnDestroy } from '@angular/core';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { SafeHtml } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../shared/services/language.service';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [FooterComponent, CommonModule, RouterModule],
  template: `
    <div class="legals" [innerHTML]="legalHtml"></div>
    <app-footer></app-footer>
  `,
  styleUrls: ['./legal-notice.component.scss'],
})
export class LegalNoticeComponent implements OnInit, OnDestroy {
  legalHtml: SafeHtml = '';
  private langChangeSub!: Subscription;

  constructor(
    private http: HttpClient,
    private languageService: LanguageService,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    const currentLang = this.languageService.getCurrentLanguage() || 'en';
    this.loadLegalNotice(currentLang);

    this.langChangeSub = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.loadLegalNotice(event.lang);
    });
  }

  ngOnDestroy() {
    if (this.langChangeSub) {
      this.langChangeSub.unsubscribe();
    }
  }

  loadLegalNotice(lang: string) {
    this.http
      .get(`assets/legal-documents/legal-notice.${lang}.html`, {
        responseType: 'text',
      })
      .subscribe((html) => {
        this.legalHtml = html;
      });
  }
}
