import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet ,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';


  constructor(
    private route: ActivatedRoute,
    private translate: TranslateService
  ) {
    this.route.queryParams.subscribe(params => {
      const lang = params['lang'];
      if (lang) {
        this.translate.use(lang);
      } else {
        this.translate.use('en');
      }
    });
  }

}
