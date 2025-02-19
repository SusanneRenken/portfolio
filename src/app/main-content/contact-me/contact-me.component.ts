import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Hinzugefügt!
import { ContactFormComponent } from './contact-form/contact-form.component';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../shared/services/language.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule, ContactFormComponent, RouterModule, TranslateModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss',
})
export class ContactMeComponent {
  feedbackMessage: string | null = null;
  feedbackSuccess: boolean = true;


  onFeedback(event: { success: boolean; key: string }) {
    this.feedbackMessage = event.key;
    this.feedbackSuccess = event.success;
    setTimeout(() => {
      this.feedbackMessage = null;
    }, 2500);
  }
}
