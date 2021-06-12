import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DetermineHedgeComponent } from './determine-hedge.component';

describe('DetermineHedgeComponent', () => {
  let component: DetermineHedgeComponent;
  let fixture: ComponentFixture<DetermineHedgeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetermineHedgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetermineHedgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
