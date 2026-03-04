import {
  Component,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  HostListener,
} from '@angular/core';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { WhyMeComponent } from './why-me/why-me.component';
import { MySkillSetComponent } from './my-skill-set/my-skill-set.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { ScrollSpyService } from '../shared/services/scroll-spy.service';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    LandingPageComponent,
    WhyMeComponent,
    MySkillSetComponent,
    MyWorkComponent,
    ContactMeComponent,
    FooterComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent implements AfterViewInit, OnDestroy {
  private onScrollBound: any;
  private lastWheelTime: number | null = null;
  private readonly baseMultiplier = 2.4;
  private readonly speedScale = 0.35;
  private readonly maxSpeedFactor = 3.5;

  constructor(
    private elementRef: ElementRef,
    private scrollSpyService: ScrollSpyService
  ) {}

  @HostListener('wheel', ['$event'])
  onWheel(event: WheelEvent): void {
    if (window.innerWidth > 767.98 && event.deltaY !== 0) {
      event.preventDefault();

      const nativeElement = this.elementRef.nativeElement as HTMLElement;
      const maxScrollLeft = nativeElement.scrollWidth - nativeElement.clientWidth;
      let deltaY = event.deltaY;

      if (event.deltaMode === 1) {
        deltaY *= 16;
      } else if (event.deltaMode === 2) {
        deltaY *= window.innerHeight;
      }

      const now = performance.now();
      const elapsedTime = this.lastWheelTime
        ? Math.max(now - this.lastWheelTime, 8)
        : 16;
      this.lastWheelTime = now;

      const wheelSpeed = Math.abs(deltaY) / elapsedTime;
      const speedFactor = Math.min(
        1 + wheelSpeed * this.speedScale,
        this.maxSpeedFactor
      );
      const viewportFactor = Math.min(Math.max(window.innerWidth / 1366, 0.7), 1.6);

      let delta = deltaY * viewportFactor * this.baseMultiplier * speedFactor;
      const maxStepPerEvent = nativeElement.clientWidth * 0.35;
      delta = Math.sign(delta) * Math.min(Math.abs(delta), maxStepPerEvent);

      const nextScrollLeft = nativeElement.scrollLeft + delta;
      nativeElement.scrollLeft = Math.min(
        Math.max(nextScrollLeft, 0),
        Math.max(maxScrollLeft, 0)
      );
    }
  }

  ngAfterViewInit(): void {
    this.onScrollBound = this.onScroll.bind(this);
    const nativeElement = this.elementRef.nativeElement as HTMLElement;
    nativeElement.addEventListener('scroll', this.onScrollBound);
  }

  ngOnDestroy(): void {
    const nativeElement = this.elementRef.nativeElement as HTMLElement;
    nativeElement.removeEventListener('scroll', this.onScrollBound);
    this.lastWheelTime = null;
  }

  onScroll(): void {
    const nativeElement = this.elementRef.nativeElement as HTMLElement;
    const sections = nativeElement.querySelectorAll(
      '[id]'
    ) as NodeListOf<HTMLElement>;
    const sectionsArray = Array.from(sections);
    let activeSectionId = '';

    if (window.innerWidth > 767.98) {
      let candidate: HTMLElement | null = null;
      let candidateLeft = Infinity;
      const threshold = window.innerWidth / 2;
      for (const section of sectionsArray) {
        const rect = section.getBoundingClientRect();
        if (rect.left >= 0 && rect.left <= threshold) {
          if (rect.left < candidateLeft) {
            candidateLeft = rect.left;
            candidate = section;
          }
        }
      }
      if (candidate !== null) {
        activeSectionId = candidate.id;
      }
    } else if (window.innerWidth > 575.98) {
      let candidate: HTMLElement | null = null;
      let candidateTop = Infinity;
      const threshold = window.innerHeight / 2;
      for (const section of sectionsArray) {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= threshold) {
          if (rect.top < candidateTop) {
            candidateTop = rect.top;
            candidate = section;
          }
        }
      }
      if (candidate !== null) {
        activeSectionId = candidate.id;
      }
    } else {
      activeSectionId = '';
    }

    if (activeSectionId) {
      this.scrollSpyService.setActiveSection(activeSectionId);
    }
  }
}
