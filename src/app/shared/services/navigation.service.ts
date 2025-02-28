import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(
    private router: Router,
    private languageService: LanguageService
  ) {}

  navigate(targetId?: string) {
    if (this.router.url === '/') {
      if (targetId) {
        this.scrollToId(targetId);
      }
    } else {
      const currentLang = this.languageService.getCurrentLanguage();
      this.router.navigateByUrl('/').then(() => {
        if (targetId) {
          setTimeout(() => {
            this.scrollToId(targetId);
          }, 100);
          this.languageService.changeLanguage(currentLang);
        }
      });
    }
  }

  scrollToId(id: string) {
    const element = document.getElementById(id);
    if (!element) {
      return;
    }

    if (window.innerWidth >= 768) {
      const mainContent = document.querySelector(
        'app-main-content'
      ) as HTMLElement;
      if (!mainContent) {
        return;
      }

      const rect = element.getBoundingClientRect();
      const containerRect = mainContent.getBoundingClientRect();
      const distanceToContainerLeft = rect.left - containerRect.left;
      const scrollLeftPos = mainContent.scrollLeft + distanceToContainerLeft;

      mainContent.scrollTo({ left: scrollLeftPos, behavior: 'smooth' });
    } else {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
