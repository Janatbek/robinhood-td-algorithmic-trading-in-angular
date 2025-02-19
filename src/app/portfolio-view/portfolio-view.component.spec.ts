import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PortfolioViewComponent } from './portfolio-view.component';

describe('PortfolioViewComponent', () => {
  let component: PortfolioViewComponent;
  let fixture: ComponentFixture<PortfolioViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('createshould create', () => {
    expect(component).toBeTruthy();
  });
});
