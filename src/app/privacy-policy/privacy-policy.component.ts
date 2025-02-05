import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { SafeHtml } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../shared/services/language.service';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [FooterComponent, CommonModule, RouterModule],
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss'],
})
export class PrivacyPolicyComponent implements OnInit {
  privacyHtml: SafeHtml = '';

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
      .get(`assets/legal-documents/privacy-policy.en.html`, {
        responseType: 'text',
      })
      .subscribe((html) => {
        this.privacyHtml = html;
      });
  }
}
