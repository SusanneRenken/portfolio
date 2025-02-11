import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { OverlayComponent } from './overlay/overlay.component';
import { ABILITIES } from './ability.data';

@Component({
  selector: 'app-why-me',
  standalone: true,
  imports: [TranslateModule, OverlayComponent],
  templateUrl: './why-me.component.html',
  styleUrl: './why-me.component.scss'
})
export class WhyMeComponent {
  abilities = ABILITIES;
  activeAbility: number = 1;
  overlayOpen = false;

  openActiveOverlay(id: number) {
    this.activeAbility = id;
    this.overlayOpen = true;  
  }

  get selectedAbility() {    
    return this.abilities.find(a => a.id === this.activeAbility);
  }

  onOverlayClosed() {
    this.overlayOpen = false;
  }

}
