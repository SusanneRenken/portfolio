import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { SafeHtml } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../shared/services/language.service';

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
export class LegalNoticeComponent implements OnInit {
  legalHtml: SafeHtml = '';

  constructor(
    private http: HttpClient,
    private languageService: LanguageService
  ) {}

  ngOnInit() {
    const currentLang = this.languageService.getCurrentLanguage() || 'en';
    this.loadPrivacyPolicy(currentLang);
  }

  loadPrivacyPolicy(lang: string) {
    this.http
      .get(`assets/legal-documents/legal-notice.${lang}.html`, {
        responseType: 'text',
      })
      .subscribe((html) => {
        this.legalHtml = html;
      });
  }
}
