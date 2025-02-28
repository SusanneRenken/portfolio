import { Component } from '@angular/core';
import { NavigationService } from '../../shared/services/navigation.service';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  constructor(private navigationService: NavigationService) {}

  goToNextSection() {
    this.navigationService.navigate('why_me');
  }
}
