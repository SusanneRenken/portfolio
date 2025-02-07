import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private languageService: LanguageService, private router:Router ) {}

  isMenuOpen = false;

  currentLang = this.languageService.getCurrentLanguage();

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  switchLanguage(lang: string) {
    this.languageService.changeLanguage(lang);
    this.toggleMenu();
  }

  navigate(targetId?: string) {
    if (this.router.url === '/') {
      if (targetId) {
        this.scrollToId(targetId);
      }
    } else {
      this.currentLang = this.languageService.getCurrentLanguage();
      this.router.navigateByUrl('/').then(() => {
        if (targetId) {
          setTimeout(() => {
            this.scrollToId(targetId);
          }, 100);
          this.languageService.changeLanguage(this.currentLang);
        }
      });
    }
  }

  scrollToId(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }


}
