import { Component } from '@angular/core';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../shared/services/language.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [ContactFormComponent, RouterModule, TranslateModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})

export class ContactMeComponent {
  constructor(private languageService: LanguageService) {}
  currentLang = this.languageService.getCurrentLanguage();


  switchLanguage(lang: string) {
    this.languageService.changeLanguage(lang);    
    this.currentLang = lang;
  }

}
