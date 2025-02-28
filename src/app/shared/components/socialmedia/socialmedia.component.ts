import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-socialmedia',
  standalone: true,
  imports: [],
  templateUrl: './socialmedia.component.html',
  styleUrl: './socialmedia.component.scss',
})
export class SocialmediaComponent {
  constructor(private languageService: LanguageService) {}

  currentLang = this.languageService.getCurrentLanguage();

  switchLanguage(lang: string) {
    this.languageService.changeLanguage(lang);
    this.currentLang = lang;
  }
}
