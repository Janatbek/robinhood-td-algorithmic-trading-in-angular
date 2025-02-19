import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DaytradeScoreBoardComponent } from './daytrade-score-board.component';

describe('DaytradeScoreBoardComponent', () => {
  let component: DaytradeScoreBoardComponent;
  let fixture: ComponentFixture<DaytradeScoreBoardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DaytradeScoreBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaytradeScoreBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
