import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(
    private languageService: LanguageService,
    private router: Router
  ) {}

  isMenuOpen = false;
  currentLang = this.languageService.getCurrentLanguage();
  activeSection: string = '';

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

  


  // @HostListener('document:scroll', [])
  // onScroll(): void {
  //   console.log(
  //     'Scroll-Event ausgelöst! Aktuelle Scroll-Position:',
  //     window.scrollY
  //   );
  // }

  // @HostListener('window:scroll', [])
  // onScroll(): void {
  //   let sections = document.querySelectorAll('section');
  //   let scrollY = window.scrollY + window.innerHeight / 2;

  //   sections.forEach((section: Element) => {
  //     let offsetTop = section.getBoundingClientRect().top + window.scrollY;
  //     let offsetBottom = offsetTop + section.clientHeight;
  //     if (scrollY >= offsetTop && scrollY <= offsetBottom) {
  //       this.activeSection = section.getAttribute('id') || '';
  //     }
  //   });
  // }
}
