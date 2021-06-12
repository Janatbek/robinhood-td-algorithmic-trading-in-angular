import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ResearchViewComponent } from './research-view.component';

describe('ResearchViewComponent', () => {
  let component: ResearchViewComponent;
  let fixture: ComponentFixture<ResearchViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('createshould create', () => {
    expect(component).toBeTruthy();
  });
});
