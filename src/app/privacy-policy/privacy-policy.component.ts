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
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [FooterComponent, CommonModule, RouterModule],
  template: `
    <div class="legal-gap"></div>
    <div class="legals" [innerHTML]="privacyHtml"></div>
    <app-footer></app-footer>
  `,
  styleUrls: ['./privacy-policy.component.scss'],
})
export class PrivacyPolicyComponent implements OnInit, OnDestroy {
  privacyHtml: SafeHtml = '';
  private langChangeSub!: Subscription;

  constructor(
    private http: HttpClient,
    private languageService: LanguageService,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    const currentLang = this.languageService.getCurrentLanguage() || 'en';
    this.loadPrivacyPolicy(currentLang);

    this.langChangeSub = this.translate.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        this.loadPrivacyPolicy(event.lang);
      }
    );
  }

  ngOnDestroy() {
    if (this.langChangeSub) {
      this.langChangeSub.unsubscribe();
    }
  }

  loadPrivacyPolicy(lang: string) {
    this.http
      .get(`assets/legal-documents/privacy-policy.${lang}.html`, {
        responseType: 'text',
      })
      .subscribe((html) => {
        this.privacyHtml = html;
      });
  }
}
