import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { OverlayComponent } from './overlay/overlay.component';
import { ABILITIES } from './ability.data';
import { NavigationService } from '../../shared/services/navigation.service';

@Component({
  selector: 'app-why-me',
  standalone: true,
  imports: [TranslateModule, OverlayComponent],
  templateUrl: './why-me.component.html',
  styleUrl: './why-me.component.scss',
})
export class WhyMeComponent implements OnInit {
  abilities = ABILITIES;

  private readonly ABOUT_HINT_KEY = 'hasSeenAboutHint';
  hasSeenAboutHint: boolean = false;

  activeAbility: number = 1;
  overlayOpen: boolean = false;

  constructor(private navigationService: NavigationService) {}

  ngOnInit(): void {
    this.hasSeenAboutHint = localStorage.getItem(this.ABOUT_HINT_KEY) !== null;
  }

  goToNextSection() {
    this.navigationService.navigate('my_skill_set');
  }

  openActiveOverlay(id: number) {
    this.activeAbility = id;
    this.overlayOpen = true;
    localStorage.setItem(this.ABOUT_HINT_KEY, '1');
    this.hasSeenAboutHint = true;
  }

  get selectedAbility() {
    return this.abilities.find((a) => a.id === this.activeAbility);
  }

  onOverlayClosed() {
    this.overlayOpen = false;
  }
}
