import { Component } from '@angular/core';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [ContactFormComponent, RouterModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {

}
