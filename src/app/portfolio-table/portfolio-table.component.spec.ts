import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PortfolioTableComponent } from './portfolio-table.component';

describe('PortfolioTableComponent', () => {
  let component: PortfolioTableComponent;
  let fixture: ComponentFixture<PortfolioTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('createshould create', () => {
    expect(component).toBeTruthy();
  });
});
