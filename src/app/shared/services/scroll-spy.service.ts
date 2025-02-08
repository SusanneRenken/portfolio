import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollSpyService {
  private activeSectionSubject = new BehaviorSubject<string>('');
  public activeSection$: Observable<string> = this.activeSectionSubject.asObservable();

  setActiveSection(sectionId: string): void {
    this.activeSectionSubject.next(sectionId);
  }
}