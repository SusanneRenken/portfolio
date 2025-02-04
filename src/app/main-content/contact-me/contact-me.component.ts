import { Component } from '@angular/core';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../shared/services/language.service';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [ContactFormComponent, RouterModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})

export class ContactMeComponent {
  constructor(private languageService: LanguageService) {}

  switchLanguageToGerman() {
    this.languageService.changeLanguage('de');
  }

  switchLanguageToEnglish() {
    this.languageService.changeLanguage('en');
  }
}
