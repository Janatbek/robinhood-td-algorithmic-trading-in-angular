import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MlTimeperiodsComponent } from './ml-timeperiods.component';

describe('MlTimeperiodsComponent', () => {
  let component: MlTimeperiodsComponent;
  let fixture: ComponentFixture<MlTimeperiodsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MlTimeperiodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlTimeperiodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
