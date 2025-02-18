import { HttpClient } from '@angular/common/http';
import { Component, inject, Output, EventEmitter } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, TranslateModule, RouterModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  http = inject(HttpClient);

  @Output() feedback = new EventEmitter<{ success: boolean; key: string }>();

  contactData = {
    name: '',
    email: '',
    message: '',
  };

  isAccepted: boolean = false;
  mailTest = false;

  constructor() {}

  post = {
    endPoint: 'https://susanne-renken.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData)).subscribe({
        next: (response) => {
          ngForm.resetForm();
          this.isAccepted = false;
          this.feedback.emit({ success: true, key: 'CONTACT_FEEDBACK_SUCCESS' });
        },
        error: (error) => {
          console.error(error);
          this.feedback.emit({ success: false, key: 'CONTACT_FEEDBACK_ERROR' });
        },
        complete: () => console.info('send post complete'),
      });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
      this.isAccepted = false;
      this.feedback.emit({ success: true, key: 'CONTACT_FEEDBACK_SUCCESS' });
    }
  }

  onAccept() {
    this.isAccepted = !this.isAccepted;
  }
}
