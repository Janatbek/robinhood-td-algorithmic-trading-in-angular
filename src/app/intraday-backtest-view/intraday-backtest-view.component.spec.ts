import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IntradayBacktestViewComponent } from './intraday-backtest-view.component';

describe('IntradayBacktestViewComponent', () => {
  let component: IntradayBacktestViewComponent;
  let fixture: ComponentFixture<IntradayBacktestViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IntradayBacktestViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntradayBacktestViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
