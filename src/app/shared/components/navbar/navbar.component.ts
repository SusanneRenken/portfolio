import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';
import { Router, RouterModule } from '@angular/router';
import { ScrollSpyService } from '../../services/scroll-spy.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isMenuOpen = false;
  isClosing = false;
  currentLang = this.languageService.getCurrentLanguage();
  activeSection: string = '';

  constructor(
    private languageService: LanguageService,
    private router: Router,
    private scrollSpyService: ScrollSpyService
  ) {}

  ngOnInit(): void {
    this.scrollSpyService.activeSection$.subscribe((section) => {
      this.activeSection = section;
    });
  }

  toggleMenu() {
    if (!this.isMenuOpen && !this.isClosing) {
      this.isMenuOpen = true;
    } else if (this.isMenuOpen && !this.isClosing) {
      this.isClosing = true;
      setTimeout(() => {
        this.isMenuOpen = false;
        this.isClosing = false;
      }, 500);
    }
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
