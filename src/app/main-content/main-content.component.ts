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
  private isThrottled = false;
  private readonly throttleDuration = 500;

  constructor(
    private elementRef: ElementRef,
    private scrollSpyService: ScrollSpyService
  ) {}

  @HostListener('wheel', ['$event'])
  onWheel(event: WheelEvent): void {
    if (this.isThrottled) {
      return;
    }

    if (window.innerWidth > 767.98 && event.deltaY !== 0) {
      event.preventDefault();

      const fixedStep = 1000;
      this.elementRef.nativeElement.scrollLeft +=
        event.deltaY > 0 ? fixedStep : -fixedStep;

      this.isThrottled = true;
      setTimeout(() => {
        this.isThrottled = false;
      }, this.throttleDuration);
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
