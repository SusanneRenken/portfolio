import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalProjectsComponent } from './additional-projects.component';

describe('AdditionalProjectsComponent', () => {
  let component: AdditionalProjectsComponent;
  let fixture: ComponentFixture<AdditionalProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdditionalProjectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdditionalProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
