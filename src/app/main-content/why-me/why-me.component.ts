import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { OverlayComponent } from './overlay/overlay.component';
import { ABILITIES } from './ability.data';
import { CAREER_ENTRIES } from './career.data';
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
  careerEntries = CAREER_ENTRIES;

  private readonly ABOUT_HINT_KEY = 'hasSeenAboutHint';
  private readonly CAREER_ACCORDION_BREAKPOINT = '(max-width: 1439.98px)';
  hasSeenAboutHint: boolean = false;
  activeCareerId: number | null = null;
  pendingCareerId: number | null = null;
  collapsingCareerId: number | null = null;
  isCareerTransitioning: boolean = false;

  activeAbility: number = 1;
  overlayOpen: boolean = false;

  constructor(private navigationService: NavigationService) {}

  ngOnInit(): void {
    this.activeCareerId = this.careerEntries.length > 0 ? this.careerEntries[0].id : null;
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

  toggleCareer(id: number) {
    if (!this.isAccordionViewport()) {
      return;
    }

    if (this.isCareerTransitioning) {
      this.pendingCareerId = this.pendingCareerId === id ? null : id;
      return;
    }

    if (this.activeCareerId === id) {
      this.startCareerCollapse(null);
      return;
    }

    if (this.activeCareerId === null) {
      this.activeCareerId = id;
      return;
    }

    this.startCareerCollapse(id);
  }

  onCareerListTransitionEnd(event: TransitionEvent, careerId: number) {
    if (!this.isCareerTransitioning) {
      return;
    }

    if (event.propertyName !== 'max-height') {
      return;
    }

    if (this.collapsingCareerId !== careerId) {
      return;
    }

    this.isCareerTransitioning = false;
    this.collapsingCareerId = null;

    if (this.pendingCareerId !== null) {
      this.activeCareerId = this.pendingCareerId;
      this.pendingCareerId = null;
    }
  }

  private startCareerCollapse(nextCareerId: number | null) {
    if (this.activeCareerId === null) {
      this.pendingCareerId = nextCareerId;
      return;
    }

    this.pendingCareerId = nextCareerId;
    this.collapsingCareerId = this.activeCareerId;
    this.isCareerTransitioning = true;
    this.activeCareerId = null;
  }

  private isAccordionViewport() {
    if (typeof window === 'undefined') {
      return false;
    }

    return window.matchMedia(this.CAREER_ACCORDION_BREAKPOINT).matches;
  }

  get selectedAbility() {
    return this.abilities.find((a) => a.id === this.activeAbility);
  }

  onOverlayClosed() {
    this.overlayOpen = false;
  }
}
