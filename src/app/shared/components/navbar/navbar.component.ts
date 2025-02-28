import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';
import { Router, RouterModule } from '@angular/router';
import { ScrollSpyService } from '../../services/scroll-spy.service';
import { SocialmediaComponent } from '../socialmedia/socialmedia.component';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule, SocialmediaComponent],
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
    private scrollSpyService: ScrollSpyService,
    private navigationService: NavigationService
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
    this.navigationService.navigate(targetId);
  }
}
