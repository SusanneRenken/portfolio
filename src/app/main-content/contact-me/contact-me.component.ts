import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NavigationService } from '../../shared/services/navigation.service';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule, ContactFormComponent, RouterModule, TranslateModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss',
})
export class ContactMeComponent implements OnInit {
  feedbackMessage: string | null = null;
  feedbackSuccess: boolean = true;
  actualYear: number = new Date().getFullYear();

  constructor(private navigationService: NavigationService) {}

  ngOnInit() {
    this.actualYear = new Date().getFullYear();
  }

  goToNextSection() {
    this.navigationService.navigate('landing_page');
  }

  onFeedback(event: { success: boolean; key: string }) {
    this.feedbackMessage = event.key;
    this.feedbackSuccess = event.success;
    setTimeout(() => {
      this.feedbackMessage = null;
    }, 2500);
  }
}
